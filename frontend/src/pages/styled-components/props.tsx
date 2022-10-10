import { NextPage} from 'next'
import styled from 'styled-components'

type ButtonProps = {
  color: string,
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props)=> props.color};

  box-sizing: border-box;
  font-size: 16px;
  margin: 10px;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`

const Page: NextPage = () => {
  return (
    <>
      <Button backgroundColor='transparent' color='#333'>
        Hello
      </Button>
      <Button backgroundColor='#f70' color='#fff'>
        World
      </Button>
    </>
  )
}

export default Page