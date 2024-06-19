import React, { useState } from 'react'
import './Signups.css'
import Login from '../Register/Login';
import Register from '../Register/Register';

const Signups = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between login and register forms

  return (
    <div className="containerre">
      {showLogin ? (
        <Login handleLogin={() => setShowLogin(false)} />
      ) : (
        <Register handleRegister={() => setShowLogin(true)} />
      )}
    </div>
  )
}

export default Signups
