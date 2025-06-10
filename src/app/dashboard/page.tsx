"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Header } from "@/components/dashboard/header";
import WeatherCard from "@/components/dashboard/WeatherCard";
import CoolCalendar from "@/components/dashboard/CoolCalendar";

export default function Dashboard() {
  return (
    <>
      {/* Only the actual content; layout wraps this */}
      <div className="w-full bg-white border border-gray-200 -mt-2 rounded-md px-4 py-2 flex items-center justify-between shadow-sm">

        {/* Left side: Icon and text */}
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <div className="w-4 h-4 bg-gray-300 rounded-sm" /> {/* Placeholder for icon */}
        </div>

        {/* Right side: Customize button */}
        <button className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition">
          Customize
        </button>
      </div>

      {/* Calendar with Sidebar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Weather Section (Auto-height Card) */}
        <Card className="border-l-4 border-gray-200 shadow-sm md:col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Next Hour: Clear
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="w-full">
              <WeatherCard />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar with Sidebar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2 border-l-4 border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg text-gray-800 font-medium">
              Projects Table Schedule -{" "}
              {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CoolCalendar />
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="border border-l-4 border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-800">
                My Day for {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">No Data</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 border-l-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-800">
                My Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">No Data</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="border border-gray-200 shadow-sm border-l-4">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">
            New Billing System (Fedellis)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">No announcement content available.</p>
        </CardContent>
      </Card>

      {/* Top Grid: Clocked In + Weather */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Who is Clocked In */}
        <Card className="border border-gray-200 border-l-4 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Who is Clocked In
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Donald Dias", info: "Check Cards in 95", time: "10:15:30 PM" },
              { name: "Cesar Duma", info: "Check Cards in 95", time: "10:15:30 PM" },
            ].map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl shadow-sm hover:shadow transition"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-gray-200 shadow-sm font-bold bg-white">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.info}</p>
                  <p className="text-xs text-gray-400">{person.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>


      </div>


    </>
  );
}
