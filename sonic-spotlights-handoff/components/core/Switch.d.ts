import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
