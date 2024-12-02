import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero1 from "../Components/Home/Hero1";
import Hero1main from "../Components/Home/Hero1main";
import Hero1form from "../Components/Home/Hero1form";
import Discoverfairmont from "../Components/Home/Discoverfairmont";
import Location from "../Components/Location/Location";
import Locationhero from "../Components/Location/Locationhero";
import Locationform from "../Components/Location/Locationform";
import Locationapartments from "../Components/Location/Locationapartments";
import Locationinfo from "../Components/Location/Locationinfo";
import Payment from "../Components/Paymentplan/Payment";
import Investment from "../Components/Paymentplan/Investment";
import Hotelstyle from "../Components/Amenities/Hotelstyle";
import Sol from "../Components/Amenities/Sol";
import Faqs from "../Components/Amenities/Faqs";
import Footer from "../Components/Common/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero1 />
      </div>
      <Hero1main />
      <Hero1form />
      <Discoverfairmont />

      {/* Location */}
      <Location />
      <Locationhero />
      <Locationform />
      <Locationapartments />
      <Locationinfo />
      {/* location end */}


{/* paymentplan start */}
<Payment/>
<Investment/>
{/* paymentplan end */}
{/* Amenities start */}
<Hotelstyle/>
<Sol/>
<Faqs/>
{/* Amenities end */}

<Footer/>
    </div>
  );
}

export default Home;
