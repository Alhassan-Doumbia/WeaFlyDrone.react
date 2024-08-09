import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PG from './test/PG.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <AppRoutes/>
    </Router>    
    {/* <PG></PG> */}
  </React.StrictMode>,
)
