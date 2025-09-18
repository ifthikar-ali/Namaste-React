const reactHeading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, reactHeading),
  React.createElement("div", { id: "child" }, reactHeading),
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(parent);
