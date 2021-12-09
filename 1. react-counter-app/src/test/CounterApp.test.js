

describe('Pruebas en el <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />)

        const counterText = wrapper.find("h2").text().trim();

        expect(counterText).toBe("100");
        
    });
    
});