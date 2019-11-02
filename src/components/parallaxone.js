import React, { Component } from "react";
import parallaxone from "./stylesheets/parallaxone.jpg";
import M from "materialize-css/dist/js/materialize.min.js";

class ParallaxOne extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, {
        responsiveThreshold: 0
      });
    });
  }
  render() {
    return (
      <div className="parallax-container">
        <div className="parallax">
          <img src={parallaxone} alt="" className="responsive-img" />
        </div>
      </div>
    );
  }
}

export default ParallaxOne;
