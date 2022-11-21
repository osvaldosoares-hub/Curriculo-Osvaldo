import React from 'react'
import { Link } from 'react-router-dom'
import { UseBackgroundContext } from '../../hook/useBackground'
import Switcher from '../Switcher'
import * as Styled from './style'
const Nav = () => {
  const {color} = UseBackgroundContext()
  return (
    <Styled.ContainerNav>
      <Switcher/>
      <Styled.Nav color={color}>
        <Link to='/'>Home</Link>
        <Link to='/curriculo'>Curriculo</Link>
        <Link to='/portifolio'>Portifolio</Link>
        <Link to='/contato'>Contato</Link>
      </Styled.Nav>
    </Styled.ContainerNav>
  )
}

export default Nav