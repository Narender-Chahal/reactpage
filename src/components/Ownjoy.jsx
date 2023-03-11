import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import joyimg from "../assets/img/png/joy.png";
import leaves from "../assets/img/png/plant_leaves.png";
function Ownjoy() {
  return (
    <section className="mt-lg-5 py-5 bg_color position-relative">
      <div className="position-absolute img_top end-0 d-none d-xl-flex">
        <img src={leaves} alt="leaves" />
      </div>
      <Container className="">
        <Row className="align-items-center justify-content-between pb-5 mt-4">
          <Col lg={7}>
            <img className="w-100" src={joyimg} alt="joyimg" />
          </Col>
          <Col lg={5} className="ps-lg-4 pt-5 pt-lg-0">
            <h3 className="mb-0 ff_times fw-bold fs_4xl clr_green">
              Own the joy
            </h3>
            <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 max_430">
              Start enriching your life today, not "someday." We're here to help
              you experience the joy of second home ownership. With Mana, you
              own a spectacular second home for 1/8 of the cost, while avoiding
              the hassles of traditional ownership.
            </p>
            <div className="pt-4">
              <a
                className="ff_opensans fw-semibold fs-lg clr_green button1 "
                href=""
              >
                GET STARTED
              </a>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center pt-5 mt-5">
          <Col lg={5} className="pb-5 pb-lg-0">
            <h3 className="mb-0 ff_times fw-bold fs_4xl clr_green">
              Forget timeshares
            </h3>
            <p className="mb-0 ff_opensans fw-normal fs_lg clr_green pt-3 max_450 ">
              With Mana, you own a home, not just a block of time. You can book
              stays throughout the year, not annually. And resale? It's fast and
              streamlined, and you set the price.
            </p>
            <div className="pt-4">
              <a
                className="ff_opensans fw-semibold fs-lg clr_green button1 "
                href=""
              >
                GET STARTED
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <div className=" overflow_scroll_xsm">
              <table className="max_width_xsm ">
                <tr>
                  <th
                    className="th_bg ff_opensans fw-semibold fs_lg text-white text-center py-3 "
                    colSpan={2}
                  >
                    MANA HOME
                  </th>
                  <th className="th_bg2 ff_opensans fw-semibold fs_lg text-white text-center py-3">
                    RESORT TIMESHARE
                  </th>
                </tr>
                <tr className="td_bg">
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    PROPERTY TYPE
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Single-family residence
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Hotel/Condo
                  </td>
                </tr>
                <tr className="td_bg2">
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    TRUE OWNERSHIP
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Yes, real property
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    No, right-to-use time
                  </td>
                </tr>
                <tr className="td_bg">
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    USAGE
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Ongoing access
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Fixed week(s)
                  </td>
                </tr>
                <tr className="td_bg2">
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    RESALE APPROACH
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Market pricing; sell on your terms
                  </td>
                  <td className="ff_opensans fw-normal fs_lg clr_green">
                    Set pricing; sell with resort
                  </td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Ownjoy;
