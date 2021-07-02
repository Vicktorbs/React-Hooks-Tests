import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

// Crea un efecto cuando un evento sucede en el componente 
export const FormWithCustomHook = () => {

    const [formValues, handleInoutChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password} = formValues;
    useEffect(() => {
        console.log('Email');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
            <div className="form-group m-2">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInoutChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
