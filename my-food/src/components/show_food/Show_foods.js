import React from 'react'
import "./show_food.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Show_food = () => {
    // Check Admin is Exit r Not
    let navigate = useNavigate();
    
    const [foods, setFood] = useState([]);

    // post cart data in to mongoose

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/cart/shooping-cart', {
            method: 'POST',
            body: JSON.stringify({
                'image': `${foods.image}`,
                'title': `${foods.title}`,
                'price': `${foods.price}`,
                'quantity': "1"
            }),
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        })
        let json = await response.json();
        // console.log(json);
        if (json.success) {
            navigate('/shopping-cart')
        }
        setFormData("");

    }

    const [formData, setFormData] = useState({});


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    // post cart data in to mongoose




    // ------------------------------- fetch  food--------------------------


    const fetchData = async (Card_ObjectId) => {
        try {
            const response = await fetch(`http://localhost:5000/food/fetchfood/${Card_ObjectId}`);

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

    setTimeout(() => {
        console.log("inam run")
        let total_price = 0;
        let btn_plus = document.querySelector(".fa-circle-plus");

        let show_box = document.querySelector(".show-section");

        let cards = document.querySelectorAll(".product-group div.product-card");



        //span 
        let regular_span = document.querySelector(".regular-span")
        let premium_span = document.querySelector(".premium-span")
        let hot_souce_span = document.querySelector(".hot-souce-span")
        let mild_souce_span = document.querySelector(".mild-souce-span")

        // total amount displayed
        let final_amount = document.querySelector(".final-amount")


        function hideShowBox() {
            show_box.style.display = "none";
        }

        btn_plus.addEventListener("click", hideShowBox)


        // displayShowBox function
        function displayShowBox() {
            show_box.style.display = "flex";
        }
        // displayShowBox function



        let Card_ObjectId;
        // let flag = false;

        // after click a card 
        // console.log(cards);
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                // flag = true;
                displayShowBox();

                Card_ObjectId = card.getAttribute("data-objectid")
                // console.log(Card_ObjectId);


                // ------------------------------- fetch --------------------------
                fetchData(Card_ObjectId);
                // ------------------------------- fetch --------------------------

                setInterval(() => {

                    //radio
                    let checkbox_regular = document.querySelector("#regular:checked") != null;

                    if (checkbox_regular) {
                        regular_span.style.display = "flex";
                        premium_span.style.display = "none";
                        // console.log(premium_span.innerHTML)
                        // total_price = parseInt((foods.price) - (10 * foods.price) / 100)
                        total_price = 120;
                    } else {
                        regular_span.style.display = "none";
                        premium_span.style.display = "flex";
                        total_price = foods.price 
                        // console.log(foods.price);
                        total_price = 150;
                    }

                    let hot_souce = document.querySelector("#hot-souce:checked") != null;
                    let mild_souce = document.querySelector("#mild-souce:checked") != null;


                    // Add souce logic
                    let flg_souce = 1;
                    if (hot_souce) {
                        hot_souce_span.style.display = "flex";
                        total_price += 2;
                        flg_souce = 0
                    }
                    else {
                        hot_souce_span.style.display = "none";
                        if (flg_souce == 0) {
                            total_price -= 2;
                            flg_souce = 1
                        }
                    }

                    let flg_souce2 = 1;
                    if (mild_souce) {
                        mild_souce_span.style.display = "flex";
                        total_price += 3;
                        flg_souce2 = 0
                    }

                    else {
                        mild_souce_span.style.display = "none";
                        if (flg_souce2 === 0) {
                            total_price -= 3;
                        }
                    }
                    // Add souce logic

                    final_amount.innerHTML = `$${total_price}.00`
                    // console.log(total_price)
                }, 100)

            });
        })
    }, 1000);

    return (
        <>
            <section className="show-section">
                <div className='show-food-container'>
                    <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/cart/shooping-cart" encType="multipart/form-data">
                        <div className='d-flex show-food-container-inner'>
                            <div style={{ "width": "31%" }} className=' show-food-container-inner-image'>
                                <img src={"/IMAGE/" + foods.image} alt="imagse.." />
                            </div>

                            <div style={{ "width": "38%", "background-color": "white" }} className='pt-1'>
                                <h5 className="mx-3" style={{ "color": "purple" }}>{foods.title} </h5>

                                <p className="bg-purple m-0 mx-3 pt-3">price:</p>
                                <span className="mx-3" style={{ "color": "#ffb239", "font-weight": "bold", "font-size": "24px" }}>${foods.price - 50}.0- $ {foods.price}.0</span>

                                <p className="m-0 mx-3 py-4"  >{foods.description}</p>

                                <p className="m-0 mx-3 bg-purple">Item Type</p>

                                <div style={{ "display": "flex", "justify-content": "space-between" }} className='px-3'>
                                    <div className='hh'>
                                        <input name="pizza_type" id="regular" type="radio"></input>
                                        <label className="m-2" for="regular">Regular
                                        </label>
                                    </div>
                                    <span className="regular-span" >$ {(foods.price) - (10 * foods.price) / 100}.00</span>
                                </div>

                                <div style={{ "display": "flex", "justify-content": "space-between" }} className='px-3'>
                                    <div>
                                        <input name="pizza_type" checked id="premium" type="radio"></input>
                                        <label className='premium-l m-2' for="premium">Premium
                                        </label>
                                    </div>
                                    <span className="premium-span">${foods.price}.00</span>
                                </div>

                                <h6 className="p-3">Quantity</h6>
                            </div>
                            <div style={{ "width": "40%", "background-color": "white" }} className='m-2 p-4'>

                                <div className='py-3' style={{ borderBottom: "3px solid #80808038" }}>
                                    <p className="m-0 mx-3 bg-purple">Add sauce ?</p>

                                    <div style={{ display: "flex", justifyContent: "space-between" }} className='px-3'>
                                        <div>
                                            <input name="hot_souce" id="hot-souce" type="checkbox"></input>
                                            <label className='m-2' for="premium">Hot souce
                                            </label>
                                        </div>
                                        <span className='hot-souce-span'>+ $2</span>
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "space-between", borderRadius: "6px" }} className='px-3'>
                                        <div>
                                            <input name="mild_souce" id="mild-souce" type="checkbox"></input>
                                            <label className='m-2' for="mild-souce">Mild souce
                                            </label>
                                        </div>
                                        <span className='mild-souce-span'>+ $3</span>
                                    </div>

                                </div>

                                {/* new  */}

                                <div className='py-3' style={{ borderBottom: "3px solid #80808038" }}>

                                    <p className="m-0 mx-3 bg-purple">Add seasoning?</p>

                                    <div style={{ display: "flex", justifyContent: "space-between" }} className='px-3'>
                                        <div>
                                            <input name="salt" id="premium" type="checkbox"></input>
                                            <label className='m-2' for="premium">Add salt
                                            </label>
                                        </div>
                                        <span>+ $4</span>
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "space-between", borderRadius: "6px" }} className='px-3'>
                                        <div>
                                            <input id="mild-souce" type="checkbox"></input>
                                            <label className='m-2' for="mild-souce">Add paper
                                            </label>
                                        </div>
                                        <span>+ $5</span>
                                    </div>
                                </div>

                                {/* message   */}
                                <div className='py-3' style={{ borderBottom: "3px solid #80808038" }}>
                                    <p className="m-0 mx-3 bg-purple">Special instruction</p>
                                    <textarea name="restriction" cols="40" rows="4" placeholder="Add Instructions..."></textarea>
                                </div>

                                {/* Add Cart Button  */}
                                <div style={{ display: "flex", justifyContent: "space-between", borderRadius: "6px" }} className='p-3'>

                                    <h6>Total Price</h6>
                                    <span className="final-amount">${foods.price}.00</span>
                                </div>

                                <div className="add_cart_button">
                                    <button type="submit" >ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="exit_menu">
                    <i className="fa-solid fa-circle-plus"></i>
                </div>
            </section>
        </>
    )
}

export default Show_food
