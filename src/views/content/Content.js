import React from "react";
import "./Content.css";
import smartphone3 from "../../assets/smartphone3.png";

import RowWithBlocks from "../../components/Blocks";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";
import { RiAwardFill } from "react-icons/ri";
import { LuFlower2 } from "react-icons/lu";
import { IoMdTrophy } from "react-icons/io";
import ReactStars from "react-rating-stars-component";

const content = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="cnt-main">
      <div className="cnt-left-main">
        <div className="cnt-left">
          <h6 className="cnt-cmgsoon">COMING SOON</h6>
          <h1 className="cnt-txt1">
            Get Notified
            <span>
              When We{""}
              <PiStarFourFill className="cnt-star" />
              {""}
            </span>
            <span className="cnt-txt2"> Launch</span>
          </h1>
          <div className="cnt-scroll">
            <div className="scroll-cnt"></div>
            <p>Scroll To Exolore</p>
          </div>
        </div>

        <div className="cnt-right">
          {/* <img src={smartphone} alt="consultant" className="cnt-img" /> */}

          <img src={smartphone3} alt="consultant" className="cnt-img" />
          <div className="cnt-right2">
            <div className="cnt-labelicon">
              <div className="cnt-right-iclbl1">
                <label className="cnt-right-label">60 Clinics</label>
                <RiAwardFill className="cnt-right-icon" />
              </div>
              <div className="cnt-right-iclbl2">
                <label className="cnt-right-label">1 Lakh Patients</label>
                <IoMdTrophy className="cnt-right-icon" />
              </div>
              <div className="cnt-right-iclbl3">
                <label className="cnt-right-label">50 Cities</label>
                <LuFlower2 className="cnt-right-icon" />
              </div>
            </div>
            <p className="cnt-abttxt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim.
            </p>
            <div className="cnt-ratingcnt">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffff"
                value={5}
                color="#fff"
              />
              <p className="cnt-ratingtxt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan.
              </p>
              <div className="cnt-ratingprofile">
                <p className="cnt-spec">
                  Dr. Vikram Das
                  <span className="cnt-spec1">Dental Specialist</span>
                </p>
                <IoPersonCircleOutline className="cnt-spec-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RowWithBlocks />
    </div>
  );
};

export default content;
