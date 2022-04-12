import React from 'react';
import { Link } from 'react-router-dom';
import './Resister.css'
import Logo from '../../imges/google.svg'

const Resister = () => {
    return (
        <div className='form-container'>
            <div className="form">
               <h2 className="title">Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="text" name="confirm-password" id="" />
                    </div>
                    <div className="signup-btn">
                        <button>Sign Up</button>
                    </div>
                </form>
                <div>
                    <p>Already have an accoutn? <Link className='form-login' to="/login">Login</Link></p>
                </div>
                <div className='form-horizontal'>
                    <div className="hr"></div>
                    <p>or</p>
                    <div className="hr"></div>
                </div>
                <div>
                    <button className='google-btn'> <img src={Logo} alt="" /> <p>Continue With Google</p></button>
                </div>
            </div>
        </div>
    );
};

export default Resister;