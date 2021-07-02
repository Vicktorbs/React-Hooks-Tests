import React, { useMemo, useState } from 'react'
import { heightProcess } from '../../helpers/heightProcess';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    const memoHeightProcessed = useMemo(() => heightProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Memorize: <small>{ counter }</small> </h3>
            <hr />
            <p>{ memoHeightProcessed }</p>
            <button className="btn btn-primary mt-2" onClick={ increment }>+ 1</button>
            <button className="btn btn-btn-outline-primary m-2" onClick={ () => setShow(!show) } >
                Show / Hiden - { JSON.stringify(show) }
            </button>
        </div>
    )
}
