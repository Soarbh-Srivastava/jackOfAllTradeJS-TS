import React from "react";

const DefaultProps = ({ name = "soarbh", age = 29 }) => {
  return (
    <div>
      {name}
      {age}
    </div>
  );
};

export default DefaultProps;
