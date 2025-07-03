import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ensofinance/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'light',
        'primary',
        'outline',
        'ghost',
        'destructive',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Continue',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Continue',
  },
}

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Continue',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Continue',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Continue',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-white border-2 border-dashed border-purple-300 rounded-lg p-6">
        <div className="space-y-4">
          <Button variant="default" className="w-full">
            Continue
          </Button>
          <Button variant="secondary" className="w-full">
            Continue
          </Button>
          <Button variant="light" className="w-full">
            Continue
          </Button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Variants
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Button Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
    </div>
  ),
}
