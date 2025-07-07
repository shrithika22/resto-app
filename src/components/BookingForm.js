import { useState } from 'react';
import { submitAPI } from './bookingsAPI';

function BookingForm({ availableTimes, dispatch, onSubmit}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // for feedback

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: selectedDate }); // Trigger reducer
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Reservation submitted for ${date} at ${time} for ${guests} guest(s). Occasion: ${occasion}`);
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
    
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // const success = submitAPI(formData);

    // if (success) {
    //   setSubmissionStatus("success");
    //   alert("🎉 Reservation submitted successfully!");

    //   if(onSubmit){
    //     onSubmit(formData);
    //   }

    //   // Optionally reset the form:
    //   setDate("");
    //   setTime("");
    //   setGuests(1);
    //   setOccasion("Birthday");
    // } else {
    //   setSubmissionStatus("error");
    //   alert("⚠️ Failed to submit reservation. Please try again.");
    // }

    if(onSubmit){
      onSubmit(formData);
    }

  };


  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', gap: '1.2rem', padding: '2rem', backgroundColor: '#fff8e1', borderRadius: '12px' }}>
        <h2>Book Now</h2>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min="1"
          max="10"
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
      {submissionStatus === "success" && <p style={{ color: "green" }}>✅ Reservation successful!</p>}
      {submissionStatus === "error" && <p style={{ color: "red" }}>❌ Something went wrong.</p>}
    </>
  );
}

export default BookingForm;
