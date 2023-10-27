import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css'

const SignUpPage = () => {
    const [signUpDetails, setSignUpDetails] = useState({
        fullName: '',
        email_id: '',
        Password: '',
        address: '',
        message: '',
        registrationSuccess: false,
    })

    const handleInput = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, email_id, Password, address } = signUpDetails;

        try {
            // Replace this URL with your actual API endpoint for user registration
            // const response = await axios.post('http://127.0.0.1:8000/Loginpage/Registration/', {    this the local server
            const response = await axios.post('http://172.105.37.251:8000/POC_Registration/register/', {
                fullName,
                email_id,
                Password,
                address, // Include address in the request payload
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.message === "Email already exists") {
                console.log('Email already exists');
                // Display "Email is already exists" message
                setSignUpDetails({ ...signUpDetails, message: 'Email is already exists. Please use a different email.' });
            } else if (response.data.Message === "Successfull") {
                console.log('Registration Successful');
                // Clear input fields after successful registration
                setSignUpDetails({
                    fullName: '',
                    email_id: '',
                    Password: '',
                    address: '',
                    message: '',
                    registrationSuccess: true,
                });

                // Store the registration success status in localStorage
                localStorage.setItem('registrationSuccess', 'false');
            } else {
                // Handle other registration failures
                const errorMessage = response.data.message || 'Registration failed. Please try again.';
                setSignUpDetails({ ...signUpDetails, message: errorMessage });
                console.error('API Error:', errorMessage);
                console.log('Server Response:', response); // Log the server response for debugging
            }
        } catch (error) {
            console.error('API Error:', error);
            console.log('Server Response:', error.response); // Log the server response for debugging

            if (error.response && error.response.data.message === "Email already exists") {
                console.log('Email already exists');
                setSignUpDetails({ ...signUpDetails, message: 'Email is already exists. Please use a different email.' });
            } else {
                // Handle other API errors and set a generic error message
                setSignUpDetails({ ...signUpDetails, message: 'Registration failed. Please try again.' });
            }
        }
    };


    const { registrationSuccess, email_id, fullName, Password, address } = signUpDetails;

    return (
        <div className='signup-page-container'>
            <div className="signup-container">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name='fullName'
                            onChange={handleInput}
                            value={fullName}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email ID</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email ID"
                            name='email_id'
                            onChange={handleInput}
                            value={email_id}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name='Password'
                            onChange={handleInput}
                            value={Password}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            name='address'
                            onChange={handleInput}
                            value={address}
                            required
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>

                {signUpDetails.message && <p className="text-danger">{signUpDetails.message}</p>}

                {registrationSuccess && (
                    <p className="text-success">Registration Successful</p>
                )}
                <p>if you have an account? <Link to="/" className="sign-up-link">Sign in</Link></p>
            </div>
        </div>
    );
}

export default SignUpPage;








