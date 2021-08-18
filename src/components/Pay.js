import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { Alert, Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

//Checkout Component
const Pay = (props) => {
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);

  const PayAlert = () => {
    // Swal.fire({
    //     title: 'PayMent',
    //     text:'Thank you for shopping,come again',
    //     icon:'success',
    //     button:'Aceptar'
    // })
    alert(`You paid  ${totalPrice} $ , Thank you for shoping,come again`);

    // Swal.fire('Any fool can use a computer')
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Payment Details</h3>
              <div className="checkbox pull-right">
                <label>
                  <input type="checkbox" />
                  Remember
                </label>
              </div>
            </div>
            <div className="panel-body">
              <form role="form">
                <div className="form-group">
                  <label for="cardNumber">CARD NUMBER</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="Valid Card Number"
                      required
                      autofocus
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-lock"></span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-7 col-md-7">
                    <div className="form-group">
                      <label for="expityMonth" style={{ marginBottom: "5px" }}>
                        EXPIRY DATE
                      </label>
                      <div style={{ display: "flex" }}>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityMonth"
                            placeholder="MM"
                            required
                          />
                        </div>
                        <div className="col-xs-6 col-lg-6 pl-ziro">
                          <input
                            type="text"
                            className="form-control"
                            id="expityYear"
                            placeholder="YY"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <label for="cvCode">CV CODE</label>
                      <input
                        type="password"
                        className="form-control"
                        id="cvCode"
                        placeholder="CV"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              {/* <Link to="/"></Link> */}

              <a href="/" onClick={() => PayAlert()}>
                <span className="badge pull-right">
                  <span className="glyphicon glyphicon-usd"></span>
                  {totalPrice}
                </span>{" "}
                {/* <Alert
                  message="Success Tips"
                  description="Detailed description and advice about successful copywriting."
                  type="success"
                  showIcon
                /> */}
                Final Payment
              </a>
            </li>
          </ul>
          {/* <br />
          <button>dfg</button> */}
          {/* <Link to="/">
            <Button type="primary" onClick={openNotification}>
              Pay
            </Button>
            , mountNode,
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Pay;
