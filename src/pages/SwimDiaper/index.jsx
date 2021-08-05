import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { SwimWear } from "../../diapers/SwimWear";

export const SwimDiaper = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <SwimWear />
    </div>
  );
};
