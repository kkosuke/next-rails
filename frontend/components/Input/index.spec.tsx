import {
  render,
  screen,
  RenderResult,
  fireEvent,
  getByRole,
} from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })
  afterEach(() => {
    renderResult.unmount()
  })

  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    // input の値が空かどうか
    expect(inputNode).toHaveValue('')
  })

  it('should show input text', () => {
    const inputText = 'test input text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })
    // input の値が、指定通りあるか
    expect(inputNode).toHaveValue(inputText)
  })

  it('should reset when user clicks button', () => {
    const inputText = 'test input text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement
    fireEvent.click(buttonNode)
    // リセットボタンのテスト
    expect(inputNode).toHaveValue('')
  })
})
