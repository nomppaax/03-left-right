import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => console.log("clicked")}>plus</button>
    </div>
  );
};

export default App;
