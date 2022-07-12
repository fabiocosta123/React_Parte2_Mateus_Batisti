import { useContext } from "react";
import { CounterContext } from "../CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Contexto não encontrado");

    return context;
  }
};
