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
        <span>Text</span>
      </PopoverPanel>

      <PopoverButton>
        <AddIcon />
      </PopoverButton>
    </WidgetContainer>
  );
}
