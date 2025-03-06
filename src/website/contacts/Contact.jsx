import React from "react";
import './contact.css'



export default function Contact()
{
    return(
        <>
            <div className="container-md mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 contact-left">
                        <p className="heading">contact info</p>
                        <span>Some information that you may want to know</span>
                        <a href="tel:+91 9850649863" className="contact-phone"><i class="ri-phone-line"></i>9850649863</a>
                        <a href="mailto:garadr81@gmail.com" className="contactMail"><i class="ri-mail-line"></i>garadr81@gmail.com</a>
                        <a href="https://maps.app.goo.gl/zVUEAx6NJVF49Mos9" target="_blank" className="text-dark text-decoration-none"><i class="ri-map-pin-2-line"></i>pune 411018</a>
                    </div>
                    <div className="col-12 col-md-6 contact-right">
                        <form>
                            <table>
                                <tr>
                                    <td className="d-flex gap-3 mb-4 inputBox">
                                        <input type="text" name="" id="" placeholder="Your Name" required/>
                                        <input type="email"  placeholder="Email" required/>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <textarea name="" rows={'20'} cols={'45'} id="" placeholder="Message"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="text-center">
                                        <button className="mt-3">send</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}