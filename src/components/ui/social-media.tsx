"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SocialIcon } from "./SocialIcon";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  iconName: string;
  color: string;
}

export interface SocialTooltipProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("social-tooltip-list", className)}
      {...props}
    >
      {items.map((item) => {
        const isExternal = item.href.startsWith("http");

        return (
          <li
            key={item.href}
            className="social-tooltip-item"
            style={{ "--social-color": item.color } as React.CSSProperties}
          >
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              className="social-tooltip-link"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <span className="social-tooltip-fill" aria-hidden="true" />
              <SocialIcon
                name={item.iconName}
                className="social-tooltip-icon"
              />
            </a>
            <span className="social-tooltip-label" aria-hidden="true">
              {item.tooltip}
            </span>
          </li>
        );
      })}
    </ul>
  ),
);

SocialTooltip.displayName = "SocialTooltip";

export { SocialTooltip };
export default SocialTooltip;
