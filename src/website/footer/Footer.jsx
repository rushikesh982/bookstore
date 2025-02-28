import React, { useState } from "react";
import './footer.css'
import { NavLink } from "react-router-dom";

export default function Footer() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div className="container-fluid mt-5 footer text-center text-light">
                <div className="row">
                    <div className="col-12">
                        <p className="text-capitalize footerHeadText">
                            Stay up to date with the latest news, special offers, and more!
                        </p>
                        <h1 className="text-uppercase text-light fw-bold">Join our mailing list</h1>
                        
                        {/* Button is disabled until checkbox is checked */}
                        <button disabled={!isChecked} data-bs-toggle="modal" data-bs-target="#exampleModal2">Enter your email address</button>

                        {/* Checkbox to enable the button */}
                        <p className="condition">
                            <input 
                                type="checkbox" 
                                id="agreeCheckbox"
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor="agreeCheckbox"> I agree to the processing of personal data</label>
                        </p>
                    </div>

                    <div className="col-12 foot-nav">
                        <ul>
                            <li><NavLink className="nav-link d-inline" to="/book">Book</NavLink></li>
                            <li><NavLink className="nav-link d-inline" to="/new">New</NavLink></li>
                            <li><NavLink className="nav-link d-inline" to="/BestSeller">BestSeller</NavLink></li>
                            <li><NavLink className="nav-link d-inline" to="/About">About Us</NavLink></li>
                            <li><NavLink className="nav-link d-inline" to="/Contacts">Contacts</NavLink></li>
                            <li><NavLink className="nav-link d-inline" to="/cart">Cart</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-12 border-top p-3 footerIconOuter">
                        <a href="https://x.com/?lang=en"><i className="ri-twitter-x-line"></i></a>
                        <a href="https://www.facebook.com/"><i className="ri-facebook-circle-line"></i></a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en"><i className="ri-instagram-line"></i></a>  
                    </div>
                </div>
            </div>


            {/* modal */}

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">add your email</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" placeholder="enter your email..." />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
        <button type="button" className="btn btn-primary">add</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
}
