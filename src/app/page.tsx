"use client"

import { useState } from "react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
import {byd,nissan,renault,skoda,maruti,hyundai,honda,tesla,mg,fiat,tata,toyota,kia,mahindra,volkswagon} from './carmodels'
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

type CarData = {
  name: string
  yearsProduced: string
  power: string
  torque: string
  gears: string
  length: number
  width: number
  height: number
  groundClearance: number
  wheelbase: number
  turnRadius: number
  price: number
  capacity: string
  manufacturer: string
  weight:number
  estimatedCabinSpace:number
  sizeToWeightRatio:number
  dragCoefficient:number
}
function finddataspecs(data: CarData[]) {
  // List of properties for which you want min and max values
  const properties: (keyof CarData)[] = ["length", "width", "height", "turnRadius", "groundClearance", "wheelbase"]
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

export default function VehicleDimensions() {
  const [dimensions, setDimensions] = useState({
    height: [1000, 2000],
    width: [1300, 3000],
    length: [2800, 6000],
    wheelbase: [2100, 5500],
    turnRadius: [3, 15],
    groundClearence: [0, 500],
  })
  const [pinnedCar, setPinnedCar] = useState<CarData | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "length" | "width" | "height" | "price" | "manufacturer"| "groundClearance" | "wheelbase" | "turnRadius" | "weight" | "estimatedCabinSpace" | "sizeToWeightRatio" | "dragCoefficient">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [manufacturerFilter, setManufacturerFilter] = useState<string>("All")
  const [comparisonfield, setcomparisonfield] = useState<keyof CarData | "None">("None")
  const [comparisonFilter, setComparisonFilter] = useState<"none" | ">" | "<">("none")

  const handleSliderChange = (value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value,
    }))
  }

  const calculatePercentage = (value: number, reference: number): number => {
    if (!reference) return 0
    return Math.round(((value - reference) / reference) * 100)
  }
  const data = [
    ...renault,
    ...nissan,
    ...byd,
    ...skoda,
    ...maruti,
    ...hyundai,
    ...honda,
    ...tesla,
    ...mg,
    ...fiat,
    ...tata,
    ...toyota,
    ...kia,
    ...mahindra,
    ...volkswagon,
  ]

  finddataspecs(data)

  const manufacturers = Array.from(new Set(data.map((car) => car.manufacturer))).sort()
  const totalCarModels = data.length
  // console.log(data)
  // Filter and sort data
  const filteredData = data
  // .map(item=>{console.log(item); return item})
    .filter((item) => {
      // Always include pinned car
      if (pinnedCar && item.name === pinnedCar.name) return true

      // Filter by search query
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

      // Filter by dimension sliders
      return (
        item.height < dimensions.height[1] &&
        item.height > dimensions.height[0] &&
        item.width < dimensions.width[1] &&
        item.width > dimensions.width[0] &&
        item.length < dimensions.length[1] &&
        item.length > dimensions.length[0] &&
        item.wheelbase < dimensions.wheelbase[1] &&
        item.wheelbase > dimensions.wheelbase[0] &&
        item.turnRadius < dimensions.turnRadius[1] &&
        item.turnRadius > dimensions.turnRadius[0] &&
        item.groundClearance < dimensions.groundClearence[1] &&
        item.groundClearance > dimensions.groundClearence[0]
      )
    })
    // .map(item=>{console.log(item); return item})
    .filter((item) => {
      if (pinnedCar && item.name === pinnedCar.name) return true
      if (manufacturerFilter !== "All" && item.manufacturer !== manufacturerFilter) return false
      if (pinnedCar && comparisonFilter !== "none" && comparisonfield !== "None") {
              // for (const field of comparisonfield) {
          if (comparisonFilter === ">" && item[comparisonfield] <= pinnedCar[comparisonfield]) return false
          if (comparisonFilter === "<" && item[comparisonfield] >= pinnedCar[comparisonfield]) return false
        // }
      }
      return true
      
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return sortBy === "name"||sortBy === "manufacturer" ? a.name.localeCompare(b.name) : (a[sortBy] as number) - (b[sortBy] as number)
      } else {
        return sortBy === "name"||sortBy === "manufacturer" ? b.name.localeCompare(a.name) : (b[sortBy] as number) - (a[sortBy] as number)
      }
    })

  // const toggleSort = (field: typeof sortBy) => {
  //   if (sortBy === field) {
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  //   } else {
  //     setSortBy(field)
  //     setSortOrder("asc")
  //   }
  // }

  const initialDimensions = {
    height: [Math.min(...data.map((car) => car.height)), Math.max(...data.map((car) => car.height))],
    width: [Math.min(...data.map((car) => car.width)), Math.max(...data.map((car) => car.width))],
    length: [Math.min(...data.map((car) => car.length)), Math.max(...data.map((car) => car.length))],
    wheelbase: [Math.min(...data.map((car) => car.wheelbase)), Math.max(...data.map((car) => car.wheelbase))],
    turnRadius: [Math.min(...data.map((car) => car.turnRadius)), Math.max(...data.map((car) => car.turnRadius))],
    groundClearance: [
      Math.min(...data.map((car) => car.groundClearance)),
      Math.max(...data.map((car) => car.groundClearance)),
    ],
  }

  // setDimensions(initialDimensions)
  const [showDimensionsRange, setShowDimensionsRange] = useState(true)

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1600px] mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">SortedCars</h1>
          <p>
            {filteredData.length} of {totalCarModels} vehicles found
          </p>
        </div>

        {/* Search, Sort, and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search cars by name..."
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
              <option value="length">Sort by Length</option>
              <option value="width">Sort by Width</option>
              <option value="height">Sort by Height</option>
              <option value="price">Sort by Price</option>
              <option value="manufacturer">Sort by Manufacturer</option>
              <option value="groundClearance">Sort by Ground Clearance</option>
              <option value="wheelbase">Sort by Wheelbase</option>
              <option value="turnRadius">Sort by Turn Radius</option>
              <option value="weight">Sort by Weight</option>
              <option value="estimatedCabinSpace">Sort by Estimated Cabin Space</option>
              <option value="sizeToWeightRatio">Sort by Size to Weight Ratio</option>
              <option value="dragCoefficient">Sort by Drag Coefficient</option>
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
        {pinnedCar && (
          <div className="flex gap-2 items-center">
            <span>Compare to pinned car:</span>
            <select
              className="px-2 py-1 border rounded-md"
              value={comparisonFilter}
              onChange={(e) => setComparisonFilter(e.target.value as "none" | ">" | "<")}
            >
              <option value="all">Show All</option>
              <option value=">">Bigger Than Pinned</option>
              <option value="<">Smaller Than Pinned</option>
            </select>
            <select
              className="px-2 py-1 border rounded-md"
              value={comparisonfield}
              onChange={(e) => setcomparisonfield(e.target.value as keyof CarData | "None")}
            >
              <option value="None">None</option>
              {[
                "length",
                "width",
                "height",
                "wheelbase",
                "turnRadius",
                "groundClearance",
                "price",
              ].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Toggle for Dimensions Range */}
        <button className="px-3 py-1 border rounded-md" onClick={() => setShowDimensionsRange(!showDimensionsRange)}>
          {showDimensionsRange ? "Hide" : "Show"} Dimensions Range
        </button>
      </div>

      {/* Dimensions Range Card */}
      {showDimensionsRange && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Vehicle Dimensions Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="height-slider" className="text-sm font-medium">
                  Height
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.height[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.height[1]}</Badge>
                </div>
              </div>
              <Slider
                id="height-slider"
                min={initialDimensions.height[0]}
                max={initialDimensions.height[1]}
                step={100}
                value={dimensions.height}
                onValueChange={(value) => handleSliderChange(value, "height")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="width-slider" className="text-sm font-medium">
                  Width
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.width[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.width[1]}</Badge>
                </div>
              </div>
              <Slider
                id="width-slider"
                min={initialDimensions.width[0]}
                max={initialDimensions.width[1]}
                step={100}
                value={dimensions.width}
                onValueChange={(value) => handleSliderChange(value, "width")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="length-slider" className="text-sm font-medium">
                  Length
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.length[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.length[1]}</Badge>
                </div>
              </div>
              <Slider
                id="length-slider"
                min={initialDimensions.length[0]}
                max={initialDimensions.length[1]}
                step={100}
                value={dimensions.length}
                onValueChange={(value) => handleSliderChange(value, "length")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="wheelbase-slider" className="text-sm font-medium">
                  Wheelbase
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.wheelbase[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.wheelbase[1]}</Badge>
                </div>
              </div>
              <Slider
                id="wheelbase-slider"
                min={initialDimensions.wheelbase[0]}
                max={initialDimensions.wheelbase[1]}
                step={100}
                value={dimensions.wheelbase}
                onValueChange={(value) => handleSliderChange(value, "wheelbase")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="turn-radius-slider" className="text-sm font-medium">
                  Turn Radius
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.turnRadius[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.turnRadius[1]}</Badge>
                </div>
              </div>
              <Slider
                id="turn-radius-slider"
                min={initialDimensions.turnRadius[0]}
                max={initialDimensions.turnRadius[1]}
                step={0.1}
                value={dimensions.turnRadius}
                onValueChange={(value) => handleSliderChange(value, "turnRadius")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="gc-slider" className="text-sm font-medium">
                  Ground clearance
                </label>
                <div className="flex gap-2">
                  <Badge variant="outline">Min: {dimensions.groundClearence[0]}</Badge>
                  <Badge variant="outline">Max: {dimensions.groundClearence[1]}</Badge>
                </div>
              </div>
              <Slider
                id="gc-slider"
                min={initialDimensions.groundClearance[0]}
                max={initialDimensions.groundClearance[1]}
                step={10}
                value={dimensions.groundClearence}
                onValueChange={(value) => handleSliderChange(value, "groundClearence")}
                className="cursor-grab active:cursor-grabbing"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredData.map((item) => (
          <Card
            key={item.name}
            className={`${pinnedCar?.name === item.name ? "border-2 border-primary" : ""} ${
              pinnedCar?.name === item.name && !dimensions.height.includes(item.height) ? "bg-primary/5" : ""
            }`}
          >
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>
                  {item.yearsProduced}
                  <br />
                  Power: {item.power}
                  <br />
                  Torque: {item.torque}
                  <br />
                  Gears: {item.gears}
                </CardDescription>
              </div>
              <button
                onClick={() => setPinnedCar(pinnedCar?.name === item.name ? null : item)}
                className="p-2 rounded-full hover:bg-muted"
                title={pinnedCar?.name === item.name ? "Unpin this car" : "Pin this car for comparison"}
              >
                {pinnedCar?.name === item.name ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path>
                    <path d="M4 16.5V17a7 7 0 0 0 14 0v-.5"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path>
                    <path d="M4 16.5V17a7 7 0 0 0 14 0v-.5"></path>
                  </svg>
                )}
              </button>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Price: ${item.price?.toLocaleString() || "9999"}
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.price, pinnedCar.price) > 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                  >
                    {calculatePercentage(item.price, pinnedCar.price) > 0 ? "+" : ""}
                    {calculatePercentage(item.price, pinnedCar.price)}%
                  </Badge>
                )}
              </p>
              <p>
                Length: {item.length} mm
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.length, pinnedCar.length) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.length, pinnedCar.length) > 0 ? "+" : ""}
                    {calculatePercentage(item.length, pinnedCar.length)}%
                  </Badge>
                )}
              </p>
              <p>
                Width: {item.width} mm
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.width, pinnedCar.width) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.width, pinnedCar.width) > 0 ? "+" : ""}
                    {calculatePercentage(item.width, pinnedCar.width)}%
                  </Badge>
                )}
              </p>
              <p>
                Height: {item.height} mm
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.height, pinnedCar.height) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.height, pinnedCar.height) > 0 ? "+" : ""}
                    {calculatePercentage(item.height, pinnedCar.height)}%
                  </Badge>
                )}
              </p>
              <p>
                Wheelbase: {item.wheelbase} mm
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.wheelbase, pinnedCar.wheelbase) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.wheelbase, pinnedCar.wheelbase) > 0 ? "+" : ""}
                    {calculatePercentage(item.wheelbase, pinnedCar.wheelbase)}%
                  </Badge>
                )}
              </p>
              <p>
                Turn Radius: {item.turnRadius} m
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.turnRadius, pinnedCar.turnRadius) > 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                  >
                    {calculatePercentage(item.turnRadius, pinnedCar.turnRadius) > 0 ? "+" : ""}
                    {calculatePercentage(item.turnRadius, pinnedCar.turnRadius)}%
                  </Badge>
                )}
              </p>
              <p>
                Ground Clearance: {item.groundClearance} mm
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.groundClearance, pinnedCar.groundClearance) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.groundClearance, pinnedCar.groundClearance) > 0 ? "+" : ""}
                    {calculatePercentage(item.groundClearance, pinnedCar.groundClearance)}%
                  </Badge>
                )}
              </p>
              <p>
                Weight: {item.weight} kg
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.weight, pinnedCar.weight) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.weight, pinnedCar.weight) > 0 ? "+" : ""}
                    {calculatePercentage(item.weight, pinnedCar.weight)}%
                  </Badge>
                )}
              </p>
              <p>Capacity: {item.capacity}</p>
              <p>
                Estimated Cabin Space: {(item.estimatedCabinSpace/1000000000).toPrecision(2)} m^3
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.estimatedCabinSpace, pinnedCar.estimatedCabinSpace) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(item.estimatedCabinSpace, pinnedCar.estimatedCabinSpace) > 0 ? "+" : ""}
                    {calculatePercentage(item.estimatedCabinSpace, pinnedCar.estimatedCabinSpace)}%
                  </Badge>
                )}
              </p>
              <p>
               Drag Coefficient: {item.dragCoefficient} m
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(item.dragCoefficient, pinnedCar.dragCoefficient) > 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                  >
                    {calculatePercentage(item.dragCoefficient, pinnedCar.dragCoefficient) > 0 ? "+" : ""}
                    {calculatePercentage(item.dragCoefficient, pinnedCar.dragCoefficient)}%
                  </Badge>
                )}
              </p>
              <p>
                Size to Weight Ratio: {((1/item.sizeToWeightRatio)*1000000).toPrecision(2)}
                {pinnedCar && pinnedCar.name !== item.name && (
                  <Badge
                    className={`ml-2 ${calculatePercentage(1/item.sizeToWeightRatio, 1/pinnedCar.sizeToWeightRatio) > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {calculatePercentage(1/item.sizeToWeightRatio, 1/pinnedCar.sizeToWeightRatio) > 0 ? "+" : ""}
                    {calculatePercentage(1/item.sizeToWeightRatio, 1/pinnedCar.sizeToWeightRatio)}%
                  </Badge>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/visnkmr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
          {/* <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a> */}
        </div>
        <p>Made by Vishnu</p>
      </footer>
    </div>
  )
}

