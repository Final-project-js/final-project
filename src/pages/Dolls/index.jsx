import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { GirlsDolls } from "../../assets/products/toys/GirlsDolls";

export const Dolls = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <GirlsDolls />
    </div>
  );
};
