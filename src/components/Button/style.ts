import styled from "styled-components";

interface ButtonWrapperProps{
    width: string
    height: string
    bgColor: string
    color: string
    radius: string
    
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.gray500};
    color: ${props => props.theme.colors.gray300}; 

    width:  ${props => props.width};
    height: ${props => props.height};
    
    border: none;    
    border-radius:  ${props => props.radius};

    :hover{
        color: ${props => props.theme.colors.blue300};
        cursor: pointer;
    }
`