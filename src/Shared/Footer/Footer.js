// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { BeakerIcon } from '@heroicons/react/24/solid'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-areLink footer-one">
        <div className="footer-widget">
          <div className="">
            <div className="row">
              <div className="col-xl-6 col-lg-2 col-sm-12">
                <div className="f-about">
                  <div>
                    <Link to="/" className="text-decoration-none fw-bold shadow" >
                      <p className="fs-3 text-white ">
                        RS IT
                      </p>
                    </Link>
                  </div>
                  <p className=" text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="footer-app-store text-start ms-5 ps-5">
              
                  <ul>
                    <li className="border rounded ps-2 pe-2 pt-2 pb-2  bg-white ">
                      <Link to="/">
                     
                        <FaFacebookF className="icon fs-4" />
                      </Link>
                    </li>
                    <li className="border rounded ps-2 pe-2 pt-2 pb-2 shadow bg-white ">
                      <Link to="/">
                    
                        <FaTwitter className="icon fs-4" />
                      </Link>
                    </li>
                    <li className="border rounded ps-2 pe-2 pt-2 pb-2 shadow bg-white ">
                      <Link to="/">
                     
                        <FaInstagram className="icon fs-4" />
                      </Link>
                    </li>
                    <li className="border rounded ps-2 pe-2 pt-2 pb-2 shadow bg-white ">
                      <Link to="/">
                  
                        <FaLinkedinIn className="icon fs-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-sm-4">
                <div className="text-start">
                  <h6 className="text-white">Courses</h6>

                  <ul  style={{listStyleType:'none'}}>
                    <li className="">
                      <Link to="" className="text-decoration-none text-white text-start">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none text-white">
                        Advanced Ms Office
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none text-white">
                        Ms Word
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none text-white">
                        Ms Excel
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none text-white">
                        Ms PowerPoint
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            
              <div className="col-xl-3 col-lg-3 col-sm-4">
                <div>
                  <h6 className=" text-white text-start">Help & Suuport</h6>
                  <ul className="text-start" style={{listStyleType:'none'}}>
                    <li className="text-white">
                      <i className="lni lni-map-marker text-white"></i> Madison Street,
                      NewYork, USA
                    </li>
                    <li className="text-white">
                      <i className="lni lni-phone-set "></i> +88 556 88545
                    </li>
                    <li className="text-white">
                      <i className="lni lni-envelope text-white"></i> support@ayroui.com
                    </li>
                  </ul>
                </div>
              </div>

            </div>

           
          </div>
          <div className="d-flex justify-content-between align-items-center text-white container position " >
              <p>copyright@2023. all rights resevered rs it</p>
              <p>Developed by <Link to='/' className= 'text-decoration-none '>Mohammad Ibrahim</Link ></p>
            </div>
        </div>

        {/* <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                >
                  <p className="text">
                    Copyright © 2024 AyroUI. All Rights Reserved
                  </p>
                  <ul className="social">
                    <li>
                      <Link to="">
                        <i className="lni lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="lni lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="lni lni-instagram-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="lni lni-linkedin-original"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
