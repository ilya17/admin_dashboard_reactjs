import { useState } from "react";
import { UserData } from "../../store/Auth/interfaces";

export const useLocalStorage = (key: string, initialValue?: UserData) => {
  const storage = window.localStorage;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = storage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(
        `Произошла ошибка получения данных из локального хранилища - ${
          (error as Error).message
        }`
      );
      return initialValue;
    }
  });

  const setValue = (newValue: any) => {
    try {
      storage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(
        `Произошла ошибка записи данных в локальное хранилище - ${
          (error as Error).message
        }`
      );
      setStoredValue(newValue);
    }
  };

  return [storedValue, setValue];
};
