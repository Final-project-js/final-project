import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { DollParms } from "../../toys/DollParms";

export const BabyParms = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <DollParms />
    </div>
  );
};
