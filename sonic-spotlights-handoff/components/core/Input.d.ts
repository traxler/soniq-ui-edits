import * as React from "react";

export interface InputProps {
  label?: string;
  /** Colors the border + helper: error (red), success (emerald), inferred (amber flag). */
  status?: "error" | "success" | "inferred";
  helper?: string;
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
