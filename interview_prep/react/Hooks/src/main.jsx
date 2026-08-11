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

import { Component, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [user, setUser] = useState(...MassiveArray);
  const [searchQuery, setSearchQuery] = useState("");
  let FilterQuery = useMemo(
    () => user.filter((u) => u.contains(searchQuery)),
    [user, searchQuery],
  );
  return;
  <>
    <Component>{FilterQuery}</Component>
  </>;
};

createRoot(document.getElementById("root")).render(<App />);
