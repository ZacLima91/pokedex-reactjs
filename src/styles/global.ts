import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        display: flex;
        max-height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 900;
    } 

    #root{
        display: flex;
        min-height: 100vh;
        justify-content: space-between;
    }

    body {
        background-color: #25201B;
    }
`;
