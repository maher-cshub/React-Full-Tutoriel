import React, { useState, useEffect } from "react";
import "./Main.css";
import Card from "../Card/Card.jsx";

function Main() {
  const [pokemons, set_pokis] = useState([]);

  useEffect(() => {
    async function get_pokis() {
      const response = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/limit/20"
      );
      const pokemons = await response.json();
      set_pokis(pokemons);
    }

    get_pokis();
  }, []);

  return (
    <main className="main">
      <section className="layout">
        {pokemons.map((element) => (
          <Card name={element.name} image={element.image}></Card>
        ))}
      </section>
    </main>
  );
}

export default Main;
