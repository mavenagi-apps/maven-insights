"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ChevronsUpDown } from "lucide-react";
import { MavenLogo } from "@/components/maven-logo";
import { useInsightsTab } from "@/components/insights-tab-context";
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
} from "@/components/ui/sidebar";

const COMPANY_TABS = ["businessgoals"] as const;
const FUNCTION_TABS = ["marketing", "sales", "solutions", "cx", "product"] as const;

export function AppSidebar() {
  const router = useRouter();
  const { activeTab, setActiveTab, tabs } = useInsightsTab();

  const getTabLabel = (value: string) =>
    tabs.find((t) => t.value === value)?.label ?? value;

  const handleTabClick = useCallback(
    (value: Parameters<typeof setActiveTab>[0]) => {
      setActiveTab(value);
      const params = new URLSearchParams();
      params.set("tab", value);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, setActiveTab]
  );

  return (
    <Sidebar className="border-r border-border-subtle">
      <SidebarHeader className="px-4 pt-6 pb-2">
        <MavenLogo className="mb-4" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="w-full justify-between rounded-md"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
                  MD
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Maven Dashboard</span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Company */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground font-semibold">Company</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {COMPANY_TABS.map((value) => (
                <SidebarMenuItem key={value}>
                  <SidebarMenuButton
                    isActive={activeTab === value}
                    onClick={() => handleTabClick(value)}
                    className="cursor-pointer"
                  >
                    <span>{getTabLabel(value)}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Function */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground font-semibold">Function</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {FUNCTION_TABS.map((value) => (
                <SidebarMenuItem key={value}>
                  <SidebarMenuButton
                    isActive={activeTab === value}
                    onClick={() => handleTabClick(value)}
                    className="cursor-pointer"
                  >
                    <span>{getTabLabel(value)}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
