import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, PageNotFound, Login, Register, Dashboard } from "../pages";
import Playground from "../pages/Playground/Playground";
Playground;

type Props = {};
const routes = [
  { path: "/", component: <LandingPage />, permissions: [] },
  { path: "/login", component: <Login />, permissions: [] },
  { path: "/register", component: <Register />, permissions: [] },
  { path: "/pg", component: <Playground />, permissions: [] },
  { path: "/marketplace", component: <Dashboard />, permissions: [] },
  { path: "*", component: <PageNotFound />, permissions: [] },
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
