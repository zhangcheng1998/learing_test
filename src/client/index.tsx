import { hydrateRoot } from "react-dom/client";
// import Home from "@/pages/Home";
import router from "@/router";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Client = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((item, index) => {
          return <Route {...item} key={index}></Route>;
        })}
      </Routes>
    </BrowserRouter>
  );
};

hydrateRoot(document.getElementById("root") as HTMLElement, <Client />);
