import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./project.module.css"; 
import { Link } from "react-router-dom";


const Products = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then(res => {
        setState(res.data);
      })
      .catch(() => {
        console.log("loading");
      });
  }, []);

  return (
    <div className={styles["products-container"]}>
      {" "}
      {state.map(data => (
        <div className={styles["product-card"]} key={data.id}>
          <p>{data.title}</p>
          <img src={data.image} alt={data.title} />
          <div className={styles["product-info"]}>
            <p>Price: ${data.price}</p>
            <p>Category: {data.category}</p>
            <Link to={`/cart/${data.id}`}>go to cart</Link>

          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Products;
