import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
// import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');

describe('Tests on file MultipleCustomHooks', () => {

    // useCounter.mockReturnValue({
    //     counter: 10,
    //     increment: () => {}
    // })
    
    test('should show the component <MultipleCustomHooks /> correctly', () => {

        useFetch.mockReturnValue({
            date: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Víctor',
                quote: 'hallo shuen frau'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-4').text().trim()).toBe('hallo shuen frau');
        expect(wrapper.find('footer').text().trim()).toBe('Víctor');
        
    })
    
})
