import styled, { css } from "styled-components";

export const ContainerHeader = styled.div`
    ${(background) => css`
    ${background}
    width: 100%;
    display: flex;
    align-items: center;
    height: 150px;
    `};
   
`;

export const Header = styled.div`
    ${(background) => css`
    ${background}
    width: 980px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    `};
    
    
    
    
`;
export const Titulo = styled.div`
    ${(color) => css`
    ${color}
    h1{
        font-size: 30px;
        transition: color 0.4s ease 0s;
    }
    p{
        font-size: 14px;
        transition: color 0.4s ease 0s;
    }
    `}
    
`;
