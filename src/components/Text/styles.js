import styled from 'styled-components'


function handleSize({variant}) {
    if (variant == 'title') {
        return 28
    } 
    else if (variant == 'subtitle') {
        return 20
    }else {
       return 16 
    }
}

function handleFontWeight({variant}) {
    if (variant == 'title') {
        return 500
    } 
    else if (variant == 'subtitle') {
        return 400
    }else {
       return 300 
    }
}

export const TextStyled = styled.span`
    font-size: ${handleSize}px;
    font-weight: ${handleFontWeight};
    display: block;

`