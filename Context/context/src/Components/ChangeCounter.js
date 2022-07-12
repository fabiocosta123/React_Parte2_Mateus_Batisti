// alterando contexto

import { useContext } from "react";
import { CounterContext } from "../Components/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
    </div>
  );
};

export default ChangeCounter;
