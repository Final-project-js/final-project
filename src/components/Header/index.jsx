import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import SignInSide from "./Registr";
import img from "./images/delivery.svg";
import img1 from "./images/basket.svg";
import logo from "./images/kids.svg";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";

// import {useSelector} from 'react-redux'

import "./Header.less";

export const Header = () => {
  const totalCount = useSelector((state) => state.orderReducer.totalCount);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);

  // const { totalQuantities } = useSelector((state) => state.CartReducer);
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
      {/* <SignInSide /> */}
      <div>
        {/* <Link to="/cart"> */}
        <div className="login">
          <Button type="text" style={{ marginRight: 5 }}>
            Log In
          </Button>
          <Button type="text" style={{ marginRight: 5 }}>
            Sign Up
          </Button>
          <span>
            {totalCount}
            <Link to="/cart">
              <img
                src={img1}
                alt="basket"
                style={{
                  width: "45px",
                  height: "40px",

                  marginRight: "50px",
                }}
              ></img>
            </Link>
          </span>
        </div>
        {/* </Link> */}
      </div>
    </header>
  );
};
