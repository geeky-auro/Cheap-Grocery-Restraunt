import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import BEAUTY_MOCK from "../mocks/beautyMock.json";
import RestrauntCard, { CategoryCardBeauty } from "../components/RestrauntCard";
it("should render restaurant Card Component", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);
  const name = screen.getByText("Ice Cream");
  expect(name).toBeInTheDocument();
});

const CategorizedComponent = CategoryCardBeauty(RestrauntCard);

it("should render categoryCard component which is a HOC", () => {
  render(<CategorizedComponent resData={BEAUTY_MOCK} />);
  const beautyLabel = screen.getByText("Essence Mascara Lash Princess", {
    category: "beauty",
  });

  expect(beautyLabel).toBeInTheDocument();
});
