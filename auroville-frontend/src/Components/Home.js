import {
  MDBContainer,
  MDBCol,
  MDBCardTitle,
  MDBCardBody,
  MDBCard
} from "mdbreact";
import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        {this.props.category.map((category_name, index) => {
          return (
            <MDBCol className="category-card" id={category_name}>
              <MDBCardBody>
                <MDBCardTitle className="card-titlen text-center mt-4 h5">
                  <strong>{category_name}</strong>
                </MDBCardTitle>
                {this.props.maindata.map((item, index) => {
                  if (item.category === category_name) {
                    return (
                      <div>
                        <MDBCard className="card">
                          <center>
                            <div className="box">
                              <div>
                                <img
                                  src={item.thumbnail_image}
                                  className="img-fluid"
                                  className="box-img"
                                />
                              </div>
                              <div className="details">
                                <MDBCardTitle className="card-titlen h6">
                                  <strong>{item.title}</strong>
                                </MDBCardTitle>
                                <div className="detail-main">
                                  <div className="name">
                                    <span>Location</span>
                                  </div>
                                  <div className="divider">
                                    <span>:</span>
                                  </div>
                                  <div>
                                    <span>{item.location}</span>
                                  </div>
                                </div>
                                <div className="detail-main">
                                  <div className="name">
                                    <span>Time</span>
                                  </div>
                                  <div className="divider">
                                    <span>:</span>
                                  </div>
                                  <div>
                                    <span>{item.time}</span>
                                  </div>
                                </div>
                                <div className="detail-main">
                                  <div className="name">
                                    <span>Date</span>
                                  </div>
                                  <div className="divider">
                                    <span>:</span>
                                  </div>
                                  <div>
                                    <span>{item.date}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </center>
                        </MDBCard>
                      </div>
                    );
                  }
                })}
              </MDBCardBody>
            </MDBCol>
          );
        })}
      </div>
    );
  }
}

export default Home;