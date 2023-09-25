// Importing Dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import {AiFillEyeInvisible} from 'react-icons/ai';
import './index.css'


// Login Page Component
const LoginPage = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email_id: '',
    Password: '',
    message: '',
    showSuccessPopup: false,
  });

  const clearFields = () => {
    setState(prevState => ({
      ...prevState,
      email_id: '',
      Password: '',
      message: '',
    }));
  };

  const toggleSuccessPopup = () => {
    setState(prevState => ({
      ...prevState,
      showSuccessPopup: !prevState.showSuccessPopup,
    }));

    setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        showSuccessPopup: false,
      }));
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email_id, Password } = state;

    try {
      const response = await axios.post('http://172.105.37.251:8000/Registration/Login/', {
        email_id,
        Password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response Data:', response.data);
      console.log('Response Status:', response.status);

      if (response.data.Message === 'Success') {
        console.log('Login Successful');
        clearFields();
        toggleSuccessPopup();

        history.push('/Profile');  // Redirect to profile page

      } else {
        setState(prevState => ({
          ...prevState,
          message: response.data.Message,
        }));
      }
    } catch (error) {
      console.error('API Error:', error);
      console.log('Server Response:', error.response);
      setState(prevState => ({
        ...prevState,
        message: 'Login failed. Please try again.',
      }));
    }
  };

  const renderSuccessPopup = () => {
    if (state.showSuccessPopup) {
      return (
        <div className="success-popup">
          <p>Login Successful!</p>
        </div>
      );
    }
  };

  return (

    <div className='login-page-container'>

      <div className="log-container">
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              onChange={(e) => setState({ ...state, email_id: e.target.value })}
              value={state.email_id}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setState({ ...state, Password: e.target.value })}
              value={state.Password}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
        {state.message && <p className="text-danger">{state.message}</p>}
        {renderSuccessPopup()}

        <p>Don't have an account? <Link to="/sign-up" className="sign-up-link">Sign Up</Link></p>

      </div>

    </div>

  );
};

export default LoginPage;