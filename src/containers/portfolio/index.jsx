import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import { useState } from "react";
import food from "../../images/food-delivery.png"
import notes from "../../images/notes.png"
import blog from "../../images/blog.jpg"
import todo from "../../images/todo.png"
import shopping from "../../images/shopping.jpg"


const portfolioData = [
  {
    id: 1,
    name: "Food Delivery",
    image: food,
    link: "https://mern-food-delivery.onrender.com/",
  },
  {
    id: 2,
    name: "Notes App",
    link: "",
    image: notes,
  },
  {
    id: 3,
    name: "Blog App",
    image: blog,
    link: "",
  },
  {
    id: 4,
    name: "Todo App",
    image: todo,
    link: "",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: shopping,
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
