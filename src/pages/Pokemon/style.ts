import styled from "styled-components";

export const PokemonDetails = styled.section`
  background-color: #cccbc4;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.6rem;
  margin: 2rem 0 1rem 0;
  padding: 1rem;

  .title-container {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    height: 100%;
  }

  .title-container h1{
    font-size: 3rem;
  }

  .container-details-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
  }

  .container-image {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .container-image img {
    width: 70%;
  }

  .container-details-pokemon {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.7rem;
  }

  .container-description {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .container-description span {
    background-color: #fff;
    padding: 0.5rem;
    margin-left: 0.6rem;
    border-radius: 0.4rem;
  }

  .container-type,
  .container-height,
  .container-weight {
    display: flex;
    width: 100%;
  }

  .container-type span {
    background-color: #fff;
    padding: 0.5rem;
    margin-left: 3.3rem;
    border-radius: 0.4rem;
  }

  .container-height span {
    background-color: #fff;
    padding: 0.5rem;
    margin-left: 2.5rem;
    border-radius: 0.4rem;
  }

  .container-weight span {
    background-color: #fff;
    padding: 0.5rem;
    margin-left: 3rem;
    border-radius: 0.4rem;
  }
`;
