import styled from "styled-components";

export const ContainerContato= styled.div`
       
        margin-left: 20%;
        
`;


export const Titulo2 = styled.p `
        margin-top: 2em;
        font-size: 20px;
        font-weight: 500;
        
        display: flex;
        align-items:center;
        color: #E33F0E;
        
        text-align: justify;
        height: 50%;
        @media (max-width:784px) {
    width: 100%;
   }
`;

export const ContainerForms = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6em;
        height: 65vh;
        width: 80%;
        animation: fromleft 1s backwards; 
    @keyframes fromleft {
        from{
            opacity: 0;
            transform: translateX(100px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
        img{
            width: 24px;
            height: 24px;
           
        }
        @media (max-width:784px) {
            flex-direction: column;
            justify-content: center;
        }

`;
export const Contato = styled.div`
   text-align: center;
   width: 70%;
   a{text-decoration:none;}
   @media (max-width:784px) {
    width: 100%;
   }


`;
export const ButtonWhats = styled.button`
    border: none;
    background-color: #128C7E;
    display: flex;
    justify-content: space-between;
    margin: 1em auto;

    align-items: center;
    border-radius: 10px;
    color: white;
    width: 100px;
    padding: 0.5em;
    :hover{
        background-color: #075E54;
    }

`;