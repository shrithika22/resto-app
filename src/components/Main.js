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

  const clearBookings = () => {
    localStorage.removeItem('bookingData');
    alert('All bookings have been cleared!');
  };

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
            <button onClick={clearBookings}
              style={{
                backgroundColor: '#f4ce20',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '20px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#b71c1c')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#c62828')}
            >
              Clear Bookings
            </button>
          </section>
        )}
      </main>
    );
  }

  export default Main;