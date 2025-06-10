const express = require('express');
const path = require('path');
const { renderApp } = require('./dist/server');
const assets = require('./public/assets.json');

const cssLinksFromAssets = (assets) => {
  const css = assets.entrypoints?.main?.assets?.css || [];
  return css.map(asset => `<link rel="stylesheet" href="${asset}">`).join('');
};

const jsScriptTagsFromAssets = (assets, ...extra) => {
  const js = assets.client.js || [];

  console.log(assets, ...extra, js);

  return js.map(asset => `<script src="${asset}" ${extra.join(' ')} defer></script>`).join('');
};

const app = express();

// Serve static files
app.use('/static', express.static(path.resolve(__dirname, 'public')));

// Handle all routes with React Router
app.use((req, res) => {
  // Skip if the request is for a static file
  if (req.path.startsWith('/static/')) {
    return res.status(404).send('Not found');
  }

  try {
    console.log(`Handling request for: ${req.method} ${req.path}`);
    const { html, context } = renderApp(req);

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React SSR App</title>
          ${cssLinksFromAssets(assets)}
        </head>
        <body>
          <div id="root">${html}</div>
          ${jsScriptTagsFromAssets(assets, 'defer')}          
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error rendering app:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));