import React from "react";
import type { SVGProps } from "react";

export function AsteriskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 21q-.425 0-.712-.288T11 20v-5.6l-3.95 3.975q-.3.3-.712.3t-.713-.3t-.3-.712t.3-.713L9.6 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11h5.6L5.625 7.05q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3L11 9.6V4q0-.425.288-.712T12 3t.713.288T13 4v5.6l3.95-3.975q.3-.3.713-.3t.712.3t.3.713t-.3.712L14.4 11H20q.425 0 .713.288T21 12t-.288.713T20 13h-5.6l3.975 3.95q.3.3.3.713t-.3.712t-.712.3t-.713-.3L13 14.4V20q0 .425-.288.713T12 21"
      ></path>
    </svg>
  );
}
