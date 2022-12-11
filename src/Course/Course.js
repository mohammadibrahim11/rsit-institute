import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { price, name, image, ratings, tutor } = course;
  return (
    <div>
      <div>
        <div className="card shadow border-0 " style={{ width: "19rem" }}>
          <img
            src={image}
            className="card-img-top"
            style={{ height: "180px" }}
            alt="..."
          />
          <div className="card-body ">
     
              <h5 className="card-title text-primary fw-bold">{name}</h5>

              <div className="d-flex justify-content-between text-start mt-3 ">
                <p className="card-text text-secondary fw-bold fs-6">price: {price}</p>
                <p className="card-text text-secondary fw-bold fs-6"> tutor: <span className="text-primary ">{tutor}</span></p>
              </div>
              <div>
                <p className="text-start text-secondary fw-bold fs-6"> ratings: <span className="text-warning">{ratings}</span></p>
              </div>
         
            <Link href="/" className="btn btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
