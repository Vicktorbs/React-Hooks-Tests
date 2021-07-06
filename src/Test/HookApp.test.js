import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('test on file HookApp', () => {
    
    test('should show <HookApp /> correctly', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
