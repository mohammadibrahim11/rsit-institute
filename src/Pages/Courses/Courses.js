import React, { useEffect, useState } from "react";
import Course from "../../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    fetch("rsit.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container m-auto">
      <div>
        <p className="text-center fs-1 fw-bold text-primary mt-4 mb-5 ">courses</p>
      </div>

      <div className=" row row-cols-1 row-cols-md-4  d-flex justify-content-evenly align-items-center gap-4 mt-5 mb-5">
        {courses.map((course) => (
          <Course course={course} key={course.id}>
            {" "}
          </Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
