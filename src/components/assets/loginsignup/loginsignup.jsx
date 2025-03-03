import React, { useState } from "react";
import "./loginsignup.css";

import user_icon from "../usuario.png";
import email_icon from '../email_icon.png';
import password_icon from '../password_icon.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="Underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? <div></div> :
          <div className="input">
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Name' />
          </div>
        }

        <div className="input">
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Correo' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='password' />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span> Click Here!</span> </div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;