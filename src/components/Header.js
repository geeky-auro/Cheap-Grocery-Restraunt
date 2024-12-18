import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  const { loggedinUser } = currentUser || {};

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                setLogin(login === "Login" ? "Logout" : "Login");
                // Add logout functionality here
              }}
            >
              {login}
            </button>
          </li>
          <li className="mx-2">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
