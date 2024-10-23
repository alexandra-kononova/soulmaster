import { Link } from "react-router-dom";
import "../Home/Home.scss";
import homeImage from "../../assets/images/Home.jpeg";

export default function Home() {
  return (
    <section className="home__page">
      <section className="home__container">
        <div class="home__image home__img">
          <img
            src={homeImage}
            className="home__img"
            alt
            text="Vivid abstract painting of a winding road through vibrant mountains under a colorful sky."
          />
        </div>
        <div className="home__section">
          <h1 className="home__title">Find your next soul journey</h1>
          <h3>
            Immerse yourself in the world of healing, movement and pure joy.
          </h3>
          <Link to="/adventures">
            <button className="home__button">
              Your soul adventure starts here
            </button>
          </Link>
        </div>
      </section>
      <div className="home__bottom-text">
        <h4 className="home__text">
          It's not the destination, but the journey that matters.
        </h4>
      </div>
    </section>
  );
}
