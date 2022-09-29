import "./styles/reset.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { RouterNavigator } from "./components/RouterNavigator";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <GlobalStyles />
      <RouterNavigator />
    </BrowserRouter>
  );
}
