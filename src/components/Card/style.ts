import styled from "styled-components";
import cardImage from "../../images/card-pokemon.png";

export const CardSection = styled.section`
  display: flex;
  width: 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  margin: 2rem;
  background-image: url(${cardImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 22.2rem;
  box-shadow: 6px 5px 5px #25201B66;
  cursor: pointer;

  a{
    text-decoration: none;
    color: #000;
  }

  :hover{
    transform:scale(1.1) ;
  }

  .containerImagePokemon img {
    width: 10rem;
  }


`;
