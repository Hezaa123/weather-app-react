import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const domNode = document.getElementById('root');

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}