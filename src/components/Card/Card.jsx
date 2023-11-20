import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ name, image }) {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <strong>{name}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <LazyLoadImage src={image}></LazyLoadImage>
          </div>
          <div className="front-content">
            <small className="badge">
              <Link to={`/${name}`}>Learn More</Link>
            </small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{name}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

//react routing and passing multiple params?
