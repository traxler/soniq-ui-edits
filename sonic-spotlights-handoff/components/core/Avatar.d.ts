import * as React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Used for initials fallback when no src. */
  name?: string;
  size?: number;
  /** rounded square (artwork) or circle (people). */
  shape?: "rounded" | "circle";
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
