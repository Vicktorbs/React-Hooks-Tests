import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn how to program',
    done: false
}]

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState)
    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />


            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li className="list-group-item" key={ todo.id }>
                                    <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                    <button className="btn btn-danger">
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form>
                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                        />
                        <button className="btn btn-outline-success m-2 btn-block">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}