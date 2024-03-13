import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import cv from "../../cv/resume.tushar.pdf";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Tushar
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button>
            <a href={cv} download className="home__cv">
              Download CV
            </a>{" "}
          </button>
        </div>
        <div className="home__social_link">
          <a
            href="https://www.linkedin.com/in/tushar-suryawanshi-820a391b9/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={35} className="social__link"/>
          </a>
          <a
            href="https://github.com/Tushar8237"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={35} className="social__link"/>
          </a>
          <a
            href="https://www.hackerrank.com/domains/algorithms"
            target="_blank"
            rel="noreferrer"
          >
            <FaHackerrank size={35} className="social__link"/>
          </a>
          <a
            href="https://leetcode.com/Tushar8237/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode size={35} className="social__link"/>
          </a>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
