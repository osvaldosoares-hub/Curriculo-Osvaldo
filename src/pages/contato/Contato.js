
import * as Styled from './style'

function Contato() {
  return (
    <Styled.ContainerContato>
      


       <Styled.ContainerForms>
       <Styled.Titulo2>
        Quer contratar meu serviço, ou quer fazer um projeto pra sua empresa ou seu negocio, fale comigo
       </Styled.Titulo2>
       <Styled.Contato>
        <h3>Você pode falar tambem pelo whatsapp</h3>
        <a href='http://api.whatsapp.com/send?1=pt_BR&phone=993443238'>
          <Styled.ButtonWhats>
            
            <img src='/icons/whatsapp.png' alt='whatsapp'/>
            <p>whatsapp</p>
           
          </Styled.ButtonWhats>
          </a>
      </Styled.Contato>
     
      
      </Styled.ContainerForms>
     
       
    </Styled.ContainerContato>
  );
}

export default Contato;
