import * as React from "react";

/**
 * The brand's signature entry-surface treatment (Rule 6) — crossed purple/gold beams,
 * light pools, vignette, grain. Use ONLY on acquisition / boundary surfaces (Land, Try,
 * Sign-in, Hand-off, /plan); never behind the calm working app.
 *
 * @startingPoint section="Brand" subtitle="Spotlights entry-surface atmosphere" viewport="300x560"
 */
export interface SpotlightsAtmosphereProps {
  /** Scales beam/pool opacity (0–1.5). Default 1. */
  intensity?: number;
  /** Toggle the fine grain layer. Default true. */
  grain?: boolean;
  style?: React.CSSProperties;
}

export function SpotlightsAtmosphere(props: SpotlightsAtmosphereProps): JSX.Element;
