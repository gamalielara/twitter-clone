import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker, rest } = require("./mocks/browser");

// Make the `worker` and `rest` references available globally,
// so they can be accessed in both runtime and test suites.
(window as any).msw = { worker, rest };

// eslint-disable-next-line @typescript-eslint/no-var-requires
worker.start({
    serviceWorker: {
        // Points to the custom location of the Service Worker file.
        url: "./mockServiceWorker.js",
    },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
