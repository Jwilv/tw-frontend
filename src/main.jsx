import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import "./index.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <AppRouter />
  </BrowserRouter>
)
