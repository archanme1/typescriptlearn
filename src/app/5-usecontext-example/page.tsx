"use client";
import { THemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {
  const { state, dispatch } = useContext(THemeContext);

  console.log(state);

  return (
    <div className="useContextExample">
      <button onClick={() => dispatch({ ways: "CHANGE_THEME_COLOR" })}>
        Change Theme
      </button>
      <button
        onClick={() => dispatch({ ways: "CHANGE_FONT_SIZE", payload: 342 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default UseContextExample;
