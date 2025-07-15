import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe('BookingForm HTML5 validation', () => {
  test('Date input is required', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onSubmit={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('Time select is required', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onSubmit={() => {}} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test('Guests input has min=1 and max=10', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onSubmit={() => {}} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Occasion select is required', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} onSubmit={() => {}} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});