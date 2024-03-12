import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Food Delivery",
    image: ImageOne,
    link: "https://mern-food-delivery.onrender.com/",
  },
  {
    id: 2,
    name: "Notes App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 4,
    name: "Todo App",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];


const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  
  function handleHover(index) {
    setHoveredValue(index);
  }
  
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards"> 
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
