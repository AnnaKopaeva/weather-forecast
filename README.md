# 🌤️ React Weather App

A modern weather app built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**.  
Fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/).  
Includes city search, weather history, and undo delete functionality.

---

## 🚀 Tech Stack

- ⚡ Vite + React + TypeScript
- 🎨 Tailwind CSS (`@tailwindcss/vite`)
- 🌐 React Router v7
- 📦 TanStack React Query v5 (data fetching & caching)
- 📦 `classnames` for conditional styling
- 🔥 `react-hot-toast` for toast notifications (with Undo support)
- 🧭 `query-string` for URL parsing and search parameters

---

## 🌦️ Weather API

This project uses [https://www.weatherapi.com/](https://www.weatherapi.com/)  
Sign up to get a free API key and set it as an environment variable:

```env
VITE_WEATHER_API_KEY=your_api_key_here


---

## 🛠️ Getting Started

### Install dependencies

```
npm install
```

### Set your environment variables

Create a `.env` file in the root directory and add your WeatherAPI key:

```env
VITE_API_KEY=your_api_key_here
VITE_API_URL=your_api_url_here
```

### Run the development server

```
npm run dev
```

Then open in your browser:

```
Local:   http://localhost:5173/
```