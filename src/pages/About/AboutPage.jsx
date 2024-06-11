import React from 'react'

import "../../styles/about.css";
import Contact from '../../components/Contact';

const AboutPage = () => {
  return (
    <>
        <div className="flex col gap32">
            <div className="about">
                <div className="text-section flex col">
                    <span className="heading-l">We want you to experience the best journey of your life!</span>
                    <spab className="body-l">We are a full-service travel agency dedicated to providing our clients with exceptional travel experiences. Our team of experienced professionals is passionate about travel and committed to delivering the highest level of customer service.</spab>
                </div>
            </div>
            <div className="content flex cross-start main-between pad32 gap32">
                <div className="text-section flex col">
                    <span className="heading-l">At 1NE Travel and Tours, we believe that travelling is more than just visiting new places.</span>
                    <span className="body-l">It's about immersing yourself in new cultures, experiencing unique adventures, and creating memories that will last a lifetime.</span>
                </div>
                <div className="image-section" data-autoplay="true">
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F1netravelandtours%2Fvideos%2F455122020039429%2F&show_text=false&width=560&t=0" width="640" height="480" style={{'border' : 'none', 'overflow' : 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" data-autoplay="true"></iframe>
                </div>
            </div>
            <div className="content flex col main-start cross-center pad32 gap32" id='mission_vision'>
                <span className='textalign-center body-l'>We pride ourselves on our attention to detail and commitment to providing our clients with the best possible travel experiences. Our goal is to make your travel dreams a reality and ensure that every aspect of your trip is seamless and stress-free.</span>
                <div className="flex gap16 wrap">
                    <div className="mission flex col">
                        <span className="heading-l">Our Mission</span>
                        <span className='body-l'>To offer remarkable travel experiences that encourage our customers to discover unfamiliar cultures and locations. To produce unforgettable expeditions that meet our clients' desires and surpass their expectations.</span>
                    </div>
                    <div className="mission flex col">
                        <span className="heading-l">Our Vision</span>
                        <span className="body-l">We aim to become the best among travel agencies in the country, by offering outstanding service, creative travel solutions, and memorable experiences that surpass our customers' expectations, while fostering a love for exploration.</span>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
        
    </>
  )
}

export default AboutPage