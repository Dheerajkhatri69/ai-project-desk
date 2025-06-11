import * as React from "react"
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "My Settings",
      url: "#",
      items: [
        {
          title: "My Details",
          url: "#",
          isActive: true,
        },
        {
          title: "My App Menu",
          url: "#",
        },
        {
          title: "My Preferences",
          url: "#",
        },
      ],
    },
    {
      title: "System Settings",
      url: "#",
      items: [
        {
          title: "Cost Codes",
          url: "#",
        },
        {
          title: "Custom",
          url: "#",
        },
        {
          title: "Defaults",
          url: "#",
        },
        {
          title: "Enabled/Diasble Features",
          url: "#",
        },
        {
          title: "Finalcial",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
        {
          title: "Language",
          url: "#",
        },
        {
          title: "Logs",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Roles",
          url: "#",
        },
        {
          title: "Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Modules Settings",
      url: "#",
      items: [
        {
          title: "Bid Manager",
          url: "#",
        },
        {
          title: "Bills",
          url: "#",
        },
        {
          title: "Change Orders",
          url: "#",
        },
        {
          title: "Costom Items Database",
          url: "#",
        },
        {
          title: "Crew Schedule",
          url: "#",
        },
        {
          title: "Daily Logs",
          url: "#",
        },
        {
          title: "Directory",
          url: "#",
        },
        {
          title: "Equipment Logs",
          url: "#",
        },
        {
          title: "Estimates",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Files & Photos",
          url: "#",
        },
        {
          title: "Fonts & Checklists",
          url: "#",
        },
        {
          title: "Incidents",
          url: "#",
        },
        {
          title: "Inspections",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Leads",
          url: "#",
        },
        {
          title: "Notes",
          url: "#",
        },
        {
          title: "Opportunities",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Punchlists",
          url: "#",
        },
        {
          title: "Purchase Orders",
          url: "#",
        },
        {
          title: "RFI & Notices",
          url: "#",
        },
        {
          title: "Safety Meetings",
          url: "#",
        },
        {
          title: "Service Tickets",
          url: "#",
        },
        {
          title: "Sub-Contracts",
          url: "#",
        },
        {
          title: "Submittals",
          url: "#",
        },
        {
          title: "Time Cards",
          url: "#",
        },
        {
          title: "To-Do's",
          url: "#",
        },
        {
          title: "Vehicle Logs",
          url: "#",
        },
        {
          title: "Work Orders",
          url: "#",
        },
      ],
    },
    {
      title: "Subscriptions Details",
      url: "#",
      items: [
         {
          title: "Details",
          url: "#",
        }
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} >
      <SidebarHeader>

        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent className="gap-0 mt-24 mb-10">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-lg border-l-4 border-amber-500"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 " />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title} className="pl-4">
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
