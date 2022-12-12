import { useState } from 'react';
import * as Styled from './style'

function Contato() {
  const [User,setUser] = useState({
    name:'',
    sobrenome:'',
    email:'',
    comentario:'',
  }) 
  const [type,setType]= useState({
      status:'',
      mensseger:''
  })
  const [nameerror,setNameError] = useState(true)
  const [sobrenomeerror, setSobreError]= useState(true)
  const [emailerror, setemailError]= useState(true)
  const valueInput = e => setUser({ ...User, [e.target.name]: e.target.value });
  

  const HandleSubmit = (e)=>{
   
    e.preventDefault()
    if(User.name !== '' && User.sobrenome !== ''  && User.email !== ''){
      setType({
        status:'sucess',
        mensseger:'mensagem enviada com sucesso'
      })
      setUser({
        name:'',
        sobrenome:'',
        email:'',
        comentario:'',
      })
      setNameError(true)
      setSobreError(true)
      setemailError(true)
    }else{
      setType({
        status:'error',
        mensseger:'erro em enviar a mensagem, algum campo não foi confirmado'
      })
      setNameError(true)
      setSobreError(true)
      setemailError(true)
      if(User.name==='') setNameError(false)
      if(User.sobrenome === '') setSobreError(false)
      if(User.email === '') setemailError(false)
    }
    
  }
  
 
 
  
  return (
    <Styled.ContainerContato>
      


       <Styled.ContainerForms>
       <Styled.Titulo2>
        Quer contratar meu serviço, ou quer fazer um projeto pra sua empresa ou seu negocio, fale comigo
       </Styled.Titulo2>
       
       <Styled.Forms onSubmit={HandleSubmit}>
        {type.status === 'sucess' ?<Styled.MensagemEnviada color='green'>{type.mensseger}</Styled.MensagemEnviada>: <Styled.MensagemEnviada color='red' style={{left:'52%'}}>{type.mensseger}</Styled.MensagemEnviada>}
        <Styled.Label>
          {nameerror ? <></>: <p>nome não foi preenchido</p>}
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            value={User.name}
            placeholder="Seu Nome"
            onChange={valueInput}
            
          />
        </Styled.Label>
        <Styled.Label>
          {sobrenomeerror ? <></>: <p>sobrenome não foi preenchido</p>}
          <span>Sobrenome:</span>
          <input
            type="text"
            name="sobrenome"
            value={User.sobrenome}
            placeholder="Seu Sobrenome"
            onChange={valueInput}
            
          />
        </Styled.Label>
        <Styled.Label>
        {emailerror ? <></>: <p>email não foi preenchido</p>}
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            value={User.email}
            placeholder="E-mail do usuário"
            onChange={valueInput}
           
          />
          

        </Styled.Label>
        <Styled.Label>
          <span>Mensagem:</span>
          <textarea
            type="messeger"
            name="comentario"
            value={User.comentario}
            placeholder="Mensagem"
            onChange={valueInput}
            
          />
        </Styled.Label>
       <Styled.DivButton>

       <button className="btn" type="submit">Enviar</button>
       </Styled.DivButton>
        
         
        
      </Styled.Forms>
      
      </Styled.ContainerForms>
      <Styled.Contato>
        <h3>Você pode falar tambem pelo whatsapp</h3>
          <Styled.ButtonWhats>
            <img src='/icons/whatsapp.png' alt='whatsapp'/>
            <p>whatsapp</p>
          </Styled.ButtonWhats>
      </Styled.Contato>
       
    </Styled.ContainerContato>
  );
}

export default Contato;
