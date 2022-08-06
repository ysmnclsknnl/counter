import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState("0");

  const add = (number) => setCount(parseInt(count) + parseInt(number));
  const decrease = (number) =>
    setCount(
      parseInt(count) - parseInt(number) > 0
        ? parseInt(count) - parseInt(number)
        : 0
    );

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <>
      <h3>{feedback}</h3>
      <Count count={count}></Count>
      <div style={{ display: "flex", margin: "2em" }}>
        <Button text="add2!" num="2" func={add}></Button>
        <Button text="decrease3!" num="3" func={decrease}></Button>
      </div>
    </>
  );
};

export default Counter;
