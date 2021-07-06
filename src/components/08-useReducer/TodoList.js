import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <li className="list-group-item" key={ todo.id }>
                        <TodoListItem todo={ todo } index={ i } handleToggle={ handleToggle } handleDelete={ handleDelete } />
                        {/* <p className={ `${ todo.done && 'complete' }` } onClick={ () => handleToggle(todo.id) }>{ i + 1 }. { todo.desc }</p>
                        <button className="btn btn-danger" onClick={ () => { handleDelete(todo.id) } }>
                            Borrar
                        </button> */}
                    </li>
                ))
            }
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.array.isRequired, 
    handleToggle: PropTypes.func.isRequired, 
    handleDelete: PropTypes.func.isRequired
}