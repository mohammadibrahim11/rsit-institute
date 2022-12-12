import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './OurExpertice.css'

const OurExpertice = () => {
  const [expertice, setExpesrtice] = useState([]);
  useEffect(() => {
    fetch("rsit.json")
      .then((res) => res.json())
      .then((data) => setExpesrtice(data));
  }, []);
  return (
    <div className="expertice">
      <div className="pb-4 pt-4 fw-bold fs-3 text-danger">Our Courses</div>

      <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center gap-4 align-items-center pt-3 ">
        {expertice.slice(0,3).map((exp) => (
          <div>
            <div className="card shadow border-0 " style={{ width: "19rem" }}>
              <img
                src={exp.image}
                className="card-img-top"
                style={{ height: "180px" }}
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title text-primary fw-bold">{exp.name}</h5>

                <div className="d-flex justify-content-between text-start mt-3 ">
                  {/* <p className="card-text text-secondary fw-bold fs-6">price: {price}</p> */}
                  <p className="card-text text-secondary fw-bold fs-6">
                    {" "}
                    tutor: <span className="text-primary ">{exp.tutor}</span>
                  </p>
                </div>
                <div>
                  <p className="text-start text-secondary fw-bold fs-6">
                    {" "}
                    ratings: <span className="text-warning">{exp.ratings}</span>
                  </p>
                </div>

                <Link href="/" className="btn btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 pb-4">
        <Link to='/courses'><button className="btn btn-primary mt-4 mb-4">see all courses</button></Link>
      </div>
    </div>
  );
};

export default OurExpertice;
