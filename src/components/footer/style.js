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
    width: 960px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: color 0.4s ease 0s;
    @media (max-width: 784px) {
        p{
            width: 50%;
            font-size: 12px;
        }
    }
    `};
`;
export const DivImg = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
    @media (max-width: 784px){
        width: 40%;
    }

`;