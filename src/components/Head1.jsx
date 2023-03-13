import React from "react";
import down from "../assets/img/png/dawn_arrow.png";
import video_icon from "../assets/img/png/click_video.png";
function Head1() {
  return (
    <section className="position-relative">
      <img
        className="position-absolute right_20"
        src={video_icon}
        alt="video_icon"
      />
      <div>
        <div className="d-flex flex-column justify-content-center align-items-center vh-80">
          <h1 className="ff_times fw-bold fs_5xl text-white text-center">
            The modern way to buy and own a second home
          </h1>
          <button className="button ff_opensans fw-bold fs-xl mt-5">
            VIEW LISTINGS
          </button>
        </div>
        <div className="d-flex justify-content-center pb-lg-4 pb-5 ">
          <a
            className="down_btn d-flex align-items-center justify-content-center mb-5 mb-lg-0"
            href="#down"
          >
            <img src={down} alt="down" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Head1;
