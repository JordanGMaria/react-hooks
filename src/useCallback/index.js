import React, { useCallback, useState } from "react";

export default function useCallbackPage() {

  // Hook useCallback é muito útil para evitar renderizações desnecessárias.

  const [contador, setContador] = useState(0);

  const [outroContador, setoutroContador] = useState(0);

  // O problema é que contador é atualizado, todas as 3 funções são recriadas novamente, inclusive a "incrementarOutroContador", que não tem um state direto alterado
  const incrementar = () => {
    setContador(contador + 1);
  };
  const decrementar = () => {
    setContador(contador - 1);
  };
  const incrementarOutroContador = () => {
    setoutroContador(outroContador - 1);
  };


  // Desta forma "incrementarOutroContador", não será diretamente afetador pela reconstrução
  const incrementarCallback = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const decrementarCallback = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  const incrementarOutroContadorCallback = useCallback(() => {
    setoutroContador(outroContador - 1);
  }, [outroContador]);


  return (
    <div>
      <h1>Use Callback</h1>
      Contador: {contador}
      <button className="button" onClick={incrementarCallback}>+</button>
      <button className="button" onClick={decrementarCallback}>-</button>
      <button className="button" onClick={incrementarOutroContadorCallback}>+ Outro contador</button>
    </div>
  );
}
