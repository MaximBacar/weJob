import React from "react";
import "./styles/profile_about.css";
import "./styles/sections.css";

function profile_about() {
  return (
    <div className="section">

      <div id="section_title">
        <h3>About</h3>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
            <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
          </svg>
        </button>
      </div>
      <div id="text">
        <p align="justify">
          Full-time Computer Engineering student at Concordia University in Montreal. 
          I mainly code in Java, Python, and C++. Basic notions of MySQL, HTML/CSS, Assembly, and VHDL. 
          I have been coding since the age of 11. Throughout the years, 
          I had the chance to be part of school programs dedicated to programming, from high school to university.
          <br />
        </p>
      </div>
    </div>
  );
}

export default profile_about;
