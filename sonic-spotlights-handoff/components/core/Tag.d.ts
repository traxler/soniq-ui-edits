import * as React from "react";

export interface TagProps {
  /** Active = purple fill (selected genre/filter). */
  active?: boolean;
  /** When provided, shows an × that calls this instead of onClick. */
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
