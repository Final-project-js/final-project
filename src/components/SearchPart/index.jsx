import React from "react";
import { Input } from "antd";
import { Icon } from "@ant-design/compatible";
import img from "./images/kids.png";
import "./SearchPart.less";

const Search = Input.Search;

export const SearchPart = () => {
  return (
    <div className="webName">
      <div>
        <img
          src={img}
          alt="kids pic"
          style={{ width: 250, height: 120, marginTop: 20, marginRight: 130 }}
        />
      </div>
      <Search
        placeholder="What can we help you find?"
        style={{ marginTop: 60, width: 450, marginRight: "190px" }}
      />
      <div className="icons" style={{ marginTop: "60px", marginLeft: "40px" }}>
        <Icon type="gift" style={{ marginRight: 20 }} />
        <Icon type="heart" style={{ marginRight: 20 }} />
        <Icon type="shopping" />
      </div>
    </div>
  );
};
