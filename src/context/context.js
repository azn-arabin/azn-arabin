"use client";
import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "THEME_CHANGED":
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const themeLocalStorageKey = "theme";

  const initialState = () => {
    let storedState = "";
    if (typeof window !== "undefined")
      storedState = window.localStorage.getItem(themeLocalStorageKey);
    return storedState ? JSON.parse(storedState) : { lightTheme: true };
  };

  const [state, dispatch] = useReducer(themeReducer, null, initialState);

  useEffect(() => {
    if (typeof window !== "undefined")
      window.localStorage.setItem(themeLocalStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
