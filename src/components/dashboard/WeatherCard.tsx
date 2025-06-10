"use client";

import React, { useEffect, useState } from "react";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const weatherCodeToIcon = (code: number) => {
  if ([0].includes(code)) return "☀️"; // Clear
  if ([1, 2, 3].includes(code)) return "⛅"; // Partly cloudy
  if ([45, 48].includes(code)) return "🌫️"; // Fog
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️"; // Rain
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️"; // Snow
  if ([95, 96, 99].includes(code)) return "⛈️"; // Thunderstorm
  return "❔"; // Unknown
};

const weatherCodeToBorder = (code: number) => {
  if ([0].includes(code)) return "border-yellow-400 hover:border-yellow-500";
  if ([1, 2, 3].includes(code)) return "border-gray-400 hover:border-gray-500";
  if ([45, 48].includes(code)) return "border-gray-300 hover:border-gray-400";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "border-blue-400 hover:border-blue-500";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "border-blue-200 hover:border-blue-300";
  if ([95, 96, 99].includes(code)) return "border-purple-400 hover:border-purple-500";
  return "border-gray-200 hover:border-gray-300";
};

export default function WeatherCard() {
  const [weather, setWeather] = useState<{
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            if (data?.daily?.time && data.daily.weathercode) {
              setWeather(data.daily);
            } else {
              throw new Error("Unexpected data format from weather API.");
            }
            setLoading(false);
          })
          .catch((err) => {
            console.error("Weather API error:", err);
            setError("Failed to load weather data.");
            setLoading(false);
          });
      },
      () => {
        setError("Location access denied.");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <div className="py-4 text-center">Loading 7-day forecast...</div>;
  if (error) return <div className="py-4 text-center text-red-500">{error}</div>;
  if (!weather) return <div className="py-4 text-center text-gray-500">No weather data.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
      {weather.time.map((dateStr, i) => {
        const date = new Date(dateStr);
        const day = WEEKDAYS[date.getDay()];
        const maxTemp = weather.temperature_2m_max[i];
        const minTemp = weather.temperature_2m_min[i];
        const code = weather.weathercode[i];
        const border = weatherCodeToBorder(code);

        return (
          <div
            key={i}
            className={`flex flex-col items-center p-3 bg-white rounded-xl border-2 ${border} shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
          >
            <div className="font-semibold text-xs mb-1">{day}</div>
            <div className="text-3xl mb-1">{weatherCodeToIcon(code)}</div>
            <div className="text-sm">
              <span className="font-medium">{Math.round(maxTemp)}°</span>
              <span className="text-gray-400"> / {Math.round(minTemp)}°</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
