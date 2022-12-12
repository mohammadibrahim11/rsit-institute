import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg ps-5 pe-5 ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white fw-bold hover:text-danger" to="">
            RS IT
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 fw-bold ">
              <li className="nav-item ">
                <Link className="nav-link  text-white pe-4" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white pe-4"  to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white pe-4" to="/courses">
                 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white  pe-4 " to="/contactus">
                 Contact us
                </Link>
              </li>
            </ul>
       
             
              <button className="btn btn-outline-primary border-0 text-white" type="submit">
              Login
              </button>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
