import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../../components/StyledButton'
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import MDXDocument from './index.mdx'
import { linkTo } from '@storybook/addon-links'
import styled, { css } from 'styled-components'

const TextLink = styled.span`
  color: #2990d0;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

export default {
  title: 'StyledButton',
  component: StyledButton,
  // argTypes: {
  //   onClick: {
  //     action: 'clicked',
  //   },
  // },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Primary: {count}
    </StyledButton>
  )
}
export const Success = (props) => {
  return (
    <>
      <StyledButton {...props} variant="success">
        Success
      </StyledButton>
      <br />
      <br />
      <TextLink onClick={linkTo('StyledButton', 'Transparent')}>
        Transparent へ
      </TextLink>
    </>
  )
}
export const Transparent = (props) => {
  return (
    <StyledButton
      {...props}
      variant="transparent"
      onClick={linkTo('StyledButton', 'Success')}
    >
      Transparent
    </StyledButton>
  )
}
