import { useContext } from "react";
import { CounterContext } from "../Components/CounterContext";

const HomeContext = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>O valor do Contador é: {counter}</p>
    </div>
  );
};

export default HomeContext;
