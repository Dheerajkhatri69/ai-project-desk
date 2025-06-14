import { AppSidebar } from "@/components/setting/nevbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main className="p-0">
        <SidebarTrigger className="fixed top-30 z-50" />
        {children}
      </main>
    </SidebarProvider>
  )
}