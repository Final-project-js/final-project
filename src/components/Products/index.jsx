import React, { useState } from "react";
import { data } from "./data";
import "./Products.less";
import "./ProductMb.less";
import { useSelector, useDispatch } from "react-redux";
import { add_order } from "../../store/order/action";
import { Link } from "react-router-dom";
export const Products = () => {
  const orders = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();

  const [orderColor, setOrderColor] = useState(false);

  return (
    <div className="products">
      <div className="card">
        {data.map((el, id) => {
          return (
            <Link to={`/product/${id}`}>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={id}
                onClick={() => dispatch(add_order(el))}
              >
                <img src={el.image} className="img" />
                <div className="cardText">
                  <b>{el.title} </b>
                  <b>{el.price}$</b>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* responsive */}
      <div className="card-mb">
        {data.map((el, id) => {
          return (
            <Link to={`/product/${id}`}>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={id}
                onClick={() => dispatch(add_order(el))}
              >
                <img src={el.image} className="img-mb" />
                <div className="cardText-mb">
                  <b>{el.title} </b>
                  <b>{el.price}$</b>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
