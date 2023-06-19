import styled from "styled-components";

function handleBackground({ variant }) {
  if (variant === "transparentbutton") {
    return "transparent";
  } else {
    return "#26ae89";
  }
}

function handleFontColor({ variant }) {
  if (variant === "transparentbutton") {
    return "#ffffff";
  } else {
    return "#c6f4e8";
  }
}

function handleBorderColor({ variant }) {
  if (variant === "transparentbutton") {
    return "#26ae89";
  } else {
    return "transparent";
  }
}

export const ButtonStyled = styled.div`
  background: ${handleBackground};
  width: 250px;
  height: 45px;
  border-radius: 20px;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  color: ${handleFontColor};
  display: flex;
  justify-content: center;
  border: 1px solid ${handleBorderColor};
`;
