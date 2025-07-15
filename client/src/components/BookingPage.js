import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, onSubmit }) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={onSubmit}/>
    </section>
  );
}

export default BookingPage;