/**
 * This file has all the buttons components
 * 08/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";

interface ButtonProps {
    ghost?: boolean,
    small?: boolean,
    medium?: boolean,
    width?: string,
    height?: string,
    borderColor?: string,
    primaryColor?: string,
    margin ?: string,

}

export const DefaultButton = styled.button<ButtonProps>`
border: 1px solid ${props => props.borderColor ? props.borderColor : '#32CD32'};
border-radius: 4px;
font-family: 'Rubik', sans-serif;
transition: .2s;

:hover{
    cursor: pointer;
}

${props => props.ghost ? `
    background-color: #ffffff;
    color: #14261C;
    opacity: 0.8;
    :hover {
        background-color: rgba(144, 238, 144, 0.1);
        color: #14261C;
        opacity: 1;
    }
    ` : `
    background-color: rgba(144, 238, 144, 0.7);
    color: #14261C;
    :hover {
        background-color: rgba(144, 238, 144, 1);
    }
    `

}

${props => props.medium && `
    min-width: 170px;
    text-transform: uppercase;
    height: 48px;
    padding: 4px 32px;
    font-size: 14px;
    font-weight:700;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    @media(max-width: 1126px){
        min-width: 100px;
        padding: 0 10px;
    }
`}

${props => props.width && `
    width: ${props.width};
`}

${props => props.height && `
    height: ${props.height};
`}

${props => props.margin && `
    margin: ${props.margin};
`}

`