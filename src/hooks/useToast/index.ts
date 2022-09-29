import { toast } from "react-toastify";

interface ICallToast {
  toastType: "info" | "success" | "warn" | "error";
  message: string | undefined;
  id: number;
}

export function useToast() {
  const callToast = ({
    message = "Um erro ocorreu, tente novamente",
    toastType,
    id,
  }: ICallToast) => {
    toast[toastType](message, {
      toastId: id,
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { callToast };
}
