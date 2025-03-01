"use client"

import { useState } from "react"
import { Slider } from "../components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"

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

const renault = [
  {
    name: "Renault Kwid",
    yearsProduced: "2015 - Present",
    power: "53 - 68",
    torque: "72 - 91",
    gears: "5-speed manual / AMT",
    length: 3731,
    width: 1579,
    height: 1478,
    groundClearance: 180,
    wheelbase: 2422,
    turnRadius: 4.7,
    price: 4500,
    capacity: "28 L",
    manufacturer: "Renault",
    weight: 750,
    estimatedCabinSpace: ((1478 - 180) * 2422 * 1579) / 1000000000,
    sizeToWeightRatio: ((1478 - 180) * 2422 * 1579) / 1000000000 / 750,
    dragCoefficient: 0.33,
  },
  {
    name: "Renault Triber",
    yearsProduced: "2019 - Present",
    power: "71",
    torque: "96",
    gears: "5-speed manual / AMT",
    length: 3990,
    width: 1739,
    height: 1643,
    groundClearance: 182,
    wheelbase: 2636,
    turnRadius: 5.2,
    price: 6700,
    capacity: "40 L",
    manufacturer: "Renault",
    weight: 950,
    estimatedCabinSpace: ((1643 - 182) * 2636 * 1739) / 1000000000,
    sizeToWeightRatio: ((1643 - 182) * 2636 * 1739) / 1000000000 / 950,
    dragCoefficient: 0.34,
  },
  {
    name: "Renault Kiger",
    yearsProduced: "2021 - Present",
    power: "71 - 98",
    torque: "96 - 160",
    gears: "5-speed manual / CVT",
    length: 3991,
    width: 1750,
    height: 1600,
    groundClearance: 205,
    wheelbase: 2589,
    turnRadius: 5.2,
    price: 6000,
    capacity: "38 L",
    manufacturer: "Renault",
    weight: 980,
    estimatedCabinSpace: ((1600 - 205) * 2589 * 1750) / 1000000000,
    sizeToWeightRatio: ((1600 - 205) * 2589 * 1750) / 1000000000 / 980,
    dragCoefficient: 0.33,
  },
  {
    name: "Renault Duster",
    yearsProduced: "2012 - Present",
    power: "104 - 153",
    torque: "142 - 250",
    gears: "5-speed manual / 6-speed manual / CVT",
    length: 4315,
    width: 1822,
    height: 1695,
    groundClearance: 205,
    wheelbase: 2673,
    turnRadius: 5.3,
    price: 8500,
    capacity: "50 L",
    manufacturer: "Renault",
    weight: 1150,
    estimatedCabinSpace: ((1695 - 205) * 2673 * 1822) / 1000000000,
    sizeToWeightRatio: ((1695 - 205) * 2673 * 1822) / 1000000000 / 1150,
    dragCoefficient: 0.35,
  },
]
const nissan = [
  {
    name: "Nissan Magnite",
    yearsProduced: "2020 - Present",
    power: "71 - 98",
    torque: "96 - 160",
    gears: "5-speed manual / CVT",
    length: 3994,
    width: 1758,
    height: 1572,
    groundClearance: 205,
    wheelbase: 2500,
    turnRadius: 5.2,
    price: 5500,
    capacity: "42 L",
    manufacturer: "Nissan",
    weight: 970,
    estimatedCabinSpace: ((1572 - 205) * 2500 * 1758) / 1000000000,
    sizeToWeightRatio: ((1572 - 205) * 2500 * 1758) / 1000000000 / 970,
    dragCoefficient: 0.32,
  },
  {
    name: "Nissan Kicks",
    yearsProduced: "2019 - Present",
    power: "104 - 153",
    torque: "142 - 250",
    gears: "5-speed manual / 6-speed manual / CVT",
    length: 4384,
    width: 1813,
    height: 1656,
    groundClearance: 210,
    wheelbase: 2673,
    turnRadius: 5.3,
    price: 9000,
    capacity: "45 L",
    manufacturer: "Nissan",
    weight: 1180,
    estimatedCabinSpace: ((1656 - 210) * 2673 * 1813) / 1000000000,
    sizeToWeightRatio: ((1656 - 210) * 2673 * 1813) / 1000000000 / 1180,
    dragCoefficient: 0.34,
  },
  // {
  //   "name": "Nissan X-Trail",
  //   "yearsProduced": "2023 - Present",
  //   "power": "N/A",
  //   "torque": "N/A",
  //   "gears": "N/A",
  //   "length": "N/A",
  //   "width": "N/A",
  //   "height": "N/A",
  //   "groundClearance": "N/A",
  //   "wheelbase": "N/A",
  //   "turnRadius": "N/A"
  // }
]
const byd = [
  {
    name: "BYD ATTO 3",
    yearsProduced: "2022 - Present",
    power: "201",
    torque: "310",
    gears: "Single-speed automatic",
    length: 4455,
    width: 1875,
    height: 1615,
    groundClearance: 175,
    wheelbase: 2720,
    turnRadius: 0,
    price: 32000,
    capacity: "50 L",
    manufacturer: "BYD",
    weight: 1700,
    estimatedCabinSpace: ((1615 - 175) * 2720 * 1875) / 1000000000,
    sizeToWeightRatio: ((1615 - 175) * 2720 * 1875) / 1000000000 / 1700,
    dragCoefficient: 0.28,
  },
  {
    name: "BYD SEAL",
    yearsProduced: "2023 - Present",
    power: "308",
    torque: "360",
    gears: "Single-speed automatic",
    length: 4800,
    width: 1875,
    height: 1500,
    groundClearance: 130,
    wheelbase: 2765,
    turnRadius: 0,
    price: 45000,
    capacity: "60 L",
    manufacturer: "BYD",
    weight: 1850,
    estimatedCabinSpace: ((1500 - 130) * 2765 * 1875) / 1000000000,
    sizeToWeightRatio: ((1500 - 130) * 2765 * 1875) / 1000000000 / 1850,
    dragCoefficient: 0.26,
  },
]
const skoda = [
  {
    name: "Škoda Kylaq",
    yearsProduced: "2025 - Present",
    power: "115",
    torque: "178",
    gears: "6-speed manual / 6-speed automatic",
    length: 3995,
    width: 1783,
    height: 1619,
    groundClearance: 189,
    wheelbase: 2566,
    turnRadius: 5.2,
    price: 18000,
    capacity: "45 L",
    manufacturer: "Škoda",
    weight: 1100,
    estimatedCabinSpace: ((1619 - 189) * 2566 * 1783) / 1000000000,
    sizeToWeightRatio: ((1619 - 189) * 2566 * 1783) / 1000000000 / 1100,
    dragCoefficient: 0.31,
  },
  {
    name: "Skoda Kodiaq",
    yearsProduced: "2016 - Present",
    power: "150 - 245",
    torque: "250 - 400",
    gears: "6",
    length: 4682,
    width: 1892,
    height: 1676,
    groundClearance: 190,
    wheelbase: 2765,
    turnRadius: 5.8,
    price: 35000,
    capacity: "60 L",
    manufacturer: "Škoda",
    weight: 1550,
    estimatedCabinSpace: ((1676 - 190) * 2765 * 1892) / 1000000000,
    sizeToWeightRatio: ((1676 - 190) * 2765 * 1892) / 1000000000 / 1550,
    dragCoefficient: 0.33,
  },
  {
    name: "Skoda Kushaq",
    yearsProduced: "2021 - Present",
    power: "115 - 150",
    torque: "250 - 265",
    gears: "6",
    length: 4246,
    width: 1824,
    height: 1530,
    groundClearance: 160,
    wheelbase: 2639,
    turnRadius: 5.3,
    price: 22000,
    capacity: "50 L",
    manufacturer: "Škoda",
    weight: 1200,
    estimatedCabinSpace: ((1530 - 160) * 2639 * 1824) / 1000000000,
    sizeToWeightRatio: ((1530 - 160) * 2639 * 1824) / 1000000000 / 1200,
    dragCoefficient: 0.32,
  },
  {
    name: "Skoda Octavia",
    yearsProduced: "1996 - Present",
    power: "148 - 245",
    torque: "250 - 370",
    gears: "6",
    length: 4765,
    width: 1820,
    height: 1460,
    groundClearance: 135,
    wheelbase: 2720,
    turnRadius: 5.2,
    price: 28000,
    capacity: "55 L",
    manufacturer: "Škoda",
    weight: 1350,
    estimatedCabinSpace: ((1460 - 135) * 2720 * 1820) / 1000000000,
    sizeToWeightRatio: ((1460 - 135) * 2720 * 1820) / 1000000000 / 1350,
    dragCoefficient: 0.3,
  },
  {
    name: "Skoda Superb",
    yearsProduced: "2001 - Present",
    power: "162 - 280",
    torque: "250 - 320",
    gears: "7",
    length: 4890,
    width: 1880,
    height: 1465,
    groundClearance: 130,
    wheelbase: 2810,
    turnRadius: 5.6,
    price: 38000,
    capacity: "65 L",
    manufacturer: "Škoda",
    weight: 1450,
    estimatedCabinSpace: ((1465 - 130) * 2810 * 1880) / 1000000000,
    sizeToWeightRatio: ((1465 - 130) * 2810 * 1880) / 1000000000 / 1450,
    dragCoefficient: 0.29,
  },
  {
    name: "Skoda Rapid",
    yearsProduced: "2011 - 2019",
    power: "115 - 150",
    torque: "200 - 230",
    gears: "5",
    length: 4540,
    width: 1740,
    height: 1460,
    groundClearance: 140,
    wheelbase: 2630,
    turnRadius: 5.1,
    price: 19000,
    capacity: "48 L",
    manufacturer: "Škoda",
    weight: 1250,
    estimatedCabinSpace: ((1460 - 140) * 2630 * 1740) / 1000000000,
    sizeToWeightRatio: ((1460 - 140) * 2630 * 1740) / 1000000000 / 1250,
    dragCoefficient: 0.31,
  },
]
const maruti = [
  {
    name: "Maruti Alto",
    yearsProduced: "2020 - Present",
    power: "47 - 68",
    torque: "69 - 90",
    gears: "5-speed manual / AMT",
    length: 3395,
    width: 1490,
    height: 1475,
    groundClearance: 160,
    wheelbase: 2360,
    turnRadius: 4.9,
    price: 4000,
    capacity: "25 L",
    manufacturer: "Maruti",
    weight: 700,
    estimatedCabinSpace: ((1475 - 160) * 2360 * 1490) / 1000000000,
    sizeToWeightRatio: ((1475 - 160) * 2360 * 1490) / 1000000000 / 700,
    dragCoefficient: 0.35,
  },
  {
    name: "Maruti Wagon R",
    yearsProduced: "2020 - Present",
    power: "66 - 83",
    torque: "90 - 113",
    gears: "5-speed manual / AMT",
    length: 3655,
    width: 1490,
    height: 1675,
    groundClearance: 165,
    wheelbase: 2435,
    turnRadius: 5.2,
    price: 5000,
    capacity: "30 L",
    manufacturer: "Maruti",
    weight: 850,
    estimatedCabinSpace: ((1675 - 165) * 2435 * 1490) / 1000000000,
    sizeToWeightRatio: ((1675 - 165) * 2435 * 1490) / 1000000000 / 850,
    dragCoefficient: 0.34,
  },
  {
    name: "Maruti Swift",
    yearsProduced: "2020 - Present",
    power: "82",
    torque: "113",
    gears: "5-speed manual / AMT",
    length: 3840,
    width: 1735,
    height: 1530,
    groundClearance: 163,
    wheelbase: 2450,
    turnRadius: 5.4,
    price: 6500,
    capacity: "35 L",
    manufacturer: "Maruti",
    weight: 900,
    estimatedCabinSpace: ((1530 - 163) * 2450 * 1735) / 1000000000,
    sizeToWeightRatio: ((1530 - 163) * 2450 * 1735) / 1000000000 / 900,
    dragCoefficient: 0.33,
  },
  {
    name: "Maruti Baleno",
    yearsProduced: "2020 - Present",
    power: "82 - 90",
    torque: "113 - 113",
    gears: "5-speed manual / CVT",
    length: 3995,
    width: 1745,
    height: 1450,
    groundClearance: 170,
    wheelbase: 2600,
    turnRadius: 5.3,
    price: 7500,
    capacity: "38 L",
    manufacturer: "Maruti",
    weight: 920,
    estimatedCabinSpace: ((1450 - 170) * 2600 * 1745) / 1000000000,
    sizeToWeightRatio: ((1450 - 170) * 2600 * 1745) / 1000000000 / 920,
    dragCoefficient: 0.32,
  },
  {
    name: "Maruti Dzire",
    yearsProduced: "2020 - Present",
    power: "82",
    torque: "113",
    gears: "5-speed manual / AMT",
    length: 3995,
    width: 1735,
    height: 1515,
    groundClearance: 163,
    wheelbase: 2450,
    turnRadius: 5.3,
    price: 7000,
    capacity: "35 L",
    manufacturer: "Maruti",
    weight: 910,
    estimatedCabinSpace: ((1515 - 163) * 2450 * 1735) / 1000000000,
    sizeToWeightRatio: ((1515 - 163) * 2450 * 1735) / 1000000000 / 910,
    dragCoefficient: 0.33,
  },
  {
    name: "Maruti Vitara Brezza",
    yearsProduced: "2020 - Present",
    power: "103",
    torque: "138",
    gears: "5-speed manual / 6-speed automatic",
    length: 3995,
    width: 1790,
    height: 1640,
    groundClearance: 198,
    wheelbase: 2500,
    turnRadius: 5.6,
    price: 8000,
    capacity: "40 L",
    manufacturer: "Maruti",
    weight: 1050,
    estimatedCabinSpace: ((1640 - 198) * 2500 * 1790) / 1000000000,
    sizeToWeightRatio: ((1640 - 198) * 2500 * 1790) / 1000000000 / 1050,
    dragCoefficient: 0.34,
  },
  {
    name: "Maruti Ertiga",
    yearsProduced: "2020 - Present",
    power: "103",
    torque: "138",
    gears: "5-speed manual / 6-speed automatic",
    length: 4395,
    width: 1735,
    height: 1685,
    groundClearance: 185,
    wheelbase: 2740,
    turnRadius: 6.8,
    price: 10000,
    capacity: "45 L",
    manufacturer: "Maruti",
    weight: 1200,
    estimatedCabinSpace: ((1685 - 185) * 2740 * 1735) / 1000000000,
    sizeToWeightRatio: ((1685 - 185) * 2740 * 1735) / 1000000000 / 1200,
    dragCoefficient: 0.36,
  },
  {
    name: "Maruti S-Cross",
    yearsProduced: "2020 - Present",
    power: "103",
    torque: "138",
    gears: "6-speed manual / 6-speed automatic",
    length: 4300,
    width: 1785,
    height: 1595,
    groundClearance: 180,
    wheelbase: 2600,
    turnRadius: 6.6,
    price: 9500,
    capacity: "42 L",
    manufacturer: "Maruti",
    weight: 1100,
    estimatedCabinSpace: ((1595 - 180) * 2600 * 1785) / 1000000000,
    sizeToWeightRatio: ((1595 - 180) * 2600 * 1785) / 1000000000 / 1100,
    dragCoefficient: 0.35,
  },
  {
    name: "Maruti Celerio",
    yearsProduced: "2021 - Present",
    power: "67",
    torque: "89",
    gears: "5-speed manual / AMT",
    length: 3695,
    width: 1655,
    height: 1555,
    groundClearance: 170,
    wheelbase: 2435,
    turnRadius: 4.9,
    price: 5500,
    capacity: "32 L",
    manufacturer: "Maruti",
    weight: 820,
    estimatedCabinSpace: ((1555 - 170) * 2435 * 1655) / 1000000000,
    sizeToWeightRatio: ((1555 - 170) * 2435 * 1655) / 1000000000 / 820,
    dragCoefficient: 0.34,
  },
  {
    name: "Maruti XL6",
    yearsProduced: "2020 - Present",
    power: "103",
    torque: "138",
    gears: "5-speed manual / 6-speed automatic",
    length: 4395,
    width: 1775,
    height: 1675,
    groundClearance: 200,
    wheelbase: 2740,
    turnRadius: 6.9,
    price: 11000,
    capacity: "48 L",
    manufacturer: "Maruti",
    weight: 1180,
    estimatedCabinSpace: ((1675 - 200) * 2740 * 1775) / 1000000000,
    sizeToWeightRatio: ((1675 - 200) * 2740 * 1775) / 1000000000 / 1180,
    dragCoefficient: 0.35,
  },
  {
    name: "Maruti Fronx",
    yearsProduced: "2023 - Present",
    power: "99 - 120",
    torque: "147 - 200",
    gears: "5-speed manual / 6-speed automatic",
    length: 3995,
    width: 1550,
    height: 1570,
    groundClearance: 190,
    wheelbase: 2520,
    turnRadius: 5.1,
    price: 8000,
    capacity: "40 L",
    manufacturer: "Maruti",
    weight: 1020,
    estimatedCabinSpace: ((1570 - 190) * 2520 * 1550) / 1000000000,
    sizeToWeightRatio: ((1570 - 190) * 2520 * 1550) / 1000000000 / 1020,
    dragCoefficient: 0.33,
  },
]
const hyundai = [
  {
    name: "Hyundai i20",
    yearsProduced: "2020 - Present",
    power: "82 - 120",
    torque: "114 - 172",
    gears: "5-speed manual / CVT / 6-speed automatic",
    length: 4032,
    width: 1733,
    height: 1450,
    groundClearance: 170,
    wheelbase: 2570,
    turnRadius: 5.2,
    price: 7000,
    capacity: "38 L",
    manufacturer: "Hyundai",
    weight: 930,
    estimatedCabinSpace: ((1450 - 170) * 2570 * 1733) / 1000000000,
    sizeToWeightRatio: ((1450 - 170) * 2570 * 1733) / 1000000000 / 930,
    dragCoefficient: 0.32,
  },
  {
    name: "Hyundai Verna",
    yearsProduced: "2020 - Present",
    power: "121 - 158",
    torque: "151 - 250",
    gears: "6-speed manual / 6-speed automatic",
    length: 4440,
    width: 1729,
    height: 1475,
    groundClearance: 165,
    wheelbase: 2600,
    turnRadius: 5.3,
    price: 10000,
    capacity: "45 L",
    manufacturer: "Hyundai",
    weight: 1080,
    estimatedCabinSpace: ((1475 - 165) * 2600 * 1729) / 1000000000,
    sizeToWeightRatio: ((1475 - 165) * 2600 * 1729) / 1000000000 / 1080,
    dragCoefficient: 0.33,
  },
  {
    name: "Hyundai Creta",
    yearsProduced: "2020 - Present",
    power: "113 - 138",
    torque: "144 - 250",
    gears: "6-speed manual / 6-speed automatic / CVT",
    length: 4300,
    width: 1790,
    height: 1635,
    groundClearance: 190,
    wheelbase: 2610,
    turnRadius: 5.8,
    price: 12000,
    capacity: "50 L",
    manufacturer: "Hyundai",
    weight: 1250,
    estimatedCabinSpace: ((1635 - 190) * 2610 * 1790) / 1000000000,
    sizeToWeightRatio: ((1635 - 190) * 2610 * 1790) / 1000000000 / 1250,
    dragCoefficient: 0.34,
  },
  {
    name: "Hyundai Tucson",
    yearsProduced: "2020 - Present",
    power: "153 - 185",
    torque: "400 - 400",
    gears: "6-speed automatic",
    length: 4480,
    width: 1850,
    height: 1665,
    groundClearance: 172,
    wheelbase: 2670,
    turnRadius: 5.9,
    price: 25000,
    capacity: "55 L",
    manufacturer: "Hyundai",
    weight: 1400,
    estimatedCabinSpace: ((1665 - 172) * 2670 * 1850) / 1000000000,
    sizeToWeightRatio: ((1665 - 172) * 2670 * 1850) / 1000000000 / 1400,
    dragCoefficient: 0.33,
  },
  {
    name: "Hyundai Santro",
    yearsProduced: "2020 - Present",
    power: "68",
    torque: "99",
    gears: "5-speed manual / AMT",
    length: 3610,
    width: 1645,
    height: 1560,
    groundClearance: 165,
    wheelbase: 2400,
    turnRadius: 4.8,
    price: 5000,
    capacity: "30 L",
    manufacturer: "Hyundai",
    weight: 800,
    estimatedCabinSpace: ((1560 - 165) * 2400 * 1645) / 1000000000,
    sizeToWeightRatio: ((1560 - 165) * 2400 * 1645) / 1000000000 / 800,
    dragCoefficient: 0.34,
  },
  {
    name: "Hyundai Aura",
    yearsProduced: "2020 - Present",
    power: "68 - 83",
    torque: "99 - 113",
    gears: "5-speed manual / AMT",
    length: 3995,
    width: 1680,
    height: 1475,
    groundClearance: 165,
    wheelbase: 2450,
    turnRadius: 5.0,
    price: 6000,
    capacity: "35 L",
    manufacturer: "Hyundai",
    weight: 900,
    estimatedCabinSpace: ((1475 - 165) * 2450 * 1680) / 1000000000,
    sizeToWeightRatio: ((1475 - 165) * 2450 * 1680) / 1000000000 / 900,
    dragCoefficient: 0.33,
  },
  {
    name: "Hyundai Alcazar",
    yearsProduced: "2021 - Present",
    power: "113 - 184",
    torque: "250 - 300",
    gears: "6-speed manual / 6-speed automatic",
    length: 4500,
    width: 1790,
    height: 1675,
    groundClearance: 200,
    wheelbase: 2760,
    turnRadius: 6.1,
    price: 15000,
    capacity: "55 L",
    manufacturer: "Hyundai",
    weight: 1300,
    estimatedCabinSpace: ((1675 - 200) * 2760 * 1790) / 1000000000,
    sizeToWeightRatio: ((1675 - 200) * 2760 * 1790) / 1000000000 / 1300,
    dragCoefficient: 0.35,
  },
  {
    name: "Hyundai Venue",
    yearsProduced: "2020 - Present",
    power: "81 - 120",
    torque: "113 - 172",
    gears: "5-speed manual / 7-speed DCT / 6-speed automatic",
    length: 4000,
    width: 1770,
    height: 1560,
    groundClearance: 190,
    wheelbase: 2500,
    turnRadius: 5.5,
    price: 8500,
    capacity: "42 L",
    manufacturer: "Hyundai",
    weight: 1000,
    estimatedCabinSpace: ((1560 - 190) * 2500 * 1770) / 1000000000,
    sizeToWeightRatio: ((1560 - 190) * 2500 * 1770) / 1000000000 / 1000,
    dragCoefficient: 0.33,
  },
  {
    name: "Hyundai Exter",
    yearsProduced: "2023 - Present",
    power: "68 - 83",
    torque: "95 - 113",
    gears: "5-speed manual / AMT",
    length: 3815,
    width: 1710,
    height: 1635,
    groundClearance: 190,
    wheelbase: 2450,
    turnRadius: 5.3,
    price: 6500,
    capacity: "38 L",
    manufacturer: "Hyundai",
    weight: 980,
    estimatedCabinSpace: ((1635 - 190) * 2450 * 1710) / 1000000000,
    sizeToWeightRatio: ((1635 - 190) * 2450 * 1710) / 1000000000 / 980,
    dragCoefficient: 0.34,
  },
]
const honda = [
  {
    name: "Honda City",
    yearsProduced: "2008 - Present",
    power: "121 - 149",
    torque: "145",
    gears: "5-speed manual / CVT",
    length: 4440,
    width: 1694,
    height: 1475,
    groundClearance: 165,
    wheelbase: 2600,
    turnRadius: 5.6,
    price: 9000,
    capacity: "40 L",
    manufacturer: "Honda",
    weight: 1100,
    estimatedCabinSpace: ((1475 - 165) * 2600 * 1694) / 1000000000,
    sizeToWeightRatio: ((1475 - 165) * 2600 * 1694) / 1000000000 / 1100,
    dragCoefficient: 0.32,
  },
  {
    name: "Honda Civic",
    yearsProduced: "2006 - 2013, 2019 - Present",
    power: "140 - 180",
    torque: "174 - 220",
    gears: "6-speed manual / CVT",
    length: 4650,
    width: 1798,
    height: 1416,
    groundClearance: 150,
    wheelbase: 2700,
    turnRadius: 5.8,
    price: 18000,
    capacity: "50 L",
    manufacturer: "Honda",
    weight: 1250,
    estimatedCabinSpace: ((1416 - 150) * 2700 * 1798) / 1000000000,
    sizeToWeightRatio: ((1416 - 150) * 2700 * 1798) / 1000000000 / 1250,
    dragCoefficient: 0.31,
  },
  {
    name: "Honda CR-V",
    yearsProduced: "2007 - Present",
    power: "154 - 190",
    torque: "190 - 240",
    gears: "5-speed automatic / CVT",
    length: 4600,
    width: 1855,
    height: 1685,
    groundClearance: 208,
    wheelbase: 2660,
    turnRadius: 6.3,
    price: 28000,
    capacity: "55 L",
    manufacturer: "Honda",
    weight: 1450,
    estimatedCabinSpace: ((1685 - 208) * 2660 * 1855) / 1000000000,
    sizeToWeightRatio: ((1685 - 208) * 2660 * 1855) / 1000000000 / 1450,
    dragCoefficient: 0.34,
  },
  {
    name: "Honda Jazz",
    yearsProduced: "2009 - Present",
    power: "90 - 110",
    torque: "110 - 145",
    gears: "5-speed manual / CVT",
    length: 4000,
    width: 1694,
    height: 1525,
    groundClearance: 165,
    wheelbase: 2530,
    turnRadius: 5.4,
    price: 8000,
    capacity: "38 L",
    manufacturer: "Honda",
    weight: 950,
    estimatedCabinSpace: ((1525 - 165) * 2530 * 1694) / 1000000000,
    sizeToWeightRatio: ((1525 - 165) * 2530 * 1694) / 1000000000 / 950,
    dragCoefficient: 0.32,
  },
  {
    name: "Honda WR-V",
    yearsProduced: "2017 - Present",
    power: "110",
    torque: "200",
    gears: "6-speed manual / CVT",
    length: 4000,
    width: 1777,
    height: 1600,
    groundClearance: 188,
    wheelbase: 2600,
    turnRadius: 5.6,
    price: 9000,
    capacity: "42 L",
    manufacturer: "Honda",
    weight: 1050,
    estimatedCabinSpace: ((1600 - 188) * 2600 * 1777) / 1000000000,
    sizeToWeightRatio: ((1600 - 188) * 2600 * 1777) / 1000000000 / 1050,
    dragCoefficient: 0.33,
  },
  {
    name: "Honda Amaze",
    yearsProduced: "2013 - Present",
    power: "88 - 110",
    torque: "109 - 200",
    gears: "5-speed manual / CVT",
    length: 3995,
    width: 1680,
    height: 1485,
    groundClearance: 170,
    wheelbase: 2470,
    turnRadius: 5.5,
    price: 7500,
    capacity: "35 L",
    manufacturer: "Honda",
    weight: 920,
    estimatedCabinSpace: ((1485 - 170) * 2470 * 1680) / 1000000000,
    sizeToWeightRatio: ((1485 - 170) * 2470 * 1680) / 1000000000 / 920,
    dragCoefficient: 0.32,
  },
  {
    name: "Honda Elevate",
    yearsProduced: "2023 - Present",
    power: "121",
    torque: "145",
    gears: "6-speed manual / CVT",
    length: 4312,
    width: 1790,
    height: 1650,
    groundClearance: 220,
    wheelbase: 2650,
    turnRadius: 6.9,
    price: 12000,
    capacity: "48 L",
    manufacturer: "Honda",
    weight: 1150,
    estimatedCabinSpace: ((1650 - 220) * 2650 * 1790) / 1000000000,
    sizeToWeightRatio: ((1650 - 220) * 2650 * 1790) / 1000000000 / 1150,
    dragCoefficient: 0.34,
  },
]
const tesla = [
  {
    name: "Tesla Model S",
    yearsProduced: "2012 - Present",
    power: "670 - 1020",
    torque: "840 - 1050",
    gears: "Single-speed automatic",
    length: 4970,
    width: 1964,
    height: 1445,
    groundClearance: 130,
    wheelbase: 2960,
    turnRadius: 5.8,
    price: 74990,
    capacity: "85 kWh",
    manufacturer: "Tesla",
    weight: 2100,
    estimatedCabinSpace: ((1445 - 130) * 2960 * 1964) / 1000000000,
    sizeToWeightRatio: ((1445 - 130) * 2960 * 1964) / 1000000000 / 2100,
    dragCoefficient: 0.24,
  },
  {
    name: "Tesla Model 3",
    yearsProduced: "2017 - Present",
    power: "283 - 450",
    torque: "420 - 639",
    gears: "Single-speed automatic",
    length: 4694,
    width: 1849,
    height: 1443,
    groundClearance: 140,
    wheelbase: 2875,
    turnRadius: 5.4,
    price: 38990,
    capacity: "50 kWh",
    manufacturer: "Tesla",
    weight: 1700,
    estimatedCabinSpace: ((1443 - 140) * 2875 * 1849) / 1000000000,
    sizeToWeightRatio: ((1443 - 140) * 2875 * 1849) / 1000000000 / 1700,
    dragCoefficient: 0.23,
  },
  {
    name: "Tesla Model X",
    yearsProduced: "2015 - Present",
    power: "670 - 1020",
    torque: "840 - 1050",
    gears: "Single-speed automatic",
    length: 5036,
    width: 2070,
    height: 1684,
    groundClearance: 137,
    wheelbase: 2965,
    turnRadius: 6.1,
    price: 79990,
    capacity: "100 kWh",
    manufacturer: "Tesla",
    weight: 2300,
    estimatedCabinSpace: ((1684 - 137) * 2965 * 2070) / 1000000000,
    sizeToWeightRatio: ((1684 - 137) * 2965 * 2070) / 1000000000 / 2300,
    dragCoefficient: 0.25,
  },
  {
    name: "Tesla Model Y",
    yearsProduced: "2020 - Present",
    power: "350 - 456",
    torque: "510 - 639",
    gears: "Single-speed automatic",
    length: 4751,
    width: 1921,
    height: 1624,
    groundClearance: 170,
    wheelbase: 2700,
    turnRadius: 5.7,
    price: 43990,
    capacity: "75 kWh",
    manufacturer: "Tesla",
    weight: 1900,
    estimatedCabinSpace: ((1624 - 170) * 2700 * 1921) / 1000000000,
    sizeToWeightRatio: ((1624 - 170) * 2700 * 1921) / 1000000000 / 1900,
    dragCoefficient: 0.26,
  },
  {
    name: "Tesla Roadster",
    yearsProduced: "2008 - 2012",
    power: "248",
    torque: "400",
    gears: "Single-speed automatic",
    length: 4380,
    width: 1940,
    height: 1150,
    groundClearance: 100,
    wheelbase: 2450,
    turnRadius: 5.2,
    price: 200000,
    capacity: "53 kWh",
    manufacturer: "Tesla",
    weight: 1200,
    estimatedCabinSpace: ((1150 - 100) * 2450 * 1940) / 1000000000,
    sizeToWeightRatio: ((1150 - 100) * 2450 * 1940) / 1000000000 / 1200,
    dragCoefficient: 0.28,
  },
  {
    name: "Tesla Cybertruck",
    yearsProduced: "2023 - Present",
    power: "600 - 800",
    torque: "1000 - 1200",
    gears: "Single-speed automatic",
    length: 5885,
    width: 2030,
    height: 1921,
    groundClearance: 400,
    wheelbase: 3650,
    turnRadius: 7.0,
    price: 60990,
    capacity: "100 kWh",
    manufacturer: "Tesla",
    weight: 2500,
    estimatedCabinSpace: ((1921 - 400) * 3650 * 2030) / 1000000000,
    sizeToWeightRatio: ((1921 - 400) * 3650 * 2030) / 1000000000 / 2500,
    dragCoefficient: 0.3,
  },
]
const mg = [
  {
    name: "MG Hector",
    yearsProduced: "2019 - Present",
    power: "145 - 170",
    torque: "300",
    gears: "6",
    length: 4500,
    width: 1830,
    height: 1675,
    groundClearance: 175,
    wheelbase: 2720,
    turnRadius: 5.6,
    price: 15000,
    capacity: "50 L",
    manufacturer: "MG",
    weight: 1400,
    estimatedCabinSpace: ((1675 - 175) * 2720 * 1830) / 1000000000,
    sizeToWeightRatio: ((1675 - 175) * 2720 * 1830) / 1000000000 / 1400,
    dragCoefficient: 0.33,
  },
  {
    name: "MG ZS EV",
    yearsProduced: "2019 - Present",
    power: "141",
    torque: "353",
    gears: "1",
    length: 4300,
    width: 1820,
    height: 1604,
    groundClearance: 167,
    wheelbase: 2610,
    turnRadius: 5.3,
    price: 22000,
    capacity: "44.5 kWh",
    manufacturer: "MG",
    weight: 1500,
    estimatedCabinSpace: ((1604 - 167) * 2610 * 1820) / 1000000000,
    sizeToWeightRatio: ((1604 - 167) * 2610 * 1820) / 1000000000 / 1500,
    dragCoefficient: 0.31,
  },
  {
    name: "MG Gloster",
    yearsProduced: "2019 - Present",
    power: "200 - 250",
    torque: "550",
    gears: "8",
    length: 5000,
    width: 1930,
    height: 1940,
    groundClearance: 230,
    wheelbase: 2950,
    turnRadius: 5.8,
    price: 35000,
    capacity: "60 L",
    manufacturer: "MG",
    weight: 2200,
    estimatedCabinSpace: ((1940 - 230) * 2950 * 1930) / 1000000000,
    sizeToWeightRatio: ((1940 - 230) * 2950 * 1930) / 1000000000 / 2200,
    dragCoefficient: 0.35,
  },
  {
    name: "MG Comet",
    yearsProduced: "2023 - Present",
    power: "40 - 55",
    torque: "100 - 120",
    gears: "1",
    length: 2974,
    width: 1501,
    height: 1601,
    groundClearance: 160,
    wheelbase: 2000,
    turnRadius: 4.7,
    price: 9999,
    capacity: "17 kWh",
    manufacturer: "MG",
    weight: 800,
    estimatedCabinSpace: ((1601 - 160) * 2000 * 1501) / 1000000000,
    sizeToWeightRatio: ((1601 - 160) * 2000 * 1501) / 1000000000 / 800,
    dragCoefficient: 0.3,
  },
  {
    name: "Windsor",
    yearsProduced: "2020 - Present",
    power: "120 - 160",
    torque: "170 - 220",
    gears: "6",
    length: 4700,
    width: 1800,
    height: 1450,
    groundClearance: 155,
    wheelbase: 2750,
    turnRadius: 5.4,
    price: 19000,
    capacity: "55 L",
    manufacturer: "MG",
    weight: 1300,
    estimatedCabinSpace: ((1450 - 155) * 2750 * 1800) / 1000000000,
    sizeToWeightRatio: ((1450 - 155) * 2750 * 1800) / 1000000000 / 1300,
    dragCoefficient: 0.32,
  },
]
const fiat = [
  {
    name: "Fiat Punto",
    yearsProduced: "2010 - 2016",
    power: "75 - 90",
    torque: "190 - 200",
    gears: "5",
    length: 3987,
    width: 1687,
    height: 1495,
    groundClearance: 185,
    wheelbase: 2510,
    turnRadius: 5.2,
    price: 4800,
    capacity: "35 L",
    manufacturer: "Fiat",
    weight: 980,
    estimatedCabinSpace: ((1495 - 185) * 2510 * 1687) / 1000000000,
    sizeToWeightRatio: ((1495 - 185) * 2510 * 1687) / 1000000000 / 980,
    dragCoefficient: 0.34,
  },
  {
    name: "Fiat Linea",
    yearsProduced: "2010 - 2016",
    power: "90 - 112",
    torque: "200 - 215",
    gears: "5",
    length: 4560,
    width: 1730,
    height: 1495,
    groundClearance: 185,
    wheelbase: 2603,
    turnRadius: 5.4,
    price: 6000,
    capacity: "40 L",
    manufacturer: "Fiat",
    weight: 1100,
    estimatedCabinSpace: ((1495 - 185) * 2603 * 1730) / 1000000000,
    sizeToWeightRatio: ((1495 - 185) * 2603 * 1730) / 1000000000 / 1100,
    dragCoefficient: 0.33,
  },
  {
    name: "Fiat 500",
    yearsProduced: "2010 - 2016",
    power: "69",
    torque: "102",
    gears: "5",
    length: 3546,
    width: 1627,
    height: 1488,
    groundClearance: 130,
    wheelbase: 2300,
    turnRadius: 5.6,
    price: 5500,
    capacity: "30 L",
    manufacturer: "Fiat",
    weight: 850,
    estimatedCabinSpace: ((1488 - 130) * 2300 * 1627) / 1000000000,
    sizeToWeightRatio: ((1488 - 130) * 2300 * 1627) / 1000000000 / 850,
    dragCoefficient: 0.32,
  },
  {
    name: "Fiat Avventura",
    yearsProduced: "2014 - 2016",
    power: "90 - 112",
    torque: "200 - 215",
    gears: "5",
    length: 3995,
    width: 1706,
    height: 1550,
    groundClearance: 205,
    wheelbase: 2578,
    turnRadius: 5.3,
    price: 6500,
    capacity: "40 L",
    manufacturer: "Fiat",
    weight: 1050,
    estimatedCabinSpace: ((1550 - 205) * 2578 * 1706) / 1000000000,
    sizeToWeightRatio: ((1550 - 205) * 2578 * 1706) / 1000000000 / 1050,
    dragCoefficient: 0.34,
  },
]
const tata = [
  {
    name: "Tata Nano",
    yearsProduced: "2008 - 2018",
    power: "35",
    torque: "48",
    gears: "4",
    length: 3199,
    width: 1652,
    height: 1651,
    groundClearance: 180,
    wheelbase: 2230,
    turnRadius: 4.5,
    price: 3000,
    capacity: "20 L",
    manufacturer: "Tata",
    weight: 600,
    estimatedCabinSpace: ((1651 - 180) * 2230 * 1652) / 1000000000,
    sizeToWeightRatio: ((1651 - 180) * 2230 * 1652) / 1000000000 / 600,
    dragCoefficient: 0.36,
  },
  {
    name: "Tata Indica",
    yearsProduced: "1998 - 2018",
    power: "60 - 70",
    torque: "135 - 140",
    gears: "5",
    length: 3795,
    width: 1665,
    height: 1535,
    groundClearance: 165,
    wheelbase: 2420,
    turnRadius: 4.9,
    price: 4500,
    capacity: "30 L",
    manufacturer: "Tata",
    weight: 850,
    estimatedCabinSpace: ((1535 - 165) * 2420 * 1665) / 1000000000,
    sizeToWeightRatio: ((1535 - 165) * 2420 * 1665) / 1000000000 / 850,
    dragCoefficient: 0.35,
  },
  {
    name: "Tata Indigo",
    yearsProduced: "2002 - 2018",
    power: "70 - 90",
    torque: "140 - 190",
    gears: "5",
    length: 3990,
    width: 1695,
    height: 1550,
    groundClearance: 165,
    wheelbase: 2520,
    turnRadius: 5.0,
    price: 5500,
    capacity: "35 L",
    manufacturer: "Tata",
    weight: 900,
    estimatedCabinSpace: ((1550 - 165) * 2520 * 1695) / 1000000000,
    sizeToWeightRatio: ((1550 - 165) * 2520 * 1695) / 1000000000 / 900,
    dragCoefficient: 0.34,
  },
  {
    name: "Tata Safari",
    yearsProduced: "1998 - Present",
    power: "140 - 170",
    torque: "320 - 400",
    gears: "5",
    length: 4665,
    width: 1918,
    height: 1925,
    groundClearance: 200,
    wheelbase: 2650,
    turnRadius: 5.6,
    price: 18000,
    capacity: "60 L",
    manufacturer: "Tata",
    weight: 1600,
    estimatedCabinSpace: ((1925 - 200) * 2650 * 1918) / 1000000000,
    sizeToWeightRatio: ((1925 - 200) * 2650 * 1918) / 1000000000 / 1600,
    dragCoefficient: 0.36,
  },
  {
    name: "Tata Tigor",
    yearsProduced: "2017 - Present",
    power: "85 - 113",
    torque: "114 - 170",
    gears: "5",
    length: 3990,
    width: 1677,
    height: 1537,
    groundClearance: 170,
    wheelbase: 2450,
    turnRadius: 5.2,
    price: 6000,
    capacity: "35 L",
    manufacturer: "Tata",
    weight: 950,
    estimatedCabinSpace: ((1537 - 170) * 2450 * 1677) / 1000000000,
    sizeToWeightRatio: ((1537 - 170) * 2450 * 1677) / 1000000000 / 950,
    dragCoefficient: 0.33,
  },
  {
    name: "Tata Tiago",
    yearsProduced: "2016 - Present",
    power: "85 - 113",
    torque: "114 - 170",
    gears: "5",
    length: 3746,
    width: 1647,
    height: 1537,
    groundClearance: 170,
    wheelbase: 2400,
    turnRadius: 4.9,
    price: 5500,
    capacity: "32 L",
    manufacturer: "Tata",
    weight: 920,
    estimatedCabinSpace: ((1537 - 170) * 2400 * 1647) / 1000000000,
    sizeToWeightRatio: ((1537 - 170) * 2400 * 1647) / 1000000000 / 920,
    dragCoefficient: 0.34,
  },
  {
    name: "Tata Harrier",
    yearsProduced: "2019 - Present",
    power: "140 - 170",
    torque: "350",
    gears: "6",
    length: 4598,
    width: 1894,
    height: 1706,
    groundClearance: 205,
    wheelbase: 2741,
    turnRadius: 5.6,
    price: 19000,
    capacity: "60 L",
    manufacturer: "Tata",
    weight: 1500,
    estimatedCabinSpace: ((1706 - 205) * 2741 * 1894) / 1000000000,
    sizeToWeightRatio: ((1706 - 205) * 2741 * 1894) / 1000000000 / 1500,
    dragCoefficient: 0.35,
  },
  {
    name: "Tata Nexon",
    yearsProduced: "2017 - Present",
    power: "110 - 120",
    torque: "260",
    gears: "6",
    length: 3993,
    width: 1811,
    height: 1606,
    groundClearance: 209,
    wheelbase: 2498,
    turnRadius: 5.1,
    price: 8000,
    capacity: "40 L",
    manufacturer: "Tata",
    weight: 1080,
    estimatedCabinSpace: ((1606 - 209) * 2498 * 1811) / 1000000000,
    sizeToWeightRatio: ((1606 - 209) * 2498 * 1811) / 1000000000 / 1080,
    dragCoefficient: 0.34,
  },
  {
    name: "Tata Altroz",
    yearsProduced: "2020 - Present",
    power: "86 - 110",
    torque: "113 - 200",
    gears: "5",
    length: 3990,
    width: 1755,
    height: 1505,
    groundClearance: 165,
    wheelbase: 2570,
    turnRadius: 5.0,
    price: 7000,
    capacity: "38 L",
    manufacturer: "Tata",
    weight: 980,
    estimatedCabinSpace: ((1505 - 165) * 2570 * 1755) / 1000000000,
    sizeToWeightRatio: ((1505 - 165) * 2570 * 1755) / 1000000000 / 980,
    dragCoefficient: 0.33,
  },
  {
    name: "Tata Punch",
    yearsProduced: "2021 - Present",
    power: "84",
    torque: "113",
    gears: "5",
    length: 3827,
    width: 1742,
    height: 1615,
    groundClearance: 187,
    wheelbase: 2445,
    turnRadius: 5.0,
    price: 6500,
    capacity: "35 L",
    manufacturer: "Tata",
    weight: 1000,
    estimatedCabinSpace: ((1615 - 187) * 2445 * 1742) / 1000000000,
    sizeToWeightRatio: ((1615 - 187) * 2445 * 1742) / 1000000000 / 1000,
    dragCoefficient: 0.34,
  },
]
const toyota = [
  {
    name: "Toyota Glanza",
    yearsProduced: "2019 - Present",
    power: "82 - 89",
    torque: "113 - 140",
    gears: "5-speed manual / CVT",
    length: 3995,
    width: 1745,
    height: 1500,
    groundClearance: 170,
    wheelbase: 2520,
    turnRadius: 4.8,
    price: 7000,
    capacity: "38 L",
    manufacturer: "Toyota",
    weight: 940,
    estimatedCabinSpace: ((1500 - 170) * 2520 * 1745) / 1000000000,
    sizeToWeightRatio: ((1500 - 170) * 2520 * 1745) / 1000000000 / 940,
    dragCoefficient: 0.32,
  },
  {
    name: "Toyota Urban Cruiser",
    yearsProduced: "2020 - Present",
    power: "103",
    torque: "138",
    gears: "5-speed manual / 4-speed AT",
    length: 3995,
    width: 1790,
    height: 1640,
    groundClearance: 210,
    wheelbase: 2500,
    turnRadius: 5.2,
    price: 8500,
    capacity: "42 L",
    manufacturer: "Toyota",
    weight: 1060,
    estimatedCabinSpace: ((1640 - 210) * 2500 * 1790) / 1000000000,
    sizeToWeightRatio: ((1640 - 210) * 2500 * 1790) / 1000000000 / 1060,
    dragCoefficient: 0.34,
  },
  {
    name: "Toyota Innova Crysta",
    yearsProduced: "2016 - Present",
    power: "148 - 163",
    torque: "243 - 360",
    gears: "5-speed manual / 6-speed AT",
    length: 4735,
    width: 1830,
    height: 1795,
    groundClearance: 170,
    wheelbase: 2750,
    turnRadius: 5.6,
    price: 20000,
    capacity: "60 L",
    manufacturer: "Toyota",
    weight: 1550,
    estimatedCabinSpace: ((1795 - 170) * 2750 * 1830) / 1000000000,
    sizeToWeightRatio: ((1795 - 170) * 2750 * 1830) / 1000000000 / 1550,
    dragCoefficient: 0.35,
  },
  {
    name: "Toyota Fortuner",
    yearsProduced: "2016 - Present",
    power: "201 - 204",
    torque: "320 - 500",
    gears: "6-speed manual / 6-speed AT",
    length: 4795,
    width: 1855,
    height: 1835,
    groundClearance: 220,
    wheelbase: 2745,
    turnRadius: 5.9,
    price: 30000,
    capacity: "70 L",
    manufacturer: "Toyota",
    weight: 1800,
    estimatedCabinSpace: ((1835 - 220) * 2745 * 1855) / 1000000000,
    sizeToWeightRatio: ((1835 - 220) * 2745 * 1855) / 1000000000 / 1800,
    dragCoefficient: 0.36,
  },
  {
    name: "Toyota Camry",
    yearsProduced: "2019 - Present",
    power: "178",
    torque: "221",
    gears: "6-speed AT",
    length: 4885,
    width: 1840,
    height: 1445,
    groundClearance: 160,
    wheelbase: 2825,
    turnRadius: 5.8,
    price: 25000,
    capacity: "60 L",
    manufacturer: "Toyota",
    weight: 1450,
    estimatedCabinSpace: ((1445 - 160) * 2825 * 1840) / 1000000000,
    sizeToWeightRatio: ((1445 - 160) * 2825 * 1840) / 1000000000 / 1450,
    dragCoefficient: 0.3,
  },
]
const kia = [
  {
    name: "Kia Seltos",
    yearsProduced: "2019 - Present",
    power: "115 - 138",
    torque: "144 - 242",
    gears: "6-speed manual / 6-speed automatic / 7-speed DCT",
    length: 4315,
    width: 1800,
    height: 1645,
    groundClearance: 190,
    wheelbase: 2610,
    turnRadius: 5.3,
    price: 13000,
    capacity: "50 L",
    manufacturer: "Kia",
    weight: 1280,
    estimatedCabinSpace: ((1645 - 190) * 2610 * 1800) / 1000000000,
    sizeToWeightRatio: ((1645 - 190) * 2610 * 1800) / 1000000000 / 1280,
    dragCoefficient: 0.33,
  },
  {
    name: "Kia Sonet",
    yearsProduced: "2020 - Present",
    power: "99 - 118",
    torque: "240 - 260",
    gears: "5-speed manual / 6-speed manual / 6-speed automatic / 7-speed DCT",
    length: 3995,
    width: 1790,
    height: 1642,
    groundClearance: 205,
    wheelbase: 2610,
    turnRadius: 5.3,
    price: 10000,
    capacity: "45 L",
    manufacturer: "Kia",
    weight: 1150,
    estimatedCabinSpace: ((1642 - 205) * 2610 * 1790) / 1000000000,
    sizeToWeightRatio: ((1642 - 205) * 2610 * 1790) / 1000000000 / 1150,
    dragCoefficient: 0.34,
  },
  {
    name: "Kia Carens",
    yearsProduced: "2022 - Present",
    power: "115 - 138",
    torque: "144 - 242",
    gears: "6-speed manual / 6-speed automatic / 7-speed DCT",
    length: 4540,
    width: 1800,
    height: 1708,
    groundClearance: 190,
    wheelbase: 2780,
    turnRadius: 5.3,
    price: 15000,
    capacity: "55 L",
    manufacturer: "Kia",
    weight: 1350,
    estimatedCabinSpace: ((1708 - 190) * 2780 * 1800) / 1000000000,
    sizeToWeightRatio: ((1708 - 190) * 2780 * 1800) / 1000000000 / 1350,
    dragCoefficient: 0.34,
  },
]
const mahindra = [
  {
    name: "Mahindra XUV700",
    yearsProduced: "2021 - Present",
    power: "155 - 200",
    torque: "360 - 380",
    gears: "6-speed manual / 6-speed automatic",
    length: 4695,
    width: 1890,
    height: 1755,
    groundClearance: 200,
    wheelbase: 2750,
    turnRadius: 5.4,
    price: 20000,
    capacity: "60 L",
    manufacturer: "Mahindra",
    weight: 1650,
    estimatedCabinSpace: ((1755 - 200) * 2750 * 1890) / 1000000000,
    sizeToWeightRatio: ((1755 - 200) * 2750 * 1890) / 1000000000 / 1650,
    dragCoefficient: 0.35,
  },
  {
    name: "Mahindra Thar",
    yearsProduced: "2020 - Present",
    power: "130 - 150",
    torque: "300 - 320",
    gears: "6-speed manual / 6-speed automatic",
    length: 3985,
    width: 1855,
    height: 1844,
    groundClearance: 226,
    wheelbase: 2450,
    turnRadius: 5.6,
    price: 15000,
    capacity: "50 L",
    manufacturer: "Mahindra",
    weight: 1400,
    estimatedCabinSpace: ((1844 - 226) * 2450 * 1855) / 1000000000,
    sizeToWeightRatio: ((1844 - 226) * 2450 * 1855) / 1000000000 / 1400,
    dragCoefficient: 0.37,
  },
  {
    name: "Mahindra Scorpio-N",
    yearsProduced: "2022 - Present",
    power: "130 - 200",
    torque: "300 - 380",
    gears: "6-speed manual / 6-speed automatic",
    length: 4662,
    width: 1917,
    height: 1857,
    groundClearance: 187,
    wheelbase: 2750,
    turnRadius: 5.4,
    price: 18000,
    capacity: "65 L",
    manufacturer: "Mahindra",
    weight: 1700,
    estimatedCabinSpace: ((1857 - 187) * 2750 * 1917) / 1000000000,
    sizeToWeightRatio: ((1857 - 187) * 2750 * 1917) / 1000000000 / 1700,
    dragCoefficient: 0.36,
  },
  {
    name: "Mahindra XUV300",
    yearsProduced: "2019 - Present",
    power: "108 - 115",
    torque: "200 - 300",
    gears: "6-speed manual / 6-speed automatic",
    length: 3995,
    width: 1821,
    height: 1627,
    groundClearance: 180,
    wheelbase: 2600,
    turnRadius: 5.4,
    price: 12000,
    capacity: "45 L",
    manufacturer: "Mahindra",
    weight: 1180,
    estimatedCabinSpace: ((1627 - 180) * 2600 * 1821) / 1000000000,
    sizeToWeightRatio: ((1627 - 180) * 2600 * 1821) / 1000000000 / 1180,
    dragCoefficient: 0.34,
  },
  {
    name: "Mahindra XUV500",
    yearsProduced: "2011 - 2021",
    power: "140 - 155",
    torque: "330 - 360",
    gears: "6-speed manual / 6-speed automatic",
    length: 4585,
    width: 1890,
    height: 1785,
    groundClearance: 200,
    wheelbase: 2700,
    turnRadius: 5.4,
    price: 16000,
    capacity: "55 L",
    manufacturer: "Mahindra",
    weight: 1580,
    estimatedCabinSpace: ((1785 - 200) * 2700 * 1890) / 1000000000,
    sizeToWeightRatio: ((1785 - 200) * 2700 * 1890) / 1000000000 / 1580,
    dragCoefficient: 0.35,
  },
]
const volkswagon = [
  {
    name: "Volkswagen Virtus",
    yearsProduced: "2022 - Present",
    power: "113 - 148",
    torque: "178 - 250",
    gears: "6-speed manual / 6-speed automatic / 7-speed DCT",
    length: 4561,
    width: 1759,
    height: 1507,
    groundClearance: 179,
    wheelbase: 2651,
    turnRadius: 5.4,
    price: 14000,
    capacity: "50 L",
    manufacturer: "Volkswagen",
    weight: 1220,
    estimatedCabinSpace: ((1507 - 179) * 2651 * 1759) / 1000000000,
    sizeToWeightRatio: ((1507 - 179) * 2651 * 1759) / 1000000000 / 1220,
    dragCoefficient: 0.32,
  },
  {
    name: "Volkswagen Taigun",
    yearsProduced: "2021 - Present",
    power: "113 - 148",
    torque: "178 - 250",
    gears: "6-speed manual / 6-speed automatic / 7-speed DCT",
    length: 4221,
    width: 1760,
    height: 1612,
    groundClearance: 188,
    wheelbase: 2651,
    turnRadius: 5.4,
    price: 12000,
    capacity: "45 L",
    manufacturer: "Volkswagen",
    weight: 1190,
    estimatedCabinSpace: ((1612 - 188) * 2651 * 1760) / 1000000000,
    sizeToWeightRatio: ((1612 - 188) * 2651 * 1760) / 1000000000 / 1190,
    dragCoefficient: 0.33,
  },
  {
    name: "Volkswagen Tiguan",
    yearsProduced: "2017 - Present",
    power: "187",
    torque: "320",
    gears: "7-speed DCT",
    length: 4486,
    width: 1839,
    height: 1665,
    groundClearance: 205,
    wheelbase: 2679,
    turnRadius: 5.5,
    price: 22000,
    capacity: "55 L",
    manufacturer: "Volkswagen",
    weight: 1480,
    estimatedCabinSpace: ((1665 - 205) * 2679 * 1839) / 1000000000,
    sizeToWeightRatio: ((1665 - 205) * 2679 * 1839) / 1000000000 / 1480,
    dragCoefficient: 0.33,
  },
  {
    name: "Volkswagen Polo",
    yearsProduced: "2009 - Present",
    power: "75 - 110",
    torque: "110 - 175",
    gears: "5-speed manual / 6-speed automatic",
    length: 3971,
    width: 1682,
    height: 1469,
    groundClearance: 165,
    wheelbase: 2470,
    turnRadius: 4.97,
    price: 12000,
    capacity: "45 L",
    manufacturer: "Volkswagen",
    weight: 1080,
    estimatedCabinSpace: ((1469 - 165) * 2470 * 1682) / 1000000000,
    sizeToWeightRatio: ((1469 - 165) * 2470 * 1682) / 1000000000 / 1080,
    dragCoefficient: 0.32,
  },
  {
    name: "Volkswagen Vento",
    yearsProduced: "2010 - Present",
    power: "75 - 110",
    torque: "110 - 250",
    gears: "5-speed manual / 6-speed automatic / 7-speed DSG",
    length: 4390,
    width: 1699,
    height: 1467,
    groundClearance: 163,
    wheelbase: 2553,
    turnRadius: 5.4,
    price: 14000,
    capacity: "55 L",
    manufacturer: "Volkswagen",
    weight: 1160,
    estimatedCabinSpace: ((1467 - 163) * 2553 * 1699) / 1000000000,
    sizeToWeightRatio: ((1467 - 163) * 2553 * 1699) / 1000000000 / 1160,
    dragCoefficient: 0.31,
  },
]
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
  const [sortBy, setSortBy] = useState<"name" | "length" | "width" | "height" | "price">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [manufacturerFilter, setManufacturerFilter] = useState<string>("All")
  const [comparisonFilter, setComparisonFilter] = useState<"all" | "bigger" | "smaller">("all")

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

  // Filter and sort data
  const filteredData = data
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
    .filter((item) => {
      if (manufacturerFilter !== "All" && item.manufacturer !== manufacturerFilter) return false
      if (pinnedCar && comparisonFilter !== "all") {
        const compareFields: (keyof CarData)[] = [
          "length",
          "width",
          "height",
          "wheelbase",
          "turnRadius",
          "groundClearance",
          "price",
        ]
        for (const field of compareFields) {
          if (comparisonFilter === "bigger" && item[field] <= pinnedCar[field]) return false
          if (comparisonFilter === "smaller" && item[field] >= pinnedCar[field]) return false
        }
      }
      return true
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return sortBy === "name" ? a.name.localeCompare(b.name) : (a[sortBy] as number) - (b[sortBy] as number)
      } else {
        return sortBy === "name" ? b.name.localeCompare(a.name) : (b[sortBy] as number) - (a[sortBy] as number)
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
              onChange={(e) => setComparisonFilter(e.target.value as "all" | "bigger" | "smaller")}
            >
              <option value="all">Show All</option>
              <option value="bigger">Bigger Than Pinned</option>
              <option value="smaller">Smaller Than Pinned</option>
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
              <p>Capacity: {item.capacity}</p>
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

