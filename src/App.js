import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
// Rendering the React Element
// reactRoot.render(jsxHeading);
// Redning the React component
reactRoot.render(<AppLayout />);
