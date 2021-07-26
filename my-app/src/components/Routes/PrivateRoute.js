import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export function PrivateRoute({ path, ...props }) {
  const { auth } = useAuth();
  return auth ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
