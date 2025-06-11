import React, { useEffect, useState } from "react";
import {
  FolderKanban, Wallet, Users, FileText, Settings,
  Bug, HelpCircle, Lightbulb, Star, StarOff
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
  name: string;
  path: string;
}

interface MenuSection {
  icon: React.ReactNode;
  name: string;
  items: MenuItem[];
}

interface MenuDashboardBarProps {
  onClose: () => void;
  favorites: MenuItem[];
  toggleFavorite: (item: MenuItem) => void;
}

const menuSections: MenuSection[] = [
  {
    icon: <FolderKanban className="w-5 h-5" />,
    name: "Project Management",
    items: [
      { name: "Projects", path: "/project" },
      { name: "Daily Logs", path: "/daily-logs" },
      { name: "Schedule", path: "/schedule" },
      { name: "To-Do's", path: "/todos" },
      { name: "Work Orders", path: "/work-orders" },
      { name: "Inspections", path: "/inspections" },
      { name: "Punchlists", path: "/punchlists" },
      { name: "Service Tickets", path: "/service-tickets" },
      { name: "Permits", path: "/permits" },
    ],
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    name: "Financials",
    items: [
      { name: "Estimates", path: "/estimates" },
      { name: "Bid Manager", path: "/bid-manager" },
      { name: "Change Orders", path: "/change-orders" },
      { name: "Invoices", path: "/invoices" },
      { name: "Payments", path: "/payments" },
      { name: "Expenses", path: "/expenses" },
      { name: "Purchase Orders", path: "/purchase-orders" },
      { name: "Sub-Contracts", path: "/sub-contracts" },
      { name: "Bills", path: "/bills" },
      { name: "Transaction Log", path: "/transaction-log" },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    name: "People",
    items: [
      { name: "Directory", path: "/directory" },
      { name: "Opportunities", path: "/opportunities" },
      { name: "Time Cards", path: "/time-cards" },
      { name: "Leads", path: "/leads" },
      { name: "Calendar", path: "/calendar" },
      { name: "Crew Schedule", path: "/crew-schedule" },
      { name: "Incidents", path: "/incidents" },
      { name: "Safety Meetings", path: "/safety-meetings" },
    ],
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "Documents",
    items: [
      { name: "Files & Photos", path: "/files-photos" },
      { name: "Reports", path: "/reports" },
      { name: "Forms & Checklists", path: "/forms-checklists" },
      { name: "RFI & Notices", path: "/rfi-notices" },
      { name: "Submittals", path: "/submittals" },
      { name: "Vehicle Logs", path: "/vehicle-logs" },
      { name: "Equipment Logs", path: "/equipment-logs" },
      { name: "Notes", path: "/notes" },
      { name: "Send Email", path: "/send-email" },
      { name: "Document Writer", path: "/document-writer" },
    ],
  },
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Settings & Support",
    items: [
      { name: "Settings", path: "/settings" },
      { name: "Enable/Disable Features", path: "/features" },
      { name: "Cost Items Database", path: "/cost-items" },
      { name: "Trainings", path: "/trainings" },
      { name: "Support", path: "/support" },
    ],
  },
];

const MAX_FAVORITES = 5;

const MenuDashboardBar = ({ onClose, favorites, toggleFavorite }: MenuDashboardBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    // Add a small delay to ensure the animation works
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleFavorite = (item: MenuItem) => {
    if (favorites.some(fav => fav.name === item.name)) {
      toggleFavorite(item);
    } else if (favorites.length < MAX_FAVORITES) {
      toggleFavorite(item);
    } else {
      // You can add a toast notification here if you want
      alert(`You can only have ${MAX_FAVORITES} favorites`);
    }
  };

  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 top-27 z-40 bg-black/20" onClick={onClose} />

      <div
        className={`fixed top-27 left-0 w-full bg-white shadow-lg z-40 border-b transition-transform duration-300 ease-in-out transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex justify-around overflow-x-auto mt-6 px-6 pb-3 gap-8">
          {menuSections.map((section) => (
            <div key={section.name} className="min-w-[180px]">
              <div className="flex items-center gap-2 font-semibold mb-2">
                {section.icon}
                <span>{section.name}</span>
              </div>
              <ul className="space-y-1 text-sm">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center group px-1 hover:px-2 duration-200 rounded-sm hover:border-l-2 hover:border-r-2 hover:border-amber-400"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link href={item.path} className="hover:underline">{item.name}</Link>
                    <div className="flex gap-1">

                      {item.name === "Projects" && (
                        <Link href="/dashboard/createproject">
                          <span className="text-amber-500 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </span>
                        </Link>
                      )}

                      <button
                        onClick={() => handleToggleFavorite(item)}
                        className={`transition-opacity duration-200 ${favorites.some(fav => fav.name === item.name)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <Star
                          className={`w-4 h-4 ${favorites.some(fav => fav.name === item.name)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                            }`}
                        />
                      </button>
                    </div>

                  </li>
                ))}

              </ul>
            </div>
          ))}
        </div>

        <div className="w-full bg-gray-50 border-t border-gray-200 flex justify-around items-center py-3 text-sm text-gray-700">
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition">
            <Bug className="w-4 h-4 text-orange-500" />
            <span>Submit an Issue</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>What's New</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition">
            <Lightbulb className="w-4 h-4 text-orange-500" />
            <span>Make a Suggestion</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDashboardBar;
