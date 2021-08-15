import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);
  return (
    <div>
      <div className="col-3 summary-col">
        <div className="summary">
          <div className="summary__heading">Summary</div>
          <div className="summary__details">
            <div className="row mb-10">
              <div className="col-6">Total Items:</div>
              <div className="col-6">{totalCount}</div>
            </div>
            <div className="row mb-10">
              <div className="col-6">Total Price</div>
              <div className="col-6">{totalPrice}$</div>
            </div>
            <Link to="/checkout">
              <button type="button" className="checkout">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
