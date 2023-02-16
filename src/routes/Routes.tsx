import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, PageNotFound, Login, Register } from "../pages";

type Props = {};
const routes = [
  { path: "/", component: <LandingPage />, permissions: null },
  { path: "/login", component: <Login />, permissions: null },
  { path: "/register", component: <Register />, permissions: null },
  { path: "*", component: <PageNotFound />, permissions: null },
];

const Router = (props: Props) => {
  return (
    <>
      <Routes>
        {routes.map((_route, idx) => (
          <Route key={idx} path={_route.path} element={_route.component} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
