import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";


function Main() {
    return (
      <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* Add more routes as needed */}
        </Routes>
      </main>
    );
  }

  export default Main;