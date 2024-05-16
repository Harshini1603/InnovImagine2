import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return ( 
    <div style={{backgroundImage: `url("https://www.att.org.uk/sites/default/files/styles/responsive_4_3_600w/public/2023-01/shutterstock_192609851_about_us.jpg?itok=_MjoFblS")`}}>
        <Navbar />
        <HeroImg2 heading="ABOUT." text=" I am friendly Front-End Developer"/>
        <AboutContent />
        <Footer />
    </div>
  );
};

export default About;
