import { useEffect, useState } from "react";
import { Pokemon } from "../../utils/types/pokemon.type";
import { CardSection } from "./style";
import cardImage from "../../images/card-pokemon.png";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  imageURL,
}: Pokemon) {
  return (
    <CardSection>
      <Link to={`/pokemon/${id}`}>
      <div className="containerImagePokemon">
        <img src={imageURL} alt={name} />
      </div>
      <div className="containerNamePokemon">
        <h2>{name}</h2>
      </div>
      </Link>
    </CardSection>
  );
}
