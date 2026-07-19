import * as React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
