import React from "react";
import "./header.css";
import "remixicon/fonts/remixicon.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="nav-outer">
        <div className="nav-logo">
          <NavLink
            className="nav-link d-inline"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            <h3>BookBazaar</h3>
          </NavLink>
        </div>
        <div className="nav-items d-none d-lg-block">
          <ul>
            <li>
              <NavLink
                className="nav-link d-inline"
                to="/Book"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Books
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                className="d-inline nav-link"
                to="/New"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                New
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                className={"nav-link d-inline"}
                to={"/Bestseller"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Bestseller
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"nav-link d-inline"}
                to={"/About"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"nav-link d-inline"}
                to={"/Contact"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-logos">
          <input type="text" name="" className=" search d-none d-lg-block " />
          <i className="ri-search-line d-none d-lg-block"></i>
          <i
            className="ri-user-3-fill"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></i>
          <i className="ri-shopping-cart-2-line"></i>
        </div>
        <div className="mob-menu d-block d-lg-none">
          <i className="ri-menu-line  "></i>
        </div>
      </div>

      {/* modal start */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <table>
                  <tr>
                    <td>
                      <input
                        type="email"
                        placeholder="enter your email..."
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="password"
                        placeholder="enter your password.."
                        required
                      />
                    </td>
                  </tr>
                </table>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cancel
              </button>
              <button type="button" className="btn btn-primary">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
