import React, { useState } from "react";
import { useContext } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

const ThemeContext = React.createContext();
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContain></MainContain>
    </ThemeContext.Provider>
  );
};

const MainContain = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>{theme}</p>
    </>
  );
};
