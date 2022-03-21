import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    user: Model,
    product: Model
  },

  seeds(server) {
    server.db.loadData({
      users: [
        { id: 1, name: 'Victor Badaró' },
        { id: 2, name: 'Miryam Santana' },
        { id: 3, name: 'Lívia Rodrigues' },
        { id: 4, name: 'Valdir Xavier' }
      ],

      products: [
        { id: 1, description: 'Rice' },
        { id: 2, description: 'Beans' },
        { id: 3, description: 'Soap' },
        { id: 4, description: 'Bread' }
      ]
    });
  },

  routes() {
    // API Prefix
    this.namespace = 'api';

    // API Endpoints
    this.get('/users', () => this.schema.all('user'));
    this.get('/products', () => this.schema.all('product'));
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);