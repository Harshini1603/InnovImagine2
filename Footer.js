import "./FooterStyles.css";
import React from "react";
import { FaHome ,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={90} style={{color:"#fff", marginRight:"2rem"}} /> 
                    <div>
                        <p>Malla Reddy University.</p>
                        <p>India.</p> 
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={50} style={{color:"#fff", marginRight:"2rem"}} /> 
                        8317555250</h4>
                    </div>
                    <p> </p>

                    <div className="email">
                        <h4><FaMailBulk size={30} style={{color:"#fff", marginRight:"2rem"}} /> 
                        harshiniallenkiguptha16@gmail.com</h4>
                    </div>
                </div>
            </div>

            <div className="right"><h4>About the company</h4>
                <p>This is me Harshini ceo and founder.I Enjoy discussing new projects and design challenges</p>
                <div className="social">
                    <FaFacebook
                    size={30}
                     style={{color:"#fff", marginRight:"1rem"}} 
                    /> 

                    <FaTwitter
                    size={30}
                     style={{color:"#fff", marginRight:"1rem"}} 
                    /> 
                  
                    <FaLinkedin
                    size={30}
                     style={{color:"#fff", marginRight:"1rem"}} 
                    /> 

                </div>
            </div>        
        </div>  
    </div>
  )
};

export default Footer;
