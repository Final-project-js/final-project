import React from 'react'
import { useSelector } from 'react-redux'
export const Box = ({el, id})=> {
    const orders = useSelector(state => state.orderReducer.orders)
    const totalPrice = useSelector(state => state.orderReducer.totalPrice)
    const totalCount = useSelector(state => state.orderReducer.totalCount)
    return (
        <div className='box-container'>
           <div className='box-003'>
            <div className="box-001">
                {orders.map((el, id) => {
                    return <div className='box-002'>
                        {/* <h6>{totalPrice * totalCount}</h6> */}
                        <h3>{el.title}</h3>
                        {/* <h5>{el.price}</h5> */}
                        {/* {totalPrice} */}
                        
                        <span>
                            {/* {el.image} */}
                            <img src={el.image} alt=""  />
                        </span>
                        <h6>{el.chosen}</h6>
                        <h5>`Price is : ${el.price} $`</h5>
                        <h5>Total: {totalCount}</h5>
                        <h5>`Total price is: ${totalPrice}$`</h5>
                        {/* <b>{el.title}</b> {' '} <b>{el.price}</b> {''} <b>{el.img}</b> {''} <b>{el.chosen}</b> */}
                    </div>
                })}
            </div>
           </div>
        </div>
    )
}