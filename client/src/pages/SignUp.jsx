import React, { useState } from 'react';
import {Button} from 'flowbite-react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
 
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
    const { username, email, password } = formData;

    // Validate that username and email are provided
    if (!username || !email) {
      alert('Username and email are required.');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('User signed up successfully!');
        // Redirect to another page or show a success message
        navigate('/sign-in');
      } else {
        console.error('Failed to sign up:', await response.text());
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Display an error message to the user
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <Button type="submit">Sign Up</Button>
        <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to ='/sign-in' className='text-blue-500'>
                Sign In
              </Link>
            </div>

      </form>
    </div>
  );
};

export default Signup;
