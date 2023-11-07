import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Add_type = () => {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/food/type/add', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        let json = await response.json();
        console.log(json);
        if (json.success) {
            navigate('/admin')
        }
        setFormData("");


    }


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
                <div className="dashboard-content">
                    <h1 style={{ textAlign: "center" }}>Add Type</h1>
                    <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/food/type/add" className="add-room-form">

                        <div class="inputclass">
                            
                            <input name="type" onChange={handleChange} type="text" className="inp inp1" placeholder="Type" id="inputtype" />
                        </div>

                        <button   className="btn1" type="submit" >HIT</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Add_type
