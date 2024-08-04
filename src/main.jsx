import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PG from './test/PG.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PG></PG> */}
    <LoginPage></LoginPage>
    
  </React.StrictMode>,
)
