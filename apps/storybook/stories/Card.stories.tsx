import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  Button,
} from '@ensofinance/ui'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'ghost', 'filled'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'default', 'lg', 'xl'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', '2xl', 'full', 'auto'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'default',
    size: 'auto',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Crypto Transfer</CardTitle>
        <CardDescription>No Limit - Instant</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Transfer cryptocurrency instantly with no limits. Fast, secure, and
          reliable transactions.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Transfer Now</Button>
      </CardFooter>
    </Card>
  ),
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Connect Exchange</CardTitle>
        <CardDescription>No Limit - 2 min</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Connect your exchange account for seamless trading and portfolio
          management.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
        <Button variant="outline" size="sm">
          Connect
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Deposit with Card</CardTitle>
        <CardDescription>$10,000 limit - 5 min</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Deposit funds using your credit or debit card. Quick and secure
          processing.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex space-x-2">
          <div className="text-lg font-bold">VISA</div>
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
        <Button variant="primary" size="sm">
          Deposit
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>View your recent activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>BTC Transfer</span>
            <span className="text-green-600">+0.0025 BTC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>ETH Purchase</span>
            <span className="text-red-600">-$150.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
        <CardDescription>Your current balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">$12,345.67</div>
          <div className="text-sm text-green-600">+2.5% today</div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const PaymentMethods: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Card variant="default">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <CardTitle className="text-base">Crypto Transfer</CardTitle>
            <CardDescription className="text-sm">
              No Limit - Instant
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            <span className="text-gray-400">→</span>
          </div>
        </CardContent>
      </Card>

      <Card variant="default">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <CardTitle className="text-base">Connect Exchange</CardTitle>
            <CardDescription className="text-sm">
              No Limit - 2 min
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
            <span className="text-gray-400">→</span>
          </div>
        </CardContent>
      </Card>

      <Card variant="default">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <CardTitle className="text-base">Deposit with card</CardTitle>
            <CardDescription className="text-sm">
              $10,000 limit - 5 min
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-600">VISA</span>
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-400">→</span>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Basic card with subtle shadow and border.
          </p>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Enhanced shadow variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Card with elevated shadow for emphasis.
          </p>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>Strong border variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Card with prominent border styling.
          </p>
        </CardContent>
      </Card>

      <Card variant="ghost">
        <CardHeader>
          <CardTitle>Ghost Card</CardTitle>
          <CardDescription>Transparent variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Minimal card with transparent background.
          </p>
        </CardContent>
      </Card>

      <Card variant="filled">
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>Background filled variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Card with subtle background fill.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Card size="sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>Compact size</CardDescription>
        </CardHeader>
      </Card>

      <Card size="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard size for most use cases</CardDescription>
        </CardHeader>
      </Card>

      <Card size="lg">
        <CardHeader>
          <CardTitle>Large Card</CardTitle>
          <CardDescription>Larger size for more content</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}
