import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="">
            Navbar
          </Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/courses">
                 Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/contactus">
                 Contact us
                </Link>
              </li>
            </ul>
       
             
              <button class="btn btn-outline-success" type="submit">
              Login
              </button>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
