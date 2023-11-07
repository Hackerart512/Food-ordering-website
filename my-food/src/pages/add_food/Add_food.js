import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./add_food.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react';


const Add_food = () => {

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
            // console.log(data);
            // console.log("heelo");
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);
    // food type show in select box


    // it's handle click function
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/food/addfood', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        let json = await response.json();
        // console.log(json);
        if (json.success) {
            navigate('/admin/dashboard/view-food')
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
    return (
        <>
            <section className="dashboard-section">
                <div className="sidebar-div">
                    <Sidebar />
                </div>
                <div style={{ color:'white',fontFamily: "system-ui", textAlign: "center" }} className="dashboard-content">

                    <h1 style={{ color:'white',fontFamily: "system-ui", textAlign: "center" }}>Add Food</h1>

                    <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/food/addfood" encType="multipart/form-data" className="add-food-form">

                        <div className="inputclass">
                            <input onChange={handleChange} className='inp inp1' name="image_photo" type="file" id="inputimage" placeholder="Image" />
                        </div>

                        <div className="inputclass">
                            <input onChange={handleChange} name="title" type="text" className='inp inp1' placeholder="Title" id="inputtitle" />
                        </div>

                        <div className="inputclass">
                            <input onChange={handleChange} className='inp inp1' name="description" type="text" placeholder="Description" id="inputdescription" />
                        </div>

                        {/* <div className="inputclass">
                            <input onChange={handleChange} className='inp inp1' name="type" type="text" placeholder="Type" id="inputtype"/>
                        </div> */}

                        <div className="inputclass" >

                            <select name="type" onChange={handleChange} type="text" className="inp inp1" placeholder="Type" id="inputtype">
                                {
                                    types.map((item) => (
                                        <>
                                            <option  className="inp inp1" value={item._id}>{item.type}</option>
                                        </>
                                    ))
                                }
                                
                            </select>
                        </div>

                        <div className="inputclass">
                            <input onChange={handleChange} name="price" type="number" className="inp inp1" placeholder="Price" id="inputprice" />
                        </div>


                        <div className="inputclass">
                            <input onChange={handleChange} name="discount" type="number" className="inp inp1" placeholder="Discount" id="inputdiscount" />
                        </div>

                        <div className="inputclass">
                            <input onChange={handleChange} className="inp inp1" name="rating" type="number" placeholder="Rating" id="inputrating" />
                        </div>


                        <button style={{ backgroundColor:'#673ab7'}} className="btn1" type="submit">Add</button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Add_food
