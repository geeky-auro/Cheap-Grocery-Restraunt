import RestrauntCard from "./RestrauntCard";

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
  // Add your code here to filter the top rated restraunts based on ratings and time.

  // Example:
  // const filteredRes = resObj.filter((res) => res.ratings >= 4.5 && res.time <= 45);

  // Return the filtered restraunts instead of resObj in the return statement.
  console.log(resObj);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          resObj = resObj.filter((res) => res.ratings >= 4.0);
          console.log(resObj);
        }}
      >
        Tops Rated Restraunts
      </button>
      <div className="res-container">
        {resObj.map((res, index) => {
          console.log(res);
          return <RestrauntCard key={index} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
