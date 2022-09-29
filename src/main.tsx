import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";

import { App } from "./App";
import { queryClient } from "./services/queryClient/queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
