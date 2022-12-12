import styled, { css } from "styled-components";

export const ContainerContato= styled.div`
        width: 980px;
        margin-left: 20%;
        
        
        
`;

export const Titulo = styled.h2 `
        margin-top: 2em;
        color: #E33F0E;
        width: 100%;
        text-align: center;
`;
export const Titulo2 = styled.p `
        margin-top: 2em;
        font-size: 20px;
        font-weight: 500;
        
        display: flex;
        align-items:center;
        color: #E33F0E;
        width: 60%;
        text-align: justify;
        height: 50%;
`;

export const ContainerForms = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6em;
        height: 55vh;
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
`;

export const Forms = styled.form`
        display: flex;
        flex-wrap: wrap;
        margin-top: 5em;
       justify-content:space-between;
        align-items: center;
        width: 80%;
        height: 70%;
`;
export const DivButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        
`;
export const MensagemEnviada = styled.h3`
    ${(color) => css`
    position: absolute;
    top: 25%;
    left: 57%;
    ${color}
    animation: titulo 1s backwards;
        @keyframes titulo {
        from{
            opacity: 0;
            
        }
        to{
            opacity: 1;
            
        }
    }
    
    
   
    `};
    
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0 1em 1em 1em;
    p{
        animation: aparecendo 1s backwards;
        width: 100%;
        color: red;
        @keyframes aparecendo {
        from{
            opacity: 0;
            
        }
        to{
            opacity: 1;
            
        }
    }
        
    }
    input{
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 0.5em;
        outline: none;
    }
    textarea{
        width: 200px;
        height: 70px;
        padding: 0.5em;
    }
    
`;
export const Contato = styled.div`
   text-align: center;
   

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