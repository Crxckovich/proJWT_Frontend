import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../const/localStorage";

export const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

$api.interceptors.request.use((config) => {
  const storedValue = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (storedValue) {
    try {
      const authData = JSON.parse(storedValue);

      const accessToken = authData.accessToken || authData.tokens?.accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (e) {
      console.error("Ошибка парсинга токена из localStorage", e);
    }
  }

  return config;
});
