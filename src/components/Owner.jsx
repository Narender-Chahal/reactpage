import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import jhon1 from "../assets/img/png/jhon1.png";
import jhon2 from "../assets/img/png/jhon2.png";
import jhon3 from "../assets/img/png/jhon3.png";
import slide from "../assets/img/png/slide.png";
import slide1 from "../assets/img/png/slide1.png";
function Owner() {
  return (
    <section className="mt-5 pt-4">
      <Container>
        <div className="text-center">
          <h2 className="ff_times fw-bold fs_4xl clr_green mb-0">
            Owner perspectives
          </h2>
        </div>
        <Row className="position-relative justify-content-center mb-5 pb-5">
          <div className="position-absolute top-50 img_start d-none d-lg-flex">
            <img src={slide} alt="slide" />
          </div>
          <div className="d-none d-lg-flex">
            <img
              className="position-absolute top-50 img_right"
              src={slide1}
              alt="slide1"
            />
          </div>
          <Col lg={4} md={6} className="pt-5">
            <div className="border">
              <div className="d-flex align-items-center">
                <img src={jhon1} alt="jhon1" />
                <div className="ps-3">
                  <h3 className="ff_opwnsans fw-semibold fs_lg mb-0 clr_green">
                    John Doe
                  </h3>
                  <p className="ff_opensans fw-normal fs_md clr_green mb-0 pt-1">
                    Mauris pretium,USA
                  </p>
                </div>
              </div>
              <p className="ff_opensans fw-normal fs_lg pt-4">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="pt-5">
            <div className="border">
              <div className="d-flex align-items-center">
                <img src={jhon2} alt="jhon2" />
                <div className="ps-3">
                  <h3 className="ff_opwnsans fw-semibold fs_lg mb-0 clr_green">
                    John Doe
                  </h3>
                  <p className="ff_opensans fw-normal fs_md clr_green mb-0 pt-1">
                    Mauris pretium,USA
                  </p>
                </div>
              </div>
              <p className="ff_opensans fw-normal fs_lg pt-4">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="pt-5">
            <div className="border">
              <div className="d-flex align-items-center">
                <img src={jhon3} alt="jhon3" />
                <div className="ps-3">
                  <h3 className="ff_opwnsans fw-semibold fs_lg mb-0 clr_green">
                    John Doe
                  </h3>
                  <p className="ff_opensans fw-normal fs_md clr_green mb-0 pt-1">
                    Mauris pretium,USA
                  </p>
                </div>
              </div>
              <p className="ff_opensans fw-normal fs_lg pt-4">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Owner;
