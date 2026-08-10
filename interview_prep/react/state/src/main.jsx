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

// =================================
// ========== gloabl State =========
// =================================

// const ThemeContext = React.createContext();
// const App = () => {
//   const [theme, setTheme] = useState("light");
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <MainContain></MainContain>
//     </ThemeContext.Provider>
//   );
// };

// const MainContain = () => {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <>
//       <p>{theme}</p>
//     </>
//   );
// };

// =================================
// ========== Drived State =========
// =================================

const App = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [searchQuery, setSearchQuery] = useState("");

  // BAD: Creating redundant state for the derived value
  // const [filteredUsers, setFilteredUsers] = useState([]);

  // GOOD: Calculating Derived State on the fly
  // This recalculates automatically whenever users or searchQuery changes
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
