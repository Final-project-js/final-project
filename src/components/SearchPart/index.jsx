import React from "react";
import logo from "../Header/images/kids.svg";
import logoMb from "../Header/images/kids.svg";
import "./SearchPart.less";
import "./SearchMb.less";

export const SearchPart = () => {
  return (
    <div className="webName">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ width: 500, height: 350 }}
        />
      </div>
      <div className="mbLogo">
        <img src={logoMb} alt="logomb" style={{ width: 300, height: 150 }} />
      </div>
    </div>
  );
};
