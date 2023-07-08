"use client";
import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "THEME_CHANGED":
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case "STATE_RETRIEVED":
      return {
        ...action.data,
      };
    case "INITIALIZE_STATE":
      return {
        ...state,
        darkTheme: false,
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const themeLocalStorageKey = "theme";

  const initialState = () => {
    return {};
  };

  const [state, dispatch] = useReducer(themeReducer, null, initialState);

  useEffect(() => {
    if (typeof window !== "undefined" && "darkTheme" in state) {
      window.localStorage.setItem(themeLocalStorageKey, JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const storedState = window.localStorage.getItem(themeLocalStorageKey);
    if (storedState) {
      dispatch({ type: "STATE_RETRIEVED", data: JSON.parse(storedState) });
    } else {
      dispatch({ type: "INITIALIZE_STATE" });
    }
  }, []);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
