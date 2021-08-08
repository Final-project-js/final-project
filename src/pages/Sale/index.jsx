import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { SaleItems } from "../../assets/products/toys/SaleItems";

export const Sale = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <SaleItems />
    </div>
  );
};
