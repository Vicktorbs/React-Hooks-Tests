import { shallow } from "enzyme"
import React from 'react'
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests on component <TodoListItem />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
            todo={ demoTodos[0] }
            index={ 4235 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />);

    test('should show it correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should call function handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    })

    test('should call function handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    })
    
    test('should show the text correctly', () => {
        const data = wrapper.find('p').text();
        expect(data).toBe('4236. Learn React');
    })
    
    test('should have the class done if TODO.dono = true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem 
            todo={ todo }
            index={ 4235 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />);
        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
    })
    
})
