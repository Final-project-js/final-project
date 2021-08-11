import React from "react";
import { data } from "./data";
import "./Products.less";

export const Products = () => {
  return (
    <div className="products">
      <ul className="card">
        {data.map((el, id) => {
          return (
            <li
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              key={id}
            >
              <img src={el.image} className="img" />
              <b>{el.title} </b>
              <b>{el.price}</b>
              <b>{el.count}</b>
              <b>{el.choose}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
