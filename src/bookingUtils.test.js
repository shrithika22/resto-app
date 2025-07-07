// import {updateTimes, initializeTimes} from './components/bookingUtils';

// describe("initializeTimes", () => {
//   test("returns initial list of times", () => {
//     const result = initializeTimes();
//     expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
//   });
// });

// describe("updateTimes", () => {
//   test("returns same list regardless of date (static test)", () => {
//     const date = "2025-07-06";
//     const action = { type: "update", date };
//     const result = updateTimes([], action);
//     expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
//   });

//   test("returns same state for unknown action type", () => {
//     const result = updateTimes(["17:00"], { type: "unknown" });
//     expect(result).toEqual(["17:00"]);
//   });
// });

import { initializeTimes, updateTimes } from './components/bookingUtils';
import { fetchAPI } from './components/bookingsAPI';

jest.mock('./components/bookingsAPI'); // Mock the module

describe('Booking utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('initializeTimes returns times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalled(); // Ensures API is called
    expect(result).toEqual(mockTimes);   // Ensures correct value is returned
  });

  test('updateTimes returns times for a given date from fetchAPI', () => {
    const mockDate = '2023-12-20';
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'update', date: mockDate };
    const result = updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
    expect(result).toEqual(mockTimes);
  });
});
