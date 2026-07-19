import * as React from "react";

/**
 * The surface primitive — a lighter panel on the void with hairline + soft shadow.
 *
 * @startingPoint section="Core" subtitle="Surface card with hairline & soft shadow" viewport="700x200"
 */
export interface CardProps {
  /** Lighten to the raised surface (popovers, nested panels). */
  raised?: boolean;
  /** Adds hover lift + cursor for clickable cards. */
  interactive?: boolean;
  /** Left edge accent for the active / reasoning item. */
  accent?: "none" | "voice" | "positive";
  padding?: string | number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
