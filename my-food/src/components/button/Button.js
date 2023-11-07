import React from 'react'
import "./button.css";

const Button = (probs) => {

    setTimeout(() => {
        const button = document.querySelector(".btn_bubble")
        // console.log(button)

        button.addEventListener("click",(e) =>{
           let x = e.clientX - e.target.offsetLeft;
           let y = e.clientY - e.target.offsetTop;

           let ripples = document.createElement("span");
           ripples.setAttribute('class','span_bubble')
           ripples.style.left =x+"px";
           ripples.style.top =y+"px";
           button.appendChild(ripples);
        //    console.log(x)
        //    console.log(y)

           setTimeout(()=>{
            ripples.remove();
           },1000)
        })
    },100)
    return (
        <>        
        <button type="button" className="btn_bubble">{probs.text}</button>  
        </>
    )
}

export default Button
