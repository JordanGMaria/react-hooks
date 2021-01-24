import React, { useReducer } from "react";

export default function useReducerPage() {
  // Alternativa para uso do Redux 

  const contadorValorInicial = { contador1: 0, contador2: 0 };

  const contadorReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTAR1":
        return { ...state, contador1: state.contador1 + action.payload };
      case "INCREMENTAR2":
        return { ...state, contador2: state.contador2 + action.payload };
      case "DECREMENTAR1":
        return { ...state, contador1: state.contador1 - action.payload };
      case "DECREMENTAR2":
        return { ...state, contador2: state.contador2 - action.payload };
      default:
        return state;
    }
  };

  // state, dispatch
  const [contador, setcontador] = useReducer(contadorReducer,contadorValorInicial);

  return (
    <div>
      <h1>Use Reducer</h1>
      <h1>Contador 1: {contador.contador1}</h1>
      <button
        className="button"
        onClick={() => setcontador({ type: "INCREMENTAR1", payload: 1 })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => setcontador({ type: "DECREMENTAR1", payload: 1 })}
      >
        -
      </button>
      <h1>Contador 2: {contador.contador2}</h1>
      <button
        className="button"
        onClick={() => setcontador({ type: "INCREMENTAR2", payload: 2 })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => setcontador({ type: "DECREMENTAR2", payload: 2 })}
      >
        -
      </button>
    </div>
  );
}
