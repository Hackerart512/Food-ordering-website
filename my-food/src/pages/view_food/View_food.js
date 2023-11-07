import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./view_food.css";
import {
    Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const View_food = () => {

    // Check Admin is Exit r Not
    let navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.getItem('token'))
            navigate('/admin');
    }, []);


    const [rooms, setRoom] = useState([]);

    // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/food/fetchallfood');

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setRoom(data);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);




    // cancel Food funcition
    const DeleteRoom = async (event) => {
        // confirm("Are you sure you want to deleted room ?")

        if (window.confirm("Are you sure you want to deleted food ?")) {
            let Card_ObjectId = event.target.getAttribute("data-objid")
            try {
                const response = await fetch(`http://localhost:5000/food/deletefood/${Card_ObjectId}`, {
                    method: 'delete',
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



    return (

        <>
            <section className="dashboard-section">
                <div className="sidebar-div">
                    <Sidebar />
                </div>
                <div className="dashboard-content">
                    <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>View Food</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Type</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                rooms.map((item) => (
                                    <>
                                        <tr>
                                            <td>
                                                <div className='view-image'>
                                                    <img src={"/IMAGE/" + item.image}></img>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.title}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='view-td'>
                                                    {item.description}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='view-td'>
                                                    $ {item.price}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.rating}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.discount}%
                                                </div>
                                            </td>
                                            <td>
                                                <div className='view-td'>
                                                    {item.type}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='view-td'>
                                                    <Link to={"/admin/dashboard/updatefood/" + item._id} style={{
                                                        backgroundColor: "#47a647",
                                                        color: "white",
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        padding: "4px 9px",
                                                        textDecoration: "none",

                                                    }} type="button">
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </Link>
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

                                                    }} onClick={DeleteRoom} data-objid={item._id} class="fa-solid fa-trash"></i>

                                                </div>
                                            </td>

                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table >


                </div>
            </section>
        </>
    )
}

export default View_food
