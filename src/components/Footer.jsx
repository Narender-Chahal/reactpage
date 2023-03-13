import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/png/logo_img.png";
import gogle from "../assets/img/png/google.png";
import app_img from "../assets/img/png/app.png";
import insta from "../assets/img/png/insta.png";
import p_img from "../assets/img/png/p.png";
import in_img from "../assets/img/png/in.png";
import twiter from "../assets/img/png/twiter.png";
import youtub from "../assets/img/png/youtub.png";
function Footer() {
  return (
    <footer>
      <section className="footer_bg pt-5">
        <Container>
          <Row>
            <Col lg={6}>
              <a href="#">
                <img src={logo} alt="logo" />{" "}
              </a>

              <p className="ff_opensans fw-semibold fs_sm text-white mb-0 pt-4">
                SIGN UP FOR FULL ACCESS
              </p>
              <p className="ff_opensans fw-normal fs_sm text-white mb-0 pt-3">
                Unlock exclusive features & receive updates
              </p>
              <div className="box mw_340 mt-5 d-flex align-items-center justify-content-end">
                <input
                  className="ff_opensans fw-normal fs_sm outline_none me-3 box"
                  type="text"
                  placeholder="Email"
                />
                <button className="ff_opensans fw-semibold fs_sm button_unblock m_1">
                  UNLOCK
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <Row>
                <Col sm={4} xs={6} className="pt-5 pt-lg-0 ">
                  <h2 className="ff_opensans fw-semibold fs_sm text-white mb-0">
                    OFFERINGS
                  </h2>
                  <ul>
                    <li className="pt_20">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Learn
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Listings
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Scheduling
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Financing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Closing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Selling
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={4} xs={6} className="pt-5 pt-lg-0 ">
                  <h2 className="ff_opensans fw-semibold fs_sm text-white mb-0">
                    OFFERINGS
                  </h2>
                  <ul>
                    <li className="pt_20">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Learn
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Listings
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Scheduling
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Financing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Closing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Selling
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={4} xs={6} className="pt-5 pt-lg-0 ">
                  <h2 className="ff_opensans fw-semibold fs_sm text-white mb-0">
                    OFFERINGS
                  </h2>
                  <ul>
                    <li className="pt_20">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Learn
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Listings
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Scheduling
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Financing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Closing
                      </a>
                    </li>
                    <li className="pt_13">
                      <a
                        className="ff_opensans fw-normal fs_sm text-white text_hover"
                        href="#"
                      >
                        Selling
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="hr mt-5 "></div>
          <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-4">
            <div className="d-flex flex-column flex-sm-row">
              <div>
                <a href="#">
                  {" "}
                  <img src={gogle} alt="gogle" />
                </a>
              </div>
              <div className="ps-sm-3 pt-3 pt-sm-0">
                <a href="">
                  <img src={app_img} alt="app_img" />
                </a>
              </div>
            </div>
            <div className=" d-flex mt-5 mt-lg-0 d-none d-lg-flex">
              <div className="pe-md-5 pe-3 px-lg-5 ps-sm-5  mx-xxl-5 ms-xl-4">
                <a href="">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="px-md-5 px-4 ps-sm-5 mx-xxl-5 ms-xl-4">
                <a href="">
                  {" "}
                  <img src={p_img} alt="insta" />
                </a>{" "}
              </div>
              <div className="px-md-5 mx-xxl-5 ps-sm-5 ms-xl-4">
                <a href="">
                  {" "}
                  <img src={in_img} alt="insta" />
                </a>{" "}
              </div>

              <div className="px-md-5 px-3 ps-sm-5 mx-xxl-2 ms-xl-4">
                <a href="">
                  {" "}
                  <img src={twiter} alt="insta" />
                </a>{" "}
              </div>
              <div className="px-md-4 px-3 ps-sm-5 ">
                <a href="">
                  <img src={youtub} alt="insta" />
                </a>
              </div>
            </div>
            <Row className="d-lg-none pt-5">
              <Col sm={2} lg={3} xs={2}>
                {" "}
                <a href="#">
                  <img className="" src={insta} alt="insta" />
                </a>
              </Col>
              <Col sm={2} lg={3} xs={2}>
                {" "}
                <a href="#">
                  {" "}
                  <img className="" src={p_img} alt="p_img" />
                </a>
              </Col>
              <Col sm={2} lg={3} xs={2}>
                {" "}
                <a href="">
                  <img className="" src={in_img} alt="in_img" />
                </a>
              </Col>
              <Col sm={2} lg={3} xs={2}>
                {" "}
                <a href="#">
                  {" "}
                  <img className="" src={twiter} alt="twiter" />
                </a>{" "}
              </Col>
              <Col sm={2} lg={3} xs={2}>
                <a href="#">
                  <img className="" src={youtub} alt="youtub" />
                </a>
              </Col>
            </Row>
          </div>{" "}
          <div className="hr mt-5 "></div>
          <div className="text-center">
            <p className="ff_opensans fw-normal fs_xsm mb-0 text-white py-4">
              @copyrightmana2021
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
