import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  routes() {
    // API Prefix
    this.namespace = 'api';

    // API Endpoints
    this.get('/users', () => {
      const users = [
        { id: 1, name: 'Victor Badaró' },
        { id: 2, name: 'Miryam Santana' },
        { id: 3, name: 'Lívia Rodrigues' },
        { id: 4, name: 'Valdir Xavier' }
      ];

      return users;
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);