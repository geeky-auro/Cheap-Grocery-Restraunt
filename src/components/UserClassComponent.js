import React from "react";
class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // to access any props use this.props.propname  ;)
    // To use state variables ==>
    // this.state = {
    //   count: 0, // Initial count of 0
    //   name: "Auro",
    //   email: "auro@example.com",
    //   phone: "1234567890",
    //   address: "123 Main St, City, State, Zip",
    // };

    this.state = {
      userInfo: {
        name: "Auro",
        bio: "auro@example.com",
        location: "1234567890",
      },
    };
    console.log("Child Constructor is Called");
  }

  async componentDidMount() {
    const json = await fetch("https://api.github.com/users/geeky-auro");
    const data = await json.json();
    console.log(data);
    this.setState({ userInfo: data });
    console.log("Child Component Did Mount is called");
    // If you want to fetch data from API use this.fetchData()
  }

  render() {
    console.log("Child Component Render is called");

    const { name, bio, location } = this.state.userInfo;

    return (
      <>
        <div className="user-card">
          <button
            onClick={async () => {
              // This will change the state of userInfo and re-render the component.
              let json = await fetch("https://api.github.com/users/unikdahal");

              json = await json.json();

              this.setState({
                userInfo: {
                  name: (await json.name) ?? "Unik",
                  bio: (await json.bio) || "Coder",
                  location: (await json.location) || "Hyderabad",
                },
              });
            }}
          >
            Click to see Magic 😀
          </button>
          <h3>Name : {name}</h3>
          <h3>Bio : {bio}</h3>
          <h3>Location : {location}</h3>
          <h3>Public Gists : "Some Gists"</h3>
        </div>
      </>
    );
  }
}

export default UserClassComponent;
