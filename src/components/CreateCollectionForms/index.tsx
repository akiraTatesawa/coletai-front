import { ButtonHTMLAttributes, useState } from "react";

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

interface TypeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeObject: RecyclingTypes;
  handleTypeChange: (recyclingType: RecyclingTypes) => void;
}

function Type({ typeObject, handleTypeChange, ...props }: TypeProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    handleTypeChange(typeObject);
  };

  return (
    <RecyclingType
      {...props}
      onClick={handleClick}
      isSelected={isSelected}
      type="button"
    >
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
    isLoading,
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
              disabled={isLoading}
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
          disabled={isLoading}
          required
        />
        <SubmitCollectionButton
          as={PrimaryButton}
          type="submit"
          disabled={isLoading}
        >
          Solicitar coleta
        </SubmitCollectionButton>
      </Forms>
    </FormsContainer>
  );
}
