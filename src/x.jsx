import React, { useContext } from "react";
import { MyContext } from "./App";

const X = () => {
  const { state, modifyState } = useContext(MyContext);
  const xyz = () => {
    data.modifyState();
  };
  return (
    <>
      <div>{state["user_register"].username}</div>
      <button onClick={xyz}>xxxx</button>
    </>
  );
};

export { X };
