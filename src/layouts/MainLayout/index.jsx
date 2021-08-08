import React from "react";
import { Route } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TopCateg } from "../../components/TopCateg";

export const MainLayout = ({ component: Component }) => {
  return (
    <Route>
      <Header />
      <Component />
      <TopCateg />
      <Footer />
    </Route>
  );
};
