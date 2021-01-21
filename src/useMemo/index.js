import React, { useState, useMemo } from "react";

export default function useMemoPage() {
  //  Utiliza uma técnica já conhecida chamada memoization, que consiste em guardar o valor de retorno de uma função a partir dos parametros

  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  function Errors(active) {
    // Paramtro padrão é true para Show Erros
    // Ele evita que a função volte aqui a cada caracter digitado
    return active && <span> É necessário 8 caracteres</span>;
  }

  // O primeiro parametro precisa ser uma função em que o retorno será o valor que o useMemo irá armazenar e retornar para a sua variável,
  // sendo assim sua variável será sempre igual ao valor de retorno dessa função
  // O segundo parâmetros é um array de dependências, no nosso exemplo passamos [showErrors] pois, como foi dito, nossa lista depende apenas desse valor para ser renderizada.

  const memoizedErrors = useMemo(() => Errors(showErrors), [showErrors]);

  return (
    <div>
      <h1>Senha</h1>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => {
          setShowErrors(e.target.value.length < 8);
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      {memoizedErrors}
    </div>
  );
}
