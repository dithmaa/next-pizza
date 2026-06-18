import { cn } from "@/lib/utils"
import React, { FC } from "react"

type ContainerProps = {
  className?: string
}

export const Container: FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto w-[90%] max-w-[1280px]", className)}>
      {children}
    </div>
  )
}
