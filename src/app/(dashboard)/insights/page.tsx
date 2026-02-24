import { Suspense } from "react";
import { InsightsContent } from "./insights-content";

export default function InsightsPage() {
  return (
    <Suspense>
      <InsightsContent />
    </Suspense>
  );
}
