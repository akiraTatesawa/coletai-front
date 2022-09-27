import { BrowserRouter } from "react-router-dom";

import { RouterNavigator } from "./Components/RouterNavigator";

export function App() {
  return (
    <BrowserRouter>
      <RouterNavigator />
    </BrowserRouter>
  );
}
