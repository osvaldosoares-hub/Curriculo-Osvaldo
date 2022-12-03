import * as Styled from './style'

function Contato() {
  return (
    <Styled.ContainerContato>
       <Styled.ContainerForms>
       <Styled.Titulo2>
        Quer contratar meu serviço, ou quer fazer um projeto pra sua empresa ou seu negocio, fale comigo
       </Styled.Titulo2>
       <Styled.Forms onSubmit={''}>
        <Styled.Label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Seu Nome"
            //onChange={(e) => setDisplayName(e.target.value)}
            
          />
        </Styled.Label>
        <Styled.Label>
          <span>Sobrenome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Seu Sobrenome"
            //onChange={(e) => setDisplayName(e.target.value)}
            
          />
        </Styled.Label>
        <Styled.Label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            //onChange={(e) => setEmail(e.target.value)}
           
          />
          

        </Styled.Label>
        <Styled.Label>
          <span>Mensagem:</span>
          <textarea
            type="messeger"
            name="email"
            required
            placeholder="Mensagem"
            //onChange={(e) => setEmail(e.target.value)}
            
          />
        </Styled.Label>
       <Styled.DivButton>

       <button className="btn">Enviar</button>
       </Styled.DivButton>
        
         
        
      </Styled.Forms>
      </Styled.ContainerForms>
       
    </Styled.ContainerContato>
  );
}

export default Contato;
