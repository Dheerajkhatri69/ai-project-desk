"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MenuDashboardBar from "./MenuDashboardBar";
import { ChevronRight, ChevronUp } from "lucide-react";
import { CircularProgress } from "./CircularProgress";

interface MenuItem {
  name: string;
  path: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: "Pending" | "Bidding" | "Submittal" | "Unscheduled" | "Started" | "Completed";
  customer: string;
  type?: string;
}

interface NavigationMenuDemoProps {
  favorites: MenuItem[];
  toggleFavorite: (item: MenuItem) => void;
  showMenuBar: boolean;
  setShowMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavigationMenuDemo({
  favorites,
  toggleFavorite,
  showMenuBar,
  setShowMenuBar,
}: NavigationMenuDemoProps) {
  const projects: Project[] = [
    {
      id: 1001,
      title: "Bharti",
      description: "Bharti Khatri (Upwork)",
      progress: 50,
      status: "Pending",
      customer: "Time & Material",
    },
    {
      id: 104,
      title: "ACB104 Cabrillo HS",
      description: "Long Beach Unified School District",
      progress: 100,
      status: "Started",
      customer: "LUSD",
    },
    {
      id: 105,
      title: "ACB105 Security Gates",
      description: "Orange County Transportation Authority",
      progress: 20,
      status: "Unscheduled",
      customer: "OCTA",
    },
    {
      id: 106,
      title: "ACB106 Vincent Park Pavilion Replacement",
      description: "City of Inglewood",
      progress: 30,
      status: "Unscheduled",
      customer: "Inglewood",
    },
    {
      id: 107,
      title: "ACB107 Oak Canyon Nature Center",
      description: "City of Anaheim",
      progress: 75,
      status: "Unscheduled",
      customer: "Anaheim",
    },
  ];

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-yellow-800";
      case "Bidding":
        return "bg-blue-100 text-blue-700";
      case "Submittal":
        return "bg-gray-300 text-gray-800";
      case "Unscheduled":
        return "bg-red-100 text-red-700";
      case "Started":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getDotColor = (status: Project["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Started":
        return "bg-green-500";
      case "Unscheduled":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      {showMenuBar && (
        <MenuDashboardBar
          onClose={() => setShowMenuBar(false)}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
      <div className="flex items-center gap-2">
        {/* Project Selector */}
        <div className="list-none">
          <Sheet>
            <SheetTrigger asChild>
              <button className="border-l-2 border-amber-400 px-4 py-2 rounded-xl font-medium bg-white hover:bg-amber-50 transition flex items-center gap-2 text-gray-700">
                <span>Select Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-2">
              <VisuallyHidden>
                <SheetTitle>Project Selection</SheetTitle>
                <SheetDescription>List of available projects</SheetDescription>
              </VisuallyHidden>
              <div className="space-y-4 overflow-y-auto pr-1 hide-scrollbar">

                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-start justify-between p-3 border rounded-md bg-white shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        {/* Left dot */}
                        <span
                          className={`h-3 w-3 mt-1 rounded-full ${getDotColor(
                            project.status
                          )}`}
                        ></span>

                        <div>
                          {/* Title */}
                          <div className="text-sm font-bold text-gray-900">
                            {project.title} ({project.id})
                          </div>

                          {/* Optional type */}
                          {project.customer && (
                            <div className="inline-block mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                              {project.customer}
                            </div>
                          )}

                          {/* Description */}
                          <div className="text-xs text-gray-600 mt-0.5">
                            {project.description}
                          </div>

                          {/* Status Badge */}
                          <div
                            className={`inline-block mt-2 text-xs px-2 py-0.5 rounded font-medium border border-gray-300 ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </div>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="flex items-center">
                        <CircularProgress
                          value={project.progress}
                          size={40}
                          stroke={5}
                          color={
                            project.status === "Started"
                              ? "#10b981"
                              : project.status === "Pending"
                                ? "#facc15"
                                : "#ef4444"
                          }
                        />
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Menu Button with Favorites */}
        <li className="list-none">
          <button
            onClick={() => setShowMenuBar((prev) => !prev)}
            className="border-l-2 border-amber-400 px-4 py-2 rounded-xl font-medium bg-white hover:bg-amber-50 transition flex items-center gap-2"
          >
            <span>Menu</span>
            <ChevronUp
              className={`w-5 h-5 transform transition-transform duration-300 ${showMenuBar ? "rotate-180" : "rotate-0"
                }`}
            />
            {favorites.map((fav) => (
              <Link
                key={fav.name}
                href={fav.path}
                className="ml-2 text-sm border-x-2 border-amber-500 px-2 rounded-sm hover:px-4 hover:bg-white duration-200"
              >
                {fav.name}
              </Link>
            ))}
          </button>
        </li>
      </div>
    </>
  );
}
