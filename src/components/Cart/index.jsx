import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  delete_order,
  add_order,
  delete_order1,
} from "../../store/order/action";
import "./Cart.less";
import Checkout from "../Checkout";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.orderReducer);

  const orders = useSelector((state) => state.orderReducer.orders);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);

  // useEffect(() => {
  //     localStorage.setItem('product', JSON.stringify(state))
  // }, [state])

  return (
    <div className="box">
      <div className="box-01">
        <h2>Your orders</h2>

        {/* <span className='box-title'>
                    <span className='box-title01'>Picture</span>
                    <span className='box-title02'> Name</span>
                    <span className='box-title03'> Price</span>
                    <span className='box-title04'>Inc/Dec</span> */}
        {/* <span className='box-title05'>Total price</span> */}
        {/* </span> */}
        {orders.map((el, id) => {
          return (
            <div className="box-02">
              <div className="box-03">
                {/* <div className="ui vertical divider">AND</div> */}

                <span className="box-03">
                  <img className="ui fluid image" src={el.image} />
                </span>
                <span>
                  <h3 className="box-06">{el.title}</h3>
                </span>
                <span className="box-07">
                  <h5>
                    {el.price} $<h5> {totalPrice} $</h5>
                  </h5>
                </span>

                <span className="box-009">
                  <Button
                    className="box-09 "
                    onClick={() => {
                      dispatch(add_order(el));
                    }}
                  >
                    +
                  </Button>
                  <h5 className="box-010">{el.count}</h5>
                  <Button
                    className="box-011"
                    onClick={() => {
                      dispatch(delete_order(el));
                    }}
                  >
                    -
                  </Button>
                </span>
                {/* <h3 className="ui brown block header">{el.category}</h3>
                            <p>{el.description}</p> */}
                {/* <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                      </div> */}
                <Button
                  onClick={() => {
                    dispatch(delete_order(el, id));
                  }}
                  type="text"
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Checkout />
      <Link to="/">
        {" "}
        <Button
          type="primary"
          style={{
            display: "flex",
            alignSelf: "flex-end",
            margin: "10px 0 0 115px",
          }}
        >
          Home page
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
