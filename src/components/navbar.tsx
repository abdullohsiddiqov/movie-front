import React from "react";
import './styles/index.scss';
import img from '../images/rt.svg';
import '../index.css'
import img2 from '../images/rtr.svg';
import img3 from '../images/rtrr.svg';
export function Navbar() {
  return (
      <nav className=".navbar">
        <div className="icon">
            <img src={img} alt="" />
        </div>
        <div className="elements">
            <div className="min_flex">
                <img src={img2} alt="" />
                <p className="aelm">Home</p>
            </div>
            <p className="aelm">Movies</p>
            <div className="aelm">Series</div>
        </div>
        <div className="log_ser">
            <div className="oval">
              <img src={img3} alt="" className="svg"/>
            </div>
        </div>
      </nav>
  );
}