import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {delete_order,add_order,
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

  useEffect(()=> {
    localStorage.setItem('product', JSON.stringify(state))
  }, [state])

  return (
    <div className="box">
      <div className="box-01">
        <div className='box-0000'>
          {
            orders.map((el, id) => {
              return <div className="box-02">
              <div className="box-03">
                <span className="box-03">
                  <img className="ui fluid image" src={el.image} />
                </span>
                <div className='box-title'>
                  <h3 className="box-06">{el.title}</h3>
                </div>
                <span className="box-07">
                  <h5>
                    $ {el.price}
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
                  type="text" className='box-btn-delete'
                >
                  <DeleteOutlined  className='box-delete'/>
                </Button>
              </div>
            </div>
            })
          }
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
      
     </div>
  );
};
