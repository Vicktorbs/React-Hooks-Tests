import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => setUser({name: 'victor', id: 54321}) }>
                Login
            </button>
        </div>
    )
}
