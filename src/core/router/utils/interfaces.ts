import { UserData } from "../../store/Auth/interfaces";

export interface ProtectedRouteProps {
  user?: UserData;
  redirectPath?: string;
}
