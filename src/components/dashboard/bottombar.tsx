import React from "react";
import {
  MessageCircle,
  User,
  Users,
  FileText,
  Home,
  Calendar,
  Clock,
  RefreshCcw,
  Search,
} from "lucide-react";

const IconWithTooltip = ({ icon: Icon, label }: { icon: any; label: string }) => {
  return (
    <div className="relative group flex flex-col items-center z-10">
      <Icon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />

      {/* Floating tooltip */}
      <div className="pointer-events-none fixed bottom-12 group-hover:opacity-100 opacity-0 transition-opacity duration-200 z-50 text-center">
        <div className="px-2 py-1 rounded bg-black text-white text-[11px] shadow-md inline-block">
          {label}
        </div>
        <div className="w-2 h-2 bg-black rotate-45 mx-auto mt-[-2px]"></div>
      </div>
    </div>
  );
};


export const Bottombar = () => {
  return (
    <footer className="sticky bottom-0 z-40 w-full bg-white shadow-md border-t text-sm">
      <div className="flex flex-wrap items-center justify-between px-3 py-1 overflow-hidden">

        {/* Left Icons */}
        <div className="flex items-center gap-4 ">
          <IconWithTooltip icon={MessageCircle} label="Messages" />
          <IconWithTooltip icon={User} label="Profile" />
          <IconWithTooltip icon={Users} label="Team" />
          <IconWithTooltip icon={FileText} label="Documents" />
          <IconWithTooltip icon={Home} label="Home" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-7 pr-2 py-[5px] text-xs w-36 md:w-52 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Ask Clark */}
          <span className="text-gray-700 hidden md:inline whitespace-nowrap">Ask anything</span>

          {/* Action Icons */}
          <IconWithTooltip icon={Calendar} label="Calendar" />
          <IconWithTooltip icon={Clock} label="Time" />
          <IconWithTooltip icon={RefreshCcw} label="Refresh" />
        </div>
      </div>
    </footer>
  );
};
