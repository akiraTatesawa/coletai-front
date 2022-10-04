import { Popover } from "@headlessui/react";
import { Plus } from "phosphor-react";
import styled from "styled-components";

export const WidgetContainer = styled(Popover)`
  width: 100%;
  height: fit-content;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 600px) {
    max-width: 450px;
  }
`;

export const PopoverButton = styled(Popover.Button)`
  min-width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--brand);

  border: none;
  border-radius: 1.5rem;

  &:focus {
    outline-color: var(--brand-stroke);
    outline-offset: 2px;
  }
`;

export const AddIcon = styled(Plus)`
  color: var(--text-on-brand);
  font-size: 2rem;

  align-self: center;
  justify-self: center;
`;

export const PopoverPanel = styled(Popover.Panel)`
  width: calc(100vw - 4rem);

  @media (min-width: 600px) {
    width: 100%;
  }
`;
