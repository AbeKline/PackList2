# 🎒 Smart Packing List

A lightweight, locally-hosted web application for generating and managing smart packing lists. Built with Node.js and plain HTML/JS, it is designed to run flawlessly as a Docker container on Unraid (or any Docker environment) with zero external database dependencies.

## ✨ Features

* **Trip Manager:** Create, rename, delete, and switch between multiple saved trips.
* **Smart Generator Engine:** Automatically calculates clothing quantities based on trip duration, access to a washing machine, and destination weather.
* **Auto-Detect Weather:** Integrated with the Open-Meteo API to convert your destination city into coordinates, analyze the 7-day forecast, and automatically select the weather type (Mild, Hot, Cold, or Rainy).
* **Traveler Profiles:** Create profiles for family members and friends.
  * **Wear Frequencies:** Configure granular clothing preferences per person (e.g., "Fresh" shirts daily, but "Grubby" pants every 3 days).
  * **Must-Have Items:** Add specific custom items that always get packed for a specific traveler (e.g., Medications, specific toys).
* **Master Default Configurations:** Edit the baseline group items (like First Aid Kits) and personal items (like Phone Chargers) directly from the UI.
* **Data Persistence:** Saves lists and configurations to local `.json` files, ensuring data survives container reboots when mapped to a persistent volume.

## 🛠️ Tech Stack

* **Backend:** Node.js (Express)
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (No build steps or frameworks)
* **Storage:** Local JSON files (`items.json` and `config.json`)
* **External APIs:** Open-Meteo (Geocoding and Weather APIs)

## 📁 Project Structure

```text
packing-list/
├── public/
│   ├── index.html       # Main checklist and trip manager UI
│   └── config.html      # Configuration UI for profiles and defaults
├── data/
│   ├── items.json       # Generated automatically: Stores your trips and lists
│   └── config.json      # Generated automatically: Stores traveler profiles and defaults
├── server.js            # Node.js backend API
├── package.json         # Node.js dependencies
├── Dockerfile           # Docker image build instructions
└── docker-compose.yml   # Docker deployment configuration
