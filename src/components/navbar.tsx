import React from "react";
import './styles/index.scss';
import img from '../images/rt.svg';
import '../index.css'
import img2 from '../images/rtr.svg';
import img3 from '../images/rtrr.svg';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
  Link
} from "react-router-dom";
export function Navbar() {
  return (
      <nav className="">
        <div className="icon">
            <img src={img} alt="" />
        </div>
        <div className="elements">
            <div className="min_flex">
                <img src={img2} alt="" />
                <p className="aelm">Home</p>
            </div>
            <a href=""><Link to='/movies' className="aelm">Movies</Link></a>
            <p className="aelm">Series</p>
        </div>
        <div className="log_ser">
        <Link to="/register">
        <div className="oval">
              <img src={img3} alt="" className="svg"/>
        </div>
        </Link>
        </div>
      </nav>
  );
}