import { useCooperativeCreation } from "../useCooperativeCreation/index";
import { useUserCreation } from "../useUserCreation";

export function useSetRegistrationData() {
  const setPath = (registrationType: "cooperativa" | "usuário") => {
    if (registrationType === "cooperativa") {
      const cooperativeCreation = useCooperativeCreation();
      return { ...cooperativeCreation };
    }
    const userCreation = useUserCreation();
    return { ...userCreation };
  };

  return { setPath };
}
