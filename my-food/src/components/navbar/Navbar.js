import React, { useEffect, useState } from "react";
import './navbar.css';

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default (Navbar) => {

    let navigate = useNavigate();
    const [Cart, setCart] = useState('');
   

    const handleLogout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {

            navigate('/login');
        }, 100)
    }

    const fetchCartItem = async () => {
        try {
            const response = await fetch('http://localhost:5000/cart/fetch-user-item',
                {
                    method: 'GET',
                    headers: {
                        'auth-token': `${localStorage.getItem('token')}`,
                    }
                }
            );

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setCart(`${data.length}`);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    useEffect(() => {
        fetchCartItem();
    }, []);
    
    setTimeout(() => {
        
        let badge = document.querySelector('.badge');
        badge.innerHTML = `${Cart}`;
    // console.log(badge);

    }, 100)

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="px-3 navbar-logo">
                    <img className=" " src="IMAGE/res-logo.png" alt="image" />
                    <p className="logo-heading text-secondary ">
                        <span style={{ "color": "#6bd86b" }}>GriTi</span>
                        <span>some</span>
                    </p>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  flex-row-reverse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="mx-5 nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></Link>
                        <a className="mx-5 nav-item nav-link" href="#featured-menu">Features</a>

                        {/* <input className="inp inp1 m-0 " placeholder="sreach food" type="search"></input> */}

                        <div class="searchbar">
                            <input id="search" type="search" />
                            <label for="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </label>
                        </div>

                        {
                            !localStorage.getItem('token') ? <Link className=" text-red mx-5 nav-item nav-link" href="#">Login/Signup</Link> : <Link onClick={handleLogout} className=" text-red mx-5 nav-item nav-link" to="#">Logout</Link>
                        }

                    </div>
                </div>

                <div className="shopping-cart">
                    <Link to="/shopping-cart"><i className=" text-black fa-solid fa-cart-shopping"></i></Link>
                    <div className="badge">0</div>
                </div>
            </nav>

        </>
    )
}
