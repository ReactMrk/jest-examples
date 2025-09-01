import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import NewYorkStateZoneButton from "./timeZoneButtons/NewYorkStateZoneButton";
import Timezone from "./TimeZone";
import { calculateTime } from "./utils";


jest.mock("./timeZoneButtons/NewYorkStateZoneButton", () => jest.fn());


jest.mock("./utils", () => ({
  ...jest.requireActual("./utils"),
  calculateTime: jest.fn(),
}));

const addhours = 6;
const city = 'New York';
const renderComponent = () => render(<Timezone />);

describe('Timezone', () => {
  beforeEach(() => {
    NewYorkStateZoneButton.mockImplementation(({ updateTime }) => {
      return <button onClick={() => updateTime(addhours, city)}>New York update time</button>
    });
    calculateTime.mockReturnValueOnce('13:50:43').mockReturnValue('8:10:35');
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should set Spain time by default and change it to new york time when click on new york button', async () => {
    renderComponent();
    expect(screen.getByText('Time in Spain is 13:50:43')).toBeInTheDocument();
    expect(screen.getByText('It has been updated 0 times')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'New York update time' }));
    await waitFor(() => {
      expect(screen.getByText('Time in New York is 8:10:35')).toBeInTheDocument();
      expect(screen.getByText('It has been updated 1 times')).toBeInTheDocument();
    });
  });
});