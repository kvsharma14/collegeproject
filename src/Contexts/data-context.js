import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { dataReducer } from "../Reducers/dataReducers";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    isUserLoggedIn: false,
    userData: {},
    projectData: {}
  });

  useEffect(() => {
    (async function () {
      const {
        data: { result }
      } = await axios.get("");
      dataDispatch({ type: "LOAD", payload: result });
    })();
  }, [dataState.isUserLoggedIn]);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
