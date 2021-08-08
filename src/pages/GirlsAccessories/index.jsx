import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { AccGirls } from "../../assets/products/girlsItem/AccGirls";

export const GirlsAccessories = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <AccGirls />
    </div>
  );
};