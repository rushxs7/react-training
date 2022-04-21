import React from 'react'
import ReactDOM from 'react-dom/client'
function Navbar() { 
  return(
    <nav>
      <h1>My Website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Logo() {
  return (
    <img src="react-logo.png" width="80px" />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Logo />
      <Navbar />
    </div>
  </React.StrictMode>
)
