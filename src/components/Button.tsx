import React from 'react'
import styled from 'styled-components'

export enum ButtonType {
    Number,
    Operation
}

interface Props {
    type?: ButtonType
    label: string
    position?: [x: number, y: number]
    width?: number
    height?: number
}

const StyledButton = styled.button`
  background-color: #727171;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 24px;
`

const Button: React.FC<Props> = ({ label, position, width, height, type = ButtonType.Operation }) => {

    const styles: React.CSSProperties = {}

    if (position) {
        styles.gridColumnStart = position[0] + 1
        styles.gridRowStart = position[1] + 1
    }

    if(width){
        styles.gridColumnEnd = `span ${width}`
    }

    if(height){
        styles.gridRowEnd = `span ${height}`
    }

    if(type === ButtonType.Number){
        styles.color = '#000';
        styles.background = '#e48900'
    }

    return (
        <StyledButton style={styles}>{label}</StyledButton>
    )
}

export default Button