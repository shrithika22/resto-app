
function BookingTable({ bookingData }) {
  return (
    <table className="booking-table">
        <caption>Current Bookings</caption>
        <thead>
            <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
            </tr>
        </thead>
        <tbody>
            {bookingData.map((booking, index) => (
            <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
            </tr>
            ))}
        </tbody>
    </table>
  );
}

export default BookingTable;
