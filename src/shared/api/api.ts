import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../const/localStorage";

export const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    const storedValue = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
    config.headers.Authorization = encodeURIComponent(storedValue);
  }
  return config;
});
