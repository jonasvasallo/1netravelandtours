import shrineBackground from './shrine-entrance.jpg'
import hutBackground from './huts.jpg';
import lakeBackground from './lake.jpg';
import pic1Background from './pic1.jpg';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';

import { useEffect } from 'react';

function Home(){
    useEffect(() => {
        // for text sliding animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if(entry.isIntersecting){
                    entry.target.classList.add("slide");
                } 
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        
        var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);
        
    })
    return(
        <>
        <div className="home">
            <div className="text">
            <img src="" alt="" width="120px" className="hidden" />
            <h1 className="home-content hidden">From <b style={{color: "#d7263d"}}>DREAM</b> to <b style={{color: "#03d3fc"}}>DESTINATION</b></h1>
            
            <p className="home-content hidden">Travel the world, one adventure at a time</p><br />
            <button className="home-content hidden" >Start Your Journey Now</button>
            </div>
            <div className="slider background-tint-dark">
                <div className="slides background-tint-dark">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div className="sliding first">
                        <img src={hero1} alt="" />
                    </div>
                    <div className="sliding">
                        <img src={hutBackground} alt="" />
                    </div>
                    <div className="sliding">
                        <img src={lakeBackground} alt="" />
                    </div>
                    <div className="sliding">
                        <img src={pic1Background} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <script>
            
        </script>
    
        <div className="content flex cross-center main-between pad16 gap32 about1">
            <div className="text-section flex col">
                <span className='heading-l'>ABOUT US</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
            <div className="image-section">
                <img src={hero1} alt="" />
            </div>
        </div>
        <div className="content flex cross-center main-end pad16 about2">
            <div className="text-section flex col">
                <span className='heading-l'>ABOUT US</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
        </div>
        <div className="content flex main-start cross-center col main-center">
            <div className="text-section flex col cross-center main-center">
                <span className='heading-l'>SERVICES</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
        </div>
        <div className="content flex cross-center main-end pad16 about3">
            <div className="text-section flex col">
                <span className='heading-l'>ABOUT US</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
        </div>
        <div className="content flex cross-start main-center">
            <div className="text-section flex col cross-center main-center">
                <span className='heading-l'>TOUR PACKAGES</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
        </div>
        <div className="content flex cross-start main-center">
            <div className="text-section flex col cross-center main-center">
                <span className='heading-l'>TESTIMONIALS</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
        </div>
        <div className="content flex cross-center main-between pad16 gap32">
            <div className="text-section flex col">
                <span className='heading-l'>CONTACT US</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit saepe, quas iste, blanditiis deleniti est ipsa eius nemo enim odio eveniet aperiam voluptates soluta molestiae voluptatum ipsam odit minima.</span>
            </div>
            <div className="image-section">
                <img src={hero1} alt="" />
            </div>
        </div>
        <footer>
        Copyright © 2022 1NE Travel and Tours. All rights reserved.
    </footer>
        </>
        
    )
}
export default Home
