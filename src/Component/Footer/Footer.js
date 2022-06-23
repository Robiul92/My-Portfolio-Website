import React from 'react';
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import './Footer.css';

const Footer = () => {
    return (
        <div>
              <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><strong>rabiulawal312@gmail.com</strong></span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Footer;