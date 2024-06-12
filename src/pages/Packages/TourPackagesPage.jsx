import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/tourpage.css";

const TourPackagesPage = () => {

  const packages = [
    {
      'image_url' : '/img/europe.jpg',
      'name' : 'Heart of Europe',
      'code' : 'EUHOEW',
      'description' : " Travel across the heart of the European continent! From iconic cities to breathtaking landscapes, prepare to be captivated by the diversity and charm of Europe.",
      'duration' : '8 days',
      
    },
    {
      'image_url' : '/img/taipei.jpg',
      'name' : 'Taipei',
      'code' : 'TWTPTW',
      'description' : "Uncover Taipei's vibrant charm: delve into its lively atmosphere, savor delectable cuisine, and witness iconic landmarks on this captivating tour package.",
      'duration' : '3 days',
      'overview': "Travel Period: December 31, 2023\n\nItinerary\nDay 01: Arrive Taipei airport, meet and transfer to hotel\nDay 02: Morning Taipei City Tour & Jiufen Tour\n-Chiang Kai Shek Memorial Hall\n-Presidential Square (pass by)\n-Martyr's Shrine\n-Taipei City Hall\n-Duty Free\n-Local Product\n-Jinguashi and Golden Waterfall (pass by)\n-Jiufen Village and Souvenir Shop\nDay 03: Free at own leisure until transfer to airport for return flight\n\nInclusions\nRoundtrip Airfare via EVA Air | Baggage Allowance & Hand Carry | Meal on Board\nthe aircraft | Roundtrip Airport Transfers | Hotel Accommodation | Daily Breakfast | Taipei City Tour &\nJiufen Tour on Day 02\n",
    },
    {
      'image_url' : '/img/australia.jpeg',
      'name' : 'Australia Extravaganza',
      'code' : 'AUAEVW',
      'description' : "You'll get to see it all — from the iconic landmarks of SYDNEY 🏙 to the cultural treasures of CANBERRA 🏞 and the vibrant charm of MELBOURNE 🌇. Join us this Winter as we wander through stunning landscapes and create memories that will last a lifetime! ",
      'duration' : '10 days',
    },
    {
      'image_url' : '/img/shanghai.jpg',
      'name' : 'Shanghai Disneyland',
      'code' : 'CNSDTW',
      'description' : "Embark on an enchanting journey! Experience Disneyland's magic in Shanghai, then immerse yourself in the city's vibrant culture and tantalizing cuisine.",
      'duration' : '4 days',
      'overview' : "Itinerary\nDay 01: Arrival Shanghai, visit Chenghuangmiao Market + Shanghai Old Street try the local snacks. Xintiandi and Shikumen area, The Bund free time shopping, Check in Hotel\nDay 02: Morning visit Guangfulin Underwater Site Park, Thames Town, Red card pointers - Wukang Road\nDay 03: Full day tour in Shanghai Disneyland Park\nDay 04: Morning visit Pudong New District, Florencia Village Outlets, then transfer to airport. End of service\n\nHotel\nHoliday Inn Express Shanghai or similar class\n\nInclusions\n-Roundtrip Airfare via Philippine Airlines\n-Terminal fee (PHP550) and other taxes\n-23kgs baggage allowance\n-7kgs hand carry allowance\n-Meal on board the aircraft\n-Roundtrip Airport Transfers\n-Hotel Accommodation\n-English Speaking Guide\n-Meals as indicated in itinerary\n-Tours as indicated in itinerary\n\nExclusions\n-PH Tax (php1620)\n-Tipping ($5/person/day)\n-Visa Fee\n-Other meals\n-Other expenses\n-Security Deposit in hotel, if any",
    },
    {
      'image_url' : '/img/korea-autumn.jpg',
      'name' : 'Heartfelt Korea',
      'code' : 'KRHKRW',
      'description' : "Discover the glory of Heartfelt Korea this Autumn, where every moment is a canvas of vibrant colors and breathtaking scenery. ✨ Let the golden beauty of Korea’s serene charm enchant your heart and soul!🧡",
      'duration' : '6 days',
    },
    {
      'image_url' : '/img/korea-spring-festival.jpg',
      'name' : 'Korea Spring Festival',
      'code' : 'KRKSFW',
      'description' : "Immerse yourself in the beauty of Korea's cherry blossom season and explore its rich culture and history.",
      'duration' : '5 days',
      'overview' : "Itinerary\nDay 01: Samcheok Ocean Rail Bike, BTS Bus Station at Jumunjin Beach, Sokcho Tourist & Fishery Market\nDay 02: Everland Theme Park, COEX Mall and Starfield Library, Painter Hero Show\nDay 03: Ginseng Outlet, Cosmetic Shop, Gyeongbok Palace with Hanbok wearing, Deoksu Stonewall Walkway, Duty Free Shop, Myeongdong Shopping Street\nDay 04: Red Pine Tree Shop, Italian Village Pinocchio & Da Vinci, Nami Island\nDay 05: Departure to Manila\n\nInclusions\n-Flight Philippine Airlines\n-Departure in Manila\n-PR470 Manila to Yangyang 0720 1205 (3hours & 45 mins)\n-Arrival in Manila\n-PR471 Yangyang to Manila 1325 1625 (4Hours)\n\nHotel\nGangwon - Ramada Hotel & Suites Gangwon",
    },
  ];

  return (
    <>
      <div className="flex col gap-32">
        <div className="tour-header">
          <div className="heading-l">Tour Packages</div>
        </div>
        <div className="content flex cross-start main-center pad32 gap8 wrap">
          {packages.map((tour) => (
            <div className="tour-container">
            <img src={tour.image_url} alt="" />
            <div className="flex col gap8">
              <Link to={`/tour-packages/${tour.code}`} className='heading-m color-major'>{tour.name}</Link>
              <span>Tour Code: {tour.code}</span>
              <hr />
              <span>{tour.description}</span>
              <br />
              <span>Duration: {tour.duration}</span>
            </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  )
}

export default TourPackagesPage