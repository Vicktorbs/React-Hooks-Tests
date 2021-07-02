import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

// Crea un efecto cuando un evento sucede en el componente 
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(() => {
        // console.log('hey');
    }, [])
    useEffect(() => {
        // console.log('formState changed');
        // En el arreglo se pone los elementos de los que se estara escuchando sus cambios, cada use efect debe escuchar unicamente a un elemento 
    }, [formState])
    useEffect(() => {
        // console.log('email changed');
    }, [email])

    const handleInoutChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group m-2">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInoutChange }
                />
            </div>
            <div className="form-group m-2">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInoutChange }
                />
            </div>

            { name === 'victor' && <Message /> }
        </>
    )
}
