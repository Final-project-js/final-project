import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { Activewear } from "../../boysItems/Activewear";

export const BoysWear = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <Activewear />
    </div>
  );
};
