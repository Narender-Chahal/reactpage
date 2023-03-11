import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ocean from "../assets/img/png/ocean.png";
function Featured() {
  return (
    <section className="position-relative pb-5">
      <Container>
        <div className="text-center">
          <h2 className="ff_times fw-bold fs_4xl clr_green mb-0 pt-5 mt-3 ">
            Featured homes
          </h2>
          <p className="ff_opensans mb-0 pt-2 fw-normal fs_lg">
            Browse our curated selection of wow-worthy listings – homes in the
            most desirable locations.
          </p>
        </div>
        <Row className="align-items-center d-flex pb-5">
          <Col lg={7}>
            <img
              className=" position-lg-absolute w_100 mt-5 start-0 top_30 w_50  "
              src={ocean}
              alt="ocean"
            />
          </Col>
          <Col lg={5} className="pt-5 pt-lg-0 pb-lg-5">
            <div className="transform_50">
              <p className="mb-0 ff_opensans fw-normal fs_lg clr_green  ">
                CORONA DEL MAR, CA
              </p>
              <h3 className="ff_times fw-bold fs_3xl mb-0 clr_green pt-3">
                Ocean Boulevard
              </h3>
              <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3">
                $ 1,263,000 . 1/8 OWNERSHIP
              </p>
              <div className="d-flex">
                <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 position-relative line1">
                  4 Beds
                </p>
                <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 ps-3 position-relative line1">
                  4.5 Baths
                </p>
                <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 ps-3">
                  3,143 sq ft
                </p>
              </div>
              <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 ">
                Phasellus condimentum purus nec lacus finibus egestas. Donec a
                ipsum massa. Pellentesque convallis id erat ut tempor. Integer
                interdum purus orci, non luctus velit pulvinar quis
              </p>
              <div className="pt-4">
                <a
                  className="ff_opensans fw-semibold fs-lg clr_green button1 "
                  href="#"
                >
                  DETAILS
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Featured;
