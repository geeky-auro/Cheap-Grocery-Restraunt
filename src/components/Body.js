import RestrauntCard from "./RestrauntCard";

const resObj = [
  {
    name: "Meghana Foods",
    cuisines: "North India, Biriyani",
    ratings: 3.3,
    time: 30,
    imageUrl:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  },
  {
    name: "JugalBandi",
    cuisines: "South India, Idli,Dosa",
    ratings: 4.3,
    time: 38,
    imageUrl:
      "https://images.pexels.com/photos/262974/pexels-photo-262974.jpeg",
  },
  {
    name: "Macha Foods",
    cuisines: "North India, Shawarma",
    ratings: 4.2,
    time: 35,
    imageUrl:
      "https://images.pexels.com/photos/262972/pexels-photo-262972.jpeg",
  },
  {
    name: "Ravish Foods",
    cuisines: "South India, Rajma, Paneer",
    ratings: 4.5,
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
  return (
    <div className="body">
      <div className="search">Search</div>
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
