import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, className, ...props }, ref) => {
    const id = useId()
    const errorId = `${id}-error`
    const helperId = `${id}-helper`

    const hasError = Boolean(error)

    return (
      <div className='flex flex-col gap-1.5'>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium text-gray-700',
              hasError && 'text-red-600'
            )}
          >
            {label}
            {props.required && (
              <span className='ml-1 text-red-500' aria-hidden='true'>*</span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          aria-describedby={
            hasError ? errorId : helperText ? helperId : undefined
          }
          aria-invalid={hasError}
          className={cn(
            'w-full rounded-md border bg-white px-3 py-2 text-sm',
            'text-gray-900 placeholder:text-gray-400',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
            hasError
              ? 'border-red-400 focus-visible:ring-red-400'
              : 'border-gray-300 focus-visible:ring-primary-500',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60',
            className
          )}
          {...props}
        />

        {hasError && (
          <p id={errorId} className='text-xs text-red-600' role='alert'>
            {error}
          </p>
        )}

        {!hasError && helperText && (
          <p id={helperId} className='text-xs text-gray-500'>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'