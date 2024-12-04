import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
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
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
