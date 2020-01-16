import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Contact extends Component {
  render() {
    return (
      <div className="container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly.
          </p>

          <div className="row">
            <div className="col-md-11 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="http://13.126.28.110:8090/contact"
                method="Post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input required
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input required
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input required
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                      required
                        type="text"
                        placeholder="Your Massage"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                  <Link to="/">
                    <a className="btn btn-secondary">Cancel</a>
                  </Link>
                </div>
                <div className="status"></div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
