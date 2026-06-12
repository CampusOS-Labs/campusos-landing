import Link from "next/link"
import { cn } from "@/lib/utils"
import "./NeumorphicButton.css"

type NeumorphicButtonProps = {
  href: string
  children: React.ReactNode
  compact?: boolean
  className?: string
}

export function NeumorphicButton({
  href,
  children,
  compact = false,
  className,
}: NeumorphicButtonProps) {
  return (
    <Link href={href} className={cn("neo-button-link", className)}>
      <span
        className={cn("neo-button", compact && "neo-button--compact")}
        role="presentation"
      >
        <span className="neo-button-outer">
          <span className="neo-button-inner">
            <span>{children}</span>
          </span>
        </span>
      </span>
    </Link>
  )
}
