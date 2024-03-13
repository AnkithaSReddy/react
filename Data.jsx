import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Data = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then(res => {
           setState(res.data.filter((data)=>data.name && data.email && data.phone && data.password));
      })
      .catch(() => {
        console.log("data is not fetched");
      });
  }, [])
  let deletedata = (id) => {
    axios.delete("http://localhost:3000/user/" + id);
    setState(state.filter((ele)=>ele.id!=id))
  }
  return (
    <div>
      <Link to="/">Add</Link>
      {state.map((data) => {
        return <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.password}</p>
          <button onClick={()=>deletedata(data.id)}>delete</button>
          <Link to={`/view/${data.id}`}>view</Link>
        </div>
      })}
    </div>
  )
}

export default Data