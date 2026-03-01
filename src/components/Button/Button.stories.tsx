import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
  argTypes: {
    variant: { control: 'select' },
    size:    { control: 'select' },
    isLoading: { control: 'boolean' },
    disabled:  { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Click me', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Click me', variant: 'secondary' },
}

export const Outline: Story = {
  args: { children: 'Click me', variant: 'outline' },
}

export const Ghost: Story = {
  args: { children: 'Click me', variant: 'ghost' },
}

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
}

export const Loading: Story = {
  args: { children: 'Saving...', isLoading: true },
}

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}