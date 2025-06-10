"use client"

import * as React from "react"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Progress } from "@/components/ui/progress"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useState } from "react"
import MenuDashboardBar from "./MenuDashboardBar"
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"

export function NavigationMenuDemo() {
    const [showMenuBar, setShowMenuBar] = useState(false)
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
            progress: 42,
        },
        {
            id: 3,
            title: "Riverside Park",
            description: "Community park development",
            progress: 18,
        },
    ]



    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const colorClasses = [
        { bg: 'bg-blue-500', border: 'border-blue-500' },
        { bg: 'bg-green-500', border: 'border-green-500' },
        { bg: 'bg-yellow-500', border: 'border-yellow-500' },
        { bg: 'bg-red-500', border: 'border-red-500' },
        { bg: 'bg-purple-500', border: 'border-purple-500' },
        { bg: 'bg-pink-500', border: 'border-pink-500' },
        { bg: 'bg-indigo-500', border: 'border-indigo-500' },
        { bg: 'bg-teal-500', border: 'border-teal-500' },
        { bg: 'bg-orange-500', border: 'border-orange-500' },
    ];

    const getRandomColor = () => {
        return colorClasses[Math.floor(Math.random() * colorClasses.length)];
    };


    return (
        <>
            {showMenuBar && <MenuDashboardBar onClose={() => setShowMenuBar(false)} />}
            <div className="flex items-center gap-2">
                <div className="list-none">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <button
                                className="border-l-2 border-amber-400 px-4 py-2 rounded-xl font-medium bg-white hover:bg-amber-50 transition flex items-center gap-2 text-gray-700"
                            >
                                <span>Select Project</span>
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform duration-300 ${isSheetOpen ? "rotate-90" : "rotate-0"}`}
                                />
                            </button>

                        </SheetTrigger>
                        <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                            <VisuallyHidden>
                                <SheetTitle>Project Selection</SheetTitle>
                                <SheetDescription>
                                    List of available projects with completion status
                                </SheetDescription>
                            </VisuallyHidden>

                            <div className="p-4 space-y-6">
                                <h2 className="text-2xl font-bold" aria-hidden="true">Projects</h2>
                                <div className="space-y-4">
                                    {projects.map((project) => {
                                        const { bg, border } = getRandomColor();

                                        return (
                                            <div
                                                key={project.id}
                                                className={`border cursor-pointer rounded-lg p-4 hover:shadow-md transition-shadow duration-200 border-l-4 ${border}`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-medium">{project.title}</h3>
                                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                                    </div>
                                                    <span className="text-sm font-medium">{project.progress}%</span>
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

                {/* Remove the old Menu Dashboard NavigationMenuItem and replace with a button */}
                <li className="list-none">
                    <button
                        onClick={() => setShowMenuBar(prev => !prev)}
                        className="border-l-2 border-amber-400 px-4 py-2 rounded-xl font-medium bg-white hover:bg-amber-50 transition flex items-center gap-2"
                    >
                        <span>Menu</span>

                        <span
                            className="transition-transform duration-300 flex items-center"
                        >
                            <ChevronUp className={`w-5 h-5 transform transition-transform duration-300 ${showMenuBar ? "rotate-180" : "rotate-0"
                                }`} />

                        </span>
                    </button>
                </li>
            </div>
        </>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <Link href={href}>
                <div className="text-sm leading-none font-medium">{title}</div>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {children}
                </p>
            </Link>
        </li>
    )
}