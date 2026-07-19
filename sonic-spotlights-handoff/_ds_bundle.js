/* @ds-bundle: {"format":3,"namespace":"SonicSpotlightsDesignSystem_b87f31","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"ConfidenceMeter","sourcePath":"components/core/ConfidenceMeter.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"LineToSoniq","sourcePath":"components/core/LineToSoniq.jsx"},{"name":"ReasoningNote","sourcePath":"components/core/ReasoningNote.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"SpotlightsAtmosphere","sourcePath":"components/core/SpotlightsAtmosphere.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ae810f6cff06","components/core/Badge.jsx":"651d50fddd18","components/core/Button.jsx":"b0c3b3be38fb","components/core/Card.jsx":"16ffc2dbf91f","components/core/Checkbox.jsx":"9f1954be5ffc","components/core/ConfidenceMeter.jsx":"df81154aca7d","components/core/IconButton.jsx":"6c3c9443995c","components/core/Input.jsx":"32f39045b71c","components/core/LineToSoniq.jsx":"7c135cbf3e0b","components/core/ReasoningNote.jsx":"7d02db8fd296","components/core/Select.jsx":"29ae1dd1a2c1","components/core/SpotlightsAtmosphere.jsx":"9898b5067c2f","components/core/StatusDot.jsx":"680400f5bd2d","components/core/Switch.jsx":"5b0f8d68a8b4","components/core/Tag.jsx":"99f243bbf2b5","ui_kits/app/AnalysisFailed.jsx":"b496a81feb25","ui_kits/app/AppShell.jsx":"67c9120d1c12","ui_kits/app/Bounced.jsx":"05f884370c48","ui_kits/app/Cadence.jsx":"3730b5144001","ui_kits/app/ConfirmBeforePitch.jsx":"22b3c230a08b","ui_kits/app/Context.jsx":"a0e2e5bf5fd3","ui_kits/app/Discovery.jsx":"d19b7dc6f5f4","ui_kits/app/Glance.jsx":"6b566d5c0cd2","ui_kits/app/Media.jsx":"2a8b5f240f5f","ui_kits/app/Plan.jsx":"fb08d87b3509","ui_kits/app/Privacy.jsx":"a39bc02c56fe","ui_kits/app/ReasoningDrawer.jsx":"21fa8a1fe8c3","ui_kits/app/Receipt.jsx":"db04686cfd5c","ui_kits/app/Reviewer.jsx":"2672b47f9bbb","ui_kits/app/TermsGate.jsx":"5af892e25e8d","ui_kits/app/Welcome.jsx":"92bccebcb9de","ui_kits/app/data.js":"5c1ffc8c2e17","ui_kits/mobile/HandOff.jsx":"96c033f8b94b","ui_kits/mobile/Land.jsx":"9c78e462d496","ui_kits/mobile/MobileContext.jsx":"3389af6e8eb3","ui_kits/mobile/MobileWorkspace.jsx":"d14c21ecfeb4","ui_kits/mobile/PhoneFrame.jsx":"24b6564dce33","ui_kits/mobile/SignIn.jsx":"31c29dd29b46","ui_kits/mobile/Try.jsx":"974840434015"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SonicSpotlightsDesignSystem_b87f31 = window.SonicSpotlightsDesignSystem_b87f31 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — rounded-square image for album art / curator artwork, or a circle for people.
 * Falls back to initials on a surface when no src.
 */
function Avatar({
  src,
  alt = "",
  name = "",
  size = 40,
  shape = "rounded",
  style,
  ...rest
}) {
  const radius = shape === "circle" ? "var(--radius-pill)" : "var(--radius-sm)";
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--surface-raised)",
      border: "1px solid var(--border)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: size * 0.36,
      color: "var(--text-secondary)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : initials || "♪");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status marker. Two shapes:
 *   variant="soft" (default) — a filled pill (Figtree), for live/draft status.
 *   variant="outline"        — a mono, uppercase, hairline tag (UNVERIFIED, PRESS,
 *                              YOU ADDED, BOUNCED, DRAFT) — the deck's `.tag` style.
 * Tones map to the semantic palette. `dot` adds a leading status dot (soft only).
 */
function Badge({
  tone = "neutral",
  variant = "soft",
  children,
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-secondary)",
      bg: "var(--surface-raised)",
      bd: "var(--line-soft)"
    },
    voice: {
      color: "var(--purple-400)",
      bg: "var(--voice-quiet)",
      bd: "rgba(124,58,237,.4)"
    },
    positive: {
      color: "var(--positive)",
      bg: "var(--positive-soft)",
      bd: "rgba(52,211,153,.4)"
    },
    inferred: {
      color: "var(--inferred)",
      bg: "var(--inferred-soft)",
      bd: "rgba(245,166,35,.5)"
    },
    danger: {
      color: "var(--danger)",
      bg: "var(--danger-soft)",
      bd: "rgba(239,68,68,.5)"
    }
  };
  const t = tones[tone] || tones.neutral;
  if (variant === "outline") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        height: 18,
        padding: "0 7px",
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: t.color,
        background: "transparent",
        border: `1px solid ${t.bd}`,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 9px",
      fontFamily: "var(--font-heading)",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      color: t.color,
      background: t.bg,
      border: `1px solid ${tone === "neutral" ? "var(--border)" : "transparent"}`,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: t.color,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Sonic Spotlights
 *
 * The one-decision rule lives here. `primary` is the single Laser-Yellow action —
 * at most ONE per screen, and NONE on utility/auth or reference surfaces. `secondary`
 * (outlined Electric Purple) is the everyday action and appears freely. `ghost` is the
 * quiet tertiary; `destructive` (red fill) is for irreversible confirmations only.
 *
 * There is NO emerald button — emerald is a status color, never an action.
 */
function Button({
  variant = "secondary",
  size = "md",
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 13px",
      fontSize: 13,
      gap: 6
    },
    md: {
      height: 44,
      padding: "0 18px",
      fontSize: 14,
      gap: 8
    },
    lg: {
      height: 52,
      padding: "0 24px",
      fontSize: 16,
      gap: 10
    },
    xl: {
      height: 60,
      padding: "0 30px",
      fontSize: 17,
      gap: 11
    }
  };
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const base = {
    primary: {
      background: "var(--action)",
      color: "var(--action-ink)",
      border: "1px solid transparent",
      fontWeight: 700,
      boxShadow: "var(--action-glow)"
    },
    secondary: {
      background: "transparent",
      color: "var(--purple-400)",
      border: "1.5px solid var(--purple-500)",
      fontWeight: 600
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--line)",
      fontWeight: 600
    },
    destructive: {
      background: "var(--red-600)",
      color: "#fff",
      border: "1px solid transparent",
      fontWeight: 600
    }
  };
  const hov = {
    primary: {
      filter: "brightness(1.06)"
    },
    secondary: {
      background: "var(--purple-500)",
      color: "#fff"
    },
    ghost: {
      background: "var(--border-faint)",
      color: "var(--text-primary)"
    },
    destructive: {
      filter: "brightness(1.08)"
    }
  };
  const v = base[variant] || base.secondary;
  const isDisabled = disabled || loading;
  const hoverStyle = !isDisabled && hover ? hov[variant] : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: isDisabled,
    "data-variant": variant,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: "var(--font-heading)",
      lineHeight: 1,
      letterSpacing: "-0.005em",
      borderRadius: "var(--r-md)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.42 : 1,
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...v,
      ...hoverStyle,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = variant === "primary" ? "var(--action-glow)" : "none";
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap
    }
  }, /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement("span", null, "Working\u2026")) : /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight));
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "var(--radius-pill)",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "ss-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes ss-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the surface primitive. Sits on the void as a lighter surface with a 1px
 * hairline and soft shadow. `raised` lightens further; `interactive` adds hover lift;
 * `accent="voice"` adds a purple left edge to mark the active / reasoning item.
 */
function Card({
  raised = false,
  interactive = false,
  accent = "none",
  padding = "var(--sp-lg)",
  children,
  onClick,
  style,
  ...rest
}) {
  const accentBorder = accent === "voice" ? "var(--voice)" : accent === "positive" ? "var(--positive)" : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: "relative",
      background: raised ? "var(--bg-raised)" : "var(--bg-surface)",
      border: "1px solid var(--border)",
      borderLeft: accentBorder ? `3px solid ${accentBorder}` : "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding,
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = "var(--border)";
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/**
 * Checkbox — square, 4px radius. Checked = purple voice with a white check.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style
}) {
  const boxId = id || `ss-check-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: boxId,
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    onClick: () => {
      if (!disabled && onChange) onChange(!checked);
    },
    disabled: disabled,
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: checked ? "1px solid var(--voice)" : "1px solid var(--border-strong)",
      background: checked ? "var(--voice)" : "var(--bg-sunken)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      padding: 0
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/ConfidenceMeter.jsx
try { (() => {
/**
 * ConfidenceMeter — the brand's circular FIT score. A mono number inside a purple
 * ring: "the system being exact." Fit (Soniq's analysis) is ALWAYS a separate signal
 * from verification — never merge a fit number with a verified/unverified badge.
 *
 * States:
 *   scored  — purple ring + number (default)
 *   muted   — grey ring (lower-confidence / secondary)
 *   nodata  — dashed ring, shows "—" (nothing to analyze; never fabricate a number)
 *   error   — red ring, shows "!" (analysis failed)
 */
function ConfidenceMeter({
  value = 0,
  label = "fit",
  showLabel = false,
  state = "scored",
  size = 44,
  style
}) {
  const rings = {
    scored: {
      border: "2px solid var(--purple-500)",
      color: "var(--purple-400)",
      dashed: false
    },
    muted: {
      border: "2px solid #888",
      color: "#cfcfd4",
      dashed: false
    },
    nodata: {
      border: "2px solid var(--line)",
      color: "var(--faint)",
      dashed: true
    },
    error: {
      border: "2px solid rgba(239,68,68,.6)",
      color: "var(--red-500)",
      dashed: false
    }
  };
  const r = rings[state] || rings.scored;
  const glyph = state === "nodata" ? "—" : state === "error" ? "!" : value;
  const numSize = Math.round(size * 0.34);
  const circle = /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": state === "scored" || state === "muted" ? `${value} ${label}` : state === "nodata" ? "no fit data" : "analysis failed",
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: r.border,
      borderStyle: r.dashed ? "dashed" : "solid",
      color: r.color,
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: numSize,
      display: "inline-grid",
      placeItems: "center",
      lineHeight: 1
    }
  }, glyph);
  if (!showLabel) return style ? /*#__PURE__*/React.createElement("span", {
    style: style
  }, circle) : circle;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, circle, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-meta)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, label));
}
Object.assign(__ds_scope, { ConfidenceMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ConfidenceMeter.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control. Ghost by default; `voice` tints purple.
 * Pass a Lucide (or any) SVG/node as children.
 */
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: 30,
    md: 38,
    lg: 46
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--border)"
    },
    voice: {
      background: "var(--voice-quiet)",
      color: "var(--voice)",
      border: "1px solid transparent"
    },
    solid: {
      background: "var(--surface-raised)",
      color: "var(--text-primary)",
      border: "1px solid var(--border)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === "ghost") {
        e.currentTarget.style.background = "var(--surface-raised)";
        e.currentTarget.style.color = "var(--text-primary)";
      }
    },
    onMouseLeave: e => {
      if (variant === "ghost") {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--text-secondary)";
      }
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field on the void. 8px radius, 1px hairline, purple focus ring.
 * `status` colors the border: error (red), success (emerald), inferred (amber, for
 * AI-pre-filled values the artist should review). Transparency is the brand's trust
 * mechanism — never hide that a value was inferred.
 */
function Input({
  label,
  status,
  // "error" | "success" | "inferred"
  helper,
  size = "md",
  iconLeft = null,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const inputId = id || `ss-input-${Math.random().toString(36).slice(2, 8)}`;
  const statusColor = {
    error: "var(--danger)",
    success: "var(--positive)",
    inferred: "var(--inferred)"
  }[status];
  const restBorder = statusColor || "var(--border-strong)";
  const dims = {
    sm: {
      height: 36,
      fontSize: 14
    },
    md: {
      height: 44,
      fontSize: 16
    },
    lg: {
      height: 52,
      fontSize: 18
    }
  }[size] || {
    height: 44,
    fontSize: 16
  };
  const height = dims.height;
  const fontSize = dims.fontSize;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-secondary)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, label, status === "inferred" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--inferred)",
      background: "var(--inferred-soft)",
      padding: "2px 6px",
      borderRadius: "var(--radius-xs)"
    }
  }, "Inferred")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      color: "var(--text-meta)",
      display: "inline-flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    style: {
      width: "100%",
      height,
      padding: iconLeft ? "0 12px 0 38px" : "0 12px",
      fontFamily: "var(--font-body)",
      fontSize,
      color: "var(--text-primary)",
      background: "var(--field-bg)",
      border: `1px solid ${restBorder}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
      if (!statusColor) e.currentTarget.style.borderColor = "var(--voice)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = restBorder;
    }
  }, rest))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: statusColor && status !== "inferred" ? statusColor : "var(--text-meta)"
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/LineToSoniq.jsx
try { (() => {
/**
 * LineToSoniq — the single global "talk to Soniq + see what it's doing" panel (Rule 4).
 * Collapsed by default: a thin right edge with a live dot, an Ask button, and a vertical
 * "ASK SONIQ" label. Expanded: an overlay panel with two tabs — Activity (the live feed)
 * and Ask (chat). ⌘K is a SEPARATE concern (find/navigate) — never folded in here.
 *
 * The live dot turns red while sends are paused/bounced.
 */
function LineToSoniq({
  activity = [],
  defaultOpen = false,
  defaultTab = "activity",
  paused = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [tab, setTab] = React.useState(defaultTab);
  const dotColor = paused ? "var(--red-500)" : "var(--positive)";
  const dotGlow = paused ? "0 0 0 3px rgba(239,68,68,.18)" : "0 0 0 3px rgba(52,211,153,.18)";
  if (!open) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 44,
        flex: "none",
        borderLeft: "1px solid var(--border)",
        background: "#040406",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 0",
        gap: 14,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "var(--radius-pill)",
        background: dotColor,
        boxShadow: dotGlow,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Ask Soniq",
      onClick: () => setOpen(true),
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-sm)",
        background: "var(--voice-quiet)",
        border: "1px solid rgba(124,58,237,.45)",
        color: "var(--purple-400)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer"
      },
      onFocus: e => {
        e.currentTarget.style.boxShadow = "var(--ring-focus)";
      },
      onBlur: e => {
        e.currentTarget.style.boxShadow = "none";
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1.5-4.5a8.5 8.5 0 1 1 16.5-4z"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.16em",
        color: "var(--text-meta)",
        marginTop: 4
      }
    }, "ASK SONIQ"));
  }
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: "none",
      borderLeft: "1px solid var(--border)",
      background: "#08080d",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid var(--border)"
    }
  }, ["activity", "ask"].map(id => /*#__PURE__*/React.createElement("button", {
    key: id,
    type: "button",
    onClick: () => setTab(id),
    style: {
      flex: 1,
      padding: "11px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: tab === id ? "var(--text-primary)" : "var(--text-meta)",
      borderBottom: tab === id ? "2px solid var(--purple-500)" : "2px solid transparent",
      textTransform: "capitalize"
    }
  }, id)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Collapse",
    onClick: () => setOpen(false),
    style: {
      width: 38,
      background: "none",
      border: "none",
      color: "var(--text-meta)",
      cursor: "pointer",
      fontSize: 16
    }
  }, "\xD7")), tab === "activity" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      overflowY: "auto"
    }
  }, activity.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      padding: `0 0 14px 16px`,
      borderLeft: i === activity.length - 1 ? "1px solid transparent" : "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -3.5,
      top: 3,
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--purple-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-primary)",
      lineHeight: 1.4
    }
  }, ev.h), ev.m && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-meta)",
      marginTop: 3
    }
  }, ev.m)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 14,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, "Ask Soniq about a curator, a draft, or your campaign. Answers cite their sources."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      background: "var(--field-bg)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-md)",
      padding: "9px 11px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13,
      color: "var(--text-meta)"
    }
  }, "Ask anything\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--purple-400)"
    }
  }, "\u21B5"))));
}
Object.assign(__ds_scope, { LineToSoniq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LineToSoniq.jsx", error: String((e && e.message) || e) }); }

// components/core/ReasoningNote.jsx
try { (() => {
/**
 * ReasoningNote — surfaces Soniq's "why." `tone="voice"` (purple) explains a match or
 * inference; `tone="inferred"` (amber) flags a value Soniq guessed. Optional mono
 * `citation`. Transparency is the brand's trust mechanism: never hide an inference.
 */
function ReasoningNote({
  children,
  citation,
  tone = "voice",
  title,
  style
}) {
  const isInferred = tone === "inferred";
  const accent = isInferred ? "var(--inferred)" : "var(--voice)";
  const bg = isInferred ? "var(--inferred-soft)" : "var(--voice-quiet)";
  const heading = title || (isInferred ? "Soniq inferred this" : "Why Soniq picked this");
  const icon = isInferred ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16.5",
    x2: "12",
    y2: "16.5"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0-4 10.5c.5.5 1 1.2 1 2V18h6v-2.5c0-.8.5-1.5 1-2A6 6 0 0 0 12 3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "15",
    y2: "21"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 14px",
      background: bg,
      border: "1px solid transparent",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: accent,
      flex: "none",
      marginTop: 1,
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: accent
    }
  }, heading), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--text-primary)"
    }
  }, children), citation && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-meta)",
      letterSpacing: "0.01em"
    }
  }, citation)));
}
Object.assign(__ds_scope, { ReasoningNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ReasoningNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown styled to match Input. Same sunken field + purple focus.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  id,
  style,
  ...rest
}) {
  const selectId = id || `ss-select-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: "100%",
      height: 44,
      padding: "0 36px 0 12px",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--text-primary)",
      background: "var(--field-bg)",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      appearance: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
      e.currentTarget.style.borderColor = "var(--voice)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "var(--border-strong)";
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-meta)",
      fontSize: 12
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/SpotlightsAtmosphere.jsx
try { (() => {
/**
 * SpotlightsAtmosphere — the brand's signature entry-surface treatment (Rule 6):
 * crossed purple + gold spotlight beams, soft light pools, a top vignette, and a fine
 * grain. Use ONLY on acquisition / boundary surfaces — Land, Try, Sign-in, Hand-off,
 * and /plan. The working app stays calm: never put this behind a workspace surface.
 *
 * Renders as an absolutely-positioned, non-interactive layer. Drop it as the first
 * child of a position:relative dark container; put content in a layer above it.
 */
function SpotlightsAtmosphere({
  intensity = 1,
  grain = true,
  style
}) {
  const beam = extra => ({
    position: "absolute",
    top: -60,
    width: 230,
    height: 430,
    filter: "blur(2px)",
    transformOrigin: "top center",
    ...extra
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 80% at 50% 0%, rgba(124,58,237,0.10), rgba(5,5,5,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: beam({
      left: -30,
      transform: "rotate(17deg)",
      background: `linear-gradient(180deg, rgba(124,58,237,${0.32 * intensity}), rgba(124,58,237,0) 72%)`
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: beam({
      right: -40,
      transform: "rotate(-15deg)",
      background: `linear-gradient(180deg, rgba(250,204,21,${0.20 * intensity}), rgba(250,204,21,0) 70%)`
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 200,
      height: 120,
      left: 8,
      bottom: 60,
      borderRadius: "50%",
      filter: "blur(34px)",
      background: `rgba(124,58,237,${0.28 * intensity})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 150,
      height: 90,
      right: 0,
      bottom: 120,
      borderRadius: "50%",
      filter: "blur(34px)",
      background: `rgba(250,204,21,${0.10 * intensity})`
    }
  }), grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.05) .5px, transparent .5px)",
      backgroundSize: "3px 3px"
    }
  }));
}
Object.assign(__ds_scope, { SpotlightsAtmosphere });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpotlightsAtmosphere.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
/**
 * StatusDot — tiny state indicator. `live` adds a calm emerald pulse.
 */
function StatusDot({
  tone = "neutral",
  live = false,
  pulse = false,
  size = 8,
  label,
  style
}) {
  const animate = live || pulse;
  const tones = {
    neutral: "var(--ink-faint)",
    positive: "var(--positive)",
    voice: "var(--voice)",
    inferred: "var(--inferred)",
    danger: "var(--danger)"
  };
  const color = tones[tone] || tones.neutral;
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-pill)",
      background: color
    }
  }), animate && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-pill)",
      background: color,
      animation: "ss-pulse 1.8s var(--ease-out) infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes ss-pulse{0%{transform:scale(1);opacity:.6}70%{transform:scale(2.6);opacity:0}100%{opacity:0}}")));
  if (!label) return dot;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, dot, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/**
 * Switch — on/off toggle. On = Electric Purple (voice). Calm slide, no bounce.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style
}) {
  const switchId = id || `ss-switch-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: switchId,
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 40,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 2,
      background: checked ? "var(--voice)" : "var(--surface-raised)",
      boxShadow: checked ? "none" : "inset 0 0 0 1px var(--border-strong)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-base) var(--ease-out)",
      display: "inline-flex",
      alignItems: "center"
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = checked ? "none" : "inset 0 0 0 1px var(--border-strong)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      transform: checked ? "translateX(16px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)",
      boxShadow: "var(--shadow-sm)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — genre / removable chip. 4px radius. Optional onRemove shows an × affordance.
 */
function Tag({
  children,
  onRemove,
  active = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 26,
      padding: "0 10px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: active ? "var(--text-on-purple)" : "var(--text-secondary)",
      background: active ? "var(--voice)" : "var(--surface-raised)",
      border: `1px solid ${active ? "transparent" : "var(--border)"}`,
      borderRadius: "var(--radius-xs)",
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 14,
      height: 14,
      padding: 0,
      border: "none",
      background: "transparent",
      color: "inherit",
      opacity: 0.6,
      cursor: "pointer",
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AnalysisFailed.jsx
try { (() => {
// Failure state A — Analysis failed [11]. A pasted link that can't be analyzed (private
// playlist, dead link) fails loudly, specifically, recoverably. No score, no guess
// (inherits the honest blank). Red marks the error; recovery actions are yellow/purple.
function AnalysisFailed({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    ConfidenceMeter
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    padding: "12px 13px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--field-bg)",
      border: "1px solid var(--red-500)",
      borderRadius: "var(--r-md)",
      padding: "10px 12px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "\uD83D\uDD17 open.spotify.com/playlist/4xK9\u2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Analyze fit"))), /*#__PURE__*/React.createElement(Card, {
    accent: "none",
    padding: "12px 13px",
    style: {
      boxShadow: "none",
      border: "1px solid rgba(239,68,68,.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    state: "error",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Couldn't analyze this playlist"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "danger"
  }, "Analysis failed")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3
    }
  }, "the link resolves to a private playlist \u2014 Soniq can only read public tracks")))), /*#__PURE__*/React.createElement(Card, {
    accent: "voice",
    padding: "11px 14px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff"
    }
  }, "I couldn't read this one."), " The playlist is private, so there's nothing to analyze yet \u2014 no score, and I won't guess at one. Make it public (or paste another link) and I'll score it in seconds. Or keep it as a contact with no fit data and I'll still draft the pitch.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Re-try analysis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate("discovery")
  }, "Paste a different link"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate("reviewer")
  }, "Keep as no-fit contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)"
    }
  }, "Nothing was added or lost \u2014 the contact stays on your list either way."));
}
Object.assign(window, {
  AnalysisFailed
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AnalysisFailed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
// AppShell — desktop chrome for the Soniq app (dark-first).
// Top bar (mark + name + ⌘K + avatar) · left sidebar (Workspace · Campaigns · Media) ·
// main region · the Line-to-Soniq panel at the right edge. Context lives behind the
// avatar menu, NOT in the sidebar (Rule 3). No Artifacts item (v7.4).
function AppShell({
  active,
  onNavigate,
  crumb,
  panelOpen,
  panelTab,
  paused,
  children
}) {
  const {
    LineToSoniq
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const nav = ["Workspace", "Campaigns", "Media"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      minHeight: 0,
      background: "var(--bg-app)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 210,
      flex: "none",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      background: "#0a0a10"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "14px 16px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/app-icon.png",
    alt: "",
    style: {
      width: 22,
      height: 22,
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "-0.01em"
    }
  }, "Sonic Spotlights")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "12px 0"
    }
  }, nav.map(label => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onNavigate(label),
      style: {
        position: "relative",
        textAlign: "left",
        width: "100%",
        border: "none",
        cursor: "pointer",
        padding: "9px 16px",
        background: "transparent",
        color: on ? "var(--text-primary)" : "var(--text-meta)",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: on ? 550 : 400
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 6,
        bottom: 6,
        width: 2.5,
        borderRadius: "0 2px 2px 0",
        background: "var(--purple-500)"
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "12px 16px",
      borderTop: "1px solid var(--border)",
      cursor: "pointer"
    },
    onClick: () => onNavigate("context"),
    title: "Open Context (memory of record)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-pill)",
      background: "#3a2f5e",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--purple-400)",
      fontWeight: 600,
      flex: "none",
      border: active === "__context" ? "1px solid rgba(124,58,237,.5)" : "none"
    }
  }, D.artist.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-primary)"
    }
  }, D.artist.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--purple-400)"
    }
  }, D.artist.handle, " \xB7 Context \u2197")))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 18px",
      borderBottom: "1px solid var(--border)",
      background: "#0a0a10"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--field-bg)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-md)",
      color: "var(--text-meta)",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      padding: "7px 11px",
      maxWidth: 280
    }
  }, "\u2318K  Search anything"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("privacy"),
    title: "Settings \xB7 Privacy",
    style: {
      marginLeft: "auto",
      width: 30,
      height: 30,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--border)",
      color: active === "__privacy" ? "var(--purple-400)" : "var(--text-meta)",
      cursor: "pointer",
      fontSize: 15
    }
  }, "\u2699"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-pill)",
      background: "#3a2f5e",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--purple-400)",
      fontWeight: 600
    }
  }, D.artist.initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 26px 40px",
      minWidth: 0
    }
  }, crumb && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-meta)",
      letterSpacing: "0.03em",
      marginBottom: 16
    }
  }, crumb), children), /*#__PURE__*/React.createElement(LineToSoniq, {
    activity: D.activity,
    defaultOpen: panelOpen,
    defaultTab: panelTab || "activity",
    paused: paused
  }))));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Bounced.jsx
try { (() => {
// Failure state B — sends paused / bounced [17]. The bounce lands in the artist's inbox,
// so the rollback is artist-logged: one tap returns the pitch to "ready to send" with the
// reason, never counted as sent. The rest of the pipeline is untouched. The live dot goes
// red while a bounce is unresolved (AppShell passes paused). One yellow: the fix.
function Bounced({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    ConfidenceMeter
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(239,68,68,.07)",
      border: "1px solid rgba(239,68,68,.45)",
      borderRadius: "var(--r-lg)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Tape Warm bounced \u2014 you logged it, Soniq rolled it back."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, "The bounce landed in your inbox; one tap here returns the pitch to ready to send with the reason. Never counted as sent.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Fix address & re-draft")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)"
    }
  }, "PIPELINE \xB7 ONE ROLLED BACK"), /*#__PURE__*/React.createElement(Card, {
    padding: "12px 13px",
    style: {
      boxShadow: "none",
      border: "1px solid rgba(239,68,68,.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    state: "error",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Tape Warm"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "danger"
  }, "Bounced")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, "you logged the bounce \xB7 rolled back to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "ready to send"), " with the reason \u2014 never counted as sent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "Edit address"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "Remove")))), /*#__PURE__*/React.createElement(Card, {
    padding: "12px 13px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    state: "nodata",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Slow-Core Quarterly"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Ready to send")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3
    }
  }, "drafted & approved \xB7 copy it whenever you're ready \u2014 unaffected by the bounce")))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.5
    }
  }, "Nothing silent, nothing automatic. A bounce only changes state when you log it \u2014 the rest of your pipeline is untouched."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("glance")
  }, "Back to the pipeline")));
}
Object.assign(window, {
  Bounced
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Bounced.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Cadence.jsx
try { (() => {
// Cadence loop [20] — end-of-campaign recap that rolls into the next release. Recap
// stats (placements, reply rate, time saved), then a PROPOSED wind-down — rendered as a
// proposal, never applied; campaign state changes only on artist action (Rule, Cadence).
// Entry point #3 into Context ("update before next release"). Mark complete is quiet.
function Cadence({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button,
    ReasoningNote
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const Stat = ({
    n,
    label,
    positive
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-md)",
      padding: "13px 14px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1,
      color: positive ? "var(--positive)" : "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      marginTop: 7
    }
  }, label));
  const Propose = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      padding: "9px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 1,
      borderRadius: 4,
      border: "1.5px solid var(--purple-400)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--purple-400)"
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 19,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Dark Moon \u2014 the recap"), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "2 placed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "2",
    label: "placements",
    positive: true
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "22%",
    label: "reply rate \xB7 8 contacted"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "~6h",
    label: "time saved vs. manual"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--purple-400)",
      marginBottom: 4
    }
  }, "SONIQ PROPOSES \xB7 NOTHING APPLIED YET"), /*#__PURE__*/React.createElement(Card, {
    accent: "voice",
    padding: "6px 15px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement(Propose, null, "Carry ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "Slow-Core Quarterly"), " forward \u2014 it placed, worth pitching again next release."), /*#__PURE__*/React.createElement(Propose, null, "Drop ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "2 no-replies"), " from your default list; keep them as contacts."), /*#__PURE__*/React.createElement(Propose, null, "Update your Context with what worked before the next release."))), /*#__PURE__*/React.createElement(ReasoningNote, {
    tone: "voice",
    citation: "proposed from this campaign's results"
  }, "This is a proposal \u2014 I won't change anything until you say so. Apply what's useful and carry it into your next release."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("context"),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Apply & update Context"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("glance"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "\u2713 Mark campaign complete")));
}
Object.assign(window, {
  Cadence
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Cadence.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ConfirmBeforePitch.jsx
try { (() => {
// Confirm-before-pitch checklist — the two-step approve (Rule 5). Three sections:
// This release · About you (from Context) · Who I'll pitch. Every item is pre-filled and
// individually correctable; items Soniq INFERRED carry an amber "I inferred this" flag
// (attention, not error). One yellow CTA. Footnote: nothing sends from here.
function ConfirmBeforePitch({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button,
    ReasoningNote
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const Section = ({
    kicker,
    children
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)",
      marginBottom: 8
    }
  }, kicker), /*#__PURE__*/React.createElement(Card, {
    padding: "4px 0",
    style: {
      boxShadow: "none",
      background: "transparent",
      border: "1px solid var(--line-soft)"
    }
  }, children));
  const Row = ({
    label,
    value,
    inferred,
    last
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 14px",
      borderBottom: last ? "none" : "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      flex: "none",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-meta)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "#fff"
    }
  }, value), inferred && /*#__PURE__*/React.createElement(Badge, {
    tone: "inferred"
  }, "I inferred this"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "\u270E correct"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 19,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Confirm before I draft."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, "Everything below is pre-filled \u2014 fix anything before I write. Inferred items are flagged.")), /*#__PURE__*/React.createElement(Section, {
    kicker: "THIS RELEASE"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Title",
    value: "Dark Moon \xB7 single"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Out",
    value: "Jun 14"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sound",
    value: "lo-fi \xB7 shoegaze \xB7 ~118 BPM",
    inferred: true,
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "ABOUT YOU \xB7 FROM YOUR CONTEXT"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Voice",
    value: "Warm, first-person; craft over hype."
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Angle",
    value: "Lead with the live-to-tape detail.",
    inferred: true,
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "WHO I'LL PITCH"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Top fits",
    value: "Slow-Core Quarterly \xB7 Tape Warm \xB7 Bedroom Pop Gems"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Verification",
    value: "All unverified \u2014 you'll send from your inbox",
    last: true
  })), /*#__PURE__*/React.createElement(ReasoningNote, {
    tone: "inferred"
  }, "Amber means I inferred it from your sound and Context \u2014 worth a glance, not an error. Nothing sends from this screen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("reviewer"),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Looks right \u2014 draft 3 pitches"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("discovery"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Adjust targeting")));
}
Object.assign(window, {
  ConfirmBeforePitch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ConfirmBeforePitch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Context.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Artist Context [22] — the memory of record. Reference surface: NO yellow (Rule 2).
// Reached from the artist identity, not the sidebar (Rule 3). Every fact carries
// provenance + a quiet purple correct affordance; corrections write back everywhere
// (Rule 7). All five groups present (reflow, never reduce).
function Context() {
  const {
    Card,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const groups = [{
    k: "Voice & Narrative",
    v: "Warm, first-person. Craft over hype; live-to-tape.",
    src: "from bio + edits",
    action: "✎ correct"
  }, {
    k: "Audience",
    v: "25–34, weekend-active listeners.",
    src: "you corrected · 2d ago",
    action: "✎ correct",
    corrected: true
  }, {
    k: "Sonic Signature",
    v: "~118 BPM · lo-fi · negative space.",
    src: "soniq sonic scans",
    action: "re-scan ↻"
  }, {
    k: "Press History",
    v: "No Echo (2025) · Quiet Hour zine.",
    src: "confirmed placements",
    action: "all · 4"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 650,
      color: "#fff"
    }
  }, "What Soniq knows about you"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 6,
      maxWidth: 440
    }
  }, "The memory behind every match and pitch. Correct anything \u2014 it updates everywhere.")), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "positive",
    style: {
      flex: "none",
      marginTop: 2
    }
  }, "\u25CF Never shown to curators")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(GroupCard, _extends({
    key: g.k
  }, g)))), /*#__PURE__*/React.createElement(GroupCard, {
    k: "Curator History",
    full: true,
    rich: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fff"
      }
    }, "Noa Vasquez"), " placed Dark Moon \xB7 8 contacted \xB7 22% reply \xB7 2 placements"),
    src: "built from your campaigns",
    action: "view list \u2197"
  }));
}
function GroupCard({
  k,
  v,
  rich,
  src,
  action,
  corrected,
  full
}) {
  const {
    Card,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "13px 15px",
    style: {
      boxShadow: "none",
      gridColumn: full ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "var(--purple-400)"
    }
  }, k), corrected && /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, "\u2713 corrected")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "#e4e4e8",
      lineHeight: 1.45
    }
  }, rich || v), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-meta)"
    }
  }, src), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, action)));
}
Object.assign(window, {
  Context
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Context.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Discovery.jsx
try { (() => {
// Discovery [08] — Curator discovery, launch / bring-your-own model. One input (search
// OR paste a playlist link), scored cards with a circular FIT score + a SEPARATE
// unverified tag (fit ≠ verified, never merged). One yellow: "Draft pitches for top N".
function Discovery({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    ConfidenceMeter
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Where should ", D.release.title, " go?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, "Search for a fit, or paste a playlist you already have in mind. Soniq scores any playlist by analyzing it.")), /*#__PURE__*/React.createElement(Card, {
    raised: true,
    padding: "12px 13px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "var(--field-bg)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-md)",
      padding: "10px 12px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-meta)"
    }
  }, "\u2315 Search a genre or vibe \u2014 or paste a Spotify / Apple Music playlist link"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Analyze fit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 11,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    on: true
  }, "\u2315 Search Soniq"), /*#__PURE__*/React.createElement(Chip, {
    on: true
  }, "\uD83D\uDD17 Paste a link \xB7 bring your own"), /*#__PURE__*/React.createElement(Chip, {
    dashed: true
  }, "\u2726 Verified network \u2014 coming via partner integration"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)"
    }
  }, D.curators.length, " PLAYLISTS \xB7 SCORED BY FIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-meta)"
    }
  }, "Sort: fit \u25BE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, D.curators.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    accent: c.added ? "voice" : "none",
    padding: "12px 13px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    value: c.fit,
    state: c.state,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, c.name), c.added && /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, "You added")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3
    }
  }, c.who)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 5,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Unverified"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    },
    onClick: () => onNavigate("reasoning")
  }, "Why? \u2197")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("confirm"),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Draft pitches for top 3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate("analysisFailed")
  }, "Add another link")));
}
function Chip({
  children,
  on,
  dashed
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.02em",
      border: `1px ${dashed ? "dashed" : "solid"} ${on ? "rgba(124,58,237,.4)" : "var(--line-soft)"}`,
      borderRadius: "var(--radius-pill)",
      padding: "4px 10px",
      color: on ? "var(--purple-400)" : "var(--text-meta)",
      background: on ? "var(--voice-quiet)" : "transparent"
    }
  }, children);
}
Object.assign(window, {
  Discovery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Discovery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Glance.jsx
try { (() => {
// The Glance [18] — campaign home. The pipeline IS the page: four lifecycle states
// (queued → sent → replied → placed) render left-to-right. Sent→replied is artist-
// logged (one tap, paste optional). "Mark complete" is the artist's, and quiet — no
// yellow on this status surface. No "opened" state (no tracking pixels, ever).
function Glance({
  onNavigate
}) {
  const {
    Card,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const P = D.pipeline;
  const [replied, setReplied] = React.useState(false);
  const states = [{
    n: P.queued,
    label: "queued"
  }, {
    n: P.sent,
    label: "sent"
  }, {
    n: replied ? P.replied + 1 : P.replied,
    label: "replied · you log these"
  }, {
    n: P.placed,
    label: "placed",
    positive: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 650,
      color: "#fff",
      whiteSpace: "nowrap"
    }
  }, D.release.title), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "In motion"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate && onNavigate("cadence")
  }, "\u2713 Mark complete"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Campaign settings \u2699")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)",
      marginBottom: 9
    }
  }, "PIPELINE \xB7 FOUR LIFECYCLE STATES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8
    }
  }, states.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-md)",
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 1,
      color: s.positive ? "var(--positive)" : "#fff"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--text-meta)",
      marginTop: 6,
      lineHeight: 1.3
    }
  }, s.label))))), /*#__PURE__*/React.createElement(Card, {
    padding: "10px 13px",
    style: {
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setReplied(true),
    style: {
      width: 15,
      height: 15,
      flex: "none",
      borderRadius: 4,
      border: `1.5px solid ${replied ? "var(--positive)" : "var(--purple-400)"}`,
      background: replied ? "var(--positive)" : "transparent",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, replied && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#04130d",
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Tape Warm \xB7 sent 3d ago \u2014 ", replied ? /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate && onNavigate("receipt"),
    style: {
      color: "var(--positive)",
      cursor: "pointer"
    }
  }, "reply logged \xB7 see receipt \u2197") : /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--purple-400)",
      fontWeight: 600
    }
  }, "heard back? Mark replied")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "var(--text-meta)",
      letterSpacing: "0.06em"
    }
  }, "PASTE THE REPLY \xB7 OPTIONAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-meta)",
      lineHeight: 1.55
    }
  }, "The pipeline is the page \u2014 every pitch advances left to right. Sent \u2192 replied is yours: one tap when a curator writes back. No tracking pixels in your mail \u2014 your deliverability stays yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate && onNavigate("bounced")
  }, "A pitch bounced? See the rollback \u2197"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate && onNavigate("plan")
  }, "Draft more pitches \u2197")));
}
Object.assign(window, {
  Glance
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Glance.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Media.jsx
try { (() => {
// Media [Campaigns/Media nav] — the reusable-asset library. This is where stems, bios,
// press shots, and cover art live, and where the Receipt's "↗ stems / bio" links point:
// media travels as LIBRARY LINKS, never email attachments (Rule, Receipt). Reference
// surface — zero yellow; the per-asset action is a purple "Copy link ↗".
function Media() {
  const {
    Card,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const assets = [{
    name: "Dark Moon — WAV stems",
    kind: "WAV",
    meta: "5 tracks · 248 MB",
    used: "linked in 1 reply"
  }, {
    name: "Dark Moon — master",
    kind: "WAV",
    meta: "1 file · 52 MB",
    used: "—"
  }, {
    name: "One-line bio",
    kind: "TXT",
    meta: "edited 2d ago",
    used: "linked in 1 reply"
  }, {
    name: "Long bio",
    kind: "TXT",
    meta: "edited 2d ago",
    used: "—"
  }, {
    name: "Press shot — 2026",
    kind: "IMG",
    meta: "JPG · 3000×2000",
    used: "—"
  }, {
    name: "Cover art — Dark Moon",
    kind: "IMG",
    meta: "JPG · 3000×3000",
    used: "—"
  }];
  const kindColor = {
    WAV: "voice",
    TXT: "neutral",
    IMG: "neutral"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 660,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 19,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Media"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, "Reusable assets for your releases. They travel to curators as links \u2014 never email attachments.")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "\uFF0B Upload")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, assets.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.name,
    padding: "13px 14px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: "var(--r-md)",
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.04em",
      color: "var(--text-secondary)"
    }
  }, a.kind), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 13.5,
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.3
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--text-meta)",
      marginTop: 4
    }
  }, a.meta))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 12
    }
  }, a.used === "—" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-meta)"
    }
  }, "not yet linked") : /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, a.used), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Copy link \u2197"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.55
    }
  }, "A link can't bounce the way a multi-track WAV attachment can \u2014 so stems and bios always go out as Media links, and you keep one source of truth."));
}
Object.assign(window, {
  Media
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Media.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Plan.jsx
try { (() => {
// The Plan moment [15] — conversion, priced at the 4th draft. The trial-value rail is
// the artist's OWN campaign (receipts, not marketing). One yellow (recommended plan);
// the other is a ghost. Auto-renewal is a separate, never-pre-checked consent.
// Rule 6 boundary: the Spotlights atmosphere returns here — the one workspace route.
function Plan({
  onNavigate
}) {
  const {
    Button,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const [renew, setRenew] = React.useState(false);
  const built = ["12 playlists scored to Dark Moon", "3 pitches drafted free — yours to send", "1 brief · reasoning attached"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "-20px -26px -40px",
      padding: "26px 30px 36px",
      minHeight: "100%",
      background: "radial-gradient(ellipse 60% 55% at 18% 0%, rgba(124,58,237,.20), transparent 70%), radial-gradient(ellipse 45% 45% at 86% 8%, rgba(250,204,21,.10), transparent 70%), var(--void)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      color: "var(--purple-400)",
      marginBottom: 6
    }
  }, "YOU'VE USED YOUR 3 FREE DRAFTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#fff",
      marginBottom: 18
    }
  }, "Pick a plan to draft the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr 1fr",
      gap: 12,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(16,16,25,.85)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)",
      padding: "15px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.13em",
      color: "var(--text-meta)",
      marginBottom: 12
    }
  }, "YOUR TRIAL ALREADY BUILT"), built.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      lineHeight: 1.5,
      marginBottom: 9,
      display: "flex",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--positive)",
      fontWeight: 700
    }
  }, "\u2713"), " ", b)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      marginTop: 6,
      paddingTop: 10,
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.5
    }
  }, "All of it stays yours on any plan \u2014 or none.")), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Solo",
    price: "$19",
    blurb: "Draft beyond your free 3 \xB7 one campaign in motion \xB7 artist-logged replies \xB7 Context & reasoning included."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Choose Solo")), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Momentum",
    price: "$39",
    recommended: true,
    blurb: "Unlimited campaigns \xB7 curator + press outreach \xB7 cadence planning that carries forward what worked."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("reviewer"),
    style: {
      width: "100%",
      justifyContent: "center"
    },
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Draft the full campaign"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 13,
      background: "rgba(16,16,25,.85)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-md)",
      padding: "11px 14px",
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setRenew(!renew),
    style: {
      width: 15,
      height: 15,
      flex: "none",
      marginTop: 1,
      borderRadius: 4,
      border: `1.5px solid var(--purple-400)`,
      background: renew ? "var(--purple-500)" : "transparent",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, renew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 10,
      fontWeight: 700
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff"
    }
  }, "Auto-renewal consent (required, never pre-checked):"), " my plan renews monthly at the price shown until I cancel. I can cancel anytime in Settings \u2014 effective at the end of the paid period, no advance-notice deadline.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.5
    }
  }, "Card now, to draft beyond your free 3 \u2014 your 3 drafts, scores, and Context stay yours either way. Cancel anytime. \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Terms"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Privacy"))));
}
function PlanCard({
  name,
  price,
  blurb,
  recommended,
  children
}) {
  const {
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--field-bg)",
      border: recommended ? "1.5px solid rgba(250,204,21,.45)" : "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)",
      padding: "14px 15px",
      display: "flex",
      flexDirection: "column"
    }
  }, recommended && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -9,
      right: 12,
      background: "var(--action)",
      color: "var(--action-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: "0.1em",
      padding: "3px 9px",
      borderRadius: "var(--radius-pill)",
      fontWeight: 700
    }
  }, "BUILT FOR YOUR CADENCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 700,
      color: "#fff"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      color: "#fff",
      margin: "6px 0 9px"
    }
  }, price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--text-meta)"
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      flex: 1,
      marginBottom: 14
    }
  }, blurb), children);
}
Object.assign(window, {
  Plan
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Plan.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Privacy.jsx
try { (() => {
// Settings → Privacy [25] — home of the Soniq Improvement (AI-training) opt-out. A
// reference/settings surface: ZERO yellow (Rule 2); the toggle is brand PURPLE, ON by
// default, reachable in one tap, identical on every plan. Platform data + third-party
// providers are ALWAYS excluded (shown, not governed by the toggle). Marketing/testimonial
// use is a SEPARATE ask-first toggle (off). Scope is forward-only; no "we don't train" copy.
function Privacy({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Switch
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const [improve, setImprove] = React.useState(true); // ON by default
  const [testimonial, setTestimonial] = React.useState(false); // ask-first, off

  const ToggleRow = ({
    title,
    body,
    checked,
    onChange,
    badge
  }) => /*#__PURE__*/React.createElement(Card, {
    padding: "14px 16px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, title), badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      marginTop: 6
    }
  }, body)), /*#__PURE__*/React.createElement(Switch, {
    checked: checked,
    onChange: onChange
  })));
  const Excluded = ({
    label,
    sub
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.06em",
      color: "var(--text-meta)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--radius-pill)",
      padding: "3px 8px",
      flex: "none"
    }
  }, "ALWAYS EXCLUDED"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "#e4e4e8"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)"
    }
  }, sub)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 19,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Privacy & Soniq Improvement"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      marginTop: 5,
      lineHeight: 1.55
    }
  }, "Soniq Improvement uses your content and usage to improve Soniq's models. It's on by default and the same on every plan \u2014 turn it off anytime. Opting out applies going forward.")), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Soniq Improvement",
    badge: improve ? /*#__PURE__*/React.createElement(Badge, {
      tone: "voice"
    }, "On") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Off"),
    body: "When on, your drafts, edits, and usage help train Soniq's own models. Turning it off stops future use \u2014 it doesn't erase past training. Forward-only.",
    checked: improve,
    onChange: setImprove
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)",
      marginBottom: 8
    }
  }, "NOT GOVERNED BY THE TOGGLE"), /*#__PURE__*/React.createElement(Card, {
    padding: "4px 0",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement(Excluded, {
    label: "Streaming-platform data",
    sub: "never used for training"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-soft)"
    }
  }), /*#__PURE__*/React.createElement(Excluded, {
    label: "Third-party AI providers",
    sub: "contractually excluded from training on your content"
  }))), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Marketing & testimonials",
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Ask first"),
    body: "Separate from the above. We'll always ask before using your name, music, or results in marketing \u2014 never bundled into Soniq Improvement.",
    checked: testimonial,
    onChange: setTestimonial
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.55,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("terms"),
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Review updated terms \u2197"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Privacy Policy \xA73 \u2197"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Export my data \u2197")));
}
Object.assign(window, {
  Privacy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Privacy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ReasoningDrawer.jsx
try { (() => {
// Reasoning drawer / anatomy [21] — the XAI surface. Opens from any "Why? ↗". Reference
// surface: ZERO yellow, every action purple (Rule 2). Header = FIT score + curator + ×.
// Two-column grid: Evidence + Assumptions (left), Risk + Sources (right). The Memory
// source link opens Context; challenging an assumption is a correction loop into Context.
function ReasoningDrawer({
  onNavigate
}) {
  const {
    Card,
    Badge,
    ConfidenceMeter,
    Button
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const Quad = ({
    kicker,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-md)",
      padding: "13px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.14em",
      color: "var(--purple-400)",
      marginBottom: 9
    }
  }, kicker), children);
  const Item = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.5,
      marginBottom: 8,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      flex: "none"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingBottom: 14,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    value: 89,
    state: "scored",
    showLabel: true,
    label: "fit",
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 650,
      color: "#fff"
    }
  }, "Slow-Core Quarterly"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, "Why this scored 89 \u2014 every claim is auditable.")), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Unverified"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("discovery"),
    style: {
      marginLeft: 6,
      width: 30,
      height: 30,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--line)",
      color: "var(--text-meta)",
      cursor: "pointer",
      fontSize: 16
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Quad, {
    kicker: "EVIDENCE"
  }, /*#__PURE__*/React.createElement(Item, null, "Playlist averages ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-primary)"
    }
  }, "112 BPM"), " with a female-vocal lean \u2014 close to your sonic scan."), /*#__PURE__*/React.createElement(Item, null, "3 of the last 20 adds resemble your sound by similarity read."), /*#__PURE__*/React.createElement(Item, null, "Lots of negative space; reverb-forward, slow tempos.")), /*#__PURE__*/React.createElement(Quad, {
    kicker: "RISK"
  }, /*#__PURE__*/React.createElement(Item, null, "Adds cadence is slow \u2014 ~2 new tracks / month."), /*#__PURE__*/React.createElement(Item, null, "No public contact on the playlist page itself.")), /*#__PURE__*/React.createElement(Quad, {
    kicker: "ASSUMPTIONS"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, "Curator still favors lo-fi (last verified from 90-day window)."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--purple-400)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flex: "none"
    }
  }, "Challenge \u2197")))), /*#__PURE__*/React.createElement(Quad, {
    kicker: "SOURCES"
  }, /*#__PURE__*/React.createElement(Item, null, "Public playlist tracks \xB7 audio analysis"), /*#__PURE__*/React.createElement(Item, null, "Your sonic scan \xB7 Dark Moon"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("context"),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Memory \xB7 2 files \u2197")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("confirm")
  }, "Apply mitigation"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("context"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Challenge an assumption")));
}
Object.assign(window, {
  ReasoningDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ReasoningDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Receipt.jsx
try { (() => {
// The Receipt [19] — a reply becomes proof. v7 artist-logged: the artist logged the reply
// (paste optional); Soniq classified intent (POSITIVE), surfaced the ask, and drafted a
// response for review. Provenance says the ARTIST logged it (never "Soniq detected/read").
// Stems travel as Media-library LINKS, never email attachments. One yellow: send the reply.
function Receipt({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button,
    ReasoningNote
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 650,
      color: "#fff"
    }
  }, "Tape Warm replied"), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Positive"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-meta)"
    }
  }, "you logged this \xB7 2h ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.14em",
      color: "var(--faint)",
      marginBottom: 8
    }
  }, "THE REPLY \xB7 AS YOU PASTED IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "\"Really into this \u2014 the tape warmth sits right with the list. Can you send WAV stems and a one-line bio? Hoping to slot it next week.\"")), /*#__PURE__*/React.createElement(ReasoningNote, {
    tone: "voice",
    citation: "classified from the reply you logged \xB7 POSITIVE \xB7 ask: stems + bio"
  }, "She's in, with one ask: WAV stems and a one-line bio for a slot next week. I drafted a reply below \u2014 review it before you send."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)",
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.6,
      whiteSpace: "pre-wrap"
    }
  }, "Thanks Tape Warm — so glad it fits. Stems and bio are linked below from my Media library; grab whatever you need. Let me know if next week firms up.\n\n— Maya"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, "\u2197 Dark Moon \u2014 WAV stems"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, "\u2197 One-line bio"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      alignSelf: "center"
    }
  }, "Media-library links \u2014 never email attachments.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2713")
  }, "Copy reply & links"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("glance"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Back to pipeline"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--text-meta)",
      maxWidth: 150,
      textAlign: "right",
      lineHeight: 1.4
    }
  }, "You send from your own inbox.")));
}
Object.assign(window, {
  Receipt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Receipt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Reviewer.jsx
try { (() => {
// Reviewer / Handoff [16] — the launch send path. Soniq drafts; the artist copies or
// opens in their own email and sends it themselves (no send button — Soniq has no
// mailbox, Rule 5). One yellow: "Copy pitch". Filed under Campaigns.
function Reviewer({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge,
    ConfidenceMeter
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  const p = D.pitch;
  const [copied, setCopied] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "12px 13px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConfidenceMeter, {
    value: p.fit,
    state: "scored",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, p.curator), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Draft")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)",
      marginTop: 3
    }
  }, p.contact, " \xB7 drafted from her playlist + your voice")), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Unverified"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--r-lg)",
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.6,
      whiteSpace: "pre-wrap"
    }
  }, p.body), /*#__PURE__*/React.createElement(Card, {
    accent: "voice",
    raised: true,
    padding: "13px 15px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff",
      marginBottom: 6
    }
  }, "How you send this"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "Copy the pitch"), ", or open it pre-filled in your own email \u2014 to / subject / body ready. You hit send. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "Soniq has no mailbox and never sends for you."), " When the curator writes back, log the reply with one tap."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      marginTop: 7,
      lineHeight: 1.55
    }
  }, "No tracking pixels in your mail \u2014 your deliverability stays yours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setCopied(true),
    iconLeft: /*#__PURE__*/React.createElement("span", null, copied ? "✓" : "")
  }, copied ? "Copied" : "Copy pitch"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Open in email \u2197"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setSent(true),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: sent ? "var(--positive)" : "var(--purple-400)",
      cursor: "pointer"
    }
  }, sent ? "✓ Marked as sent" : "Mark as sent"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--text-meta)",
      maxWidth: 150,
      textAlign: "right",
      lineHeight: 1.4
    }
  }, "You're always the sender.")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("glance")
  }, "See the pipeline \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    },
    onClick: () => onNavigate("plan")
  }, "Draft the rest of the campaign \u2192")));
}
Object.assign(window, {
  Reviewer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Reviewer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TermsGate.jsx
try { (() => {
// Terms re-acceptance gate [04] — shown once per terms version to returning users, after
// sign-in and before the workspace, ONLY for material changes. Plain-language change log
// comes BEFORE the legal text. Utility surface: ZERO yellow, purple primary ("I agree —
// continue"). Escapes present: remind-me-later (until effective date), export, cancel.
// Silence is never acceptance. No stale "we don't train on your content" copy.
function TermsGate({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const Diff = ({
    kind,
    children
  }) => {
    const tone = kind === "new" ? "inferred" : "voice";
    const label = kind === "new" ? "WHAT'S CHANGING" : "UNCHANGED";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 11,
        alignItems: "flex-start",
        padding: "10px 0",
        borderBottom: "1px solid var(--line-soft)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "outline",
      tone: tone
    }, label)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--text-secondary)",
        lineHeight: 1.55
      }
    }, children));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "-20px -26px -40px",
      padding: "26px 30px 36px",
      minHeight: "100%",
      background: "radial-gradient(ellipse 55% 50% at 20% 0%, rgba(124,58,237,.16), transparent 70%), var(--void)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--purple-400)",
      marginBottom: 8
    }
  }, "BEFORE YOU CONTINUE \xB7 TERMS v0.3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, "We've updated our terms."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--text-secondary)",
      marginTop: 8,
      lineHeight: 1.55
    }
  }, "Here's the plain-language version first. The full document is one tap away \u2014 read it before you agree.")), /*#__PURE__*/React.createElement(Card, {
    padding: "4px 16px",
    style: {
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement(Diff, {
    kind: "new"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "Soniq Improvement:"), " we now use your content and usage to improve Soniq's own AI models \u2014 on by default, opt out anytime in Settings \u2192 Privacy. Forward-only."), /*#__PURE__*/React.createElement(Diff, {
    kind: "same"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "Ownership and approve-before-send are untouched."), " Your work stays yours; nothing sends without you."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--purple-400)",
      cursor: "pointer",
      marginRight: 16
    }
  }, "Read full terms \u2197"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Compare versions \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      lineHeight: 1.55
    }
  }, "We log your agreement with the version and a timestamp. Continued use is never treated as acceptance \u2014 this is an explicit step."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("welcome"),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "I agree \u2014 continue"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate("welcome"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Remind me later")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Export my data"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Cancel my account"), /*#__PURE__*/React.createElement("span", null, "Remind-me-later works until the effective date."))));
}
Object.assign(window, {
  TermsGate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TermsGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Welcome.jsx
try { (() => {
// Welcome [07] — Day-0 workspace. Honest near-empty state: the artist has brought no
// curators yet, so the hero is "Find curators for Dark Moon" (not "pitch to N"), the
// snapshot invites the first curators, and the Line-to-Soniq panel opens to Activity.
function Welcome({
  onNavigate
}) {
  const {
    Button,
    Card,
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const D = window.SoniqData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--purple-400)"
    }
  }, "SONIQ PREPARED THIS WHILE YOU SIGNED UP"), /*#__PURE__*/React.createElement(Card, {
    accent: "voice",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, "Find curators for ", D.release.title, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.55,
      margin: "10px 0 18px",
      maxWidth: 460
    }
  }, "Search or paste playlists \u2014 Soniq scores each for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "fit"), " with your sound, then drafts the pitch in your voice. You send it from your own inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("Workspace"),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Find your curators"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "How fit scoring works \u2197"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--text-meta)",
      marginBottom: 10
    }
  }, "SNAPSHOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(EmptyTile, {
    label: "Bring your first curators to see fit scores here"
  }), /*#__PURE__*/React.createElement(EmptyTile, {
    glyph: "\u2014",
    label: "plays \xB7 after first send"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-meta)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Trial active"), "no card on file \xB7 the plan moment arrives at your 4th draft"));
}
function EmptyTile({
  glyph = "—",
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--line)",
      borderRadius: "var(--r-md)",
      padding: "14px 14px",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      color: "var(--text-meta)",
      lineHeight: 1
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-meta)",
      marginTop: 7,
      lineHeight: 1.4
    }
  }, label));
}
Object.assign(window, {
  Welcome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Welcome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// Sample data for the Soniq app UI kit — faithful to the v7.4 wireframes.
// Sample artist + campaign + curators are illustrative (per README §9).
window.SoniqData = {
  artist: {
    name: "Maya Reyes",
    project: "thresholds",
    handle: "@thresholds",
    initials: "MR"
  },
  release: {
    title: "Dark Moon",
    type: "Single",
    releaseDate: "Jun 14",
    sound: "lo-fi · shoegaze",
    bpm: "118 BPM",
    key: "F# minor"
  },
  // Day-0 activity feed (Welcome opens the panel to this)
  activity: [{
    h: "Drafted your first pitch",
    m: "14s ago · from your preview"
  }, {
    h: "Analyzed your sound",
    m: "lo-fi · shoegaze"
  }, {
    h: "Started learning your voice",
    m: "from your bio"
  }, {
    h: "Ready to score curators",
    m: "search or paste to begin"
  }],
  // Curator discovery (launch / BYOC) — fit scores, all unverified at launch
  curators: [{
    id: "slow-core-quarterly",
    name: "Slow-Core Quarterly",
    who: "Noa Vasquez · your genre + 3 artists like you",
    fit: 89,
    state: "scored",
    added: false,
    reason: "Lo-fi, slow-core, shoegaze — matches Dark Moon's profile. Playlist averages 112 BPM with a female-vocal lean and lots of negative space, close to your track's sonic scan. 3 of the last 20 adds are comparable to you.",
    cites: "computed from public tracks + your sonic scan · Memory · 2 sources"
  }, {
    id: "tape-warm",
    name: "Tape Warm",
    who: "1.1k followers · lo-fi, female vocal lean",
    fit: 76,
    state: "scored",
    added: false,
    reason: "Strong overlap with your last single's listeners; consistently adds hushed, reverb-forward vocals at slow tempos.",
    cites: "computed from public tracks · Memory · 1 source"
  }, {
    id: "bedroom-pop-gems",
    name: "Bedroom Pop Gems",
    who: "pasted link · analyzed · 2 artists like you",
    fit: 71,
    state: "scored",
    added: true,
    reason: "You brought this one. Bedroom-pop and dream-pop lean; two recent adds resemble your sound by Soniq's similarity read.",
    cites: "computed from the playlist you pasted · Memory · 1 source"
  }],
  // A drafted pitch (reviewer / handoff)
  pitch: {
    curator: "Slow-Core Quarterly",
    contact: "Noa Vasquez",
    fit: 89,
    body: "Hi Noa — Dark Moon is a lo-fi, tape-warm single built around live-to-tape restraint; given the slow-core run on Slow-Core Quarterly, I thought it might sit well alongside your recent picks. It's out Jun 14. No pressure either way — thanks for listening.\n\n— Maya"
  },
  // Campaign pipeline (the glance) — four lifecycle states, artist-logged
  pipeline: {
    queued: 5,
    sent: 7,
    replied: 2,
    placed: 2
  },
  pipelineRows: [{
    name: "Tape Warm",
    note: "sent 3d ago",
    state: "awaiting-reply"
  }, {
    name: "Slow-Core Quarterly",
    note: "drafted & approved · copy it whenever you're ready",
    state: "ready"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile/HandOff.jsx
try { (() => {
// Hand-off [04] — one decision, one offer. After the preview: "You're in." The saved
// card reflects the PREVIEW (sound + the one curator she scored + first draft) — never a
// fabricated "12 matches." One yellow (Find your curators); the laptop is a purple
// informational callout, never a competing button. Mobile = reward, laptop = deep work.
function HandOff({
  onNavigate
}) {
  const {
    PhoneFrame,
    PhoneTop,
    CtaButton
  } = window;
  const {
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const li = node => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "#c2c2c8",
      marginBottom: 4,
      display: "flex",
      gap: 6,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, node));
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    atmosphere: true,
    time: "9:43",
    battery: "99%"
  }, /*#__PURE__*/React.createElement(PhoneTop, null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      border: "2px solid var(--purple-500)",
      display: "grid",
      placeItems: "center",
      margin: "2px auto 10px",
      color: "var(--purple-400)",
      fontSize: 22,
      boxShadow: "0 0 22px rgba(124,58,237,.4)"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 22,
      fontWeight: 600,
      color: "#fff"
    }
  }, "You're in."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10.5,
      color: "var(--muted)",
      marginTop: 5
    }
  }, "Trial active \xB7 no card on file")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#141414",
      border: "1px solid var(--line-soft)",
      borderRadius: 12,
      padding: "13px 14px",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.16em",
      color: "var(--faint)",
      marginBottom: 6
    }
  }, "SAVED TO YOUR WORKSPACE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 13,
      color: "#fff",
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Dark Moon \xB7 single"), li("Your sound — analyzed"), li(/*#__PURE__*/React.createElement(React.Fragment, null, "Slow-Core Quarterly \u2014 89 fit \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.04em",
      color: "var(--faint)"
    }
  }, "UNVERIFIED"))), li("Memory — started learning your voice"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--faint)",
      marginTop: 9,
      display: "flex",
      alignItems: "center",
      gap: 7,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--purple-500)",
      boxShadow: "0 0 8px var(--purple-500)"
    }
  }), "Soniq drafted your first pitch \xB7 14s ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 13,
      background: "var(--voice-quiet)",
      border: "1px solid rgba(124,58,237,.35)",
      borderRadius: 11,
      padding: "12px 13px",
      display: "flex",
      gap: 11,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 26,
      height: 18,
      border: "1.6px solid var(--purple-400)",
      borderRadius: "3px 3px 0 0",
      marginTop: 2,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -5,
      right: -5,
      bottom: -4,
      height: 3,
      background: "var(--purple-400)",
      borderRadius: "0 0 3px 3px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "#cfcfd6",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "The full workspace opens up on a laptop."), " Link sent to maya@thresholds.band \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)",
      cursor: "pointer"
    }
  }, "Resend"))), /*#__PURE__*/React.createElement(CtaButton, {
    onClick: () => onNavigate("workspace"),
    style: {
      marginTop: 13
    }
  }, "Find your curators \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 9.5,
      color: "var(--faint)",
      marginTop: 8
    }
  }, "Right here on your phone \u2014 let's build your list."));
}
Object.assign(window, {
  HandOff
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/HandOff.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Land.jsx
try { (() => {
// Land [01] — the first 30 seconds. Spotlights atmosphere; one Laser-Yellow CTA; the
// mono line answers scope ("one link") + reward timing ("~60s") in purple. BYOC-honest:
// the artist brings/searches; Soniq scores fit + drafts. No "Soniq finds curators."
function Land({
  onNavigate
}) {
  const {
    PhoneFrame,
    PhoneTop
  } = window;
  const tick = t => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#c7c7cd",
      display: "flex",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--purple-400)"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, t));
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    atmosphere: true
  }, /*#__PURE__*/React.createElement(PhoneTop, {
    right: /*#__PURE__*/React.createElement("span", {
      onClick: () => onNavigate("signin"),
      style: {
        fontSize: 12,
        color: "var(--purple-400)",
        cursor: "pointer"
      }
    }, "Sign in")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "var(--faint)",
      marginBottom: 10
    }
  }, "FOR RELEASING ARTISTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 21,
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.16,
      letterSpacing: "-0.01em"
    }
  }, "Your next release, pitched to people who actually listen."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "var(--muted)",
      marginTop: 10
    }
  }, "Search or bring the playlist curators and press you have in mind \u2014 Soniq scores each for fit with your sound and drafts the pitch in your voice. You send it from your own inbox."), /*#__PURE__*/React.createElement(CtaButton, {
    onClick: () => onNavigate("try"),
    style: {
      marginTop: 16
    }
  }, "Try with your release \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--faint)",
      textAlign: "center",
      marginTop: 9
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--purple-400)",
      fontWeight: 500
    }
  }, "~60s"), " to your first fit score \xB7 one link"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      marginTop: 14
    }
  }, tick("No card. You're always the sender."), tick("Built for 4–8wk release cadence")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      borderTop: "1px solid var(--line-soft)",
      paddingTop: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.16em",
      color: "var(--faint)",
      marginBottom: 7
    }
  }, "HOW IT WORKS"), ["Drop your music", "Bring or search curators → Soniq scores fit", "Copy & send from your inbox"].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 10.5,
      color: "#bcbcc2",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--purple-400)",
      marginRight: 6
    }
  }, String(i + 1).padStart(2, "0")), s))));
}

// Shared full-width yellow CTA (the one decision on entry surfaces).
function CtaButton({
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: "var(--action)",
      color: "var(--action-ink)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13.5,
      textAlign: "center",
      padding: 13,
      borderRadius: 9,
      boxShadow: "var(--action-glow)",
      cursor: "pointer",
      ...style
    }
  }, children);
}
Object.assign(window, {
  Land,
  CtaButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Land.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileContext.jsx
try { (() => {
// Mobile Context [23] — the memory of record on a phone. PARITY RULE: reflow, never
// reduce — all FIVE groups carry (Voice & Narrative, Audience, Sonic Signature, Press
// History, Curator History), every provenance line stays, and correction is first-class
// (a full-tap-target pill, not a tiny link). Reached from the artist menu, NEVER the
// bottom nav (Rule 3). Reference surface — zero yellow.
function MobileContext({
  onNavigate
}) {
  const {
    PhoneFrame
  } = window;
  const {
    Badge
  } = window.SonicSpotlightsDesignSystem_b87f31;
  const groups = [{
    k: "Voice & Narrative",
    v: "Warm, first-person. Craft over hype; live-to-tape.",
    src: "from bio + edits"
  }, {
    k: "Audience",
    v: "25–34, weekend-active listeners.",
    src: "you corrected · 2d ago",
    corrected: true
  }, {
    k: "Sonic Signature",
    v: "~118 BPM · lo-fi · negative space.",
    src: "Soniq sonic scans"
  }, {
    k: "Press History",
    v: "No Echo (2025) · Quiet Hour zine.",
    src: "confirmed placements"
  }, {
    k: "Curator History",
    v: "Noa Vasquez placed Dark Moon · 8 contacted · 22% reply.",
    src: "built from your campaigns"
  }];
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate && onNavigate("workspace"),
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 15,
      color: "#fff",
      cursor: "pointer"
    }
  }, "\u2190 Context"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--purple-600)",
      color: "#fff",
      fontSize: 9,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)"
    }
  }, "MR")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.1em",
      color: "var(--positive)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--positive)",
      flex: "none"
    }
  }), "NEVER SHOWN TO CURATORS \xB7 SHAPES TARGETING & TONE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      overflowY: "auto",
      paddingRight: 2
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.k,
    style: {
      background: "#141414",
      border: "1px solid var(--line-soft)",
      borderRadius: 11,
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "var(--purple-400)"
    }
  }, g.k), g.corrected && /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    tone: "voice"
  }, "\u2713 corrected")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "#e4e4e8",
      lineHeight: 1.45
    }
  }, g.v), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--text-meta)"
    }
  }, g.src), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--purple-400)",
      border: "1px solid rgba(124,58,237,.4)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px",
      cursor: "pointer"
    }
  }, "\u270E correct"))))));
}
Object.assign(window, {
  MobileContext
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileContext.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileWorkspace.jsx
try { (() => {
// Mobile Workspace / Welcome [05] — a dashboard, not a doormat. Atmosphere STOPS here
// (the working surface earns calm — Rule 6 boundary). One hero recommendation carries the
// only Laser Yellow; the snapshot is an honest Day-0 invite (no fabricated counts); a
// docked Ask bar + bottom nav. "Soniq prepared this while you signed up."
function MobileWorkspace({
  onNavigate
}) {
  const {
    PhoneFrame
  } = window;
  const navItem = (label, act) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      color: act ? "var(--purple-400)" : "var(--faint)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      border: "1.4px solid currentColor",
      borderRadius: 3
    }
  }), label);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    time: "9:44",
    battery: "99%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 15,
      color: "#fff"
    }
  }, "Soniq"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--muted)",
      border: "1px solid var(--line-soft)",
      borderRadius: 20,
      padding: "3px 10px"
    }
  }, "Dark Moon \u25BE"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate && onNavigate("context"),
    title: "Open Context",
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--purple-600)",
      color: "#fff",
      fontSize: 9,
      fontWeight: 700,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      cursor: "pointer"
    }
  }, "MR")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.14em",
      color: "var(--faint)",
      marginBottom: 9
    }
  }, "SONIQ PREPARED THIS WHILE YOU SIGNED UP"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#151515",
      border: "1px solid var(--line-soft)",
      borderLeft: "3px solid var(--purple-500)",
      borderRadius: 11,
      padding: "12px 13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.12em",
      color: "var(--purple-400)",
      marginBottom: 7
    }
  }, "\u258ESTART HERE \xB7 DARK MOON"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 15,
      color: "#fff",
      fontWeight: 600,
      lineHeight: 1.22,
      letterSpacing: "-0.01em"
    }
  }, "Find curators for Dark Moon."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      color: "var(--muted)",
      lineHeight: 1.5,
      marginTop: 7
    }
  }, "Search or paste playlists \u2014 Soniq scores each for fit with your sound, then drafts in your voice."), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate && onNavigate("land"),
    style: {
      marginTop: 10,
      background: "var(--action)",
      color: "var(--action-ink)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      padding: 9,
      borderRadius: 8,
      cursor: "pointer",
      boxShadow: "var(--action-glow)"
    }
  }, "Find your curators \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 10,
      color: "var(--purple-400)",
      marginTop: 8
    }
  }, "How fit scoring works \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      background: "#121212",
      border: "1px solid var(--line-soft)",
      borderRadius: 11,
      padding: "10px 13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.14em",
      color: "var(--faint)"
    }
  }, "SNAPSHOT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--purple-400)"
    }
  }, "Full data \u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--line)",
      borderRadius: 9,
      padding: 12,
      textAlign: "center",
      color: "var(--muted)",
      fontSize: 9,
      fontStyle: "italic",
      marginBottom: 6
    }
  }, "Bring your first curators to see fit scores here."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "var(--faint)",
      fontStyle: "italic"
    }
  }, "Plays & replies appear once your first pitch ships.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#161616",
      border: "1px solid var(--line)",
      borderRadius: 22,
      padding: "10px 14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10.5,
      color: "var(--faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ask Soniq \u2014 \"last 3 reviews of similar artists\""), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--purple-600)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 10
    }
  }, "\u2191")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderTop: "1px solid var(--line-soft)",
      marginTop: 10,
      paddingTop: 9
    }
  }, navItem("Home", true), navItem("Campaigns"), navItem("Ask"))));
}
Object.assign(window, {
  MobileWorkspace
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileWorkspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/PhoneFrame.jsx
try { (() => {
// PhoneFrame — the brand's wireframe phone shell (matches the entry-deck vocabulary):
// dark rounded body, notch pill, 9:41 status bar. Content renders on the Void canvas;
// pass atmosphere to layer the Spotlights treatment behind it (entry surfaces only).
function PhoneFrame({
  children,
  atmosphere = false,
  time = "9:41",
  battery = "100%",
  style
}) {
  const {
    SpotlightsAtmosphere
  } = window.SonicSpotlightsDesignSystem_b87f31;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 624,
      flex: "none",
      position: "relative",
      background: "var(--void)",
      borderRadius: 38,
      border: "1px solid #000",
      boxShadow: "0 0 0 10px #1c1c1c, 0 26px 50px rgba(0,0,0,.45)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: "50%",
      transform: "translateX(-50%)",
      width: 92,
      height: 5,
      background: "#2a2a2a",
      borderRadius: 3,
      zIndex: 6
    }
  }), atmosphere && SpotlightsAtmosphere && /*#__PURE__*/React.createElement(SpotlightsAtmosphere, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px 6px",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "#cfcfd4"
    }
  }, /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 2
    }
  }, "\u25CF\u25CF\u25CF\u25CF ", battery)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      padding: "8px 20px 18px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, children)));
}

// Shared top bar inside a phone screen.
function PhoneTop({
  left = "Soniq",
  right,
  onLeft
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onLeft,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 15,
      color: "#fff",
      letterSpacing: "-0.01em",
      cursor: onLeft ? "pointer" : "default"
    }
  }, left), right);
}
Object.assign(window, {
  PhoneFrame,
  PhoneTop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/SignIn.jsx
try { (() => {
// Sign-in [03] — one door, two keys. Utility surface → ZERO Laser Yellow; the purple
// primary is the deliberate visual lead (Rule 1, utility exception). SSO-first (Spotify
// on top). Assent line rides directly beside every continue path (v7.1 legal-UX).
function SignIn({
  onNavigate
}) {
  const {
    PhoneFrame,
    PhoneTop
  } = window;
  const [tab, setTab] = React.useState("signin");
  const sso = (dot, label) => /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line)",
      borderRadius: 9,
      padding: 11,
      fontSize: 11.5,
      color: "#d4d4da",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 3,
      background: dot,
      flex: "none"
    }
  }), label);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    atmosphere: true
  }, /*#__PURE__*/React.createElement(PhoneTop, {
    left: "\u2190 Soniq",
    onLeft: () => onNavigate("land"),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--faint)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.1em"
      }
    }, "ACCOUNT")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#101010",
      border: "1px solid var(--line)",
      borderRadius: 9,
      padding: 3,
      marginBottom: 20
    }
  }, [["signin", "Sign in"], ["create", "Create account"]].map(([id, label]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    onClick: () => setTab(id),
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 11.5,
      padding: 8,
      borderRadius: 6,
      fontWeight: 500,
      cursor: "pointer",
      color: tab === id ? "#fff" : "var(--muted)",
      background: tab === id ? "var(--purple-600)" : "transparent"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 600,
      color: "#fff"
    }
  }, tab === "signin" ? "Welcome back." : "Make your free account."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--muted)",
      marginTop: 7
    }
  }, tab === "signin" ? "Pick up where your last release left off." : "No card. You pick a plan after your free drafts."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line)",
      borderRadius: 9,
      padding: 13,
      fontSize: 11.5,
      color: "var(--faint)",
      marginBottom: 11
    }
  }, "you@email.com"), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate("handoff"),
    style: {
      background: "var(--purple-600)",
      color: "#fff",
      fontWeight: 600,
      fontSize: 12.5,
      textAlign: "center",
      padding: 12,
      borderRadius: 9,
      boxShadow: "0 0 20px rgba(124,58,237,.3)",
      cursor: "pointer"
    }
  }, "Continue \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "16px 0",
      color: "var(--faint)",
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  }), "or", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, sso("#1DB954", "Continue with Spotify"), sso("#fff", "Continue with Apple")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: "#8a8a96",
      textAlign: "center",
      marginTop: 9,
      lineHeight: 1.5
    }
  }, "By continuing, you agree to the ", /*#__PURE__*/React.createElement("u", {
    style: {
      color: "var(--purple-400)"
    }
  }, "Terms of Service"), " & ", /*#__PURE__*/React.createElement("u", {
    style: {
      color: "var(--purple-400)"
    }
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      borderTop: "1px solid var(--line-soft)",
      paddingTop: 11,
      fontSize: 10,
      color: "var(--faint)",
      lineHeight: 1.5
    }
  }, "New here? The ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--purple-400)",
      fontWeight: 500
    }
  }, "Create account"), " tab opens the same door \u2014 free account, no card. You pick a plan ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--purple-400)",
      fontWeight: 500
    }
  }, "after"), " your free drafts \u2014 never before."));
}
Object.assign(window, {
  SignIn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Try.jsx
try { (() => {
// Try [02] — "show me, don't tell me." Step 2 of 2: sound captured, now score a curator
// she brings (paste a link, or one-tap sample). Real fit score before any account. The
// preview-terms notice sits quiet (8px) beside the CTA — notice here, clickwrap at signup.
function Try({
  onNavigate
}) {
  const {
    PhoneFrame,
    PhoneTop,
    CtaButton
  } = window;
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    atmosphere: true
  }, /*#__PURE__*/React.createElement(PhoneTop, {
    left: "\u2190 Soniq \xB7 try",
    onLeft: () => onNavigate("land"),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.1em",
        color: "var(--faint)"
      }
    }, "STEP 2 OF 2")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.06em",
      color: "var(--purple-400)",
      marginBottom: 9
    }
  }, "\u2713 YOUR SOUND \xB7 CAPTURED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 19,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "Now \u2014 a curator to score."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--muted)",
      marginTop: 7
    }
  }, "Bring one you have in mind. Still no sign-up."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      color: "var(--faint)",
      margin: "16px 0 7px"
    }
  }, "PASTE A PLAYLIST \xB7 OR SEARCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--field-bg)",
      border: "1px solid var(--line)",
      borderRadius: 9,
      padding: 13,
      fontSize: 12,
      color: "var(--faint)"
    }
  }, "\uD83D\uDD17 Spotify / Apple Music playlist link"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      margin: "11px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--purple-400)"
    }
  }, "No curator yet? ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff",
      fontWeight: 600,
      cursor: "pointer"
    },
    onClick: () => onNavigate("handoff")
  }, "Try a sample \u2192")), /*#__PURE__*/React.createElement(CtaButton, {
    onClick: () => onNavigate("handoff"),
    style: {
      marginTop: "auto"
    }
  }, "Score the fit \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "var(--faint)",
      textAlign: "center",
      marginTop: 9
    }
  }, "Fit only \u2014 verification comes later. We never auto-pitch."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: "#8a8a96",
      textAlign: "center",
      marginTop: 7,
      lineHeight: 1.5
    }
  }, "By continuing you agree to the ", /*#__PURE__*/React.createElement("u", {
    style: {
      color: "var(--purple-400)"
    }
  }, "Terms"), " & ", /*#__PURE__*/React.createElement("u", {
    style: {
      color: "var(--purple-400)"
    }
  }, "Privacy Policy")));
}
Object.assign(window, {
  Try
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Try.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ConfidenceMeter = __ds_scope.ConfidenceMeter;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LineToSoniq = __ds_scope.LineToSoniq;

__ds_ns.ReasoningNote = __ds_scope.ReasoningNote;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SpotlightsAtmosphere = __ds_scope.SpotlightsAtmosphere;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

})();
