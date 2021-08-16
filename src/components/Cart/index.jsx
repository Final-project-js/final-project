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

export const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.orderReducer);

  const orders = useSelector((state) => state.orderReducer.orders);
  const totalPrice = useSelector((state) => state.orderReducer.totalPrice);
  const totalCount = useSelector((state) => state.orderReducer.totalCount);


  return (
    <div className="box">
      <div className="box-01">
        <div className='box-0000'>
          
          <h2 className='box-0002'>Your orders</h2>
        </div> 
        
          <div className='box-0005'>
            <Link to='/' >
              <Button
                className='box-00001'
                // type='primary'
                
              >Go back</Button>
            </Link>
            <Checkout/>
          </div>
          
      </div>
      {
        orders.map((el, id)=> {
          return (
            <div className="box-02">
              <div className="box-03">
                <span className="box-03">
                  <img className="ui fluid image" src={el.image} />
                </span>
                <span>
                  <h3 className="box-06">{el.title}</h3>
                </span>
                <span className="box-07">
                  <h5>
                    $ {el.price}
                    {/* <h5>$ {totalPrice}</h5> */}
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
        })
      }
       {/* <div className="box-01">
        <Link to='/'>
          <Button
              type="primary"
              style={{
                alignSelf: "flex-start",
                marginBottom: '60px',
              }}
            >
              ❮ Go back to 
            </Button>
        </Link>
        
        <h2>Your orders</h2>
        <Checkout /> */}
        {orders.map((el, id) => {
          // return (
          //   <div className="box-02">
          //     <div className="box-03">

          //       <span className="box-03">
          //         <img className="ui fluid image" src={el.image} />
          //       </span>
          //       <span>
          //         <h3 className="box-06">{el.title}</h3>
          //       </span>
          //       <span className="box-07">
          //         <h5>
          //           $ {el.price}
          //           <h5>$ {totalPrice}</h5>
          //         </h5>
          //       </span>

          //       <span className="box-009">
          //         <Button
          //           className="box-09 "
          //           onClick={() => {
          //             dispatch(add_order(el));
          //           }}
          //         >
          //           +
          //         </Button>
          //         <h5 className="box-010">{el.count}</h5>
          //         <Button
          //           className="box-011"
          //           onClick={() => {
          //             dispatch(delete_order(el));
          //           }}
          //         >
          //           -
          //         </Button>
          //       </span>
                
          //       <Button
          //         onClick={() => {
          //           dispatch(delete_order(el, id));
          //         }}
          //         type="text"
          //       >
          //         <DeleteOutlined />
          //       </Button>
          //     </div>
          //   </div>
          // );
        })}
      {/* </div>  */}

      {/* <Checkout /> */}
    // </div>
  );
};
