import React, { useState,useEffect} from 'react'
import Card from './Card'
import Card1 from './Card1';
import Card2 from './Card2';
function Home() {
    const [user, setUser] = useState([]);
    const [Product, setProduct] = useState([]);
    const [Order, setOrder] = useState([]);
    const users=async()=>{
        let url="https://assessment.api.vweb.app/users";
        let data=await fetch(url);
        let parsedData=await data.json();
        setUser(parsedData);
    }
    const products=async()=>{
        let url="https://assessment.api.vweb.app/products";
        let data=await fetch(url);
        let parsedData=await data.json();
        setProduct(parsedData);
    }
    const orders=async()=>{
        let url="https://assessment.api.vweb.app/orders";
        let data=await fetch(url);
        let parsedData=await data.json();
        setOrder(parsedData);
    }
    useEffect(() => {
        users();
        products();
        orders();
    },)
  return (
    <>
    <div className="row text-center my-2">
        {user.map((element)=>(
            <div className="col-md-3" key={element.user_id}>
                <Card user_id={element.user_id} username={element.name}/>
            </div>
        ))}
        {Product.map((element)=>(
            <div className="col-md-3" key={element.product_id}>
                <Card1 product_id={element.product_id} productname={element.name} stock={element.stock} selling_price={element.selling_price}/>
            </div>
        ))}
        {Order.map((element)=>(
            <div className="col-md-3" key={element.order_id}>
                <Card2 order_id={element.order_id} quantity={element.quantity} order_date={element.order_date}/>
            </div>
        ))}
    </div>
    </>
    
  )
}

export default Home