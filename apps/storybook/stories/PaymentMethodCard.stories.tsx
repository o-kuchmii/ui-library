import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { PaymentMethodCard } from '@ensofinance/ui'

const meta = {
  title: 'UI/PaymentMethodCard',
  component: PaymentMethodCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    showArrow: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof PaymentMethodCard>

export default meta
type Story = StoryObj<typeof meta>

const handleCardClick = (title: string) => {
  console.log(`Clicked on ${title}`)
}

// Payment Method Icon Components
const VisaIcon = () => (
  <img src="/assets/visa.svg" alt="Visa" className="w-8 h-8" />
)

const MastercardIcon = () => (
  <img src="/assets/mastercard.svg" alt="Mastercard" className="w-8 h-8" />
)

const CryptoIcon = () => (
  <img src="/assets/crypto.svg" alt="Crypto" className="w-6 h-6" />
)

const ExchangeIcon = () => (
  <img src="/assets/exchange.svg" alt="Exchange" className="w-6 h-6" />
)

const BankIcon = () => (
  <img src="/assets/bank.svg" alt="Bank" className="w-6 h-6" />
)

const CustomIcon = ({
  color = '#6B7280',
  text,
}: {
  color?: string
  text?: string
}) => (
  <div
    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
    style={{ backgroundColor: color }}
  >
    {text || 'C'}
  </div>
)

export const DepositWithCard: Story = {
  args: {
    title: 'Deposit with card',
    limit: '$10,000 limit',
    time: '5 min',
    paymentMethods: [
      <VisaIcon key="visa" />,
      <MastercardIcon key="mastercard" />,
    ],
    showArrow: true,
    variant: 'default',
    onClick: () => handleCardClick('Deposit with card'),
  },
}

export const CryptoTransfer: Story = {
  args: {
    title: 'Crypto Transfer',
    description: 'No Limit - Instant',
    paymentMethods: [<CryptoIcon key="crypto" />],
    showArrow: true,
    variant: 'default',
    onClick: () => handleCardClick('Crypto Transfer'),
  },
}

export const ConnectExchange: Story = {
  args: {
    title: 'Connect Exchange',
    description: 'No Limit - 2 min',
    paymentMethods: [<ExchangeIcon key="exchange" />],
    showArrow: true,
    variant: 'default',
    onClick: () => handleCardClick('Connect Exchange'),
  },
}

export const CustomPaymentMethod: Story = {
  args: {
    title: 'Bank Transfer',
    limit: '$50,000 limit',
    time: '1-3 business days',
    paymentMethods: [<BankIcon key="bank" />],
    showArrow: true,
    variant: 'default',
    onClick: () => handleCardClick('Bank Transfer'),
  },
}

export const DisabledCard: Story = {
  args: {
    title: 'Deposit with card',
    limit: '$10,000 limit',
    time: '5 min',
    paymentMethods: [
      <VisaIcon key="visa" />,
      <MastercardIcon key="mastercard" />,
    ],
    showArrow: true,
    variant: 'default',
    disabled: true,
    onClick: () => handleCardClick('Disabled card'),
  },
}

export const DisabledCrypto: Story = {
  args: {
    title: 'Crypto Transfer',
    description: 'Currently unavailable',
    paymentMethods: [<CryptoIcon key="crypto" />],
    showArrow: true,
    variant: 'default',
    disabled: true,
    onClick: () => handleCardClick('Disabled crypto'),
  },
}

export const MultiplePaymentMethods: Story = {
  args: {
    title: 'All Payment Methods',
    description: 'Choose your preferred method',
    paymentMethods: [
      <VisaIcon key="visa" />,
      <MastercardIcon key="mastercard" />,
      <CryptoIcon key="crypto" />,
      <ExchangeIcon key="exchange" />,
    ],
    showArrow: true,
    variant: 'elevated',
    onClick: () => handleCardClick('All Payment Methods'),
  },
}

export const PaymentMethodsList: Story = {
  args: {
    title: 'Crypto Transfer',
    description: 'No Limit - Instant',
    paymentMethods: [<CryptoIcon key="crypto" />],
    showArrow: true,
    variant: 'default',
  },
  render: () => (
    <div className="space-y-3 max-w-md">
      <PaymentMethodCard
        title="Crypto Transfer"
        description="No Limit - Instant"
        paymentMethods={[<CryptoIcon key="crypto" />]}
        onClick={() => handleCardClick('Crypto Transfer')}
      />

      <PaymentMethodCard
        title="Crypto Transfer (Disabled)"
        description="Currently unavailable"
        paymentMethods={[<CryptoIcon key="crypto" />]}
        disabled={true}
        onClick={() => handleCardClick('Crypto Transfer Disabled')}
      />

      <PaymentMethodCard
        title="Connect Exchange"
        description="No Limit - 2 min"
        paymentMethods={[<ExchangeIcon key="exchange" />]}
        onClick={() => handleCardClick('Connect Exchange')}
      />

      <PaymentMethodCard
        title="Connect Exchange (Disabled)"
        description="Maintenance in progress"
        paymentMethods={[<ExchangeIcon key="exchange" />]}
        disabled={true}
        onClick={() => handleCardClick('Connect Exchange Disabled')}
      />

      <PaymentMethodCard
        title="Deposit with card"
        limit="$10,000 limit"
        time="5 min"
        paymentMethods={[
          <VisaIcon key="visa" />,
          <MastercardIcon key="mastercard" />,
        ]}
        onClick={() => handleCardClick('Deposit with card')}
      />

      <PaymentMethodCard
        title="Deposit with card (Disabled)"
        limit="$10,000 limit"
        time="Service temporarily unavailable"
        paymentMethods={[
          <VisaIcon key="visa" />,
          <MastercardIcon key="mastercard" />,
        ]}
        disabled={true}
        onClick={() => handleCardClick('Deposit with card Disabled')}
      />
    </div>
  ),
}

export const WithoutClickHandler: Story = {
  args: {
    title: 'Read-only Card',
    description: 'This card is not clickable',
    paymentMethods: [<VisaIcon key="visa" />],
    showArrow: false,
  },
}

export const DifferentVariants: Story = {
  args: {
    title: 'Default Variant',
    description: 'Standard card style',
    paymentMethods: [<VisaIcon key="visa" />],
    showArrow: true,
    variant: 'default',
  },
  render: () => (
    <div className="space-y-4 max-w-md">
      <PaymentMethodCard
        title="Default Variant"
        description="Standard card style"
        paymentMethods={[<VisaIcon key="visa" />]}
        variant="default"
        onClick={() => handleCardClick('Default')}
      />

      <PaymentMethodCard
        title="Default Variant (Disabled)"
        description="Standard card style"
        paymentMethods={[<VisaIcon key="visa" />]}
        variant="default"
        disabled={true}
        onClick={() => handleCardClick('Default Disabled')}
      />

      <PaymentMethodCard
        title="Elevated Variant"
        description="Enhanced shadow"
        paymentMethods={[<VisaIcon key="visa" />]}
        variant="elevated"
        onClick={() => handleCardClick('Elevated')}
      />

      <PaymentMethodCard
        title="Outlined Variant"
        description="Strong border"
        paymentMethods={[<VisaIcon key="visa" />]}
        variant="outlined"
        onClick={() => handleCardClick('Outlined')}
      />
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    title: 'This is a very long payment method title that should wrap properly',
    description:
      'Very detailed description with lots of information about limits and processing times',
    limit: '$1,000,000 limit',
    time: '24-48 hours',
    paymentMethods: [
      <VisaIcon key="visa" />,
      <MastercardIcon key="mastercard" />,
      <CryptoIcon key="crypto" />,
    ],
    onClick: () => handleCardClick('Long content'),
  },
}

export const CustomColors: Story = {
  args: {
    title: 'Custom Payment Methods',
    description: 'With custom colored icons',
    paymentMethods: [
      <CustomIcon key="blue" color="#1E40AF" text="B" />,
      <CustomIcon key="red" color="#DC2626" text="R" />,
      <CustomIcon key="green" color="#059669" text="G" />,
      <CustomIcon key="purple" color="#7C3AED" text="P" />,
    ],
    onClick: () => handleCardClick('Custom colors'),
  },
}
