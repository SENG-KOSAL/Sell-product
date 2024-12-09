import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Account.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add animation on form change
  const handleToggle = () => {
    // Trigger the transition animation
    setIsTransitioning(true);
    // After the animation duration, switch forms
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
    }, 500); // Match this duration to the transition time
  };

  return (
    <div className="account-container">
      <div className="form-container">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <div className={`form-content ${isTransitioning ? 'form-transition' : ''}`}>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
      <div className="toggle-container">
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={handleToggle}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Account;
