import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello from JSX.</h1>;
console.log(jsxHeading);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
reactRoot.render(jsxHeading);
