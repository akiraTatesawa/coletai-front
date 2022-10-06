import { Transition, Dialog } from "@headlessui/react";
import React from "react";

import { useLogout } from "../../hooks/useLogout/index";

interface LogoutDialogProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

export function LogoutDialog({ isOpen, setIsOpen }: LogoutDialogProps) {
  const { handleLogout } = useLogout();

  const handleLogoutClick = () => {
    setIsOpen(false);
    handleLogout();
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
              <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-brand-text-primary"
                >
                  Log out
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-brand-text-secondary">
                    Deseja realmente sair da plataforma?
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-center gap-6">
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Não, ficar
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-error-100 px-4 py-2 text-sm font-medium text-error-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-error-400 focus-visible:ring-offset-2"
                    onClick={handleLogoutClick}
                  >
                    Sim, sair
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
