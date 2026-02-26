import { RedAccountReview } from "./cx-tab/red-account-review";

export function RedReviewTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Red Account Review</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Detailed review of at-risk accounts — analysis, Gong calls, and open issues.
        </p>
      </div>
      <RedAccountReview />
    </div>
  );
}
