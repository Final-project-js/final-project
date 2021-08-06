import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { Reusable } from "../../diapers/Reusable";

export const ReusableDiaper = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <Reusable />
    </div>
  );
};
