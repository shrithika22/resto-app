import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer } from "react";
 import {updateTimes, initializeTimes} from "./bookingUtils";
import BookingTable from "./BookingTable";
import { useState } from "react";
import { submitAPI } from "./bookingsAPI";
import ConfirmedBooking from './ConfirmedBooking';
import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  // const [bookingData, setBookingData] = useState([]);
  const [bookingData, setBookingData] = useState(() => {
    const stored = localStorage.getItem("bookingData");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      setBookingData((prev) => [...prev, formData]);
      navigate('/confirmation');
      // alert("Booking successful!");
    }
  };

    return (
      <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={
              <BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch}
                onSubmit={handleFormSubmit}
              />
              } 
            />
            {/* Add more routes as needed */}
            <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>

        {bookingData.length > 0 && (
          <section style={{ marginTop: "2rem" }}>
            {/* <h2>Your Bookings</h2> */}
            <BookingTable bookingData={bookingData} />
          </section>
        )}
      </main>
    );
  }

  export default Main;