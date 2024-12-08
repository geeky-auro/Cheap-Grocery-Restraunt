import { Component } from "react";
import User from "./User";
import UserClassComponent from "./UserClassComponent";

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
        <User />
        <UserClassComponent />
      </>
    );
  }
}

export default About;
