import React from 'react'
import "./featured_card.css"
const Featured_card = (props) => {
    return (
        <>
            <div className="featured-card swiper-slide">
                <img src={props.image} />
                <div className="p-3 featured-card-details ">
                    <h4 className="my-1" style={{ textAlign: "center" ,color:"#6bd86b"}}>{props.title}</h4>
                    <p style={{ textAlign: "left" }} >{props.pera}</p>
                </div>
            </div>
        </>
    )
}

export default Featured_card
