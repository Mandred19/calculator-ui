import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './locales/index';
import ThemeContextProvider from './Providers/ThemeContext.provider';
import LocaleContextProvider from './Providers/LocaleContext.provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <LocaleContextProvider>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </LocaleContextProvider>
  </React.StrictMode>
);

reportWebVitals();
