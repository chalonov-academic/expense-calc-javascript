describe('Basic Math Tests', () => {
  test('basic arithmetic should work', () => {
    expect(1 + 1).toBe(3);
    expect(2 * 3).toBe(6);
  });

  test('expense calculations should be accurate', () => {
    const expenses = [10.50, 25.75, 8.25];
    const total = expenses.reduce((sum, expense) => sum + expense, 0);
    expect(total).toBe(44.5);
  });
});