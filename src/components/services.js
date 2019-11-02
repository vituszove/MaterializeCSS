import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class Services extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <section className="container section" id="sevices">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="teal-text text-darken-4">What I do...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col s12 l6 offset-l2">
            <ul
              className="tabs"
              ref={Tabs => {
                this.Tabs = Tabs;
              }}
            >
              <li className="tab col s6">
                <a href="#graphic" className="teal-text text-darken-4">
                  Graphic Design
                </a>
              </li>
              <li className="tab col s6">
                <a href="#website" className="teal-text text-darken-4">
                  Website Design
                </a>
              </li>
            </ul>
            <div className="col s12" id="graphic">
              <p className="flow-text teal-text text-darken-4">
                Graphic Design
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col s12" id="website">
              <p className="flow-text indigo-text text-darken-4">Web Design</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
