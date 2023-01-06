import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import './index.scss';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>,
);
