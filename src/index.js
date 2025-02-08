import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";


const domain = window.location.hostname;
let rootPath = "";
if (domain === "craftycheshire.github.io")
  rootPath = "/Capstone-Level-3-Part-2.5";
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  </BrowserRouter>
);
