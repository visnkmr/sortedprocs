

"use client"

import { useState } from "react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
//Brands added
/*
Honda
Maruti
Skoda
MG
Tata
Fiat
Toyota
Hyundai
Tesla */

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

function finddataspecs(data){
  type CarData = {
    name: string;
    description: string;
    length: number;
    width: number;
    height: number;
    turnRadius: number;
    groundClearance: number;
    wheelbase: number;
  };
// List of properties for which you want min and max values
const properties: (keyof CarData)[] = [
  "length",
  "width",
  "height",
"turnRadius",
  "groundClearance",
  "wheelbase",
];
  // Initialize an object to store the results
type MinMax = { min: number; max: number };

interface Stats {
  [key: string]: MinMax;
}

const stats: Stats = {};

// Initialize stats with the first element from data as reference (if available)
if (data.length > 0) {
  properties.forEach((prop) => {
    stats[prop] = {
      min: data[0][prop] as number,
      max: data[0][prop] as number,
    };
  });
}

// Iterate over the data to compute min and max for each property
data.forEach((item) => {
  properties.forEach((prop) => {
    const value = item[prop] as number;
    if (value < stats[prop].min) {
      stats[prop].min = value;
    }
    if (value > stats[prop].max) {
      stats[prop].max = value;
    }
  });
});

console.log("Stats:", stats);
}

export default function VehicleDimensions() {
  const [dimensions, setDimensions] = useState({
    height: [1000, 2000],
    width: [1300, 3000],
    length: [2800, 6000],
    wheelbase: [2100, 5500],
    turnRadius: [3, 15],
    groundClearence:[0,500]
  })

  const handleSliderChange = (value: number[], dimension: keyof typeof dimensions) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value,
    }))
  }

  const data=[
    {
      "name": "BYD ATTO 3",
      "yearsProduced": "2022 - Present",
      "faceliftYears": "N/A",
      "power": "201",
      "torque": "310",
      "gears": "Single-speed automatic",
      "length": 4455,
      "width": 1875,
      "height": 1615,
      "groundClearance": 175,
      "wheelbase": 2720,
      "turnRadius": 0
    },
    {
      "name": "BYD SEAL",
      "yearsProduced": "2023 - Present",
      "faceliftYears": "N/A",
      "power": "308",
      "torque": "360",
      "gears": "Single-speed automatic",
      "length": 4800,
      "width": 1875,
      "height": 1500,
      "groundClearance": 130,
      "wheelbase": 2765,
      "turnRadius": 0
    },
    {
      "name": "Škoda Kylaq",
      "yearsProduced": "2025 - Present",
      "faceliftYears": "N/A",
      "power": "115",
      "torque": "178",
      "gears": "6-speed manual / 6-speed automatic",
      "length": 3995,
      "width": 1783,
      "height": 1619,
      "groundClearance": 189,
      "wheelbase": 2566,
      "turnRadius": 0
    },
    {
      "name": "Skoda Kodiaq",
      "yearsProduced": "2016 - Present",
      "faceliftYears": "2020",
      "power": "150 - 245",
      "torque": "250 - 400",
      "gears": "6",
      "length": 4682,
      "width": 1892,
      "height": 1676,
      "groundClearance": 190,
      "wheelbase": 2765,
      "turnRadius": 11.2
    },
    {
      "name": "Skoda Kushaq",
      "yearsProduced": "2021 - Present",
      "faceliftYears": "",
      "power": "115 - 150",
      "torque": "250 - 265",
      "gears": "6",
      "length": 4246,
      "width": 1824,
      "height": 1530,
      "groundClearance": 160,
      "wheelbase": 2639,
      "turnRadius": 10.4
    },
    {
      "name": "Skoda Octavia",
      "yearsProduced": "1996 - Present",
      "faceliftYears": "2003, 2009, 2017",
      "power": "148 - 245",
      "torque": "250 - 370",
      "gears": "6",
      "length": 4765,
      "width": 1820,
      "height": 1460,
      "groundClearance": 135,
      "wheelbase": 2720,
      "turnRadius": 10.9
    },
    {
      "name": "Skoda Superb",
      "yearsProduced": "2001 - Present",
      "faceliftYears": "2008, 2013, 2020",
      "power": "162 - 280",
      "torque": "250 - 320",
      "gears": "7",
      "length": 4890,
      "width": 1880,
      "height": 1465,
      "groundClearance": 130,
      "wheelbase": 2810,
      "turnRadius": 11.3
    },
    {
      "name": "Skoda Rapid",
      "yearsProduced": "2011 - 2019",
      "faceliftYears": "2015",
      "power": "115 - 150",
      "torque": "200 - 230",
      "gears": "5",
      "length": 4540,
      "width": 1740,
      "height": 1460,
      "groundClearance": 140,
      "wheelbase": 2630,
      "turnRadius": 10.1
    },
    {
      "name": "Maruti Alto",
      "yearsProduced": "2020 - Present",
      "power": "47 - 68",
      "torque": "69 - 90",
      "gears": "5-speed manual / AMT",
      "length": 3395,
      "width": 1490,
      "height": 1475,
      "groundClearance": 160,
      "wheelbase": 2360,
      "turnRadius": 4.9
    },
    {
      "name": "Maruti Wagon R",
      "yearsProduced": "2020 - Present",
      "power": "66 - 83",
      "torque": "90 - 113",
      "gears": "5-speed manual / AMT",
      "length": 3655,
      "width": 1490,
      "height": 1675,
      "groundClearance": 165,
      "wheelbase": 2435,
      "turnRadius": 5.2
    },
    {
      "name": "Maruti Swift",
      "yearsProduced": "2020 - Present",
      "power": "82",
      "torque": "113",
      "gears": "5-speed manual / AMT",
      "length": 3840,
      "width": 1735,
      "height": 1530,
      "groundClearance": 163,
      "wheelbase": 2450,
      "turnRadius": 5.4
    },
    {
      "name": "Maruti Baleno",
      "yearsProduced": "2020 - Present",
      "power": "82 - 90",
      "torque": "113 - 113",
      "gears": "5-speed manual / CVT",
      "length": 3995,
      "width": 1745,
      "height": 1450,
      "groundClearance": 170,
      "wheelbase": 2600,
      "turnRadius": 5.3
    },
    {
      "name": "Maruti Dzire",
      "yearsProduced": "2020 - Present",
      "power": "82",
      "torque": "113",
      "gears": "5-speed manual / AMT",
      "length": 3995,
      "width": 1735,
      "height": 1515,
      "groundClearance": 163,
      "wheelbase": 2450,
      "turnRadius": 5.3
    },
    {
      "name": "Maruti Vitara Brezza",
      "yearsProduced": "2020 - Present",
      "power": "103",
      "torque": "138",
      "gears": "5-speed manual / 6-speed automatic",
      "length": 3995,
      "width": 1790,
      "height": 1640,
      "groundClearance": 198,
      "wheelbase": 2500,
      "turnRadius": 5.6
    },
    {
      "name": "Maruti Ertiga",
      "yearsProduced": "2020 - Present",
      "power": "103",
      "torque": "138",
      "gears": "5-speed manual / 6-speed automatic",
      "length": 4395,
      "width": 1735,
      "height": 1685,
      "groundClearance": 185,
      "wheelbase": 2740,
      "turnRadius": 6.8
    },
    {
      "name": "Maruti S-Cross",
      "yearsProduced": "2020 - Present",
      "power": "103",
      "torque": "138",
      "gears": "6-speed manual / 6-speed automatic",
      "length": 4300,
      "width": 1785,
      "height": 1595,
      "groundClearance": 180,
      "wheelbase": 2600,
      "turnRadius": 6.6
    },
    {
      "name": "Maruti Celerio",
      "yearsProduced": "2021 - Present",
      "power": "67",
      "torque": "89",
      "gears": "5-speed manual / AMT",
      "length": 3695,
      "width": 1655,
      "height": 1555,
      "groundClearance": 170,
      "wheelbase": 2435,
      "turnRadius": 4.9
    },
    {
      "name": "Maruti XL6",
      "yearsProduced": "2020 - Present",
      "power": "103",
      "torque": "138",
      "gears": "5-speed manual / 6-speed automatic",
      "length": 4395,
      "width": 1775,
      "height": 1675,
      "groundClearance": 200,
      "wheelbase": 2740,
      "turnRadius": 6.9
    },
    {
      "name": "Maruti Fronx",
      "yearsProduced": "2023 - Present",
      "power": "99 - 120",
      "torque": "147 - 200",
      "gears": "5-speed manual / 6-speed automatic",
      "length": 3995,
      "width": 1550,
      "height": 1570,
      "groundClearance": 190,
      "wheelbase": 2520,
      "turnRadius": 5.1
    },
    {
      "name": "Hyundai i20",
      "yearsProduced": "2020 - Present",
      "power": "82 - 120",
      "torque": "114 - 172",
      "gears": "5-speed manual / CVT / 6-speed automatic",
      "length": 4032,
      "width": 1733,
      "height": 1450,
      "groundClearance": 170,
      "wheelbase": 2570,
      "turnRadius": 5.2
    },
    {
      "name": "Hyundai Verna",
      "yearsProduced": "2020 - Present",
      "power": "121 - 158",
      "torque": "151 - 250",
      "gears": "6-speed manual / 6-speed automatic",
      "length": 4440,
      "width": 1729,
      "height": 1475,
      "groundClearance": 165,
      "wheelbase": 2600,
      "turnRadius": 5.3
    },
    {
      "name": "Hyundai Creta",
      "yearsProduced": "2020 - Present",
      "power": "113 - 138",
      "torque": "144 - 250",
      "gears": "6-speed manual / 6-speed automatic / CVT",
      "length": 4300,
      "width": 1790,
      "height": 1635,
      "groundClearance": 190,
      "wheelbase": 2610,
      "turnRadius": 5.8
    },
    {
      "name": "Hyundai Tucson",
      "yearsProduced": "2020 - Present",
      "power": "153 - 185",
      "torque": "400 - 400",
      "gears": "6-speed automatic",
      "length": 4480,
      "width": 1850,
      "height": 1665,
      "groundClearance": 172,
      "wheelbase": 2670,
      "turnRadius": 5.9
    },
    {
      "name": "Hyundai Santro",
      "yearsProduced": "2020 - Present",
      "power": "68",
      "torque": "99",
      "gears": "5-speed manual / AMT",
      "length": 3610,
      "width": 1645,
      "height": 1560,
      "groundClearance": 165,
      "wheelbase": 2400,
      "turnRadius": 4.8
    },
    {
      "name": "Hyundai Aura",
      "yearsProduced": "2020 - Present",
      "power": "68 - 83",
      "torque": "99 - 113",
      "gears": "5-speed manual / AMT",
      "length": 3995,
      "width": 1680,
      "height": 1475,
      "groundClearance": 165,
      "wheelbase": 2450,
      "turnRadius": 5.0
    },
    {
      "name": "Hyundai Alcazar",
      "yearsProduced": "2021 - Present",
      "power": "113 - 184",
      "torque": "250 - 300",
      "gears": "6-speed manual / 6-speed automatic",
      "length": 4500,
      "width": 1790,
      "height": 1675,
      "groundClearance": 200,
      "wheelbase": 2760,
      "turnRadius": 6.1
    },
    {
      "name": "Hyundai Venue",
      "yearsProduced": "2020 - Present",
      "power": "81 - 120",
      "torque": "113 - 172",
      "gears": "5-speed manual / 7-speed DCT / 6-speed automatic",
      "length": 4000,
      "width": 1770,
      "height": 1560,
      "groundClearance": 190,
      "wheelbase": 2500,
      "turnRadius": 5.5
    },
    {
      "name": "Hyundai Exter",
      "yearsProduced": "2023 - Present",
      "power": "68 - 83",
      "torque": "95 - 113",
      "gears": "5-speed manual / AMT",
      "length": 3815,
      "width": 1710,
      "height": 1635,
      "groundClearance": 190,
      "wheelbase": 2450,
      "turnRadius": 5.3
    },
    {
      "name": "Honda City",
      "yearsProduced": "2008 - Present",
      "faceliftYears": "2011, 2014, 2020",
      "power": "121 - 149",
      "torque": "145",
      "gears": "5-speed manual / CVT",
      "length": 4440,
      "width": 1694,
      "height": 1475,
      "groundClearance": 165,
      "wheelbase": 2600,
      "turnRadius": 5.6
    },
    {
      "name": "Honda Civic",
      "yearsProduced": "2006 - 2013, 2019 - Present",
      "faceliftYears": "2013, 2020",
      "power": "140 - 180",
      "torque": "174 - 220",
      "gears": "6-speed manual / CVT",
      "length": 4650,
      "width": 1798,
      "height": 1416,
      "groundClearance": 150,
      "wheelbase": 2700,
      "turnRadius": 5.8
    },
    {
      "name": "Honda CR-V",
      "yearsProduced": "2007 - Present",
      "faceliftYears": "2012, 2015, 2018",
      "power": "154 - 190",
      "torque": "190 - 240",
      "gears": "5-speed automatic / CVT",
      "length": 4600,
      "width": 1855,
      "height": 1685,
      "groundClearance": 208,
      "wheelbase": 2660,
      "turnRadius": 6.3
    },
    {
      "name": "Honda Jazz",
      "yearsProduced": "2009 - Present",
      "faceliftYears": "2015, 2020",
      "power": "90 - 110",
      "torque": "110 - 145",
      "gears": "5-speed manual / CVT",
      "length": 4000,
      "width": 1694,
      "height": 1525,
      "groundClearance": 165,
      "wheelbase": 2530,
      "turnRadius": 5.4
    },
    {
      "name": "Honda WR-V",
      "yearsProduced": "2017 - Present",
      "faceliftYears": "2020",
      "power": "110",
      "torque": "200",
      "gears": "6-speed manual / CVT",
      "length": 4000,
      "width": 1777,
      "height": 1600,
      "groundClearance": 188,
      "wheelbase": 2600,
      "turnRadius": 5.6
    },
    {
      "name": "Honda Amaze",
      "yearsProduced": "2013 - Present",
      "faceliftYears": "2016, 2021",
      "power": "88 - 110",
      "torque": "109 - 200",
      "gears": "5-speed manual / CVT",
      "length": 3995,
      "width": 1680,
      "height": 1485,
      "groundClearance": 170,
      "wheelbase": 2470,
      "turnRadius": 5.5
    },
    {
      "name": "Honda Elevate",
      "yearsProduced": "2023 - Present",
      "faceliftYears": "N/A",
      "power": "121",
      "torque": "145",
      "gears": "6-speed manual / CVT",
      "length": 4312,
      "width": 1790,
      "height": 1650,
      "groundClearance": 220,
      "wheelbase": 2650,
      "turnRadius": 6.9
    },
    {
      "name": "Tesla Model S",
      "description": "Tesla Model S - A full-size all-electric five-door liftback sedan known for its high performance and long range.",
      "length": 4970,
      "width": 1964,
      "height": 1445,
      "turnRadius":5.8,
      "groundClearance": 130,
      "wheelbase": 2960
    },
    {
      "name": "Tesla Model 3",
      "description": "Tesla Model 3 - A compact all-electric sedan offering a balance of performance, safety, and spaciousness.",
      "length": 4694,
      "width": 1849,
      "height": 1443,
      "turnRadius":5.4,
      "groundClearance": 140,
      "wheelbase": 2875
    },
    {
      "name": "Tesla Model X",
      "description": "Tesla Model X - A mid-size all-electric luxury SUV with falcon-wing doors and ample seating for up to 7 adults.",
      "length": 5036,
      "width": 2070,
      "height": 1684,
      "turnRadius":6.1,
      "groundClearance": 137,
      "wheelbase": 2965
    },
    {
      "name": "Tesla Model Y",
      "description": "Tesla Model Y - A compact all-electric SUV with versatile seating options and advanced safety features.",
      "length": 4751,
      "width": 1921,
      "height": 1624,
      "turnRadius":5.7,
      "groundClearance": 170,
      "wheelbase": 2700
    },
    {
      "name": "Tesla Roadster",
      "description": "Tesla Roadster - An all-electric sports car that emphasizes speed and performance with a sleek design.",
      "length": 4380,
      "width": 1940,
      "height": 1150,
      "turnRadius":5.2,
      "groundClearance": 100,
      "wheelbase": 2450
    },
    {
      "name": "Tesla Cybertruck",
      "description": "Tesla Cybertruck - A futuristic all-electric pickup truck with a distinct angular design and high durability.",
      "length": 5885,
      "width": 2030,
      "height": 1921,
      "turnRadius":7.0,
      "groundClearance": 400,
      "wheelbase": 3650
    },
    {
      "name": "Tesla Model S Plaid",
      "description": "Tesla Model S Plaid - The high-performance variant of the Model S, boasting extreme acceleration and cutting-edge technology.",
      "length": 4970,
      "width": 1964,
      "height": 1445,
      "turnRadius":5.8,
      "groundClearance": 130,
      "wheelbase": 2960
    },
    {
      "name": "Tesla Model 3 Performance",
      "description": "Tesla Model 3 Performance - The performance-focused variant of the Model 3, offering enhanced power and handling.",
      "length": 4694,
      "width": 1849,
      "height": 1443,
      "turnRadius":5.4,
      "groundClearance": 140,
      "wheelbase": 2875
    },
    {
      "name": "Tesla Model X Plaid",
      "description": "Tesla Model X Plaid - The performance edition of the Model X with superior acceleration and advanced features.",
      "length": 5036,
      "width": 2070,
      "height": 1684,
      "turnRadius":6.1,
      "groundClearance": 137,
      "wheelbase": 2965
    },
    {
      "name": "Tesla Roadster 2.0",
      "description": "Tesla Roadster 2.0 - An updated version of the iconic Roadster aimed at delivering record-setting speeds and enhanced range.",
      "length": 4400,
      "width": 1950,
      "height": 1160,
      "turnRadius":5.3,
      "groundClearance": 105,
      "wheelbase": 2470
    },
    {
      "name": "MG Hector",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "2020",
      "power": "145 - 170",
      "torque": "300",
      "gears": "6",
      "length": 4500,
      "width": 1830,
      "height": 1675,
      "groundClearance": 175,
      "wheelbase": 2720,
      "turnRadius": 5.6
    },
    {
      "name": "MG ZS EV",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "2021",
      "power": "141",
      "torque": "353",
      "gears": "1",
      "length": 4300,
      "width": 1820,
      "height": 1604,
      "groundClearance": 167,
      "wheelbase": 2610,
      "turnRadius": 5.3
    },
    {
      "name": "MG Gloster",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "2022",
      "power": "200 - 250",
      "torque": "550",
      "gears": "8",
      "length": 5000,
      "width": 1930,
      "height": 1940,
      "groundClearance": 230,
      "wheelbase": 2950,
      "turnRadius": 5.8
    },
    {
      "name": "MG Comet",
      "yearsProduced": "2023 - Present",
      "faceliftYears": "N/A",
      "power": "40 - 55",
      "torque": "100 - 120",
      "gears": "1",
      "length": 2974,
      "width": 1501,
      "height": 1601,
      "groundClearance": 160,
      "wheelbase": 2000,
      "turnRadius": 4.7
    },
    {
      "name": "Windsor",
      "yearsProduced": "2020 - Present",
      "faceliftYears": "2023 - Present",
      "power": "120 - 160",
      "torque": "170 - 220",
      "gears": "6",
      "length": 4700,
      "width": 1800,
      "height": 1450,
      "groundClearance": 155,
      "wheelbase": 2750,
      "turnRadius": 5.4
    },
    {
      "name": "Fiat Punto",
      "yearsProduced": "2010 - 2016",
      "faceliftYears": "2014 - 2016",
      "power": "75 - 90",
      "torque": "190 - 200",
      "gears": "5",
      "length": 3987,
      "width": 1687,
      "height": 1495,
      "groundClearance": 185,
      "wheelbase": 2510,
      "turnRadius": 5.2
    },
    {
      "name": "Fiat Linea",
      "yearsProduced": "2010 - 2016",
      "faceliftYears": "2014 - 2016",
      "power": "90 - 112",
      "torque": "200 - 215",
      "gears": "5",
      "length": 4560,
      "width": 1730,
      "height": 1495,
      "groundClearance": 185,
      "wheelbase": 2603,
      "turnRadius": 5.4
    },
    {
      "name": "Fiat 500",
      "yearsProduced": "2010 - 2016",
      "faceliftYears": "2014",
      "power": "69",
      "torque": "102",
      "gears": "5",
      "length": 3546,
      "width": 1627,
      "height": 1488,
      "groundClearance": 130,
      "wheelbase": 2300,
      "turnRadius": 5.6
    },
    {
      "name": "Fiat Avventura",
      "yearsProduced": "2014 - 2016",
      "faceliftYears": "N/A",
      "power": "90 - 112",
      "torque": "200 - 215",
      "gears": "5",
      "length": 3995,
      "width": 1706,
      "height": 1550,
      "groundClearance": 205,
      "wheelbase": 2578,
      "turnRadius": 5.3
    },
    {
      "name": "Tata Nano",
      "yearsProduced": "2008 - 2018",
      "faceliftYears": "2012 - 2018",
      "power": "35",
      "torque": "48",
      "gears": "4",
      "length": 3199,
      "width": 1652,
      "height": 1651,
      "groundClearance": 180,
      "wheelbase": 2230,
      "turnRadius": 4.5
    },
    {
      "name": "Tata Indica",
      "yearsProduced": "1998 - 2018",
      "faceliftYears": "2009 - 2018",
      "power": "60 - 70",
      "torque": "135 - 140",
      "gears": "5",
      "length": 3795,
      "width": 1665,
      "height": 1535,
      "groundClearance": 165,
      "wheelbase": 2420,
      "turnRadius": 4.9
    },
    {
      "name": "Tata Indigo",
      "yearsProduced": "2002 - 2018",
      "faceliftYears": "2008 - 2018",
      "power": "70 - 90",
      "torque": "140 - 190",
      "gears": "5",
      "length": 3990,
      "width": 1695,
      "height": 1550,
      "groundClearance": 165,
      "wheelbase": 2520,
      "turnRadius": 5.0
    },
    {
      "name": "Tata Safari",
      "yearsProduced": "1998 - Present",
      "faceliftYears": "2012 - 2020",
      "power": "140 - 170",
      "torque": "320 - 400",
      "gears": "5",
      "length": 4665,
      "width": 1918,
      "height": 1925,
      "groundClearance": 200,
      "wheelbase": 2650,
      "turnRadius": 5.6
    },
    {
      "name": "Tata Tigor",
      "yearsProduced": "2017 - Present",
      "faceliftYears": "2020 - Present",
      "power": "85 - 113",
      "torque": "114 - 170",
      "gears": "5",
      "length": 3990,
      "width": 1677,
      "height": 1537,
      "groundClearance": 170,
      "wheelbase": 2450,
      "turnRadius": 5.2
    },
    {
      "name": "Tata Tiago",
      "yearsProduced": "2016 - Present",
      "faceliftYears": "2020 - Present",
      "power": "85 - 113",
      "torque": "114 - 170",
      "gears": "5",
      "length": 3746,
      "width": 1647,
      "height": 1537,
      "groundClearance": 170,
      "wheelbase": 2400,
      "turnRadius": 4.9
    },
    {
      "name": "Tata Harrier",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "2023 - Present",
      "power": "140 - 170",
      "torque": "350",
      "gears": "6",
      "length": 4598,
      "width": 1894,
      "height": 1706,
      "groundClearance": 205,
      "wheelbase": 2741,
      "turnRadius": 5.6
    },
    {
      "name": "Tata Nexon",
      "yearsProduced": "2017 - Present",
      "faceliftYears": "2020 - Present",
      "power": "110 - 120",
      "torque": "260",
      "gears": "6",
      "length": 3993,
      "width": 1811,
      "height": 1606,
      "groundClearance": 209,
      "wheelbase": 2498,
      "turnRadius": 5.1
    },
    {
      "name": "Tata Altroz",
      "yearsProduced": "2020 - Present",
      "faceliftYears": "N/A",
      "power": "86 - 110",
      "torque": "113 - 200",
      "gears": "5",
      "length": 3990,
      "width": 1755,
      "height": 1505,
      "groundClearance": 165,
      "wheelbase": 2570,
      "turnRadius": 5.0
    },
    {
      "name": "Tata Punch",
      "yearsProduced": "2021 - Present",
      "faceliftYears": "N/A",
      "power": "84",
      "torque": "113",
      "gears": "5",
      "length": 3827,
      "width": 1742,
      "height": 1615,
      "groundClearance": 187,
      "wheelbase": 2445,
      "turnRadius": 5.0
    },
    {
      "name": "Toyota Glanza",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "2022",
      "power": "82 - 89",
      "torque": "113 - 140",
      "gears": "5-speed manual / CVT",
      "length": 3995,
      "width": 1745,
      "height": 1500,
      "groundClearance": 170,
      "wheelbase": 2520,
      "turnRadius": 4.8
      },
      {
      "name": "Toyota Urban Cruiser",
      "yearsProduced": "2020 - Present",
      "faceliftYears": "",
      "power": "103",
      "torque": "138",
      "gears": "5-speed manual / 4-speed AT",
      "length": 3995,
      "width": 1790,
      "height": 1640,
      "groundClearance": 210,
      "wheelbase": 2500,
      "turnRadius": 5.2
      },
      {
      "name": "Toyota Innova Crysta",
      "yearsProduced": "2016 - Present",
      "faceliftYears": "2020",
      "power": "148 - 163",
      "torque": "243 - 360",
      "gears": "5-speed manual / 6-speed AT",
      "length": 4735,
      "width": 1830,
      "height": 1795,
      "groundClearance": 170,
      "wheelbase": 2750,
      "turnRadius": 5.6
      },
      {
      "name": "Toyota Fortuner",
      "yearsProduced": "2016 - Present",
      "faceliftYears": "2021",
      "power": "201 - 204",
      "torque": "320 - 500",
      "gears": "6-speed manual / 6-speed AT",
      "length": 4795,
      "width": 1855,
      "height": 1835,
      "groundClearance": 220,
      "wheelbase": 2745,
      "turnRadius": 5.9
      },
      {
      "name": "Toyota Camry",
      "yearsProduced": "2019 - Present",
      "faceliftYears": "",
      "power": "178",
      "torque": "221",
      "gears": "6-speed AT",
      "length": 4885,
      "width": 1840,
      "height": 1445,
      "groundClearance": 160,
      "wheelbase": 2825,
      "turnRadius": 5.8
      }

  ];
  finddataspecs(data);


    console.log(data)
    
    // Scale factor for visualization
    const scale = 0.5/8

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto p-4">
    <p>{data.length} vehicles found</p>
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
              min={1000}
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
              max={3000}
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
              max={15}
              step={.1}
              value={dimensions.turnRadius}
              onValueChange={(value) => handleSliderChange(value, "turnRadius")}
              className="cursor-grab active:cursor-grabbing"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="gc-slider" className="text-sm font-medium">
                Ground clearence
              </label>
              <div className="flex gap-2">
                <Badge variant="outline">Min: {dimensions.groundClearence[0]}</Badge>
                <Badge variant="outline">Max: {dimensions.groundClearence[1]}</Badge>
              </div>
            </div>
            <Slider
              id="gc-slider"
              min={80}
              max={500}
              step={10}
              value={dimensions.groundClearence}
              onValueChange={(value) => handleSliderChange(value, "groundClearence")}
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
          item.length>dimensions.length[0]&&
          item.wheelbase<dimensions.wheelbase[1]&&
          item.wheelbase>dimensions.wheelbase[0]&&
          item.turnRadius<dimensions.turnRadius[1]&&
          item.turnRadius>dimensions.turnRadius[0]&&
          item.groundClearance<dimensions.groundClearence[1]&&
          item.groundClearance>dimensions.groundClearence[0]
          )
        
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

