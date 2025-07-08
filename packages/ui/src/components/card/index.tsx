import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import * as React from 'react'

const cardVariants = cva('overflow-hidden transition-all duration-200', {
  variants: {
    variant: {
      default: 'bg-white border border-gray-200 rounded-lg shadow-sm',
      elevated:
        'bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl',
      outlined:
        'bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400',
      ghost: 'bg-transparent border-0 rounded-lg hover:bg-gray-50',
      filled: 'bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      default: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    size: {
      sm: 'max-w-sm',
      default: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      full: 'w-full',
      auto: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'default',
    size: 'auto',
  },
})

const cardHeaderVariants = cva('space-y-1.5', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-3 pb-2',
      default: 'p-4 pb-3',
      lg: 'p-6 pb-4',
      xl: 'p-8 pb-6',
    },
  },
  defaultVariants: {
    padding: 'default',
  },
})

const cardContentVariants = cva('', {
  variants: {},
  defaultVariants: {},
})

const cardFooterVariants = cva('flex items-center', {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-3 pt-2',
      default: 'p-4 pt-3',
      lg: 'p-6 pt-4',
      xl: 'p-8 pt-6',
    },
  },
  defaultVariants: {
    padding: 'default',
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, size, ...props }, ref) => {
    return (
      <div
        className={clsx(cardVariants({ variant, padding, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        className={clsx(cardHeaderVariants({ padding }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
CardHeader.displayName = 'CardHeader'

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx(cardContentVariants({}), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        className={clsx(cardFooterVariants({ padding }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
CardFooter.displayName = 'CardFooter'

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={clsx(
          'text-lg font-semibold leading-none tracking-tight text-gray-900',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('text-sm text-gray-600 leading-relaxed', className)}
      ref={ref}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  cardVariants,
}
