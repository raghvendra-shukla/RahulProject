import React from 'react'

function Card1(props) {
    const {product_id,productname,stock,selling_price}=props
  return (
    <>
    <div className="container my-2">
    <div className="card" style={{width:"18rem"}}>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">product_id : {product_id}</li>
        <li className="list-group-item">productname : {productname}</li>
        <li className="list-group-item">stock : {stock}</li>
        <li className="list-group-item">selling_price : {selling_price}</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Card1