import React from "react";

import { ICollectionContext } from "../@types/CollectionTypes";
import { useCollectionList } from "../hooks/useCollectionList/index";

export const CollectionContext = React.createContext<ICollectionContext | null>(
  null
);

export function CollectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { refetch } = useCollectionList();
  const collectionRef = React.useRef<HTMLElement | null>(null);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <CollectionContext.Provider
      value={{ refetchCollections: refetch, collectionRef, scrollToCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
