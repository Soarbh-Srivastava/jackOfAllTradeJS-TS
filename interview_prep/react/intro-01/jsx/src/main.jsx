import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./components/welcome";
import ReuseableComponent from "./components/ReuseableComponent";

createRoot(document.getElementById("root")).render(
  <>
    <Welcome message="hello world" />
    <Welcome message="message 1" />
    <Welcome message="message 2" />
    <ReuseableComponent
      title="Reusable Component"
      footerAction={<button>Save</button>}
    >
      <p>This is a resuable component</p>
      <b>It can have children</b>
    </ReuseableComponent>
  </>,
);
