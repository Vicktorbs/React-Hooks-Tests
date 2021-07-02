import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const LayoutE = () => {
    const {counter, increment} = useCounter(1);
    const  { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data&&data[0]
    // console.log(quote);

    const pharagrapTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pharagrapTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p className="mb-4" ref={ pharagrapTag }>{ quote }</p>
                {/* <footer className="blockquote-footer">{ author }</footer> */}
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button className="btn btn-primary" onClick={ increment }>Next quote</button>

        </div>
    )
}
