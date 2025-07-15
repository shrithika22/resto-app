// // Utility function to get times (mocked)
// const fetchAvailableTimes = (date) => {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// };

// // Reducer function
// export const updateTimes = (state, action) => {
//   switch (action.type) {
//     case "update":
//       return fetchAvailableTimes(action.date);
//     default:
//       return state;
//   }
// };

// // Initialize times
// export const initializeTimes = () => fetchAvailableTimes(new Date());

import { fetchAPI } from "./bookingsAPI";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};