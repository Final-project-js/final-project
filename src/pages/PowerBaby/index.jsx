import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { Powder } from "../../diapers/Powder";

export const PowerBaby = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <Powder />
    </div>
  );
};
