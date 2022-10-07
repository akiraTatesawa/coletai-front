import { Transition, Dialog } from "@headlessui/react";
import React from "react";

import { useCollectionCancel } from "../../hooks/useCollectionCancel/index";

interface CancelDialogProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
  collectionId: string;
}

export function CancelDialog({
  isOpen,
  setIsOpen,
  collectionId,
}: CancelDialogProps) {
  const { handleCancellation, isCancelling } = useCollectionCancel();

  const handleCancellationClick = async () => {
    await handleCancellation(collectionId);
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xs md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl md:text-2xl font-medium leading-6 text-brand-text-primary"
                >
                  Cancelar coleta
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm md:text-lg text-brand-text-secondary">
                    Essa ação não pode ser desfeita. Deseja continuar?
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-center gap-6">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm md:text-base font-medium text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50"
                    onClick={() => setIsOpen(false)}
                    disabled={isCancelling}
                  >
                    Não, retornar
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-error-100 px-4 py-2 text-sm md:text-base font-medium text-error-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-error-400 focus-visible:ring-offset-2 disabled:opacity-50"
                    onClick={handleCancellationClick}
                    disabled={isCancelling}
                  >
                    Sim, cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
