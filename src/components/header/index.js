import React, { useState } from 'react'
import { UseBackgroundContext } from '../../hook/useBackground'
import Nav from '../Nav'
import * as Styled from './style'
const Header = () => {
  const {color,backgroundHeader} = UseBackgroundContext()
  const [menu, setMenu] = useState(false)

  const MenuAberto= ()=>{
      setMenu((s) => !s)
  }
  
  return (
    <Styled.ContainerHeader background={backgroundHeader}>
      <Styled.Menuimg src='/icons/menu.svg' onClick={MenuAberto}/>
    <Styled.Header background={backgroundHeader}>
        <Styled.Titulo color={color}>
            <h1>
                Osvaldo Soares
            </h1>
            <p>
                Desenvolvedor Junior, Juazeiro do Norte - CE
            </p>
        </Styled.Titulo>
        <Nav abrir={menu} />    
        
        </Styled.Header>
    </Styled.ContainerHeader>
  )
}

export default Header