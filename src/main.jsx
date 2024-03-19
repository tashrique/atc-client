import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './contexts/UserContext.jsx'
import CartContext from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <CartContext>
        <App />
      </CartContext>
    </UserContext>
  </React.StrictMode>,
)
