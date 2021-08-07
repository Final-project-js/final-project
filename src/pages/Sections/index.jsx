import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { InStore } from "../../assets/products/babyItems/InStore";

export const Sections = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <InStore />
    </div>
  );
};
