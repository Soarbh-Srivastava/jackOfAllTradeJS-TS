// import { useEffect, useRef, useState } from "react";
// import { createRoot } from "react-dom/client";

// const App = () => {
//   // useState

//   // const [count, setCount] = useState(0);

//   // //functional update
//   // const [cnt, setCnt] = useState(0);

//   // const functionalUpdate = () => {
//   //   setCnt((prev) => prev + 1);
//   // };
//   // const handleInput = () => {
//   //   setCount(1);
//   //   console.log("this is first long", count);
//   // };

//   //=================================
//   //======== use ref ===========
//   //=================================

//   const textRef = useRef(null);

//   const highlightYellow = () => {
//     textRef.current.style.backgroundColor = "yellow";
//     textRef.current.style.color = "black";
//   };
//   return (
//     // <h1 onClick={functionalUpdate}>
//     //   Count is: {count} (Click Me)
//     // </h1>
//     <>
//       <h1 ref={textRef}>Count is: 1 (Click Me)</h1>

//       <button onClick={highlightYellow}>Yellow Highlight</button>
//     </>
//   );
// };

// createRoot(document.getElementById("root")).render(<App />);

//learned useRef

// import { useRef, useState } from "react";
// import { createRoot } from "react-dom/client";

// const App = () => {
//   const [second, setSecond] = useState(0);
//   const timeRef = useRef(null);
//   const startIme = () => {
//     if (timeRef.current !== null) return;
//     timeRef.current = setInterval(() => {
//       setSecond((prev) => prev + 1);
//     }, 1000);
//   };
//   const stopTime = () => {
//     clearInterval(timeRef.current);
//     timeRef.current = null;
//   };
//   return (
//     <>
//       <p>{second}</p>
//       <button onClick={startIme}>start</button>
//       <button onClick={stopTime}>Rest</button>
//     </>
//   );
// };

// createRoot(document.getElementById("root")).render(<App />);

// ========================
// ========useMemo========
// ========================

// import { Component, useMemo, useState } from "react";
// import { createRoot } from "react-dom/client";

// const App = () => {
//   const [user, setUser] = useState(...MassiveArray);
//   const [searchQuery, setSearchQuery] = useState("");
//   let FilterQuery = useMemo(
//     () => user.filter((u) => u.contains(searchQuery)),
//     [user, searchQuery],
//   );
//   return;
//   <>
//     <Component>{FilterQuery}</Component>
//   </>;
// };

// createRoot(document.getElementById("root")).render(<App />);

// ========================
// ======useCallback=====
// ========================

// import { useCallback, useState } from "react";
// import { createRoot } from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleCnt = useCallback(() => setCount(count + 1), [count]);
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={handleCnt}>+</button>
//     </>
//   );
// };

// createRoot(document.getElementById("root")).render(<App />);

// ========================
// ======useContext=====
// ========================

// import { createContext, useContext, useState } from "react";
// import { createRoot } from "react-dom/client";

// const ThemeContext = createContext(null);

// const App = () => {
//   const [theme, setTheme] = useState("Light");
//   return (
//     <>
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         <NavBar />
//       </ThemeContext.Provider>
//     </>
//   );
// };

// const NavBar = () => {
//   const { theme, setTheme } = useContext(ThemeContext);
//   const chageThemeHandler = () => {
//     if (theme == "light") setTheme("dark");
//     else setTheme("light");
//   };
//   return (
//     <>
//       <h1>{theme}</h1>
//       <button onClick={chageThemeHandler}>change theme</button>
//     </>
//   );
// };

// createRoot(document.getElementById("root")).render(<App />);

// ========================
// =======useReduce========
// ========================
/*import { useReducer } from "react";
import { createRoot } from "react-dom/client";

let intialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };

    case "ADD_5":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "ADD_5", payload: 5 })}>
        Add 5
      </button>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
*/

import { createRoot } from "react-dom/client";

const App = () => {
  const url = "";
  const data = useFetch(url);
};

createRoot(document.getElementById("root")).render(<App />);
