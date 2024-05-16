import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div style={{backgroundImage: `url("https://www.ameeriindustries.com/wp-content/uploads/2022/04/contact-us.jpg")`}}>
      <Navbar />
      <HeroImg2 headings="CONTACT." text="Let's have a chat"/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
