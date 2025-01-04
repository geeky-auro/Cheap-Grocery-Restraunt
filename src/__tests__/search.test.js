import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/GroceryMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import UserContext from "../utils/UserContext";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("just to pass the test", () => {});
// render the body component ;)
it("should render the body component", async () => {
  // act comes react-dom/test-utils
  await act(async () =>
    render(
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ loggedinUser: "John Doe", setUserInfo: () => {} }}
        >
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    )
  );
  const searchBtn = screen.getByTestId("searchButton");
  const searchInput = screen.getByTestId("searchId");
  console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "lipstick" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("res-card");
  expect(cards.length).toBe(1);
});
