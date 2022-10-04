import { Popover } from "@headlessui/react";
import { Plus } from "phosphor-react";
import styled from "styled-components";

export const WidgetContainer = styled(Popover)`
  width: fit-content;
  height: fit-content;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PopoverButton = styled(Popover.Button)`
  min-width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--brand);

  border: none;
  border-radius: 2em;
`;

export const AddIcon = styled(Plus)`
  color: var(--text-on-brand);
  font-size: 2rem;

  align-self: center;
  justify-self: center;
`;

export const PopoverPanel = styled(Popover.Panel)``;
