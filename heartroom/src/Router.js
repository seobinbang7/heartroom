import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";


const Router = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  </BrowserRouter>;
};

export default Router;

