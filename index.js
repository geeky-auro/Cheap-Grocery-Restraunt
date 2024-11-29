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

const RestrauntCard = ({ ...rest }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="some-image"
        src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
      />
      <h3>{rest.name}</h3>
      <h4>Cuisines : {rest.cuisines}</h4>
      <h4>Ratings : {rest.ratings} 💫</h4>
      <h4>{rest.time} Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard
          name={"Meghana Foods"}
          cuisines={"North India, Biriyani"}
          ratings={3.3}
          time={30}
        />
        <RestrauntCard
          name={"JugalBandi"}
          cuisines={"South India, Idli,Dosa"}
          ratings={4.3}
          time={38}
        />
        <RestrauntCard
          name={"Macha Foods"}
          cuisines={"North India, Shawarma"}
          ratings={4.8}
          time={27}
        />
        <RestrauntCard
          name={"The Bengali Stall"}
          cuisines={"East India, Momo"}
          ratings={5.0}
          time={16}
        />
        <RestrauntCard
          name={"Go Green Beverages"}
          cuisines={"East India, Rasagulla"}
          ratings={4.3}
          time={40}
        />
        <RestrauntCard
          name={"Mughal Biriyanis"}
          cuisines={" Italian, Fasoos"}
          ratings={4.2}
          time={45}
        />
        <RestrauntCard
          name={"Namaste Khana"}
          cuisines={"North India, Biriyani"}
          ratings={4.1}
          time={50}
        />
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
