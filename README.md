# Solar Energy Calculator

A responsive web calculator for preliminary solar PV system sizing.

## Features

- Solar array sizing from daily energy demand and peak sun hours
- Automatic panel quantity calculation
- Battery bank sizing based on autonomy and usable depth
- Inverter sizing with an adjustable safety factor
- Estimated daily solar production
- Responsive interface for desktop and mobile
- No backend or external dependencies

## Formulas

- **Solar array (kW)** = Daily energy (kWh) / (Peak sun hours × system efficiency)
- **Panel count** = Solar array (W) / panel power (W), rounded up
- **Battery capacity (kWh)** = Daily energy × autonomy / usable depth of discharge
- **Inverter estimate (kW)** = estimated peak load × safety factor

> The inverter estimate uses daily energy / 5 as a simple peak-load proxy when no actual peak-load value is provided. For a real installation, use measured or specified peak demand.

## Tech

HTML5 · CSS3 · Vanilla JavaScript

## Usage

Open `index.html` in a browser. Enter the system assumptions and select **Calculate system**.

## Disclaimer

This tool is intended for preliminary estimation and education. Final PV, inverter, battery, protection, cable and installation design should be verified using site-specific conditions and manufacturer specifications by a qualified professional.