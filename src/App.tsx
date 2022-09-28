import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";

import { RouterNavigator } from "./components/RouterNavigator";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RouterNavigator />
    </BrowserRouter>
  );
}
