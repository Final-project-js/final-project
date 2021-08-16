import React from "react";
import { SearchPart } from "../components/SearchPart";
import { TopCateg } from "../components/TopCateg";
import { Products } from "../components/Products";
export const All = () => {
  return (
    <div>
      <SearchPart />
      <TopCateg />
      <Products />
    </div>
  );
};
