import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));

window.renderMfe1 = (containerId, history) => {
root.render(<App history={history} />);

  //serviceWorker.unregister();
};

window.unmountMfe1 = containerId => {
  root.unmount(containerId);
};

if (!document.getElementById('Mfe1-container')) {
  root.render(<App />);
  //serviceWorker.unregister();
}
