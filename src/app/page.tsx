"use client"

import { useState, useMemo, useCallback, memo, useEffect } from "react"
import { useTheme } from "next-themes"
import { Github } from "lucide-react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { processors } from "./processormodels"
import { Delete, PinIcon, PinOff, Star, StarOff, Sun, Moon } from "lucide-react"
import SizeComparisonDialog from "./size-comparison-dialog"
import { InfoPopover } from "./info-components"

export type ProcessorData = {
  name: string
  manufacturer: string
  performanceScore: number
  performanceGrade: string
  antutuScore: number
  geekbenchSingle: number
  geekbenchMulti: number
  cores: number
  coreConfig: string
  clockSpeed: number
  gpu: string
  Year?: number
  Lib?: string
  "CPU Cores": string
  "AI Accelerator": string
  "CPU-Q Score": number
  "CPU-F Score": number
  "INT8 CNNs": number
  "INT8 Transformer": number
  "INT8 Accuracy": number
  "FP16 CNNs": number
  "FP16 Transformer": number
  "FP16 Accuracy": number
  "INT16 CNNs": number
  "INT8 Parallel": number
  "FP16 Parallel": number
  "AI Score": number
  marketPrice?: number
}

const STORAGE_KEYS = {
  ITEMS_PER_ROW: 'sortedproc_itemsPerRow',
  STARRED_PROCESSORS: 'sortedproc_starredProcessors',
  PINNED_PROCESSOR: 'sortedproc_pinnedProcessor',
  DIMENSIONS: 'sortedproc_dimensions',
  SEARCH_QUERY: 'sortedproc_searchQuery',
  SORT_BY: 'sortedproc_sortBy',
  SORT_ORDER: 'sortedproc_sortOrder',
  MANUFACTURER_FILTER: 'sortedproc_manufacturerFilter',
  SHOW_DIMENSIONS: 'sortedproc_showDimensionsRange',
  MARKET_PRICES: 'sortedproc_marketPrices',
  PRICE_ESTIMATION_METRIC: 'sortedproc_priceEstimationMetric',
} as const

const saveToStorage = (key: string, value: unknown): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn('Failed to save to localStorage:', error)
  }
}

const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn('Failed to load from localStorage:', error)
    return defaultValue
  }
}

// Market price utilities
const loadMarketPrices = (): Record<string, number> => {
  return loadFromStorage(STORAGE_KEYS.MARKET_PRICES, {})
}

const saveMarketPrices = (marketPrices: Record<string, number>): void => {
  saveToStorage(STORAGE_KEYS.MARKET_PRICES, marketPrices)
}

const getMarketPrice = (processorName: string): number | undefined => {
  const marketPrices = loadMarketPrices()
  return marketPrices[processorName]
}

const setMarketPrice = (processorName: string, price: number | undefined): void => {
  const marketPrices = loadMarketPrices()
  if (price !== undefined && price > 0) {
    marketPrices[processorName] = price
  } else {
    delete marketPrices[processorName]
  }
  saveMarketPrices(marketPrices)
}

function finddataspecs(data: ProcessorData[]) {
  if (process.env.NODE_ENV !== "production") {
    const properties: (keyof ProcessorData)[] = [
      "cores", "clockSpeed", "antutuScore", "geekbenchSingle", "geekbenchMulti", "performanceScore",
      "CPU-Q Score", "CPU-F Score", "INT8 CNNs", "INT8 Transformer", "INT8 Accuracy",
      "FP16 CNNs", "FP16 Transformer", "FP16 Accuracy", "INT16 CNNs", "INT8 Parallel",
      "FP16 Parallel", "AI Score"
    ]
    type MinMax = { min: number; max: number }
    interface Stats { [key: string]: MinMax }
    const stats: Stats = {}
    if (data.length > 0) {
      properties.forEach((prop) => {
        const firstValue = prop.includes(" ") ? (data[0] as unknown as Record<string, number>)[prop] || 0 : data[0][prop] as number
        stats[prop] = { min: firstValue, max: firstValue }
      })
    }
    data.forEach((item) => {
      properties.forEach((prop) => {
        const value = prop.includes(" ") ? (item as unknown as Record<string, number>)[prop] || 0 : item[prop] as number
        if (value < stats[prop].min) stats[prop].min = value
        if (value > stats[prop].max) stats[prop].max = value
      })
    })
    console.log("Stats:", stats)
  }
}

type processorcardprops = {
  item: ProcessorData,
  pinnedProcessor: ProcessorData | null,
  setPinnedProcessor: React.Dispatch<React.SetStateAction<ProcessorData | null>>,
  starredProcessors: string[]|null,
  setStarredProcessors: React.Dispatch<React.SetStateAction<string[]|null>>,
  priceEstimationMetric: keyof ProcessorData,
  getCachedMarketPrice: (processorName: string) => number | undefined,
  setCachedMarketPrice: (processorName: string, price: number | undefined) => void,
  visibleMetrics: Set<string>,
}

const ProcessorCard = memo(({ item, pinnedProcessor, setPinnedProcessor, starredProcessors, setStarredProcessors, priceEstimationMetric, getCachedMarketPrice, setCachedMarketPrice, visibleMetrics }: processorcardprops) => {
  const [localMarketPrice, setLocalMarketPrice] = useState<string>(() => getCachedMarketPrice(item.name)?.toString() || '')

  // Sync local state with stored value when component mounts
  useEffect(() => {
    const storedPrice = getCachedMarketPrice(item.name)
    setLocalMarketPrice(storedPrice?.toString() || '')
  }, [item.name, getCachedMarketPrice])
  const calculatePercentage = useCallback((value: number, reference: number) => {
    if (!reference) return 0
    return Math.round(((value - reference) / reference) * 100)
  }, [])

  // Price estimation logic
  const getEstimatedPrice = useCallback(() => {
    if (!pinnedProcessor || !pinnedProcessor.marketPrice || pinnedProcessor.name === item.name) {
      return null
    }

    const pinnedMetricValue = pinnedProcessor[priceEstimationMetric] as number
    const currentMetricValue = item[priceEstimationMetric] as number

    if (!pinnedMetricValue || !currentMetricValue || pinnedMetricValue === 0) {
      return null
    }

    // Calculate the ratio between current processor's metric and pinned processor's metric
    const metricRatio = currentMetricValue / pinnedMetricValue

    // Estimate price based on the metric ratio
    const estimatedPrice = pinnedProcessor.marketPrice * metricRatio

    return Math.round(estimatedPrice * 100) / 100 // Round to 2 decimal places
  }, [pinnedProcessor, item, priceEstimationMetric])

  // Memoize percentage calculations for this specific processor
  const percentageCache = useMemo(() => {
    if (!pinnedProcessor || pinnedProcessor.name === item.name) return {}

    const cache: Record<string, number> = {}

    // Core metrics
    cache.antutu = calculatePercentage(item.antutuScore, pinnedProcessor.antutuScore)
    cache.geekbenchSingle = calculatePercentage(item.geekbenchSingle, pinnedProcessor.geekbenchSingle)
    cache.geekbenchMulti = calculatePercentage(item.geekbenchMulti, pinnedProcessor.geekbenchMulti)
    cache.clockSpeed = calculatePercentage(item.clockSpeed, pinnedProcessor.clockSpeed)
    cache.performanceScore = calculatePercentage(item.performanceScore, pinnedProcessor.performanceScore)

    // AI metrics
    if (item["AI Score"] && pinnedProcessor["AI Score"]) {
      cache.aiScore = calculatePercentage(item["AI Score"], pinnedProcessor["AI Score"])
    }

    // CPU scores
    if (item["CPU-Q Score"] && pinnedProcessor["CPU-Q Score"]) {
      cache.cpuQScore = calculatePercentage(item["CPU-Q Score"], pinnedProcessor["CPU-Q Score"])
    }
    if (item["CPU-F Score"] && pinnedProcessor["CPU-F Score"]) {
      cache.cpuFScore = calculatePercentage(item["CPU-F Score"], pinnedProcessor["CPU-F Score"])
    }

    // Neural network performance
    if (item["INT8 CNNs"] && pinnedProcessor["INT8 CNNs"]) {
      cache.int8CNNs = calculatePercentage(item["INT8 CNNs"], pinnedProcessor["INT8 CNNs"])
    }
    if (item["INT8 Transformer"] && pinnedProcessor["INT8 Transformer"]) {
      cache.int8Transformer = calculatePercentage(item["INT8 Transformer"], pinnedProcessor["INT8 Transformer"])
    }
    if (item["FP16 CNNs"] && pinnedProcessor["FP16 CNNs"]) {
      cache.fp16CNNs = calculatePercentage(item["FP16 CNNs"], pinnedProcessor["FP16 CNNs"])
    }
    if (item["FP16 Transformer"] && pinnedProcessor["FP16 Transformer"]) {
      cache.fp16Transformer = calculatePercentage(item["FP16 Transformer"], pinnedProcessor["FP16 Transformer"])
    }

    // Accuracy metrics
    if (item["INT8 Accuracy"] && pinnedProcessor["INT8 Accuracy"]) {
      cache.int8Accuracy = calculatePercentage(item["INT8 Accuracy"], pinnedProcessor["INT8 Accuracy"])
    }
    if (item["FP16 Accuracy"] && pinnedProcessor["FP16 Accuracy"]) {
      cache.fp16Accuracy = calculatePercentage(item["FP16 Accuracy"], pinnedProcessor["FP16 Accuracy"])
    }

    // Parallel processing
    if (item["INT8 Parallel"] && pinnedProcessor["INT8 Parallel"]) {
      cache.int8Parallel = calculatePercentage(item["INT8 Parallel"], pinnedProcessor["INT8 Parallel"])
    }
    if (item["FP16 Parallel"] && pinnedProcessor["FP16 Parallel"]) {
      cache.fp16Parallel = calculatePercentage(item["FP16 Parallel"], pinnedProcessor["FP16 Parallel"])
    }

    // INT16 CNNs
    if (item["INT16 CNNs"] && pinnedProcessor["INT16 CNNs"]) {
      cache.int16CNNs = calculatePercentage(item["INT16 CNNs"], pinnedProcessor["INT16 CNNs"])
    }

    return cache
  }, [item, pinnedProcessor, calculatePercentage])

  return (
    <Card className={`${pinnedProcessor?.name === item.name ? "border-2 border-primary" : ""} ${pinnedProcessor?.name === item.name ? "bg-primary/5" : ""}`}>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{item.name}</CardTitle>
          {visibleMetrics.has('basic') && (
            <CardDescription>
              {item.manufacturer}
              <br />
              Performance Score: {item.performanceScore}
              <br />
              Performance Grade: {item.performanceGrade}
              <br />
              Cores: {item.cores} ({item.coreConfig})
            </CardDescription>
          )}
        </div>
        <button
          onClick={() => setPinnedProcessor(pinnedProcessor?.name === item.name ? null : item)}
          className="p-2 rounded-full hover:bg-muted"
          title={pinnedProcessor?.name === item.name ? "Unpin this processor" : "Pin this processor for comparison"}
        >
          {pinnedProcessor?.name === item.name ? <PinIcon /> : <PinOff />}
        </button>
        <button
          onClick={() => setStarredProcessors(
            starredProcessors?.includes(item.name)
              ? starredProcessors.filter((processor) => processor !== item.name)
              : [...(starredProcessors ? starredProcessors : []), item.name]
          )}
          className="p-2 rounded-full hover:bg-muted"
          title={starredProcessors?.includes(item.name) ? "Unstar this processor" : "Star this processor"}
        >
          {starredProcessors?.includes(item.name) ? <Star /> : <StarOff />}
        </button>
      </CardHeader>
      <CardContent className="space-y-2">
        {visibleMetrics.has('antutu') && (
          <p>AnTuTu Score: {item.antutuScore?.toLocaleString() || "N/A"}
            {percentageCache.antutu !== undefined && (
              <Badge className={`ml-2 ${percentageCache.antutu > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {percentageCache.antutu > 0 ? "+" : ""}{percentageCache.antutu}%
              </Badge>
            )}
          </p>
        )}
        {visibleMetrics.has('geekbench') && (
          <>
            <p className="flex items-center gap-1">
              Geekbench Single: {item.geekbenchSingle}
              {percentageCache.geekbenchSingle !== undefined && (
                <Badge className={`ml-2 ${percentageCache.geekbenchSingle > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {percentageCache.geekbenchSingle > 0 ? "+" : ""}{percentageCache.geekbenchSingle}%
                </Badge>
              )}
            </p>
            <p>Geekbench Multi: {item.geekbenchMulti}
              {percentageCache.geekbenchMulti !== undefined && (
                <Badge className={`ml-2 ${percentageCache.geekbenchMulti > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {percentageCache.geekbenchMulti > 0 ? "+" : ""}{percentageCache.geekbenchMulti}%
                </Badge>
              )}
            </p>
          </>
        )}
        {visibleMetrics.has('clockSpeed') && (
          <p>Clock Speed: {item.clockSpeed} MHz
            {percentageCache.clockSpeed !== undefined && (
              <Badge className={`ml-2 ${percentageCache.clockSpeed > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {percentageCache.clockSpeed > 0 ? "+" : ""}{percentageCache.clockSpeed}%
              </Badge>
            )}
          </p>
        )}
        {visibleMetrics.has('gpu') && <p>GPU: {item.gpu}</p>}
        {visibleMetrics.has('cpuDetails') && item["CPU Cores"] && <p>CPU Details: {item["CPU Cores"]}</p>}
        {visibleMetrics.has('aiHardware') && item["AI Accelerator"] && <p>AI Hardware: {item["AI Accelerator"]}</p>}
        {visibleMetrics.has('year') && item.Year && <p>Release Year: {item.Year}</p>}

        {/* AI Performance Metrics */}
        {visibleMetrics.has('aiScore') && item["AI Score"] && (
          <p className="flex items-center gap-1">
            AI Score: {item["AI Score"]?.toLocaleString()}
            <InfoPopover title="AI Score" srText="What is AI Score?" text="Overall AI performance benchmark score based on neural network inference tests."/>
            {percentageCache.aiScore !== undefined && (
              <Badge className={`ml-2 ${percentageCache.aiScore > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {percentageCache.aiScore > 0 ? "+" : ""}{percentageCache.aiScore}%
              </Badge>
            )}
          </p>
        )}

        {/* CPU Benchmark Scores */}
        {visibleMetrics.has('cpuScores') && (item["CPU-Q Score"] || item["CPU-F Score"]) && (
          <div className="space-y-1">
            {item["CPU-Q Score"] && (
              <p className="flex items-center gap-1">
                CPU-Q Score: {item["CPU-Q Score"]}
                <InfoPopover title="CPU-Q Score" srText="What is CPU-Q Score?" text="CPU quantization performance score measuring efficiency with quantized models."/>
                {percentageCache.cpuQScore !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.cpuQScore > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.cpuQScore > 0 ? "+" : ""}{percentageCache.cpuQScore}%
                  </Badge>
                )}
              </p>
            )}
            {item["CPU-F Score"] && (
              <p className="flex items-center gap-1">
                CPU-F Score: {item["CPU-F Score"]}
                <InfoPopover title="CPU-F Score" srText="What is CPU-F Score?" text="CPU floating-point performance score measuring precision computing capabilities."/>
                {percentageCache.cpuFScore !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.cpuFScore > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.cpuFScore > 0 ? "+" : ""}{percentageCache.cpuFScore}%
                  </Badge>
                )}
              </p>
            )}
          </div>
        )}

        {/* Neural Network Performance */}
        {visibleMetrics.has('neuralNetwork') && (item["INT8 CNNs"] || item["INT8 Transformer"] || item["FP16 CNNs"] || item["FP16 Transformer"]) && (
          <div className="space-y-1">
            <p className="text-sm font-semibold">Neural Network Performance:</p>
            {item["INT8 CNNs"] && (
              <p className="flex items-center gap-1 text-sm">
                INT8 CNNs: {item["INT8 CNNs"]?.toLocaleString()} TOPS
                <InfoPopover title="INT8 CNNs" srText="What is INT8 CNNs?" text="8-bit integer convolutional neural network performance in trillions of operations per second."/>
                {percentageCache.int8CNNs !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.int8CNNs > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.int8CNNs > 0 ? "+" : ""}{percentageCache.int8CNNs}%
                  </Badge>
                )}
              </p>
            )}
            {item["INT8 Transformer"] && (
              <p className="flex items-center gap-1 text-sm">
                INT8 Transformer: {item["INT8 Transformer"]?.toLocaleString()} TOPS
                <InfoPopover title="INT8 Transformer" srText="What is INT8 Transformer?" text="8-bit integer transformer model performance in trillions of operations per second."/>
                {percentageCache.int8Transformer !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.int8Transformer > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.int8Transformer > 0 ? "+" : ""}{percentageCache.int8Transformer}%
                  </Badge>
                )}
              </p>
            )}
            {item["FP16 CNNs"] && (
              <p className="flex items-center gap-1 text-sm">
                FP16 CNNs: {item["FP16 CNNs"]?.toLocaleString()} TOPS
                <InfoPopover title="FP16 CNNs" srText="What is FP16 CNNs?" text="16-bit floating-point convolutional neural network performance in trillions of operations per second."/>
                {percentageCache.fp16CNNs !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.fp16CNNs > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.fp16CNNs > 0 ? "+" : ""}{percentageCache.fp16CNNs}%
                  </Badge>
                )}
              </p>
            )}
            {item["FP16 Transformer"] && (
              <p className="flex items-center gap-1 text-sm">
                FP16 Transformer: {item["FP16 Transformer"]?.toLocaleString()} TOPS
                <InfoPopover title="FP16 Transformer" srText="What is FP16 Transformer?" text="16-bit floating-point transformer model performance in trillions of operations per second."/>
                {percentageCache.fp16Transformer !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.fp16Transformer > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.fp16Transformer > 0 ? "+" : ""}{percentageCache.fp16Transformer}%
                  </Badge>
                )}
              </p>
            )}
          </div>
        )}

        {/* Accuracy Metrics */}
        {visibleMetrics.has('accuracy') && (item["INT8 Accuracy"] || item["FP16 Accuracy"]) && (
          <div className="space-y-1">
            <p className="text-sm font-semibold">Model Accuracy:</p>
            {item["INT8 Accuracy"] && (
              <p className="flex items-center gap-1 text-sm">
                INT8 Accuracy: {item["INT8 Accuracy"]}%
                <InfoPopover title="INT8 Accuracy" srText="What is INT8 Accuracy?" text="Accuracy percentage for 8-bit integer neural network inference."/>
                {percentageCache.int8Accuracy !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.int8Accuracy > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.int8Accuracy > 0 ? "+" : ""}{percentageCache.int8Accuracy}%
                  </Badge>
                )}
              </p>
            )}
            {item["FP16 Accuracy"] && (
              <p className="flex items-center gap-1 text-sm">
                FP16 Accuracy: {item["FP16 Accuracy"]}%
                <InfoPopover title="FP16 Accuracy" srText="What is FP16 Accuracy?" text="Accuracy percentage for 16-bit floating-point neural network inference."/>
                {percentageCache.fp16Accuracy !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.fp16Accuracy > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.fp16Accuracy > 0 ? "+" : ""}{percentageCache.fp16Accuracy}%
                  </Badge>
                )}
              </p>
            )}
          </div>
        )}

        {/* Parallel Processing */}
        {visibleMetrics.has('parallelProcessing') && (item["INT8 Parallel"] || item["FP16 Parallel"]) && (
          <div className="space-y-1">
            <p className="text-sm font-semibold">Parallel Processing:</p>
            {item["INT8 Parallel"] && (
              <p className="flex items-center gap-1 text-sm">
                INT8 Parallel: {item["INT8 Parallel"]?.toLocaleString()} TOPS
                <InfoPopover title="INT8 Parallel" srText="What is INT8 Parallel?" text="8-bit integer parallel processing performance in trillions of operations per second."/>
                {percentageCache.int8Parallel !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.int8Parallel > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.int8Parallel > 0 ? "+" : ""}{percentageCache.int8Parallel}%
                  </Badge>
                )}
              </p>
            )}
            {item["FP16 Parallel"] && (
              <p className="flex items-center gap-1 text-sm">
                FP16 Parallel: {item["FP16 Parallel"]?.toLocaleString()} TOPS
                <InfoPopover title="FP16 Parallel" srText="What is FP16 Parallel?" text="16-bit floating-point parallel processing performance in trillions of operations per second."/>
                {percentageCache.fp16Parallel !== undefined && (
                  <Badge className={`ml-2 ${percentageCache.fp16Parallel > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {percentageCache.fp16Parallel > 0 ? "+" : ""}{percentageCache.fp16Parallel}%
                  </Badge>
                )}
              </p>
            )}
          </div>
        )}

        {/* INT16 CNNs */}
        {visibleMetrics.has('int16CNNs') && item["INT16 CNNs"] && (
          <p className="flex items-center gap-1 text-sm">
            INT16 CNNs: {item["INT16 CNNs"]?.toLocaleString()} TOPS
            <InfoPopover title="INT16 CNNs" srText="What is INT16 CNNs?" text="16-bit integer convolutional neural network performance in trillions of operations per second."/>
            {percentageCache.int16CNNs !== undefined && (
              <Badge className={`ml-2 ${percentageCache.int16CNNs > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {percentageCache.int16CNNs > 0 ? "+" : ""}{percentageCache.int16CNNs}%
              </Badge>
            )}
          </p>
        )}
        {visibleMetrics.has('performanceMetrics') && (
          <>
            <p className="flex items-center gap-1">
              Performance Score: {item.performanceScore}
              <InfoPopover title="Performance Score" srText="What is Performance Score?" text="This is a composite score that represents the overall performance capability of the processor based on various benchmarks and specifications."/>
              {percentageCache.performanceScore !== undefined && (
                <Badge className={`ml-2 ${percentageCache.performanceScore > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {percentageCache.performanceScore > 0 ? "+" : ""}{percentageCache.performanceScore}%
                </Badge>
              )}
            </p>
            <p className="flex items-center gap-1">
              Core Configuration: {item.coreConfig}
              <InfoPopover title="Core Configuration" srText="What is Core Configuration?" text="This describes how the processor cores are arranged. For example, '2+4' means 2 high-performance cores and 4 efficiency cores."/>
            </p>
            <p className="flex items-center gap-1">
              Performance Grade: {item.performanceGrade}
              <InfoPopover title="Performance Grade" srText="What is Performance Grade?" text="A letter grade (A+, A, B, C, D) that categorizes the processor's overall performance level."/>
            </p>
          </>
        )}
        {/* Market Price Section */}
        {visibleMetrics.has('marketPrice') && (
          <div className="pt-2 border-t">
            <div className="flex items-center gap-2 mb-2">
              <label htmlFor={`marketPrice-${item.name}`} className="text-sm font-medium">
                Market Price :
              </label>
            <input
              id={`marketPrice-${item.name}`}
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter price"
              className="px-2 py-1 text-sm border rounded w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={localMarketPrice}
              onChange={(e) => setLocalMarketPrice(e.target.value)}
              onBlur={(e) => {
                const price = e.target.value ? parseFloat(e.target.value) : undefined
                setCachedMarketPrice(item.name, price)
                // Update the current item to reflect the change immediately
                item.marketPrice = price
              }}
            />
          </div>
          {(localMarketPrice || getCachedMarketPrice(item.name)) && (
            <p className="text-sm text-green-600">
              Current Price: {getCachedMarketPrice(item.name)?.toLocaleString()}
            </p>
          )}

          {/* Estimated Price Section */}
          {getEstimatedPrice() && (
            <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Estimated Price: {getEstimatedPrice()?.toLocaleString()}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-300">
                Based on {priceEstimationMetric} comparison with {pinnedProcessor?.name}
              </p>
            </div>
          )}
        </div>
       )}

       <div className="pt-2">
         <SizeComparisonDialog item={item} pinnedProcessor={pinnedProcessor} />
       </div>
      </CardContent>
    </Card>
  )
})

ProcessorCard.displayName = 'ProcessorCard'

export default function ProcessorComparison() {
  const { theme, setTheme } = useTheme()

  // Market price cache to avoid repeated localStorage lookups
  const [marketPriceCache, setMarketPriceCache] = useState<Map<string, number>>(new Map())

  type DimensionsType = {
    cores: number[]
    clockSpeed: number[]
    antutuScore: number[]
    geekbenchSingle: number[]
    geekbenchMulti: number[]
    performanceScore: number[]
    aiScore: number[]
    cpuQScore: number[]
    cpuFScore: number[]
    int8CNNs: number[]
    int8Transformer: number[]
    fp16CNNs: number[]
    fp16Transformer: number[]
    year: number[]
  }

  const [dimensions, setDimensions] = useState<DimensionsType>(() => {
    const savedDimensions = loadFromStorage(STORAGE_KEYS.DIMENSIONS, undefined) as DimensionsType | undefined
    const defaultDimensions: DimensionsType = {
      cores: [1, 16],
      clockSpeed: [1000, 5000],
      antutuScore: [100000, 3000000],
      geekbenchSingle: [500, 4000],
      geekbenchMulti: [1000, 11000],
      performanceScore: [20, 100],
      aiScore: [0, 10000],
      cpuQScore: [0, 200],
      cpuFScore: [0, 200],
      int8CNNs: [0, 1500],
      int8Transformer: [0, 5000],
      fp16CNNs: [0, 1200],
      fp16Transformer: [0, 2500],
      year: [2018, 2025],
    }

    // Merge saved dimensions with defaults to ensure all properties exist
    if (savedDimensions) {
      return {
        cores: savedDimensions.cores || defaultDimensions.cores,
        clockSpeed: savedDimensions.clockSpeed || defaultDimensions.clockSpeed,
        antutuScore: savedDimensions.antutuScore || defaultDimensions.antutuScore,
        geekbenchSingle: savedDimensions.geekbenchSingle || defaultDimensions.geekbenchSingle,
        geekbenchMulti: savedDimensions.geekbenchMulti || defaultDimensions.geekbenchMulti,
        performanceScore: savedDimensions.performanceScore || defaultDimensions.performanceScore,
        aiScore: savedDimensions.aiScore || defaultDimensions.aiScore,
        cpuQScore: savedDimensions.cpuQScore || defaultDimensions.cpuQScore,
        cpuFScore: savedDimensions.cpuFScore || defaultDimensions.cpuFScore,
        int8CNNs: savedDimensions.int8CNNs || defaultDimensions.int8CNNs,
        int8Transformer: savedDimensions.int8Transformer || defaultDimensions.int8Transformer,
        fp16CNNs: savedDimensions.fp16CNNs || defaultDimensions.fp16CNNs,
        fp16Transformer: savedDimensions.fp16Transformer || defaultDimensions.fp16Transformer,
        year: savedDimensions.year || defaultDimensions.year,
      }
    }
    return defaultDimensions
  })
  const [pinnedProcessor, setPinnedProcessor] = useState<ProcessorData | null>(() => {
    const stored = loadFromStorage<ProcessorData | null>(STORAGE_KEYS.PINNED_PROCESSOR, null)
    if (stored && stored.name) {
      const marketPrice = getMarketPrice(stored.name)
      return marketPrice ? { ...stored, marketPrice } : stored
    }
    return stored
  })

  // Cached market price getter - only loads from localStorage when not in cache
  const getCachedMarketPrice = useCallback((processorName: string): number | undefined => {
    if (marketPriceCache.has(processorName)) {
      return marketPriceCache.get(processorName)
    }

    // Load from localStorage only when not cached
    const price = getMarketPrice(processorName)
    if (price !== undefined) {
      setMarketPriceCache(prev => new Map(prev.set(processorName, price)))
    }
    return price
  }, [marketPriceCache])

  // Cached market price setter - updates both localStorage and cache
  const setCachedMarketPrice = useCallback((processorName: string, price: number | undefined): void => {
    setMarketPrice(processorName, price)
    setMarketPriceCache(prev => {
      const newCache = new Map(prev)
      if (price !== undefined && price > 0) {
        newCache.set(processorName, price)
      } else {
        newCache.delete(processorName)
      }
      return newCache
    })

    // Update pinnedProcessor state if the market price being set is for the pinned processor
    if (pinnedProcessor && pinnedProcessor.name === processorName) {
      setPinnedProcessor(prev => prev ? { ...prev, marketPrice: price } : null)
    }
  }, [pinnedProcessor])
  const [starredProcessors, setStarredProcessors] = useState<string[] | null>(() =>
    loadFromStorage(STORAGE_KEYS.STARRED_PROCESSORS, null)
  )
  const [comparisons, setComparisons] = useState<{ field: keyof ProcessorData; operator: ">" | "<" }[]>(() =>
    loadFromStorage('sortedproc_comparisons', [])
  )
  const [searchQuery, setSearchQuery] = useState(() =>
    loadFromStorage(STORAGE_KEYS.SEARCH_QUERY, "")
  )
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery)
  const [sortBy, setSortBy] = useState<"name" | "cores" | "clockSpeed" | "antutuScore" | "geekbenchSingle" | "geekbenchMulti" | "performanceScore" | "manufacturer" | "AI Score" | "CPU-Q Score" | "CPU-F Score" | "Year">(() =>
    loadFromStorage(STORAGE_KEYS.SORT_BY, "name")
  )
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(() =>
    loadFromStorage(STORAGE_KEYS.SORT_ORDER, "asc")
  )
  const [manufacturerFilter, setManufacturerFilter] = useState<string>(() =>
    loadFromStorage(STORAGE_KEYS.MANUFACTURER_FILTER, "All")
  )
  const [showDimensionsRange, setShowDimensionsRange] = useState(() =>
    loadFromStorage(STORAGE_KEYS.SHOW_DIMENSIONS, true)
  )
  const [itemsPerRow, setItemsPerRow] = useState(() =>
    loadFromStorage(STORAGE_KEYS.ITEMS_PER_ROW, 4)
  )
  const [starredPinnedFilter, setStarredPinnedFilter] = useState<'all' | 'only' | 'hide'>(() =>
    loadFromStorage('sortedproc_starredPinnedFilter', 'all')
  )
  const [priceEstimationMetric, setPriceEstimationMetric] = useState<keyof ProcessorData>(() =>
    loadFromStorage(STORAGE_KEYS.PRICE_ESTIMATION_METRIC, 'antutuScore')
  )
  const [visibleMetrics, setVisibleMetrics] = useState<Set<string>>(() => {
    const saved = loadFromStorage<string[]>('sortedproc_visibleMetrics', [])
    return saved.length > 0 ? new Set(saved) : new Set([
      'basic', 'antutu', 'geekbench', 'clockSpeed', 'gpu', 'cpuDetails', 'aiHardware',
      'year', 'aiScore', 'cpuScores', 'neuralNetwork', 'accuracy', 'parallelProcessing',
      'int16CNNs', 'performanceMetrics', 'marketPrice'
    ])
  })
  const [showMetricsPanel, setShowMetricsPanel] = useState(() =>
    loadFromStorage('sortedproc_showMetricsPanel', true)
  )

  useEffect(() => { saveToStorage(STORAGE_KEYS.DIMENSIONS, dimensions) }, [dimensions])
  useEffect(() => { saveToStorage(STORAGE_KEYS.PINNED_PROCESSOR, pinnedProcessor) }, [pinnedProcessor])
  useEffect(() => { saveToStorage(STORAGE_KEYS.STARRED_PROCESSORS, starredProcessors) }, [starredProcessors])
  useEffect(() => { saveToStorage(STORAGE_KEYS.SEARCH_QUERY, searchQuery) }, [searchQuery])

  // Debounce search query to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300) // 300ms delay

    return () => clearTimeout(timer)
  }, [searchQuery])
  useEffect(() => { saveToStorage(STORAGE_KEYS.SORT_BY, sortBy) }, [sortBy])
  useEffect(() => { saveToStorage(STORAGE_KEYS.SORT_ORDER, sortOrder) }, [sortOrder])
  useEffect(() => { saveToStorage(STORAGE_KEYS.MANUFACTURER_FILTER, manufacturerFilter) }, [manufacturerFilter])
  useEffect(() => { saveToStorage(STORAGE_KEYS.SHOW_DIMENSIONS, showDimensionsRange) }, [showDimensionsRange])
  useEffect(() => { saveToStorage(STORAGE_KEYS.ITEMS_PER_ROW, itemsPerRow) }, [itemsPerRow])
  useEffect(() => { saveToStorage('sortedproc_comparisons', comparisons) }, [comparisons])
  useEffect(() => { saveToStorage('sortedproc_starredPinnedFilter', starredPinnedFilter) }, [starredPinnedFilter])
  useEffect(() => { saveToStorage(STORAGE_KEYS.PRICE_ESTIMATION_METRIC, priceEstimationMetric) }, [priceEstimationMetric])
  useEffect(() => { saveToStorage('sortedproc_visibleMetrics', Array.from(visibleMetrics)) }, [visibleMetrics])
  useEffect(() => { saveToStorage('sortedproc_showMetricsPanel', showMetricsPanel) }, [showMetricsPanel])

  const getGridClasses = useCallback((itemsPerRow: number) => {
    const baseClasses = "grid gap-4"
    const responsiveClasses = []
    responsiveClasses.push("grid-cols-1")
    responsiveClasses.push("sm:grid-cols-2")
    switch (itemsPerRow) {
      case 2: responsiveClasses.push("md:grid-cols-2"); break
      case 3: responsiveClasses.push("md:grid-cols-2 lg:grid-cols-3"); break
      case 4: responsiveClasses.push("md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"); break
      case 5: responsiveClasses.push("md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"); break
      case 6: responsiveClasses.push("md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"); break
      case 8: responsiveClasses.push("md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"); break
      default: responsiveClasses.push("md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
    }
    return `${baseClasses} ${responsiveClasses.join(" ")}`
  }, [])

  const data = useMemo(() => processors, [])
  const manufacturers = useMemo(() => Array.from(new Set(data.map((processor) => processor.manufacturer))).sort(), [data])
  const totalProcessorModels = useMemo(() => data.length, [data])

  const initialDimensions = useMemo(() => {
    // Helper function to get min/max safely
    const getMinMax = (values: number[], defaultMin: number, defaultMax: number) => {
      if (values.length === 0) return [defaultMin, defaultMax]
      return [Math.min(...values), Math.max(...values)]
    }

    return {
      cores: getMinMax(data.map((processor) => processor.cores), 1, 16),
      clockSpeed: getMinMax(data.map((processor) => processor.clockSpeed), 1000, 5000),
      antutuScore: getMinMax(data.map((processor) => processor.antutuScore), 100000, 3000000),
      geekbenchSingle: getMinMax(data.map((processor) => processor.geekbenchSingle), 500, 4000),
      geekbenchMulti: getMinMax(data.map((processor) => processor.geekbenchMulti), 1000, 11000),
      performanceScore: getMinMax(data.map((processor) => processor.performanceScore), 20, 100),
      aiScore: getMinMax(data.map((processor) => processor["AI Score"] || 0), 0, 10000),
      cpuQScore: getMinMax(data.map((processor) => processor["CPU-Q Score"] || 0), 0, 200),
      cpuFScore: getMinMax(data.map((processor) => processor["CPU-F Score"] || 0), 0, 200),
      int8CNNs: getMinMax(data.map((processor) => processor["INT8 CNNs"] || 0), 0, 1500),
      int8Transformer: getMinMax(data.map((processor) => processor["INT8 Transformer"] || 0), 0, 5000),
      fp16CNNs: getMinMax(data.map((processor) => processor["FP16 CNNs"] || 0), 0, 1200),
      fp16Transformer: getMinMax(data.map((processor) => processor["FP16 Transformer"] || 0), 0, 2500),
      year: getMinMax(data.map((processor) => processor.Year || 2018), 2018, 2025),
    }
  }, [data])

  const filteredData = useMemo(() => {
    let filtered = data
    if (debouncedSearchQuery) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
    }
    filtered = filtered.filter((item) => {
      if (starredProcessors && starredProcessors?.includes(item.name)) return true
      if (pinnedProcessor && item.name === pinnedProcessor.name) return true
      return (
        item.cores >= dimensions.cores[0] && item.cores <= dimensions.cores[1] &&
        item.clockSpeed >= dimensions.clockSpeed[0] && item.clockSpeed <= dimensions.clockSpeed[1] &&
        item.antutuScore >= dimensions.antutuScore[0] && item.antutuScore <= dimensions.antutuScore[1] &&
        item.geekbenchSingle >= dimensions.geekbenchSingle[0] && item.geekbenchSingle <= dimensions.geekbenchSingle[1] &&
        item.geekbenchMulti >= dimensions.geekbenchMulti[0] && item.geekbenchMulti <= dimensions.geekbenchMulti[1] &&
        item.performanceScore >= dimensions.performanceScore[0] && item.performanceScore <= dimensions.performanceScore[1] &&
        (item["AI Score"] || 0) >= dimensions.aiScore[0] && (item["AI Score"] || 0) <= dimensions.aiScore[1] &&
        (item["CPU-Q Score"] || 0) >= dimensions.cpuQScore[0] && (item["CPU-Q Score"] || 0) <= dimensions.cpuQScore[1] &&
        (item["CPU-F Score"] || 0) >= dimensions.cpuFScore[0] && (item["CPU-F Score"] || 0) <= dimensions.cpuFScore[1] &&
        (item["INT8 CNNs"] || 0) >= dimensions.int8CNNs[0] && (item["INT8 CNNs"] || 0) <= dimensions.int8CNNs[1] &&
        (item["INT8 Transformer"] || 0) >= dimensions.int8Transformer[0] && (item["INT8 Transformer"] || 0) <= dimensions.int8Transformer[1] &&
        (item["FP16 CNNs"] || 0) >= dimensions.fp16CNNs[0] && (item["FP16 CNNs"] || 0) <= dimensions.fp16CNNs[1] &&
        (item["FP16 Transformer"] || 0) >= dimensions.fp16Transformer[0] && (item["FP16 Transformer"] || 0) <= dimensions.fp16Transformer[1] &&
        (item.Year || 2018) >= dimensions.year[0] && (item.Year || 2025) <= dimensions.year[1]
      )
    })
    if (starredPinnedFilter === 'only') {
      filtered = filtered.filter((item) => {
        return (starredProcessors && starredProcessors.includes(item.name)) || (pinnedProcessor && item.name === pinnedProcessor.name)
      })
    } else if (starredPinnedFilter === 'hide') {
      filtered = filtered.filter((item) => {
        return !(starredProcessors && starredProcessors.includes(item.name)) && !(pinnedProcessor && item.name === pinnedProcessor.name)
      })
    }
    return filtered
      .filter((item) => {
        if (manufacturerFilter !== "All" && item.manufacturer !== manufacturerFilter) return false
        return comparisons.every((comparison) => {
          if (pinnedProcessor) {
            const processorValue = item[comparison.field]
            const pinnedProcessorValue = pinnedProcessor[comparison.field]
            // Handle undefined values for optional fields
            if (processorValue == null || pinnedProcessorValue == null) {
              return false
            }
            if (comparison.operator === ">") return processorValue > pinnedProcessorValue
            else if (comparison.operator === "<") return processorValue < pinnedProcessorValue
          }
          return true
        })
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return sortBy === "name" || sortBy === "manufacturer" ? a.name.localeCompare(b.name) : (a[sortBy] as number) - (b[sortBy] as number)
        } else {
          return sortBy === "name" || sortBy === "manufacturer" ? b.name.localeCompare(a.name) : (b[sortBy] as number) - (a[sortBy] as number)
        }
      })
  }, [data, dimensions, debouncedSearchQuery, manufacturerFilter, comparisons, pinnedProcessor, starredProcessors, sortBy, sortOrder, starredPinnedFilter])

  const handleSliderChange = useCallback((value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev: typeof dimensions) => ({ ...prev, [dimension]: value }))
  }, [])

  const toggleDimensionsRange = useCallback(() => {
    setShowDimensionsRange(!showDimensionsRange)
  }, [showDimensionsRange])

  const addComparison = useCallback(() => {
    setComparisons([...comparisons, { field: "cores", operator: ">" }])
  }, [comparisons])

  const removeComparison = useCallback((index: number) => {
    setComparisons((prevComparisons) => prevComparisons.filter((_, i) => i !== index))
  }, [])

  const updateComparison = useCallback((index: number, field: keyof ProcessorData, operator: ">" | "<") => {
    setComparisons((prevComparisons) => {
      const newComparisons = [...prevComparisons]
      newComparisons[index] = { field, operator }
      return newComparisons
    })
  }, [])

  finddataspecs(data)

  return (
    <>
      <div className="flex flex-col gap-8 w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">SortedProc</h1>
              <a href="https://github.com/visnkmr/processorcompare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Github className="h-4 w-4" />
                <span>Star</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <p>{filteredData.length} of {totalProcessorModels} processors found</p>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search processors by name..."
                className="w-full px-4 py-2 pr-10 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  title="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <select className="px-2 py-1 border rounded-md" value={manufacturerFilter} onChange={(e) => setManufacturerFilter(e.target.value)}>
                <option value="All">All Manufacturers</option>
                {manufacturers.map((m) => (<option key={m} value={m}>{m}</option>))}
              </select>
              <select className="px-2 py-1 border rounded-md" value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}>
                <option value="name">Sort by Name</option>
                <option value="cores">Sort by Cores</option>
                <option value="clockSpeed">Sort by Clock Speed</option>
                <option value="antutuScore">Sort by AnTuTu Score</option>
                <option value="geekbenchSingle">Sort by Geekbench Single</option>
                <option value="geekbenchMulti">Sort by Geekbench Multi</option>
                <option value="performanceScore">Sort by Performance Score</option>
                <option value="manufacturer">Sort by Manufacturer</option>
                <option value="AI Score">Sort by AI Score</option>
                <option value="CPU-Q Score">Sort by CPU-Q Score</option>
                <option value="CPU-F Score">Sort by CPU-F Score</option>
                <option value="Year">Sort by Release Year</option>
              </select>
              <button className="px-3 py-1 border rounded-md flex items-center gap-1" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
              </button>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="itemsPerRow" className="text-sm font-medium">Items per row:</label>
            <select id="itemsPerRow" className="px-2 py-1 border rounded-md" value={itemsPerRow} onChange={(e) => setItemsPerRow(Number(e.target.value))}>
              <option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={8}>8</option>
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Visible metrics:</label>
                <span className="text-xs text-gray-500">({visibleMetrics.size}/16 selected)</span>
              </div>
              <button
                onClick={() => setShowMetricsPanel(!showMetricsPanel)}
                className="px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-1"
              >
                {showMetricsPanel ? 'Hide' : 'Show'}
              </button>
            </div>

            {showMetricsPanel && (
              <>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Choose which metrics to display in processor cards</span>
                  <button
                    onClick={() => {
                      // Toggle all metrics
                      const allMetrics = [
                        'basic', 'antutu', 'geekbench', 'clockSpeed', 'gpu', 'cpuDetails', 'aiHardware',
                        'year', 'aiScore', 'cpuScores', 'neuralNetwork', 'accuracy', 'parallelProcessing',
                        'int16CNNs', 'performanceMetrics', 'marketPrice'
                      ]
                      if (visibleMetrics.size === allMetrics.length) {
                        // If all are selected, deselect all
                        setVisibleMetrics(new Set())
                      } else {
                        // Otherwise select all
                        setVisibleMetrics(new Set(allMetrics))
                      }
                    }}
                    className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {visibleMetrics.size === 16 ? 'Deselect All' : 'Select All'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                  {[
                    { id: 'basic', label: 'Basic Info', desc: 'Name, cores, performance grade' },
                    { id: 'antutu', label: 'AnTuTu Score', desc: 'Overall benchmark score' },
                    { id: 'geekbench', label: 'Geekbench Scores', desc: 'Single & multi-core performance' },
                    { id: 'clockSpeed', label: 'Clock Speed', desc: 'Processor frequency' },
                    { id: 'gpu', label: 'GPU', desc: 'Graphics processor info' },
                    { id: 'cpuDetails', label: 'CPU Details', desc: 'Architecture & core config' },
                    { id: 'aiHardware', label: 'AI Hardware', desc: 'Neural processing units' },
                    { id: 'year', label: 'Release Year', desc: 'When the processor launched' },
                    { id: 'aiScore', label: 'AI Score', desc: 'AI performance benchmark' },
                    { id: 'cpuScores', label: 'CPU Scores', desc: 'CPU-Q & CPU-F benchmarks' },
                    { id: 'neuralNetwork', label: 'Neural Network', desc: 'CNN & transformer performance' },
                    { id: 'accuracy', label: 'Model Accuracy', desc: 'INT8 & FP16 accuracy metrics' },
                    { id: 'parallelProcessing', label: 'Parallel Processing', desc: 'Multi-threaded performance' },
                    { id: 'int16CNNs', label: 'INT16 CNNs', desc: '16-bit neural network ops' },
                    { id: 'performanceMetrics', label: 'Performance Metrics', desc: 'Score, grade & configuration' },
                    { id: 'marketPrice', label: 'Market Price', desc: 'Price input & estimation' }
                  ].map((metric) => (
                    <label key={metric.id} className="flex items-start gap-2 p-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={visibleMetrics.has(metric.id)}
                        onChange={(e) => {
                          const newVisibleMetrics = new Set(visibleMetrics)
                          if (e.target.checked) {
                            newVisibleMetrics.add(metric.id)
                          } else {
                            newVisibleMetrics.delete(metric.id)
                          }
                          setVisibleMetrics(newVisibleMetrics)
                        }}
                        className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{metric.label}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{metric.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          {pinnedProcessor && (
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center gap-2 mb-2">
                <span>Price estimation based on:</span>
                <select
                  className="px-2 py-1 border rounded-md text-sm"
                  value={priceEstimationMetric}
                  onChange={(e) => setPriceEstimationMetric(e.target.value as keyof ProcessorData)}
                >
                  <option value="antutuScore">AnTuTu Score</option>
                  <option value="geekbenchSingle">Geekbench Single</option>
                  <option value="geekbenchMulti">Geekbench Multi</option>
                  <option value="performanceScore">Performance Score</option>
                  <option value="AI Score">AI Score</option>
                  <option value="CPU-Q Score">CPU-Q Score</option>
                  <option value="CPU-F Score">CPU-F Score</option>
                  <option value="clockSpeed">Clock Speed</option>
                  <option value="cores">Cores</option>
                </select>
              </div>
              <span>Find processors with:</span>
              <button onClick={addComparison} className="px-2 py-1 border rounded-md">Add Comparison</button>
              {comparisons.map((comparison, index) => (
                <div key={index} className="flex gap-2 items-center mb-2">
                  <select className="px-2 py-1 border rounded-md" value={comparison.field} onChange={(e) => updateComparison(index, e.target.value as keyof ProcessorData, comparison.operator)}>
                    <option value="cores">Cores</option><option value="clockSpeed">Clock Speed</option><option value="antutuScore">AnTuTu Score</option><option value="geekbenchSingle">Geekbench Single</option><option value="geekbenchMulti">Geekbench Multi</option><option value="performanceScore">Performance Score</option>
                    <option value="AI Score">AI Score</option><option value="CPU-Q Score">CPU-Q Score</option><option value="CPU-F Score">CPU-F Score</option><option value="Year">Release Year</option>
                    <option value="INT8 CNNs">INT8 CNNs</option><option value="INT8 Transformer">INT8 Transformer</option><option value="INT8 Accuracy">INT8 Accuracy</option><option value="FP16 CNNs">FP16 CNNs</option><option value="FP16 Transformer">FP16 Transformer</option><option value="FP16 Accuracy">FP16 Accuracy</option><option value="INT16 CNNs">INT16 CNNs</option><option value="INT8 Parallel">INT8 Parallel</option><option value="FP16 Parallel">FP16 Parallel</option>
                  </select>
                  <select className="px-2 py-1 border rounded-md" value={comparison.operator} onChange={(e) => updateComparison(index, comparison.field, e.target.value as ">" | "<")}>
                    <option value=">">Greater than {pinnedProcessor.name}</option>
                    <option value="<">Less than {pinnedProcessor.name}</option>
                  </select>
                  <button onClick={() => removeComparison(index)} className="px-2 py-1 bg-red-500 text-white rounded-md">
                    <Delete />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <label htmlFor="starredPinnedFilter" className="text-sm font-medium">Processor display:</label>
            <select id="starredPinnedFilter" className="px-2 py-1 border rounded-md" value={starredPinnedFilter} onChange={(e) => setStarredPinnedFilter(e.target.value as 'all' | 'only' | 'hide')}>
              <option value="all">Show all processors</option><option value="only">Show only starred & pinned</option><option value="hide">Hide starred & pinned</option>
            </select>
          </div>

          <button className="px-3 py-1 border rounded-md" onClick={toggleDimensionsRange}>
            {showDimensionsRange ? "Hide" : "Show"} Specifications Range
          </button>
        </div>

        {showDimensionsRange && (
          <Card className="w-full">
            <CardHeader><CardTitle>Processor Specifications Range</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="cores-slider" className="text-sm font-medium">Cores</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.cores[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.cores[1]}</Badge>
                  </div>
                </div>
                <Slider id="cores-slider" min={initialDimensions.cores[0]} max={initialDimensions.cores[1]} step={1} value={dimensions.cores} onValueChange={(value: number[]) => handleSliderChange(value, "cores")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="clockSpeed-slider" className="text-sm font-medium">Clock Speed (MHz)</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.clockSpeed[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.clockSpeed[1]}</Badge>
                  </div>
                </div>
                <Slider id="clockSpeed-slider" min={initialDimensions.clockSpeed[0]} max={initialDimensions.clockSpeed[1]} step={50} value={dimensions.clockSpeed} onValueChange={(value: number[]) => handleSliderChange(value, "clockSpeed")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="antutuScore-slider" className="text-sm font-medium">AnTuTu Score</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.antutuScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.antutuScore[1]}</Badge>
                  </div>
                </div>
                <Slider id="antutuScore-slider" min={initialDimensions.antutuScore[0]} max={initialDimensions.antutuScore[1]} step={10000} value={dimensions.antutuScore} onValueChange={(value: number[]) => handleSliderChange(value, "antutuScore")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="geekbenchSingle-slider" className="text-sm font-medium">Geekbench Single</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.geekbenchSingle[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.geekbenchSingle[1]}</Badge>
                  </div>
                </div>
                <Slider id="geekbenchSingle-slider" min={initialDimensions.geekbenchSingle[0]} max={initialDimensions.geekbenchSingle[1]} step={50} value={dimensions.geekbenchSingle} onValueChange={(value: number[]) => handleSliderChange(value, "geekbenchSingle")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="geekbenchMulti-slider" className="text-sm font-medium">Geekbench Multi</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.geekbenchMulti[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.geekbenchMulti[1]}</Badge>
                  </div>
                </div>
                <Slider id="geekbenchMulti-slider" min={initialDimensions.geekbenchMulti[0]} max={initialDimensions.geekbenchMulti[1]} step={100} value={dimensions.geekbenchMulti} onValueChange={(value: number[]) => handleSliderChange(value, "geekbenchMulti")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="performanceScore-slider" className="text-sm font-medium">Performance Score</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.performanceScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.performanceScore[1]}</Badge>
                  </div>
                </div>
                <Slider id="performanceScore-slider" min={initialDimensions.performanceScore[0]} max={initialDimensions.performanceScore[1]} step={1} value={dimensions.performanceScore} onValueChange={(value: number[]) => handleSliderChange(value, "performanceScore")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="aiScore-slider" className="text-sm font-medium">AI Score</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.aiScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.aiScore[1]}</Badge>
                  </div>
                </div>
                <Slider id="aiScore-slider" min={initialDimensions.aiScore[0]} max={initialDimensions.aiScore[1]} step={50} value={dimensions.aiScore} onValueChange={(value: number[]) => handleSliderChange(value, "aiScore")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="cpuQScore-slider" className="text-sm font-medium">CPU-Q Score</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.cpuQScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.cpuQScore[1]}</Badge>
                  </div>
                </div>
                <Slider id="cpuQScore-slider" min={initialDimensions.cpuQScore[0]} max={initialDimensions.cpuQScore[1]} step={5} value={dimensions.cpuQScore} onValueChange={(value: number[]) => handleSliderChange(value, "cpuQScore")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="cpuFScore-slider" className="text-sm font-medium">CPU-F Score</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.cpuFScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.cpuFScore[1]}</Badge>
                  </div>
                </div>
                <Slider id="cpuFScore-slider" min={initialDimensions.cpuFScore[0]} max={initialDimensions.cpuFScore[1]} step={5} value={dimensions.cpuFScore} onValueChange={(value: number[]) => handleSliderChange(value, "cpuFScore")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="int8CNNs-slider" className="text-sm font-medium">INT8 CNNs (TOPS)</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.int8CNNs[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.int8CNNs[1]}</Badge>
                  </div>
                </div>
                <Slider id="int8CNNs-slider" min={initialDimensions.int8CNNs[0]} max={initialDimensions.int8CNNs[1]} step={10} value={dimensions.int8CNNs} onValueChange={(value: number[]) => handleSliderChange(value, "int8CNNs")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="int8Transformer-slider" className="text-sm font-medium">INT8 Transformer (TOPS)</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.int8Transformer[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.int8Transformer[1]}</Badge>
                  </div>
                </div>
                <Slider id="int8Transformer-slider" min={initialDimensions.int8Transformer[0]} max={initialDimensions.int8Transformer[1]} step={50} value={dimensions.int8Transformer} onValueChange={(value: number[]) => handleSliderChange(value, "int8Transformer")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="fp16CNNs-slider" className="text-sm font-medium">FP16 CNNs (TOPS)</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.fp16CNNs[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.fp16CNNs[1]}</Badge>
                  </div>
                </div>
                <Slider id="fp16CNNs-slider" min={initialDimensions.fp16CNNs[0]} max={initialDimensions.fp16CNNs[1]} step={10} value={dimensions.fp16CNNs} onValueChange={(value: number[]) => handleSliderChange(value, "fp16CNNs")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="fp16Transformer-slider" className="text-sm font-medium">FP16 Transformer (TOPS)</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.fp16Transformer[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.fp16Transformer[1]}</Badge>
                  </div>
                </div>
                <Slider id="fp16Transformer-slider" min={initialDimensions.fp16Transformer[0]} max={initialDimensions.fp16Transformer[1]} step={20} value={dimensions.fp16Transformer} onValueChange={(value: number[]) => handleSliderChange(value, "fp16Transformer")} className="cursor-grab active:cursor-grabbing" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="year-slider" className="text-sm font-medium">Release Year</label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.year[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.year[1]}</Badge>
                  </div>
                </div>
                <Slider id="year-slider" min={initialDimensions.year[0]} max={initialDimensions.year[1]} step={1} value={dimensions.year} onValueChange={(value: number[]) => handleSliderChange(value, "year")} className="cursor-grab active:cursor-grabbing" />
              </div>
            </CardContent>
          </Card>
        )}

        <div className={getGridClasses(itemsPerRow)}>
          {filteredData.slice(0, 100).map((item) => (
            <ProcessorCard key={item.name} item={item} pinnedProcessor={pinnedProcessor} setPinnedProcessor={setPinnedProcessor} starredProcessors={starredProcessors} setStarredProcessors={setStarredProcessors} priceEstimationMetric={priceEstimationMetric} getCachedMarketPrice={getCachedMarketPrice} setCachedMarketPrice={setCachedMarketPrice} visibleMetrics={visibleMetrics} />
          ))}
        </div>

        <footer className="mt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://github.com/visnkmr/procproj" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Source code available @ GitHub
            </a>
          </div>
          <p>Submit new Processors as PR on GitHub. Thanks.</p>
          <p className="italic text-xs leading-relaxed p-4 text-foreground">
            Disclaimer: The information provided on this website regarding processor specifications, performance benchmarks, and other related details is for general informational purposes only. While we strive to ensure the accuracy and completeness of the information, the specifications, benchmarks, and details listed are subject to change by the manufacturers without notice. We do not guarantee the accuracy, reliability, or completeness of the information provided on this site. Processor specifications and performance may vary by region, manufacturing process, and other factors. Always verify any critical processor details with the manufacturer or authorized sources before making purchasing decisions. We are not liable for any errors, omissions, or discrepancies in the information provided. By using this website, you agree that we are not responsible for any direct, indirect, incidental, or consequential damages arising from the use of the information provided.
          </p>
        </footer>
      </div>
    </>
  )
}