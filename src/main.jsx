import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contextprovider } from './context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contextprovider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Contextprovider>
)
