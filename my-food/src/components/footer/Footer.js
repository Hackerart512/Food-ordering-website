import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* section 1 */}
            <section className="p-5 row footer-section-1">
                <div className="d-flex">

                <img style={{"width":"23px","height":"23px" ,"background-color": "white",
    "border-radius": "50%", "margin": "15px 0px"}} className=" " src="IMAGE/res-logo.png" alt="image" />
                <p className="logo-heading text-white">
                    <span style={{ "color": "#6bd86b" }}>GriTi</span>
                    <span >some</span>
                </p>
                </div>
                <div className='col-lg-6'>
                    <h2 style={{ "color": "white", "width": "24%" }}>The Best Restaurants in Your Home</h2>
                    <p style={{ "color": "white", "width": "45%" }}>rem ipsum dolor sit amipsum dolor sit amipsum dum dolor sit amipsum dolor sit amipsum dolor sit amipsum dolor sium dolor sit amipsum dum dolor sit amipsum dt amipsum dolor sit amipsum dolor sit amipsum dolor sit am.</p>
                </div>
                <div className='col-lg-6'>
                    <h3 style={{ "color": "#878080", "font-weight": "bold" }}>Menu</h3>
                    <ul className='footer'>
                        <a href="/"><li>Home</li></a>
                        <a href='/about'><li>About</li> </a>
                        <a href='/restotants'><li>restotants</li> </a>
                        {/* <Link to="/Restorants"><li>Restorants</li></Link> */}
                    </ul>
                </div>
            </section>
            {/* section 1 */}

            {/* section 2 */}
            <section className="px-5 m-0 footer-section-2">
                <h3 style={{ color: "#878080" }}>Contacts</h3>
                <p className="pb-2" style={{ color: "white", width: "25%", borderBottom: "2px solid grey" }} >1717 Harrison St, son Francusco , CA 94103, Unltued Status</p>
                <p style={{ color: "white", width: "25%" }} >gritisome@gmial.com</p>
                <p style={{ color: "white", width: "25%" }} >+1234 456 7890</p>

                <div className="icon-container">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </section>
            {/* section 2 */}

            <section className="py-2 footer-section-3">
                <p style={{ borderTop: "2px solid #878080" }}>Copyirght 2023 gritisome. All rights reserved.</p>
            </section>
        </>
    )
}

export default Footer
