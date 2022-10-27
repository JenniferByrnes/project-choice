import React from "react";
import mainLogo from "../../assets/mainLogo/main-logo.png";
import "./about.css";

function About() {
    return (
      <section className="m-5">
        
        <div className="about-section">
          <div>
            <img
              src={mainLogo}
              className="my-2 pic float-left"
              style={{ width: "50%" }}
              alt="cover"
            />
          </div>
          <h1 className="text-7xl">About Project Choice</h1>
          <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
