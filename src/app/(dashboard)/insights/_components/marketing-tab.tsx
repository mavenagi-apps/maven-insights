import { FunctionBusinessPlan } from "@/components/function-business-plan";

export function MarketingTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <FunctionBusinessPlan functionTab="marketing" />
    </div>
  );
}
