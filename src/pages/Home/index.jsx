import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { Products } from "../../components/Products";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <SearchPart />
      <Products />
    </div>
  );
};
