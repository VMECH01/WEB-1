import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ButtonVariantProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "glassy";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  children: React.ReactNode;
}

/**
 * Enhanced Button Component with icon support.
 * Uses the original button variants from shadcn/ui Button component.
 * Adds icon rendering capability with left/right positioning.
 */
const ButtonVariants: React.FC<ButtonVariantProps> = ({
  variant = "default",
  size = "default",
  icon: IconComponent,
  iconPosition = "left",
  isLoading = false,
  children,
  className = "",
  ...rest
}) => {
  return (
    <Button
      variant={variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "glassy"}
      size={size as "default" | "sm" | "lg" | "icon"}
      disabled={isLoading}
      className={className}
      {...rest}
    >
      {isLoading ? (
        <>
          <svg className="w-4 h-4 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {iconPosition === "left" && IconComponent && <IconComponent className="w-4 h-4" />}
          <span>{children}</span>
          {iconPosition === "right" && IconComponent && <IconComponent className="w-4 h-4" />}
        </>
      )}
    </Button>
  );
};

export default ButtonVariants;
