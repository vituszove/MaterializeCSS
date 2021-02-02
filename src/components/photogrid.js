import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import photo1 from "./stylesheets/photo1.png";

class PhotoGrid extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, {
        inDuration: 250,
        outDuration: 200
      });
    });
  }
  render() {
    return (
      <section
        id="portfolio"
        style={{ paddingTop: "4vw", paddingBottom: "4vw" }}
        className="container section scrollspy"
      >
        <div className="row">
          <div className="col s12 l4">
            <img
              src={photo1}
              alt="portfolio"
              className="responsive-img materialboxed"
            />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="teal-text text-darken-1 ">Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 offset-l1">
            <img
              src={photo1}
              alt="portfolio"
              className="responsive-img materialboxed"
            />
          </div>
          <div className="col s12 l6 pull-l5 offset-l1">
            <h2 className="teal-text text-darken-1 ">Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img
              src={photo1}
              alt="portfolio"
              className="responsive-img materialboxed"
            />
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="teal-text text-darken-1 ">Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoGrid;
