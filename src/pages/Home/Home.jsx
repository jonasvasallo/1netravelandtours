import shrineBackground from "./shrine-entrance.jpg";
import hutBackground from "./huts.jpg";
import lakeBackground from "./lake.jpg";
import pic1Background from "./pic1.jpg";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../../styles/swiper.css";

import "../../styles/tour.css";
import "../../styles/home.css";

import iconTop from '../../assets/icons/quote-icon-top.png';
import iconBottom from '../../assets/icons/quote-icon-bottom.png';

import { useEffect } from "react";
import Testimonial from "../../components/Testimonial";

function Home() {
  useEffect(() => {
    // for text sliding animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("slide");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    var counter = 1;
    setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);
  });
  return (
    <>
      <div className="flex col gap32">
        <div className="home">
          <div className="text">
            <img src="" alt="" width="120px" className="hidden" />
            <h1 className="home-content hidden">
              From <b style={{ color: "#d7263d" }}>DREAM</b> to{" "}
              <b style={{ color: "#03d3fc" }}>DESTINATION</b>
            </h1>

            <p className="home-content hidden">
              Travel the world, one adventure at a time
            </p>
            <br />
            <button className="home-content hidden">
              Start Your Journey Now
            </button>
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
        <div className="content flex cross-center main-between pad16 gap32 about1">
          <div className="text-section flex col">
            <span className="heading-l">TRAVEL MORE, WORRY LESS.</span>
            <span className="body-l color-major">We are a travel agency that provides diverse travel services to clients all across the country. We specialize in assisting you with all your travel needs, ensuring that your journeys are seamless and memorable. Whether you're planning a family vacation, a romantic getaway, a business trip, or an adventure expedition, our experienced team is dedicated to crafting personalized itineraries tailored to your preferences and budget.</span>
            <br />
            <span className="body-l color-major">
            With years of expertise in the travel industry, our dedicated team of travel enthusiasts is here to guide you every step of the way. From meticulously planned itineraries to personalized travel advice, we tailor each journey to match your unique preferences and needs. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the knowledge and connections to make it happen.
            </span>
          </div>
          <div className="image-section">
            <img src={hero1} alt="" />
          </div>
        </div>
        <div className="content flex cross-center main-end pad16 about2">
          <div className="text-section flex col">
            <span className="heading-l">At One Travel and Tours, our commitment to high-quality work extends beyond the booking process. </span>
            <span>
            We provide timely assistance and support, even while you are on the go. Our dedicated team is always available to address any issues or concerns that may arise during your travels. Whether you need to make last-minute changes to your itinerary, seek recommendations for local attractions, or require emergency assistance, we are just a call or message away.
            </span>
          </div>
        </div>
        <div className="content flex main-start cross-center col main-center">
        
          <div className="text-section flex col cross-center main-center">
            <span className="heading-l">SERVICES</span>
            <span className="body-l color-major textalign-center">
              Whether you're looking for a relaxing vacation, cultural experiences, or thrilling adventures, our Services section shows how we can make your travel dreams a reality with meticulous planning and personalized attention.
            </span>
          </div>
          <div className="services_container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              navigation={{
                nextEl: ".swiper-button.next",
                prevEl: ".swiper-button.prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">INTERNATIONAL & DOMESTIC BOOKING</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">HOTEL RESERVATION</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">PASSPORT APPOINTMENT</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">VISA ASSISTANCE</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">MICE</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">JOINERS TOUR</span>
              </SwiperSlide>
              <SwiperSlide>
                <img src={hutBackground} alt="" />
                <span className="heading-s">2GO TICKETING</span>
              </SwiperSlide>

              <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="content flex cross-center main-center pad16 about3">
          <div className="text-section flex col cross-center main-center">
            <span className="heading-l">Our Expertise – We Know Our Stuff!</span>
            <span>
            Every member of our team is driven by a deep passion for travel. As enthusiastic travelers ourselves, our consultants bring a wealth of knowledge and over years of combined experience in the destinations they specialize in. This allows us to offer you genuine experiences, the finest guides, and insider tips on hidden gems.
            </span>
          </div>
        </div>
        <div className="content flex col main-start cross-center">
          <div className="text-section flex col cross-center main-center">
            <span className="heading-l">TOUR PACKAGES</span>
            <span className="body-l color-major textalign-center">
               Each package is thoughtfully planned to provide you with unique and immersive experiences, featuring top destinations, expert guides, and seamless itineraries.
            </span>
          </div>
          <div className="flex">
          <div className="tour-card">
                <div className="tour-image">
                  <img src={hutBackground} alt="" />
                </div>
                <div className="intro">
                  <h1>Taipei</h1>
                  <p>
                    Uncover Taipei's vibrant charm: delve into its lively atmosphere, savor delectable cuisine, and witness iconic landmarks on this captivating tour package.
                  </p>
                </div>
              </div>
            <div className="tour-card">
                <div className="tour-image">
                  <img src={hutBackground} alt="" />
                </div>
                <div className="intro">
                  <h1>Shanghai Disneyland</h1>
                  <p>
                    Embark on an enchanting journey! Experience Disneyland's magic in Shanghai, then immerse yourself in the city's vibrant culture and tantalizing cuisine.
                  </p>
                </div>
              </div>
            <div className="tour-card">
                <div className="tour-image">
                  <img src={hutBackground} alt="" />
                </div>
                <div className="intro">
                  <h1>Korea Spring Festival</h1>
                  <p>
                    Immerse yourself in the beauty of Korea's cherry blossom season and explore its rich culture and history.
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className="content flex main-start cross-center col">
          <div className="text-section flex col cross-center main-center">
            <span className="heading-l">TESTIMONIALS</span>
            <span className="body-l color-major textalign-center">
              Hear what our delighted travelers have to say about their unforgettable journeys with us!
            </span>
          </div>
          <br />
          <br />
          <div id="testimonials" className="flex gap16 wrap main-center">
            <Testimonial message="Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and creative agency." name="Saimon B. Bello" date="October 12, 2024"/>
            <Testimonial message="Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and creative agency." name="Saimon B. Bello" date="October 12, 2024"/>
            <Testimonial message="Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and creative agency." name="Saimon B. Bello" date="October 12, 2024"/>
            <Testimonial message="Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and creative agency." name="Saimon B. Bello" date="October 12, 2024"/>
            <Testimonial message="Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and creative agency." name="Saimon B. Bello" date="October 12, 2024"/>
          </div>
        </div>
        <div className="contact content flex col main-center">
          <div className="flex col">
            <span className="heading-m">Get in touch with</span>
            <span className="heading-l">1NE TRAVELS TODAY</span>
            <br />
            <span className="subheading-m">Follow us on</span>
            <a href="https://www.facebook.com/1netravelandtours"><img alt="Facebook" style={{width: "32px", height:"32px", objectfit: "cover"}} fetchpriority="high" src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png"/></a>
          </div>
          
        </div>
        <footer>
          Copyright © 2022 1NE Travel and Tours. All rights reserved.
        </footer>
      </div>
    </>
  );
}
export default Home;
