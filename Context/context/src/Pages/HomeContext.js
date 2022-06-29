import { useContext } from "react";
import ChangeCounter from "../Components/ChangeCounter";
import { CounterContext } from "../Components/CounterContext";

const HomeContext = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>O valor do Contador é: {counter}</p>
      {/*Alterando valor do contexto */}
      <ChangeCounter />
    </div>
  );
};

export default HomeContext;
