import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginAs() {
  const navigate = useNavigate();

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const buttonStyles = {
    padding: '1rem 2rem',
    margin: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3f51b5',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const headingStyles = {
    fontSize: '3rem',
    marginBottom: '5rem',
    color: '#333',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Login As</h1>
      <div>
        <button style={buttonStyles} onClick={() => navigate('/user/login')}>
          User
        </button>
        <button style={buttonStyles} onClick={() => navigate('/admin/login')}>
          Admin
        </button>
      </div>
    </div>
  );
}

export default LoginAs;
