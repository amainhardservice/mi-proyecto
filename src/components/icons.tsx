import type { SVGProps } from "react";

export function AcroYogaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 14c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 1.3 0 1.9-.5 2.5-1" />
      <path d="M12 11c-2 0-2.5-1.5-5-1.5-2.5 0-2.5 1.5-5 1.5" />
      <path d="M12 11c2 0 2.5-1.5 5-1.5 2.5 0 2.5 1.5 5 1.5" />
      <path d="M7 13c0-2-1-3.5-3-5" />
      <path d="M17 13c0-2 1-3.5 3-5" />
      <circle cx="12" cy="6.5" r="2.5" />
    </svg>
  );
}
