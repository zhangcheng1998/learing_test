import { hydrateRoot } from "react-dom/client";
// import Home from "@/pages/Home";
import router from "@/router";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { clientStore } from "@/store";
const Client = (): JSX.Element => {
  return (
    <Provider store={clientStore}>
      <BrowserRouter>
        <Routes>
          {router.map((item, index) => {
            return <Route {...item} key={index}></Route>;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

hydrateRoot(document.getElementById("root") as HTMLElement, <Client />);
