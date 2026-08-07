import { useState } from "react";

export const Parent = () => {
  const [message, setMessage] = useState("");
  const messageHandler = (newData) => {
    setMessage(newData);
  };
  return (
    <div>
      <p>{message}</p>
      <ChildrenComp onMessage={messageHandler} />
    </div>
  );
};

export const ChildrenComp = ({ onMessage }) => {
  const handleButton = () => {
    let dataToPassUp = "this is message to pass up";
    onMessage(dataToPassUp);
  };
  return (
    <>
      <h3>set data to parent</h3>
      <button onClick={handleButton}>Click</button>
    </>
  );
};
