import { useContext } from "react";
import ChangeCounter from "../Components/ChangeCounter";
import { CounterContext } from "../Components/CounterContext";

// refatorando com hook
//import { useCounterContext } from "../Components/Hooks/useCounterContext.js";

import { useTitleColorContext } from "../Components/Hooks/useTitleColorContext";
//import { TitleColorContext } from "../Components/TitleColorContext";
const HomeContext = () => {
  const { counter } = useContext(CounterContext);
  //const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>O valor do Contador é: {counter}</p>
      {/*Alterando valor do contexto */}
      <ChangeCounter />
      {/*alterando contexto mais complexo cores*/}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
    </div>
  );
};

export default HomeContext;
