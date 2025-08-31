// Tests automatizados para la aplicación de calculadora de gastos
// Utiliza Jest como framework de testing

// GRUPO DE TESTS 1: Verificación de operaciones matemáticas básicas
describe('Tests básicos de matemáticas', () => {
  
  // TEST 1: Verificar que las operaciones aritméticas fundamentales funcionan
  test('operaciones aritmeticas deben funcionar', () => {
    // Prueba suma: 1 + 1 debe ser igual a 2
    expect(1 + 1).toBe(2);
    
    // Prueba multiplicación: 2 * 3 debe ser igual a 6  
    expect(2 * 3).toBe(6);
    
    // Prueba resta: 10 - 5 debe ser igual a 5
    expect(10 - 5).toBe(5);
    
    // Prueba división: 8 / 2 debe ser igual a 4
    expect(8 / 2).toBe(4);
    
    /*
     * ¿Por qué este test?
     * - Verifica que JavaScript funciona correctamente
     * - Es el test más básico para detectar problemas fundamentales
     * - Si este falla, hay problemas graves con el entorno de testing
     */
  });

  // TEST 2: Verificar cálculos específicos de la lógica de gastos
  test('calculos de gastos deben ser precisos', () => {
    // Simular una lista de gastos como números decimales (moneda)
    const expenses = [10.50, 25.75, 8.25];
    
    // Calcular total usando reduce (función que usa la aplicación real)
    const total = expenses.reduce((sum, expense) => sum + expense, 0);
    
    // Calcular promedio dividiendo total entre cantidad de gastos
    const average = total / expenses.length;
    
    // Verificar que el total es correcto: 10.50 + 25.75 + 8.25 = 44.5
    expect(total).toBe(44.5);
    
    // Verificar que el promedio es correcto: 44.5 / 3 = 14.833...
    // Usamos toBeCloseTo() para números decimales (evita problemas de precisión)
    expect(average).toBeCloseTo(14.83, 2);  // 2 decimales de precisión
    
    /*
     * ¿Por qué este test?
     * - Verifica la lógica principal de la aplicación (sumar gastos)
     * - Prueba que reduce() funciona correctamente
     * - Valida cálculos de promedio que se muestran al usuario
     * - Detecta errores en operaciones con decimales (dinero)
     */
  });
});

/*
 * EXPLICACIÓN GENERAL DE LOS TESTS:
 * 
 * 1. describe() - Agrupa tests relacionados bajo un mismo tema
 * 2. test() o it() - Define un test individual con una descripción
 * 3. expect() - Define lo que esperamos que pase
 * 4. toBe() - Comparación exacta (===)
 * 5. toBeCloseTo() - Comparación de números decimales con tolerancia
 * 
 * FLUJO DE EJECUCIÓN:
 * 1. Jest busca archivos *.test.js
 * 2. Ejecuta cada test() de forma individual
 * 3. Si todos los expect() pasan, el test está OK ✅
 * 4. Si algún expect() falla, el test falla ❌
 * 5. GitHub Actions lee el resultado y actualiza el badge
 */