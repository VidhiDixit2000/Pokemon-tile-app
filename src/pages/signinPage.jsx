import React, { useState,useContext } from 'react'
import styles from "../styles/login.module.css";
import {Data} from '../context/AuthContext.js';
import {useNavigate} from 'react-router-dom';

const SigninPage = () => {
  const {login,user} = useContext(Data);
  
    const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const Navigate= useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
const USERNAME='Vidhi';
const PASSWORD='vidhi@123';
// console.log('username : ',USERNAME );
// console.log('password : ',PASSWORD);
if(formData.username===USERNAME && formData.password===PASSWORD)
{
  alert("credentials correct....you are being logged in");
  login({username: formData.username,lastLoginAt:Date.now()});
  console.log(JSON.stringify(user));
  Navigate('/');
}

    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <div className={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

export default SigninPage
