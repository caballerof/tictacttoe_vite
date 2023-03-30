import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProviderState from './context/ProviderState';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderState>
      <App />
    </ProviderState>
  </React.StrictMode>
);
