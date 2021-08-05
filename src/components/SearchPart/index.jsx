import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Icon } from "@ant-design/compatible";
import img from "./images/kids.svg";
import "./SearchPart.less";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export const SearchPart = () => {
  return (
    <div className="webName">
      <div>
        <img src={img} alt="Logo" style={{ width: 400, height: 320 }} />
      </div>
      {/* <Search
        placeholder="What can we help you find?"
        style={{ marginTop: 60, width: 450, marginRight: "190px" }}
      /> */}
      <Space direction="vertical">
        <Search
          placeholder="What can we help you find?"
          enterButton="Search"
          size="large"
          suffix={suffix}
          style={{ marginTop: "120px", width: "600px" }}
        />
      </Space>
      <div className="icons" style={{ marginTop: "120px", marginLeft: "40px" }}>
        <Icon type="gift" style={{ marginRight: 20 }} />
        <Icon type="heart" style={{ marginRight: 20 }} />
        <Icon type="shopping" />
      </div>
    </div>
  );
};
