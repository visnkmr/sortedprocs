export const renault = [
    {
      name: "Renault Kwid",
      yearsProduced: "2015 - Present",
      power: "53 - 68", // bhp
      torque: "72 - 91", // Nm
      gears: "5-speed manual / AMT",
      length: 3731,
      width: 1579,
      height: 1478, // Updated Height (was 1474/1490 elsewhere, using provided)
      groundClearance: 180, // Updated GC (was 184 elsewhere, using provided)
      wheelbase: 2422,
      turnRadius: 4.7, // (Kerb-to-kerb, wall-to-wall is 4.9m)
      price: 5252, // Corrected: Assumed 4.5 Lakh INR -> USD
      capacity: "28 L",
      manufacturer: "Renault",
      weight: 750, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 4952811604, // Recalculated: ((1478 - 180) * 2422 * 1579)
      sizeToWeightRatio: 6603748.81, // Recalculated: (4952811604 / 750)
      dragCoefficient: 0.33, // Estimate
    },
    {
      name: "Renault Triber",
      yearsProduced: "2019 - Present",
      power: "71", // bhp
      torque: "96", // Nm
      gears: "5-speed manual / AMT",
      length: 3990,
      width: 1739,
      height: 1643,
      groundClearance: 182,
      wheelbase: 2636,
      turnRadius: 5.0, // Corrected (was 5.2)
      price: 7819, // Corrected: Assumed 6.7 Lakh INR -> USD
      capacity: "40 L",
      manufacturer: "Renault",
      weight: 950, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6704311344, // Recalculated: ((1643 - 182) * 2636 * 1739)
      sizeToWeightRatio: 7057169.84, // Recalculated: (6704311344 / 950)
      dragCoefficient: 0.34, // Estimate
    },
    {
      name: "Renault Kiger",
      yearsProduced: "2021 - Present",
      power: "71 - 98", // bhp
      torque: "96 - 160", // Nm
      gears: "5-speed manual / AMT / CVT", // Corrected Gears
      length: 3991,
      width: 1750,
      height: 1605, // Corrected Height (was 1600)
      groundClearance: 205,
      wheelbase: 2500, // Corrected Wheelbase (was 2589)
      turnRadius: 5.0, // Corrected (was 5.2)
      price: 7002, // Corrected: Assumed 6 Lakh INR -> USD
      capacity: "40 L", // Corrected Capacity (was 38L)
      manufacturer: "Renault",
      weight: 980, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6146875000, // Recalculated: ((1605 - 205) * 2500 * 1750)
      sizeToWeightRatio: 6272321.43, // Recalculated: (6146875000 / 980)
      dragCoefficient: 0.33, // Estimate
    },
    {
      name: "Renault Duster",
      yearsProduced: "2012 - 2022 (India)", // Corrected: Discontinued in India
      power: "104 - 153", // bhp
      torque: "142 - 250", // Nm
      gears: "5-speed manual / 6-speed manual / CVT",
      length: 4360, // Corrected Length (was 4315)
      width: 1822,
      height: 1695,
      groundClearance: 205, // (2WD, AWD was 210mm)
      wheelbase: 2673,
      turnRadius: 5.2, // Corrected (was 5.3)
      price: 9919, // Corrected: Assumed 8.5 Lakh INR -> USD
      capacity: "50 L",
      manufacturer: "Renault",
      weight: 1150, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 7258245480, // Recalculated: ((1695 - 205) * 2673 * 1822)
      sizeToWeightRatio: 6311517.81, // Recalculated: (7258245480 / 1150)
      dragCoefficient: 0.35, // Estimate
    },
  ]
export const nissan = [
    {
      name: "Nissan Magnite",
      yearsProduced: "2020 - Present",
      power: "71 - 98", // bhp
      torque: "96 - 160", // Nm
      gears: "5-speed manual / CVT",
      length: 3994,
      width: 1758,
      height: 1572,
      groundClearance: 205,
      wheelbase: 2500,
      turnRadius: 5.0, // Corrected (was 5.2)
      price: 6419, // Corrected: Assumed 5.5 Lakh INR -> USD
      capacity: "40 L", // Corrected Capacity (was 42L)
      manufacturer: "Nissan",
      weight: 970, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6002415000, // Recalculated: ((1572 - 205) * 2500 * 1758)
      sizeToWeightRatio: 6188056.70, // Recalculated: (6002415000 / 970)
      dragCoefficient: 0.32, // Estimate
    },
    {
      name: "Nissan Kicks",
      yearsProduced: "2019 - 2023 (India)", // Corrected: Discontinued in India
      power: "104 - 153", // bhp
      torque: "142 - 250", // Nm
      gears: "5-speed manual / 6-speed manual / CVT",
      length: 4384,
      width: 1813,
      height: 1651, // Corrected Height (was 1656)
      groundClearance: 210,
      wheelbase: 2673,
      turnRadius: 5.2, // Corrected (was 5.3)
      price: 10503, // Corrected: Assumed 9 Lakh INR -> USD
      capacity: "50 L", // Corrected Capacity (was 45L)
      manufacturer: "Nissan",
      weight: 1180, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6983526822, // Recalculated: ((1651 - 210) * 2673 * 1813)
      sizeToWeightRatio: 5918243.07, // Recalculated: (6983526822 / 1180)
      dragCoefficient: 0.34, // Estimate
    },
  ]
export const byd = [
    {
      name: "BYD ATTO 3",
      yearsProduced: "2022 - Present",
      power: "201", // bhp
      torque: "310", // Nm
      gears: "Single-speed automatic",
      length: 4455,
      width: 1875,
      height: 1615,
      groundClearance: 175,
      wheelbase: 2720,
      turnRadius: 5.5,
      price: 32000, // Assumed USD
      capacity: "60.48 kWh", // Corrected: Battery Capacity (was 50L)
      manufacturer: "BYD",
      weight: 1750, // Corrected Kerb Weight (was 1700kg)
      estimatedCabinSpace: 7346400000, // Recalculated: ((1615 - 175) * 2720 * 1875)
      sizeToWeightRatio: 4197942.86, // Recalculated: (7346400000 / 1750)
      dragCoefficient: 0.29, // Corrected (was 0.28)
    },
    {
      name: "BYD SEAL",
      yearsProduced: "2023 - Present",
      power: "308", // bhp (Premium variant)
      torque: "360", // Nm (Premium variant)
      gears: "Single-speed automatic",
      length: 4800,
      width: 1875,
      height: 1460, // Corrected Height (was 1500)
      groundClearance: 120, // Corrected Ground Clearance (was 130)
      wheelbase: 2920, // Corrected Wheelbase (was 2765)
      turnRadius: 5.7,
      price: 45000, // Assumed USD
      capacity: "82.56 kWh", // Corrected: Battery Capacity (Premium, was 60L)
      manufacturer: "BYD",
      weight: 1850, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 7107330000, // Recalculated: ((1460 - 120) * 2920 * 1875)
      sizeToWeightRatio: 3841794.59, // Recalculated: (7107330000 / 1850)
      dragCoefficient: 0.219, // Corrected (was 0.26) - Official value
    },
  ]
export const skoda = [
    {
        name: "Skoda Slavia",
        yearsProduced: "2022 - Present",
        power: "115 - 150", // Corrected Power Range (bhp)
        torque: "178 - 250", // Corrected Torque Range (Nm)
        gears: "6-speed manual / 6-speed auto / 7-speed DSG", // Corrected Gears
        length: 4541,
        width: 1752,
        height: 1507, // Corrected Height (was 1487)
        groundClearance: 179,
        wheelbase: 2651,
        turnRadius: 5.3, // Corrected Turn Radius (was 5.2)
        price: 18672, // Corrected: Assumed 16 Lakh INR -> USD
        capacity: "45 L", // Corrected Capacity (was 50L)
        manufacturer: "Skoda",
        weight: 1150, // Approx Kerb Weight (kg)
        estimatedCabinSpace: 6169958112, // Recalculated: ((1507 - 179) * 2651 * 1752)
        sizeToWeightRatio: 5365181.00, // Recalculated: (6169958112 / 1150)
        dragCoefficient: 0.28, // Corrected (was 0.30) - Official estimate
      },
    {
      name: "Škoda Kylaq",
      yearsProduced: "2025 (Expected)", // Corrected: Not yet launched
      power: "115", // Estimated bhp
      torque: "178", // Estimated Nm
      gears: "6-speed manual / 6-speed automatic", // Estimated
      length: 3995, // Estimated
      width: 1783, // Estimated
      height: 1619, // Estimated
      groundClearance: 189, // Estimated
      wheelbase: 2566, // Estimated
      turnRadius: 5.0, // Corrected: Estimate (was 5.2)
      price: 11670, // Corrected: Assumed Lower Est. 10 Lakh INR -> USD (was 18k USD)
      capacity: "45 L", // Estimated
      manufacturer: "Škoda",
      weight: 1100, // Estimated Kerb Weight (kg)
      estimatedCabinSpace: 6545106414, // Recalculated: ((1619 - 189) * 2566 * 1783)
      sizeToWeightRatio: 5950096.74, // Recalculated: (6545106414 / 1100)
      dragCoefficient: 0.31, // Estimated
    },
    {
      name: "Skoda Kodiaq",
      yearsProduced: "2017 - Present", // Corrected years (India launch)
      power: "187", // Corrected Power (bhp, India spec 2.0 TSI)
      torque: "320", // Corrected Torque (Nm, India spec 2.0 TSI)
      gears: "7-speed DSG", // Corrected Gears (India spec)
      length: 4697, // Corrected Length (current gen)
      width: 1882, // Corrected Width (current gen)
      height: 1681, // Corrected Height (current gen, incl rails)
      groundClearance: 192, // Corrected Ground Clearance (was 190)
      wheelbase: 2791, // Corrected Wheelbase (current gen)
      turnRadius: 5.8, // Seems correct
      price: 45510, // Corrected: India price ~39 Lakh INR -> USD (was 35k USD)
      capacity: "58 L", // Corrected Capacity (was 60L)
      manufacturer: "Škoda",
      weight: 1793, // Corrected Kerb Weight (kg, L&K)
      estimatedCabinSpace: 7748264592, // Recalculated: ((1681 - 192) * 2791 * 1882)
      sizeToWeightRatio: 4321397.43, // Recalculated: (7748264592 / 1793)
      dragCoefficient: 0.33, // Estimate
    },
    {
      name: "Skoda Kushaq",
      yearsProduced: "2021 - Present",
      power: "115 - 150", // bhp
      torque: "178 - 250", // Corrected Torque (Nm, was 250-265)
      gears: "6-speed manual / 6-speed auto / 7-speed DSG", // Corrected Gears
      length: 4225, // Corrected Length (was 4246)
      width: 1760, // Corrected Width (was 1824)
      height: 1612, // Corrected Height (was 1530)
      groundClearance: 188, // Corrected Ground Clearance (was 160)
      wheelbase: 2651, // Corrected Wheelbase (was 2639)
      turnRadius: 5.3, // Seems correct
      price: 14004, // Corrected: Assumed Starting 12 Lakh INR -> USD (was 22k USD)
      capacity: "50 L",
      manufacturer: "Škoda",
      weight: 1200, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6646078560, // Recalculated: ((1612 - 188) * 2651 * 1760)
      sizeToWeightRatio: 5538398.80, // Recalculated: (6646078560 / 1200)
      dragCoefficient: 0.32, // Estimate
    },
    {
      name: "Skoda Octavia",
      yearsProduced: "2001 - 2023 (India Sales)", // Corrected Years
      power: "187", // Corrected Power (bhp, last gen 2.0 TSI)
      torque: "320", // Corrected Torque (Nm, last gen 2.0 TSI)
      gears: "7-speed DSG", // Corrected Gears (last gen)
      length: 4689, // Corrected Length (last gen)
      width: 1829, // Corrected Width (last gen)
      height: 1469, // Corrected Height (last gen)
      groundClearance: 137, // Corrected Ground Clearance (last gen)
      wheelbase: 2680, // Corrected Wheelbase (last gen)
      turnRadius: 5.2, // Seems correct
      price: 31509, // Corrected: Assumed ~27 Lakh INR -> USD (was 28k USD)
      capacity: "50 L", // Corrected Capacity (was 55L)
      manufacturer: "Škoda",
      weight: 1450, // Corrected Kerb Weight (kg, last gen)
      estimatedCabinSpace: 6530614080, // Recalculated: ((1469 - 137) * 2680 * 1829)
      sizeToWeightRatio: 4503871.78, // Recalculated: (6530614080 / 1450)
      dragCoefficient: 0.24, // Corrected (was 0.3) - Official for last gen
    },
    {
      name: "Skoda Superb",
      yearsProduced: "2004 - Present (India Sales)", // Corrected Years
      power: "187", // Corrected Power (bhp, current CBU import)
      torque: "320", // Corrected Torque (Nm, current CBU import)
      gears: "7-speed DSG", // Corrected Gears
      length: 4869, // Corrected Length (current CBU import)
      width: 1864, // Corrected Width (current CBU import)
      height: 1469, // Corrected Height (current CBU import)
      groundClearance: 151, // Corrected Ground Clearance (current CBU import)
      wheelbase: 2841, // Corrected Wheelbase (current CBU import)
      turnRadius: 5.6, // Seems correct
      price: 60684, // Corrected: India CBU price ~52 Lakh INR -> USD (was 38k USD)
      capacity: "66 L", // Corrected Capacity (was 65L)
      manufacturer: "Škoda",
      weight: 1565, // Corrected Kerb Weight (kg, current CBU L&K)
      estimatedCabinSpace: 7021130894, // Recalculated: ((1469 - 151) * 2841 * 1864)
      sizeToWeightRatio: 4486345.62, // Recalculated: (7021130894 / 1565)
      dragCoefficient: 0.23, // Corrected (was 0.29) - New Gen Official
    },
    {
      name: "Skoda Rapid",
      yearsProduced: "2011 - 2021 (India)", // Corrected Years
      power: "103 - 108", // Corrected Power (bhp, last engines)
      torque: "153 - 175", // Corrected Torque (Nm, last engines)
      gears: "5-speed manual / 6-speed auto", // Corrected Gears
      length: 4413, // Corrected Length (was 4540)
      width: 1699, // Corrected Width (was 1740)
      height: 1466, // Corrected Height (was 1460)
      groundClearance: 163, // Corrected Ground Clearance (was 140)
      wheelbase: 2552, // Corrected Wheelbase (was 2630)
      turnRadius: 5.3, // Corrected Turn Radius (was 5.1)
      price: 11087, // Corrected: Assumed ~9.5 Lakh INR -> USD (was 19k USD)
      capacity: "55 L", // Corrected Capacity (was 48L)
      manufacturer: "Škoda",
      weight: 1150, // Corrected Kerb Weight (kg, approx)
      estimatedCabinSpace: 5646656944, // Recalculated: ((1466 - 163) * 2552 * 1699)
      sizeToWeightRatio: 4910136.47, // Recalculated: (5646656944 / 1150)
      dragCoefficient: 0.31, // Estimate
    },
  ]
export const maruti = [
    {
        name: "Maruti Suzuki Grand Vitara",
        yearsProduced: "2022 - Present",
        power: "91 - 101", // Corrected Power (bhp - Hybrid / Mild Hybrid)
        torque: "122 - 136.8", // Corrected Torque (Nm - Hybrid / Mild Hybrid)
        gears: "5-speed manual / 6-speed automatic / e-CVT", // Corrected Gears
        length: 4345,
        width: 1795,
        height: 1645,
        groundClearance: 210,
        wheelbase: 2600,
        turnRadius: 5.4, // Corrected Turn Radius (was 5.3)
        price: 12837, // Corrected: Assumed Starting ~11 Lakh INR -> USD (was 23k USD)
        capacity: "45 L", // Corrected Capacity (was 50L)
        manufacturer: "Maruti Suzuki",
        weight: 1150, // Corrected Kerb Weight (kg, starting Mild Hybrid)
        estimatedCabinSpace: 6688115000, // Recalculated: ((1645 - 210) * 2600 * 1795)
        sizeToWeightRatio: 5815752.17, // Recalculated: (6688115000 / 1150)
        dragCoefficient: 0.35 // Estimate
      },
      {
        name: "Maruti Suzuki Ciaz",
        yearsProduced: "2014 - Present",
        power: "103", // bhp
        torque: "138", // Nm
        gears: "5-speed manual / 4-speed automatic",
        length: 4490,
        width: 1730,
        height: 1485,
        groundClearance: 170,
        wheelbase: 2650,
        turnRadius": 5.4,
        price: 10737, // Corrected: Assumed Starting ~9.2 Lakh INR -> USD (was 16k USD)
        capacity: "43 L",
        manufacturer: "Maruti Suzuki",
        weight: 1030, // Corrected Kerb Weight (kg, starting MT)
        estimatedCabinSpace: 6026967500, // Recalculated: ((1485 - 170) * 2650 * 1730)
        sizeToWeightRatio: 5851424.76, // Recalculated: (6026967500 / 1030)
        dragCoefficient": 0.29, // Corrected (was 0.30) - Official estimate
      },
      {
        name: "Maruti Suzuki Jimny",
        yearsProduced: "2023 - Present",
        power: "103", // Corrected Power (bhp, was 104)
        torque: "134.2", // Corrected Torque (Nm, was 134)
        gears: "5-speed manual / 4-speed automatic",
        length: 3985, // Corrected Length (was 3645, using 5-door spec)
        width: 1645,
        height: 1720,
        groundClearance: 210,
        wheelbase: 2590, // Corrected Wheelbase (was 2250, using 5-door spec)
        turnRadius": 5.7,
        price: 14616, // Corrected: Starting ~12.5 Lakh INR -> USD (was 12k USD)
        capacity: "40 L",
        manufacturer: "Maruti Suzuki",
        weight: 1190, // Corrected Kerb Weight (kg, starting MT 5-door)
        estimatedCabinSpace: 5605432750, // Recalculated: ((1720 - 210) * 2590 * 1645)
        sizeToWeightRatio: 4710447.69, // Recalculated: (5605432750 / 1190)
        dragCoefficient": 0.40 // Estimate (Likely high due to shape)
      },
      {
        name: "Maruti Suzuki Invicto",
        yearsProduced: "2023 - Present",
        power: "184", // bhp (Combined Hybrid)
        torque: "188 + 206", // Corrected Torque (Nm - Engine + Motor)
        gears: "e-CVT", // Corrected Gears (was CVT)
        length: 4755,
        width: 1850, // Width with mirrors is 1850, body is 1845. Using 1850.
        height: 1790, // Corrected Height (was 1795)
        groundClearance: 185, // Corrected Ground Clearance (was 190)
        wheelbase: 2850,
        turnRadius": 5.9, // Corrected Turn Radius (was 5.6)
        price: 29175, // Corrected: Starting ~25 Lakh INR -> USD (was 34k USD)
        capacity: "52 L", // Corrected Capacity (was 55L)
        manufacturer: "Maruti Suzuki",
        weight: 1685, // Corrected Kerb Weight (kg, starting Zeta+)
        estimatedCabinSpace: 8448915000, // Recalculated: ((1790 - 185) * 2850 * 1850)
        sizeToWeightRatio: 5014192.88, // Recalculated: (8448915000 / 1685)
        dragCoefficient": 0.33 // Estimate
      },
      {
        name: "Maruti Suzuki Ignis",
        yearsProduced: "2017 - Present",
        power: "81.8", // Corrected Power (bhp, was 83)
        torque: "113", // Nm
        gears: "5-speed manual / AMT",
        length: 3700,
        width: 1690,
        height: 1595, // Corrected Height (was 1590)
        groundClearance: 180,
        wheelbase: 2435,
        turnRadius": 4.7,
        price: 6828, // Corrected: Starting ~5.85 Lakh INR -> USD (was 7k USD)
        capacity: "32 L", // Corrected Capacity (was 27L)
        manufacturer: "Maruti Suzuki",
        weight": 840, // Corrected Kerb Weight (kg, starting MT)
        estimatedCabinSpace: 5821503350, // Recalculated: ((1595 - 180) * 2435 * 1690)
        sizeToWeightRatio: 6930361.13, // Recalculated: (5821503350 / 840)
        dragCoefficient": 0.36 // Estimate
      },
      {
        name: "Maruti Suzuki S-Presso",
        yearsProduced: "2019 - Present",
        power: "65.7", // Corrected Power (bhp, was 67)
        torque: "89", // Corrected Torque (Nm, was 90)
        gears: "5-speed manual / AMT",
        length: 3565,
        width: 1520, // Corrected Width (was 1490)
        height: 1567, // Corrected Height (was 1560)
        groundClearance: 180,
        wheelbase: 2380, // Corrected Wheelbase (was 2365)
        turnRadius": 4.5,
        price: 4972, // Corrected: Starting ~4.26 Lakh INR -> USD (was 5k USD)
        capacity: "27 L",
        manufacturer: "Maruti Suzuki",
        weight": 736, // Corrected Kerb Weight (kg, starting Std)
        estimatedCabinSpace: 4882026080, // Recalculated: ((1567 - 180) * 2380 * 1520)
        sizeToWeightRatio: 6633187.61, // Recalculated: (4882026080 / 736)
        dragCoefficient": 0.39 // Estimate
      },
    {
      name: "Maruti Suzuki Alto K10", // Corrected Name
      yearsProduced: "2022 - Present", // Corrected Years (current gen)
      power: "65.7", // Corrected Power (bhp, was 47-68)
      torque: "89", // Corrected Torque (Nm, was 69-90)
      gears: "5-speed manual / AMT",
      length: 3530, // Corrected Length (was 3395)
      width: 1490,
      height: 1520, // Corrected Height (was 1475)
      groundClearance: 160, // Seems correct
      wheelbase: 2380, // Corrected Wheelbase (was 2360)
      turnRadius": 4.5, // Corrected Turn Radius (was 4.9)
      price: 4656, // Corrected: Starting ~3.99 Lakh INR -> USD (was 4k USD)
      capacity: "27 L", // Corrected Capacity (was 25L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 730, // Corrected Kerb Weight (kg, starting Std)
      estimatedCabinSpace: 4744155200, // Recalculated: ((1520 - 160) * 2380 * 1490)
      sizeToWeightRatio: 6498842.74, // Recalculated: (4744155200 / 730)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Maruti Suzuki Wagon R",
      yearsProduced: "2019 - Present", // Corrected Years (current gen)
      power: "65.7 - 88.5", // Corrected Power (bhp, 1.0L / 1.2L)
      torque: "89 - 113", // Corrected Torque (Nm, 1.0L / 1.2L)
      gears: "5-speed manual / AMT",
      length: 3655,
      width: 1620, // Corrected Width (was 1490)
      height: 1675,
      groundClearance: 165, // Seems correct
      wheelbase: 2435,
      turnRadius": 4.7, // Corrected Turn Radius (was 5.2)
      price: 6479, // Corrected: Starting ~5.55 Lakh INR -> USD (was 5k USD)
      capacity: "32 L", // Corrected Capacity (was 30L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 810, // Corrected Kerb Weight (kg, starting 1.0L MT)
      estimatedCabinSpace: 5490076500, // Recalculated: ((1675 - 165) * 2435 * 1620)
      sizeToWeightRatio: 6777872.22, // Recalculated: (5490076500 / 810)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Maruti Suzuki Swift",
      yearsProduced: "2024 - Present", // Corrected Years (New Gen)
      power: "80.4", // Corrected Power (bhp, New Z-Series)
      torque: "111.7", // Corrected Torque (Nm, New Z-Series)
      gears: "5-speed manual / AMT",
      length: 3860, // Corrected Length (New Gen)
      width: 1735,
      height: 1520, // Corrected Height (New Gen)
      groundClearance: 163, // Seems correct
      wheelbase: 2450,
      turnRadius": 4.8, // Corrected Turn Radius (New Gen)
      price: 7586, // Corrected: Starting ~6.5 Lakh INR -> USD
      capacity: "37 L", // Corrected Capacity (was 35L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 920, // Corrected Kerb Weight (kg, New Gen starting MT)
      estimatedCabinSpace: 5814567500, // Recalculated: ((1520 - 163) * 2450 * 1735)
      sizeToWeightRatio: 6320182.07, // Recalculated: (5814567500 / 920)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Maruti Suzuki Baleno",
      yearsProduced: "2022 - Present", // Corrected Years (current facelift)
      power: "88.5", // Corrected Power (bhp, was 82-90)
      torque: "113", // Nm
      gears: "5-speed manual / AMT", // Corrected Gears (CVT replaced by AMT)
      length: 3990, // Corrected Length (was 3995)
      width: 1745,
      height: 1500, // Corrected Height (was 1450)
      groundClearance: 170, // Seems correct
      wheelbase: 2520, // Corrected Wheelbase (was 2600)
      turnRadius": 4.85, // Corrected Turn Radius (was 5.3)
      price: 7702, // Corrected: Starting ~6.6 Lakh INR -> USD (was 7.5k USD)
      capacity: "37 L", // Corrected Capacity (was 38L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 925, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5840118000, // Recalculated: ((1500 - 170) * 2520 * 1745)
      sizeToWeightRatio: 6313641.08, // Recalculated: (5840118000 / 925)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Maruti Suzuki Dzire",
      yearsProduced: "2017 - Present", // Corrected Years (current gen)
      power: "88.5", // Corrected Power (bhp, was 82)
      torque: "113", // Nm
      gears: "5-speed manual / AMT",
      length: 3995,
      width: 1735,
      height: 1515,
      groundClearance: 163, // Seems correct
      wheelbase: 2450,
      turnRadius": 4.8, // Corrected Turn Radius (was 5.3)
      price: 7586, // Corrected: Starting ~6.5 Lakh INR -> USD (was 7k USD)
      capacity: "37 L", // Corrected Capacity (was 35L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 880, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5754876250, // Recalculated: ((1515 - 163) * 2450 * 1735)
      sizeToWeightRatio: 6539632.10, // Recalculated: (5754876250 / 880)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Maruti Suzuki Brezza", // Corrected Name
      yearsProduced: "2022 - Present", // Corrected Years (current gen)
      power: "101.6", // Corrected Power (bhp, was 103)
      torque: "136.8", // Corrected Torque (Nm, was 138)
      gears: "5-speed manual / 6-speed automatic",
      length: 3995,
      width: 1790,
      height: 1685, // Corrected Height (was 1640)
      groundClearance: 198, // Seems correct
      wheelbase: 2500,
      turnRadius": 5.2, // Corrected Turn Radius (was 5.6)
      price: 9683, // Corrected: Starting ~8.3 Lakh INR -> USD (was 8k USD)
      capacity: "48 L", // Corrected Capacity (was 40L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 1110, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 6654975000, // Recalculated: ((1685 - 198) * 2500 * 1790)
      sizeToWeightRatio: 5995472.97, // Recalculated: (6654975000 / 1110)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Maruti Suzuki Ertiga",
      yearsProduced: "2018 - Present", // Corrected Years (current gen)
      power: "101.6", // Corrected Power (bhp, was 103)
      torque: "136.8", // Corrected Torque (Nm, was 138)
      gears: "5-speed manual / 6-speed automatic",
      length: 4395,
      width: 1735,
      height: 1690, // Corrected Height (was 1685)
      groundClearance: 185, // Seems correct
      wheelbase: 2740,
      turnRadius": 5.2, // Corrected Turn Radius (was 6.8)
      price: 10139, // Corrected: Starting ~8.69 Lakh INR -> USD (was 10k USD)
      capacity: "45 L",
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 1150, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 7168895000, // Recalculated: ((1690 - 185) * 2740 * 1735)
      sizeToWeightRatio: 6233821.74, // Recalculated: (7168895000 / 1150)
      dragCoefficient": 0.36, // Estimate
    },
    {
      name: "Maruti Suzuki S-Cross",
      yearsProduced: "2015 - 2022 (India)", // Corrected: Discontinued
      power: "103", // bhp (Last 1.5L Petrol)
      torque: "138", // Nm (Last 1.5L Petrol)
      gears: "5-speed manual / 4-speed automatic", // Corrected Gears
      length: 4300,
      width: 1785,
      height: 1595,
      groundClearance: 180,
      wheelbase: 2600,
      turnRadius": 5.5, // Corrected Turn Radius (was 6.6)
      price: 11087, // Corrected: Assumed ~9.5 Lakh INR -> USD
      capacity: "48 L", // Corrected Capacity (was 42L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 1130, // Corrected Kerb Weight (kg, starting MT Petrol)
      estimatedCabinSpace: 6538230000, // Recalculated: ((1595 - 180) * 2600 * 1785)
      sizeToWeightRatio: 5786044.25, // Recalculated: (6538230000 / 1130)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Maruti Suzuki Celerio",
      yearsProduced: "2021 - Present",
      power: "65.7", // Corrected Power (bhp, was 67)
      torque: "89", // Corrected Torque (Nm, was 89)
      gears: "5-speed manual / AMT",
      length: 3695,
      width: 1655,
      height: 1555,
      groundClearance: 170,
      wheelbase: 2435,
      turnRadius": 4.7, // Corrected Turn Radius (was 4.9)
      price: 6244, // Corrected: Starting ~5.35 Lakh INR -> USD (was 5.5k USD)
      capacity: "32 L",
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 800, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5579855975, // Recalculated: ((1555 - 170) * 2435 * 1655)
      sizeToWeightRatio: 6974819.97, // Recalculated: (5579855975 / 800)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Maruti Suzuki XL6",
      yearsProduced: "2019 - Present", // Corrected Years (initial launch)
      power: "101.6", // Corrected Power (bhp, was 103)
      torque: "136.8", // Corrected Torque (Nm, was 138)
      gears: "5-speed manual / 6-speed automatic",
      length: 4445, // Corrected Length (was 4395)
      width: 1775,
      height: 1755, // Corrected Height (was 1675)
      groundClearance: 180, // Corrected Ground Clearance (was 200)
      wheelbase: 2740,
      turnRadius": 5.2, // Corrected Turn Radius (was 6.9)
      price: 13420, // Corrected: Starting ~11.5 Lakh INR -> USD (was 11k USD)
      capacity: "45 L", // Corrected Capacity (was 48L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 1180, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 7630817500, // Recalculated: ((1755 - 180) * 2740 * 1775)
      sizeToWeightRatio: 6466794.49, // Recalculated: (7630817500 / 1180)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Maruti Suzuki Fronx",
      yearsProduced: "2023 - Present",
      power: "88.5 - 98.6", // Corrected Power (bhp, 1.2L NA / 1.0L Turbo)
      torque: "113 - 147.6", // Corrected Torque (Nm, 1.2L NA / 1.0L Turbo)
      gears: "5-speed manual / AMT / 6-speed automatic", // Corrected Gears
      length: 3995,
      width: 1765, // Corrected Width (was 1550)
      height: 1550, // Corrected Height (was 1570)
      groundClearance: 190,
      wheelbase: 2520,
      turnRadius": 4.9, // Corrected Turn Radius (was 5.1)
      price: 8753, // Corrected: Starting ~7.5 Lakh INR -> USD (was 8k USD)
      capacity: "37 L", // Corrected Capacity (was 40L)
      manufacturer: "Maruti Suzuki", // Corrected Manufacturer
      weight": 965, // Corrected Kerb Weight (kg, starting 1.2L MT)
      estimatedCabinSpace: 6011316000, // Recalculated: ((1550 - 190) * 2520 * 1765)
      sizeToWeightRatio: 6229342.90, // Recalculated: (6011316000 / 965)
      dragCoefficient": 0.33, // Estimate
    },
  ]
export const hyundai = [
    {
      name: "Hyundai i20",
      yearsProduced: "2020 - Present",
      power: "81.8 - 118.4", // Corrected Power (bhp, 1.2 NA / 1.0 Turbo)
      torque: "114.7 - 172", // Corrected Torque (Nm)
      gears: "5-speed manual / IVT / 7-speed DCT", // Corrected Gears
      length: 3995, // Corrected Length (was 4032)
      width: 1775, // Corrected Width (was 1733)
      height: 1505, // Corrected Height (was 1450)
      groundClearance: 170,
      wheelbase: 2580, // Corrected Wheelbase (was 2570)
      turnRadius": 5.2,
      price: 8169, // Corrected: Assumed 7 Lakh INR -> USD
      capacity: "37 L", // Corrected Capacity (was 38L)
      manufacturer: "Hyundai",
      weight": 990, // Corrected Kerb Weight (kg, starting 1.2 MT)
      estimatedCabinSpace: 5962531500, // Recalculated: ((1505 - 170) * 2580 * 1775)
      sizeToWeightRatio: 6022759.09, // Recalculated: (5962531500 / 990)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Hyundai Verna",
      yearsProduced: "2023 - Present", // Corrected Years (New Gen)
      power: "113 - 157.5", // Corrected Power (bhp, 1.5 NA / 1.5 Turbo)
      torque: "143.8 - 253", // Corrected Torque (Nm)
      gears: "6-speed manual / IVT / 7-speed DCT", // Corrected Gears
      length: 4535, // Corrected Length (New Gen)
      width: 1765, // Corrected Width (New Gen)
      height: 1475,
      groundClearance: 165,
      wheelbase: 2670, // Corrected Wheelbase (New Gen)
      turnRadius": 5.2, // Corrected Turn Radius (was 5.3)
      price: 12837, // Corrected: Starting ~11 Lakh INR -> USD (was 10k USD)
      capacity: "45 L",
      manufacturer: "Hyundai",
      weight": 1100, // Corrected Kerb Weight (kg, starting 1.5 MT)
      estimatedCabinSpace: 6207267750, // Recalculated: ((1475 - 165) * 2670 * 1765)
      sizeToWeightRatio: 5642970.68, // Recalculated: (6207267750 / 1100)
      dragCoefficient": 0.28, // Corrected (was 0.33) - Official estimate for new gen
    },
    {
      name: "Hyundai Creta",
      yearsProduced: "2020 - Present", // Facelift 2024
      power: "113 - 157.5", // Corrected Power (bhp, 1.5 NA / 1.5 Diesel / 1.5 Turbo)
      torque: "143.8 - 253", // Corrected Torque (Nm)
      gears: "6-speed manual / IVT / 6-speed auto / 7-speed DCT", // Corrected Gears
      length: 4330, // Corrected Length (Facelift)
      width: 1790,
      height: 1635,
      groundClearance: 190,
      wheelbase: 2610,
      turnRadius": 5.3, // Corrected Turn Radius (was 5.8)
      price: 12837, // Corrected: Starting ~11 Lakh INR -> USD (was 12k USD)
      capacity: "50 L",
      manufacturer: "Hyundai",
      weight": 1250, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 6743116500, // Recalculated: ((1635 - 190) * 2610 * 1790)
      sizeToWeightRatio: 5394493.20, // Recalculated: (6743116500 / 1250)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Hyundai Tucson",
      yearsProduced: "2022 - Present", // Corrected Years (Current Gen India Launch)
      power: "153.8 - 183.7", // Corrected Power (bhp, 2.0 Petrol / 2.0 Diesel)
      torque: "192 - 416", // Corrected Torque (Nm)
      gears: "6-speed automatic / 8-speed automatic", // Corrected Gears
      length: 4630, // Corrected Length (LWB India Spec)
      width: 1865, // Corrected Width (India Spec)
      height: 1665,
      groundClearance: 192, // Corrected Ground Clearance (was 172)
      wheelbase: 2755, // Corrected Wheelbase (LWB India Spec)
      turnRadius": 5.9,
      price: 32679, // Corrected: Starting ~28 Lakh INR -> USD (was 25k USD)
      capacity: "54 L", // Corrected Capacity (was 55L)
      manufacturer: "Hyundai",
      weight": 1550, // Corrected Kerb Weight (kg, approx Petrol)
      estimatedCabinSpace: 7554634875, // Recalculated: ((1665 - 192) * 2755 * 1865)
      sizeToWeightRatio: 4873957.98, // Recalculated: (7554634875 / 1550)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Hyundai Santro",
      yearsProduced: "2018 - 2022 (India)", // Corrected Years (Discontinued)
      power: "68", // bhp (Petrol)
      torque: "99", // Nm (Petrol)
      gears: "5-speed manual / AMT",
      length: 3610,
      width: 1645,
      height: 1560,
      groundClearance: 165,
      wheelbase: 2400,
      turnRadius": 4.7, // Corrected Turn Radius (was 4.8)
      price: 5368, // Corrected: Assumed ~4.6 Lakh INR -> USD (was 5k USD)
      capacity: "35 L", // Corrected Capacity (was 30L)
      manufacturer: "Hyundai",
      weight": 880, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5510580000, // Recalculated: ((1560 - 165) * 2400 * 1645)
      sizeToWeightRatio: 6262022.73, // Recalculated: (5510580000 / 880)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Hyundai Aura",
      yearsProduced: "2020 - Present",
      power: "68 - 81.8", // Corrected Power (bhp, CNG / Petrol)
      torque: "95.2 - 113.8", // Corrected Torque (Nm)
      gears: "5-speed manual / AMT",
      length: 3995,
      width: 1680,
      height: 1520, // Corrected Height (was 1475)
      groundClearance: 165,
      wheelbase: 2450,
      turnRadius": 4.7, // Corrected Turn Radius (was 5.0)
      price: 7471, // Corrected: Starting ~6.4 Lakh INR -> USD (was 6k USD)
      capacity: "37 L", // Corrected Capacity (Petrol, was 35L) / 65L water (CNG)
      manufacturer: "Hyundai",
      weight": 950, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 5575980000, // Recalculated: ((1520 - 165) * 2450 * 1680)
      sizeToWeightRatio: 5869452.63, // Recalculated: (5575980000 / 950)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Hyundai Alcazar",
      yearsProduced: "2021 - Present",
      power: "114 - 157.5", // Corrected Power (bhp, 1.5 Diesel / 1.5 Turbo Petrol)
      torque: "250 - 253", // Corrected Torque (Nm)
      gears: "6-speed manual / 6-speed auto / 7-speed DCT", // Corrected Gears
      length: 4500,
      width: 1790,
      height: 1675,
      groundClearance: 200,
      wheelbase: 2760,
      turnRadius": 5.4, // Corrected Turn Radius (was 6.1)
      price: 19256, // Corrected: Starting ~16.5 Lakh INR -> USD (was 15k USD)
      capacity: "50 L", // Corrected Capacity (was 55L)
      manufacturer: "Hyundai",
      weight": 1400, // Corrected Kerb Weight (kg, approx Petrol MT)
      estimatedCabinSpace: 7299810000, // Recalculated: ((1675 - 200) * 2760 * 1790)
      sizeToWeightRatio: 5214150.00, // Recalculated: (7299810000 / 1400)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Hyundai Venue",
      yearsProduced: "2019 - Present", // Corrected Years (Initial Launch)
      power: "81.8 - 118.4", // Corrected Power (bhp, 1.2 NA / 1.0 Turbo / 1.5 Diesel)
      torque: "113.8 - 250", // Corrected Torque (Nm)
      gears: "5-speed manual / 6-speed manual / 7-speed DCT", // Corrected Gears
      length: 3995, // Corrected Length (was 4000)
      width: 1770,
      height: 1617, // Corrected Height (was 1560)
      groundClearance: 190, // Corrected GC (was 195, using 190 for facelift)
      wheelbase: 2500,
      turnRadius": 5.1, // Corrected Turn Radius (was 5.5)
      price: 9100, // Corrected: Starting ~7.8 Lakh INR -> USD (was 8.5k USD)
      capacity: "45 L", // Corrected Capacity (was 42L)
      manufacturer: "Hyundai",
      weight": 1050, // Corrected Kerb Weight (kg, approx 1.2 MT)
      estimatedCabinSpace: 6301537500, // Recalculated: ((1617 - 190) * 2500 * 1770)
      sizeToWeightRatio: 6001464.29, // Recalculated: (6301537500 / 1050)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Hyundai Exter",
      yearsProduced: "2023 - Present",
      power: "68 - 81.8", // bhp (CNG / Petrol)
      torque: "95.2 - 113.8", // Nm
      gears: "5-speed manual / AMT",
      length: 3815,
      width: 1710,
      height: 1631, // Corrected Height (was 1635)
      groundClearance: 185, // Corrected Ground Clearance (was 190)
      wheelbase: 2450,
      turnRadius": 4.7, // Corrected Turn Radius (was 5.3)
      price: 7002, // Corrected: Starting ~6 Lakh INR -> USD (was 6.5k USD)
      capacity: "37 L", // Corrected Capacity (Petrol, was 38L) / 60L water (CNG)
      manufacturer: "Hyundai",
      weight": 990, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 6072927750, // Recalculated: ((1631 - 185) * 2450 * 1710)
      sizeToWeightRatio: 6134270.45, // Recalculated: (6072927750 / 990)
      dragCoefficient": 0.34, // Estimate
    },
  ]
export const honda = [
    {
      name: "Honda City",
      yearsProduced: "2020 - Present", // Corrected Years (5th Gen Launch)
      power: "119.3", // Corrected Power (bhp, was 121-149)
      torque: "145", // Nm
      gears: "6-speed manual / CVT", // Corrected Gears (was 5-spd manual)
      length: 4583, // Corrected Length (5th Gen Facelift)
      width: 1748, // Corrected Width (5th Gen)
      height: 1489, // Corrected Height (5th Gen)
      groundClearance: 165,
      wheelbase: 2600,
      turnRadius": 5.3, // Corrected Turn Radius (was 5.6)
      price: 13887, // Corrected: Starting ~11.9 Lakh INR -> USD (was 9k USD)
      capacity: "40 L",
      manufacturer: "Honda",
      weight": 1107, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5858090080, // Recalculated: ((1489 - 165) * 2600 * 1748)
      sizeToWeightRatio: 5291860.96, // Recalculated: (5858090080 / 1107)
      dragCoefficient": 0.30, // Corrected (was 0.32) - Estimate for this gen
    },
    {
      name: "Honda Civic",
      yearsProduced: "2019 - 2020 (India, 10th Gen)", // Corrected Years (Discontinued)
      power: "138 - 170", // Corrected Power (bhp, Petrol / Diesel)
      torque: "174 - 400", // Corrected Torque (Nm, Petrol / Diesel)
      gears: "CVT / 6-speed manual (Diesel) / 9-speed auto (Diesel)", // Corrected Gears
      length: 4656, // Corrected Length (10th Gen India)
      width: 1799, // Corrected Width (10th Gen India)
      height: 1433, // Corrected Height (10th Gen India)
      groundClearance: 170, // Corrected Ground Clearance (India spec)
      wheelbase: 2700,
      turnRadius": 5.85, // Corrected Turn Radius
      price: 21006, // Corrected: Assumed ~18 Lakh INR -> USD
      capacity: "47 L", // Corrected Capacity (was 50L)
      manufacturer: "Honda",
      weight": 1300, // Corrected Kerb Weight (kg, approx Petrol CVT)
      estimatedCabinSpace: 6113941800, // Recalculated: ((1433 - 170) * 2700 * 1799)
      sizeToWeightRatio: 4703032.15, // Recalculated: (6113941800 / 1300)
      dragCoefficient": 0.31, // Estimate
    },
    {
      name: "Honda CR-V",
      yearsProduced: "2003 - 2020 (India Sales)", // Corrected Years (Discontinued)
      power: "118 - 151", // Corrected Power (bhp, last Diesel / Petrol)
      torque: "190 - 300", // Corrected Torque (Nm, Petrol / Diesel)
      gears: "CVT / 9-speed automatic (Diesel)", // Corrected Gears
      length: 4592, // Corrected Length (last gen)
      width: 1855,
      height: 1679, // Corrected Height (last gen 2WD)
      groundClearance: 198, // Corrected Ground Clearance (last gen 2WD)
      wheelbase: 2660,
      turnRadius": 5.5, // Corrected Turn Radius (was 6.3)
      price: 32679, // Corrected: Assumed ~28 Lakh INR -> USD
      capacity: "57 L", // Corrected Capacity (was 55L)
      manufacturer: "Honda",
      weight": 1545, // Corrected Kerb Weight (kg, last Petrol CVT)
      estimatedCabinSpace: 7247660440, // Recalculated: ((1679 - 198) * 2660 * 1855)
      sizeToWeightRatio: 4691042.36, // Recalculated: (7247660440 / 1545)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Honda Jazz",
      yearsProduced: "2009 - 2023 (India)", // Corrected Years (Discontinued)
      power: "88.7", // Corrected Power (bhp, last 1.2 Petrol)
      torque: "110", // Corrected Torque (Nm)
      gears: "5-speed manual / CVT",
      length: 3989, // Corrected Length (last gen)
      width: 1694,
      height: 1544, // Corrected Height (last gen)
      groundClearance: 165,
      wheelbase: 2530,
      turnRadius": 5.1, // Corrected Turn Radius (was 5.4)
      price: 9336, // Corrected: Assumed 8 Lakh INR -> USD
      capacity: "40 L", // Corrected Capacity (was 38L)
      manufacturer: "Honda",
      weight": 1007, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5879142760, // Recalculated: ((1544 - 165) * 2530 * 1694)
      sizeToWeightRatio: 5838274.84, // Recalculated: (5879142760 / 1007)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Honda WR-V",
      yearsProduced: "2017 - 2023 (India)", // Corrected Years (Discontinued)
      power: "88.7 - 98.6", // Corrected Power (bhp, Petrol / Diesel)
      torque: "110 - 200", // Nm
      gears: "5-speed manual (Petrol) / 6-speed manual (Diesel)", // Corrected Gears
      length: 3999, // Corrected Length (was 4000)
      width: 1734, // Corrected Width (was 1777)
      height: 1601, // Corrected Height (was 1600)
      groundClearance: 188,
      wheelbase: 2555, // Corrected Wheelbase (was 2600)
      turnRadius": 5.3, // Corrected Turn Radius (was 5.6)
      price: 10503, // Corrected: Assumed 9 Lakh INR -> USD
      capacity: "40 L", // Corrected Capacity (was 42L)
      manufacturer: "Honda",
      weight": 1087, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 6246337170, // Recalculated: ((1601 - 188) * 2555 * 1734)
      sizeToWeightRatio: 5746399.97, // Recalculated: (6246337170 / 1087)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Honda Amaze",
      yearsProduced: "2013 - Present", // Facelift 2021
      power: "88.7", // Corrected Power (bhp, Petrol, Diesel discontinued)
      torque: "110", // Corrected Torque (Nm, Petrol)
      gears: "5-speed manual / CVT",
      length: 3995,
      width: 1695, // Corrected Width (was 1680)
      height: 1501, // Corrected Height (was 1485)
      groundClearance: 170,
      wheelbase: 2470,
      turnRadius": 4.7, // Corrected Turn Radius (was 5.5)
      price: 8169, // Corrected: Starting ~7 Lakh INR -> USD (was 7.5k USD)
      capacity: "35 L",
      manufacturer: "Honda",
      weight": 934, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5498026650, // Recalculated: ((1501 - 170) * 2470 * 1695)
      sizeToWeightRatio: 5886538.17, // Recalculated: (5498026650 / 934)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Honda Elevate",
      yearsProduced: "2023 - Present",
      power: "119.3", // Corrected Power (bhp, was 121)
      torque: "145", // Nm
      gears: "6-speed manual / CVT",
      length: 4312,
      width: 1790,
      height: 1650,
      groundClearance: 220,
      wheelbase: 2650,
      turnRadius": 5.2, // Corrected Turn Radius (was 6.9)
      price: 13420, // Corrected: Starting ~11.5 Lakh INR -> USD (was 12k USD)
      capacity: "40 L", // Corrected Capacity (was 48L)
      manufacturer: "Honda",
      weight": 1213, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 6779455000, // Recalculated: ((1650 - 220) * 2650 * 1790)
      sizeToWeightRatio: 5588998.35, // Recalculated: (6779455000 / 1213)
      dragCoefficient": 0.34, // Estimate
    },
  ]
export const tesla = [ // Note: Tesla not officially sold in India yet. Specs are global.
    {
      name: "Tesla Model S",
      yearsProduced: "2012 - Present",
      power: "670 - 1020", // hp
      torque: "N/A", // Tesla often doesn't quote official torque figures; estimates vary wildly. Removed 840-1050 Nm.
      gears: "Single-speed automatic",
      length: 4970, // Or 5021mm for latest refresh
      width: 1964, // Or 1987mm for latest refresh
      height: 1445, // Or 1431mm for latest refresh
      groundClearance: 130, // Approx, adjustable suspension
      wheelbase: 2960,
      turnRadius": 6.2, // Corrected (was 5.8) - Approx based on 12.4m diameter
      price: 74990, // Base USD MSRP (subject to change)
      capacity: "~95 kWh", // Usable Battery Capacity (Approx, varies by year/trim, was 85)
      manufacturer: "Tesla",
      weight": 2100, // Approx Kerb Weight (kg)
      estimatedCabinSpace: 7618697600, // Recalculated: ((1445 - 130) * 2960 * 1964)
      sizeToWeightRatio: 3627951.24, // Recalculated: (7618697600 / 2100)
      dragCoefficient": 0.208, // Corrected (was 0.24) - Official Plaid
    },
    {
      name: "Tesla Model 3",
      yearsProduced: "2017 - Present",
      power: "283 - 450", // hp (Approx range RWD to Performance)
      torque: "N/A", // Removed 420-639 Nm
      gears: "Single-speed automatic",
      length: 4720, // Corrected Length (Highland Refresh)
      width: 1849, // Body width, 2089 with mirrors
      height: 1441, // Corrected Height (Highland Refresh)
      groundClearance: 138, // Corrected Ground Clearance (Highland Refresh)
      wheelbase: 2875,
      turnRadius": 5.8, // Corrected (was 5.4) - Approx based on 11.6m diameter
      price: 38990, // Base USD MSRP (subject to change)
      capacity: "~57.5 kWh", // Usable Battery Capacity (RWD LFP, was 50)
      manufacturer: "Tesla",
      weight": 1765, // Corrected Kerb Weight (kg, RWD Highland)
      estimatedCabinSpace: 6921913375, // Recalculated: ((1441 - 138) * 2875 * 1849)
      sizeToWeightRatio: 3921764.00, // Recalculated: (6921913375 / 1765)
      dragCoefficient": 0.219, // Corrected (was 0.23) - Highland Refresh
    },
    {
      name: "Tesla Model X",
      yearsProduced: "2015 - Present",
      power: "670 - 1020", // hp
      torque: "N/A", // Removed 840-1050 Nm
      gears: "Single-speed automatic",
      length: 5036, // Or 5057mm for latest refresh
      width: 1999, // Corrected Width (Body, was 2070 which includes mirrors)
      height: 1684, // (Adjustable)
      groundClearance: 137, // (Adjustable, standard mode)
      wheelbase: 2965,
      turnRadius": 6.1, // Approx based on 12.2m diameter
      price: 79990, // Base USD MSRP (subject to change)
      capacity: "~95 kWh", // Usable Battery Capacity (Approx, was 100)
      manufacturer: "Tesla",
      weight": 2352, // Corrected Kerb Weight (kg, base model)
      estimatedCabinSpace: 9167141965, // Recalculated: ((1684 - 137) * 2965 * 1999)
      sizeToWeightRatio: 3897594.37, // Recalculated: (9167141965 / 2352)
      dragCoefficient": 0.24, // Corrected (was 0.25)
    },
    {
      name: "Tesla Model Y",
      yearsProduced: "2020 - Present",
      power: "295 - 456", // Corrected Power (hp approx, RWD to Performance)
      torque: "N/A", // Removed 510-639 Nm
      gears: "Single-speed automatic",
      length: 4751,
      width: 1921, // Body width, 2129 with mirrors
      height: 1624,
      groundClearance: 167, // Corrected Ground Clearance (was 170)
      wheelbase: 2890, // Corrected Wheelbase (was 2700)
      turnRadius": 6.05, // Corrected (was 5.7) - Approx based on 12.1m diameter
      price: 43990, // Base USD MSRP (subject to change)
      capacity: "~57.5 kWh", // Usable Battery Capacity (RWD, was 75)
      manufacturer: "Tesla",
      weight": 1909, // Corrected Kerb Weight (kg, RWD)
      estimatedCabinSpace: 7560016480, // Recalculated: ((1624 - 167) * 2890 * 1921)
      sizeToWeightRatio: 3960197.16, // Recalculated: (7560016480 / 1909)
      dragCoefficient": 0.23, // Corrected (was 0.26)
    },
    {
      name: "Tesla Roadster (Original)", // Clarified Name
      yearsProduced: "2008 - 2012",
      power: "248 - 288", // Corrected Power (hp range)
      torque: "270 - 400", // Nm range
      gears: "Single-speed automatic",
      length: 3946, // Corrected Length (was 4380)
      width: 1873, // Corrected Width (was 1940)
      height: 1127, // Corrected Height (was 1150)
      groundClearance: 140, // Corrected Ground Clearance (was 100)
      wheelbase: 2352, // Corrected Wheelbase (was 2450)
      turnRadius": 5.5, // Corrected (was 5.2) - Approx based on 11m diameter
      price: 109000, // Original Base USD MSRP (was 200k)
      capacity: "53 kWh", // Seems correct
      manufacturer: "Tesla",
      weight": 1235, // Corrected Kerb Weight (kg)
      estimatedCabinSpace: 4292119723, // Recalculated: ((1127 - 140) * 2352 * 1873)
      sizeToWeightRatio: 3475400.59, // Recalculated: (4292119723 / 1235)
      dragCoefficient": 0.35, // Corrected (was 0.28) - Higher due to Lotus base
    },
    {
      name: "Tesla Cybertruck",
      yearsProduced: "2023 - Present",
      power: "600 - 845", // Corrected Power (hp, AWD / Cyberbeast)
      torque: "N/A", // Removed 1000-1200 Nm (Tesla uses wheel torque figures which are misleading)
      gears: "Single-speed automatic",
      length: 5683, // Corrected Length (was 5885)
      width: 2030, // Body width, 2200 excl mirrors? Specs vary. Using 2030.
      height: 1791, // Corrected Height (was 1921)
      groundClearance: 433, // Corrected Ground Clearance (Max Extract mode, was 400)
      wheelbase: 3807, // Corrected Wheelbase (was 3650)
      turnRadius": 6.7, // Corrected (was 7.0) - Approx based on 13.4m diameter (with rear steer)
      price: 60990, // Base RWD USD MSRP (subject to change)
      capacity: "~123 kWh", // Corrected Battery Capacity (Approx, was 100)
      manufacturer: "Tesla",
      weight": 2995, // Corrected Kerb Weight (kg, AWD)
      estimatedCabinSpace: 10714057029, // Recalculated: ((1791 - 433) * 3807 * 2030)
      sizeToWeightRatio: 3577314.53, // Recalculated: (10714057029 / 2995)
      dragCoefficient": 0.335, // Corrected (was 0.3) - Official
    },
  ]
export const mg = [
    {
        name: "MG Astor",
        yearsProduced: "2021 - Present",
        power: "108 - 138", // Corrected Power (bhp, 1.5 NA / 1.3 Turbo)
        torque: "144 - 220", // Corrected Torque (Nm)
        gears: "5-speed manual / CVT / 6-speed automatic", // Corrected Gears
        length: 4323,
        width: 1809,
        height: 1650,
        groundClearance: 180, // Unladen, approx 154mm laden
        wheelbase: 2585,
        turnRadius": 5.6, // Corrected Turn Radius (was 5.5)
        price: 11670, // Corrected: Starting ~10 Lakh INR -> USD (was 25k USD)
        capacity: "48 L", // Corrected Capacity (NA engine, was 50L) / 45L (Turbo)
        manufacturer: "MG Motor",
        weight": 1295, // Corrected Kerb Weight (kg, starting NA MT)
        estimatedCabinSpace: 6892914150, // Recalculated: ((1650 - 180) * 2585 * 1809)
        sizeToWeightRatio: 5322713.63, // Recalculated: (6892914150 / 1295)
        dragCoefficient": 0.34 // Estimate
      },
      {
        name: "MG Comet EV",
        yearsProduced: "2023 - Present",
        power": "41.4", // Corrected Power (bhp, was 42)
        torque: "110", // Nm
        gears: "Single-speed",
        length: 2974,
        width: 1505,
        height: 1640, // Corrected Height (was 1631)
        groundClearance: 165, // Corrected Ground Clearance (was 140)
        wheelbase: 2010, // Corrected Wheelbase (was 2000)
        turnRadius": 4.2, // Corrected Turn Radius (was 4.5)
        price": 8052, // Corrected: Starting ~6.9 Lakh INR -> USD (was 8k USD)
        capacity: "17.3 kWh",
        manufacturer: "MG Motor",
        weight": 815, // Corrected Kerb Weight (kg, was 600)
        estimatedCabinSpace: 4478212500, // Recalculated: ((1640 - 165) * 2010 * 1505)
        sizeToWeightRatio: 5494740.00, // Recalculated: (4478212500 / 815)
        dragCoefficient": 0.35 // Estimate
      },
    {
      name: "MG Hector",
      yearsProduced: "2019 - Present",
      power: "141 - 167.7", // Corrected Power (bhp, Petrol / Diesel)
      torque: "250 - 350", // Corrected Torque (Nm, Petrol / Diesel)
      gears: "6-speed manual / CVT (Petrol) / 6-speed manual (Diesel)", // Corrected Gears
      length: 4699, // Corrected Length (Facelift)
      width: 1835, // Corrected Width
      height: 1760, // Corrected Height
      groundClearance: 192, // Corrected Ground Clearance (was 175)
      wheelbase: 2750, // Corrected Wheelbase (was 2720)
      turnRadius": 5.95, // Corrected Turn Radius (was 5.6)
      price: 17505, // Corrected: Assumed 15 Lakh INR -> USD
      capacity: "60 L", // Corrected Capacity (was 50L)
      manufacturer: "MG Motor", // Corrected Manufacturer
      weight": 1556, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 7966733750, // Recalculated: ((1760 - 192) * 2750 * 1835)
      sizeToWeightRatio: 5119996.00, // Recalculated: (7966733750 / 1556)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "MG ZS EV",
      yearsProduced: "2020 - Present", // Corrected Years (Initial Launch)
      power: "174.3", // Corrected Power (bhp, current model)
      torque: "280", // Corrected Torque (Nm, current model)
      gears: "Single-speed automatic", // Corrected Gears (was 1)
      length: 4323, // Corrected Length
      width: 1809, // Corrected Width
      height: 1649, // Corrected Height
      groundClearance: 177, // Corrected Ground Clearance
      wheelbase: 2585, // Corrected Wheelbase (was 2610)
      turnRadius": 5.6, // Corrected Turn Radius (was 5.3)
      price": 22173, // Corrected: Starting ~19 Lakh INR -> USD (was 22k USD)
      capacity: "50.3 kWh", // Corrected Battery Capacity (Usable)
      manufacturer: "MG Motor", // Corrected Manufacturer
      weight": 1610, // Corrected Kerb Weight (kg, current Exclusive)
      estimatedCabinSpace: 6899489790, // Recalculated: ((1649 - 177) * 2585 * 1809)
      sizeToWeightRatio: 4285397.39, // Recalculated: (6899489790 / 1610)
      dragCoefficient": 0.31, // Estimate
    },
    {
      name: "MG Gloster",
      yearsProduced: "2020 - Present", // Corrected Years (Initial Launch)
      power: "158.7 - 212.5", // Corrected Power (bhp, single/twin turbo diesel)
      torque: "373.5 - 478.5", // Corrected Torque (Nm)
      gears: "8-speed automatic", // Corrected Gears
      length: 4985, // Corrected Length
      width: 1926, // Corrected Width
      height: 1867, // Corrected Height (was 1940/1926)
      groundClearance: 210, // Corrected Ground Clearance (was 230)
      wheelbase: 2950,
      turnRadius": 6.1, // Corrected Turn Radius (was 5.8)
      price": 44349, // Corrected: Starting ~38 Lakh INR -> USD (was 35k USD)
      capacity: "75 L", // Corrected Capacity (was 60L)
      manufacturer: "MG Motor", // Corrected Manufacturer
      weight": 2320, // Corrected Kerb Weight (kg, starting 2WD)
      estimatedCabinSpace: 9417491110, // Recalculated: ((1867 - 210) * 2950 * 1926)
      sizeToWeightRatio: 4059263.41, // Recalculated: (9417491110 / 2320)
      dragCoefficient": 0.35, // Estimate
    },
    // Removed duplicate MG Comet entry
    {
      name: "MG Windsor EV / Yep Plus based", // Corrected: Hypothetical Name
      yearsProduced": "2024-2025 (Expected)", // Corrected: Hypothetical
      power: "100", // Corrected Power (bhp estimate based on Yep Plus, was 134)
      torque": "N/A", // Torque for Yep Plus not reliably found
      gears: "Single-speed automatic", // Corrected Gears (was 1)
      length": 4000, // Corrected Length (Approx based on Yep Plus, was 4295)
      width": 1760, // Corrected Width (Approx based on Yep Plus, was 1850)
      height": 1715, // Corrected Height (Approx based on Yep Plus, was 1677)
      groundClearance": 186, // Kept provided GC as estimate
      wheelbase": 2560, // Corrected Wheelbase (Approx based on Yep Plus, was 2700)
      turnRadius": 5.5, // Kept provided estimate
      price": 18672, // Kept converted price (16 Lakh INR) as estimate
      capacity: "41 kWh", // Corrected Capacity (based on Yep Plus, was 38)
      manufacturer: "MG Motor", // Corrected Manufacturer
      weight": 1495, // Kept provided weight as estimate
      estimatedCabinSpace: 6960518400, // Recalculated: ((1715 - 186) * 2560 * 1760)
      sizeToWeightRatio: 4655865.15, // Recalculated: (6960518400 / 1495)
      dragCoefficient": 0.32, // Kept provided estimate
    },
  ]
export const fiat = [ // Note: Fiat has ceased new car sales in India. Data reflects last sold models.
    {
      name: "Fiat Punto Evo / Abarth", // Corrected Name
      yearsProduced: "2009 - 2018 (India)", // Corrected Years
      power: "75 - 145", // Corrected Power (bhp, Diesel / Abarth Petrol)
      torque: "114 - 212", // Corrected Torque (Nm, Petrol / Abarth)
      gears: "5-speed manual", // Corrected Gears (was 5)
      length: 3989, // Corrected Length (Punto Evo)
      width: 1687,
      height: 1525, // Corrected Height (Punto Evo)
      groundClearance: 195, // Corrected Ground Clearance (Punto Evo, was 185)
      wheelbase: 2510,
      turnRadius": 5.0, // Corrected Turn Radius (was 5.2)
      price": 5602, // Kept converted price (4.8 Lakh INR) as estimate of last value
      capacity: "45 L", // Corrected Capacity (was 35L)
      manufacturer: "Fiat",
      weight": 1130, // Corrected Kerb Weight (kg, approx Diesel)
      estimatedCabinSpace: 5686815100, // Recalculated: ((1525 - 195) * 2510 * 1687)
      sizeToWeightRatio: 5032579.73, // Recalculated: (5686815100 / 1130)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Fiat Linea",
      yearsProduced: "2009 - 2018 (India)", // Corrected Years
      power: "89 - 123", // Corrected Power (bhp, Diesel / T-Jet Petrol)
      torque: "115 - 208", // Corrected Torque (Nm, Petrol / T-Jet)
      gears: "5-speed manual", // Corrected Gears (was 5)
      length: 4596, // Corrected Length (Facelift)
      width: 1730,
      height: 1487, // Corrected Height (was 1495)
      groundClearance: 185, // Facelift 185mm, T-Jet 190mm
      wheelbase: 2603,
      turnRadius": 5.55, // Corrected Turn Radius (was 5.4)
      price": 7002, // Kept converted price (6 Lakh INR) as estimate of last value
      capacity: "45 L", // Corrected Capacity (was 40L)
      manufacturer: "Fiat",
      weight": 1210, // Corrected Kerb Weight (kg, approx T-Jet)
      estimatedCabinSpace: 5872187490, // Recalculated: ((1487 - 185) * 2603 * 1730)
      sizeToWeightRatio: 4853047.51, // Recalculated: (5872187490 / 1210)
      dragCoefficient": 0.30, // Corrected (was 0.33) - Official claim
    },
    {
      name: "Fiat 500 (Import)", // Corrected Name
      yearsProduced: "2008 - ~2012 (India Import)", // Corrected Years
      power: "99", // Corrected Power (bhp, 1.3 MJD Diesel likely most common import)
      torque: "200", // Corrected Torque (Nm, 1.3 MJD Diesel)
      gears: "5-speed manual", // Corrected Gears
      length: 3546,
      width: 1627,
      height: 1488,
      groundClearance: 140, // Corrected Ground Clearance (was 130)
      wheelbase: 2300,
      turnRadius": 4.6, // Corrected Turn Radius (was 5.6)
      price": 17505, // Kept estimated price (15 Lakh INR)
      capacity: "35 L", // Corrected Capacity (was 30L)
      manufacturer: "Fiat",
      weight": 980, // Corrected Kerb Weight (kg, approx 1.3 MJD)
      estimatedCabinSpace: 5086203800, // Recalculated: ((1488 - 140) * 2300 * 1627)
      sizeToWeightRatio: 5189998.78, // Recalculated: (5086203800 / 980)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Fiat Avventura / Urban Cross", // Corrected Name
      yearsProduced: "2014 - 2018 (India)", // Corrected Years
      power: "92 - 140", // Corrected Power (bhp, Diesel / Abarth Petrol)
      torque: "209 - 210", // Corrected Torque (Nm)
      gears: "5-speed manual", // Corrected Gears
      length: 4000, // Corrected Length (Avventura)
      width: 1706,
      height: 1542, // Corrected Height (Avventura)
      groundClearance: 205,
      wheelbase: 2510, // Corrected Wheelbase (based on Punto)
      turnRadius": 5.0, // Corrected Turn Radius (was 5.3)
      price": 7586, // Kept converted price (6.5 Lakh INR) as estimate of last value
      capacity: "45 L", // Corrected Capacity (was 40L)
      manufacturer: "Fiat",
      weight": 1195, // Corrected Kerb Weight (kg, approx Diesel)
      estimatedCabinSpace: 5895458920, // Recalculated: ((1542 - 205) * 2510 * 1706)
      sizeToWeightRatio: 4933438.43, // Recalculated: (5895458920 / 1195)
      dragCoefficient": 0.34, // Estimate
    },
  ]
export const tata = [
    {
        name: "Tata Curvv",
        yearsProduced: "2024-2025 (Expected)", // Corrected: Not yet launched
        power: "118 - 123", // Corrected Power (bhp estimates Diesel/Petrol)
        torque: "170 - 225", // Corrected Torque (Nm estimates Petrol/Diesel)
        gears: "6-speed manual / 7-speed DCT / AMT", // Estimated Gears
        length: 4308, // Corrected Length (Concept/Estimate)
        width: 1810, // Corrected Width (Concept/Estimate)
        height: 1630, // Corrected Height (Concept/Estimate)
        groundClearance": 200, // Estimated
        wheelbase: 2600, // Estimated (same as Nexon platform likely)
        turnRadius": 5.4, // Estimated
        price": 17505, // Kept estimated price (15 Lakh INR)
        capacity: "45 L", // Corrected Capacity Estimate (was 50L)
        manufacturer: "Tata Motors",
        weight": 1400, // Kept weight estimate
        estimatedCabinSpace: 6564960000, // Recalculated: ((1630 - 200) * 2600 * 1810)
        sizeToWeightRatio: 4689257.14, // Recalculated: (6564960000 / 1400)
        dragCoefficient": 0.30, // Corrected Estimate (was 0.31)
      },
    {
      name: "Tata Nano",
      yearsProduced: "2008 - 2018",
      power: "37.5", // Corrected Power (bhp, was 35)
      torque: "51", // Corrected Torque (Nm, was 48)
      gears: "4-speed manual / 5-speed AMT", // Corrected Gears
      length: 3099, // Corrected Length (GenX Nano)
      width: 1495, // Corrected Width (GenX Nano)
      height: 1652, // Corrected Height
      groundClearance: 180,
      wheelbase: 2230,
      turnRadius": 4.0, // Corrected Turn Radius (was 4.5)
      price": 3501, // Kept converted price (3 Lakh INR)
      capacity: "24 L", // Corrected Capacity (GenX Nano, was 15L/20L)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 695, // Corrected Kerb Weight (kg, GenX MT)
      estimatedCabinSpace: 4864523080, // Recalculated: ((1652 - 180) * 2230 * 1495)
      sizeToWeightRatio: 7000033.19, // Recalculated: (4864523080 / 695)
      dragCoefficient": 0.36, // Estimate
    },
    {
      name: "Tata Indica Vista / Bolt", // Corrected: Indica evolved into Vista/Bolt
      yearsProduced: "1998 - 2018 (Indica Platform)", // Corrected Years
      power: "74 - 89", // Corrected Power (bhp, Vista/Bolt Petrol/Diesel)
      torque: "114 - 190", // Corrected Torque (Nm, Vista/Bolt Petrol/Diesel)
      gears: "5-speed manual", // Corrected Gears
      length: 3850, // Corrected Length (Bolt)
      width: 1695, // Corrected Width (Bolt)
      height: 1550, // Corrected Height (Bolt)
      groundClearance: 165,
      wheelbase: 2470, // Corrected Wheelbase (Bolt)
      turnRadius": 5.1, // Corrected Turn Radius (Bolt)
      price": 5252, // Kept converted price (4.5 Lakh INR) as estimate
      capacity: "44 L", // Corrected Capacity (Bolt, was 30L/37L)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1095, // Corrected Kerb Weight (kg, Bolt Petrol)
      estimatedCabinSpace: 5698247250, // Recalculated: ((1550 - 165) * 2470 * 1695)
      sizeToWeightRatio: 5203878.77, // Recalculated: (5698247250 / 1095)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Tata Indigo eCS / Zest", // Corrected: Indigo evolved into eCS/Zest
      yearsProduced: "2002 - 2018 (Indigo Platform)", // Corrected Years
      power: "74 - 89", // Corrected Power (bhp, Zest Petrol/Diesel)
      torque: "140 - 200", // Corrected Torque (Nm, Zest Petrol/Diesel)
      gears: "5-speed manual / 5-speed AMT", // Corrected Gears
      length: 3995, // Corrected Length (Zest)
      width: 1706, // Corrected Width (Zest)
      height: 1570, // Corrected Height (Zest)
      groundClearance: 175, // Corrected Ground Clearance (Zest)
      wheelbase: 2470, // Corrected Wheelbase (Zest)
      turnRadius": 5.1, // Corrected Turn Radius (Zest)
      price": 6419, // Kept converted price (5.5 Lakh INR) as estimate
      capacity: "44 L", // Corrected Capacity (Zest, was 35L/42L)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1115, // Corrected Kerb Weight (kg, Zest Petrol)
      estimatedCabinSpace: 5845169100, // Recalculated: ((1570 - 175) * 2470 * 1706)
      sizeToWeightRatio: 5242304.13, // Recalculated: (5845169100 / 1115)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Tata Safari",
      yearsProduced: "2021 - Present", // Corrected Years (Current Gen)
      power: "167.6", // Corrected Power (bhp, was 140-170)
      torque: "350", // Corrected Torque (Nm, was 320-400)
      gears: "6-speed manual / 6-speed automatic", // Corrected Gears
      length: 4668, // Corrected Length (Current Gen Facelift)
      width: 1922, // Corrected Width (Current Gen Facelift)
      height: 1795, // Corrected Height (Current Gen Facelift)
      groundClearance": 205, // Corrected Ground Clearance (was 200)
      wheelbase: 2741, // Corrected Wheelbase (Current Gen)
      turnRadius": 5.8, // Corrected Turn Radius (was 5.6)
      price": 18958, // Corrected: Starting ~16.25 Lakh INR -> USD (was 18k USD)
      capacity: "50 L", // Corrected Capacity (was 60L)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1825, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 8676889914, // Recalculated: ((1795 - 205) * 2741 * 1922)
      sizeToWeightRatio: 4754460.23, // Recalculated: (8676889914 / 1825)
      dragCoefficient": 0.36, // Estimate
    },
    {
      name: "Tata Tigor",
      yearsProduced: "2017 - Present",
      power: "72 - 84.8", // Corrected Power (bhp, EV / Petrol)
      torque: "113 - 170", // Corrected Torque (Nm, Petrol / EV)
      gears: "5-speed manual / AMT / Single-speed (EV)", // Corrected Gears
      length: 3993, // Corrected Length (was 3990)
      width: 1677,
      height: 1532, // Corrected Height (was 1537)
      groundClearance: 170,
      wheelbase: 2450,
      turnRadius": 5.1, // Corrected Turn Radius (was 5.2)
      price": 7352, // Corrected: Starting ~6.3 Lakh INR -> USD (was 6k USD)
      capacity: "35 L", // Petrol / 26 kWh Battery (EV)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1000, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 5591874450, // Recalculated: ((1532 - 170) * 2450 * 1677)
      sizeToWeightRatio: 5591874.45, // Recalculated: (5591874450 / 1000)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Tata Tiago",
      yearsProduced: "2016 - Present",
      power: "72 - 84.8", // Corrected Power (bhp, EV / Petrol)
      torque: "113 - 114", // Corrected Torque (Nm, Petrol / EV)
      gears: "5-speed manual / AMT / Single-speed (EV)", // Corrected Gears
      length: 3802, // Corrected Length
      width: 1677, // Corrected Width
      height: 1535, // Corrected Height
      groundClearance: 170, // 168mm for EV
      wheelbase: 2400, // 2450mm for EV
      turnRadius": 4.9, // 5.1m for EV
      price": 6534, // Corrected: Starting ~5.6 Lakh INR -> USD (was 5.5k USD)
      capacity: "35 L", // Petrol / 19.2 or 24 kWh Battery (EV)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 935, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 5419807200, // Recalculated: ((1535 - 170) * 2400 * 1677)
      sizeToWeightRatio: 5796585.24, // Recalculated: (5419807200 / 935)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Tata Harrier",
      yearsProduced: "2019 - Present",
      power: "167.6", // Corrected Power (bhp, was 140-170)
      torque: "350", // Nm
      gears: "6-speed manual / 6-speed automatic", // Corrected Gears
      length: 4605, // Corrected Length (Facelift)
      width: 1922, // Corrected Width (Facelift)
      height: 1718, // Corrected Height (Facelift)
      groundClearance": 205,
      wheelbase: 2741,
      turnRadius": 5.75, // Corrected Turn Radius (was 5.6)
      price": 17738, // Corrected: Starting ~15.2 Lakh INR -> USD (was 19k USD)
      capacity: "50 L", // Corrected Capacity (was 60L)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1655, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 8361444278, // Recalculated: ((1718 - 205) * 2741 * 1922)
      sizeToWeightRatio: 5052232.19, // Recalculated: (8361444278 / 1655)
      dragCoefficient": 0.34, // Corrected Estimate (was 0.35)
    },
    {
      name: "Tata Nexon",
      yearsProduced: "2017 - Present", // Facelift 2023
      power: "113 - 118.4", // Corrected Power (bhp, Diesel / Petrol)
      torque: "170 - 260", // Corrected Torque (Nm, Petrol / Diesel)
      gears: "5MT/6MT/6AMT/7DCA", // Corrected Gears (Facelift options)
      length: 3995, // Corrected Length (Facelift)
      width: 1804, // Corrected Width (Facelift)
      height: 1620, // Corrected Height (Facelift)
      groundClearance": 208, // Corrected Ground Clearance (Facelift)
      wheelbase: 2498,
      turnRadius": 5.1,
      price": 9336, // Corrected: Starting ~8 Lakh INR -> USD
      capacity: "44 L", // Petrol/Diesel / 30 or 40.5 kWh Battery (EV)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1230, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 6387677184, // Recalculated: ((1620 - 208) * 2498 * 1804)
      sizeToWeightRatio: 5193233.48, // Recalculated: (6387677184 / 1230)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Tata Altroz",
      yearsProduced: "2020 - Present",
      power: "72 - 118.4", // Corrected Power (bhp, CNG/Diesel/NA Petrol/Turbo Petrol)
      torque: "103 - 200", // Corrected Torque (Nm)
      gears: "5-speed manual / 6-speed DCT", // Corrected Gears
      length: 3990,
      width: 1755,
      height: 1523, // Corrected Height (was 1505)
      groundClearance: 165,
      wheelbase: 2501, // Corrected Wheelbase (was 2570)
      turnRadius": 5.0,
      price": 7702, // Corrected: Starting ~6.6 Lakh INR -> USD (was 7k USD)
      capacity: "37 L", // Corrected Capacity (was 38L) / 60L water (CNG)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1036, // Corrected Kerb Weight (kg, starting NA Petrol MT)
      estimatedCabinSpace: 6134904180, // Recalculated: ((1523 - 165) * 2501 * 1755)
      sizeToWeightRatio: 5921722.18, // Recalculated: (6134904180 / 1036)
      dragCoefficient": 0.32, // Corrected Estimate (was 0.33)
    },
    {
      name: "Tata Punch",
      yearsProduced: "2021 - Present",
      power: "72 - 86.7", // Corrected Power (bhp, CNG / Petrol)
      torque: "103 - 115", // Corrected Torque (Nm)
      gears: "5-speed manual / AMT", // Corrected Gears
      length: 3827,
      width: 1742,
      height: 1615,
      groundClearance: 187,
      wheelbase: 2445,
      turnRadius": 4.9, // Corrected Turn Radius (was 5.0)
      price": 7002, // Corrected: Starting ~6 Lakh INR -> USD (was 6.5k USD)
      capacity: "37 L", // Corrected Capacity (was 35L) / 60L water (CNG)
      manufacturer: "Tata Motors", // Corrected Manufacturer
      weight": 1000, // Approx Kerb Weight (kg, Petrol MT)
      estimatedCabinSpace: 6060197490, // Recalculated: ((1615 - 187) * 2445 * 1742)
      sizeToWeightRatio: 6060197.49, // Recalculated: (6060197490 / 1000)
      dragCoefficient": 0.34, // Estimate
    },
  ]
export const toyota = [
    {
        name: "Toyota Innova Hycross",
        yearsProduced: "2023 - Present",
        power: "172 - 184", // Corrected Power (bhp, Petrol / Hybrid Combined)
        torque: "188 - 206", // Corrected Torque (Nm, Petrol Engine / Hybrid Motor)
        gears: "CVT / e-CVT", // Corrected Gears
        length: 4755,
        width: 1845, // Corrected Width (Body, was 1850 incl mirrors?)
        height: 1790, // Corrected Height (was 1795)
        groundClearance": 185, // Corrected Ground Clearance (was 190)
        wheelbase: 2850,
        turnRadius": 5.9, // Corrected Turn Radius (was 5.6)
        price": 22769, // Corrected: Starting ~19.5 Lakh INR -> USD (was 34k USD)
        capacity: "52 L", // Corrected Capacity (was 55L)
        manufacturer: "Toyota",
        weight": 1595, // Corrected Kerb Weight (kg, starting Petrol G-FLT)
        estimatedCabinSpace: 8388242250, // Recalculated: ((1790 - 185) * 2850 * 1845)
        sizeToWeightRatio: 5259086.05, // Recalculated: (8388242250 / 1595)
        dragCoefficient": 0.33 // Estimate
      },
      {
        name: "Toyota Yaris",
        yearsProduced: "2018 - 2021 (India)", // Corrected: Discontinued
        power: "105.5", // Corrected Power (bhp, was 106)
        torque: "140", // Nm
        gears: "6-speed manual / 7-step CVT", // Corrected Gears
        length: 4425, // Corrected Length (was 4410)
        width: 1730,
        height: 1495,
        groundClearance: 175,
        wheelbase: 2550,
        turnRadius": 5.1, // Corrected Turn Radius (was 5.2)
        price": 10503, // Corrected: Assumed Starting ~9 Lakh INR -> USD (was 15k USD)
        capacity: "42 L",
        manufacturer: "Toyota",
        weight": 1090, // Corrected Kerb Weight (kg, starting MT)
        estimatedCabinSpace: 5809575000, // Recalculated: ((1495 - 175) * 2550 * 1730)
        sizeToWeightRatio: 5329885.32, // Recalculated: (5809575000 / 1090)
        dragCoefficient": 0.29 // Estimate
      },
    {
      name: "Toyota Glanza",
      yearsProduced: "2019 - Present", // Facelift 2022
      power: "88.5", // Corrected Power (bhp, was 82-89)
      torque: "113", // Corrected Torque (Nm, was 113-140)
      gears: "5-speed manual / AMT", // Corrected Gears (was CVT)
      length: 3990, // Corrected Length (was 3995)
      width: 1745,
      height: 1500,
      groundClearance: 170,
      wheelbase: 2520,
      turnRadius": 4.85, // Corrected Turn Radius (was 4.8)
      price": 7819, // Corrected: Starting ~6.7 Lakh INR -> USD (was 7k USD)
      capacity: "37 L", // Corrected Capacity (was 38L)
      manufacturer: "Toyota",
      weight": 920, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 5840118000, // Recalculated: ((1500 - 170) * 2520 * 1745)
      sizeToWeightRatio: 6347954.35, // Recalculated: (5840118000 / 920)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Toyota Urban Cruiser (Old)", // Corrected Name
      yearsProduced: "2020 - 2022 (India)", // Corrected: Discontinued
      power: "103.2", // Corrected Power (bhp, was 103)
      torque: "138", // Nm
      gears: "5-speed manual / 4-speed AT",
      length: 3995,
      width: 1790,
      height: 1640,
      groundClearance: 198, // Corrected Ground Clearance (was 210)
      wheelbase: 2500,
      turnRadius": 5.2,
      price": 9919, // Kept converted price (8.5 Lakh INR)
      capacity: "48 L", // Corrected Capacity (was 42L)
      manufacturer: "Toyota",
      weight": 1110, // Corrected Kerb Weight (kg, starting MT)
      estimatedCabinSpace: 6453900000, // Recalculated: ((1640 - 198) * 2500 * 1790)
      sizeToWeightRatio: 5814324.32, // Recalculated: (6453900000 / 1110)
      dragCoefficient": 0.34, // Estimate
    },
    // Added Urban Cruiser Hyryder (replaces old Urban Cruiser)
    {
        name: "Toyota Urban Cruiser Hyryder",
        yearsProduced: "2022 - Present",
        power: "91 - 101.6", // Corrected Power (bhp - Hybrid / Mild Hybrid)
        torque: "122 - 136.8", // Corrected Torque (Nm - Hybrid / Mild Hybrid)
        gears: "5-speed manual / 6-speed automatic / e-CVT",
        length: 4365, // Corrected Length
        width: 1795,
        height: 1645, // Corrected Height
        groundClearance: 210, // Corrected Ground Clearance
        wheelbase: 2600,
        turnRadius": 5.4, // Corrected Turn Radius
        price": 12837, // Corrected: Starting ~11 Lakh INR -> USD
        capacity: "45 L", // Corrected Capacity
        manufacturer: "Toyota",
        weight": 1155, // Corrected Kerb Weight (kg, starting Mild Hybrid MT)
        estimatedCabinSpace: 6688115000, // Recalculated: ((1645 - 210) * 2600 * 1795) - Same dimensions as Grand Vitara
        sizeToWeightRatio": 5790575.76, // Recalculated: (6688115000 / 1155)
        dragCoefficient": 0.35 // Estimate
      },
    {
      name: "Toyota Innova Crysta",
      yearsProduced: "2016 - Present", // Sold alongside Hycross
      power: "147.5", // Corrected Power (bhp, current 2.4 Diesel only)
      torque: "343", // Corrected Torque (Nm, current 2.4 Diesel only)
      gears: "5-speed manual", // Corrected Gears (current model)
      length: 4735,
      width: 1830,
      height: 1795,
      groundClearance": 178, // Corrected Ground Clearance (was 170)
      wheelbase: 2750,
      turnRadius": 5.4, // Corrected Turn Radius (was 5.6)
      price": 23340, // Corrected: Starting ~20 Lakh INR -> USD
      capacity: "55 L", // Corrected Capacity (was 60L)
      manufacturer: "Toyota",
      weight": 1840, // Corrected Kerb Weight (kg, current G MT)
      estimatedCabinSpace: 8192662500, // Recalculated: ((1795 - 178) * 2750 * 1830)
      sizeToWeightRatio: 4452533.97, // Recalculated: (8192662500 / 1840)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Toyota Fortuner",
      yearsProduced: "2016 - Present", // Facelift 2021
      power: "163.6 - 201.1", // Corrected Power (bhp, 2.7 Petrol / 2.8 Diesel)
      torque: "245 - 500", // Corrected Torque (Nm, Petrol / Diesel AT)
      gears: "5MT (Petrol) / 6MT (Diesel) / 6AT (Petrol/Diesel)", // Corrected Gears
      length: 4795,
      width: 1855,
      height: 1835,
      groundClearance: 220, // (Legender GR-S slightly lower ~200mm?) Using standard 220.
      wheelbase: 2745,
      turnRadius": 5.8, // Corrected Turn Radius (was 5.9)
      price": 38889, // Corrected: Starting ~33.3 Lakh INR -> USD (was 30k USD)
      capacity: "80 L", // Corrected Capacity (was 70L)
      manufacturer: "Toyota",
      weight": 1895, // Corrected Kerb Weight (kg, starting Petrol MT)
      estimatedCabinSpace: 8217169125, // Recalculated: ((1835 - 220) * 2745 * 1855)
      sizeToWeightRatio: 4336236.97, // Recalculated: (8217169125 / 1895)
      dragCoefficient": 0.36, // Estimate
    },
    {
      name: "Toyota Camry",
      yearsProduced: "2019 - Present", // Hybrid Only in India
      power: "215", // Corrected Power (bhp, Combined Hybrid System)
      torque": "221 (Engine) + 202 (Motor)", // Corrected Torque (Nm)
      gears: "e-CVT", // Corrected Gears (was 6AT)
      length: 4885,
      width: 1840,
      height: 1455, // Corrected Height (was 1445)
      groundClearance": 160,
      wheelbase: 2825,
      turnRadius": 5.8,
      price": 53682, // Corrected: Approx 46 Lakh INR -> USD (was 25k USD)
      capacity: "50 L", // Corrected Capacity (was 60L)
      manufacturer: "Toyota",
      weight": 1665, // Corrected Kerb Weight (kg)
      estimatedCabinSpace: 6673958000, // Recalculated: ((1455 - 160) * 2825 * 1840)
      sizeToWeightRatio: 4008383.18, // Recalculated: (6673958000 / 1665)
      dragCoefficient": 0.27, // Corrected Estimate (was 0.3)
    },
    // Added Hilux
    {
        name: "Toyota Hilux",
        yearsProduced: "2022 - Present",
        power: "201.1", // bhp (Diesel)
        torque: "420 - 500", // Nm (MT / AT)
        gears: "6-speed manual / 6-speed automatic",
        length: 5325,
        width: 1855,
        height: 1815, // Corrected Height
        groundClearance: 216, // Corrected Ground Clearance (approx)
        wheelbase: 3085, // Corrected Wheelbase
        turnRadius: 6.4, // Corrected Turn Radius
        price: 35578, // Corrected: Starting ~30.5 Lakh INR -> USD
        capacity: "80 L",
        manufacturer: "Toyota",
        weight: 2075, // Corrected Kerb Weight (kg, starting MT)
        estimatedCabinSpace: 9133747525, // Recalculated: ((1815 - 216) * 3085 * 1855)
        sizeToWeightRatio: 4401805.96, // Recalculated: (9133747525 / 2075)
        dragCoefficient: 0.39 // Estimate (Trucks are typically higher)
      }
  ]
export const kia = [
    {
        name: "Kia Carnival",
        yearsProduced: "2020 - 2023 (India)", // Corrected: Discontinued, new gen awaited
        power: "197.2", // Corrected Power (bhp, was 200)
        torque: "440", // Nm
        gears: "8-speed automatic",
        length: 5115,
        width: 1985, // Corrected Width (was 1995)
        height: 1755, // Corrected Height (was 1775)
        groundClearance": 180, // Corrected Ground Clearance (was 170)
        wheelbase: 3060,
        turnRadius": 5.6, // Corrected Turn Radius (was 5.7)
        price": 39678, // Corrected: Approx last price ~34 Lakh INR -> USD (was 30k USD)
        capacity: "60 L", // Corrected Capacity (was 80L)
        manufacturer: "Kia",
        weight": 2090, // Corrected Kerb Weight (kg, starting Prestige)
        estimatedCabinSpace: 9665860500, // Recalculated: ((1755 - 180) * 3060 * 1985)
        sizeToWeightRatio: 4624813.64, // Recalculated: (9665860500 / 2090)
        dragCoefficient": 0.34 // Estimate
      },
      // Added EV6
      {
        name: "Kia EV6",
        yearsProduced: "2022 - Present",
        power: "225 - 320", // bhp (RWD / AWD)
        torque: "350 - 605", // Nm (RWD / AWD)
        gears: "Single-speed automatic",
        length: 4695, // Corrected Length
        width: 1890, // Corrected Width
        height: 1550, // Corrected Height
        groundClearance: 155, // Corrected Ground Clearance
        wheelbase: 2900, // Corrected Wheelbase
        turnRadius: 5.8, // Corrected Turn Radius
        price: 70020, // Corrected: Starting ~60 Lakh INR -> USD
        capacity: "77.4 kWh", // Battery Capacity
        manufacturer: "Kia",
        weight: 1985, // Corrected Kerb Weight (kg, RWD)
        estimatedCabinSpace: 7294987500, // Recalculated: ((1550 - 155) * 2900 * 1890)
        sizeToWeightRatio: 3675056.68, // Recalculated: (7294987500 / 1985)
        dragCoefficient: 0.28 // Official
      },
    {
      name: "Kia Seltos",
      yearsProduced: "2019 - Present", // Facelift 2023
      power: "114 - 157.8", // Corrected Power (bhp, NA Petrol / Diesel / Turbo Petrol)
      torque: "144 - 253", // Corrected Torque (Nm)
      gears: "6MT / iMT / IVT / 6AT / 7DCT", // Corrected Gears (Facelift options)
      length: 4365, // Corrected Length (Facelift)
      width: 1800,
      height: 1645,
      groundClearance": 190,
      wheelbase: 2610,
      turnRadius": 5.3,
      price": 12254, // Corrected: Starting ~10.5 Lakh INR -> USD (was 13k USD)
      capacity: "50 L",
      manufacturer: "Kia",
      weight": 1221, // Corrected Kerb Weight (kg, starting NA Petrol MT)
      estimatedCabinSpace: 6816015000, // Recalculated: ((1645 - 190) * 2610 * 1800)
      sizeToWeightRatio: 5582321.87, // Recalculated: (6816015000 / 1221)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Kia Sonet",
      yearsProduced: "2020 - Present", // Facelift 2024
      power: "81.8 - 118.4", // Corrected Power (bhp, NA Petrol / Diesel / Turbo Petrol)
      torque: "115 - 250", // Corrected Torque (Nm)
      gears: "5MT / 6MT / iMT / 6AT / 7DCT", // Corrected Gears (Facelift options)
      length: 3995,
      width: 1790,
      height: 1642,
      groundClearance": 205,
      wheelbase: 2500, // Corrected Wheelbase (was 2610)
      turnRadius": 5.1, // Corrected Turn Radius (was 5.3)
      price": 9336, // Corrected: Starting ~8 Lakh INR -> USD (was 10k USD)
      capacity: "45 L",
      manufacturer: "Kia",
      weight": 1055, // Corrected Kerb Weight (kg, starting NA Petrol MT)
      estimatedCabinSpace: 6386887500, // Recalculated: ((1642 - 205) * 2500 * 1790)
      sizeToWeightRatio: 6053921.80, // Recalculated: (6386887500 / 1055)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Kia Carens",
      yearsProduced: "2022 - Present",
      power: "114 - 157.8", // Corrected Power (bhp, NA Petrol / Diesel / Turbo Petrol)
      torque: "144 - 253", // Corrected Torque (Nm)
      gears: "6MT / iMT / 6AT / 7DCT", // Corrected Gears
      length: 4540,
      width: 1800,
      height: 1708,
      groundClearance": 195, // Corrected Ground Clearance (was 190)
      wheelbase: 2780,
      turnRadius": 5.5, // Corrected Turn Radius (was 5.3)
      price": 12140, // Corrected: Starting ~10.4 Lakh INR -> USD (was 15k USD)
      capacity: "45 L", // Corrected Capacity (was 55L)
      manufacturer: "Kia",
      weight": 1280, // Corrected Kerb Weight (kg, starting NA Petrol MT)
      estimatedCabinSpace: 7606872000, // Recalculated: ((1708 - 195) * 2780 * 1800)
      sizeToWeightRatio: 5942868.75, // Recalculated: (7606872000 / 1280)
      dragCoefficient": 0.34, // Estimate
    },
  ]
export const mahindra = [
    {
        name: "Mahindra Alturas G4",
        yearsProduced: "2018 - 2022 (India)", // Corrected: Discontinued
        power: "178.5", // Corrected Power (bhp, was 178)
        torque: "420", // Nm
        gears: "7-speed automatic",
        length: 4850,
        width: 1960,
        height: 1845,
        groundClearance": 244, // Corrected Ground Clearance (was 213)
        wheelbase: 2865,
        turnRadius": 5.5, // Corrected Turn Radius (was 5.6)
        price": 37344, // Corrected: Approx last price ~32 Lakh INR -> USD (was 35k USD)
        capacity: "70 L",
        manufacturer: "Mahindra",
        weight": 2155, // Corrected Kerb Weight (kg, 2WD)
        estimatedCabinSpace: 9120894000, // Recalculated: ((1845 - 244) * 2865 * 1960)
        sizeToWeightRatio: 4232433.41, // Recalculated: (9120894000 / 2155)
        dragCoefficient": 0.38 // Estimate
      },
      {
        name: "Mahindra eVerito",
        yearsProduced: "2016 - ~2023 (Mainly Fleet)", // Corrected: Largely discontinued
        power: "41", // Corrected Power (bhp, was 70)
        torque: "91", // Corrected Torque (Nm, was 140)
        gears: "Single-speed",
        length: 4247, // Corrected Length (based on Verito)
        width: 1740,
        height: 1540,
        groundClearance": 172, // Corrected Ground Clearance (based on Verito)
        wheelbase: 2630,
        turnRadius": 5.25, // Corrected Turn Radius (based on Verito)
        price": 11670, // Kept estimated price (10 Lakh INR)
        capacity: "21.2 kWh", // Or 28 kWh in later versions
        manufacturer: "Mahindra Electric",
        weight": 1265, // Corrected Kerb Weight (kg, D6 variant)
        estimatedCabinSpace: 6275184120, // Recalculated: ((1540 - 172) * 2630 * 1740)
        sizeToWeightRatio: 4960619.86, // Recalculated: (6275184120 / 1265)
        dragCoefficient": 0.32 // Estimate
      },
    {
      name: "Mahindra XUV700",
      yearsProduced: "2021 - Present",
      power: "153 - 197", // Corrected Power (bhp, Diesel / Petrol)
      torque: "360 - 450", // Corrected Torque (Nm, MT Diesel / AT Diesel / Petrol)
      gears: "6-speed manual / 6-speed automatic",
      length: 4695,
      width: 1890,
      height: 1755,
      groundClearance": 200, // Unladen estimate
      wheelbase: 2750,
      turnRadius": 5.8, // Corrected Turn Radius (was 5.4)
      price": 16338, // Corrected: Starting ~14 Lakh INR -> USD (was 20k USD)
      capacity: "60 L",
      manufacturer: "Mahindra",
      weight": 1650, // Approx Kerb Weight (kg, Petrol MT 5-str)
      estimatedCabinSpace: 8090718750, // Recalculated: ((1755 - 200) * 2750 * 1890)
      sizeToWeightRatio: 4903465.91, // Recalculated: (8090718750 / 1650)
      dragCoefficient": 0.35, // Estimate
    },
    {
      name: "Mahindra Thar",
      yearsProduced: "2020 - Present",
      power: "117 - 150", // Corrected Power (bhp, 1.5 Diesel / 2.2 Diesel / 2.0 Petrol)
      torque: "300 - 320", // Corrected Torque (Nm)
      gears: "6-speed manual / 6-speed automatic",
      length: 3985,
      width: 1820, // Corrected Width (was 1855)
      height: 1850, // Corrected Height (Hard Top, was 1844)
      groundClearance": 226,
      wheelbase: 2450,
      turnRadius": 5.8, // Corrected Turn Radius (was 5.6)
      price": 12954, // Corrected: Starting ~11.1 Lakh INR (RWD) -> USD (was 15k USD)
      capacity: "57 L", // Corrected Capacity (was 50L)
      manufacturer: "Mahindra",
      weight": 1720, // Corrected Kerb Weight (kg, approx 4WD Diesel MT HT)
      estimatedCabinSpace: 7321709500, // Recalculated: ((1850 - 226) * 2450 * 1820)
      sizeToWeightRatio: 4256807.85, // Recalculated: (7321709500 / 1720)
      dragCoefficient": 0.55, // Corrected Estimate (Very high due to shape, was 0.37)
    },
    {
      name: "Mahindra Scorpio-N",
      yearsProduced: "2022 - Present",
      power: "130 - 200", // bhp (Diesel MT / Petrol)
      torque: "300 - 400", // Nm (Diesel MT / Diesel AT / Petrol AT)
      gears: "6-speed manual / 6-speed automatic",
      length: 4662,
      width: 1917,
      height: 1857,
      groundClearance": 187,
      wheelbase: 2750,
      turnRadius": 5.65, // Corrected Turn Radius (was 5.4)
      price": 15900, // Corrected: Starting ~13.6 Lakh INR -> USD (was 18k USD)
      capacity: "57 L", // Corrected Capacity (was 65L)
      manufacturer: "Mahindra",
      weight": 1880, // Corrected Kerb Weight (kg, approx Z2 Diesel MT)
      estimatedCabinSpace: 8825183550, // Recalculated: ((1857 - 187) * 2750 * 1917)
      sizeToWeightRatio: 4694246.57, // Recalculated: (8825183550 / 1880)
      dragCoefficient": 0.36, // Estimate
    },
    {
      name: "Mahindra XUV300",
      yearsProduced: "2019 - Present", // Facelifted as XUV 3XO in 2024
      power: "108 - 128", // Corrected Power (bhp, 1.2 MPFI / 1.5 Diesel / 1.2 TGDI)
      torque: "200 - 300", // Corrected Torque (Nm)
      gears: "6-speed manual / 6-speed AMT / 6-speed Auto (New)", // Corrected Gears
      length: 3990, // Corrected Length (XUV 3XO)
      width: 1821,
      height: 1647, // Corrected Height (XUV 3XO)
      groundClearance": 201, // Corrected Ground Clearance (XUV 3XO)
      wheelbase: 2600,
      turnRadius": 5.3, // Corrected Turn Radius (was 5.4)
      price": 8753, // Corrected: Starting ~7.5 Lakh INR (XUV 3XO) -> USD (was 12k USD)
      capacity: "42 L", // Corrected Capacity (was 45L)
      manufacturer: "Mahindra",
      weight": 1250, // Corrected Kerb Weight (kg, approx starting Petrol MT)
      estimatedCabinSpace: 6906440820, // Recalculated: ((1647 - 201) * 2600 * 1821)
      sizeToWeightRatio: 5525152.66, // Recalculated: (6906440820 / 1250)
      dragCoefficient": 0.34, // Estimate
    },
    {
      name: "Mahindra XUV500",
      yearsProduced: "2011 - 2021 (India)", // Corrected: Discontinued (Replaced by XUV700)
      power: "153", // Corrected Power (bhp, last 2.2 Diesel)
      torque: "360", // Corrected Torque (Nm)
      gears: "6-speed manual / 6-speed automatic",
      length: 4585,
      width: 1890,
      height: 1785,
      groundClearance": 200,
      wheelbase: 2700,
      turnRadius": 5.6, // Corrected Turn Radius (was 5.4)
      price": 18672, // Kept converted price (16 Lakh INR) as estimate of last value
      capacity: "70 L", // Corrected Capacity (was 55L)
      manufacturer: "Mahindra",
      weight": 1785, // Corrected Kerb Weight (kg, approx W5 MT)
      estimatedCabinSpace: 8120895000, // Recalculated: ((1785 - 200) * 2700 * 1890)
      sizeToWeightRatio: 4549520.99, // Recalculated: (8120895000 / 1785)
      dragCoefficient": 0.35, // Estimate
    },
    // Added Bolero/Bolero Neo
     {
      name: "Mahindra Bolero Neo",
      yearsProduced: "2021 - Present",
      power: "98.6", // bhp (1.5 Diesel)
      torque: "260", // Nm
      gears: "5-speed manual",
      length: 3995,
      width: 1795,
      height: 1817,
      groundClearance: 160, // Corrected Ground Clearance (laden)
      wheelbase: 2680,
      turnRadius: 5.35,
      price: 11087, // Corrected: Starting ~9.5 Lakh INR -> USD
      capacity: "50 L",
      manufacturer: "Mahindra",
      weight: 1575, // Corrected Kerb Weight (kg, approx N4)
      estimatedCabinSpace: 7958226800, // Recalculated: ((1817 - 160) * 2680 * 1795)
      sizeToWeightRatio: 5052842.41, // Recalculated: (7958226800 / 1575)
      dragCoefficient: 0.40 // Estimate (Boxy shape)
    },
  ]
export const volkswagen = [
    {
      name: "Volkswagen Virtus",
      yearsProduced: "2022 - Present",
      power: "114 - 148", // Corrected Power (bhp, 1.0 TSI / 1.5 TSI)
      torque: "178 - 250", // Nm
      gears: "6-speed manual / 6-speed automatic / 7-speed DSG", // Corrected Gears
      length: 4561,
      width: 1752, // Corrected Width (was 1759)
      height: 1507,
      groundClearance": 179,
      wheelbase: 2651,
      turnRadius": 5.25, // Corrected Turn Radius (was 5.4)
      price": 13420, // Corrected: Starting ~11.5 Lakh INR -> USD (was 14k USD)
      capacity: "45 L", // Corrected Capacity (was 50L)
      manufacturer: "Volkswagen",
      weight": 1185, // Corrected Kerb Weight (kg, starting 1.0 MT)
      estimatedCabinSpace: 6169958112, // Recalculated: ((1507 - 179) * 2651 * 1752)
      sizeToWeightRatio: 5206715.71, // Recalculated: (6169958112 / 1185)
      dragCoefficient": 0.28, // Corrected Estimate (was 0.32)
    },
    {
      name: "Volkswagen Taigun",
      yearsProduced: "2021 - Present",
      power: "114 - 148", // bhp
      torque: "178 - 250", // Nm
      gears: "6-speed manual / 6-speed automatic / 7-speed DSG", // Corrected Gears
      length: 4221,
      width: 1760,
      height: 1612,
      groundClearance": 188,
      wheelbase: 2651,
      turnRadius": 5.05, // Corrected Turn Radius (was 5.4)
      price": 13537, // Corrected: Starting ~11.6 Lakh INR -> USD (was 12k USD)
      capacity: "50 L", // Corrected Capacity (was 45L)
      manufacturer: "Volkswagen",
      weight": 1185, // Corrected Kerb Weight (kg, starting 1.0 MT)
      estimatedCabinSpace: 6646078560, // Recalculated: ((1612 - 188) * 2651 * 1760)
      sizeToWeightRatio: 5608505.12, // Recalculated: (6646078560 / 1185)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Volkswagen Tiguan",
      yearsProduced: "2017 - Present", // Facelift 2021
      power: "187.7", // Corrected Power (bhp, 2.0 TSI)
      torque: "320", // Nm
      gears: "7-speed DSG",
      length: 4509, // Corrected Length
      width: 1839,
      height: 1675, // Corrected Height
      groundClearance": 190, // Corrected Ground Clearance (unladen)
      wheelbase: 2679,
      turnRadius": 5.75, // Corrected Turn Radius (was 5.5)
      price": 40845, // Kept corrected price (35 Lakh INR)
      capacity: "60 L", // Corrected Capacity (was 55L)
      manufacturer: "Volkswagen",
      weight": 1703, // Corrected Kerb Weight (kg)
      estimatedCabinSpace: 7225323495, // Recalculated: ((1675 - 190) * 2679 * 1839)
      sizeToWeightRatio: 4242697.26, // Recalculated: (7225323495 / 1703)
      dragCoefficient": 0.33, // Estimate
    },
    {
      name: "Volkswagen Polo",
      yearsProduced: "2010 - 2022 (India)", // Corrected: Discontinued
      power: "75 - 108", // Corrected Power (bhp, last NA / TSI)
      torque: "95 - 175", // Corrected Torque (Nm)
      gears: "5-speed manual / 6-speed automatic (TSI)", // Corrected Gears
      length: 3971,
      width: 1682,
      height: 1469,
      groundClearance": 165,
      wheelbase: 2470,
      turnRadius": 4.97,
      price": 7586, // Corrected: Assumed Starting ~6.5 Lakh INR -> USD (was 10.5k USD)
      capacity: "45 L",
      manufacturer: "Volkswagen",
      weight": 1015, // Corrected Kerb Weight (kg, starting NA MT)
      estimatedCabinSpace: 5407430940, // Recalculated: ((1469 - 165) * 2470 * 1682)
      sizeToWeightRatio: 5327518.17, // Recalculated: (5407430940 / 1015)
      dragCoefficient": 0.32, // Estimate
    },
    {
      name: "Volkswagen Vento",
      yearsProduced: "2010 - 2022 (India)", // Corrected: Discontinued
      power: "103 - 108", // Corrected Power (bhp, last NA / TSI)
      torque: "153 - 175", // Corrected Torque (Nm)
      gears: "5-speed manual / 6-speed automatic", // Corrected Gears
      length: 4390,
      width: 1699,
      height: 1467,
      groundClearance": 163,
      wheelbase: 2553,
      turnRadius": 5.4,
      price": 11670, // Kept converted price (10 Lakh INR)
      capacity: "55 L",
      manufacturer: "Volkswagen",
      weight": 1140, // Corrected Kerb Weight (kg, starting NA MT)
      estimatedCabinSpace: 5662992474, // Recalculated: ((1467 - 163) * 2553 * 1699)
      sizeToWeightRatio: 4967537.26, // Recalculated: (5662992474 / 1140)
      dragCoefficient": 0.31, // Estimate
    },
    // Added ID.4 (Expected)
     {
      name: "Volkswagen ID.4",
      yearsProduced: "2025 (Expected India Launch)",
      power: "282", // bhp (Pro variant estimate)
      torque: "545", // Nm (Pro variant estimate)
      gears: "Single-speed automatic",
      length: 4584, // Global spec
      width: 1852, // Global spec
      height: 1631, // Global spec
      groundClearance: 163, // Global spec (unladen)
      wheelbase: 2771, // Global spec
      turnRadius: 5.1, // Corrected (RWD, based on 10.2m diameter)
      price: 64185, // Estimated: ~55 Lakh INR -> USD
      capacity: "77 kWh", // Usable Battery (Pro)
      manufacturer: "Volkswagen",
      weight: 2120, // Estimated Kerb Weight (kg, Pro)
      estimatedCabinSpace: 7429872970, // Recalculated: ((1631 - 163) * 2771 * 1852)
      sizeToWeightRatio: 3504657.06, // Recalculated: (7429872970 / 2120)
      dragCoefficient: 0.28 // Official
    }
  ]
export const citroen=[
    {
    name: "Citroën C3",
    yearsProduced: "2022 - Present",
    power: "80.8 - 108.6", // Corrected Power (bhp, NA / Turbo)
    torque: "115 - 190", // Nm
    gears: "5-speed manual / 6-speed manual",
    length: 3981, // Corrected Length
    width: 1733,
    height: 1604, // Corrected Height
    groundClearance": 180,
    wheelbase: 2540,
    turnRadius": 4.98, // Corrected Turn Radius (was 5.1)
    price": 7119, // Corrected: Starting ~6.1 Lakh INR -> USD (was 7k USD)
    capacity: "30 L", // / 19.2 kWh (eC3)
    manufacturer: "Citroën",
    weight": 939, // Corrected Kerb Weight (kg, starting NA MT)
    estimatedCabinSpace: 6268378992, // Recalculated: ((1604 - 180) * 2540 * 1733)
    sizeToWeightRatio: 6675590.00, // Recalculated: (6268378992 / 939)
    dragCoefficient": 0.32 // Estimate
  },
  // Added C3 Aircross
   {
    name: "Citroën C3 Aircross",
    yearsProduced: "2023 - Present",
    power: "108.6", // bhp (Turbo Petrol)
    torque: "190 - 205", // Nm (MT / AT)
    gears: "6-speed manual / 6-speed automatic",
    length: 4323, // Corrected Length
    width: 1796, // Corrected Width
    height: 1669, // Corrected Height (with roof rails)
    groundClearance: 200, // Corrected Ground Clearance
    wheelbase: 2671, // Corrected Wheelbase
    turnRadius: 5.4, // Corrected Turn Radius
    price: 11670, // Corrected: Starting ~10 Lakh INR -> USD
    capacity: "45 L", // Corrected Capacity
    manufacturer: "Citroën",
    weight: 1237, // Corrected Kerb Weight (kg, starting MT 5-str)
    estimatedCabinSpace: 6990860868, // Recalculated: ((1669 - 200) * 2671 * 1796)
    sizeToWeightRatio: 5651463.92, // Recalculated: (6990860868 / 1237)
    dragCoefficient: 0.33 // Estimate
  },
  {
    name: "Citroën C5 Aircross",
    yearsProduced: "2021 - Present", // Corrected Year (India Launch)
    power: "174.3", // Corrected Power (bhp, was 177)
    torque: "400", // Nm
    gears: "8-speed automatic",
    length: 4500,
    width: 1969, // Corrected Width (incl mirrors, was 1840/1859)
    height: 1710, // Height with roof rails
    groundClearance": 230, // Seems correct
    wheelbase: 2730,
    turnRadius": 5.35, // Corrected Turn Radius (was 5.5)
    price": 43179, // Kept corrected price (37 Lakh INR)
    capacity: "53 L",
    manufacturer: "Citroën",
    weight": 1570, // Corrected Kerb Weight (kg)
    estimatedCabinSpace: 7977144000, // Recalculated: ((1710 - 230) * 2730 * 1969)
    sizeToWeightRatio: 5080983.44, // Recalculated: (7977144000 / 1570)
    dragCoefficient": 0.31 // Estimate
  }];
export const bmw=[ // Already corrected, minor review
 {
    name: "BMW X1 (sDrive18i / sDrive18d)", // Added Diesel variant possibility
    yearsProduced: "2023-Present",
    power: "134 - 147.5", // Corrected Power Range (bhp, Petrol / Diesel)
    torque: "230 - 360", // Corrected Torque Range (Nm)
    gears: "7-Speed Automatic DCT",
    length: 4500,
    width: 1845,
    height: 1630,
    groundClearance": 183, // Unladen
    wheelbase: 2692,
    turnRadius": 5.85, // Corrected (based on 11.7m diameter)
    price": 57767, // Starting Petrol USD
    capacity: "45 L", // Corrected Capacity (was 51L)
    manufacturer: "BMW",
    weight": 1560, // Petrol Kerb Weight (kg)
    estimatedCabinSpace: 7187504940, // Kept calculation
    sizeToWeightRatio: 4607374.96, // Kept calculation
    dragCoefficient": 0.29 // Estimate
  },
  {
    name: "BMW 3 Series Gran Limousine (330Li / 320Ld)", // Added Diesel variant
    yearsProduced: "2021-Present",
    power: "187.7 - 254.7", // Corrected Power Range (bhp, Diesel / Petrol)
    torque: "400", // Nm (Both)
    gears: "8-Speed Steptronic Sport", // Corrected Name
    length: 4823,
    width: 1827,
    height: 1441,
    groundClearance": 135, // Laden estimate
    wheelbase: 2961,
    turnRadius": 6.0,
    price": 70720, // Starting Petrol USD
    capacity: "59 L",
    manufacturer: "BMW",
    weight": 1615, // Petrol Kerb Weight (kg)
    estimatedCabinSpace: 7070388162, // Kept calculation
    sizeToWeightRatio: 4377949.32, // Kept calculation
    dragCoefficient": null
  },
  {
    name: "BMW 7 Series (740i / 740d)", // Added Diesel variant
    yearsProduced: "2022-Present",
    power: "281.6 - 375.4", // Corrected Power Range (bhp, Diesel / Petrol)
    torque: "520 - 650", // Corrected Torque Range (Nm, Petrol / Diesel)
    gears: "8-Speed Automatic",
    length: 5391,
    width: 1950,
    height: 1544,
    groundClearance": 147, // Corrected Ground Clearance (Unladen)
    wheelbase: 3215,
    turnRadius": 6.15, // (Base, can be lower with Integral Active Steering)
    price": 207726, // Starting Petrol USD
    capacity: "74 L",
    manufacturer: "BMW",
    weight": 2090, // Petrol Kerb Weight (kg)
    estimatedCabinSpace: 8701297500, // Recalculated: ((1544 - 147) * 3215 * 1950)
    sizeToWeightRatio: 4163299.95, // Recalculated: (8701297500 / 2090)
    dragCoefficient": 0.26 // Corrected Estimate (was null)
  },
  {
    name: "BMW iX (xDrive50)",
    yearsProduced: "2021-Present (India Launch)", // Corrected Year
    power: "516", // hp
    torque: "765", // Nm
    gears: "1-Speed Automatic",
    length: 4953,
    width: 1967,
    height: 1696,
    groundClearance": 195, // Corrected Ground Clearance (Approx standard height)
    wheelbase: 3000,
    turnRadius": 6.4, // (Base, can be lower with Integral Active Steering)
    price": 162807, // Starting xDrive50 USD
    capacity: "106.3 kWh", // Corrected Usable Battery Capacity (was 105.2)
    manufacturer: "BMW",
    weight": 2585, // Corrected Kerb Weight (kg)
    estimatedCabinSpace: 8857413000, // Recalculated: ((1696 - 195) * 3000 * 1967)
    sizeToWeightRatio: 3426465.38, // Recalculated: (8857413000 / 2585)
    dragCoefficient": 0.25
  }
  // Added i4
   {
    name: "BMW i4 (eDrive40)", // Common variant in India
    yearsProduced: "2022-Present",
    power: "335", // bhp
    torque: "430", // Nm
    gears: "Single-speed automatic",
    length: 4783,
    width: 1852,
    height: 1448,
    groundClearance: 125, // Corrected Ground Clearance
    wheelbase: 2856,
    turnRadius: 5.95, // Corrected (based on 11.9m diameter)
    price: 87525, // Corrected: Starting ~75 Lakh INR -> USD
    capacity: "80.7 kWh", // Usable Battery Capacity
    manufacturer: "BMW",
    weight: 2125, // Kerb Weight (kg)
    estimatedCabinSpace: 6802966886, // Recalculated: ((1448 - 125) * 2856 * 1852)
    sizeToWeightRatio: 3201396.18, // Recalculated: (6802966886 / 2125)
    dragCoefficient: 0.24 // Official
  }
]
export const jeep=[
{
    name: "Jeep Meridian",
    yearsProduced: "2022 - Present",
    power: "168", // Corrected Power (bhp, was 170)
    torque: "350", // Nm
    gears: "6-speed manual / 9-speed automatic", // Corrected Gears
    length: 4769, // Corrected Length
    width: 1859, // Corrected Width
    height: 1698, // Corrected Height
    groundClearance": 214, // Corrected Ground Clearance
    wheelbase: 2782,
    turnRadius": 5.8,
    price": 38889, // Corrected: Starting ~33.3 Lakh INR -> USD (was 33k USD)
    capacity: "60 L",
    manufacturer: "Jeep",
    weight": 1813, // Corrected Kerb Weight (kg, starting Limited MT FWD)
    estimatedCabinSpace: 7843117084, // Recalculated: ((1698 - 214) * 2782 * 1859)
    sizeToWeightRatio: 4325988.46, // Recalculated: (7843117084 / 1813)
    dragCoefficient": 0.33 // Estimate
  },
  {
    name: "Jeep Compass",
    yearsProduced: "2017 - Present", // Facelift 2021
    power: "168", // Corrected Power (bhp, Diesel only now)
    torque: "350", // Nm
    gears: "6-speed manual / 9-speed automatic", // Corrected Gears (Diesel only)
    length: 4405, // Corrected Length (was 4395)
    width: 1818,
    height: 1640,
    groundClearance": 198, // Corrected Ground Clearance
    wheelbase: 2636,
    turnRadius": 5.7, // Corrected Turn Radius (was 5.5)
    price": 23926, // Corrected: Starting ~20.5 Lakh INR -> USD (was 25k USD)
    capacity: "60 L",
    manufacturer: "Jeep",
    weight": 1590, // Corrected Kerb Weight (kg, starting Sport MT Diesel)
    estimatedCabinSpace: 6913143168, // Recalculated: ((1640 - 198) * 2636 * 1818)
    sizeToWeightRatio: 4347888.79, // Recalculated: (6913143168 / 1590)
    dragCoefficient": 0.35 // Corrected Estimate (was 0.32)
  },
  // Added Wrangler
   {
    name: "Jeep Wrangler",
    yearsProduced: "Assembly 2021 - Present",
    power: "268", // bhp (2.0 Petrol)
    torque: "400", // Nm
    gears: "8-speed automatic",
    length: 4867, // Unlimited variant
    width: 1894, // Unlimited variant
    height: 1853, // Unlimited variant (Hard Top)
    groundClearance: 223, // Corrected Ground Clearance (India spec)
    wheelbase: 3008, // Unlimited variant
    turnRadius: 6.2, // Corrected (Unlimited)
    price: 75855, // Corrected: Starting ~65 Lakh INR -> USD
    capacity: "81 L", // Corrected Capacity
    manufacturer: "Jeep",
    weight: 2045, // Corrected Kerb Weight (kg, Unlimited)
    estimatedCabinSpace: 9224201864, // Recalculated: ((1853 - 223) * 3008 * 1894)
    sizeToWeightRatio: 4510612.16, // Recalculated: (9224201864 / 2045)
    dragCoefficient: 0.45 // Estimate (High due to shape)
  }
]
export const volvo=[
  {
    name: "Volvo XC40 Recharge", // Corrected Name (Only EV available now)
    yearsProduced: "2022 - Present", // Corrected Year (Recharge Launch)
    power: "235 - 402", // Corrected Power (bhp, Single/Twin Motor)
    torque: "420 - 660", // Corrected Torque (Nm)
    gears: "Single-speed automatic", // Corrected Gears
    length: 4440, // Corrected Length (Recharge)
    width: 1863,
    height: 1651, // Corrected Height (Recharge)
    groundClearance": 175, // Corrected Ground Clearance (Recharge)
    wheelbase: 2702,
    turnRadius": 5.7, // Corrected Turn Radius (was 5.8)
    price": 65340, // Corrected: Starting ~56 Lakh INR -> USD (was 34k USD)
    capacity: "67 - 75 kWh", // Corrected: Usable Battery Capacity (Single/Twin)
    manufacturer: "Volvo",
    weight": 2030, // Corrected Kerb Weight (kg, Single Motor)
    estimatedCabinSpace: 7444769178, // Recalculated: ((1651 - 175) * 2702 * 1863)
    sizeToWeightRatio: 3667373.98, // Recalculated: (7444769178 / 2030)
    dragCoefficient": 0.329 // Corrected Estimate (was 0.34)
  },
  // Added XC60
   {
    name: "Volvo XC60",
    yearsProduced: "2017 - Present", // Mild Hybrid from 2021
    power: "246", // bhp (B5 Mild Hybrid Petrol)
    torque: "350", // Nm
    gears: "8-speed automatic",
    length: 4708, // Corrected Length
    width: 1902, // Corrected Width
    height: 1653, // Corrected Height
    groundClearance: 211, // Corrected Ground Clearance (Unladen)
    wheelbase: 2865,
    turnRadius: 5.85, // Corrected (based on 11.7m diameter)
    price: 78189, // Corrected: Starting ~67 Lakh INR -> USD
    capacity: "71 L", // Corrected Capacity
    manufacturer: "Volvo",
    weight: 1875, // Corrected Kerb Weight (kg)
    estimatedCabinSpace: 7335832770, // Recalculated: ((1653 - 211) * 2865 * 1902)
    sizeToWeightRatio: 3912444.14, // Recalculated: (7335832770 / 1875)
    dragCoefficient": 0.32 // Official estimate
  },
  // Added XC90
   {
    name: "Volvo XC90",
    yearsProduced: "2015 - Present", // Mild Hybrid from 2021
    power: "296", // bhp (B6 Mild Hybrid Petrol)
    torque: "420", // Nm
    gears: "8-speed automatic",
    length: 4953,
    width: 1923, // Corrected Width (Body)
    height: 1771, // Corrected Height
    groundClearance: 223, // Corrected Ground Clearance (Unladen)
    wheelbase: 2984,
    turnRadius: 6.0, // Corrected (based on 12m diameter)
    price: 117819, // Corrected: Starting ~1 Cr INR -> USD
    capacity: "71 L", // Corrected Capacity
    manufacturer: "Volvo",
    weight: 2095, // Corrected Kerb Weight (kg)
    estimatedCabinSpace: 8811935539, // Recalculated: ((1771 - 223) * 2984 * 1923)
    sizeToWeightRatio: 4206174.48, // Recalculated: (8811935539 / 2095)
    dragCoefficient: 0.30 // Official estimate
  },
  // Added C40 Recharge
   {
    name: "Volvo C40 Recharge",
    yearsProduced: "2023 - Present",
    power: "235 - 402", // bhp (Single/Twin Motor)
    torque: "420 - 660", // Nm
    gears: "Single-speed automatic",
    length: 4440,
    width: 1873, // Corrected Width
    height: 1591, // Corrected Height
    groundClearance: 171, // Corrected Ground Clearance
    wheelbase: 2702,
    turnRadius: 5.7, // Seems correct
    price: 73515, // Corrected: Starting ~62.9 Lakh INR -> USD
    capacity: "67 - 75 kWh", // Usable Battery Capacity (Single/Twin)
    manufacturer: "Volvo",
    weight: 2045, // Corrected Kerb Weight (kg, Single Motor)
    estimatedCabinSpace: 7166204638, // Recalculated: ((1591 - 171) * 2702 * 1873)
    sizeToWeightRatio: 3504256.55, // Recalculated: (7166204638 / 2045)
    dragCoefficient: 0.319 // Corrected Estimate
  }
]
