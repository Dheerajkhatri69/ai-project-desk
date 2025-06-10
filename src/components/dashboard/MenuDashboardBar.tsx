import React, { useEffect, useState } from "react";
import { FolderKanban, Wallet, Users, FileText, Settings, X, Lightbulb, HelpCircle, Bug } from "lucide-react";

const menuSections = [
  {
    icon: <FolderKanban className="w-5 h-5" />,
    name: "Project Management",
    items: [
      "Projects",
      "Daily Logs",
      "Schedule",
      "To-Do's",
      "Work Orders",
      "Inspections",
      "Punchlists",
      "Service Tickets",
      "Permits",
    ],
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    name: "Financials",
    items: [
      "Estimates",
      "Bid Manager",
      "Change Orders",
      "Invoices",
      "Payments",
      "Expenses",
      "Purchase Orders",
      "Sub-Contracts",
      "Bills",
      "Transaction Log",
    ],
  },
  {
    icon: <Users className="w-5 h-5" />,
    name: "People",
    items: [
      "Directory",
      "Opportunities",
      "Time Cards",
      "Leads",
      "Calendar",
      "Crew Schedule",
      "Incidents",
      "Safety Meetings",
    ],
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "Documents",
    items: [
      "Files & Photos",
      "Reports",
      "Forms & Checklists",
      "RFI & Notices",
      "Submittals",
      "Vehicle Logs",
      "Equipment Logs",
      "Notes",
      "Send Email",
      "Document Writer",
    ],
  },
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Settings & Support",
    items: [
      "Settings",
      "Enable/Disable Features",
      "Cost Items Database",
      "Trainings",
      "Support",
    ],
  },
];

const MenuDashboardBar = ({ onClose }: { onClose?: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed left-0 right-0 bottom-0 top-25 z-40 bg-black/20"
        onClick={onClose}
        aria-label="Close menu dashboard"
      />
      {/* Bar */}
      <div
        className={`fixed top-25 left-0 w-full bg-white shadow-lg z-50 border-b transform transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex justify-between items-center px-6 py-3">

        </div>
        <div className="flex justify-around overflow-x-auto px-6 pb-3 gap-8">
          {menuSections.map((section) => (
            <div key={section.name} className="min-w-[180px]">
              <div className="flex items-center gap-2 font-semibold mb-2">
                {section.icon}
                <span>{section.name}</span>
              </div>
              <ul className="space-y-1 text-sm">
                {section.items.map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">{item}</li>
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