import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import RandomNumber from "./RandomNumber";
import { getRandomNumber } from "./utils";

jest.mock("./utils", () => ({
  ...jest.requireActual("./utils"),
  getRandomNumber: jest.fn(),
}));

const renderComponent = () => render(<RandomNumber />);
getRandomNumber.mockReturnValue(2); 
describe("RandomNumber", () => {
  beforeEach(() => {
    getRandomNumber.mockReturnValue(2);   
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should display text Number 2 is pair when click on button and random number is 2", async () => {
    renderComponent();
    userEvent.click(
      screen.getByRole("button", { name: "Give me a different number" })
    );
    await waitFor(() => {
      expect(getRandomNumber).toHaveBeenCalledWith();
      expect(getRandomNumber).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Number 2 is pair")).toBeInTheDocument();
    });
  });

  it("should display text Number 3 is odd when click on button and random number is 3", async () => {
    getRandomNumber.mockReturnValue(3);
    renderComponent();
    userEvent.click(
      screen.getByRole("button", { name: "Give me a different number" })
    );
    await waitFor(() => {
      expect(getRandomNumber).toHaveBeenCalledWith();
      // expect(getRandomNumber).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Number 3 is odd")).toBeInTheDocument();
    });
  });

  it("should display text Number 2 is pair when click on button and random number is 2", async () => {
    renderComponent();
    userEvent.click(
      screen.getByRole("button", { name: "Give me a different number" })
    );
    await waitFor(() => {
      expect(getRandomNumber).toHaveBeenCalledWith();
      expect(getRandomNumber).toHaveBeenCalledTimes(1);
      expect(screen.getByText("Number 2 is pair")).toBeInTheDocument();
    });
  });
});
