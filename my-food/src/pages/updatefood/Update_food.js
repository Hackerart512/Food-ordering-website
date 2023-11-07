import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Update_food = () => {
    // Check Admin is Exit r Not
    let navigate = useNavigate();
    let params = useParams();


    useEffect(() => {
        if (!sessionStorage.getItem('token'))
            navigate('/admin');
    }, []);

    // ------------------------------- fetch  food--------------------------

    const [formData, setFormData] = useState({});


    const fetchFood = async (Card_ObjectId) => {
        try {
            const response = await fetch(`http://localhost:5000/food/fetchfood/${Card_ObjectId}`);

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setFormData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };
    // ------------------------------- fetch  food--------------------------


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
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        // fecth type data
        fetchData();
        // Fetch perticular food id data and show  perticular fields
        fetchFood(params.id);
    }, []);
    // food type show in select box


    // it's handle click function
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch(`http://localhost:5000/food/updatefood/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        let json = await response.json();
        console.log(json);
        if (json.success) {
            navigate('/admin/dashboard/view-food')
        }
        setFormData("");

    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }
    return (
        <>
            <section className="dashboard-section">
                <div className="sidebar-div">
                    <Sidebar />
                </div>
                <div className="dashboard-content">

                    <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Update Food</h1>

                    <form onSubmit={handleSubmit} method="POST" action={"http://localhost:5000/food/updatefood/" + params.id} encType="multipart/form-data" className="add-food-form">

                        <div class="inputclass">
                            <input  onChange={handleChange} className='inp inp1' name="image_photo" type="file" id="inputimage" placeholder="Image" />
                        </div>

                        <div class="inputclass">
                            <input value={formData.title} onChange={handleChange} name="title" type="text" className='inp inp1' placeholder="Title" id="inputtitle" />
                        </div>

                        <div class="inputclass">
                            <input value={formData.description} onChange={handleChange} className='inp inp1' name="description" type="text" placeholder="Description" id="inputdescription" />
                        </div>

                        <div class="inputclass" >

                            <select value={formData.type} name="type" onChange={handleChange} type="text" className="inp inp1" placeholder="Type" id="inputtype">
                                {
                                    types.map((item) => (
                                        <>
                                            <option className="inp inp1" value={item._id}>{item.type}</option>
                                        </>
                                    ))
                                }
                            </select>
                        </div>

                        <div class="inputclass">
                            <input value={formData.price} onChange={handleChange} name="price" type="number" className="inp inp1" placeholder="Price" id="inputprice" />
                        </div>

                        <div class="inputclass">
                            <input value={formData.discount} onChange={handleChange} name="discount" type="number" className="inp inp1" placeholder="Discount" id="inputdiscount" />
                        </div>

                        <div class="inputclass">
                            <input value={formData.rating} onChange={handleChange} className="inp inp1" name="rating" type="number" placeholder="Rating" id="inputrating" />
                        </div>

                        <button className="btn1" type="submit">Update</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Update_food
