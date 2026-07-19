import * as React from "react";

/**
 * The one-decision rule lives here: `primary` is the single Laser-Yellow action
 * (one per screen; none on utility/auth or reference surfaces); `secondary` is the
 * everyday outlined Electric-Purple action. There is no emerald button.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost & destructive" viewport="700x150"
 */
export interface ButtonProps {
  /** primary = the one yellow action (max 1/screen) · secondary = outlined purple · ghost · destructive (red fill) */
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  /** sm 36 · md 44 · lg 52 · xl 60 (px). md and up meet the 44px touch target. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Swaps label to a working spinner and disables the control. */
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
