import styled from "styled-components";

export const ContainerContato= styled.div`
        width: 980px;
        margin-left: 20%;
        height: 60vh;
        
`;

export const Titulo = styled.h2 `
        margin-top: 2em;
        color: #E33F0E;
        width: 100%;
        text-align: center;
`;

export const ContainerForms = styled.div`
        display: flex;
        justify-content: space-between;
        height: 100%;
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