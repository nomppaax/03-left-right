import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>plus</button>

      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
