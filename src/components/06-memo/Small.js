import React, { memo } from 'react'

// memo() || React.memo() -> Memoriza la funcionalidad dentro de los parentesis para evitar tener que renderizar toda la vista otra vez
export const Small = memo(({ value }) => {
    console.log('Me volvi a llamar :c ');
    return (
        <small> { value } </small>
    )
})
