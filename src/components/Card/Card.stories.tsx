import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Card>

export const Simple: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>A simple card with a title and description.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className='text-sm text-gray-600'>Card body content goes here.</p>
      </Card.Content>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Confirm Action</Card.Title>
        <Card.Description>Are you sure you want to delete this item?</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button variant='destructive' size='sm'>Delete</Button>
        <Button variant='outline' size='sm'>Cancel</Button>
      </Card.Footer>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <Card.Title>Pro Plan</Card.Title>
          <Badge variant='success'>Popular</Badge>
        </div>
        <Card.Description>Everything in Free, plus unlimited projects.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p className='text-3xl font-bold text-gray-900'>$29<span className='text-sm font-normal text-gray-500'>/mo</span></p>
      </Card.Content>
      <Card.Footer>
        <Button className='w-full'>Get started</Button>
      </Card.Footer>
    </Card>
  ),
}