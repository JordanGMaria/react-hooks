import React, { useRef, useEffect } from 'react'

export default function useRefPage() {

    const input = useRef(null);

    function alertValue(){
        alert(input.current.value)
    }
    
    return (
        <div>
            <h1>Use Ref </h1>
            <input ref={input} />
            <button className="button" onClick={alertValue}>Mostrar value</button>
        </div>
    )
}
