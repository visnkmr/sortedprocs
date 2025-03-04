"use client"

import { memo,lazy } from "react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog"
import { Info } from "lucide-react"
import { CarData } from "./page"
// 2. Lazy load Dialog and Popover components
const LazyDialog = lazy(() =>
  import("../components/ui/dialog").then((module) => ({
    default: ({ children, ...props }: { children: React.ReactNode, [key: string]: React.ReactNode}) => (
      <module.Dialog {...props}>
        <module.DialogTrigger>{props.trigger}</module.DialogTrigger>
        <module.DialogContent>
          <module.DialogHeader>
            <module.DialogTitle>{props.title}</module.DialogTitle>
            <module.DialogDescription>{props.description}</module.DialogDescription>
          </module.DialogHeader>
          {children}
        </module.DialogContent>
      </module.Dialog>
    ),
  })),
);
// Memoized component for the size comparison dialog
const SizeComparisonDialog = memo(
  ({
    item,
    pinnedCar,
  }: {
    item: CarData
    pinnedCar: CarData | null
  }) => {
    return (
      <LazyDialog trigger={<button className="inline-flex">
        <Info className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Compare car sizes</span>
      </button>}
      title={"Size Comparison"}
      description={"Visual comparison of car dimensions (excluding ground clearance)"}>
          <div className="relative h-60 w-full border rounded-md p-4">
            {pinnedCar && (
              <div
                className="absolute bg-primary/20 border border-primary"
                style={{
                  width: `${(pinnedCar.width / 2070) * 100}%`,
                  height: `${((pinnedCar.height - pinnedCar.groundClearance) / 1937) * 100}%`,
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <div className="absolute top-0 left-0 p-1 text-xs bg-primary/20 rounded">{pinnedCar.name}</div>
              </div>
            )}
            <div
              className="absolute bg-secondary/20 border border-secondary"
              style={{
                width: `${(item.width / 2070) * 100}%`,
                height: `${((item.height - item.groundClearance) / 1937) * 100}%`,
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="absolute top-0 left-0 p-1 text-xs bg-secondary/20 rounded">{item.name}</div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <div>
              <p>
                <strong>Current:</strong> {item.length}×{item.width}×{item.height - item.groundClearance} mm
              </p>
              {pinnedCar && (
                <p>
                  <strong>Pinned:</strong> {pinnedCar.length}×{pinnedCar.width}×
                  {pinnedCar.height - pinnedCar.groundClearance} mm
                </p>
              )}
            </div>
          </div>
      </LazyDialog>
    )
  },
)


SizeComparisonDialog.displayName = "SizeComparisonDialog"

export default SizeComparisonDialog

