import styled, { css } from 'styled-components'

const variants = {
  primary : {
    color: '#fff'
  },
  success: {
    color: '#333'
  },
  transparent: {
    color: '#f70'
  }
} as const

type StyledButtonProps = {
  variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({variant}) => {
    const style = variants[variant]
    return css`
      color: ${style.color};
    `
  }}
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`