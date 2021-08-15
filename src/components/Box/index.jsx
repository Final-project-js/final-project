import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Box.less";
import baby from ".././Products/images/baby.png";
import Jquery from "jquery";
import {
  delete_order,
  add_order,
  delete_order1,
} from "../../store/order/action";
import { Link } from "react-router-dom";

function handleMenuClick(e) {
  console.log("click", e);
}

// export const Box = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.orderReducer);

//   const orders = useSelector((state) => state.orderReducer.orders);
//   const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
//   const totalCount = useSelector((state) => state.orderReducer.totalCount);

export const Box = ({ el, id }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.orderReducer);

  const orders = useSelector((state) => state.orderReducer.orders);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(state));
  }, [state]);

  return (
    <div className="box">
      <div className="box-01">
        <span>Your order</span>
        <span className="box-title">
          <span className="box-title01">Picture</span>
          <span className="box-title02"> Name</span>
          <span className="box-title03"> Price</span>
          <span className="box-title04">Inc/Dec</span>
          {/* <span className='box-title05'>Total price</span> */}
        </span>
        {orders.map((el, id) => {
          return (
            <div className="box-02">
              <span className="box-03">
                {/* Picture */}
                <img className="box-04" src={el.image} alt="" />
              </span>
              <span className="box-05">
                {/* Name */}
                <h3 className="box-06">{el.title}</h3>
              </span>
              <span className="box-07">
                {/* Price */}
                <h5>{totalPrice} $</h5>
              </span>
              <span className="box-08">
                {/* Inc/Dec */}
                <span className="box-009">
                  <Button
                    className="box-09"
                    onClick={() => {
                      dispatch(add_order(el, id));
                    }}
                  >
                    +
                  </Button>
                  <h5 className="box-010">{el.count}</h5>
                  <Button
                    className="box-011"
                    onClick={() => {
                      dispatch(delete_order(el, id));
                    }}
                  >
                    -
                  </Button>
                </span>
              </span>
              <span className="box-012">
                <Button
                  type="primary"
                  onClick={() => {
                    dispatch(delete_order(el, id));
                  }}
                >
                  Delete
                </Button>
                {/* <Button className='box-09' onClick={()=>{
                                            dispatch(add_order(el, id))
                                        }}>+</Button>
                                        <Button 
                                        className='box-011'
                                        onClick={()=>{
                                            dispatch(delete_order(el, id))
                                        }}
                                    >-</Button> */}
              </span>
            </div>
          );
        })}
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
};

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
</div>;
