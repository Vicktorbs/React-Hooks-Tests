import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('Test on component <TodoAdd />', () => {
    
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd 
        handleAddTodo={ handleAddTodo }
    />)
    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should not call handleAddTodo', () => {
        const submitForm = wrapper.find('form').prop('onSubmit');
        submitForm({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })
    
    test('should call the function handleAddTodo', () => {
        const value = 'Lear how to stay there';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const submitForm = wrapper.find('form').prop('onSubmit');
        submitForm({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: "Lear how to stay there",
            done: false,
            id: expect.any(Number),
        });
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
})
