import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

const App = () => {
  return <h1>APp</h1>;
};

export const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <Outlet />
    </div>
  );
};
export const Setting = () => {
  return <h1>Setting</h1>;
};
export const Home = () => {
  return <h1>Home</h1>;
};
