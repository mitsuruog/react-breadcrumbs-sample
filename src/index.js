import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'
import App from './App';

ReactDOM.render(
  <BreadcrumbsProvider>
    <Router>
      <App />
    </Router>
  </BreadcrumbsProvider>,
  document.getElementById('root')
);
