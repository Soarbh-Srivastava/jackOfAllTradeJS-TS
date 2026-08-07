import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./components/welcome";
import ReuseableComponent from "./components/ReuseableComponent";
import Wapper from "./components/Wapper";
import DefaultProps from "./components/DefaultProps";
import DashBoard from "./components/propDrill/DashBoard";

createRoot(document.getElementById("root")).render(
  <>
    <DashBoard user="this is prop drill" />
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
  </>,
);
