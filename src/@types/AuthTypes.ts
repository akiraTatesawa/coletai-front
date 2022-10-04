import { AxiosResponse } from "axios";

export interface IInputRegistrationData {
  name: string;
  email: string;
  password: string;
  latitude: number;
  longitude: number;
}

export interface IInputLoginData {
  email: string;
  password: string;
}

export interface ILoginResponse extends AxiosResponse {
  data: {
    token: string;
  };
}
