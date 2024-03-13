import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Order = () => {
  let [state, setState] = useState(null);
  let [count, setCount] = useState(1);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setState(res.data)
      })
      .catch(() => {
        console.log("nothing...");
      });
  }, [])
  let increase = () => {
    setCount(count+1)
  }
  let decrease = () => {
    if (count <= 1) {
      
    }
    else {
      
    setCount(count - 1);
    }
  }
  let totalprice = () => {
    return count * state.price;
  }
  return (
    <div>
      {state == null ? "loading.." : (<div key={state.id}>
        <p>{state.title}</p>
        <p>{state.category}</p>
        <p>price-{state.price}</p>
        <button onClick={increase}>+</button>
        {count}
        <button onClick={decrease}>-</button>
        <p>total-price:{totalprice() }</p>
      </div>)}
    </div>
  )
}

export default Order