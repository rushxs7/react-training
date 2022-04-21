import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  </React.StrictMode>
)
