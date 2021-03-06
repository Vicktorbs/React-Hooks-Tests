const initialState = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Buy milk',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos);