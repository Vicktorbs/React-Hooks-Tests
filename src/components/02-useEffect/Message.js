import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords;

    useEffect(() => {
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords)
        }
        // console.log('Component mounted');
        window.addEventListener('mousemove', mouseMove)
        return () => {
            // Funcion de limpieza cuando el componente se desmonta (se deja de usar)
            // console.log('Component unmounted');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);

    return (
        <div>
            <h3>You're great</h3>
            <p>x: {x} - y: {y}</p>
        </div>
    )
}
