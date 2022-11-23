import { useEffect, useState } from 'react';
import { Perfil } from '../../fetch/perfil';
import * as Styled from './style'

function Home() {
  const [perfil, setPerfil] = useState()
  useEffect(()=>{
    const loadPerfil = async() =>{
      
        setPerfil(await Perfil())
      
    }
    loadPerfil()
  },[])
  
  return (
    <Styled.ContainerBody animation="proximo">
       <img src={perfil?.avatar_url} alt=''/>
        <Styled.SectionBody>
          <Styled.DivText>
            <h2>Projetos Recentes</h2>
            <Styled.Linhaseparacao>
            </Styled.Linhaseparacao>
            <p>Trabalho em uma Empresa que presta serviços à Uninassau. Fiz uma página como se fosse a Netflix, para os alunos acessarem as vídeo aulas das disciplinas.  
Atualmente também faço parte e desenvolvo projetos na Empresa Júnior de Ciências da Computação da UFCA (Universidade Federal do Cariri).
</p>
          </Styled.DivText>
          <Styled.DivText>
            <h2>Proximos Projetos </h2>
            <Styled.Linhaseparacao>
            </Styled.Linhaseparacao>
            <p>Fazer um site para um empresa de São Paulo; 
Implementar serviços para um projeto da Empresa EuNoCiclo, para ajudar a limpeza da cidade Juazeiro do Norte.</p>
          </Styled.DivText>
        </Styled.SectionBody>
    </Styled.ContainerBody>
  );
}

export default Home;
