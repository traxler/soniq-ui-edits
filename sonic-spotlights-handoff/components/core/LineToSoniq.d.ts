import * as React from "react";

export interface SoniqActivityEvent {
  /** Headline, e.g. "Drafted your first pitch". */
  h: string;
  /** Mono meta line, e.g. "14s ago · from your preview". */
  m?: string;
}

/**
 * The single global "talk to Soniq + see what it's doing" panel (Rule 4) — collapsed
 * to a thin edge by default, expands to Activity + Ask tabs. ⌘K is separate.
 */
export interface LineToSoniqProps {
  activity?: SoniqActivityEvent[];
  /** Day-0 Welcome opens to Activity; collapsed everywhere else. */
  defaultOpen?: boolean;
  defaultTab?: "activity" | "ask";
  /** Live dot turns red while sends are paused/bounced. */
  paused?: boolean;
  style?: React.CSSProperties;
}

export function LineToSoniq(props: LineToSoniqProps): JSX.Element;
