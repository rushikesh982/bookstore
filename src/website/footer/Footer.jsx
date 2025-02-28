import React from "react";
import './footer.css'
import { NavLink } from "react-router-dom";

export default function Footer()
{
    return(
        <>
            <div className="container-fluid mt-5 footer text-center text-light">
                <div className="row">
                    <div className="col-12">
                        <p className="text-capitalize footerHeadText">stay up to date with the latest news, speacial offer and more!</p>
                        <h1 className="text-uppercase text-light fw-bold">join our mailing list</h1>
                        <button>enter you email address</button>
                        <p className="condition"><input type="checkbox" name="" id="" />i agree to the processing perosnal data</p>
                    </div>
                    <div className="col-12 foot-nav">
                        <ul>
                            <li><NavLink className={'nav-link d-inline'} to={'/book'}>Book</NavLink></li>
                            <li><NavLink className={'nav-link d-inline'} to={'/new'}>new</NavLink></li>
                            <li><NavLink className={'nav-link d-inline'} to={'/BestSeller'}>BestSeller</NavLink></li>
                            <li><NavLink className={'nav-link d-inline'} to={'/AboutUs'}>About Us</NavLink></li>
                            <li><NavLink className={'nav-link d-inline'} to={'/Contacts'}>Contacts </NavLink></li>
                            <li><NavLink className={'nav-link d-inline'} to={'/cart'}>Cart </NavLink></li>
                        </ul>
                    </div>
                    <div className="col-12  border-top p-3 footerIconOuter">
                    <i class="ri-twitter-x-line"></i>
                    <i class="ri-facebook-circle-line"></i>
                    <i class="ri-instagram-line"></i>
                    </div>
                </div>
            </div>
        </>
    )
}