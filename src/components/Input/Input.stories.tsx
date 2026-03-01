import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    )
  ],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const WithLabel: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com', type: 'email' },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Must be 3-20 characters. Letters and numbers only.',
    placeholder: 'johndoe',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    error: 'Please enter a valid email address.',
    value: 'not-an-email',
    onChange: () => {},
  },
}

export const Required: Story = {
  args: { label: 'Full name', required: true, placeholder: 'Jane Doe' },
}

export const Disabled: Story = {
  args: { label: 'Read only field', value: 'Cannot edit this', disabled: true },
}