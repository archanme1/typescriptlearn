"use client";

import { createContext, useReducer } from "react";

type stateType = {
  themeColor: string;
  fontSize: number;
};

type changeThemeColor = {
  ways: "CHANGE_THEME_COLOR";
};

type changeFontSize = {
  ways: "CHANGE_FONT_SIZE";
  payload: number;
};

type actionType = changeThemeColor | changeFontSize;

const INITIAL_FIRST_STATE = {
  themeColor: "dark",
  fontSize: 18,
};

export const THemeContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({
  state: INITIAL_FIRST_STATE,
  dispatch: () => {},
});

const themeReducer = (state: stateType, action: actionType) => {
  switch (action.ways) {
    case "CHANGE_THEME_COLOR":
      return {
        ...state,
        themeColor: state.themeColor === "dark" ? "white" : "dark",
      };
    case "CHANGE_FONT_SIZE":
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      return state;
  }
};

export const THemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_FIRST_STATE);

  return (
    <THemeContext.Provider value={{ state, dispatch }}>
      {children}
    </THemeContext.Provider>
  );
};
