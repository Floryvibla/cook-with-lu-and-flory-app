import React from "react";
import { ButtonStyled } from "./style";

export const Button = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};
