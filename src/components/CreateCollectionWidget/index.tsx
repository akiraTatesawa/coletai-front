import { CreateCollectionForms } from "../CreateCollectionForms";
import {
  AddIcon,
  PopoverButton,
  PopoverPanel,
  WidgetContainer,
} from "./styles";

export function CreateCollectionWidget() {
  return (
    <WidgetContainer>
      <PopoverPanel>
        <CreateCollectionForms />
      </PopoverPanel>

      <PopoverButton>
        <AddIcon />
      </PopoverButton>
    </WidgetContainer>
  );
}
