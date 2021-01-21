import React, { useContext, createContext } from "react";

// Usado para compartilhar estado entre component

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

//const ThemeContext = createContext(themes.dark);
const ThemeContext = createContext(themes);

// Components
function Button1() {
  const theme = useContext(ThemeContext);
  return (
    <button
      className="button"
      style={{
        background: theme.light.background,
        color: theme.light.foreground,
      }}
    >
      Button 1
    </button>
  );
}

function Button2() {
  const theme = useContext(ThemeContext);
  return (
    <button
      className="button"
      onClick={() => {
        console.log("ThemeContext", ThemeContext.Consumer);
      }}
      style={{
        background: theme.dark.background,
        color: theme.dark.foreground,
      }}
    >
      Button 2
    </button>
  );
}

const MensagemContext = createContext(null);

function Text1() {
  return (
    <MensagemContext.Provider value="Text">
      <Text2 />
    </MensagemContext.Provider>
  );
}

function Text2() {
  return <MensagemContext.Consumer>{(text) => text}</MensagemContext.Consumer>;
}

// Page exemplo
export default function useContextPage() {
  return (
    <div>
      <h1>Use Context</h1>
      <Button1 />
      <br />
      <Button2 />
      <br />
      <Text1 />
      <br />
      <Text2 />
    </div>
  );
}
