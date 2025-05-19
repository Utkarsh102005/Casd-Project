import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import type { JSX } from "react"

interface TextProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Text({ children, className, as: Component = "span" }: TextProps) {
  return <Component className={cn("text-custom", className)}>{children}</Component>
}

export function Paragraph({ children, className, as = "p" }: TextProps) {
  return (
    <Text as={as} className={cn("leading-7", className)}>
      {children}
    </Text>
  )
}

export function Heading({ children, className, as = "h2" }: TextProps) {
  return (
    <Text as={as} className={cn("font-semibold tracking-tight", className)}>
      {children}
    </Text>
  )
}
