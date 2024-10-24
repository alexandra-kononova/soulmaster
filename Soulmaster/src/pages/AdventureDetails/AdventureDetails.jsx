import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
import { API_URL } from "../../utils/api";
import "./AdventureDetails.scss";
import { Link } from "react-router-dom";

export default function AdventureDetails() {
  const { adventureId } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAdventure = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/adventures/${adventureId}`
        );
        setAdventure(response.data);
      } catch (err) {
        console.error("Error fetching adventure:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAdventure();
  }, [adventureId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !adventure) {
    return <Navigate to="/not-found" />;
  }

  const { adventure_name, top_description, bottom_description, image } =
    adventure;

  return (
    <div className="selected__adventure">
      <div className="adventure">
        <h1>{adventure_name}</h1>
        <img src={image} alt={adventure_name} className="selected__image" />
        <div className="adventure__information">
          <div className="adventure__details">
            <h3>{top_description}</h3>
            <h3 className="adventure__elements">{bottom_description}</h3>
          </div>
        </div>
        <Link to="http://localhost:5173/masters">
          <button className="find__button">
            Find a {adventure_name} master
          </button>
        </Link>
      </div>
    </div>
  );
}
