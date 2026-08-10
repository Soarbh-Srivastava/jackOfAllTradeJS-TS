import { createRoot } from "react-dom/client";

// using it render the logout button
// const UserDashBoard = ({ isLogin }) => {
//   if (!isLogin) {
//     return <p>Incorrect password pls try again</p>;
//   }
//   return (
//     <>
//       <Dashboard />
//       {isLogin ? <button>Log out</button> : <button>Login</button>}
//     </>
//   );`
// };

const App = () => {
  const user = [
    { id: 1, user: "soarbh", age: 22 },
    { id: 2, user: "xyz", age: 18 },
    { id: 3, user: "a", age: 18 },
    { id: 4, user: "yz", age: 18 },
    { id: 5, user: "z", age: 18 },
  ];
  const userList = user.map((u) => <li key={u.id}>{u.user}</li>);
  return <div>{userList}</div>;
};

createRoot(document.getElementById("root")).render(<App />);
