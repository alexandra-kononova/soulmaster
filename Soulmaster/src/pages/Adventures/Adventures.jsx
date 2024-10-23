import { useEffect, useState } from "react";
import axios from "axios";
import AdventureList from "../../components/AdventureList/AdventureList";
import "../Adventures/Adventures.scss";
import { API_URL } from "../../utils/api";
import adventureImage from "../../assets/images/Adventures.jpg";

export default function Adventures() {
  const [adventures, setAdventures] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAdventures = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/adventures`);
        setAdventures(data[0].adventures);
      } catch (error) {
        console.log("Error loading adventures", error);
      }
    };
    getAdventures();
  }, []);

  return (
    <>
      <section className="adventure__container">
        <div class="adventure__image adventure__img">
          <img
            src={adventureImage}
            className="adventure__img"
            alt
            text="Vivid abstract painting of a winding road through vibrant mountains under a colorful sky."
          />
        </div>
        <div className="adventure__section">
          <h1 className="adventure__title">Soul Adventures</h1>
          <h3>We offer unique experiences for your spiritual growth</h3>
        </div>
      </section>
      <div>
        <AdventureList adventures={adventures} />
      </div>
    </>
  );
}
