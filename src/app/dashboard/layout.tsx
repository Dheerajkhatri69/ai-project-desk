// /app/dashboard/layout.tsx
import { ReactNode } from "react";
import { Header } from "@/components/dashboard/header";
import { Bottombar } from "@/components/dashboard/bottombar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col gap-4 p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Bottombar/>
    </div>
  );
}
