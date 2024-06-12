import React from 'react'
import { useParams } from 'react-router-dom'
import "../../styles/tourpage.css";

const TourPackageDetails = () => {
  const {id} = useParams();

  const packages = [
    {
      'image_url' : '/img/europe.jpg',
      'name' : 'Heart of Europe',
      'code' : 'EUHOEW',
      'description' : " Travel across the heart of the European continent! From iconic cities to breathtaking landscapes, prepare to be captivated by the diversity and charm of Europe.",
      'duration' : '8 days',
      'overview' : "Itinerary\nDay 01: Arrive at the airport, Photo stop at St. Nicholas Cathedral, Romerberg Square, Old Town Hall, Imperial Hall, Transfer to Hotel and Check In, Overnight in Frankfurt\nDay 02: Breakfast Time, Depart to Cologne, Photo stop at Cologne Cathedral, Depart to Amsterdam, Transfer to Hotel and Check In, Overnight in Amsterdam\nDay 03: Breakfast Time, Depart to Zaanse Schans, Visit Cheese Farm Catharina Hoeve, Wooden Shoe Workshop of Zaanse Schans, Back to Amsterdam, Photo stop at Dam Square, Royal Palace, Depart to Brussels, Photo stop at Manneken Pis, Grand Place, The Atomium. Depart to Lille, Transfer to hotel and check in, Overnight in Lille\nDay 04: Breakfast Time, Depart to Paris, Photo stop at Louvre Museum, Concorde square, Champs Elysees, Eiffel Tower, Seine river cruise, Transfer to hotel and check in, Overnight in Paris\nDay 05: Breakfast Time, Free Time at Place Stanislas, Continue to Colmar, Photo stop at La Petite Venise, Old Town, Transfer to hotel and check in, Overnight\nDay 06: Breakfast Time, Transfer to Engelberg, Board a Rotair cable car on your way to Mt. Titlis, Depart to Lucerne, Photo stop at Lake Lucerne, famous Chapel Bridge, and Lion Monument then, Shopping at Bucherer Shop, Depart to Zurich, Transfer to Hotel and Check In, Overnight in Zurich\nDay 07: Breakfast Time, Photo stop at Fraumunster Church, Gross Munster Church, Zurich Opera House, Depart to Milan, Free at Leisure, Transfer to Hotel and Check In, Overnight in Milan\nDay 08: Breakfast Time, Photo stop at Basilica di Sant'Ambrogio, Duomo di Milano, Teatro alla Scala, and Cathedral Square, Free Time to Shopping at Galleria Vittorio Emanuele II, Depart to the Airport\n\n⭐ Recommended for First-timers to Europe!\n⭐ 6 Countries: Germany, Netherlands, Belgium, France, Switzerland and Italy\n⭐ Seine River Cruise included\n⭐ Filipino Tour Escort\n\n✅ Inclusions:\n🏨 3-star Hotel accommodation\n​​✈️ Airfare via Emirates\n​🎒 7 Kilos hand-carry + 25 Kilos hand-carry\n​🚌 Tours as mentioned\n​🍴 Daily Breakfast",
      
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
      'overview' : "Itinerary\nDay 01: Departure from Manila\nDay 02: Arrival in Sydney, Enjoy Sydney City Tour, Enjoy Majestic Dinner Cruise\nDay 03: Continuation of Sydney City Tour, Enjoy OZ Jet Boating, Shopping at Paddy's Market\nDay 04: Enjoy Blue Mountains tour, Visit Sydney Zoo, Enjoy Cultural Talk Kangaroo Feed Koala Encounter, Enjoy Scenic World\nDay 05: Proceed to Canberra, Enjoy Canberra City tour\nDay 06: Transfer to Melbourne\nDay 07: Enjoy Melbourne City Tour\nDay 08: Visit Lake Mountain Alpine Resort, Yarra Valley Chocolatier and Ice Creamery\nDay 09: Transfer to airport for departure\nDay 10: Arrival in Manila\n\n✅ INCLUSIONS:\n✈️ Roundtrip Airfare via Cebu Pacific\n🧳 7KG Hand Carry\n⭐️ 4-Star Hotel Accommodation\n🥗 Full Board Meals (7B-7L-7D)\n🏃🏻 Fully Loaded Tours as per itinerary\n🚌 Private Coach\n🚩 English-Speaking Tour Guide\n🇵🇭 Filipino Tour Escort\n\n❎ EXCLUSIONS:\n🧳 Check-in Baggage\n💸 Tipping\n💸 PH Travel Tax\n📃 Travel Insurance\n📃 Australian Visa",
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
      'overview' : "Itinerary\nDay 01: Departure from Manila or Cebu, Arrival at Incheon Airport, Visit Dumulmeori Park, Visit Nami Island\nDay 02: Enjoy Han River Cruise, Visit Everland Theme Park with Safari World\nDay 03: Visit Korea Seaweed Museum with Hanbok Wearing and Gimbap Making Experience, Visit COEX Mall with Starfield Library, Visit N Seoul Tower with Love Padlock\nDay 04: Visit National Ginseng Gallery, Visit Cosmetic Shop, Visit Hongdae Picasso Street, Enjoy Painter's Hero Show\nDay 05: Visit Gyeongbokgung Royal Palace, Visit Sarangchae Blue House Museum, Visit Red Pine Gallery & Amethyst Factory, Free time at Myeongdong Street Duty Free Shop, Transfer to Airport\nDay 06: Arrival in Manila or Cebu\n\n✅ INCLUSIONS:\n✈️ Roundtrip Airfare w/ 7KG Hand Carry\n🏨 4 Nights Hotel Accommodation (Based on TWN/TRP)\n🚌 Transfers & Tours via Private Coach\n🥢 Full Board Meals (4B-4L-4D)\n🏃🏻 Fully Loaded Tours\n🚩 English-Speaking Tour Guide\n🇵🇭 Filipino Tour Escort\n💕 Heartfelt Korea Experience\n\n❎ EXCLUSIONS:\n🧳 Check-in Baggage\n(For AirAsia, Check-in Baggage is Compulsory - P1,200)\n💸 Tipping\n💸 PH Travel Tax\n📃 Travel Insurance\n📃 Korean Visa",
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

  const selectedPackage = packages.find(tour => tour.code === id);

  return (
    <div>
      <div className="flex col gap-32">
        <div className="tourdetails-header" style={{backgroundImage: `url(${selectedPackage ? selectedPackage.image_url : '/img/hero1.jpg'})`}}>
          <div className="text-area flex col cross-center pad16">
            <span className="heading-l">{selectedPackage ? selectedPackage.name : 'Package not found'}</span>
            <span className="body-l">{selectedPackage ? selectedPackage.description : 'Package not found'}</span>
          </div>
        </div>
        <div className="content flex col pad16">
          <span className="heading-m">Tour Overview</span>
          {selectedPackage && selectedPackage.overview.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TourPackageDetails