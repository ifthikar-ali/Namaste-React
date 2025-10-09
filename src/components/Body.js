import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Hooks - SuperPowerFull Variable
  let [listOfRestarunt, setListOfRestarunt] = useState(resList);
  // Normal JS Variable
  // let listOfRestarunt = resList;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurent = (listOfRestarunt =
              listOfRestarunt.filter((res) => res.data.avgRating > 4));
            setListOfRestarunt(filteredRestaurent);
            console.log(listOfRestarunt);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestarunt?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
