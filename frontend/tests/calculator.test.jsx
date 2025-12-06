/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { Add, Subtract, Multiply } from '../src/Calculator'

test('1 + 2 = 3', () => {
  
  render(<Add a={1} b={2} />)

  const element = screen.getByText('1+2=3')
  expect(element).toBeDefined()
})

test('2 - 1 = 1', () => {
  render(<Subtract a={2} b={1} />)

  const element = screen.getByText('2-1=1')
  expect(element).toBeDefined()
})

test('2 * 3 = 6', () => {
  render(<Multiply a={2} b={3} />)

  const element = screen.getByText('2*3=6')
  expect(element).toBeDefined()
})