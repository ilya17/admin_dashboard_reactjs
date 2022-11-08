import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle } from "./styled";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container!);
root.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>
);
