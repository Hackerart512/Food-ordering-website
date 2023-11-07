import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect } from 'react';
import "./view_type.css";
 


const View_type = () => {

    // Check Admin is Exit r Not
    let navigate = useNavigate();
    useEffect(() => {
        if (!sessionStorage.getItem('token'))
            navigate('/admin');
    }, []);

    // food type show in select box
    const [types, setType] = useState([]);

    // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/food/type/fetchalltype');

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setType(data);
            console.log(data);
            console.log("heelo");
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);
    // food type show in select box
    return (
        <>
            <section className="dashboard-section">
                <div className="sidebar-div">
                    <Sidebar />
                </div>
                <div className="dashboard-content">
                    <h1 style={{ textAlign: "center" }}>ViewType</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                 
                            </tr>
                        </thead>
                        <tbody>
            
                            {
                                types.map((item) => (
                                    <>
                                        <tr>
                                            <td>{item._id}</td>
                                            <td>{item.type}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}

export default View_type
