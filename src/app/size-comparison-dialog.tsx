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
import { ProcessorData } from "./page"
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
    pinnedProcessor,
  }: {
    item: ProcessorData
    pinnedProcessor: ProcessorData | null
  }) => {
    return (
      <LazyDialog trigger={<>
        <Info className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Compare processor performance</span>
      </>}
      title={"Performance Comparison"}
      description={"Visual comparison of processor performance metrics"}>
          <div className="relative h-60 w-full border rounded-md p-4 bg-gradient-to-r from-blue-50 to-green-50">
            {pinnedProcessor && (
              <div
                className="absolute bg-primary/20 border border-primary rounded p-2"
                style={{
                  width: `${Math.min((pinnedProcessor.antutuScore / 3000000) * 80 + 20, 90)}%`,
                  height: "40%",
                  bottom: "50%",
                  left: "5%",
                  zIndex: 10,
                }}
              >
                <div className="text-xs font-bold">{pinnedProcessor.name}</div>
                <div className="text-xs">AnTuTu: {pinnedProcessor.antutuScore.toLocaleString()}</div>
                <div className="text-xs">Cores: {pinnedProcessor.cores}</div>
              </div>
            )}
            <div
              className="absolute bg-secondary/20 border border-secondary rounded p-2"
              style={{
                width: `${Math.min((item.antutuScore / 3000000) * 80 + 20, 90)}%`,
                height: "40%",
                bottom: "5%",
                left: "5%",
              }}
            >
              <div className="text-xs font-bold">{item.name}</div>
              <div className="text-xs">AnTuTu: {item.antutuScore.toLocaleString()}</div>
              <div className="text-xs">Cores: {item.cores}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Current:</strong> {item.name}</p>
              <p>AnTuTu: {item.antutuScore.toLocaleString()}</p>
              <p>Geekbench: {item.geekbenchSingle}/{item.geekbenchMulti}</p>
              <p>Cores: {item.cores} ({item.coreConfig})</p>
              <p>Clock: {item.clockSpeed} MHz</p>
            </div>
            {pinnedProcessor && (
              <div>
                <p><strong>Pinned:</strong> {pinnedProcessor.name}</p>
                <p>AnTuTu: {pinnedProcessor.antutuScore.toLocaleString()}</p>
                <p>Geekbench: {pinnedProcessor.geekbenchSingle}/{pinnedProcessor.geekbenchMulti}</p>
                <p>Cores: {pinnedProcessor.cores} ({pinnedProcessor.coreConfig})</p>
                <p>Clock: {pinnedProcessor.clockSpeed} MHz</p>
              </div>
            )}
          </div>
      </LazyDialog>
    )
  },
)


SizeComparisonDialog.displayName = "SizeComparisonDialog"

export default SizeComparisonDialog

