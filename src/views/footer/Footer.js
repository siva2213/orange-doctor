import React from "react";
import "./Footer.css";
import footerimg from "../../assets/footerimg.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import ftr_phones from "../../assets/ftr_phones.png";
import Applestore from "../../assets/Applestore.png";
import play_store from "../../assets/play_store.png";
const Footer = () => {
  return (
    <div className="ftr-main">
      <div className="ftr-left-mid">
        <div className="ftr-left">
          <div className="ftr-abt-ttl">
            <p className="ftr-left-ttl1">About</p>
            <h4 className="ftr-left-ttl2">
              Hfavire <span className="sub-name">Iauiv Rlua</span>
            </h4>
          </div>
          <img src={footerimg} alt="image" className="ftr-img1" />
        </div>
        <div className="ftr-mdl">
          <p className="ftr-mdl-txt1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
          <div>
            <p className="ftr-avbl">Available Soon On</p>
            <div className="download-store">
              <img src={Applestore} alt="apple" className="apple" />
              <img src={play_store} alt="playstore" className="playstore" />
            </div>
          </div>
          <div className="ftr-links">
            <div className="ft-detail-link">
              <div>About Us </div>
              <div>Privacy Policy</div>
              <div>Terms of Conditions </div>
              <div>Help</div>
            </div>
            <hr className="hr-line" />
            <div className="ft-scl">
              <FaInstagram className="insta-logo" />
              <FiTwitter className="twtr-logo" />
              <FaFacebookF className="fcbk-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="ftr-right">
        <img src={ftr_phones} className="ftr-img2" />
      </div>
    </div>
  );
};

export default Footer;
