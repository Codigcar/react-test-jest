import React from 'react';
// import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = "Hola, soy Carlos";

        const wrapper = shallow(<PrimeraApp saludo={saludo} /> )
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Mi nombre es Carlos';
        const subTitulo = 'subtitulo';

        const wrapper = shallow(
            <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
        );

        const textParrafo = wrapper.find("p").text().trim();

        expect(textParrafo).toBe(subTitulo);
    });
    
});