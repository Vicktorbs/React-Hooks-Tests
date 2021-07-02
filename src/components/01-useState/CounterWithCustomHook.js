import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(50)
    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr />
            <button onClick={ () => increment(2) } className="btn btn-primary m-2">+ 1</button>
            <button onClick={ reset } className="btn btn-primary m-2">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary m-2">- 1</button>
        </>
    )
}
