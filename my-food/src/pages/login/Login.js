import React from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
                //  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZGNlM2JhYjYzZWVjZDA4YTM3ZTkwIn0sImlhdCI6MTY5MTI0NTQ0MX0.b7AVH-lSOjiJAUoQBZAasaM5hq-9JT4aqXYqXwEPHCM"
            }
        })
        const json = await response.json();

        if (json.success) {
            //redirect
           
            localStorage.setItem('token', json.authtoken);
            navigate('/')
        }
        else {
            navigate('/Signup')
        }
    }

    const [formData, setFormData] = useState({});


    const handleChange = (event) => {
        console.log(event.target.value, event.target.name);

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <>
            <section className='login-section p-5'>
                <div className="login-container">
                    <h3 className="my-2" style={{ textAlign: "center" }}>Login</h3>
                    <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/api/auth/login">
                        <div style={{width:"100%"}}>
                            <input onChange={handleChange} name="email" type="text" placeholder='Email/Username' className="inp" />
                        </div>
                        <div style={{width:"100%"}}>
                            <input onChange={handleChange} name="password" type="password" placeholder='Password' className="inp" />
                        </div>
                        <div className='d-flex mx-4' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div >
                                <input className="m-1" type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <a herf="#">Forget password?</a>
                        </div>
                        <button className="login_button" type="submit">LOGIN</button>

                        <div className="social-media-login-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-google-plus-g"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>

                        <div className='signup-button' style={{ textAlign: "center" }}>Don't have an account? <Link to="/signup">Signup</Link></div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login
