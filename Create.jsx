import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";



const Create = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password:"",
  });
  let navigate = useNavigate();
  
  let { name, email, phone, password } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({...state,[name]:value})
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (name && email && phone && password) {
        axios
          .post("http://localhost:3000/user", state)
          .then(res => {
            console.log(res);
            navigate("/data");
          })
          .catch(() => {
            console.log("data is not posted");
          });
    }
    else {
      console.log("fill out all required fields");
    }
  
  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your name' value={name} name='name' onChange={handleChange}/><br /><br />
        <input type="text" placeholder='enter your email' value={email} name='email' onChange={handleChange}/><br /><br />
        <input type="text" placeholder='enter your phone' value={phone} name='phone' onChange={handleChange}/><br /><br />
        <input type="text" placeholder='enter your password' value={password} onChange={handleChange} name='password'/><br /><br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Create