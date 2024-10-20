// LunDev.jsx
import React, { useEffect } from "react";
import "./style.css"; // Ensure you create this CSS file with the provided styles
import { Link } from "react-router-dom";
import { Button } from "rsuite";

const Demo = () => {
  useEffect(() => {
    const listBg = document.querySelectorAll(".bg");
    const listTab = document.querySelectorAll(".tab");
    const titleBanner = document.querySelector(".banner h1");

    const handleScroll = () => {
      let top = window.scrollY; // Use window.scrollY directly
      listBg.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
          bg.style.transform = `translateY(${(top * index) / 2}px)`;
        } else if (index === 0) {
          bg.style.transform = `translateY(${top / 3}px)`;
        }
      });
      titleBanner.style.transform = `translateY(${(top * 4) / 2}px)`;

      listTab.forEach((tab) => {
        const rect = tab.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="bg bg-1"></div>
        <div className="bg bg-2"></div>
        <div className="bg bg-3"></div>
        <h1>Planora!</h1>
        <p>Create Your Dream Itinerary with AI! </p>
        <div className="bg bg-4"></div>
        <div className="bg bg-5"></div>
        <div className="bg bg-6"></div>
        <div className="bg bg-7"></div>
        <div className="bg bg-8"></div>
        <div className="bg bg-9"></div>
      </div>
    </div>
  );
};

export default Demo;
