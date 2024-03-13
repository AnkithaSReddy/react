import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password:"",
  })
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/"+id)
      .then(res => {
        setState(res.data);

      })
      .catch(() => {
        console.log("data not fetched");
      });
  },[])
  let { name, phone, email, password } = state;

  let handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/user/"+id,state)
      .then(res => {
        console.log(res.data);
        navigate("/data");

      })
      .catch(() => {
        console.log("data not updated");
      });
    
  }
  let handlechange = (e) => {
    let { name, value } = e.target;
    setState({...state,[name]:value})
  }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          name="name"
          onChange={handlechange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          name="email"
          onChange={handlechange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your phone"
          value={phone}
          name="phone"
          onChange={handlechange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your password"
          value={password}
          onChange={handlechange}
          name="password"
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Update