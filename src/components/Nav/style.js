import styled, { css } from "styled-components";


export const ContainerNav = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    @media (max-width: 786px){
        background-color: #dcdcdcb4;
        position: absolute;
        width: 106vw;
        height: 100vh;
        top:0;
        justify-content: center;
        align-items: center;
        z-index:4;
    }
`;

export const Nav = styled.nav`
    ${(color) => css`
   
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
    a{
        ${color}
        text-decoration: none;
        height: 10%;
        transition: color 0.4s ease 0s;
    }
    a:hover{
        
        text-decoration: underline;
        
        color: #fff;
        
    }
    @media(max-width: 786px){
        height: 500px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        a{
            color: black;
        }
    }
    
    `}

   
    
`;