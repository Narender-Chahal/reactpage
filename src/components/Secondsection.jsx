import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import lockheart from "../assets/img/png/lock_heart.png";
import own from "../assets/img/png/own.png";
import enjoy from "../assets/img/png/enjoy.png";
function Secondsection() {
  return (
    <section className="bg_color" id="down">
      <Container>
        <div className=" pt-4 text-center">
          <h2 className="mb-0 ff_times fw-bold fs_4xl  pt-5 clr_green ">
            Find your second home with Mana
          </h2>
          <p className="mb-0 ff_opensans fw-normal fs-lg pt-2 clr_green">
            We make it simple
          </p>
        </div>
        <Row className="pt-5">
          {" "}
          <Col lg={4} md={6} className="pt-5">
            <div className="d-flex ">
              <div>
                <img src={lockheart} alt="lockheart" />
              </div>
              <div className="ps-3">
                <h3 className="ff_opensans fw-bold fs_xxl mb-0 clr_green">
                  Shop
                </h3>
                <p className="ff_opensans fw-normal fs_lg mb-0 mw_300 pt-3 clr_green">
                  Explore our collection of stunning single-family homes in top
                  second home destinations. We'll help you find the perfect fit,
                  and you decide how many shares you'd like to own.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="pt-5">
            <div className="d-flex ">
              <div>
                <img src={own} alt="own" />
              </div>
              <div className="ps-3">
                <h3 className="ff_opensans fw-bold fs_xxl mb-0 clr_green">
                  Own
                </h3>
                <p className="ff_opensans fw-normal fs_lg mb-0 mw_300 pt-3 clr_green">
                  We create a property LLC for each home, find and vet
                  co-owners, and handle all the sales details. At closing, the
                  co-owners enjoy 100% ownership of the home – Pacaso does not
                  retain any shares
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="pt-5">
            <div className="d-flex ">
              <div>
                <img src={enjoy} alt="enjoy" />
              </div>
              <div className="ps-3">
                <h3 className="ff_opensans fw-bold fs_xxl mb-0 clr_green">
                  Enjoy
                </h3>
                <p className="ff_opensans fw-normal fs_lg mb-0 mw_320 pt-3 clr_green">
                  We take care of furnishings, repairs, utilities and property
                  management – you just show up and relax. Scheduling is easy
                  and equitable with our app and SmartStay™ technology.
                </p>
              </div>
            </div>
          </Col>
          <div className="text-center py-5 my-4">
            <a
              className="ff_opensans fw-semibold fs-lg clr_green button1"
              href=""
            >
              GET STARTED
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Secondsection;
