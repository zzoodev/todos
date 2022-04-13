import App from "./App";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
