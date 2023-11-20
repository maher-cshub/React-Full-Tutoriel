import React, { useState, useEffect, Suspense } from "react";
import "./Main.css";
const Card = React.lazy(() => import("../../components/Card/Card.jsx"));
//import Card from "../../components/Card/Card.jsx";

function Main() {
  const [pokemons, set_pokis] = useState([]);

  useEffect(() => {
    async function get_pokis() {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/");
      const result = await response.json();
      console.log(pokemons);
      set_pokis(result);
    }

    get_pokis();
  }, [pokemons]);

  return (
    <main className="main">
      <section className="layout">
        {pokemons.map((element) => (
          <Suspense fallback={<div>Loading...</div>}>
            <Card name={element.name} image={element.image}></Card>
          </Suspense>
        ))}
      </section>
    </main>
  );
}

export default Main;
