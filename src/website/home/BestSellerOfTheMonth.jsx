import React from "react";
import { NavLink } from "react-router-dom";

export default function BestSellerOfTheMonth()
{
    return(
        <>
            <div className="container-md mt-5" id="bestSeller">
                <div className="row">
                    <div className="col-12 fw-bolder bestSellerHeading d-flex align-items-center justify-content-between">
                        <p>Best Seller Of The Month</p>
                        <span><NavLink className="nav-link" to="/Bestseller">see more<i class="ri-arrow-right-up-line"></i></NavLink></span>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src="" alt="" />
                            </div>
                            <div className="card-footer">
                                <h5>Lorem, ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src="" alt="" />
                            </div>
                            <div className="card-footer">
                                <h5>Lorem, ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src="" alt="" />
                            </div>
                            <div className="card-footer">
                                <h5>Lorem, ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src="" alt="" />
                            </div>
                            <div className="card-footer">
                                <h5>Lorem, ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}