import axios from "axios";

import {
  IInputLoginData,
  IInputRegistrationData,
} from "../../@types/AuthTypes";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function createNewUser(data: IInputRegistrationData) {
  const promise = await api.post("/users", data);

  return promise.data;
}

export async function createNewCooperative(data: IInputRegistrationData) {
  const promise = await api.post("/cooperatives", data);

  return promise.data;
}

export async function loginUser(loginData: IInputLoginData) {
  const promise = await api.post("/users/sign-in", loginData);

  return promise.data;
}

export async function loginCooperative(loginData: IInputLoginData) {
  const promise = await api.post("/cooperatives/sign-in", loginData);

  return promise.data;
}
