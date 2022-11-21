import React from 'react'
import { UseBackgroundContext } from '../../hook/useBackground'
import Nav from '../Nav'
import * as Styled from './style'
const Header = () => {
  const {color,backgroundHeader} = UseBackgroundContext()
  
  return (
    <Styled.ContainerHeader background={backgroundHeader}>

    <Styled.Header background={backgroundHeader}>
        <Styled.Titulo color={color}>
            <h1>
                Osvaldo Soares
            </h1>
            <p>
                Desenvolvedor Junior, Juazeiro do Norte - CE
            </p>
        </Styled.Titulo>
        <Nav/>    
        
        </Styled.Header>

    </Styled.ContainerHeader>
  )
}

export default Header