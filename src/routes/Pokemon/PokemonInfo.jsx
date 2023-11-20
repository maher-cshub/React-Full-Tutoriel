import React, { useEffect, useState } from "react";
import "./PokemonInfo.css";
import { useParams } from "react-router-dom";
import { render } from "@testing-library/react";

function PokemonInfo() {
  const { pokeName } = useParams();
  const [PokemonInfo, SetPokimonInfo] = useState({});

  const SetPokemonStats = () => {
    const stats = PokemonInfo.stats;
    console.log(PokemonInfo);
    const result = Object.keys(stats).map((key) => {
      return <li key={key}>{key} :</li>;
    });
    console.log(result);
    return result;
  };

  useEffect(() => {
    async function get_poki_info() {
      const response = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${pokeName}`
      );
      const result = await response.json();

      SetPokimonInfo({
        name: result.name,
        image: result.image,
        stats: result.stats,
      });
    }

    get_poki_info();
    //SetPokemonStats();
  }, []);

  return (
    <>
      <section className="PokimonInfo">
        <div className="image">
          <img src={PokemonInfo.image} alt="test" />
          <span>{PokemonInfo.name}</span>
        </div>
        <div className="info">
          <span>Stats</span>
          <ul>{}</ul>
        </div>
      </section>
    </>
  );
}

export default PokemonInfo;

//send params to react route?
