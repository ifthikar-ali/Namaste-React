# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification - for PROD Build
- Bundling
- Compress the files
- Consistent Hashing
- Code Splitting
- Differentail Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Browserlist
- Adde din package.json, help to create differential bundles for different bunddles. 

# React Code Summary
## JSX and Rendering
- **JSX** is syntactic sugar for `React.createElement`.
- Compilation process:
  - JSX → `React.createElement` → ReactElement (JavaScript object) → HTML element.
- Example:
  ```jsx
  const jsxHeading = <h1 id="heading">Hello from JSX.</h1>;

- Rendering React Element / Component:
    const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
    reactRoot.render(<BodyComponent />);

## Functional Components (Modern Way)
- Normal function
const HeadingComponent = function () {
return <h1>Namaste React from functional Component</h1>;
};
- Arrow function
const FooterComponent = () => <h1>Footer</h1>;

## Component Composition
- Definition: Nesting one component inside another.
const BodyComponent = () => (
  <div>
    <HeadingComponent />
    <h1>If the component is returning a single line then no need of return statement.</h1>
    <h2>{100 + 100}</h2>
    {jsxHeading}

    {/* Different ways of rendering functional components */}
    {FooterComponent()}
    <FooterComponent />
    <FooterComponent></FooterComponent>
  </div>
);



# Project Component Structure
Header Component
 ├─ Logo
 └─ Nav Items

Body Component
 ├─ Search
 └─ Restaurant Container
     └─ Restaurant Card
        └─ Img
        └─ Name of Res, Star Rating, cuisines, delivary time.

Footer Component
 ├─ Copyright
 ├─ Address
 └─ Contact