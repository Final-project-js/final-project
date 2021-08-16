import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Box.less";
import { Link } from "react-router-dom";

export const Box = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.orderReducer);

  const orders = useSelector((state) => state.orderReducer.orders);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);

  return (
    <div className="box">
      <h2 style={{ marginLeft: "170px", paddingBottom: '15px' }}>Your orders</h2>
      {orders.map((el, id) => {
        return (
          <div className="container">
            <div>
              <img className="image" src={el.image} />
            </div>
            <div className="name">
              <h2>{el.title}</h2>
              <h2>
                <a className="label">${el.price}</a>
              </h2>

              <p className="text">{el.description}</p>
            </div>
          </div>
        );
      })}
      <div className="btn" tabIndex="0">
        <Link to="/">
          <Button className="button" style={{ marginLeft: "5px" }}>
            Go Back
          </Button>
        </Link>
        <Link to="/cart">
          <Button className="button" style={{ marginLeft: "65px" }}>
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};
