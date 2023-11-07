import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section className='login-section p-5'>
                <div className="login-container">
                    <h3 className="my-2" style={{ textAlign: "center" }}>Sign Up</h3>
                    <form>
                        <div>
                            <input type="text" placeholder='Name' className="inp" />
                        </div>
                        <div>
                            <input type="text" placeholder='Email  Address' className="inp" />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' className="inp" />
                        </div>
                        <div>
                            <input type="password" placeholder='Confirm Password' className="inp" />
                        </div>


                        <button className="login_button" type="submit">SIGNUP</button>

                        <div className="social-media-login-icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-google-plus-g"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>

                        <div className='signup-button' style={{ textAlign: "center" }}>Already have an account? <Link to="/login">Login</Link></div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Signup
