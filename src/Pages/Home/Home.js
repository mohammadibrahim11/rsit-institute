import LottiePlayer from "lottie-react";
import React from "react";
import reader from "../../asset/reader.json";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className=" d-flex justify-content-evenly align-items-center container">
        <div className=" col-6 ">
          <p className="fs-2 w-80 m-auto text-danger fw-bold">
            WELCOME TO RS IT INSTITUTE
          </p>
          <p className="fs-6 text-secondary fw-bold shadow mt-2">
            Explore what professionals like you are learning the most
          </p>
        </div>

        <div className="col-6 mt-5 w-80 w-50 m-auto">
          <LottiePlayer
            className="lottifile"
            animationData={reader}
            loop={true}
          ></LottiePlayer>
        </div>
      </div>

      {/* <Courses></Courses> */}
    </div>
  );
};

export default Home;
