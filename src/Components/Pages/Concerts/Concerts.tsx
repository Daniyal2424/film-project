import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../interfaces";

const url = "https://6634a3d39bb0df2359a2309c.mockapi.io/data";

const Concerts: React.FC = () => {
  const [concert, setConcert] = useState<Card[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const activeState = localStorage.getItem("active");
    if (activeState) {
      setIsActive(JSON.parse(activeState));
    }
  }, []);

  useEffect(() => {
    axios
      .get<Card[]>(url)
      .then((res) => setConcert(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="cards">
      {isActive
        ? concert
            .filter((obj) => obj.id > 0 && obj.id < 17)
            .map((c) => (
              <div className="card" key={c.id}>
                <img src={c.img} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.price}</p>
              </div>
            ))
        : concert
            .filter((obj) => obj.id > 0 && obj.id < 7)
            .map((c) => (
              <div className="card" key={c.id}>
                <img src={c.img} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.price}</p>
              </div>
            ))}
    </div>
  );
};

export default Concerts;
