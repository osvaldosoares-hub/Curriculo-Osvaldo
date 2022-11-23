import styled from "styled-components";

export const ContainerBody = styled.div`
    
    display: flex;
   
    margin-top: 4em;
    margin-left: 20%;
    animation: fromTop 0.8s backwards;
    

    @keyframes fromTop {
        from{
            opacity: 0;
            transform: translateY(-30px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    img{
        border-radius: 50%;
    }
    @media (max-width:784px) {
        margin:3em;
        flex-direction: column;
        align-items: center;
        
        img{
            border-radius: 50%;
            width: 200px;
            height: 200px;
        }
    }
        
    
`;

export const SectionBody = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
    align-items: center;
    width: 30%;
    @media (max-width:784px) {
        width: 100%;
    }

`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    justify-content: space-around;
    
    height: 30%;
    margin-bottom: 2em;
    h2{
        
        color:#E33F0E;
        font-weight: 500;
        
    }
    p{
        color: #363636;
        text-align:justify;
    }
`;
export const Linhaseparacao = styled.div`
    margin: 0.5em 0 0.5em 0;
    width: 50px;
    border: 2px solid #E33F0E;
`;
