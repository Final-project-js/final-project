import React from "react";
import { girlsAcc } from "../../../../data";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";

export const AccGirls = () => {
  return (
    <div>
      <ul className="card">
        {girlsAcc.map((el, id) => {
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
              <b>{el.choose}</b>
            </li>
          );
        })}
      </ul>
      <Button type="text" style={{ color: "#3fa5ee" }}>
        <Link to={routes.home}> Go Back</Link>
      </Button>
    </div>
  );
};
