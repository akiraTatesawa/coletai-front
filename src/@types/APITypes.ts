import { AxiosRequestConfig } from "axios";

import { CreateCollectionFormData } from "./CollectionTypes";

export interface IAxiosErrorData {
  message: string;
  name: string;
}

export interface IApiCreateCollection {
  collectionData: CreateCollectionFormData;
  config: AxiosRequestConfig;
}

export interface IApiPatchData {
  id: string;
  config: AxiosRequestConfig;
}
