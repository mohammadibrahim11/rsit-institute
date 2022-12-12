import React from "react";
import "./WhatWeDo.css";



const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <section className="container">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="col-6">
            <img
              src="https://i.ibb.co/F06Vjw6/Mask-group.png"
              alt=""
              style={{ widht: "455px", height: "400px" }}
            />
          </div>
          <div className="col-6">
            <h2 className="fw-bold text-start ">We Develope Product That  <br /> People Love to Use.</h2>
            <p className="fs-6 text-muted fw-bold text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed, Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed
            </p>
           <div className="d-flex align-items-center gap-4">
           <div className="d-flex justify-content-center align-items-center gap-2 text-start border ps-3 pe-4 rounded bg-white border-0">
              <div className="border rounded border-0 bg-light ">
                <img
                  className="img"
                  src="https://i.ibb.co/YcRk4DF/Black.png"
                  alt=""
                  style={{ height: "55px", widht: "55px" }}
                />
              </div>
              <div className="pt-2">
                <h5 className="fs-6 fw-bold font">our vision</h5>
                <p className="text-vision">
                  It is a long esta <br /> -blished fact that
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 text-start
            border ps-3 pe-4 rounded bg-white border-0">
              <div className="border rounded border-0 bg-light ">
                <img
                  className="img"
                  src="https://i.ibb.co/YcRk4DF/Black(1).png"
                  alt=""
                  style={{ height: "55px", widht: "55px" }}
                />
              </div>
              <div className="pt-2">
                <h5 className="fs-6 fw-bold font">our Goal</h5>
                <p className="text-vision">
                  It is a long esta <br /> -blished fact that
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
