import React from "react";
import './aboutUs.css'
import { NavLink } from "react-router-dom";

export default function AboutUs()
{
    return(
        <>

            <div className=" container-md aboutBox">
                <div className="aboutInner ">
                    <p className="behindOurBrand">behind the our <span>brand</span></p>
                </div>
                <div className="aboutInner">
                    <img src="/images/aboutcardimg2.webp" alt="" />
                </div>
                <div className="aboutInner">
                <img src="/images/aboutcardimg2.webp" alt="" />

                </div>
                <div className="aboutInner">
                <img src="/images/aboutcardimg2.webp" alt="" />

                </div>
                <div className="aboutInner">
                <img src="/images/aboutcardimg2.webp" alt="" />

                </div>
                <div className="aboutInner">
                <img src="/images/aboutcardimg2.webp" alt="" />

                </div>
                <div className="aboutInner">
                <img src="/images/aboutcardimg2.webp" alt="" />

                </div>
                <div className="aboutInner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis tempore quas, earum tenetur error maxime saepe voluptate odio voluptatibus necessitatibus ipsam dolorum, quam minus, iusto praesentium vero eveniet aliquam facere. Quam obcaecati pariatur inventore doloribus. Illo odio officia magnam, quaerat delectus, molestias dolores accusantium modi cum rerum deserunt?</p>
                </div>
                <div className="aboutInner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis tempore quas, earum tenetur error maxime saepe voluptate odio voluptatibus necessitatibus ipsam dolorum, quam minus, iusto praesentium vero eveniet aliquam facere. Quam obcaecati pariatur inventore doloribus. Illo odio officia magnam, quaerat delectus, molestias dolores accusantium modi cum rerum deserunt?</p>
                </div>
                <div className="aboutInner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis tempore quas, earum tenetur error maxime saepe voluptate odio voluptatibus necessitatibus ipsam dolorum, quam minus, iusto praesentium vero eveniet aliquam facere. Quam obcaecati pariatur inventore doloribus. Illo odio officia magnam, quaerat delectus, molestias dolores accusantium modi cum rerum deserunt?</p>
                </div>
                <div className="aboutInner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis tempore quas, earum tenetur error maxime saepe voluptate odio voluptatibus necessitatibus ipsam dolorum, quam minus, iusto praesentium vero eveniet aliquam facere. Quam obcaecati pariatur inventore doloribus. Illo odio officia magnam, quaerat delectus, molestias dolores accusantium modi cum rerum deserunt?</p>
                </div>
                <div className="aboutInner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis tempore quas, earum tenetur error maxime saepe voluptate odio voluptatibus necessitatibus ipsam dolorum, quam minus, iusto praesentium vero eveniet aliquam facere. Quam obcaecati pariatur inventore doloribus. Illo odio officia magnam, quaerat delectus, molestias dolores accusantium modi cum rerum deserunt?</p>
                    <p className="text-capitalize"><NavLink className={'nav-link'} to={'/'}>go to main page<i class="ri-arrow-right-up-line"></i></NavLink></p>
                </div>
                
            </div>
        </>
    )
}