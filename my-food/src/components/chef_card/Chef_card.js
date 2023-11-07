import React from 'react'
import "./chef_card.css"

const Chef_card = (props) => {
    return (
        <>
            <div className="chef-card">
                <img src={props.image} />
                <div className="chef-card-details">
                    <h4 className="my-3 " style={{textAlign: "center"}}>{props.name}</h4>
                    <p style={{textAlign: "center"}} >{props.post}</p>
                </div>
            </div>
        </>
    )
}

export default Chef_card
