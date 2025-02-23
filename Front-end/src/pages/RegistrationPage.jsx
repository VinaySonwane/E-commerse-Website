import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Registration.css";
export const RegistrationPage = () => {
  const [registrationData, setregistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    setregistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        registrationData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response ? error.response.data : error.message
      );
    }
    setregistrationData({ username: "", password: "" });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistrationSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={registrationData.username}
            onChange={handleRegistrationChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={registrationData.password}
            onChange={handleRegistrationChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?
        <NavLink to="/login"> Login here</NavLink>
      </p>
    </div>
  );
};
