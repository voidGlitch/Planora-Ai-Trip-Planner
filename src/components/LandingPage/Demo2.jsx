import React, { useEffect } from "react";
import "./style.css"; // Ensure you create this CSS file with the provided styles
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CardList from "./CardList";

function Demo2() {
  useEffect(() => {
    const listCards = document.querySelectorAll(".animation-show");

    const handleScroll = () => {
      // Handle card animations
      listCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center mx-57 gap-9"
      style={{ background: "rgb(33, 0, 2)" }}
    >
      <h1 className="font-extrabold text-[70px] text-center mt-16">
        <span className="text-[#f56551]">Unleash the Traveler in You:</span>{" "}
        <br></br>
        <span
          className="text-lg font-semibold text-[40px] text-[#ffffff]"
          style={{ fontFamily: "Allure" }}
        >
          {" "}
          Dream It&nbsp;&nbsp;&nbsp;Design It&nbsp;&nbsp;&nbsp;Discover It
        </span>
      </h1>

      <Link to={"/create-trip"}>
        <Button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "30px",
            fontSize: "15px",
            height: "70%",
            widht: "70%",
            padding: "10px 40px",
            cursor: "pointer",
            transition: "transform 0.2s ease", // Smooth transition
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"; // Scale up on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Scale back to original size
          }}
        >
          <img src="/walk.webp" width={"50px"} height={"50px"} />
          Get Started, It's Free.
        </Button>
      </Link>
      {/* <img src="/delhi.jpg" className="-mt-30 width-[50px] height-[50px]" />
      <img src="/delhi2.jpg" className="-mt-30 width-[50px] height-[50px]" />
      <img src="/9.jpg" className="-mt-30 width-[50px] height-[50px]" />
       */}

      <CardList />
    </div>
  );
}

export default Demo2;
