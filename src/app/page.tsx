"use client"

import { useState } from "react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"



export default function Home() {
  const [dimensions, setDimensions] = useState({
    height: 1400,
    width: 1300,
    length: 2800,
    wheelbase: 2100,
    turnRadius: 3,
  })

  const handleSliderChange = (value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value[0],
    }))
  }

// var data = require('../cardets.json'); // forward slashes will depend on the file location
const data=[
  {
    "name": "MG Hector",
    "description": "MG Hector - A spacious SUV offering advanced infotainment and safety features.",
    "length": 4659,
    "width": 1894,
    "height": 1695,
    "turnRadius": 5.7,
    "groundClearance": 188,
    "wheelbase": 2750
  },
  {
    "name": "MG Hector Plus",
    "description": "MG Hector Plus - Extended version of the Hector with 3-row seating and enhanced features.",
    "length": 4793,
    "width": 1894,
    "height": 1710,
    "turnRadius": 5.9,
    "groundClearance": 190,
    "wheelbase": 2780
  },
  {
    "name": "MG ZS EV",
    "description": "MG ZS EV - A fully electric compact SUV with modern connectivity and energy efficient drive.",
    "length": 4300,
    "width": 1800,
    "height": 1620,
    "turnRadius": 5.2,
    "groundClearance": 170,
    "wheelbase": 2650
  },
  {
    "name": "MG Gloster",
    "description": "MG Gloster - A premium 7-seater SUV with robust performance and luxurious appointments.",
    "length": 5250,
    "width": 1976,
    "height": 1937,
    "turnRadius": 6.5,
    "groundClearance": 222,
    "wheelbase": 3000
  },
  {
    "name": "MG Hector Classic",
    "description": "MG Hector Classic - A variant of the Hector focusing on timeless design and reliable performance.",
    "length": 4659,
    "width": 1894,
    "height": 1690,
    "turnRadius": 5.7,
    "groundClearance": 188,
    "wheelbase": 2750
  },
  {
    "name": "MG Hector DSG",
    "description": "MG Hector DSG - Equipped with a dual-clutch transmission for a smoother driving experience.",
    "length": 4659,
    "width": 1894,
    "height": 1695,
    "turnRadius": 5.7,
    "groundClearance": 188,
    "wheelbase": 2750
  },
  {
    "name": "MG Hector Manual",
    "description": "MG Hector Manual - The traditional manual gear variant offering direct control and efficiency.",
    "length": 4659,
    "width": 1894,
    "height": 1695,
    "turnRadius": 5.7,
    "groundClearance": 188,
    "wheelbase": 2750
  },
  {
    "name": "MG Hector AMT",
    "description": "MG Hector AMT - Featuring automated manual transmission for ease in urban driving.",
    "length": 4659,
    "width": 1894,
    "height": 1695,
    "turnRadius": 5.7,
    "groundClearance": 188,
    "wheelbase": 2750
  },
  {
    "name": "MG ZS EV Plus",
    "description": "MG ZS EV Plus - An enhanced variant of the ZS EV with greater range and premium features.",
    "length": 4350,
    "width": 1810,
    "height": 1630,
    "turnRadius": 5.3,
    "groundClearance": 172,
    "wheelbase": 2660
  },
  {
    "name": "MG Gloster Limited",
    "description": "MG Gloster Limited - A top-end variant of the Gloster with additional luxury and tech upgrades.",
    "length": 5250,
    "width": 1976,
    "height": 1937,
    "turnRadius": 6.5,
    "groundClearance": 222,
    "wheelbase": 3000
  }
];
  console.log(data)
  // Scale factor for visualization
  const scale = 0.09

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Vehicle Dimensions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="height-slider" className="text-sm font-medium">
                Height
              </label>
              <span className="text-sm font-medium">{dimensions.height} units</span>
            </div>
            <Slider
              id="height-slider"
              min={1400}
              max={2000}
              step={50}
              value={[dimensions.height]}
              onValueChange={(value) => handleSliderChange(value, "height")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="width-slider" className="text-sm font-medium">
                Width
              </label>
              <span className="text-sm font-medium">{dimensions.width} units</span>
            </div>
            <Slider
              id="width-slider"
              min={1300}
              max={2000}
              step={50}
              value={[dimensions.width]}
              onValueChange={(value) => handleSliderChange(value, "width")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="length-slider" className="text-sm font-medium">
                Length
              </label>
              <span className="text-sm font-medium">{dimensions.length} units</span>
            </div>
            <Slider
              id="length-slider"
              min={2800}
              max={6000}
              step={100}
              value={[dimensions.length]}
              onValueChange={(value) => handleSliderChange(value, "length")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="wheelbase-slider" className="text-sm font-medium">
                Wheelbase
              </label>
              <span className="text-sm font-medium">{dimensions.wheelbase} units</span>
            </div>
            <Slider
              id="wheelbase-slider"
              min={2100}
              max={5500}
              step={100}
              value={[dimensions.wheelbase]}
              onValueChange={(value) => handleSliderChange(value, "wheelbase")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="turn-radius-slider" className="text-sm font-medium">
                Turn Radius
              </label>
              <span className="text-sm font-medium">{dimensions.turnRadius} units</span>
            </div>
            <Slider
              id="turn-radius-slider"
              min={3}
              max={5}
              step={.25}
              value={[dimensions.turnRadius]}
              onValueChange={(value) => handleSliderChange(value, "turnRadius")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Visual Representation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[400px] border border-dashed border-gray-300 rounded-md overflow-hidden">
            {/* Top view of vehicle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Vehicle body */}
              <div
                className="bg-primary/20 border-2 border-primary rounded-md relative"
                style={{
                  width: dimensions.width * scale,
                  height: dimensions.length * scale,
                }}
              >
                {/* Wheelbase visualization */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-primary/70"
                  style={{
                    height: dimensions.wheelbase * scale,
                    top: (dimensions.length * scale - dimensions.wheelbase * scale) / 2,
                  }}
                ></div>

                {/* Turn radius visualization */}
                <div
                  className="absolute border-2 border-dashed border-primary/50 rounded-full"
                  style={{
                    width: dimensions.turnRadius * 2 * scale,
                    height: dimensions.turnRadius * 2 * scale,
                    left: (dimensions.width * scale) / 2 - dimensions.turnRadius * scale,
                    top: -dimensions.turnRadius * scale + (dimensions.length * scale) / 4,
                  }}
                ></div>

                {/* Height indicator */}
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <div className="bg-primary/30 w-3" style={{ height: (dimensions.height * scale) / 2 }}></div>
                  <span className="text-xs whitespace-nowrap">Height: {dimensions.height}</span>
                </div>

                {/* Width label */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                  Width: {dimensions.width}
                </div>

                {/* Length label */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 rotate-90 origin-center text-xs whitespace-nowrap">
                  Length: {dimensions.length}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

