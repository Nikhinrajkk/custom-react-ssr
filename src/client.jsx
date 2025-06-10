import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

try {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }
  
  console.log('Starting hydration...');
  hydrateRoot(root, (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
  console.log('Hydration complete');
} catch (error) {
  console.error('Hydration failed:', error);
}