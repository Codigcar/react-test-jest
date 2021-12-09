import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid:'ABC123',
            username:'Carlos1231',
        };
        const user = getUser();

        expect(user).toEqual(userTest);
        
    });

    test('getUsuarioActivo debe de retoernar un objeto', () => {
        const nombre = "Bomba";
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:"ABC567",
            username: nombre
        });
    });
});
