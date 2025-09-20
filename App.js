import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello from JSX.</h1>;

// React Component
// Class based Component - OLD
// Functional Component - NEW (Some function which return some peices of JSX code or bunch of React element)
// For writiing functional component, we can use normal function and as well as arrow function
const HeadingComponent = function () {
  return <h1>Namaste React from functional Component</h1>;
};
const FooterComponent = () => <h1>Footer</h1>;
// Component Composition is bunding one component into another compentent.
const BodyComponent = () => (
  <div>
    <HeadingComponent />
    {/* Adding react element in react component */}
    <h1>
      If the component is returning single line then no need of return
      statement.
    </h1>
    <h2>{100 + 100}</h2>
    {jsxHeading}

    {/* All the way are same in calling functional component */}
    {FooterComponent()}
    <FooterComponent />
    <FooterComponent></FooterComponent>
  </div>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
// Rendering the React Element
// reactRoot.render(jsxHeading);
// Redning the React component
reactRoot.render(<BodyComponent />);
