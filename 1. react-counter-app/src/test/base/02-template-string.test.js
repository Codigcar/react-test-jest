
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-stirng.js', () => {
    test('getSaludo debe de retornar Hola Carlos!', () => {
        
        const nombre = 'Carlos!';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola "+nombre);
        
    });
    
    test('getSaludo debe de retornar Hola Carlos si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Diego');
    });
});