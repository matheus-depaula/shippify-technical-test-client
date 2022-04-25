import { toast } from "react-toastify";

export const useToastify = () => {
  const defaultToast = (message: string) => toast(message);

  const infoToast = (message: string) => toast.info(message);

  const successToast = (message: string) => toast.success(message);

  const errorToast = (error: any) => {
    let message = "Erro inesperado.";

    if (error?.message) message = error.message;
    else if (typeof error === "string") message = error;

    return toast.error(message);
  };

  return { defaultToast, infoToast, successToast, errorToast };
};
