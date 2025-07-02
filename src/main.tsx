import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { BrowserRouter } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
