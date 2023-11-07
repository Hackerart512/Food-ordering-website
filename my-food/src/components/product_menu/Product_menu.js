import React from 'react'
import "./product_menu.css";
import Product_card from '../product_card/Product_card';
import { useEffect, useState } from 'react';

const Product_menu = () => {

   // ------------------------------- fetch  food--------------------------

   const [foods, setFood] = useState([]);

   const fetchData = async () => {
      try {
         const response = await fetch('http://localhost:5000/food/fetchallfood');

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

   // use to call one time fetchData funciton

   // Fetch types

   const [types, settype] = useState([]);

   const fetchType = async () => {
      try {
         const response = await fetch('http://localhost:5000/food/type/fetchalltype');

         if (!response.ok) {
            throw new Error('error');
         }
         const data = await response.json();
         settype(data);
      } catch (error) {
         console.error('Error fetching:-', error);
      }
   };
   // Fetch types


   useEffect(() => {
      fetchData();
      fetchType();
   }, []);

   // ------------------------------- fetch --------------------------


   setInterval(() => {
      let checkBoxGroup = document.querySelectorAll(".checkBoxGroup .cetegory-div input");
      let cards = document.querySelectorAll(".product-card")

      cards.forEach(card => {
         card.classList.add("card-hide")
      })

      checkBoxGroup.forEach(checkBox => {
         if (checkBox.checked) {
            cards.forEach(card => {
               if (card.dataset.name === checkBox.dataset.name) {
                  card.classList.remove("card-hide")
               }
            })
         }
      })
   }, 100)

   return (
      <>
         <section className="p-4 row menu-secion-1">
            <div className="px-2 col-lg-3">
               <h5 className="pb-3 " style={{ borderBottom: "2px solid gray" }}>Cetegories</  h5>

               <div className="checkBoxGroup">
                  <div className='cetegory-div'>
                     <input type="checkbox" id="inputall" />
                     <label htmlFor="inputall" className="cetegory-label">All</label>
                  </div>

                  {
                     types.map((item) => {

                        return (
                           <React.Fragment key={item._id}>
                              <div className='cetegory-div'>
                                 <input data-name={item._id} type="checkbox" id={"input" + item.type} />
                                 <label htmlFor="inputall" className="cetegory-label">{item.type}</label>
                              </div>
                           </React.Fragment>
                        );

                     })
                  }
               </div>

            </div>
            <div className='px-2 col-lg-9'>
               <h5 className="pb-3" style={{ borderBottom: "2px solid gray" }}>All items</h5>
               <div style={{ "flex-wrap": "wrap" }} className="d-flex product-group">

                  {
                     foods.map((item) => {

                        return (
                           <React.Fragment key={item._id}>
                              <Product_card type={item.type} image={"/IMAGE/" + item.image} name={item.title} discount={item.discount + "% OFF up to 100"} dis={item.description} rating={item.rating + ".2"} price={item.price} objid={item._id} />
                           </React.Fragment>

                        );

                     })
                  }



               </div>
            </div>
         </section >
      </>
   )
}

export default Product_menu
