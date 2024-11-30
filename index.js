import React from "react";
import ReactDOM from "react-dom";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
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

// const RestrauntCard = ({ ...rest }) => {
//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         className="some-image"
//         src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
//       />
//       <h3>{rest.name}</h3>
//       <h4>Cuisines : {rest.cuisines}</h4>
//       <h4>Ratings : {rest.ratings} 💫</h4>
//       <h4>{rest.time} Minutes</h4>
//     </div>
//   );
// };

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

const RestrauntCard = ({ resData }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="some-image" src={resData.imageUrl} />
      <h3>{resData.name}</h3>
      <h4>Cuisines : {resData.cuisines}</h4>
      <h4>Ratings : {resData.ratings} 💫</h4>
      <h4>{resData.time} Minutes</h4>
    </div>
  );
};

// Another way to describe props
// const RestrauntCard = (props) => {
//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         className="some-image"
//         src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
//       />
//       <h3>{props.name}</h3>
//       <h4>Cuisines : {props.cuisines}</h4>
//       <h4>Ratings : {props.ratings} 💫</h4>
//       <h4>{props.time} Minutes</h4>
//     </div>
//   );
// };

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((res) => {
          console.log(res);
          return <RestrauntCard resData={res} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
