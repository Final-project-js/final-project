import React, { useState } from "react";
import { data } from "./data";
import "./Products.less";
import { useSelector, useDispatch } from "react-redux";
import { add_order } from "../../store/order/action";
// import { babyPowder } from "../../../../data";
import { Link } from "react-router-dom";
export const Products = () => {
  const orders = useSelector((state) => state.orderReducer.orders);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const dispatch = useDispatch();

  const [orderColor, setOrderColor] = useState(false);
  // const state = useSelector(state => state)

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
        {/* {orders.map((el, id) => {
          return (
            <div el={el} key={id} id={id}>
              <b>{el.title}</b> {el.price} {""} <img src="{el.img}" alt="" />{" "}
              {""} <b>{el.chosen}</b>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
