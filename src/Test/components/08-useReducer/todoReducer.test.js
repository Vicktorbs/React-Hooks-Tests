import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests on file todoReducer', () => {
    
    test('should return the default state', () => {
        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)
    })

    test('should add a TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Learn Angular',
            done: false
        };
        const action = {
            type: 'add', 
            payload: newTodo
        }
        const state = todoReducer(demoTodos, action);

        expect(state).toEqual([...demoTodos, newTodo])
        expect(state.length).toBe(3)
    })

    test('should delete a TODO', () => {
        const action = {
            type: 'delete', 
            payload: 2
        }
        const state = todoReducer(demoTodos, action);
        
        expect(state).toEqual([demoTodos[0]]);
        expect(state.length).toBe(1);
    })
    
    test('should toggle a TODO', () => {
        const action = {
            type: 'toggle', 
            payload: 2
        }
        const state = todoReducer(demoTodos, action);
        
        expect(state[1].done).toBeTruthy();
        expect(state[0]).toEqual(demoTodos[0]);
        expect(state.length).toBe(2);
    })
    
})
