import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { Dresses } from "../../assets/products/girlsItem/Dresses";

export const GirlsDresses = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <Dresses />
    </div>
  );
};
