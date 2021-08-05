import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { GirlsDolls } from "../../toys/GirlsDolls";

export const Dolls = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <GirlsDolls />
    </div>
  );
};
