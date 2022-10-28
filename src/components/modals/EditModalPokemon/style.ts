import styled from "styled-components";

export const ContainerEditCard = styled.section`
  display: flex;
  width: 99%;
  height: 93%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  background-color: #f0da08;
  border-radius: 1rem;
  box-shadow: 6px 5px 5px #25201b76;
  position: relative;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  top: 0;

  .container-header-edit{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    h3 {
      margin-left:  1rem ;
      font-family: "Gill Sans", "Gill Sans MT" "Trebuchet MS", sans-serif;
      font-weight: 900;
      font-size: 2rem;
    }

    .icon-close{
        font-size: 1.5rem;
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 1rem;

    }
  }


  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  input,
  textarea {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #25201b;
    font-size: 1.2rem;
    width: 96%;
  }

  button {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #25201b;
    background-color: #25201b;
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }

  button:hover {
    background-color: #fff;
    color: #25201b;
  }
`;
