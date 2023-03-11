import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img/png/img1.png";
import img2 from "../assets/img/png/img2.png";
import img3 from "../assets/img/png/img3.png";
import img4 from "../assets/img/png/img4.png";
import img5 from "../assets/img/png/img5.png";
import img6 from "../assets/img/png/img6.png";
function Asfeaturedin() {
  return (
    <section className="py-5 my-5">
      <Container>
        <div className="text-center">
          <h2 className="ff_times fw-bold fs_4xl mb-0 clr_green ">
            As featured in:
          </h2>
        </div>
        <Row className="pt-5 align-items-center  text-center">
          <Col lg={2} sm={6} md={4} className="pt-3">
            {" "}
            <img className="w_sm_100 " src={img1} alt="img1" />
          </Col>
          <Col lg={2} sm={6} md={4} className="pt-3">
            <img className="w_sm_100 " src={img2} alt="img2" />
          </Col>
          <Col lg={2} sm={6} md={4} className="pt-3">
            <img className="w_sm_100 " src={img3} alt="img3" />
          </Col>
          <Col lg={2} sm={6} md={4} className="pt-3">
            <img className="w_sm_100 " src={img4} alt="img4" />
          </Col>
          <Col lg={2} sm={6} md={4} className="pt-3">
            <img className="w_sm_100 " src={img5} alt="img5" />
          </Col>
          <Col lg={2} sm={6} md={4} className="pt-3">
            <img className="w_sm_100" src={img6} alt="img6" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Asfeaturedin;
