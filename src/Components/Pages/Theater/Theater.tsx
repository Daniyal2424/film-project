import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../interfaces";

const url = "https://6634a3d39bb0df2359a2309c.mockapi.io/data";

const Theater = () => {
  const [theater, setTheater] = useState<Card[]>([]);
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
      .then((res) => setTheater(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="cards">
      {isActive
        ? theater
            .filter((obj) => obj.id > 16 && obj.id < 35)
            .map((t) => (
              <div className="card" key={t.id}>
                <img src={t.img} alt="" />
                <h3>{t.title}</h3>
                <p>{t.price}</p>
              </div>
            ))
        : theater
            .filter((obj) => obj.id > 16 && obj.id < 23)
            .map((t) => (
              <div className="card" key={t.id}>
                <img src={t.img} alt="" />
                <h3>{t.title}</h3>
                <p>{t.price}</p>
              </div>
            ))}
    </div>
  );
};

export default Theater;
