"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircleMore, CircleChevronUp, Video, Lightbulb, Settings, CircleChevronDown, RefreshCcw, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./nevigationbar";
import MenuDashboardBar from "./MenuDashboardBar";
import { useState } from "react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../ui/menubar";

export function Header() {
    const [showMenuBar, setShowMenuBar] = useState(false);
    return (
        <>
            {showMenuBar && <MenuDashboardBar onClose={() => setShowMenuBar(false)} />}
            <header className="sticky top-0 z-50 w-full bg-white shadow-md ">

                {/* ⚪ White Control Bar */}
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Left Side - Logo & Navigation */}
                    <div className="flex items-center gap-4">
                        {/* Logo */}
                        {/* <div className="font-bold text-lg">Logo</div> */}
                        <div className="flex justify-center ">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-28 h-auto object-contain"
                            />
                        </div>

                        {/* Navigation */}
                        <NavigationMenuDemo />
                    </div>

                    {/* Right Side - User Info & Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Live Chat */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="relative flex items-center gap-1 overflow-hidden border-l-4 border-r-4 border-amber-400 transition-all duration-300 group"
                        >
                            {/* Animated background overlay on hover */}
                            <span className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-sm z-0" />

                            {/* Content */}
                            <div className="relative z-10 flex items-center gap-1 text-sm">
                                <MessageCircleMore className="h-4 w-4" />
                                <span className="hidden md:inline">Live chat</span>
                            </div>
                        </Button>


                        {/* User Profile */}



                        <Menubar className="border-0 shadow-none border-l-4 border-r-4 border-amber-400">
                            <MenubarMenu >
                                <MenubarTrigger>
                                    <div className="flex items-center gap-2">

                                        <div className="hidden md:flex flex-col text-center">
                                            <span className="font-medium">Addley Clapp</span>
                                            <span className="text-xs text-muted-foreground">User (030302)</span>
                                        </div>
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>AC</AvatarFallback>
                                        </Avatar>
                                    </div>

                                </MenubarTrigger>


                                <MenubarContent className="border-0 rounded-md w-52 shadow-lg">
                                    <MenubarItem className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                        <RefreshCcw className="w-4 h-4 text-muted-foreground" />
                                        Reload & Clear Cache
                                    </MenubarItem>

                                    <MenubarItem className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                        <Settings className="w-4 h-4 text-muted-foreground" />
                                        My Settings
                                    </MenubarItem>

                                    <MenubarItem className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                        <LogOut className="w-4 h-4 text-muted-foreground" />
                                        Logout
                                    </MenubarItem>
                                </MenubarContent>

                            </MenubarMenu>
                        </Menubar>

                    </div>
                </div>
                {/* 🔶 Amber Top Bar (now part of sticky header) */}
                <div className="w-full  bg-[linear-gradient(90deg,_#fe9c09,_#fe9c09,_#00b6dd,_#006eaf)] text-white py-2 px-4 text-lg font-bold tracking-wide uppercase">
                    <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                        {/* Left */}
                        <div
                            className="flex items-center gap-2 cursor-pointer select-none"
                            onClick={() => setShowMenuBar(prev => !prev)}
                        >
                            <CircleChevronUp
                                className={`w-5 h-5 transform transition-transform duration-300 ${showMenuBar ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                            <span className="transition-opacity duration-300">Dashboard</span>
                        </div>

                        {/* Center */}
                        <div className="text-center flex-1 hidden sm:block">
                            <span className="text-white">ARMSTRONG CAL BUILDERS Inc.</span>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-3">
                            <Video className="w-4 h-4 cursor-pointer hover:text-blue-200" />
                            <Lightbulb className="w-4 h-4 cursor-pointer hover:text-blue-200" />
                            <Settings className="w-4 h-4 cursor-pointer hover:text-blue-200" />
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}
