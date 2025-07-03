import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900 shadow-sm',
        secondary:
          'bg-gray-700 text-white hover:bg-gray-600 focus-visible:ring-gray-700 shadow-sm',
        outline:
          'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-300',
        ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300',
        light:
          'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-300 shadow-sm',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 shadow-sm',
        primary:
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 shadow-sm',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 py-3 text-base',
        xl: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return React.createElement('button', {
      className: clsx(buttonVariants({ variant, size }), className),
      ref: ref,
      ...props,
    })
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
