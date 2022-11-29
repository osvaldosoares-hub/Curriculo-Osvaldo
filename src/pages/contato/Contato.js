import * as Styled from './style'

function Contato() {
  return (
    <Styled.ContainerContato>
       <Styled.Titulo>
        Contate me
       </Styled.Titulo>
       <Styled.ContainerForms>
       <Styled.Titulo>
        Contate me
       </Styled.Titulo>
       <Styled.Forms onSubmit={''}>
        <Styled.Label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Seu Nome"
            //onChange={(e) => setDisplayName(e.target.value)}
            value={''}
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
            value={''}
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
            //value={email}
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
            //value={email}
          />
          

        </Styled.Label>
       <Styled.DivButton>

       <button className="btn">Entrar</button>
       </Styled.DivButton>
        
         
        
      </Styled.Forms>
      </Styled.ContainerForms>
       
    </Styled.ContainerContato>
  );
}

export default Contato;
