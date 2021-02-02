import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class ContactForm extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
     M.Datepicker.init(elems, {
        autoClose: true,
        disableWeekends: true
      });
    });
  }
  render() {
    return (
      <section className="section container scrollspy" id="contact">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea" />
                <label htmlFor="message">Your Message</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">date_range</i>
                <input type="text" id="date" className="datepicker" />
                <label htmlFor="date">
                  Choose the date which you are free...
                </label>
              </div>
              <div className="input-field">
                <p>Service required...</p>
                <p>
                  <label>
                    <input type="checkbox" /> <span>Web Design</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn waves-effect">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
