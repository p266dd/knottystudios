import React from "react";
import type { SVGProps } from "react";

export function MenuCloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M5 12H19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 12H19;M12 12H12"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="0.4s" to={0}></set>
        </path>
        <path d="M5 5L19 5M5 19L19 19" opacity={0}>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.2s"
            dur="0.4s"
            values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="0.2s" to={1}></set>
        </path>
      </g>
    </svg>
  );
}
