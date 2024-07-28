import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import logo from '../../assets/logo1.png';
// import logo from '../../assets/logo.png';
// import arrow_ico from '../../assets/arrow_ico.png';

export default function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (evt) => {
    switch (evt.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <span><img src={logo} alt="Logo" className="navbar-logo" /></span>
        <span>CRYPTOLENS</span>
        
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
          >
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mycourses">
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allCourses">
                Tools
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">
                Feedback
              </NavLink>
            </li>
          </ul>
          <div className="nav-right">
            <select name="" id="" className="sel" onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
            <button className="bt">
              Contact us <img src="" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

