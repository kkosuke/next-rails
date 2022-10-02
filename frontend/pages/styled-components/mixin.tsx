import { NextPage} from 'next'
import Link, {LinkProps} from 'next/link'
import styled, {css} from 'styled-components'


// props
type ButtonProps = {
  color?: string,
  backgroundColor?: string
}
type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string,
  children: React.ReactNode
}
const BaseLink = (props: BaseLinkProps)=>{
  const { className, children, ...rest} = props
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  )
}
const StyledLink = styled(BaseLink)`
  color: #f70;
  font-size: 16px;
`

// bxz
const bxzMixin = css`
  box-sizing: border-box;
`
// mixin
const buttonMixin = css`
  ${bxzMixin}
  color: #000;
  font-size: 16px;
  margin: 10px;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #000;
`
// props
// - styled.X の X は、タグ名が入る
// - だからpropsの指定ができる
const StyledButton = styled.button<ButtonProps>`
  ${buttonMixin}
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border-color: ${(props)=> props.color};
`
const Paragraph = styled.p`
  ${bxzMixin}
  margin: 0;
  display: inline-block;
  padding: 10px;
`
// style継承して タグとして使うために styled
const Paragraph2 = styled(Paragraph)`
  padding: 8px 12px;
`


const Page: NextPage = () => {
  return (
    <>
      <StyledButton backgroundColor='transparent' color='#333'>
        Hello
      </StyledButton>
      <StyledButton backgroundColor='#f70' color='#fff'>
        World
      </StyledButton>
      <StyledButton>
        !!
      </StyledButton>
      <Paragraph2>
        padding!!
      </Paragraph2>
      <Paragraph2 as="a" href="/">
        as a tag
      </Paragraph2>
      <StyledLink href="/" className="testClassName">
        Go to /
      </StyledLink>
    </>
  )
}

export default Page