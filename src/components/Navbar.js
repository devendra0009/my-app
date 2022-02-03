// import React from "react";
// import React, { useState } from "react";
import PropTypes from "prop-types";
import{Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.bgColor}`} 
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/home"> */}
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>{" "}
          {/*props*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/home"> */}
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about"> */}
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/* <Link className="dropdown-item" to="/study"> */}
                    <Link className="dropdown-item" to="/study">
                      Study
                    </Link>
                  </li>
                  <li>
                    {/* <Link className="dropdown-item" to="/fun"> */}
                    <Link className="dropdown-item" to="/fun">
                      Fun
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    {/* <Link className="dropdown-item" to="/eat"> */}
                    <Link className="dropdown-item" to="/eat">
                      Eat
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.text}`} >
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable {props.text} Mode
              </label>
            </div>
            {/* <select
              class="form-select w-25"
              aria-label="Default select example"
            >
              <option selected>Modes</option>
              <option value="1" onClick={props.toogleDark}> Enable {props.dark} Mode</option>
              <option value="2" onClick={props.toogleRed}> Enable {props.red} Mode</option>
              <option value="3" onClick={props.toogleBlue}> Enable {props.blue} Mode</option>
            </select> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string, //string k alwa or koi dataType not accepted
};
Navbar.defaultProps = {
  //by default ye ajaega
  title: "Write Title Here",
  aboutText: "Write about Text here",
};
