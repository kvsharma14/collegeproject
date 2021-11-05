import { Route, Navigate } from "react-router-dom";
import { useData } from "../Contexts/data-context";

export function PrivateRoute({ path, element }) {
  const { dataState } = useData();
  return dataState.isUserLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}
