import React, { useState } from 'react';
import {Button} from 'flowbite-react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';





const SignIn = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    // Validate that email and password are provided
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }
  
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json(); // Parse response body as JSON
      if (response.ok) {
        console.log('User signed in successfully!');
        // Redirect to another page or show a success message
        navigate('/');
      } else {
        console.error('Failed to sign in:', data.message);
        // Display an error message to the user
        alert(data.message);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      // Display an error message to the user
      alert('An error occurred while signing in. Please try again later.');
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '290px' }}>
  <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
    {/* Add something here on the left */}
    <h2>
      <img src='src\components\images\11.jpg' alt='Welcome to the Login Page' style={{ width: '1000px', height: '300px' }}></img>
    </h2>
    {/* Add whatever you want here */}
  </div>
  <div style={{ width: '60%', maxWidth: '410px', margin: '0 auto' }}>
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
      </div>
      <Button type="submit" style={{ display: 'block', width: '100%', backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</Button>
        <OAuth/>
      <div className='flex gap-2 text-sm mt-5'>
        <span style={{ fontWeight: 'bold' }}>Don't Have an account?</span>
        <Link to ='/sign-up' className='text-blue-500' style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold', cursor: 'pointer' }}>
          Sign up
        </Link>
      </div>
    </form>
  </div>
</div>

  );
};

export default SignIn;
