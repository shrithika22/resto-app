import { isFormValid } from "./components/formValidation";

describe('Form Validation Logic', () => {
  test('returns true when all fields are valid', () => {
    const form = {
      date: '2025-07-10',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    };
    expect(isFormValid(form)).toBe(true);
  });

  test('returns false when date is empty', () => {
    const form = {
      date: '',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    };
    expect(isFormValid(form)).toBe(false);
  });

  test('returns false when guests are less than 1', () => {
    const form = {
      date: '2025-07-10',
      time: '18:00',
      guests: 0,
      occasion: 'Birthday',
    };
    expect(isFormValid(form)).toBe(false);
  });

  test('returns false when occasion is empty', () => {
    const form = {
      date: '2025-07-10',
      time: '18:00',
      guests: 4,
      occasion: '',
    };
    expect(isFormValid(form)).toBe(false);
  });
});