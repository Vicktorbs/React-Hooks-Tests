import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Tests on file RealExampleRef', () => {
    
    const wrapper = shallow(<RealExampleRef />);
    
    test('should shoe the component <RealExampleRef /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })

    test('should show the component <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
