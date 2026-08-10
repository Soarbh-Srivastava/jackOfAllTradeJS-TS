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
