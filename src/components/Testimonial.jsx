import React from 'react'

import iconTop from '../assets/icons/quote-icon-top.png';
import iconBottom from '../assets/icons/quote-icon-bottom.png';
import hutBackground from "../assets/img/huts.jpg";

const Testimonial = (props) => {
  return (
    <div className="testimonial-card">
        <div className="testimonial-body flex col gap16">
        <div id="top-quote" className="flex main-start">
            <img src={iconTop} alt="" height={25} />
        </div>
        <span className="body-m color-major block">{props.message}</span>
        <div id="bottom-quote" className="flex main-end">
            <img src={iconBottom} alt="" height={25} />
        </div>
        </div>
        <div className="testimonial-footer flex gap16">
        <img src={props.image} alt="" height={40} width={40}/>
        <div className="flex col">
            <span className="subheading-m color-major">{props.name.toString().toUpperCase()}</span>
            <span className="body-m color-minor">{props.date.toString().toUpperCase()}</span>
        </div>
        </div>
    </div>
  )
}

export default Testimonial