import { QueryClientProvider } from "react-query";

import { queryClient } from "../services/queryClient/queryClient";
import { AccountProvider } from "./AccountContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AccountProvider>{children}</AccountProvider>
    </QueryClientProvider>
  );
}
