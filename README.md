# React SSR Application

A custom React Server-Side Rendering (SSR) application built from scratch using Express.js and React.

## Features

- Server-Side Rendering (SSR) with React
- Client-side hydration
- React Router for navigation
- Webpack configuration for both client and server
- Express.js server
- Interactive components (Counter and Todo List)
- State management with React hooks
- Local storage integration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Nikhinrajkk/custom-react-ssr.git
cd custom-react-ssr
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run build && npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
my-ssr/
├── public/              # Static files and client bundle
├── src/                 # Source files
│   ├── components/      # React components
│   │   ├── Counter.jsx  # Counter component
│   │   └── TodoList.jsx # Todo List component
│   ├── App.jsx         # Main App component
│   ├── client.jsx      # Client entry point
│   └── server.jsx      # Server entry point
├── webpack.client.js   # Webpack config for client
├── webpack.server.js   # Webpack config for server
└── server.js           # Express server
```

## Available Scripts

- `npm run build`: Build both client and server bundles
- `npm run build:client`: Build only the client bundle
- `npm run build:server`: Build only the server bundle
- `npm start`: Start the production server

## Features in Detail

### Counter Component
- Increment/Decrement functionality
- Reset button
- Last updated timestamp
- Document title updates

### Todo List Component
- Add new todos
- Toggle todo completion
- Delete todos
- Local storage persistence
- Real-time updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 