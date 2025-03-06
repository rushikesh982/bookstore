import React from "react";
import './book.css'


const data = [
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },

    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
    {
        'img':'/images/ThankYouForLeaving.jpg',
        'bookName':'Thank YouFor Leaving',
        'bookWriter':'Ritvhik Singh',
        'price':'RS 252'
    },
]
export default function Book()
{
    return(
        <>
        <div className="container-md">
            <div className="row">
            {
                data.map((item)=>{
                    return(
                        <>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={item.img} alt="" className="bookImg"/>
                                    </div>
                                    <div className="card-footer">
                                        <h6 className="fw-bold">{item.bookName}</h6>
                                        <p>{item.bookWriter}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
            
        </>
    )
}