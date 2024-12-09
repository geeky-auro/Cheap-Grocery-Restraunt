import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { grossId } = useParams();

  const resInfo = useRestaurantMenu(grossId);

  // Destructuring the data to access specific properties more easily
  // Instead of using them as resInfo[0].name,................................................................
  // Use Optional Chaining with a Fallback

  const {
    title,
    description,
    category,
    price,
    rating,
    warrantyInformation,
    returnPolicy,
  } = resInfo == null ? <Shimmer /> : resInfo || {}; // Safely handle `null` or `undefined` for `resInfo`

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <ul>
        <li>Product description: {description}</li>
        <li>Category: {category}</li>
        <li>Price: {price}</li>
        <li>Ratings: {rating}</li>
        <li>Warranty Information: {warrantyInformation}</li>
        <li>Return Policy: {returnPolicy}</li>
        {/* TODO: Each Item has tags and reviews try to display them dynamically ;) 
            Hint: Use Map method for iterating ;)
        */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
