import styled from "styled-components";

export const ContainerContato= styled.div`
        width: 980px;
        margin-left: 20%;
        height: 60vh;
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
        gap: 8em;
        height: 100%;
`;

export const Forms = styled.form`
        display: flex;
        flex-wrap: wrap;
        margin-top: 5em;
       justify-content:space-between;
        align-items: center;
        width: 70%;
        height: 70%;
`;
export const DivButton = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0 1em 1em 1em;
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