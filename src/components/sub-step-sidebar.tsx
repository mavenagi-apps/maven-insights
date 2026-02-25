"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInsightsTab } from "@/components/insights-tab-context";
import type { SubStep, Step, BusinessGoal } from "@/data/business-plan";

interface SubStepSidebarProps {
  subStep: SubStep;
  step: Step;
  goal: BusinessGoal;
  isOpen: boolean;
  onClose: () => void;
  currentCompleted: boolean;
  currentText: string;
  onStatusChange: (subStepId: string, completed: boolean) => void;
  onTextChange: (subStepId: string, newText: string) => void;
}

export function SubStepSidebar({
  subStep,
  step,
  goal,
  isOpen,
  onClose,
  currentCompleted,
  currentText,
  onStatusChange,
  onTextChange,
}: SubStepSidebarProps) {
  const { setActiveTab } = useInsightsTab();
  const [editText, setEditText] = useState(currentText);
  const [isEditing, setIsEditing] = useState(false);

  // Sync edit text when the sidebar opens for a different substep
  useEffect(() => {
    setEditText(currentText);
    setIsEditing(false);
  }, [subStep.id, currentText]);

  const description =
    subStep.description ??
    `This sub-step is part of "${step.title}" and contributes to ${goal.title}. It involves completing the work described above to advance the overall goal.`;

  const handleSave = () => {
    onTextChange(subStep.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(currentText);
    setIsEditing(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 transition-opacity duration-200",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-96 flex-col bg-white shadow-xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <span className="text-sm font-semibold text-gray-500">Sub-step Detail</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="flex flex-col gap-5">
            {/* Customer chip */}
            {subStep.customerName && (
              <span className="inline-flex w-fit items-center rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700">
                {subStep.customerName}
              </span>
            )}

            {/* Step context */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Step
              </span>
              <p className="text-sm font-medium text-gray-700">{step.title}</p>
            </div>

            {/* Goal chip */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Goal
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setActiveTab("businessgoals");
                }}
                className="inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Goal {goal.number}: {goal.target}
              </button>
            </div>

            {/* Sub-step heading */}
            <h3 className="text-base font-semibold leading-snug text-gray-900">
              {currentText}
            </h3>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Description
              </span>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Status
              </span>
              <div className="flex items-center gap-2">
                {currentCompleted ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Done
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700">
                    <Circle className="h-3.5 w-3.5" />
                    To Do
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => onStatusChange(subStep.id, !currentCompleted)}
                className={cn(
                  "mt-1 w-fit rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  currentCompleted
                    ? "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200",
                )}
              >
                {currentCompleted ? "Mark as To Do" : "Mark as Done"}
              </button>
            </div>

            {/* Edit section */}
            <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                Edit this step
              </span>
              <textarea
                value={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                  if (!isEditing) setIsEditing(true);
                }}
                rows={4}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
              />
              {isEditing && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800 transition-colors"
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
