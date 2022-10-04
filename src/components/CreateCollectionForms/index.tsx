import { useState } from "react";

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
  name: string;
}

function Type({ name }: TypeProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <RecyclingType
      onClick={() => setIsSelected(!isSelected)}
      isSelected={isSelected}
      type="button"
    >
      {name}
    </RecyclingType>
  );
}

export function CreateCollectionForms() {
  const types: string[] = ["Plástico", "Metal", "Papel", "Vidro"];

  return (
    <FormsContainer>
      <FormsTitle>Criar coleta</FormsTitle>
      <CloseButton>
        <XIcon weight="bold" />
      </CloseButton>
      <Forms>
        <TypesContainer>
          {types.map((type) => (
            <Type name={type} />
          ))}
        </TypesContainer>
        <DescriptionTextarea
          name="description"
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
