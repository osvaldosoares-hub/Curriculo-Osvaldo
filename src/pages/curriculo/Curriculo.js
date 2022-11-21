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
            <Styled.Linhaseparacao>
            </Styled.Linhaseparacao>
            <p style={{color:color}}>Sou desenvolvedor há 2 anos, atualmente trabalho em uma empresa de Manaus <a href='https://fermen.to/'>Fermen.to Innovation Lab</a> a 4 meses, Tambem desenvolvo para uma empresa junior da UFCA campos juazeiro do norte.<br/>Já fui Monitor de Estrutura de Dados em C</p>
            <h2>Tecnologias:</h2>
            <p style={{color:color}}>Html, CSS, Javascript, React.js, React com Typescript, node.js, C, Java</p>
          </Styled.DivText>
       </Styled.BodyCurriculo>
     
    </Styled.ContainerCurriculo>
  );
}

export default Curriculo;
