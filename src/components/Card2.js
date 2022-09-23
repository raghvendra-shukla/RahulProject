import React from 'react'

function Card2(props) {
    const {order_id,quantity,order_date}=props
  return (
    <>
    <div className="container my-2">
        <div className="card" style={{width:"18rem"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">order_id : {order_id}</li>
            <li className="list-group-item">quantity : {quantity}</li>
            <li className="list-group-item">order_date : {order_date}</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Card2