// import LottiePlayer from "lottie-react";
import React from "react";
// import reader from "../../asset/reader.json";
import Extrasection from "./Extrasection/Extrasection";
import OurExpertice from "./OurExpertice/OurExpertice";
import OurInstructor from "./OurInstructor/OurInstructor";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className=" d-flex justify-content-evenly align-items-center container gap-2 pt-3 pb-5">
        <div className="">
          <p className="fs-2 w-80 m-auto text-danger fw-bold">
            WELCOME TO RS IT INSTITUTE
          </p>
          <p className="fs-6 text-secondary fw-bold  shadow rounded mt-2 p-3">
            With experienced mentors and updated curriculum, Creative IT
            Institute is ready to advance your career. Choose your favorite
            course today from our more than 2 trendy courses.
          </p>
          <div className="text-start">
            <button className="btn btn-primary home-button text-start border-0 ">see courses</button>
          </div>
        </div>

        <div className="col-6 mt-5 w-80 w-50 m-auto">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/318243204_1367901537081113_6057195676073381225_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGChaRNK4t8GxRoA-uAWLTht-VL--8Ejoi35Uv77wSOiO5fzar6PG2-cw11p2cZPAdDFBJrLgqOwzC05N_0xzf4&_nc_ohc=hdR3yihCOjkAX9_Y-Ca&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDIkWjUtHYKcMnqpX3AtMgKHkUZ5ysIVTwoAJh90Sniug&oe=639BF88D"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/318243204_1367901537081113_6057195676073381225_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGChaRNK4t8GxRoA-uAWLTht-VL--8Ejoi35Uv77wSOiO5fzar6PG2-cw11p2cZPAdDFBJrLgqOwzC05N_0xzf4&_nc_ohc=hdR3yihCOjkAX9_Y-Ca&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDIkWjUtHYKcMnqpX3AtMgKHkUZ5ysIVTwoAJh90Sniug&oe=639BF88D"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/318243204_1367901537081113_6057195676073381225_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGChaRNK4t8GxRoA-uAWLTht-VL--8Ejoi35Uv77wSOiO5fzar6PG2-cw11p2cZPAdDFBJrLgqOwzC05N_0xzf4&_nc_ohc=hdR3yihCOjkAX9_Y-Ca&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDIkWjUtHYKcMnqpX3AtMgKHkUZ5ysIVTwoAJh90Sniug&oe=639BF88D"
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <WhatWeDo></WhatWeDo>
      <OurExpertice></OurExpertice>
      <OurInstructor></OurInstructor>
      <Extrasection></Extrasection>
    </div>
  );
};

export default Home;
