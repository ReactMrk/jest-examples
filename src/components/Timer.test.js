import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Timer from "./Timer";

const renderComponent = () => render(<Timer />);

describe('Timer', () => {
  it('should display After Timer text when click on Start timer button', async () => {
    renderComponent();
    expect(screen.getByText('Before Timer')).toBeInTheDocument();
    await act(() => userEvent.click(screen.getByRole('button', { name: 'Start timer' })));
    await waitFor(() => {
      expect(screen.getByText('After Timer')).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});