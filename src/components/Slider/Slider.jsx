import React, { useState } from "react";
import "./style.css"; // Ensure this path is correct based on your project structure

const images = [
  {
    src: "/kash.jpg",
    title: "Kashmir",
    description:
      "A picturesque region known for its stunning landscapes, lush valleys, and vibrant culture.",
    loc: "Jammu and Kashmir, India",
  },
  {
    src: "/kheer.jpg",
    title: "Kheerganga",
    description:
      "A scenic trekking destination famous for its hot springs and breathtaking views of the Himalayas.",
    loc: "Himachal Pradesh, India",
  },
  {
    src: "/Taj.jpg",
    title: "Taj Mahal",
    description:
      "An iconic white marble mausoleum, symbolizing love, and one of the Seven Wonders of the World.",
    loc: "Uttar Pradesh, India",
  },
  {
    src: "/IndiaGate.jpg",
    title: "India Gate",
    description:
      "A monumental archway in New Delhi, honoring the soldiers who died in World War I.",
    loc: "Delhi, India",
  },
  {
    src: "/delhi2.jpg",
    title: "Red Fort",
    description:
      "A UNESCO World Heritage Site, this historic fort represents Mughal architecture in Delhi.",
    loc: "Delhi, India",
  },
  {
    src: "/Prem.jpg",
    title: "Prem Mandir",
    description:
      "A beautiful temple in Vrindavan, known for its intricate carvings and vibrant devotional atmosphere.",
    loc: "Uttar Pradesh, India",
  },
  {
    src: "/fort.jpg",
    title: "Jaipur Fort",
    description:
      "A majestic fort in the Pink City, showcasing Rajasthan's royal heritage and architectural grandeur.",
    loc: "Rajasthan, India",
  },
  {
    src: "/lotus.jpg",
    title: "Lotus Temple",
    description:
      "A Bahá'í House of Worship in Delhi, celebrated for its flower-like design and serene ambiance.",
    loc: "Delhi, India",
  },
  {
    src: "/vara.webp",
    title: "Varanasi",
    description:
      "One of the oldest cities in the world, renowned for its spiritual significance and ghats along the Ganges River.",
    loc: "Uttar Pradesh, India",
  },
];

const Slider = () => {
  const [itemActive, setItemActive] = useState(0);
  const countItem = images.length;

  const showSlider = (index) => {
    setItemActive(index);
  };

  const handlePrevClick = () => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
  };

  const handleNextClick = () => {
    setItemActive((prev) => (prev + 1) % countItem);
  };

  return (
    <div className="slider">
      {/* Slider */}
      <div className="list">
        {images.map((image, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
          >
            <img src={image.src} alt={image.title} />
            <div className="content">
              <p>{image.loc}</p>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button Arrows */}
      <div className="arrows">
        <button onClick={handlePrevClick} aria-label="Previous slide">
          &#9664;
        </button>
        <button onClick={handleNextClick} aria-label="Next slide">
          &#9654;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
            onClick={() => showSlider(index)}
          >
            <img src={image.src} alt={image.title} />
            <div className="content" style={{ color: "white" }}>
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
