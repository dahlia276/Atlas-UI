import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input placeholder='Type here' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('associates label with input correctly', () => {
    render(<Input label='Email' />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('shows error message and sets aria-invalid', () => {
    render(<Input label='Email' error='Invalid email' />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows helper text when no error', () => {
    render(<Input helperText='Must be 8 characters' />)
    expect(screen.getByText('Must be 8 characters')).toBeInTheDocument()
  })

  it('hides helper text when error is shown', () => {
    render(<Input helperText='Helper' error='Error message' />)
    expect(screen.queryByText('Helper')).not.toBeInTheDocument()
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('updates value when user types', async () => {
    const user = userEvent.setup()
    render(<Input label='Name' />)
    const input = screen.getByLabelText('Name')
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })
})