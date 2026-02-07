"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImpactTab } from "./impact-tab/impact-tab";

export function InsightsTabs() {
  return (
    <Tabs defaultValue="impact" className="w-full">
      <TabsList className="h-auto w-full justify-start gap-1 rounded-none border-b border-border-subtle bg-transparent p-0 px-6">
        <TabsTrigger
          value="impact"
          className="rounded-none border-b-2 border-transparent px-3 pb-2 pt-2 text-sm font-medium text-muted-foreground data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
        >
          Impact
        </TabsTrigger>
        <TabsTrigger
          value="customers"
          className="rounded-none border-b-2 border-transparent px-3 pb-2 pt-2 text-sm font-medium text-muted-foreground data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
        >
          Customers
        </TabsTrigger>
        <TabsTrigger
          value="quality"
          className="rounded-none border-b-2 border-transparent px-3 pb-2 pt-2 text-sm font-medium text-muted-foreground data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
        >
          Quality
        </TabsTrigger>
        <TabsTrigger
          value="team"
          className="rounded-none border-b-2 border-transparent px-3 pb-2 pt-2 text-sm font-medium text-muted-foreground data-[state=active]:border-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
        >
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="impact" className="mt-0">
        <ImpactTab />
      </TabsContent>
      <TabsContent value="customers" className="mt-0 p-10">
        <p className="text-muted-foreground">Customers tab coming soon...</p>
      </TabsContent>
      <TabsContent value="quality" className="mt-0 p-10">
        <p className="text-muted-foreground">Quality tab coming soon...</p>
      </TabsContent>
      <TabsContent value="team" className="mt-0 p-10">
        <p className="text-muted-foreground">Team tab coming soon...</p>
      </TabsContent>
    </Tabs>
  );
}
