import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";

import axios from "axios";
export const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  //   const handleChange = (e) => {
  //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
  //   };
  const handleChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", loginData);
    // alert(`Username: ${loginData.username}\nPassword: ${loginData.password}`);

    // try {
    //   //
    //   //axios.post("http://localhost:8000/login");
    //   const response = await axios.post("http://localhost:8000/login", {
    //     username,
    //     password,
    //   });
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username: loginData.username,
        password: loginData.password,
      });
      const { success, message } = response.data;

      if (success) {
        console.log("Login Succesfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("Login Error", error);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="username"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>

        <p>
          Not Register yet?
          <NavLink to="/registration">Register here</NavLink>
        </p>
      </form>
    </div>
  );
};
