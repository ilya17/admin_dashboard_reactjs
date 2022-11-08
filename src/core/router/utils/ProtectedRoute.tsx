import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "./interfaces";

export const ProtectedRoute = ({
  user,
  redirectPath = "auth/registration",
}: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
