import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: 'Default' } }
export const Success: Story = { args: { children: 'Active',   variant: 'success' } }
export const Warning: Story = { args: { children: 'Pending',  variant: 'warning' } }
export const Error:   Story = { args: { children: 'Failed',   variant: 'error' } }
export const Info:    Story = { args: { children: 'Info',     variant: 'info' } }

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge>Default</Badge>
      <Badge variant='success'>Active</Badge>
      <Badge variant='warning'>Pending</Badge>
      <Badge variant='error'>Failed</Badge>
      <Badge variant='info'>Info</Badge>
    </div>
  ),
}