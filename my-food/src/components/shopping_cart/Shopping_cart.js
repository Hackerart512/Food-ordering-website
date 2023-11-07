import React from 'react'
import "./shopping_cart.css";
import Footer from '../footer/Footer';
import { useEffect, useState } from 'react';


const Shopping_cart = () => {
    // ------------------------------- fetch  cart item--------------------------

    let total_price = 0;

    const [foods, setFood] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/cart/fetch-user-item', {
                method: 'GET',
                headers: {
                    "auth-token": `${localStorage.getItem('token')}`,
                }
            });

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setFood(data);
            // console.log(data);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);


    // ------------------------------- fetch --------------------------

    // ------------------------------ Delet cart item -------------------------
    const Deleteitem = async (event) => {
        // confirm("Are you sure you want to deleted room ?")

        if (window.confirm("Are you sure you want to deleted item?")) {
            let Card_ObjectId = event.target.getAttribute("data-objid")
            try {
                const response = await fetch(`http://localhost:5000/cart/remove/${Card_ObjectId}`, {
                    method: 'delete',
                    headers: {
                        'auth-token': `${localStorage.getItem('token')}`
                    }
                }
                );

                if (!response.ok) {
                    throw new Error('error');
                }
                const data = await response.json();
                let deleted = await fetchData();

                if (data.success) {

                    alert("Data has been deleted successfully");
                }

            } catch (error) {
                console.error('Error fetching:-', error);
            }
        }
    }
    // ------------------------------ Delet cart item -------------------------


    const count_price = () => {

        foods.map((i) => (
            total_price += parseInt(i.price)
            
        ))
    }
    count_price();

    return (
        <>
            <section className="shopping-cart-section">
                <div className="shopping-cart-inner">
                    <h3 style={{ color: "purple" }}>Shopping Cart</h3>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                foods.map((item) => (

                                    <>
                                        <tr>
                                            <td><img className="cart_img" src={"/IMAGE/" + item.image} alt="img.." /></td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.title}
                                                </div></td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.quantity}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.price}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    <i style={{
                                                        backgroundColor: "#fd3c19",
                                                        color: "white",
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        padding: "8px 9px",

                                                    }} onClick={Deleteitem} data-objid={item._id} class="fa-solid fa-trash"></i>

                                                </div>
                                            </td>
                                        </tr >
                                    </>

                                ))
                            }
                        </tbody>
                    </table>

                    <div className="shopping-cart-footer">
                        <div className="shopping-cart-button">
                            <p style={{ fontWeight: "bold" }}>Total Cost : ${total_price}.00</p>
                            <button className='shopping-cart-footer-button'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    )
}

export default Shopping_cart
