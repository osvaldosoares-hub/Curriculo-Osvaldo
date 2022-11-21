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
export const Menuimg = styled.img`
   visibility: hidden;
   opacity: 0;
   width: 0;
   height: 0;
    @media(max-width: 786px){
        visibility: visible;
        position: relative;
        opacity: 1;
        width: 24px;
        height: 24px;
        z-index: 4;
        top: 0px;
        left:95%;
    }
`;

export const Header = styled.div`
    ${(background) => css`
    ${background}
    position: relative;
    width: 980px;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media(max-width: 786px){
        width: 100%;
        margin:0;
        justify-content: center;
    }
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
