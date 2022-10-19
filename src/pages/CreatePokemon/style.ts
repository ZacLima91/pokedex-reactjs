import styled from "styled-components";

export const ContainerCreateCard = styled.section`
  display: flex;
  width: 56%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0; 
  background-color: #cccbc4;
  border-radius: 1rem;
  box-shadow: 6px 5px 5px #25201b76;
  position: relative;
  flex-direction: column;


  h3 {
    margin: 3rem 0;
    font-family:'Gill Sans', 'Gill Sans MT' 'Trebuchet MS', sans-serif;
    font-weight: 900;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #25201B;
    font-size: 1.2rem;
  }

  button {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #25201B;
    background-color: #25201B;
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }

  button:hover{
    background-color: #fff;
    color: #25201B;
  }
`;
