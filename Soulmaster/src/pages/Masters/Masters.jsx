import { useEffect, useState } from "react";
import axios from "axios";
import MasterList from "../../components/MasterList/MasterList";
import "../Masters/Masters.scss";
import { API_URL } from "../../utils/api";
// import adventureImage from "../../assets/images/Adventures.jpg";

export default function Masters() {
  const [masters, setMasters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMasters = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/masters`);
        setMasters(data);
      } catch (error) {
        console.log("Error loading masters", error);
      }
    };
    getMasters();
  }, []);

  return (
    <>
      <section className="masters__container">
        <div className="master__section">
          <h1 className="master__title">Masters</h1>
          <h3 className="master__subtitle">
            Select one of the masters from the list below
          </h3>
        </div>
      </section>
      <div>
        <MasterList masters={masters} />
      </div>
    </>
  );
}
