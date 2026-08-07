import React from "react";

const ReuseableComponent = (props) => {
  // props.title = "title"; //props are readonly
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
      <footer>{props.footerAction && <div>{props.footerAction}</div>}</footer>
    </div>
  );
};

export default ReuseableComponent;
