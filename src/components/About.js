import { Component, useContext } from "react";
import User from "./User";
import UserClassComponent from "./UserClassComponent";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor is Called");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount is Called");
  }

  render() {
    console.log("Parent Render is Called");
    return (
      <>
        <h1>About</h1>
        <h2>
          User Logged In:-
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h2 className="font-semibold">{loggedinUser}</h2>
            )}
          </UserContext.Consumer>
        </h2>
        <User />
        <UserClassComponent />
      </>
    );
  }
}

export default About;
