// App.test.js
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

describe("Portfolio App", () => {
  // Test if App renders without crashing
  test("renders App component", () => {
    render(<App />);
    const appElement = screen.getByTestId("app-root"); // make sure App has data-testid="app-root"
    expect(appElement).toBeInTheDocument();
  });

  // Test if the profile image exists
  test("renders profile image", () => {
    render(<App />);
    const profileImg = screen.getByAltText(/profile/i); // <img alt="profile" ... />
    expect(profileImg).toBeInTheDocument();
  });

  // Test if 'Contact Me' button exists
  test("renders Contact Me button", () => {
    render(<App />);
    const contactBtn = screen.getByRole("button", { name: /contact me/i });
    expect(contactBtn).toBeInTheDocument();
  });

  // Test if navigation buttons exist (page turn buttons)
  test("renders page turn buttons", () => {
    render(<App />);
    const navButtons = screen.getAllByRole("button", { name: /next|prev/i });
    expect(navButtons.length).toBeGreaterThan(0);
  });

  // Test if project section exists
  test("renders project section", () => {
    render(<App />);
    const projectSection = screen.getByTestId("projects"); // <section data-testid="projects">
    expect(projectSection).toBeInTheDocument();
  });
});
