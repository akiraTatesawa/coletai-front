import React from "react";

import {
  CreateCollectionFormData,
  RecyclingTypes,
} from "../../@types/CollectionTypes";

export function useCollectionCreate() {
  const [formData, setFormData] = React.useState<CreateCollectionFormData>({
    types: [],
    description: "",
  });

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeChange = (recyclingType: RecyclingTypes) => {
    // If exists, remove it. If not, add it
    if (formData.types.some(({ name }) => recyclingType.name === name)) {
      setFormData({
        ...formData,
        types: [
          ...formData.types.filter(({ name }) => name !== recyclingType.name),
        ],
      });
    } else {
      setFormData({ ...formData, types: [...formData.types, recyclingType] });
    }
  };

  const handleCollectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return {
    formData,
    handleDescriptionChange,
    handleTypeChange,
    handleCollectionSubmit,
  };
}
