import * as React from "react";

/**
 * The brand's circular FIT score — a mono number inside a purple ring. The visual
 * signature of "the system being exact." Fit is always a separate signal from
 * verification; never merge the number with a verified/unverified badge.
 *
 * @startingPoint section="Brand" subtitle="Circular fit-confidence score" viewport="700x150"
 */
export interface ConfidenceMeterProps {
  /** 0–100. Shown for scored / muted states. */
  value?: number;
  /** Mono unit label (e.g. "fit", "match"). Only rendered when showLabel. */
  label?: string;
  showLabel?: boolean;
  /** scored (purple) · muted (grey) · nodata (dashed "—") · error (red "!"). */
  state?: "scored" | "muted" | "nodata" | "error";
  /** Circle diameter in px (default 44). */
  size?: number;
  style?: React.CSSProperties;
}

export function ConfidenceMeter(props: ConfidenceMeterProps): JSX.Element;
