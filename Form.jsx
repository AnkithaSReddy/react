import React, { useState } from 'react'

const Form = () => {
    let [state, setState] = useState({
        name: "",
        pw:"",
    })
    let handlechange = (e) => {
        let { name, value } = e.target;
        setState({...state,[name]:value})
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.name,state.pw);
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={state.name}
          onChange={handlechange}
          name="name"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter password"
          value={state.pw}
          name="pw"
          onChange={handlechange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form