import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom";
it("should be testing the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { loggedinUser: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("should be testing the cart item as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");
  // const loginButton = screen.getByRole("button", { name: "Login" });
  const cartItems = screen.getByText("Cart - 0 Items");
  expect(cartItems).toBeInTheDocument();
});

it("should be testing the cart is there or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />;
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByRole("button");
    //   const loginButton = screen.getByText("Login");
    // const loginButton = screen.getByRole("button", { name: "Login" });
    // Simply check by regex pattern
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });


  it("should change login button to logout onClick ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />;
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByRole("button");
    //   const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", { name: "Login" });

    // How to click button via code?
    // We have something called as fire event
    fireEvent.click(loginButton);
    const loginoutButton = screen.getByRole("button", { name: "Logout" });

    expect(loginoutButton).toBeInTheDocument();
  });
