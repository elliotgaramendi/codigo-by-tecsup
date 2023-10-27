import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
