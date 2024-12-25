import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // Here goes all your test cases

  test("Should load contact us component", () => {
    // render the component on jsdom
    // Note to make the below jsx work inside js
    // add this to your npm
    // npm i -D @babel/preset-react
    // After Insatlling, add this to your babel configuration
    render(<Contact />);
    // now use the screen variable to check what ever has been loaded onto the screen.
    const heading = screen.getByRole("heading");
    // Now we will assert whether the heading was loaded or not
    expect(heading).toBeInTheDocument();
  });

  test("Should load the button on to the screen", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load the input name on to the screen", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
});
