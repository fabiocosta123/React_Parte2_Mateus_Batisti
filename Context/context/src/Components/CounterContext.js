// Criar contexto

import { createContext, useState } from "react";

export const CounterContext = createContext();

// criar Provider (provider encapsula, prove o contexto )

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={(counter, setCounter)}>
      {children}
    </CounterContext.Provider>
  );
};
