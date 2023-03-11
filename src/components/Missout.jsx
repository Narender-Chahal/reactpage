import React from "react";
import { Container } from "react-bootstrap";
import leaf1 from "../assets/img/png/leaf1.png";
import leaf2 from "../assets/img/png/leaf2.png";
function Missout() {
  return (
    <section className="bg_color pt-5 pb-5  position-relative">
      <div>
        <img className="position_absolute  d-none d-lg-flex" src={leaf1} alt="leaf1" />
      </div>
      <div className="position_absolute end_0 d-none d-lg-flex">
        {" "}
        <img src={leaf2} alt="leaf2" />
      </div>
      <Container>
        <div className="text-center">
          <h2 className="ff_times fw-bold fs_4xl mb-0 clr_green  pt-3">
            Don't miss out
          </h2>
          <div className="d-flex justify-content-center pt-2">
            <p className="ff_opensans fw-normal fs_lg mb-0 clr_green mw_500">
              The best homes sell fast. See the latest listings, inspiring
              second homes and buying tips.
            </p>
          </div>
        </div>
        <div className="pt-3 d-flex justify-content-center ">
          <div className="border_bottom mw_510">
            <input
              className="ff_opensans fw-semibold fs_lg clr_green w-100 mt-5 outline_none  "
              type="text"
              placeholder="ENTER  EMAIL"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <p className="ff_opensans fw-normal fs_lg mb-0 pt-5 mw_510">
            Select one of the following:
          </p>
        </div>
        <div className="d-flex   align-items-sm-center justify-content-center ">
          <div className="mw_510 flex-column flex-sm-row  d-flex pt-3">
            <div className="">
              <input id="click" type="radio" name="hello" />
              <label
                className="ff_opensans fw-normal fs_lg ps-2"
                htmlFor="click"
              >
                I am a buyer
              </label>
            </div>
            <div className="ps-sm-4 ">
              <input id="click1" type="radio" name="hello" />
              <label
                className="ff_opensans fw-normal fs_lg ps-2"
                htmlFor="click1"
              >
                I am a seller
              </label>
            </div>
            <div className="ps-sm-4 ">
              <input id="click2" type="radio" name="hello" />
              <label
                className="ff_opensans fw-normal fs_lg ps-2"
                htmlFor="click2"
              >
                I am a seller{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          <button className="button ff_opensans fw-bold fs-xl mt-5">
            SUBSCRIBE
          </button>
        </div>
        <div className="text-center d-flex justify-content-center pt-4">
          <p className="ff_opensans fw-normal fs_xsm mw_510 mb-0">
            I give mana permission to contact me & agree to the{" "}
            <span className="ff_opensans fw-semibold fs_xsm">terms</span>.This
            site is protected by reCAPTCHA and the Google{" "}
            <span className="fw-semibold">
              privacy policy <span className="fw-normal">&</span> terms of
              service.
            </span>
          </p>
        </div>
        <p className="ff_opensans fw-normal fs_lg text-center pt-4">
          Want to chat?{" "}
          <span>
            <a
              className="ff_opensans fw-semibold fs-lg clr_green button1 "
              href=""
            >
              Contact us.{" "}
            </a>
          </span>
        </p>
      </Container>
    </section>
  );
}

export default Missout;
