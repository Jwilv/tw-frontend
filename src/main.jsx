import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import "./index.scss"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider >
    <BrowserRouter >
      <AppRouter />
    </BrowserRouter>
  </Provider>

)
