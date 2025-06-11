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
import { Progress } from "@/components/ui/progress";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MenuDashboardBar from "./MenuDashboardBar";
import { ChevronRight, ChevronUp } from "lucide-react";

interface MenuItem {
  name: string;
  path: string;
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
  const projects = [
    {
      id: 1,
      title: "Sunset Villas",
      description: "Residential complex with 50 units",
      progress: 75,
    },
    {
      id: 2,
      title: "Downtown Office Tower",
      description: "32-story commercial building",
      progress: 50,
    },
    {
      id: 3,
      title: "Riverside Park",
      description: "Community park development",
      progress: 18,
    },
        {
      id: 4,
      title: "Riverside Park",
      description: "Community park development",
      progress: 18,
    },
        {
      id: 5,
      title: "Riverside Park",
      description: "Community park development",
      progress: 18,
    },
        {
      id: 6,
      title: "Riverside Park",
      description: "Community park development",
      progress: 18,
    },
  ];

  // ✅ Determine color based on progress value
  const getColorClass = (progress: number) => {
    if (progress >= 75) return { bg: "bg-green-500", border: "border-green-500", badge: "bg-green-100 text-green-700", label: "Started" };
    if (progress >= 50) return { bg: "bg-yellow-500", border: "border-yellow-500", badge: "bg-yellow-100 text-yellow-700", label: "Pending" };
    return { bg: "bg-red-500", border: "border-red-500", badge: "bg-red-100 text-red-700", label: "Unscheduled" };
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
            <SheetContent side="left" className="w-[400px] sm:w-[540px] overflow-y-scroll hide-scrollbar">
              <VisuallyHidden>
                <SheetTitle>Project Selection</SheetTitle>
                <SheetDescription>
                  List of available projects with completion status
                </SheetDescription>
              </VisuallyHidden>
              <div className="p-4 space-y-6">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="space-y-4">
                  {projects.map((project) => {
                    const { bg, border, badge, label } = getColorClass(project.progress);
                    return (
                      <div
                        key={project.id}
                        className={`border rounded-lg p-4 border-l-4 ${border}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                          <span className="text-sm font-medium">
                            {project.progress}%
                          </span>
                        </div>
                        <div className={`inline-block mb-1 text-xs px-2 py-0.5 rounded font-medium ${badge}`}>
                          {label}
                        </div>
                        <Progress value={project.progress} className={`h-2 ${bg}`} />
                      </div>
                    );
                  })}
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
              className={`w-5 h-5 transform transition-transform duration-300 ${
                showMenuBar ? "rotate-180" : "rotate-0"
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
