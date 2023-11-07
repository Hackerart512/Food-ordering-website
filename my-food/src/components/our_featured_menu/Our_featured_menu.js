import React from 'react'
import "./our_featured_menu.css";
import Featured_card from '../featured_card/Featured_card';

const Our_featured_menu = () => {
    return (
        <>
            <section id="featured-menu" className=" p-5 ">
                <h2 className='before-underline' style={{ textAlign: "center" }}>OUR  <span style={{ "color": "#6bd86b" }}>FEATURED </span></h2>
                <div className='swiper mySwiper'>
                    <div className='py-4 d-flex swiper-wrapper'>
                        <Featured_card image="/IMAGE/pancakes.jpg" title="Pan Cake" pera="Greek yoghurt and fruits or savoury chickpea pancakes are protein breakfast option" />
                        <Featured_card image="/IMAGE/paneer_tikka.jpg" title="Paneer Tikka" pera="5 Quick and Delectable Paneer Tikka Recipes For Weeknight Delights" />
                        <Featured_card image="/IMAGE/cupcake.jpg" title="Pan Cake" pera="Greek yoghurt and fruits or savoury pan cake pancakes are protein breakfast option" />
                        <Featured_card image="/IMAGE/raspberry.jpg" title="Rasp Berry" pera="Greek yoghurt and fruits or savoury chickpea rasp berry are protein breakfast option" />
                    </div>
                    <div className="swiper-pagination"></div>


                    <div className='prev'></div>
                    <div className='next'></div>
                </div>
            </section>
        </>
    )
}

export default Our_featured_menu
