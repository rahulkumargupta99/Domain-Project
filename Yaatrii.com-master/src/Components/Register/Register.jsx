// Register.js

import React, { useState } from 'react';
import './Register.css';

const Register = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Simple validation to ensure all fields are filled and passwords match
    if (firstName && lastName && email && password && confirmPassword && password === confirmPassword) {
      // Registration logic here
      alert('Registered successfully');
      // Clear the inputs after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Please fill all fields correctly');
    }
  };

  return (
    <div className="containere">
      <h1>Register</h1>
      <div className="input-containere">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>Already have an account? <button onClick={handleRegister}>Login here!</button></p>
    </div>
  );
};

export default Register;
