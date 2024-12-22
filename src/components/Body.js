import { useContext, useEffect, useState } from "react";
import RestrauntCard, { CategoryCardBeauty } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

let resObj = [
  {
    name: "Meghana Foods",
    cuisines: "North India, Biriyani",
    ratings: 4.3,
    time: 30,
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  },
  {
    name: "JugalBandi",
    cuisines: "South India, Idli,Dosa",
    ratings: 3.3,
    time: 38,
    imageUrl:
      "https://images.pexels.com/photos/262974/pexels-photo-262974.jpeg",
  },
  {
    name: "Macha Foods",
    cuisines: "North India, Shawarma",
    ratings: 3.2,
    time: 35,
    imageUrl:
      "https://images.pexels.com/photos/262972/pexels-photo-262972.jpeg",
  },
  {
    name: "Ravish Foods",
    cuisines: "South India, Rajma, Paneer",
    ratings: 3.5,
    time: 40,
    imageUrl:
      "https://images.pexels.com/photos/262971/pexels-photo-262971.jpeg",
  },
  {
    name: "Rajdhani Foods",
    cuisines: "South India, Pakora, Paneer",
    ratings: 4.1,
    time: 37,
    imageUrl:
      "https://images.pexels.com/photos/262970/pexels-photo-262970.jpeg",
  },
  {
    name: "Kormangala Foods",
    cuisines: "South India, Dosa, Paneer",
    ratings: 4.3,
    time: 41,
    imageUrl:
      "https://images.pexels.com/photos/262969/pexels-photo-262969.jpeg",
  },
  {
    name: "Kulra Foods",
    cuisines: "South India, Pakoda, Paratha",
    ratings: 4.55,
    time: 40 + 5,
    imageUrl:
      "https://images.pexels.com/photos/262968/pexels-photo-262968.jpeg",
  },
];

const Body = () => {
  const [listRestraunts, setListRestraunts] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const [filterText, setFilterText] = useState([]);
  useEffect(() => {
    console.log("Body is rendered successfully");
    fetchData();
  }, []);

  const fetchData = async () => {
    // Replace with your API endpoint to fetch the restraunt data
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setListRestraunts(data?.products);
    setFilterText(data?.products);
  };
  // Add your code here to filter the top rated restraunts based on ratings and time.
  // Example:
  // const filteredRes = resObj.filter((res) => res.ratings >= 4.5 && res.time <= 45);
  // Return the filtered restraunts instead of resObj in the return statement.
  const isOnline = useOnlineStatus();
  if (isOnline === "false") {
    return <h1>No Internet Connection</h1>;
  }

  const dispatch = useDispatch();
  const addItemToCart = (res) => {
    // add Item to the cart ;)
    // dispatch an action
    dispatch(addItem(res));
  };

  const { setUserInfo } = useContext(UserContext);

  console.log(resObj);
  const GroceryCardPromoted = CategoryCardBeauty(RestrauntCard);
  if (listRestraunts.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return listRestraunts.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Enter Item to be Searched"
          value={searchText}
          className="search m-4 p-4 border border-solid border-black rounded-md"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="m-4 p-4 bg-green-500 shadow-lg rounded"
          onClick={() => {
            console.log(searchText);
            const filteredItems = listRestraunts.filter((res) =>
              res.title.toLowerCase().includes(searchText.toLowerCase())
            );
            // setListRestraunts(filteredItems);
            setFilterText(filteredItems);
          }}
        >
          Search
        </button>
        <button
          className="m-4 p-4 bg-blue-500 shadow-lg rounded"
          onClick={() => {
            const filteredData = listRestraunts.filter(
              (res) => res.rating >= 4.0
            );
            console.log(filteredData);
            setListRestraunts(filteredData);
          }}
        >
          Top Rated Grocery Items
        </button>
        <input
          type="text"
          className="p-4 border border-solid border-black"
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div>
        <div className="flex flex-wrap m-4 p-4">
          {filterText.map((res) => {
            console.log(res);
            return (
              <div>
                <button
                  type="button"
                  onClick={() => addItemToCart(res)}
                  className="p-4 m-4 to-black align-middle rounded-sm border border-black shadow-lg  bg-yellow-100"
                >
                  Add
                </button>
                {/* Key should be always on parent element.*/}
                <Link key={res.id} to={"/grocery/" + res.id}>
                  {res.category.includes("beauty") ? (
                    <GroceryCardPromoted resData={res} />
                  ) : (
                    // <h1> Something to be rendered !</h1>
                    <RestrauntCard resData={res} />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
