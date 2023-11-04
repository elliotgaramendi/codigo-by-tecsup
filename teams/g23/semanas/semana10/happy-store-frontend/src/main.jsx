import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './state/context/CartContext.jsx';
import { ProductProvider } from './state/context/ProductContext.jsx';
import { store } from './state/redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>,
);