import { PrimaryButton } from "../Button";
import {
  XIcon,
  FormsContainer,
  Forms,
  DescriptionTextarea,
  CloseButton,
  FormsTitle,
  SubmitCollectionButton,
} from "./styles";

export function CreateCollectionForms() {
  return (
    <FormsContainer>
      <FormsTitle>Criar coleta</FormsTitle>
      <CloseButton>
        <XIcon weight="bold" />
      </CloseButton>
      <Forms>
        <DescriptionTextarea
          name="description"
          placeholder="Descreva brevemente sua coleta"
          maxLength={140}
        />
        <SubmitCollectionButton as={PrimaryButton} type="submit">
          Solicitar coleta
        </SubmitCollectionButton>
      </Forms>
    </FormsContainer>
  );
}
