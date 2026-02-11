import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { InsightsTabProvider } from "@/components/insights-tab-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <InsightsTabProvider>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <SidebarInset className="overflow-auto">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </InsightsTabProvider>
  );
}
