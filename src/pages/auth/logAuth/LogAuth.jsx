import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import './LogAuth.css';
import { login, signup } from "../../../../fireDbConfig"; // Ensure the correct path to your firebase functions
import netflix_spinner from "../../../assets/netflix_spinner.gif"

const LogAuth = () => {
  const [signState, setSignState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === 'Sign In') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      setLoading(false);
    } catch (error) {
      console.error("Authentication error: ", error);
      alert(error.message);
    }
  };

  return (
    loading? 
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
    
    :<div className='login'>
      <img src={logo} alt='Logo' className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === 'Sign Up' && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Your Name'
              aria-label='Your Name'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            aria-label='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            aria-label='Password'
          />
          <button type='submit'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState === 'Sign Up' ? (
            <p>
              Already Have an Account?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogAuth;
