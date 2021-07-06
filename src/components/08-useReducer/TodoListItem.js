import React from 'react'
import PropTypes from 'prop-types'

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <>
            <p className={ `${ todo.done && 'complete' }` } onClick={ () => handleToggle(todo.id) }>
                { index + 1 }. { todo.desc }
            </p>
            <button className="btn btn-danger" onClick={ () => { handleDelete(todo.id) } }>
                Borrar
            </button>
        </>
    )
}
TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired, 
    index: PropTypes.number.isRequired, 
    handleToggle: PropTypes.func.isRequired, 
    handleDelete: PropTypes.func.isRequired
}