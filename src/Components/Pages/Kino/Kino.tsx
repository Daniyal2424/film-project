import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../interfaces";
const url = "https://6634a3d39bb0df2359a2309c.mockapi.io/data";

const Kino: React.FC = () => {
  const [kino, setKino] = useState<Card[]>([]);
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
      .then((res) => setKino(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="cards">
      {isActive
        ? kino
            .filter((obj) => obj.id > 34 && obj.id < 48)
            .map((k) => (
              <div className="card" key={k.id}>
                <img src={k.img} alt="" />
                <h3>{k.title}</h3>
                <p>{k.genre}</p>
              </div>
            ))
        : kino
            .filter((obj) => obj.id > 34 && obj.id < 41)
            .map((k) => (
              <div className="card" key={k.id}>
                <img src={k.img} alt="" />
                <h3>{k.title}</h3>
                <p>{k.genre}</p>
              </div>
            ))}
    </div>
  );
};

export default Kino;
