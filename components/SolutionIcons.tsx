import { Link2, Rocket, Search, Settings2 } from "lucide-react";

const iconProps = {
  className: "sol-icon-lucide",
  size: 24 as const,
  strokeWidth: 1.75,
};

export function SolIconReview() {
  return <Search {...iconProps} />;
}

export function SolIconAutomation() {
  return <Settings2 {...iconProps} />;
}

export function SolIconOwnership() {
  return <Link2 {...iconProps} />;
}

export function SolIconImplementation() {
  return <Rocket {...iconProps} />;
}
