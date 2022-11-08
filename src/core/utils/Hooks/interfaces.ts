import { UserData } from "../../store/Auth/interfaces";

export interface LocalStorageHookProps {
  key: string;
  initialValue: UserData | null;
}
