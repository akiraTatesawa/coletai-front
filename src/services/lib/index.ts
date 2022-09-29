import axios from "axios";

import { IInputRegistrationData } from "../../@types/CooperativeTypes";

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
