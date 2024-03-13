import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';

const Cart = () => {
  let [state, setState] = useState(null);
  let {id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setState(res.data);
      })
      .catch(() => {
        console.log("loading...");
      });
  },[])
  return (
    <div>
      {state == null ? "nothing" : (<div key={state.id}>
        <p>{state.title}</p>
        <p>{state.category}</p>
        <img src={state.image} alt="" />
        <p>{state.price}</p>
        {/* <p>{state.rating.rate}</p> */}
        {/* <p>{state.rating.count}</p> */}
        <Link to="/">go back</Link>
        <Link to={`/order/${state.id}`}>order now</Link>
      </div>)}
    </div>
  )
}

export default Cart