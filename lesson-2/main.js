// Challenge append a classified h1 element with textContent to the root element.
// const h1 = document.createElement("h1")
// h1.textContent = "This is some text."
// h1.className = "header"
// document.querySelector("#root").append(h1)

// This react code does the same as the Javascript code above
// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.querySelector("#root"));

// a small note would be that we cannot use the "class" attribute in react components
// we have to use the "className" attribute

// we can also just put an element inside of a variable and use it later
// const element = <h1 className="">This is a header component</h1>
// console.log(element)
// ReactDOM.render(element, document.querySelector("#root"))
// when we log the element to the console we can see that the element is nothing more than a simple javascript object

// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "",
//         "children": "This is a header component"
//     },
//     "_owner": null,
//     "_store": {}
// }

// with JSX we can only return a single parent element. The line below is not supported
// ReactDOM.render(<div></div><div></div>, document.querySelector("#root"));
// we can wrap it inside a div, which is a single element

// const element = (
//     <div>
//         <h1 className="header">This is another header component.</h1>
//     </div>
// )
// ReactDOM.render(element, document.querySelector("#root"))

// challenge create a navbar with content

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

ReactDOM.render(navbar, document.querySelector("#root"))
