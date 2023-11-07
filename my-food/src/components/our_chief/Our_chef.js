import React from 'react'
import "./our_chef.css"
import Chef_card from '../chef_card/Chef_card'
const Our_chef = () => {
    return (
        <>
            <section className='p-5'>

                <h2 className='before-underline' style={{ textAlign: "center" }}>OUR TALENT <span style={{ "color": "#6bd86b" }}>CHEF</span></h2>
                <div className='d-flex'>
                    <Chef_card image="/IMAGE/ava-1.jpg" name="Mr. smiley jinks" post="Chef" />
                    <Chef_card image="/IMAGE/ava-2.jpg" name="Lazypy" post="Chef" />
                    <Chef_card image="/IMAGE/ava-3.jpg" name="Peter cooke" post="Chef" />
                    <Chef_card image="/IMAGE/ava-4.jpg" name="Brand Kidsy" post="Chef" />
                </div>
            </section>
        </>
    )
}

export default Our_chef
