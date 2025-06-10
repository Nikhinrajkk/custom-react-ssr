import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function renderApp(req) {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  return {
    html: markup,
    context: {}
  };
}
