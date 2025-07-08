import { clsx } from 'clsx'
import * as React from 'react'
import { Card, CardContent } from '../card'

export interface PaymentMethodCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  limit?: string
  time?: string
  paymentMethods: React.ReactNode[]
  showArrow?: boolean
  variant?: 'default' | 'elevated' | 'outlined'
  disabled?: boolean
}

const PaymentMethodCard = React.forwardRef<
  HTMLDivElement,
  PaymentMethodCardProps
>(
  (
    {
      className,
      title,
      description,
      limit,
      time,
      paymentMethods,
      showArrow = true,
      variant = 'default',
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const formattedDescription = React.useMemo(() => {
      const parts = []
      if (limit) parts.push(limit)
      if (time) parts.push(time)
      if (description) parts.push(description)
      return parts.join(' - ')
    }, [limit, time, description])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      if (onClick) {
        onClick(event)
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      if ((event.key === 'Enter' || event.key === ' ') && onClick) {
        event.preventDefault()
        onClick(event as unknown as React.MouseEvent<HTMLDivElement>)
      }
    }

    return (
      <Card
        ref={ref}
        variant={variant}
        padding="none"
        className={clsx(
          'px-4 py-3',
          onClick &&
            !disabled &&
            'cursor-pointer hover:shadow-md transition-shadow duration-200',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        onClick={disabled ? undefined : handleClick}
        onKeyDown={disabled ? undefined : handleKeyDown}
        tabIndex={onClick && !disabled ? 0 : undefined}
        role={onClick && !disabled ? 'button' : undefined}
        aria-label={onClick && !disabled ? `Select ${title}` : undefined}
        aria-disabled={disabled}
        {...props}
      >
        <CardContent className="flex items-center justify-between gap-4 p-0">
          <div className="flex-1 min-w-0">
            <h3
              className={clsx(
                'text-base font-medium leading-none',
                disabled ? 'text-gray-500' : 'text-gray-900'
              )}
            >
              {title}
            </h3>
            {formattedDescription && (
              <p
                className={clsx(
                  'text-sm mt-1 leading-relaxed',
                  disabled ? 'text-gray-400' : 'text-gray-600'
                )}
              >
                {formattedDescription}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <div className="flex items-center -space-x-2">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={clsx(
                    'relative z-10 bg-white rounded-full p-1 border border-gray-200 shadow-sm',
                    index > 0 && 'ml-0'
                  )}
                  style={{ zIndex: paymentMethods.length - index }}
                >
                  {method}
                </div>
              ))}
            </div>

            {showArrow && (
              <div
                className={clsx(
                  'ml-3 flex items-center',
                  disabled ? 'text-gray-300' : 'text-gray-400'
                )}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)
PaymentMethodCard.displayName = 'PaymentMethodCard'

export { PaymentMethodCard }
