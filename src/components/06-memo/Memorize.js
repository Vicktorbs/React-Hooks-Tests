import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize: <Small value={ counter } /> </h1>
            <hr />
            <button className="btn btn-primary mt-2" onClick={ increment }>+ 1</button>
            <button className="btn btn-btn-outline-primary m-2" onClick={ () => setShow(!show) } >
                Show / Hiden - { JSON.stringify(show) }
            </button>
        </div>
    )
}