"use client"

import type React from "react"

import { Info } from "lucide-react"
// import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
// import {
//   module.Dialog,
//   module.DialogContent,
//   module.DialogDescription,
//   module.DialogHeader,
//   module.DialogTitle,
//   module.DialogTrigger,
// } from "../components/ui/module.dialog"
import { memo,lazy } from "react"
const LazyDialog = lazy(() =>
  import("../components/ui/dialog").then((module) => ({
    default: ({ children, ...props }) => (
      <module.Dialog {...props}>
        <module.DialogContent>{children}</module.DialogContent>
      </module.Dialog>
    ),
  })),
)
const LazyPopOver = lazy(() =>
  import("../components/ui/popover").then((module) => ({
    default: ({ children, ...props }) => (
      <module.Popover {...props}>
        <module.PopoverContent>{children}</module.PopoverContent>
      </module.Popover>
    ),
  })),
)
// Memoized InfoPopover component to prevent unnecessary re-renders
export const InfoPopover = memo(
  ({
    title,
    text,
    srText = "More information",
  }: {
    title: string
    text: string
    srText?: string
  }) => {
    return (
      <LazyPopOver>
        <module.PopoverTrigger asChild>
          <button className="inline-flex">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">{srText}</span>
          </button>
        </module.PopoverTrigger>
        <module.PopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">{title}</h4>
            <div className="text-sm text-muted-foreground">{text}</div>
          </div>
        </module.PopoverContent>
      </LazyPopOver>
    )
  },
)

InfoPopover.displayName = "InfoPopover"

// Memoized module.InfoDialog component to prevent unnecessary re-renders
export const InfoDialog = memo(
  ({
    title,
    description,
    children,
    srText = "More information",
  }: {
    title: string
    description: string
    children: React.ReactNode
    srText?: string
  }) => {
    return (
      <LazyDialog>
        <module.DialogTrigger asChild>
          <button className="inline-flex">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">{srText}</span>
          </button>
        </module.DialogTrigger>
        <module.DialogContent className="sm:max-w-md">
          <module.DialogHeader>
            <module.DialogTitle>{title}</module.DialogTitle>
            <module.DialogDescription>{description}</module.DialogDescription>
          </module.DialogHeader>
          <div className="space-y-4">{children}</div>
        </module.DialogContent>
      </LazyDialog>
    )
  },
)

InfoDialog.displayName = "module.InfoDialog"

