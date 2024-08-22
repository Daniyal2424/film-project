import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";
import Button from "../Elements/Button/Button";
import { Card } from "../../interfaces/index";

const url = "https://6634a3d39bb0df2359a2309c.mockapi.io/data";

export default function Header() {
  const [products, setProducts] = useState<Card[]>([]);
  const [value, setValue] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get<Card[]>(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    setCards(
      products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);
  return (
    <header>
      <div className="header-logo">
        <h1>Cinema.kz</h1>
      </div>
      <div className="header-search">
        <div className="searchs">
          <input
            className="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Поиск"
          />
          <div className="cards">
            {cards.length > 0 ? (
              cards.map((c) => (
                <div className="search-cards" key={c.id}>
                  <img src={c.img} alt={c.title} />
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      </div>
      <div className="header-button">
        <Button buttonTitle={"Войти"} />
      </div>
    </header>
  );
}
