import axios from "axios";
import React, { useState } from "react";

const Product = () => {
  const [barcode, setBarcode] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    if (barcode) {
      axios
        .get(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`)
        .then(res => {
          console.log(res.data.product);
          if (res.data && res.data.product) {
            setItems([res.data.product]);
          }
        })
        .catch(error => {
          console.error("Error fetching product:", error);
        });
    }
  };

  const handleChange = e => {
    setBarcode(e.target.value);
  };

  return (
    <div>
      <h2>Enter the barcode here:</h2>
      <input
        type="text"
        value={barcode}
        name="barcode"
        onChange={handleChange}
      />
      <button onClick={handleClick}>check</button>

      {items.map(d => (
        <div key={d._id}>
          <img src={d.image_url} alt="" />
          <p>Name: {d.product_name}</p>
          <p>Country of Origin: {d.countries_tags}</p>
          <p>Categories: {d.categories}</p>
          <p>Creator: {d.creator}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
