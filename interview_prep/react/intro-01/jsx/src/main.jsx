import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./components/welcome";

createRoot(document.getElementById("root")).render(
  <>
    <Welcome message="hello world" />
  </>,
);
