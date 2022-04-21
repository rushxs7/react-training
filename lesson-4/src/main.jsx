import React from 'react'
import ReactDOM from 'react-dom/client'

function Header() {
  return (
    <header>
      <nav>
        <img src="/react-logo.png" width="80px" />
        <h1>Reasons I'm excited to learn React.</h1>
      </nav>
    </header>
  )
}

function ListOfReasons() {
  return (
    <ol>
      <li>The</li>
      <li>Fucking</li>
      <li>Job</li>
      <li>Requires</li>
      <li>It</li>
    </ol>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        &copy; 2022. Rushil Ramautar Development. All rights reserved.
      </div>
    </footer>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Header />
      <ListOfReasons />
      <Footer />
    </div>
  </React.StrictMode>
)
