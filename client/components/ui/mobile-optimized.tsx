import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';

// Mobile-optimized button component
interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MobileButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: MobileButtonProps) {
  const { isMobile } = useIsMobile();

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-transparent hover:bg-secondary/50',
    ghost: 'bg-transparent hover:bg-secondary/50'
  };

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-base min-h-[44px]',
    md: 'px-5 py-3 text-base min-h-[48px]',
    lg: 'px-7 py-4 text-lg min-h-[52px]'
  };

  const baseClasses = [
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'touch-manipulation select-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
}

// Mobile-optimized card component
interface MobileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function MobileCard({
  children,
  className = '',
  interactive = false,
  ...props
}: MobileCardProps) {
  const { isMobile } = useIsMobile();

  const baseClasses = [
    'bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden',
    'transition-all duration-300',
    interactive && 'hover:border-primary/30 hover:shadow-lg',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={baseClasses}
      {...props}
    >
      {children}
    </div>
  );
}

// Mobile-optimized text component
interface MobileTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'body' | 'caption' | 'label' | 'heading';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function MobileText({
  children,
  variant = 'body',
  size = 'base',
  className = '',
  ...props
}: MobileTextProps) {
  const { isMobile } = useIsMobile();

  const variantClasses = {
    body: 'text-foreground',
    caption: 'text-muted-foreground',
    label: 'text-foreground font-medium',
    heading: 'text-foreground font-bold'
  };

  const sizeClasses = {
    xs: 'text-sm sm:text-base',
    sm: 'text-base sm:text-lg',
    base: 'text-base sm:text-lg md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl',
    xl: 'text-xl sm:text-2xl md:text-3xl',
    '2xl': 'text-2xl sm:text-3xl md:text-4xl'
  };

  const baseClasses = [
    'leading-relaxed',
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={baseClasses} {...props}>
      {children}
    </p>
  );
}
