
describe('Pruebas en el archivo demo.ts.js', () => {
    test('deben ser iguales los strings ', () => {
        const actual = "Teste en React usando Jest";
        const esperado = "Teste en React usando Jest"
    
        expect(actual).toBe(esperado);
    })
});

