/**
 * This file has all the basic components
 * 07/02/2023
 * @author Pedro Foltram @pedroaugustofolb@gmail.com
 */

import styled from "styled-components";

interface ContainerProps {
    flex?: boolean,
    center?: boolean,
    column?: boolean,
    grid?: boolean,
    width?: string,
    height?: string,
    background?: string,
    margin?: string,
    padding?: string,
    overflow?: string,
}
export const BasicSection = styled.section<ContainerProps>`
${props => props.flex && `
    display: flex;
`}

${props => props.center && `
    align-items: center;
    justify-content: center;
`}

${props => props.column && `
    flex-direction: column;
`}

${props => props.grid && `
    display: grid;
`}

${props => props.width && `
    width: ${props.width};
`}

${props => props.height && `
    height: ${props.height};
`}

${props => props.background && `
    background: ${props.background};
`}

${props => props.margin && `
    margin: ${props.margin};
`}

${props => props.padding && `
    padding: ${props.padding};
`}

${props => props.overflow && `
    overflow: ${props.overflow};
`}
`

export const Container = styled.div<ContainerProps>`
${props => props.flex && `
    display: flex;
`}

${props => props.center && `
    align-items: center;
    justify-content: center;
`}

${props => props.column && `
    flex-direction: column;
`}

${props => props.grid && `
    display: grid;
`}

${props => props.width && `
    width: ${props.width};
`}

${props => props.height && `
    height: ${props.height};
`}

${props => props.background && `
    background: ${props.background};
`}

${props => props.margin && `
    margin: ${props.margin};
`}

${props => props.padding && `
    padding: ${props.padding};
`}


`

interface IconProps {
    icon?: string,
    href: string,
    color?: string,
    hover?: string,
    font?: string,
    children?: any,
}

interface StyleIcon {
    color?: string,
    hover?: string,
    font?: string,
}

const StyledIcon = styled.i<StyleIcon>`
hover{
    ${props => props.hover && `${props.hover};`}
}

${props => props.font && `font: ${props.font};`}
${props => props.color && `color: ${props.color};`}

`

const StyledA = styled.a<StyleIcon>`
hover{
    ${props => props.hover && `${props.hover};`}
}
`
export const LinkedIcon = ({href, icon, color, hover, font, children}: IconProps) => {
    return (
        <StyledA href={href} style={{ fontSize: `${font}`}} hover={hover}>
            <StyledIcon className={`${icon}`} color={color} font={font} hover={hover} />
            {children}
        </StyledA>

    )
}