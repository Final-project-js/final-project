import React from "react";
import logo from "../Header/images/kids.svg";
import "./SearchPart.less";

export const SearchPart = () => {
  return (
    <div className="webName">
      <img src={logo} alt="logo" style={{ width: 500, height: 350 }} />
    </div>
  );
};
