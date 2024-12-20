import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
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

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedinUser: userInfo }}>
      {/* Whole app with default */}
      <div className="App">
        <UserContext.Provider value={{ loggedinUser: "Elon Musk" }}>
          {/* Only header with Elon Musk  */}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>....Loading</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery/:grossId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
