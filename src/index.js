import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import SnackbarProvider from "react-simple-snackbar";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./Contexts/data-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <SnackbarProvider>
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </DataProvider>
  </StrictMode>,
  rootElement
);
