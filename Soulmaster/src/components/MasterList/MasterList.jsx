import React from "react";
import "./MasterList.scss";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";

export default function MasterList({ masters }) {
  return (
    <ul className="master__list">
      {masters.map((master) => (
        <li className="master__element" key={master.id}>
          <Link to={`/masters/${master.id}`}>
            <div className="master__selection">
              <div className="master__item master__img">
                <Image
                  className="master__img"
                  imagePath={master.image}
                  altText={master.name}
                />
              </div>
              <div className="master__text">
                <div className="master__subtext">
                  <h2 className="master__name">Master {master.name}</h2>
                  <p className="master__description">{master.description}</p>
                </div>
                <p>
                  {master.price} {master.currency} {master.type}
                </p>
                <Link to="http://localhost:5173/contact">
                  <button className="booking__button">
                    Book a session with me
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
