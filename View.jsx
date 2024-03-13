import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const View = () => {
  let { id } = useParams();
  let [state, setState] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/"+id)
      .then((res) => {setState(res.data)})
      .catch(() => {
        console.log("not fetched");
      });
  },[id])
  return (
    <div>
      {state == null ? "nothing" : (<div key={state.id}>
        <p>{state.name}</p>
        <p>{state.email}</p>
        <p>{state.phone}</p>
        <p>{state.password}</p>
        <Link to="/data">back</Link>
        <Link to={`/update/${state.id}`}>edit</Link>
      </div>)}
    </div>
  )
}

export default View