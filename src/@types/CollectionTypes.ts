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
