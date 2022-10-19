import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f0da08;
  align-items: center;

  img {
    height: 10rem;
    margin-left: 2rem;
    cursor: pointer;
    transition: 0.5s;
  }

  input {
    padding: 0.2rem;
    border-radius: 4px;
    border: none;
    padding: 0.7rem;
    width: 20rem;
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: #000;
    margin: 0 1rem;
  }

  ul {
    list-style: none;
    display: flex;
  }
`;
