import React from 'react'
import { UseBackgroundContext } from '../../hook/useBackground'
import * as Styled from './style'

const Footer = () => {

const {color,backgroundHeader} = UseBackgroundContext()
  return (
    <Styled.ContainerFooter background={backgroundHeader}>
        <Styled.Footer color={color}>
            <p>&copy;2022 Criado por Osvaldo Soares</p>
            <Styled.DivImg>
                <a href='https://github.com/osvaldosoares-hub'><img src='/icons/github.svg' alt=''/></a>
                <a href='https://www.instagram.com/osvaldo_soa/'><img src='/icons/instagram.svg' alt=''/></a>
                <a href='https://www.linkedin.com/in/osvaldo-soa-4264211b5/'><img src='/icons/linkedin.svg' alt=''/></a>
            </Styled.DivImg>
        </Styled.Footer>
        
    </Styled.ContainerFooter>
  )
}

export default Footer