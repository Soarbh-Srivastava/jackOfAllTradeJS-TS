import { createRoot } from "react-dom/client";
import { ControlledForm } from "./controlledForm";
import { UncontrolledForm } from "./uncontrolledForm";
import { MutipleValueForm } from "./mutipleValue";

const App = () => {
  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <MutipleValueForm />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
