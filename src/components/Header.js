import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setLogin(login === "Login" ? "Logout" : "Login");
              // Add logout functionality here
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
