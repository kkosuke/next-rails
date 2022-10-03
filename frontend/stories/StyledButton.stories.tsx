import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

export default {
  title: 'StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}
export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}
export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}