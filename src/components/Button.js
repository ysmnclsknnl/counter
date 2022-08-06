import React from "react";

const Button = ({ func, text, num }) => {
  return <button onClick={() => func(num)}>{text}</button>;
};

export default Button;
