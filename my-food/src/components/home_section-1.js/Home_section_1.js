import React from 'react'
import "./home_section_1.css"
import Button from '../button/Button'
const Home_section_1 = () => {
    return (
        <>
            <section className="  home-section1">
               <h2   style={{ textAlign:"left"}}>Eat Fresh 
               <br/>
               <span style={{color:"#6bd86b"}}> Eat Healthy</span>
              
               </h2>
               <p style={{width: "94%"}}className='my-4'>Lorem ipsum dolor sit amipsum dolor sit amipsum dum dolor sit amipsum dolor sit amipsum dolor sit amipsum dolor sium dolor sit amipsum dum dolor sit amipsum dt amipsum dolor sit amipsum dolor sit amipsum dolor sit am</p>
               {/* <a style={{color:"white",width:"164px"}} herf="#" className="my-3  bg-green-btn-type">View Our Menu</a> */}

               <Button text="View Our Menu"/>
            </section>

            <section style={{overflow:"hidden",marginTop:"62px"}}className="burgerImage row">
               <div className='p-5 col-lg-6 home-section-2-img'>
                <img src="/IMAGE/product_09.jpg"/>
               </div>
               <div className='p-5 col-lg-6 home-section-2-details'>
                   <h2 className="py-2">Welcome to <span style={{"color":"#6bd86b"}}>Our Foodies</span></h2>
                   <p>rem ipsum dolor sit amipsum dolor sit amipsum dum dolor sit amipsum dolor sit amipsum dolor sit amipsum dolor sium dolor sit amipsum dum dolor sit amipsum dt amipsum dolor sit amipsum dolor sit amipsum dolor sit am</p>
                   {/* <a style={{color:"white",width:"128px"}} herf="#" className="my-3  bg-green-btn-type">Read More</a> */}

                   <Button text="Read More"/>
               </div>
            </section>

            <section className="px-5 my-5 home-section-3 row">
                <h2  className="my-4 before-underline" style={{"text-align":"center"}}>HOW IT <span style={{"color":"#6bd86b"}}>WORKS</span></h2>
                <div className="col-lg-4 home-section-3-1">
                    <img  className="home-section-3-img" src="/IMAGE/location.png"/>
                    <h3>Choose Your  Favorite</h3>
                    <p style={{textAlign:"center"}} className="text-secondary"> 
                    Choose Your measls and order online or by ohone . it;s easy to customize your order.</p>
                </div>
                <div className="col-lg-4 home-section-3-1">
                    <img  className="home-section-3-img" src="/IMAGE/location.png"/>
                    <h3>We Deliver Your meals</h3>
                    <p style={{textAlign:"center"}} className="text-secondary"> 
                    Choose Your measls and order online or by ohone . it;s easy to customize your order.</p>
                </div>
                <div className="col-lg-4 home-section-3-1">
                    <img  className="home-section-3-img" src="/IMAGE/location.png"/>
                    <h3>Eat and Enjoy</h3>
                    <p style={{textAlign:"center"}} className="text-secondary"> 
                    Choose Your measls and order online or by ohone . it;s easy to customize your order.</p>
                </div>
                
            </section>
        </>
    )
}

export default Home_section_1
