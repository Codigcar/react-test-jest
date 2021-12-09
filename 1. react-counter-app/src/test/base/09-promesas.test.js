import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Heroe async', () => {

        const id = 1;
        
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('debe de obtener un error si el heroe por id no existe', () => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el heroeeeeee');
                done();
            });
            // expect(1).toBe(2);     
    });
    
});