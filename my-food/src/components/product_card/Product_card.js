import React from 'react'
import "./product_card.css";

const Product_card = (probs) => {



  return (
    <>
      <div  className="product-card" data-name={probs.type} data-objectid={probs.objid}>

        <div className="product-card-image">
          <img src={probs.image} alt="img.." />
          <div className="discount">{probs.discount}</div>
        </div>
        <div className="d-flex  product-card-details">
          <div style={{ width: "60%" }} className="">
            <h4 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{probs.name}</h4>
            <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: 'nowrap' }}>{probs.dis}</p>
          </div>
          <div style={{ width: "40%" }} className=''>
            <div className="product-card-rating">{probs.rating}</div>
            <div className="product-card-price">${probs.price} for order</div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Product_card
