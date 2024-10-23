import React from "react";
import "./AdventureList.scss";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";

export default function AdventureList({ adventures }) {
  console.log(adventures);
  return (
    <ul>
      {adventures.map((adventure) => (
        <li className="adventure__element" key={adventure.id}>
          <Link to={`/adventures/${adventure.id}`}>
            <div className="adventure__list">
              <div className="adventure__item">
                <Image
                  className="image"
                  imagePath={adventure.image}
                  // altText={adventure.title}
                />
              </div>
              <div className="adventure__info">
                <h2 className="adventure__name">
                  {adventure.adventure_name} →{" "}
                </h2>
                <p className="adventure__text">
                  Immerse yourself in the world of {adventure.adventure_name}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
