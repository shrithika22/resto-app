export function isFormValid({ date, time, guests, occasion }) {
  return (
    date.trim() !== '' &&
    time.trim() !== '' &&
    guests >= 1 &&
    guests <= 10 &&
    occasion.trim() !== ''
  );
}