import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ItemsContextProvider from './Context/Itemscontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ItemsContextProvider>
    <App />
    </ItemsContextProvider>
)
