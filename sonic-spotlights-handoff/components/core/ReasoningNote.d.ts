import * as React from "react";

/**
 * Surfaces Soniq's "why" — voice (purple) explains a match; inferred (amber) flags a
 * guessed value. Optional mono citation. The brand's transparency / trust mechanism.
 *
 * @startingPoint section="Brand" subtitle="AI reasoning note with citations" viewport="700x160"
 */
export interface ReasoningNoteProps {
  /** voice = reasoning (purple) · inferred = guessed value flag (amber). */
  tone?: "voice" | "inferred";
  /** Terse mono citation line, e.g. "cites 3 sources · cached 2h ago". */
  citation?: string;
  /** Override the uppercase eyebrow. */
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ReasoningNote(props: ReasoningNoteProps): JSX.Element;
