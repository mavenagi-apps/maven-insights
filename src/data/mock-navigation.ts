import {
  MessageSquare,
  BarChart3,
  Inbox,
  MessagesSquare,
  Calendar,
  Users,
  BookOpen,
  Puzzle,
  Zap,
  Settings,
  FileText,
  FlaskConical,
  TestTube2,
} from "lucide-react";
import type { NavSection } from "@/types/navigation";

export const navigationSections: NavSection[] = [
  {
    title: "EXPLORE",
    items: [
      { label: "Ask Maven", href: "/ask", icon: MessageSquare },
      { label: "Insights", href: "/insights", icon: BarChart3, isActive: true },
      { label: "Inbox", href: "/inbox", icon: Inbox },
      { label: "Conversations", href: "/conversations", icon: MessagesSquare },
      { label: "Events", href: "/events", icon: Calendar },
      { label: "Users", href: "/users", icon: Users },
    ],
  },
  {
    title: "CUSTOMIZE",
    items: [
      { label: "Knowledge", href: "/knowledge", icon: BookOpen },
      { label: "Integrations", href: "/integrations", icon: Puzzle },
      { label: "Capabilities", href: "/capabilities", icon: Zap },
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Instructions", href: "/instructions", icon: FileText },
    ],
  },
  {
    title: "BUILD",
    items: [
      { label: "Simulator", href: "/simulator", icon: FlaskConical },
      { label: "Test suites", href: "/test-suites", icon: TestTube2 },
    ],
  },
];
