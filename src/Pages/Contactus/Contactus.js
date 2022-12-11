import React from "react";
import { Link } from "react-router-dom";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div>
      <section class="signin-areLink signin-one">
        <div class="container ">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <form action="#" className="border rounded shadow form ">
                <div class="signin-form form-style-two rounded-buttons">
                  <div class="row">
                    <div>
                      <p className="fw-bold text-center fs-6 text-primary">
                        {" "}
                        hey!sign up for enroll our course.
                      </p>
                    </div>
                    <div class="col-md-12">
                      <div class="form-input">
                        <div class="input-items">
                          <input
                            type="text"
                            placeholder="Email"
                            className="input-field"
                          />
                          <i class="lni lni-envelope"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-input">
                        <div class="input-items default">
                          <input
                            type="text"
                            placeholder="Name"
                            className="input-field"
                          />
                          <i class="lni lni-user"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-input">
                        <div class="input-items default">
                          <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                          />
                          <i class="lni lni-key"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-input">
                        <div class="input-items default">
                          <textarea
                            type="text"
                            placeholder="message"
                            className="input-field"
                          ></textarea>
                          <i class="lni lni-key"></i>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="form-input rounded-buttons">
                        <button
                          class="btn btn-outline-primary   mt-3 mb-2 ps-4 pe-4 rounded-full"
                          type="submit"
                        >
                          register
                        </button>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-input text-center">
                        <p class="text text-secondary fw-bold fs-6 mb-2 mt-2">
                          Already have an account?

                              <Link href="/" className='text-decoration-none  ps-2 pe-2'> Login Here</Link >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
