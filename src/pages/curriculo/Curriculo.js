import { UseBackgroundContext } from '../../hook/useBackground';
import * as Styled from './style'

function Curriculo() {
  
  const {color,colorCurriculo,backgroundHeader} = UseBackgroundContext()

  return (
    <Styled.ContainerCurriculo>
       <Styled.BodyCurriculo background={backgroundHeader}>
          <Styled.DivImg >
            <img  src='/icons/site.png' alt='' />
            <Styled.DivSobre>
              <a href='https://meu-site-osvaldo-soares.vercel.app/'><button>Ver</button></a>
            </Styled.DivSobre>
          </Styled.DivImg>

          <Styled.DivText color={colorCurriculo} >
            <h2>Quem sou </h2>
            <Styled.Linhaseparacao >
            </Styled.Linhaseparacao>
            <p style={{color:color}}>Sou desenvolvedor há 2 anos, atualmente trabalho em uma empresa de Manaus, a <a href='https://fermen.to/'>Fermen.to Innovation Lab</a> desde Setembro. 
Também desenvolvo para a Empresa Júnior de Ciências da Computação da UFCA - campus Juazeiro do Norte.
Além disso, já fui Monitor da disciplina de Estrutura de Dados em C na UFCA.</p>
            <h2>Tecnologias:</h2>
            <p style={{color:color}}>Html, CSS, Javascript, React.js, React com Typescript, node.js, C, Java</p>
            <p style={{color:color}}>Trabalho: Remoto ou Presencial</p>
            <p style={{color:color}}>Residência: Juazeiro do Norte</p>
          </Styled.DivText>
       </Styled.BodyCurriculo>
     
    </Styled.ContainerCurriculo>
  );
}

export default Curriculo;
