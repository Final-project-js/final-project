import React from "react";
import img from "./images/delivery.svg";
import { CheckCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import { Select, Tooltip } from "antd";
import "./Header.less";

const Option = Select.Option;

export const Header = () => {
  return (
    <header className="header">
      <div className="first">
        <Tooltip title="For above 999 som in Kyrgyzstan">
          <div className="delivery">
            <img
              src={img}
              alt="delivery icon"
              style={{
                width: "45px",
                height: "40px",
                marginLeft: "50px",
                marginRight: "5px",
                marginTop: "20px",
              }}
            />
            <h3 style={{ marginTop: "35px" }}>Free delivery</h3>
          </div>
        </Tooltip>
        <Tooltip title="The Best prices in the town">
          <div className="price">
            <CheckCircleOutlined
              style={{
                marginLeft: "10px",
                marginRight: "5px",
                fontSize: "150%",
              }}
            />
            <h3>Best Prices Everyday</h3>
          </div>
        </Tooltip>
      </div>

      <div className="second">
        <div className="lang">
          <GlobalOutlined style={{ fontSize: "150%" }} />
          <h3>EN</h3>
        </div>
        <div className="currency">
          <Select
            defaultValue="Country"
            style={{ width: 150, marginLeft: "10px" }}
            bordered={false}
          >
            <Option value="KG">KG</Option>
            <Option value="USA">USA</Option>
          </Select>
          <Select
            defaultValue="Currency"
            style={{ width: 150 }}
            bordered={false}
          >
            <Option value="Som">Som</Option>
            <Option value="Dollar">Dollar</Option>
          </Select>
        </div>
        <div className="register">
          <span style={{ marginLeft: "10px" }}>SignIn</span>
          <span style={{ marginRight: "50px", marginLeft: "5px" }}>LogIn</span>
        </div>
      </div>
    </header>
  );
};
