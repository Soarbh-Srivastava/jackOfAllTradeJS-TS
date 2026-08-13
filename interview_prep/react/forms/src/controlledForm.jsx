import { useState } from "react";

export const ControlledForm = () => {
  const [fname, setFname] = useState("");
  return (
    <form>
      <label>
        Controlled Form:
        <input value={fname} onChange={(e) => setFname(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
