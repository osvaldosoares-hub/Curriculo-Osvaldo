import styled, { css } from "styled-components";


export const ContainerFooter = styled.div`
    ${(background) => css`
    ${background}
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 4.5em;
    height: 50px;
    
    `};
   
`;
export const Footer = styled.div`
     ${(color) => css`
    ${color}
    width: 980px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: color 0.4s ease 0s;
    `};
`;
export const DivImg = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
`;