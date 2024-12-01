import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

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

  someData = [];

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
  console.log(resObj);
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
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
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
          className="filter-btn"
          onClick={() => {
            const filteredData = listRestraunts.filter(
              (res) => res.rating >= 4.0
            );
            console.log(filteredData);
            setListRestraunts(filteredData);
          }}
        >
          Tops Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filterText.map((res, index) => {
          console.log(res);
          return <RestrauntCard key={index} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
