import styled, { css } from "styled-components";


export const ContainerNav = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
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
        
        transition: color 0.4s ease 0s;
    }
    a:hover{
        
        text-decoration: underline;
        color: #fff;
        
    }
    
    `}

   
    
`;