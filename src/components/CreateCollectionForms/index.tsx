import { useState } from "react";

import { RecyclingTypes } from "../../@types/CollectionTypes";
import { useCollectionCreate } from "../../hooks/useCollectionCreate/index";
import { PrimaryButton } from "../Button";
import {
  XIcon,
  FormsContainer,
  Forms,
  DescriptionTextarea,
  CloseButton,
  FormsTitle,
  SubmitCollectionButton,
  TypesContainer,
  RecyclingType,
} from "./styles";

interface TypeProps {
  typeObject: RecyclingTypes;
  handleTypeChange: (recyclingType: RecyclingTypes) => void;
}

function Type({ typeObject, handleTypeChange }: TypeProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    handleTypeChange(typeObject);
  };

  return (
    <RecyclingType onClick={handleClick} isSelected={isSelected} type="button">
      {typeObject.name}
    </RecyclingType>
  );
}

export function CreateCollectionForms() {
  const types: RecyclingTypes[] = [
    { name: "Plástico" },
    { name: "Metal" },
    { name: "Papel" },
    { name: "Vidro" },
  ];

  const {
    formData,
    handleCollectionSubmit,
    handleDescriptionChange,
    handleTypeChange,
  } = useCollectionCreate();

  return (
    <FormsContainer>
      <FormsTitle>Criar coleta</FormsTitle>
      <CloseButton>
        <XIcon weight="bold" />
      </CloseButton>
      <Forms onSubmit={handleCollectionSubmit}>
        <TypesContainer>
          {types.map((type) => (
            <Type
              key={type.name}
              handleTypeChange={handleTypeChange}
              typeObject={type}
            />
          ))}
        </TypesContainer>
        <DescriptionTextarea
          name="description"
          value={formData.description}
          onChange={handleDescriptionChange}
          placeholder="Descreva brevemente sua coleta"
          maxLength={140}
          required
        />
        <SubmitCollectionButton as={PrimaryButton} type="submit">
          Solicitar coleta
        </SubmitCollectionButton>
      </Forms>
    </FormsContainer>
  );
}
