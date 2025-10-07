import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName, cuisine }) => {
  // console.log(props);
  return (
    <div className="res-card">
      <img
        className="food-image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.7cTBBZDw85G8kihZnVlvqQHaE5%3Fpid%3DApi&f=1&ipt=0ff465405bbecc6e1e669b5de40af86928c3f0e30f720c7994ce7a9c49eb0bdb"
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Sekar Tea Stall"
          cuisine="Vada Sambar, South Indian, Asian"
        />
        <RestaurantCard
          resName="Ikea"
          cuisine="cinnamon bread, swiden, swdish"
        />
      </div>
    </div>
  );
};
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
