import * as React from "react";

export interface IconButtonProps {
  variant?: "ghost" | "voice" | "solid";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Accessible label (also the tooltip). */
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
