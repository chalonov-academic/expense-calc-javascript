describe('Tests básicos de matemáticas', () => {
  test('operaciones aritmeticas deben funcionar', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
    expect(10 - 5).toBe(5);
    expect(8 / 2).toBe(4);
  });

  test('calculos de gastos deben ser precisos', () => {
    // Simular cálculos de gastos
    const expenses = [10.50, 25.75, 8.25];
    const total = expenses.reduce((sum, expense) => sum + expense, 0);
    const average = total / expenses.length;
    
    expect(total).toBe(44.5);
    expect(average).toBeCloseTo(14.83, 2);
  });

  test('Formato de dinero en las cantidades', () => {
    const amount = 123.456;
    const formatted = amount.toFixed(2);
    
    expect(formatted).toBe('123.46');
  });
});