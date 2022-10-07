import { AxiosResponse } from "axios";
import React from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

export interface RecyclingTypes {
  name: string;
}

export interface CreateCollectionFormData {
  types: RecyclingTypes[];
  description: string;
}

export type CollectionStatus = "ongoing" | "cancelled" | "finished";

export interface EntityData {
  id: string;
  name: string;
}

export interface CollectionData {
  id: string;
  status: CollectionStatus;
  description: string;
  cooperative: EntityData;
  user: EntityData;
  types: RecyclingTypes[];
  created_at: Date;
  updated_at: Date;
}

export interface ICollectionContext {
  refetchCollections: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<AxiosResponse<CollectionData[], any>, unknown>
  >;
  collectionRef: React.MutableRefObject<null | HTMLElement>;
  scrollToCollection(): void;
}
