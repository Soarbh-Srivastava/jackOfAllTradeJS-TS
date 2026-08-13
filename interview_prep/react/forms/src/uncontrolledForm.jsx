import { useRef } from "react";

export const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        Uncontrolled form:
        <input ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
