import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  // useState

  // const [count, setCount] = useState(0);

  // //functional update
  // const [cnt, setCnt] = useState(0);

  // const functionalUpdate = () => {
  //   setCnt((prev) => prev + 1);
  // };
  // const handleInput = () => {
  //   setCount(1);
  //   console.log("this is first long", count);
  // };
  return <h1 onClick={functionalUpdate}>Count is: {count} (Click Me)</h1>;
};

createRoot(document.getElementById("root")).render(<App />);
