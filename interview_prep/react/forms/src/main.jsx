import { createRoot } from "react-dom/client";
import { ControlledForm } from "./controlledForm";
import { UncontrolledForm } from "./uncontrolledForm";
import { MutipleValueForm } from "./mutipleValue";
import { ReactHookForm } from "./reactHookForm";

const App = () => {
  return (
    <>
      {/* <ControlledForm />
      <UncontrolledForm />
      <MutipleValueForm /> */}
      <ReactHookForm />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
