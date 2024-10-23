import React from "react";
import "./AdventureList.scss";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";

export default function AdventureList({ adventures }) {
  console.log(adventures);
  return (
    <ul className="adventure__list">
      {adventures.map((adventure) => (
        <li className="adventure__element" key={adventure.id}>
          <Link to={`/adventures/${adventure.id}`}>
            <div className="adventure__selection">
              <div className="adventure__item adventure__img">
                <Image
                  className="adventure__img"
                  imagePath={adventure.image}
                  altText={adventure.adventure_name}
                />
              </div>
              <div className="adventure__text-overlay">
                <h2 className="adventure__name">
                  {adventure.adventure_name} →{" "}
                </h2>
                <p className="adventure__line">
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
