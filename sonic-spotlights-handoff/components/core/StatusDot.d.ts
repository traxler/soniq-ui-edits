import * as React from "react";

export interface StatusDotProps {
  tone?: "neutral" | "positive" | "voice" | "inferred" | "danger";
  /** Adds a calm pulsing ring (campaign live / sending). `pulse` is an alias. */
  live?: boolean;
  pulse?: boolean;
  size?: number;
  label?: string;
  style?: React.CSSProperties;
}

export function StatusDot(props: StatusDotProps): JSX.Element;
