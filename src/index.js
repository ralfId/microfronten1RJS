import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



window.renderMfe1 = (containerId, history) => {
  const root = createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
  serviceWorker.unregister();
};

window.unmountMfe1 = containerId => {
  const root = createRoot(document.getElementById(containerId));
  root.unmount(containerId);
};

if (!document.getElementById('Mfe1-container')) {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
  serviceWorker.unregister();
}
