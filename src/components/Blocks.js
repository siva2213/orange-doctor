import React from "react";
import { GrTrophy } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";
import "./Blocks.css";

const RowWithBlocks = () => {
  const isMobile = window.innerWidth <= 767;

  const Icon1 = () => (
    <div className="trophy1">
      <IoMdTrophy />
    </div>
  );
  const Icon2 = () => (
    <div className="trophy2">
      <IoMdTrophy />
    </div>
  );
  const Icon3 = () => (
    <div className="trophy3">
      <IoMdTrophy />
    </div>
  );
  const Icon4 = () => (
    <div className="trophy4">
      <IoMdTrophy />
    </div>
  );

  const blocks = [
    {
      bgColor:  "White",
      textColor: "#2B275A",
      icon: <Icon1 />,
      title: "Easy Quick Bookings",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
      bgColor:  "#2B275A",
      textColor: "white",
      icon: <Icon2 />,
      title: "Top Rated Doctors",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
      bgColor:  "White",
      textColor: "#2B275A",
      icon: <Icon3 />,
      title: "Secured Payments",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
      bgColor:  "#FF902A",
      textColor: "white",
      icon: <Icon4 />,
      title: "Insurance Policy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
  ];

  return (
    <div className="row">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="block"
          style={{ backgroundColor: block.bgColor, color: block.textColor }}
        >
          {block.icon}
          <div className="block-text-cnt">
            <h2 className="block-ttl1" >
              {block.title}
            </h2>
            <p className="block-cnt" >
              {block.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowWithBlocks;
