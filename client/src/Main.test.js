import React from "react";
import { render, act } from "@testing-library/react";
import Main from "./components/Main";
import { MemoryRouter } from "react-router-dom";

describe("Booking Data LocalStorage", () => {
  beforeEach(() => {
    // Mock localStorage methods
    let store = {};
    global.localStorage = {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value;
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  });

  test("reads bookingData from localStorage on load", () => {
    const mockData = JSON.stringify([
      { date: "2025-08-01", time: "19:00", guests: 4, occasion: "Birthday" },
    ]);
    localStorage.getItem.mockReturnValue(mockData);

    render(<Main />);

    expect(localStorage.getItem).toHaveBeenCalledWith("bookingData");
  });

  test("writes bookingData to localStorage", () => {
    render(
        <MemoryRouter>
            <Main />
        </MemoryRouter>
    );

    act(() => {
      // Simulate an update to bookingData
      const event = new Event("bookingDataUpdated");
      window.dispatchEvent(event);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "bookingData",
      expect.any(String)
    );
  });
});