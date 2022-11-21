import styled, { css } from "styled-components";

export const ContainerCurriculo = styled.div`
    display: flex;
    

    margin-top: 4em;
    margin-left: 20%;
    animation: fromLeft 0.8s backwards;
    

    @keyframes fromLeft {
        from{
            opacity: 0;
            transform: translateX(200px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
export const DivImg = styled.div`
 
  
  img{
    width: 600px;
    height: 450px;
    z-index: 0;
    }
`;
export const DivSobre = styled.div`
      width: 600px;
      height: 450px;
      background-color: transparent;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 27%;
      :hover{
      background-color: rgba(0, 0, 0, 0.566);
      
      button{
        visibility: visible;
        border-radius: 50px;
        border:1px solid white;
        width: 100px;
        height: 30px;
        background-color: transparent;
        color: white;
        
      }
      button:hover{
        background-color: white;
        color: #000;
        transition: all ease 0.5s;
      }
      }
      button{
        visibility: hidden;
      }
     
     
`;
export const BodyCurriculo = styled.div`
    ${(background) => css`
      ${background}
      width: 980px;
      height: 450px;
      display: flex;
      
    `}
    
`;

export const DivText = styled.div`
    ${(colorCurriculo) => css`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 60%;
    margin-left: 2em;
    margin-top: 4em;
    h2{
      transition: color ease 0.4s;
      ${colorCurriculo}
        font-weight: 400;
        margin-top: 1em;
    }
    p{
      width: 80%;
      transition: color ease 0.4s;
      margin-top: 1em;
      text-align:justify;

    }
    a{
      text-decoration: none;
    }
    `}
`;

export const Linhaseparacao = styled.div`
   margin: 0.5em 0 0 0;
    width: 50px;
    border: 2px solid #E33F0E;
`;
