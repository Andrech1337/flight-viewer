import { BrowserRouter, Route, Routes } from "react-router";
import type { FC } from "react";
import Home from "../pages/Home.tsx";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
