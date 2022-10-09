import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import { IApiCreateCollection, IApiPatchData } from "../../@types/APITypes";
import {
  ILoginResponse,
  IInputLoginData,
  IInputRegistrationData,
} from "../../@types/AuthTypes";
import { CooperativeNameLocation } from "../../@types/CooperativeTypes";

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

export async function loginUser(
  loginData: IInputLoginData
): Promise<AxiosResponse<ILoginResponse>> {
  return api.post("/users/sign-in", loginData);
}

export async function loginCooperative(
  loginData: IInputLoginData
): Promise<AxiosResponse<ILoginResponse>> {
  return api.post("/cooperatives/sign-in", loginData);
}

export async function createCollection({
  collectionData,
  config,
}: IApiCreateCollection) {
  return api.post("/collections", collectionData, config);
}

export async function getCooperativeCollections(config: AxiosRequestConfig) {
  return api.get("/collections/cooperative", config);
}

export async function getUserCollections(config: AxiosRequestConfig) {
  return api.get("/collections/user", config);
}

export async function cancelCollection({ config, id }: IApiPatchData) {
  return api.patch(`/collections/${id}/cancel`, {}, config);
}

export async function finishCollection({ config, id }: IApiPatchData) {
  return api.patch(`/collections/${id}/finish`, {}, config);
}

export async function getCooperativesNameLocation(): Promise<
  AxiosResponse<CooperativeNameLocation[]>
> {
  return api.get("/cooperatives/name-location");
}
