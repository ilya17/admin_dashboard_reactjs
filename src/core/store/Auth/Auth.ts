import { action, makeAutoObservable, observable } from "mobx";
import { LoginForm } from "../../utils/Validations/interfaces";
import { UserData, UserRegisterData } from "./interfaces";

class Auth {
  ActiveUser: UserData | undefined =
    (localStorage.getItem("userData") &&
      JSON.parse(localStorage.getItem("userData")!)) ||
    undefined;

  listOfUsers: UserRegisterData[] = [
    {
      name: "Ilya",
      mail: "platonov_il@mail.ru",
      password: "12345678",
    },
    {
      name: "Dima",
      mail: "pik666@mail.ru",
      password: "1122334455",
    },
    {
      name: "Volodya",
      mail: "zavdv@mail.ru",
      password: "111333444",
    },
  ];

  constructor() {
    makeAutoObservable(this, {
      ActiveUser: observable,
      listOfUsers: observable,

      LOGIN: action,
      LOGOUT: action,
      CREATE_NEW_USER: action,
      SET_USER: action,
      CHECK_USER: action,
    });
  }

  LOGIN(loginData: LoginForm): boolean {
    if (this.CHECK_USER(loginData.email)) {
      this.listOfUsers.forEach((item) => {
        if (item.mail === loginData.email) {
          this.SET_USER({ name: item.name, mail: item.mail });
        }
      });
      return true;
    }
    return false;
  }

  LOGOUT(): void {
    localStorage.removeItem("userData");
    this.ActiveUser = undefined;
  }

  CREATE_NEW_USER(user: UserRegisterData): boolean {
    if (!this.CHECK_USER(user.mail)) {
      const newUser = { name: user.name, mail: user.mail };
      this.listOfUsers.push(user);
      this.SET_USER(newUser);
      return true;
    }
    return false;
  }

  SET_USER(user: UserData): void {
    localStorage.setItem("userData", JSON.stringify(user));
    this.ActiveUser = user;
  }

  CHECK_USER(mail: string): boolean {
    return this.listOfUsers.some((el) => el.mail === mail);
  }
}

export default new Auth();
