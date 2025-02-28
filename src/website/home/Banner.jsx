import React from "react";
import './home.css'
import { NavLink } from "react-router-dom";

export default function Banner()
{
    return(
        <>
            <div className="bannerBox">
                <div className="bannerInner">
                    <h2 className="text-uppercase fw-bolder">reading that changes lives</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nihil doloremque culpa rem distinctio, tempore saepe aut, animi nulla officiis eos blanditiis ullam optio ex eum sapiente iure impedit eligendi.</p>
                    <button><NavLink className={'nav-link'} to={'/SeeMore'}>See More</NavLink></button>
                    
                    <a href="#bestSeller"><i class="ri-arrow-down-s-line d-block downarrow"></i></a>

                </div>
            </div>
        </>
    )
}