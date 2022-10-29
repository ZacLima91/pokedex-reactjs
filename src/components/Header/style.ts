import React, { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import styled, { ThemedStyledProps } from "styled-components";

type visibleTrue = {
  visible: string;
}

export const HeaderComponent = styled.header`
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  background-color: #f0da08;
  align-items: center;
  justify-content: center;

  img {
    height: 10rem;
    margin-left: 2rem;
    cursor: pointer;
    transition: 0.5s;
  }
  .container-logo {
    width: 20%;
    height: 100%;
  }

  .menu {
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
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
    margin-left: 2rem;
  }

  svg {
    visibility: hidden;
  }
  @media (max-width: 760px) {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;


    .menu {
      position: fixed;
      background-color: #f0da08;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      visibility: ${(props: visibleTrue)=> props.visible};

      ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;

        li {
          margin: 1rem;

          :hover{
            transform: scale(1.2);
          }
        }
      }
      input{
        width: 96%;
      }

      .icon-close{
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem 1rem 0 0;
        font-size: 2rem;
        cursor: pointer;
        visibility: ${(props: visibleTrue)=> props.visible};
      }
    }

    .container-logo{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .hamburger {
      margin-right: 1rem;
      font-size: 2rem;
      visibility: visible;
      cursor: pointer;
      transition: 0.6s;

      :hover {
        transform: scale(1.2);
      }
    }
  }
`;
