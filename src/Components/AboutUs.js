import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageOne from '../images/bar.JPG';
import imageTwo from '../images/bar2.JPG';
import imageThree from '../images/bar3.JPG';

function AboutUs() {
  return (
    <section id="about" className="AboutUs-Component-Section">
      <h2>About Us</h2>
      <p>
        We want to provide a bar for all those who wish to tell a story, or sit
        and absorb.
      </p>
      <Carousel className="carousel-container">
        <div>
          <img src={imageOne} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={imageTwo} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={imageThree} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
}

export default AboutUs;
