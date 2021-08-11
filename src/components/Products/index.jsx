import React from "react";
import { data } from "./data";
import "./Products.less";
import {useSelector, useDispatch} from 'react-redux'
import {add_order} from '../../store/order/action'
// import { babyPowder } from "../../../../data";

export const Products = () => {

  const orders = useSelector(state =>  state.orderReducer.orders)
  const totalCount = useSelector(state => state.orderReducer.totalCount)
  const totalPrice = useSelector(state => state.orderReducer.totalPrice)
  const dispatch = useDispatch()
  // const state = useSelector(state => state)


  return (
    <div className="products">
      <div className="card">
        {data.map((el, id) => {
          return (
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              key={id}
              onClick={()=> dispatch(add_order(el))}
            >
              <img src={el.image} className="img" />
              <b>{el.title} </b>
              <b>{el.price}</b>
              <b>{el.count}</b>
              <b>{el.num}</b>
              <b>{el.choose}</b>
            </div>
          );
        })}
        {
          orders.map((el,id)=> {
              return <div  el={el} key={id} id={id} >
                <b>{el.title}</b> {' '} {el.price} {''} <img src="{el.img}" alt="" /> {''} <b>{el.chosen}</b>
                </div>
            })
          }
      </div>
    </div>
  );
};
