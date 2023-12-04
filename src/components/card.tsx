import React from "react";
import '../index.css';
import { IEntity } from "../types/type";

export function Cards(props: IEntity.Movies) {
  return (
    <div className="wrapper">
      <div
        className="main_card"
        style={{ backgroundImage: `url(${props.Images[0]})` }}
      >
        <div className="card_left">
          <div className="card_datails">
            <h1 className="title">Title: {props.Title}</h1>
            <div className="card_cat">
              <p className="PG">{props.Rated}</p>
              <p className="year">{props.Year}</p>
              <p className="genre">{props.Genre}</p>
              <p className="time">{props.Runtime}</p>
            </div>
            <p className="country">{props.Country}</p>
            <a href="#" target="_blank" className="ar">
              {props.Awards}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}