'use client';

import { forwardRef, type InputHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showPasswordToggle?: boolean;
}

const sizeStyles = {
  sm: 'px-3 py-2 text-sm rounded-xl',
  md: 'px-4 py-3 text-sm rounded-2xl',
  lg: 'px-5 py-4 text-base rounded-2xl',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      success,
      icon,
      size = 'md',
      showPasswordToggle = false,
      type = 'text',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;
    const hasError = !!error;
    const hasSuccess = !!success;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-bold text-white/80">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-text-tertiary">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={cn(
              'w-full border-2 outline-none transition-all duration-200',
              'bg-white/5 text-white placeholder:text-text-tertiary',
              'focus:border-amber/50 focus:bg-amber/5 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              hasError && 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.08)]',
              hasSuccess && 'border-emerald-500/50 focus:border-emerald-500 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.08)]',
              !hasError && !hasSuccess && 'border-white/10',
              icon ? 'pr-12' : '',
              showPasswordToggle || hasError || hasSuccess ? 'pl-10' : '',
              sizeStyles[size],
              className
            )}
            {...props}
          />
          <div className="absolute inset-y-0 left-0 flex items-center gap-1 pl-3.5">
            {hasError && <AlertCircle className="w-4 h-4 text-red-400" />}
            {hasSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-text-tertiary hover:text-white transition-colors cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
        {hint && !hasError && (
          <p className="text-xs text-text-tertiary">{hint}</p>
        )}
        {hasError && (
          <p className="text-xs text-red-400 flex items-center gap-1">{error}</p>
        )}
        {hasSuccess && (
          <p className="text-xs text-emerald-400 flex items-center gap-1">{success}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
