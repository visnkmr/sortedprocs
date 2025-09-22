"use client"

// 1. Import necessary hooks for optimization
import { useState, useMemo, useCallback, memo} from "react"

// Add imports for the info button and popups
import { Github } from "lucide-react"


import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  processors,
} from "./carmodels"
import { Delete, PinIcon, PinOff, Star, StarOff } from "lucide-react"
import SizeComparisonDialog from "./size-comparison-dialog"
import { InfoPopover } from "./info-components"
// groundClearance
// :
// {min: 100, max: 400}
// height
// :
// {min: 1150, max: 1937}
// length
// :
// {min: 4300, max: 5885}
// turnRadius
// :
// {min: 5.2, max: 7}
// wheelbase
// :
// {min: 2450, max: 3650}
// width
// :
// {min: 1800, max: 2070}

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
}

// 17. Move the finddataspecs function outside the component
function finddataspecs(data: ProcessorData[]) {
  // Only run this in development mode
  if (process.env.NODE_ENV !== "production") {
    // List of properties for which you want min and max values
    const properties: (keyof ProcessorData)[] = ["cores", "clockSpeed", "antutuScore", "geekbenchSingle", "geekbenchMulti", "performanceScore"]
    // Initialize an object to store the results
    type MinMax = { min: number; max: number }

    interface Stats {
      [key: string]: MinMax
    }

    const stats: Stats = {}

    // Initialize stats with the first element from data as reference (if available)
    if (data.length > 0) {
      properties.forEach((prop) => {
        stats[prop] = {
          min: data[0][prop] as number,
          max: data[0][prop] as number,
        }
      })
    }

    // Iterate over the data to compute min and max for each property
    data.forEach((item) => {
      properties.forEach((prop) => {
        const value = item[prop] as number
        if (value < stats[prop].min) {
          stats[prop].min = value
        }
        if (value > stats[prop].max) {
          stats[prop].max = value
        }
      })
    })

    console.log("Stats:", stats)
  }
}

// 3. Create a memoized ProcessorCard component to prevent unnecessary re-renders
type processorcardprops = {
  item: ProcessorData,
  pinnedProcessor: ProcessorData | null,
  setPinnedProcessor: React.Dispatch<React.SetStateAction<ProcessorData | null>>,
  starredProcessors: string[]|null,
  starprocessor: React.Dispatch<React.SetStateAction<string[]|null>>,
}
// eslint-disable-next-line react/display-name
const ProcessorCard = memo(({ item, pinnedProcessor, setPinnedProcessor, starredProcessors, starprocessor }:processorcardprops) => {
  // Move the percentage calculation inside the memoized component
  const calculatePercentage = useCallback((value: number, reference: number) => {
    if (!reference) return 0
    return Math.round(((value - reference) / reference) * 100)
  }, [])

  return (
    <Card
      className={`${pinnedProcessor?.name === item.name ? "border-2 border-primary" : ""} ${
        pinnedProcessor?.name === item.name ? "bg-primary/5" : ""
      }`}
    >
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>
            {item.manufacturer}
            <br />
            Performance Score: {item.performanceScore}
            <br />
            Performance Grade: {item.performanceGrade}
            <br />
            Cores: {item.cores} ({item.coreConfig})
          </CardDescription>
        </div>
        <button
          onClick={() => setPinnedProcessor(pinnedProcessor?.name === item.name ? null : item)}
          className="p-2 rounded-full hover:bg-muted"
          title={pinnedProcessor?.name === item.name ? "Unpin this processor" : "Pin this processor for comparison"}
        >
          {pinnedProcessor?.name === item.name ? <PinIcon /> : <PinOff />}
        </button>
        <button
          onClick={() =>
            starprocessor(
              starredProcessors?.includes(item.name)
                ? starredProcessors.filter((processor) => processor !== item.name)
                : [...(starredProcessors ? starredProcessors : []), item.name],
            )
          }
          className="p-2 rounded-full hover:bg-muted"
          title={starredProcessors?.includes(item.name) ? "Unstar this processor" : "Star this processor"}
        >
          {starredProcessors?.includes(item.name) ? <Star /> : <StarOff />}
        </button>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          AnTuTu Score: {item.antutuScore?.toLocaleString() || "N/A"}
          {pinnedProcessor && pinnedProcessor.name !== item.name && (
            <Badge
              className={`ml-2 ${calculatePercentage(item.antutuScore, pinnedProcessor.antutuScore) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {calculatePercentage(item.antutuScore, pinnedProcessor.antutuScore) > 0 ? "+" : ""}
              {calculatePercentage(item.antutuScore, pinnedProcessor.antutuScore)}%
            </Badge>
          )}
        </p>
        <p className="flex items-center gap-1">
          Geekbench Single: {item.geekbenchSingle}
          {pinnedProcessor && pinnedProcessor.name !== item.name && (
            <Badge
              className={`ml-2 ${calculatePercentage(item.geekbenchSingle, pinnedProcessor.geekbenchSingle) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {calculatePercentage(item.geekbenchSingle, pinnedProcessor.geekbenchSingle) > 0 ? "+" : ""}
              {calculatePercentage(item.geekbenchSingle, pinnedProcessor.geekbenchSingle)}%
            </Badge>
          )}
        </p>
        <p>
          Geekbench Multi: {item.geekbenchMulti}
          {pinnedProcessor && pinnedProcessor.name !== item.name && (
            <Badge
              className={`ml-2 ${calculatePercentage(item.geekbenchMulti, pinnedProcessor.geekbenchMulti) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {calculatePercentage(item.geekbenchMulti, pinnedProcessor.geekbenchMulti) > 0 ? "+" : ""}
              {calculatePercentage(item.geekbenchMulti, pinnedProcessor.geekbenchMulti)}%
            </Badge>
          )}
        </p>
        <p>
          Clock Speed: {item.clockSpeed} MHz
          {pinnedProcessor && pinnedProcessor.name !== item.name && (
            <Badge
              className={`ml-2 ${calculatePercentage(item.clockSpeed, pinnedProcessor.clockSpeed) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {calculatePercentage(item.clockSpeed, pinnedProcessor.clockSpeed) > 0 ? "+" : ""}
              {calculatePercentage(item.clockSpeed, pinnedProcessor.clockSpeed)}%
            </Badge>
          )}
        </p>
        <p>
          GPU: {item.gpu}
        </p>
        <p className="flex items-center gap-1">
          Performance Score: {item.performanceScore}
          <InfoPopover title="Performance Score" srText="What is Performance Score?" text="This is a composite score that represents the overall performance capability of the processor based on various benchmarks and specifications."/>
          {pinnedProcessor && pinnedProcessor.name !== item.name && (
            <Badge
              className={`ml-2 ${calculatePercentage(item.performanceScore, pinnedProcessor.performanceScore) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {calculatePercentage(item.performanceScore, pinnedProcessor.performanceScore) > 0 ? "+" : ""}
              {calculatePercentage(item.performanceScore, pinnedProcessor.performanceScore)}%
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
        {/* Performance Comparison Dialog */}
        <div className="pt-2">
          <SizeComparisonDialog item={item} pinnedProcessor={pinnedProcessor} />
        </div>
      </CardContent>
    </Card>
  )
})

// 4. Replace the main component with optimized version
export default function ProcessorComparison() {
  // 5. Move finddataspecs outside the component to prevent recalculation on every render
  const [dimensions, setDimensions] = useState({
    cores: [1, 16],
    clockSpeed: [1000, 5000],
    antutuScore: [100000, 3000000],
    geekbenchSingle: [500, 4000],
    geekbenchMulti: [1000, 11000],
    performanceScore: [20, 100],
  })
  const [pinnedProcessor, setPinnedProcessor] = useState<ProcessorData | null>(null)
  const [starredProcessors, starprocessor] = useState<string[] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<
    | "name"
    | "cores"
    | "clockSpeed"
    | "antutuScore"
    | "geekbenchSingle"
    | "geekbenchMulti"
    | "performanceScore"
    | "manufacturer"
  >("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [manufacturerFilter, setManufacturerFilter] = useState<string>("All")
  const [comparisons, setComparisons] = useState<{ field: keyof ProcessorData; operator: ">" | "<" }[]>([])
  const [showDimensionsRange, setShowDimensionsRange] = useState(true)

  // 6. Memoize the combined data array to prevent recreation on every render
  const data = useMemo(
    () => processors,
    [],
  )

  // 7. Memoize manufacturers list
  const manufacturers = useMemo(() => Array.from(new Set(data.map((processor) => processor.manufacturer))).sort(), [data])

  // 8. Memoize total processor models count
  const totalProcessorModels = useMemo(() => data.length, [data])

  // 9. Memoize initial dimensions to prevent recalculation
  const initialDimensions = useMemo(
    () => ({
      cores: [Math.min(...data.map((processor) => processor.cores)), Math.max(...data.map((processor) => processor.cores))],
      clockSpeed: [Math.min(...data.map((processor) => processor.clockSpeed)), Math.max(...data.map((processor) => processor.clockSpeed))],
      antutuScore: [Math.min(...data.map((processor) => processor.antutuScore)), Math.max(...data.map((processor) => processor.antutuScore))],
      geekbenchSingle: [Math.min(...data.map((processor) => processor.geekbenchSingle)), Math.max(...data.map((processor) => processor.geekbenchSingle))],
      geekbenchMulti: [Math.min(...data.map((processor) => processor.geekbenchMulti)), Math.max(...data.map((processor) => processor.geekbenchMulti))],
      performanceScore: [Math.min(...data.map((processor) => processor.performanceScore)), Math.max(...data.map((processor) => processor.performanceScore))],
    }),
    [data],
  )

  // 10. Memoize the filtered data to prevent recalculation on every render
  const filteredData = useMemo(() => {
    return data
      .filter((item) => {
        if (starredProcessors && starredProcessors?.includes(item.name)) return true
        if (pinnedProcessor && item.name === pinnedProcessor.name) return true
        if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

        return (
          item.cores >= dimensions.cores[0] &&
          item.cores <= dimensions.cores[1] &&
          item.clockSpeed >= dimensions.clockSpeed[0] &&
          item.clockSpeed <= dimensions.clockSpeed[1] &&
          item.antutuScore >= dimensions.antutuScore[0] &&
          item.antutuScore <= dimensions.antutuScore[1] &&
          item.geekbenchSingle >= dimensions.geekbenchSingle[0] &&
          item.geekbenchSingle <= dimensions.geekbenchSingle[1] &&
          item.geekbenchMulti >= dimensions.geekbenchMulti[0] &&
          item.geekbenchMulti <= dimensions.geekbenchMulti[1] &&
          item.performanceScore >= dimensions.performanceScore[0] &&
          item.performanceScore <= dimensions.performanceScore[1]
        )
      })
      .filter((item) => {
        if (starredProcessors && starredProcessors?.includes(item.name)) return true
        if (pinnedProcessor && item.name === pinnedProcessor.name) return true
        if (manufacturerFilter !== "All" && item.manufacturer !== manufacturerFilter) return false

        return comparisons.every((comparison) => {
          if (pinnedProcessor) {
            const processorValue = item[comparison.field]
            const pinnedProcessorValue = pinnedProcessor[comparison.field]

            if (comparison.operator === ">") {
              return processorValue > pinnedProcessorValue
            } else if (comparison.operator === "<") {
              return processorValue < pinnedProcessorValue
            }
          }
          return true
        })
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return sortBy === "name" || sortBy === "manufacturer"
            ? a.name.localeCompare(b.name)
            : (a[sortBy] as number) - (b[sortBy] as number)
        } else {
          return sortBy === "name" || sortBy === "manufacturer"
            ? b.name.localeCompare(a.name)
            : (b[sortBy] as number) - (a[sortBy] as number)
        }
      })
  }, [data, dimensions, searchQuery, manufacturerFilter, comparisons, pinnedProcessor, starredProcessors, sortBy, sortOrder])

  // 11. Use useCallback for event handlers to prevent recreation on every render
  const handleSliderChange = useCallback((value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value,
    }))
  }, [])

  // 12. Use useCallback for the toggle dimensions function
  const toggleDimensionsRange = useCallback(() => {
    setShowDimensionsRange(!showDimensionsRange)
  }, [showDimensionsRange])

  // 13. Use useCallback for the add comparison function
  const addComparison = useCallback(() => {
    setComparisons([...comparisons, { field: "cores", operator: ">" }])
  }, [comparisons])

  // 14. Use useCallback for the remove comparison function
  const removeComparison = useCallback((index: number) => {
    setComparisons((prevComparisons) => prevComparisons.filter((_, i) => i !== index))
  }, [])

  // 15. Use useCallback for the update comparison function
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
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">SortedProc</h1>
              <a
                href="https://github.com/visnkmr/processorcompare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Star</span>
              </a>
            </div>
            <p>
              {filteredData.length} of {totalProcessorModels} processors found
            </p>
          </div>

          {/* Search, Sort, and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search processors by name..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-2 py-1 border rounded-md"
                value={manufacturerFilter}
                onChange={(e) => setManufacturerFilter(e.target.value)}
              >
                <option value="All">All Manufacturers</option>
                {manufacturers.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                className="px-2 py-1 border rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              >
                <option value="name">Sort by Name</option>
                <option value="cores">Sort by Cores</option>
                <option value="clockSpeed">Sort by Clock Speed</option>
                <option value="antutuScore">Sort by AnTuTu Score</option>
                <option value="geekbenchSingle">Sort by Geekbench Single</option>
                <option value="geekbenchMulti">Sort by Geekbench Multi</option>
                <option value="performanceScore">Sort by Performance Score</option>
                <option value="manufacturer">Sort by Manufacturer</option>
              </select>
              <button
                className="px-3 py-1 border rounded-md flex items-center gap-1"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
              </button>
            </div>
          </div>

          {/* Comparison Filter */}
          {pinnedProcessor && (
            <div className="flex flex-col gap-2 items-center">
              <span>Find processors with:</span>

              {/* Add a new comparison filter */}
              <button onClick={addComparison} className="px-2 py-1 border rounded-md">
                Add Comparison
              </button>

              {/* Display existing comparisons */}
              {comparisons.map((comparison, index) => (
                <div key={index} className="flex gap-2 items-center mb-2">
                  <select
                    className="px-2 py-1 border rounded-md"
                    value={comparison.field}
                    onChange={(e) => updateComparison(index, e.target.value as keyof ProcessorData, comparison.operator)}
                  >
                    <option value="cores">Cores</option>
                    <option value="clockSpeed">Clock Speed</option>
                    <option value="antutuScore">AnTuTu Score</option>
                    <option value="geekbenchSingle">Geekbench Single</option>
                    <option value="geekbenchMulti">Geekbench Multi</option>
                    <option value="performanceScore">Performance Score</option>
                  </select>
                  <select
                    className="px-2 py-1 border rounded-md"
                    value={comparison.operator}
                    onChange={(e) => updateComparison(index, comparison.field, e.target.value as ">" | "<")}
                  >
                    <option value=">">&gt; {pinnedProcessor.name}</option>
                    <option value="<">&lt; {pinnedProcessor.name}</option>
                  </select>

                  {/* Remove Comparison Button */}
                  <button
                    onClick={() => removeComparison(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    <Delete />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Toggle for Dimensions Range */}
          <button className="px-3 py-1 border rounded-md" onClick={toggleDimensionsRange}>
            {showDimensionsRange ? "Hide" : "Show"} Specifications Range
          </button>
        </div>

        {/* Dimensions Range Card */}
        {showDimensionsRange && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Processor Specifications Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="cores-slider" className="text-sm font-medium">
                    Cores
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.cores[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.cores[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="cores-slider"
                  min={initialDimensions.cores[0]}
                  max={initialDimensions.cores[1]}
                  step={1}
                  value={dimensions.cores}
                  onValueChange={(value: number[]) => handleSliderChange(value, "cores")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="clockSpeed-slider" className="text-sm font-medium">
                    Clock Speed (MHz)
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.clockSpeed[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.clockSpeed[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="clockSpeed-slider"
                  min={initialDimensions.clockSpeed[0]}
                  max={initialDimensions.clockSpeed[1]}
                  step={50}
                  value={dimensions.clockSpeed}
                  onValueChange={(value: number[]) => handleSliderChange(value, "clockSpeed")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="antutuScore-slider" className="text-sm font-medium">
                    AnTuTu Score
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.antutuScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.antutuScore[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="antutuScore-slider"
                  min={initialDimensions.antutuScore[0]}
                  max={initialDimensions.antutuScore[1]}
                  step={10000}
                  value={dimensions.antutuScore}
                  onValueChange={(value: number[]) => handleSliderChange(value, "antutuScore")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="geekbenchSingle-slider" className="text-sm font-medium">
                    Geekbench Single
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.geekbenchSingle[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.geekbenchSingle[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="geekbenchSingle-slider"
                  min={initialDimensions.geekbenchSingle[0]}
                  max={initialDimensions.geekbenchSingle[1]}
                  step={50}
                  value={dimensions.geekbenchSingle}
                  onValueChange={(value: number[]) => handleSliderChange(value, "geekbenchSingle")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="geekbenchMulti-slider" className="text-sm font-medium">
                    Geekbench Multi
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.geekbenchMulti[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.geekbenchMulti[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="geekbenchMulti-slider"
                  min={initialDimensions.geekbenchMulti[0]}
                  max={initialDimensions.geekbenchMulti[1]}
                  step={100}
                  value={dimensions.geekbenchMulti}
                  onValueChange={(value: number[]) => handleSliderChange(value, "geekbenchMulti")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="performanceScore-slider" className="text-sm font-medium">
                    Performance Score
                  </label>
                  <div className="flex gap-2">
                    <Badge variant="outline">Min: {dimensions.performanceScore[0]}</Badge>
                    <Badge variant="outline">Max: {dimensions.performanceScore[1]}</Badge>
                  </div>
                </div>
                <Slider
                  id="performanceScore-slider"
                  min={initialDimensions.performanceScore[0]}
                  max={initialDimensions.performanceScore[1]}
                  step={1}
                  value={dimensions.performanceScore}
                  onValueChange={(value: number[]) => handleSliderChange(value, "performanceScore")}
                  className="cursor-grab active:cursor-grabbing"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Car Grid - Use windowing for better performance with large lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-4">
          {/* 16. Use the memoized ProcessorCard component for each processor */}
          {filteredData.slice(0, 100).map((item) => (
            <ProcessorCard
              key={item.name}
              item={item}
              pinnedProcessor={pinnedProcessor}
              setPinnedProcessor={setPinnedProcessor}
              starredProcessors={starredProcessors}
              starprocessor={starprocessor}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://github.com/visnkmr/procproj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Source code availble @ GitHub
            </a>
          </div>

          <p>Submit new Processors as PR on GitHub. Thanks.</p>
          <p className="italic text-xs leading-relaxed p-4 text-black">
            Disclaimer: The information provided on this website regarding processor specifications, performance benchmarks, and other
            related details is for general informational purposes only. While we strive to ensure the accuracy and
            completeness of the information, the specifications, benchmarks, and details listed are subject to change by
            the manufacturers without notice. We do not guarantee the accuracy, reliability, or completeness of the
            information provided on this site. Processor specifications and performance may vary by region, manufacturing process, and other
            factors. Always verify any critical processor details with the manufacturer or authorized sources
            before making purchasing decisions. We are not liable for any errors, omissions, or discrepancies in the
            information provided. By using this website, you agree that we are not responsible for any direct, indirect,
            incidental, or consequential damages arising from the use of the information provided.
          </p>
        </footer>
      </div>
    </>
  )
}

