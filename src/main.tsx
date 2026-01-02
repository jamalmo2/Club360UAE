/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import { CurrencyProvider } from './contexts/CurrencyContext'
import App from './App.tsx'

// Copyright notice (development-friendly)
if (typeof window !== 'undefined') {
  console.log('%c© 2026 Club360 UAE. All Rights Reserved.', 'color: #D91E5C; font-size: 12px;');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1 style="color: red;">Application Error</h1>
      <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px;">${String(error)}</pre>
    </div>
  `;
}
