import React from 'react'
import ReactDOM from 'react-dom'

const navbar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

// ReactDOM.createRoot(document.querySelector("#root"))
//   .render(
//     navbar
//   )

// Thought Experiment: Why do we use render instead of append?
const rootElement = document.querySelector("#root")
// rootElement.append(JSON.stringify(navbar))
// the browser sees the JSX as a simple Javascript object. When we use render, the javascript object is 
ReactDOM.createRoot(rootElement).render(navbar)