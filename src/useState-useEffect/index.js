import React, { useEffect, useState } from 'react'

export default function UseStatePageUseEffect() {

    const [contador, setcontador] = useState(0);

    useEffect(() => {
        alert(`Valor atual contador: ${contador}`);
    }, [contador])

    return (
        <div>
            <h1>Contador {contador}</h1>
            <button className="button" onClick={() => setcontador(contador + 1)}>+</button>
        </div>
    )
}
