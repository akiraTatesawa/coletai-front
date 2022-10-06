import { Transition, Popover } from "@headlessui/react";
import { AxiosResponse } from "axios";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

import { CollectionData } from "../../@types/CollectionTypes";
import { CreateCollectionForms } from "../CreateCollectionForms";
import { AddIcon, PopoverButton, WidgetContainer } from "./styles";

interface CreateCollectionWidgetProps {
  refetchCollections: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<AxiosResponse<CollectionData[], any>, unknown>
  >;
}

export function CreateCollectionWidget({
  refetchCollections,
}: CreateCollectionWidgetProps) {
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
        <Popover.Panel className="w-[calc(100vw-4rem)] md:w-auto">
          {({ close }) => (
            <CreateCollectionForms
              close={close}
              refetchCollections={refetchCollections}
            />
          )}
        </Popover.Panel>
      </Transition>

      <PopoverButton>
        <AddIcon />
      </PopoverButton>
    </WidgetContainer>
  );
}
