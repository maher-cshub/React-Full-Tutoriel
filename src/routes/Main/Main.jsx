import React, { useState, useEffect } from "react";
import "./Main.css";
import Card from "../../components/Card/Card.jsx";

function Main() {
  const [pokemons, set_pokis] = useState([]);

  useEffect(() => {
    async function get_pokis() {
      const response = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/limit/10"
      );
      const result = await response.json();
      console.log(pokemons);
      if (pokemons.length === 0) {
        set_pokis(result);
      }
    }

    get_pokis();
  }, [pokemons]);

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
