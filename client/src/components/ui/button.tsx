import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground border border-black",
    destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
    outline: "border border-black bg-white shadow-xs active:shadow-none",
    secondary: "border bg-secondary text-secondary-foreground border-black",
    ghost: "border border-transparent",
  },
  size: {
    default: "min-h-9 px-4 py-2",
    sm: "min-h-8 rounded-md px-3 text-xs",
    lg: "min-h-10 rounded-md px-8",
    icon: "h-9 w-9",
  },
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClass = buttonVariants.variant[variant]
    const sizeClass = buttonVariants.size[size]

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          "hover-elevate active-elevate-2",
          variantClass,
          sizeClass,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
