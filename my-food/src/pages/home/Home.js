import React from 'react'
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Home_section_1 from '../../components/home_section-1.js/Home_section_1';
import Footer from '../../components/footer/Footer';
import Our_chef from '../../components/our_chief/Our_chef';
import Our_featured_menu from '../../components/our_featured_menu/Our_featured_menu';
import Product_menu from '../../components/product_menu/Product_menu';
import Show_food from '../../components/show_food/Show_foods';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Preloader from '../../components/preloader/Preloader';

const Home = () => {

  // Check Use is Exit r Not
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token'))
      navigate("/login");
  }, []);


  setTimeout(() => {
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
      sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight

        if (top >= offset && offset + height) {
          section.classList.add("addclass");
        }
        else {
          section.classList.remove("addclass");
        }

      })
    }
  }, 1000)

  return (
    <>
      <Preloader />
      <Navbar />
      <Home_section_1 />
      <Our_featured_menu />
      <Product_menu />
      <Show_food />
      <Our_chef />
      <Footer />
    </>
  )
}

export default Home
