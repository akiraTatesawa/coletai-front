import { QueryClientProvider } from "react-query";

import { queryClient } from "../services/queryClient/queryClient";
import { AccountProvider } from "./AccountContext";
import { CollectionProvider } from "./CollectionsContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <CollectionProvider>{children}</CollectionProvider>
      </AccountProvider>
    </QueryClientProvider>
  );
}
