export interface RecyclingTypes {
  name: string;
}

export interface CreateCollectionFormData {
  types: RecyclingTypes[];
  description: string;
}

export type CollectionStatus = "ongoing" | "cancelled" | "finished";

export interface CollectionData {
  id: string;
  userId: string;
  cooperativeId: string;
  description: string;
  status: CollectionStatus;
  types: RecyclingTypes[];
  created_at: Date;
  updated_at: Date;
}
