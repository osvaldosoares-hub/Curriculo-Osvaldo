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
            <p style={{color:color}}>Sou desenvolvedor há 3 anos, atualmente trabalhei em uma empresa de Manaus, a <a href='https://fermen.to/'>Fermen.to Innovation Lab</a> de Agosto de 2022 ate Fevereiro de 2023.  
Também desenvolvo para a Empresa Júnior de Ciências da Computação da UFCA - campus Juazeiro do Norte.
Além disso, já fui Monitor da disciplina de Estrutura de Dados em C na UFCA.</p>
            <h2>Tecnologias:</h2>
            <p style={{color:color}}>Html, CSS, Javascript, React.js, React e Next com Typescript, node.js, C, Java</p>
            <p style={{color:color}}>Trabalho: Remoto ou Presencial</p>
            <p style={{color:color}}>Residência: Juazeiro do Norte</p>
          </Styled.DivText>
       </Styled.BodyCurriculo>
       <Styled.SectionExperience>
       <Styled.DivSectionText>
        <h2>Experiencia na Area</h2>
       <ul>
          <li>Empresa Gir Gerenciamento Inteligente Resíduos Desenvolvedor Front-End (2023-fevereiro / Atualmente)</li>
          <li>Empresa Ferment.io Desenvolvedor React jr /PJ (2022-agosto / 2023-Fevereiro)</li>
          <li>Estágio em Desenvolvimento pelo grupo Programa EFICIÊCIA (2022 -junho / 2022 - agosto)</li>
          <li>Empresa Junior Calango.IO da UFCA, Desenvolvedor Front-end; (2021 - novembro / atualmente)</li>
          <li>Monitoria em Estruturas de Dados I (2022 - Abril / 2022 julho)</li>
          <li>Estagio na DTI da Universidade UniLeão (2021- agosto /2022- fevereiro)</li>
        </ul> 
        
       </Styled.DivSectionText>
       </Styled.SectionExperience>
    
    </Styled.ContainerCurriculo>
  );
}

export default Curriculo;
