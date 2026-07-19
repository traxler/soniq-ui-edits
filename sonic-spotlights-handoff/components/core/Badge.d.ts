import * as React from "react";

export interface BadgeProps {
  /** neutral · voice (purple) · positive (emerald) · inferred (amber) · danger (red) */
  tone?: "neutral" | "voice" | "positive" | "inferred" | "danger";
  /** soft = filled pill · outline = mono uppercase hairline tag (UNVERIFIED, PRESS, DRAFT…) */
  variant?: "soft" | "outline";
  /** Leading status dot (soft variant only). */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
