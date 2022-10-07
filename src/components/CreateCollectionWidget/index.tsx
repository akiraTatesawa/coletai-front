import { Transition, Popover } from "@headlessui/react";
import React from "react";

import { CreateCollectionForms } from "../CreateCollectionForms";
import { AddIcon, PopoverButton, WidgetContainer } from "./styles";

export function CreateCollectionWidget() {
  return (
    <WidgetContainer>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="w-[calc(100vw-4rem)] md:w-96 rounded-lg ring-2 ring-brand-200 shadow-xl md:shadow-lg">
          {({ close }) => <CreateCollectionForms close={close} />}
        </Popover.Panel>
      </Transition>

      <PopoverButton>
        <AddIcon />
      </PopoverButton>
    </WidgetContainer>
  );
}
