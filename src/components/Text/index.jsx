import React from 'react'
import { TextStyled } from './styles'


export const Text = ({ children, variant }) => {
  return (
    <TextStyled variant={variant}>
      {children}
    </TextStyled>
  )
}
