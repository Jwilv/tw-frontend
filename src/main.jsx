import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <AppRouter />
  </BrowserRouter>
)
