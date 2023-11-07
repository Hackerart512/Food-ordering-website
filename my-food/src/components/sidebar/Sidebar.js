import React from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {

    setTimeout(() => {
        let arrow_btn = document.querySelector(".arrow")
        let Sidebar = document.querySelector(".sidebar")
        let span = document.querySelectorAll("ul li span")
        // let body = document.querySelector(".section-sidebar")



        arrow_btn.addEventListener("click", (() => {
            Sidebar.classList.toggle("sidebar-active")
            arrow_btn.classList.toggle("arrow-active")

            span.forEach(element => {
                element.classList.toggle("span-active")
            });
        }))

        // check box theme change when active 

        setInterval(() => {
            let Switch = document.querySelector("#switch:checked") != null
            // console.log(Switch)
            if (Switch) {
                Sidebar.classList.add("light")
                // body.style.backgroundColor = "#dbf0fa"
            }
            else {
                Sidebar.classList.remove("light")
                // body.style.backgroundColor = "black"
            }
        }, 100);

    })
    return (
        <>

            <div className="sidebar">
                <div className="profile">
                    <img src="/IMAGE/ava-4.jpg" alt="" />
                    <h6 className="text-white my-2">Rani Prajapat</h6>
                    <i className="arrow fa-solid fa-chevron-down"></i>
                </div>
                <div className="menu">
                    <ul>
                        <li><i className="sidebar-i fa-solid fa-house"></i> <Link className='text-white' to="/admin/dashboard"><span className="span">Dashboard</span></Link></li>

                        <li data-toggle="collapse" data-target="#food-type" aria-expanded="false"><i className="sidebar-i fa-solid fa-spoon"></i><span className="span">Menue</span></li>
                        <div aria-expanded="false" className="collapse toggle-class" id="food-type">
                            <Link className='text-white' to="/admin/dashboard/add-type"> <li>Add Menue</li></Link>
                            <Link className='text-white' to="/admin/dashboard/view-type"><li>View Menue</li></Link>
                        </div>

                        <li data-toggle="collapse" data-target="#food"><i className="sidebar-i fa-solid fa-spoon"></i>
                            <span className="span">Food</span>
                        </li>
                        <div className="collapse toggle-class" id="food">
                            <Link className='text-white' to="/admin/dashboard/add-food"> <li>Add food</li></Link>
                            <Link className='text-white' to="/admin/dashboard/view-food"><li>View food</li></Link>
                        </div>

                        <li><i className="sidebar-i fa-solid fa-chart-simple"></i><span className="span">Analysis</span></li>
                        <li><i className="sidebar-i fa-solid fa-bell"></i><span className="span">Notification</span></li>
                        <li><i className="sidebar-i fa-regular fa-heart"></i><span className="span">Like</span></li>

                        <li><i className="sidebar-i fa-solid fa-cart-shopping"></i><span className="span">Order</span></li>
                    </ul>
                </div>

                {/* <div className="exit-menu">
                    <input type="checkbox" id="switch" className="checkbox" />
                    <label for="switch" className="toggle">
                    </label>
                </div> */}
            </div>

        </>
    )
}

export default Sidebar
