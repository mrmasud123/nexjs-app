import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex select-none items-center gap-1.5 text-sm font-medium text-foreground group-data-[disabled]:pointer-events-none group-data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
