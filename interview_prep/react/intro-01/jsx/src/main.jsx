import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./components/welcome";
import ReuseableComponent from "./components/ReuseableComponent";
import Wapper from "./components/Wapper";
import DefaultProps from "./components/DefaultProps";
import DashBoard from "./components/propDrill/DashBoard";
import Component1 from "./components/composition/Component1";
import Component2 from "./components/composition/Component2";
import Component3 from "./components/composition/Component3";

function App() {
  const [user, setUser] = useState("soarbh");
  return (
    <>
      <DashBoard user="this is prop drill" />
      {/* {this is solution of prop drill} */}
      <Component1>
        <Component2>
          <Component3 userObject={user} />
        </Component2>
      </Component1>
      <Welcome message="hello world" />
      <Welcome message="message 1" />
      <Welcome message="message 2" />
      <ReuseableComponent
        title="Reusable Component"
        footerAction={<button>Save</button>}
      >
        <p>This is a resuable component</p>
        <b>It can have children</b>
        <Wapper>
          <>this is warpper</>
        </Wapper>
      </ReuseableComponent>

      <DefaultProps name="honey" age={22} />
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
