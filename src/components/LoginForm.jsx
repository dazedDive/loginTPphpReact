import React from "react";
import { useRef } from "react";
import { useState } from "react";

const LoginForm = () => {


const [user,setUser]=useState(null);
const inputLogin = useRef(null);
const inputPass = useRef(null);

const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)
}




  return (
    <div className="container shadow p-3 mb-5 bg-body rounded m-5 pt-2 col-6">
      <h4 className="d-flex jutify-content-start"> Connexion </h4>
      <form className="row me-5 pt-3 bg-dark">
        <div className="col-auto">
          <input
            // className="form-control"
            type="text"
            placeholder="Email"
            aria-label="default input example"
            ref={inputLogin}
            onChange={()=>setUser({...user, login:inputLogin.current.value})}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            // className="form-control"
            id="inputPassword2"
            placeholder="Password"
            ref={inputPass}
            onChange={()=>setUser({...user, password:inputPass.current.value})}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info mb-3"
          onClick={HandleSubmit}>
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
