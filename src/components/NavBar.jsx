import React from 'react';
import {  useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate=useNavigate()

    return (
        <div>
            <div className="container bg-dark p-3">
                <span className="d-flex justify-content-center">
                <p className="text-white m-2"> TP LOGIN/ACCOUNT</p>
                <button type="button" className="btn btn-info mx-2"
                onClick={()=>navigate('/')}>Home</button>
                <button type="button" className="btn btn-info mx-2"
                onClick={()=>navigate('/login')}>Login</button>
                <button type="button" className="btn btn-info mx-2"
                onClick={()=>navigate('/admin')}>Admin</button>
                <button type="button" className="btn btn-info mx-2"
                onClick={()=>navigate('/logged')}>Logged</button>
                <button type="button" className="btn btn-info mx-2"
                onClick={()=>navigate('/account')}>Account</button>
                </span>
            </div>
        </div>
    );
};

export default NavBar;