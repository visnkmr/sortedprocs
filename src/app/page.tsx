

"use client"

import { useState } from "react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
import { it } from "node:test"

export default function VehicleDimensions() {
  const [dimensions, setDimensions] = useState({
    height: [1300, 1500],
    width: [1200, 1900],
    length: [3500, 4300],
    wheelbase: [2500, 2800],
    turnRadius: [4.5, 5.5],
    groundClearence:[160,170]
  })

  const handleSliderChange = (value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value,
    }))
  }

  const data=[
    {
      "name": "Tesla Model S",
      "description": "Tesla Model S - A full-size all-electric five-door liftback sedan known for its high performance and long range.",
      "length": 4970,
      "width": 1964,
      "height": 1445,
      "turnRadius": 5.8,
      "groundClearance": 130,
      "wheelbase": 2960
    },
    {
      "name": "Tesla Model 3",
      "description": "Tesla Model 3 - A compact all-electric sedan offering a balance of performance, safety, and spaciousness.",
      "length": 4694,
      "width": 1849,
      "height": 1443,
      "turnRadius": 5.4,
      "groundClearance": 140,
      "wheelbase": 2875
    },
    {
      "name": "Tesla Model X",
      "description": "Tesla Model X - A mid-size all-electric luxury SUV with falcon-wing doors and ample seating for up to 7 adults.",
      "length": 5036,
      "width": 2070,
      "height": 1684,
      "turnRadius": 6.1,
      "groundClearance": 137,
      "wheelbase": 2965
    },
    {
      "name": "Tesla Model Y",
      "description": "Tesla Model Y - A compact all-electric SUV with versatile seating options and advanced safety features.",
      "length": 4751,
      "width": 1921,
      "height": 1624,
      "turnRadius": 5.7,
      "groundClearance": 170,
      "wheelbase": 2700
    },
    {
      "name": "Tesla Roadster",
      "description": "Tesla Roadster - An all-electric sports car that emphasizes speed and performance with a sleek design.",
      "length": 4380,
      "width": 1940,
      "height": 1150,
      "turnRadius": 5.2,
      "groundClearance": 100,
      "wheelbase": 2450
    },
    {
      "name": "Tesla Cybertruck",
      "description": "Tesla Cybertruck - A futuristic all-electric pickup truck with a distinct angular design and high durability.",
      "length": 5885,
      "width": 2030,
      "height": 1921,
      "turnRadius": 7.0,
      "groundClearance": 400,
      "wheelbase": 3650
    },
    {
      "name": "Tesla Model S Plaid",
      "description": "Tesla Model S Plaid - The high-performance variant of the Model S, boasting extreme acceleration and cutting-edge technology.",
      "length": 4970,
      "width": 1964,
      "height": 1445,
      "turnRadius": 5.8,
      "groundClearance": 130,
      "wheelbase": 2960
    },
    {
      "name": "Tesla Model 3 Performance",
      "description": "Tesla Model 3 Performance - The performance-focused variant of the Model 3, offering enhanced power and handling.",
      "length": 4694,
      "width": 1849,
      "height": 1443,
      "turnRadius": 5.4,
      "groundClearance": 140,
      "wheelbase": 2875
    },
    {
      "name": "Tesla Model X Plaid",
      "description": "Tesla Model X Plaid - The performance edition of the Model X with superior acceleration and advanced features.",
      "length": 5036,
      "width": 2070,
      "height": 1684,
      "turnRadius": 6.1,
      "groundClearance": 137,
      "wheelbase": 2965
    },
    {
      "name": "Tesla Roadster 2.0",
      "description": "Tesla Roadster 2.0 - An updated version of the iconic Roadster aimed at delivering record-setting speeds and enhanced range.",
      "length": 4400,
      "width": 1950,
      "height": 1160,
      "turnRadius": 5.3,
      "groundClearance": 105,
      "wheelbase": 2470
    },
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
    const scale = 0.5/8

  // Function to get the average value for visualization
  const getAverage = (values: number[]) => {
    return (values[0] + values[1]) / 2
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-4">
<Card className="flex-1">
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
              min={1400}
              max={2000}
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
              min={1300}
              max={2000}
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
              min={2800}
              max={6000}
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
              min={2100}
              max={5500}
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
              min={3}
              max={5}
              step={.25}
              value={dimensions.turnRadius}
              onValueChange={(value) => handleSliderChange(value, "turnRadius")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1 hidden">
        <CardHeader>
          <CardTitle>Visual Representation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[800px] border border-dashed border-gray-300 rounded-md overflow-hidden">
            {/* Min dimensions visualization */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-primary/10 border border-primary/30 rounded-md"
                style={{
                  width: dimensions.width[0] * scale,
                  height: dimensions.length[0] * scale,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs text-primary/70">
                  Min
                </div>
              </div>
            </div>

            {/* Max dimensions visualization */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-primary/20 border-2 border-primary rounded-md relative"
                style={{
                  width: dimensions.width[1] * scale,
                  height: dimensions.length[1] * scale,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold text-primary">
                  Max
                </div>

                {/* Wheelbase visualization - min and max */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div
                    className="border-l border-dashed border-primary/40"
                    style={{
                      height: dimensions.wheelbase[0] * scale,
                      top: (dimensions.length[1] * scale - dimensions.wheelbase[0] * scale) / 2,
                    }}
                  ></div>
                  <div
                    className="border-l-2 border-dashed border-primary/70 absolute"
                    style={{
                      height: dimensions.wheelbase[1] * scale,
                      top: (dimensions.length[1] * scale - dimensions.wheelbase[1] * scale) / 2,
                    }}
                  ></div>
                </div>

                {/* Turn radius visualization - min and max */}
                <div
                  className="absolute border border-dashed border-primary/30 rounded-full"
                  style={{
                    width: dimensions.turnRadius[0] * 2 * scale,
                    height: dimensions.turnRadius[0] * 2 * scale,
                    left: (dimensions.width[1] * scale) / 2 - dimensions.turnRadius[0] * scale,
                    top: -dimensions.turnRadius[0] * scale + (dimensions.length[1] * scale) / 4,
                  }}
                ></div>
                <div
                  className="absolute border-2 border-dashed border-primary/50 rounded-full"
                  style={{
                    width: dimensions.turnRadius[1] * 2 * 1000 * scale,
                    height: dimensions.turnRadius[1] * 2 * 1000 * scale,
                    left: (dimensions.width[1] * scale) / 2 - dimensions.turnRadius[1] * scale * 1000,
                    top: -dimensions.turnRadius[1] * scale * 1000+ (dimensions.length[1] * scale) / 4,
                  }}
                ></div>

                {/* Height indicator - min and max */}
                <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="bg-primary/20 w-2" style={{ height: (dimensions.height[0] * scale) / 2 }}></div>
                    <span className="text-xs whitespace-nowrap">Min: {dimensions.height[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="bg-primary/40 w-3" style={{ height: (dimensions.height[1] * scale) / 2 }}></div>
                    <span className="text-xs whitespace-nowrap">Max: {dimensions.height[1]}</span>
                  </div>
                </div>

                {/* Width labels */}
                <div className="absolute -top-16 left-0 w-full flex justify-between text-xs">
                  <span className="whitespace-nowrap">Min width: {dimensions.width[0]}</span>
                  <span className="whitespace-nowrap">Max width: {dimensions.width[1]}</span>
                </div>

                {/* Length labels */}
                <div className="absolute -left-16 top-0 h-full flex flex-col justify-between items-start">
                  <span className="whitespace-nowrap transform -rotate-90 origin-left">
                    Min length: {dimensions.length[0]}
                  </span>
                  <span className="whitespace-nowrap transform -rotate-90 origin-left">
                    Max length: {dimensions.length[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
      <div>
        {data
        .filter(item=>item.height<dimensions.height[1]&&
          item.height>dimensions.height[0]&&
          item.width<dimensions.width[1]&&
          item.width>dimensions.width[0]&&
          item.length<dimensions.length[1]&&
          item.length>dimensions.length[0])
        
        .map(item=><Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Length: {item.length} mm</p>
                <p>Width: {item.width} mm</p>
                <p>Height: {item.height} mm</p>
                <p>Wheelbase: {item.wheelbase} mm</p>
                <p>Turn Radius: {item.turnRadius} m</p>
                <p>Ground Clearance: {item.groundClearance} mm</p>
              </CardContent>
        </Card>)}
        </div>
      
      
      
    </div>
  )
}

