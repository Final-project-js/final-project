import React from "react";
import { Header } from "../../components/Header";
import { SearchPart } from "../../components/SearchPart";
import { SleepingWear } from "../../assets/products/babyItems/SleepingWear";

export const BabyWear = () => {
  return (
    <div>
      <Header />
      <SearchPart />
      <SleepingWear />
    </div>
  );
};
