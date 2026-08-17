/* @ds-bundle: {"format":3,"namespace":"BoehringerIngelheimPatientPortalDesignSystem_6375ea","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/actions/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/actions/Icon.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ModalSuccessIcon","sourcePath":"components/feedback/Modal.jsx"},{"name":"Selector","sourcePath":"components/forms/Selector.jsx"},{"name":"BottomNav","sourcePath":"components/feedback/BottomNav.jsx"},{"name":"TopNav","sourcePath":"components/feedback/TopNav.jsx"},{"name":"FilterChipGroup","sourcePath":"components/forms/FilterChipGroup.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Footer","sourcePath":"components/feedback/Footer.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b6a85795b530","components/actions/Icon.jsx":"04aa79c5a9ca","components/actions/IconButton.jsx":"f061190bd821","components/display/Avatar.jsx":"0bcb4d2ac7ba","components/display/Badge.jsx":"0d8b1e3601fa","components/display/Card.jsx":"719099428ba0","components/feedback/Alert.jsx":"f1f6ca3f785c","components/feedback/ProgressBar.jsx":"dae1a1001e06","components/feedback/Tabs.jsx":"fb080e57df66","components/forms/Checkbox.jsx":"c51ae0936df4","components/forms/Input.jsx":"0376c8b3bcf7","components/forms/Select.jsx":"1a27f621616c","components/forms/Switch.jsx":"79fa147ce5e2","ui_kits/patient_portal/AppShell.jsx":"c59126feca6e","ui_kits/patient_portal/AppointmentsScreen.jsx":"243103b3af44","ui_kits/patient_portal/DashboardScreen.jsx":"e1993be4bb6a","ui_kits/patient_portal/LoginScreen.jsx":"cbb12b815a8b","ui_kits/patient_portal/MedicationsScreen.jsx":"2b78c633a8e9","ui_kits/patient_portal/MessagesScreen.jsx":"ee1c594a1eda","ui_kits/patient_portal/app.jsx":"176eb95406fa","ui_kits/patient_portal/data.js":"448c2d63559f","components/feedback/Modal.jsx":"0533fd1211a9","components/forms/Selector.jsx":"bb499a1bf1ad","components/feedback/BottomNav.jsx":"fff21b9125cf","components/feedback/TopNav.jsx":"64d5188e872b","components/display/Accordion.jsx":"a8fd4b7f6829","components/forms/FilterChipGroup.jsx":"04caf58c7823","components/forms/TextArea.jsx":"0571fa173d7b","components/forms/SearchBar.jsx":"4c3b624933e2","components/feedback/Footer.jsx":"4d235e89081b"},"inlinedExternals":[],"unexposedExports":[{"name":"__biIsKeyboard","sourcePath":"components/actions/Button.jsx"}]} */

(() => {

const __ds_ns = (window.BoehringerIngelheimPatientPortalDesignSystem_6375ea = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
// Track input modality so focus rings appear only for keyboard users,
// never as a lingering artifact of a mouse click/hover. Self-guards.
let biUsingKeyboard = false;
if (typeof window !== "undefined" && !window.__biFocusModalityInit) {
  window.__biFocusModalityInit = true;
  window.addEventListener("keydown", e => {
    if (e.key === "Tab") biUsingKeyboard = true;
  }, true);
  window.addEventListener("mousedown", () => {
    biUsingKeyboard = false;
  }, true);
}
const __biIsKeyboard = () => biUsingKeyboard;

/**
 * Boehringer Ingelheim action component.
 *
 * Light surfaces:
 *   primary    — Dark Green solid + white text (the accessible CTA)
 *   secondary  — Dark Green outline (transparent fill)
 *   tertiary   — text only, borderless (low-emphasis; absorbs former "ghost")
 *
 * Dark-green / dark surfaces — the Inverse family ("dark mode" pair):
 *   inversePrimary   — Accent Green solid + dark-green text (the CTA on dark)
 *   inverse          — white outline on dark (a.k.a. inverseSecondary)
 *
 * Back-compat aliases: outline→secondary, ghost/text→tertiary,
 * primaryOnDark→inversePrimary, inverseSecondary→inverse.
 * Focus ring is Dark Green on light, Accent Green on the Inverse family.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  // Heights clear 48px (WCAG 2.2 SC 2.5.5 sets 44px as AAA, but the
  // older-adult touch research — Duff 2010, Caprani — supports ~20mm,
  // roughly 2x that; 44px is the floor here, not the goal). xs/sm are
  // near-identical by design: back-compat aliases that can no longer
  // shrink below the floor. Reach for `sm` before `xs`.
  const sizes = {
    xs: {
      padding: "0 18px",
      height: 44,
      type: "label-sm",
      gap: 8
    },
    sm: {
      padding: "0 20px",
      height: 48,
      type: "label-sm",
      gap: 8
    },
    md: {
      padding: "0 24px",
      height: 52,
      type: "label",
      gap: 10
    },
    lg: {
      padding: "0 32px",
      height: 60,
      type: "label-lg",
      gap: 12
    }
  };
  // Public variant name -> taxonomy variant key
  // (Semantic/Color/Action/Button/<scope>/<variant>/<state>)
  const tax = {
    primary: "primary",
    secondary: "secondary",
    outline: "secondary",
    // outline == the secondary style
    tertiary: "tertiary",
    ghost: "tertiary",
    text: "tertiary",
    // ghost merged into tertiary
    inversePrimary: "inversePrimary",
    "inverse-primary": "inversePrimary",
    primaryOnDark: "inversePrimary",
    "primary-on-dark": "inversePrimary",
    inverse: "inverse",
    inverseSecondary: "inverse"
  }[variant] || "primary";
  const tok = (scope, state) => `var(--action-button-${scope}-${tax}-${state})`;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focusRing, setFocusRing] = React.useState(false);

  // Resolve State per the taxonomy: Disabled > Pressed > Hover > Enabled
  const state = disabled ? "disabled" : press ? "pressed" : hover ? "hover" : "enabled";
  const fb = (scope, st, fallback) => {
    // not every variant declares every state token; fall back sensibly
    const has = {
      fill: {
        primary: ["enabled", "hover", "pressed", "disabled"],
        secondary: ["enabled", "hover", "pressed", "disabled"],
        tertiary: ["enabled", "hover", "pressed", "disabled"],
        inversePrimary: ["enabled", "hover", "pressed", "disabled"],
        inverse: ["enabled", "hover", "pressed"]
      },
      text: {
        primary: ["enabled", "disabled"],
        secondary: ["enabled", "disabled"],
        tertiary: ["enabled", "disabled"],
        inversePrimary: ["enabled", "disabled"],
        inverse: ["enabled"]
      },
      border: {
        primary: ["enabled", "disabled"],
        secondary: ["enabled", "disabled"],
        tertiary: [],
        inversePrimary: ["enabled", "disabled"],
        inverse: ["enabled", "hover"]
      }
    }[scope][tax] || [];
    return has.includes(st) ? tok(scope, st) : fallback;
  };
  const bg = fb("fill", state, fb("fill", "enabled", "transparent"));
  const textColor = fb("text", state === "disabled" ? "disabled" : "enabled", fb("text", "enabled", "var(--text-strong)"));
  const borderState = state === "disabled" ? "disabled" : hover && tax === "inverse" ? "hover" : "enabled";
  const borderColor = tax === "tertiary" ? "transparent" : fb("border", borderState, fb("border", "enabled", "transparent"));
  // Inverse family sits on dark surfaces → the ring must be Accent Green to clear 3:1.
  const focusRingVar = tax === "inversePrimary" || tax === "inverse" ? "var(--action-focus-ring-inverse)" : "var(--action-focus-ring)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: () => setFocusRing(__biIsKeyboard()),
    onBlur: () => setFocusRing(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: fullWidth ? "100%" : "auto",
      height: s.height,
      padding: s.padding,
      font: `var(--type-${s.type})`,
      letterSpacing: `var(--type-${s.type}-tracking)`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled && (tax === "tertiary" || tax === "inverse") ? 0.45 : 1,
      transform: press && !disabled ? "scale(0.97)" : "scale(1)",
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-fast)",
      whiteSpace: "nowrap",
      outline: focusRing ? `2px solid ${focusRingVar}` : "none",
      outlineOffset: 2,
      background: bg,
      color: textColor,
      border: `1.5px solid ${borderColor}`,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { __biIsKeyboard, Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Icon.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/**
 * Lightweight stroke-icon set in the Lucide visual style (24×24, 2px
 * round stroke) — used as the portal's UI icon system. Substitutes for
 * Boehringer's proprietary icon library, which was not in the brand
 * assets provided. Swap `PATHS` for the official set when available.
 */
const PATHS = {
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M6 21v-1a6 6 0 0 1 12 0v1"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"/>',
  stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  moreVertical: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
  alertCircle: '<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 7v6" stroke="var(--bi-white)" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.2" r="1.15" fill="var(--bi-white)" stroke="none"/>',
  chevronUp: '<path d="m18 15-6-6-6 6"/>'
};
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": "true"
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: d || ""
    }
  }));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Circular icon-only button. Variants mirror Button. */
function IconButton({
  icon,
  iconName,
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  // Icon-only controls carry no label to widen the target, so they clear
  // 48px on every size — the older-adult touch research (~20mm) sits well
  // above WCAG 2.2 SC 2.5.5's 44px AAA floor, and this audience is 65+.
  const dims = {
    sm: 44,
    md: 48,
    lg: 56
  }[size] || 48;
  const iconSize = {
    sm: 20,
    md: 22,
    lg: 26
  }[size] || 22;
  const variants = {
    primary: {
      background: "var(--action-button-fill-primary-enabled)",
      color: "var(--action-button-text-primary-enabled)",
      border: "1.5px solid var(--action-button-border-primary-enabled)"
    },
    secondary: {
      background: "var(--action-button-fill-secondary-enabled)",
      color: "var(--action-button-text-secondary-enabled)",
      border: "1.5px solid var(--action-button-border-secondary-enabled)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--action-button-text-tertiary-enabled)",
      border: "1.5px solid var(--action-button-border-tertiary-enabled)"
    },
    ghost: {
      background: "transparent",
      color: "var(--action-button-text-ghost-enabled)",
      border: "1.5px solid transparent"
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focusRing, setFocusRing] = React.useState(false);
  const hoverBg = {
    primary: "var(--action-button-fill-primary-hover)",
    secondary: "var(--action-button-fill-secondary-hover)",
    outline: "var(--action-button-fill-tertiary-hover)",
    ghost: "var(--action-button-fill-ghost-hover)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: () => setFocusRing(__ds_scope.__biIsKeyboard()),
    onBlur: () => setFocusRing(false),
    style: {
      width: dims,
      height: dims,
      outline: focusRing ? "2px solid var(--action-focus-ring)" : "none",
      outlineOffset: 2,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "scale(0.92)" : "scale(1)",
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)",
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg
      } : {}),
      ...style
    }
  }, rest), icon || (iconName ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: iconSize
  }) : null));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }



































































// components/display/Avatar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** User avatar — image or initials, optional online dot. */
function Avatar({
  src,
  name = "",
  size = 40,
  tone = "brand",
  status,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const tones = {
    brand: {
      background: "var(--bi-dark-green)",
      color: "var(--bi-accent-green)"
    },
    accent: {
      background: "var(--bi-accent-green)",
      color: "var(--bi-dark-green)"
    },
    blue: {
      background: "var(--bi-blue-light)",
      color: "var(--bi-blue-dark)"
    },
    violet: {
      background: "var(--bi-violet-light)",
      color: "var(--bi-violet-dark)"
    },
    neutral: {
      background: "var(--bi-neutral-200)",
      color: "var(--bi-neutral-700)"
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      // Initials scale with the avatar, so no composite role fits; floor
      // at the 14px metadata minimum for small sizes (size <= 36).
      fontSize: Math.max(14, Math.round(size * 0.38)),
      letterSpacing: "0.01em",
      ...t
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: Math.max(8, size * 0.26),
      height: Math.max(8, size * 0.26),
      borderRadius: "50%",
      border: "2px solid var(--surface-card)",
      background: status === "online" ? "var(--bi-accent-green)" : status === "busy" ? "var(--bi-red-medium)" : "var(--bi-neutral-400)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Small status label. Solid or soft-tinted. */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--bi-neutral-100)", "var(--bi-neutral-700)"],
      solid: ["var(--bi-neutral-700)", "#fff"]
    },
    success: {
      soft: ["var(--communication-badge-fill-success-enabled)", "var(--communication-badge-text-success-enabled)"],
      solid: ["var(--bi-accent-green)", "var(--bi-dark-green)"]
    },
    info: {
      soft: ["var(--communication-badge-fill-info-enabled)", "var(--communication-badge-text-info-enabled)"],
      solid: ["var(--bi-blue-medium)", "#fff"]
    },
    warning: {
      soft: ["var(--communication-badge-fill-warning-enabled)", "var(--communication-badge-text-warning-enabled)"],
      solid: ["var(--bi-yellow-medium)", "var(--bi-dark-green)"]
    },
    danger: {
      soft: ["var(--communication-badge-fill-error-enabled)", "var(--communication-badge-text-error-enabled)"],
      solid: ["var(--bi-red-medium)", "#fff"]
    },
    brand: {
      soft: ["#E1FBEE", "var(--bi-dark-green)"],
      solid: ["var(--bi-dark-green)", "#fff"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  // Both sizes sit on --type-meta-strong (the 14px floor); only padding differs.
  const sizes = {
    sm: {
      pad: "3px 8px"
    },
    md: {
      pad: "5px 10px"
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: "var(--type-meta-strong)",
      letterSpacing: "var(--type-meta-strong-tracking)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: bg,
      color: fg,
      padding: s.pad,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function Card({
  children,
  tone = "default",
  padding = "lg",
  interactive = false,
  leadingIcon,
  trailingIcon,
  badge,
  footer,
  orientation = "vertical",
  dismissible = false,
  onDismiss,
  dismissLabel,
  onClick,
  style = {},
  ...rest
}) {
  const isRowFooter = orientation === "horizontal" && footer;
  const pads = {
    sm: "var(--space-4)",
    lg: "var(--space-6)",
    xl: "var(--space-8)"
  };
  const tones = {
    default: {
      background: "var(--containment-card-fill-default-enabled)",
      color: "var(--text-body)",
      border: "1px solid var(--containment-card-border-default-enabled)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    },
    brand: {
      background: "var(--surface-brand)",
      color: "var(--text-inverse)",
      border: "1px solid var(--surface-brand)"
    },
    accent: {
      background: "var(--brand-accent)",
      color: "var(--brand-on-accent)",
      border: "1px solid var(--brand-accent)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const t = tones[tone] || tones.default;
  // Icon/badge color inherits automatically via currentColor from the tone's `color`
  // above — don't set color explicitly on the addon nodes or that inheritance breaks.
  const hasAddons = leadingIcon || trailingIcon || badge;
  const content = hasAddons ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "flex"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, children), (trailingIcon || badge) && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, badge, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "flex"
    }
  }, trailingIcon))) : children;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: isRowFooter ? "flex" : "block",
      alignItems: isRowFooter ? "center" : undefined,
      gap: isRowFooter ? "var(--space-4)" : undefined,
      borderRadius: "var(--radius-lg)",
      padding: pads[padding] ?? pads.lg,
      boxShadow: hover && interactive ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hover && interactive ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...t,
      ...style
    }
  }, rest), dismissible && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: pads[padding] ?? pads.lg,
      right: pads[padding] ?? pads.lg,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, dismissLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta-strong)",
      letterSpacing: "var(--type-meta-tracking)",
      opacity: 0.75,
      whiteSpace: "nowrap"
    }
  }, dismissLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: "none",
      background: "transparent",
      color: "currentColor",
      cursor: "pointer",
      opacity: 0.7,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: 44,
      height: 44,
      padding: 0,
      margin: "-10px -10px -10px 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: isRowFooter ? {
      flex: 1,
      minWidth: 0
    } : undefined
  }, content), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: "none",
      marginTop: isRowFooter ? 0 : "var(--space-4)"
    }
  }, footer));
}
Object.assign(__ds_scope, {
  Card
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
let idSeed = 0;
function useStableId(prefix) {
  const ref = React.useRef(null);
  if (ref.current === null) ref.current = `${prefix}-${++idSeed}`;
  return ref.current;
}

/**
 * One row. Height animates via grid-template-rows 0fr→1fr (not max-height —
 * that either clips a taller-than-guessed answer or leaves dead transition
 * time on a shorter one). Needs the row wrapped in a div with `overflow:
 * hidden; min-height:0` since a grid track only clips a shrink-to-zero
 * child that itself can collapse below its content size.
 */
function AccordionItem({
  item,
  isOpen,
  onToggle,
  headerRef,
  onKeyDown,
  panelId,
  headerId
}) {
  const {
    title,
    content,
    disabled
  } = item;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    ref: headerRef,
    id: headerId,
    type: "button",
    "aria-expanded": isOpen,
    "aria-controls": panelId,
    "aria-disabled": disabled || undefined,
    disabled: disabled,
    onClick: () => !disabled && onToggle(),
    onKeyDown: onKeyDown,
    style: {
      width: "100%",
      minHeight: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-5)",
      background: "transparent",
      border: "none",
      textAlign: "left",
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: disabled ? "var(--text-muted)" : "var(--text-strong)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 18,
    style: {
      flex: "none",
      color: "var(--text-muted)",
      transition: "transform var(--duration-fast) var(--ease-standard)",
      transform: isOpen ? "rotate(180deg)" : "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    role: "region",
    id: panelId,
    "aria-labelledby": headerId,
    style: {
      display: "grid",
      gridTemplateRows: isOpen ? "1fr" : "0fr",
      transition: "grid-template-rows var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-5) var(--space-4)",
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-body)"
    }
  }, content))));
}

/**
 * FAQ / disclosure list. `items` = [{ id, title, content, disabled? }].
 * Single-open by default (opening one closes the rest, the common FAQ
 * pattern); pass `allowMultiple` to let several stay open at once.
 * Controlled via `openIds`/`onChange`, or uncontrolled via `defaultOpenIds`.
 *
 * Built as a button+region disclosure (not native <details>/<summary>) so
 * the expand/collapse can animate height and so single-open exclusivity is
 * possible — <details> has neither.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  openIds,
  defaultOpenIds = [],
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultOpenIds);
  const open = openIds !== undefined ? openIds : internal;
  const groupId = useStableId("accordion");
  const headerRefs = React.useRef([]);
  const setOpen = next => {
    if (openIds === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const toggle = id => {
    const isOpen = open.includes(id);
    if (allowMultiple) {
      setOpen(isOpen ? open.filter(x => x !== id) : [...open, id]);
    } else {
      setOpen(isOpen ? [] : [id]);
    }
  };
  const focusAt = index => {
    const enabled = items.map((it, i) => ({
      it,
      i
    })).filter(({
      it
    }) => !it.disabled);
    if (!enabled.length) return;
    const pos = enabled.findIndex(({
      i
    }) => i === index);
    const wrap = n => enabled[(n + enabled.length) % enabled.length].i;
    let targetIndex;
    if (index === "first") targetIndex = enabled[0].i;else if (index === "last") targetIndex = enabled[enabled.length - 1].i;else targetIndex = wrap(pos + index);
    const node = headerRefs.current[targetIndex];
    node && node.focus();
  };
  const handleKeyDown = (e, i) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusAt(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusAt(-1);
        break;
      case "Home":
        e.preventDefault();
        focusAt("first");
        break;
      case "End":
        e.preventDefault();
        focusAt("last");
        break;
      default:
        break;
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: item.id,
    item: item,
    isOpen: open.includes(item.id),
    onToggle: () => toggle(item.id),
    headerRef: node => headerRefs.current[i] = node,
    onKeyDown: e => {
      handleKeyDown(e, i);
    },
    panelId: `${groupId}-panel-${item.id}`,
    headerId: `${groupId}-header-${item.id}`
  })));
}
Object.assign(__ds_scope, {
  Accordion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const MAP = {
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-fg)",
    bar: "var(--status-info)",
    icon: "info"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-fg)",
    bar: "var(--status-success)",
    icon: "check"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    fg: "var(--status-warning-fg)",
    bar: "var(--status-warning)",
    icon: "alert"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger-fg)",
    bar: "var(--status-danger)",
    icon: "alert"
  }
};

/** Inline status banner with leading accent rule + icon. */
function Alert({
  tone = "info",
  title,
  children,
  onClose,
  style = {},
  ...rest
}) {
  const m = MAP[tone] || MAP.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: m.bg,
      color: m.fg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${m.bar}`,
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: m.bar,
      display: "inline-flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: m.icon,
    size: 20,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
    // 44x44 target, pulled back into the banner padding with negative
    // margins so the hit area grows but the layout does not.
    ,

    style: {
      border: "none",
      background: "transparent",
      color: m.fg,
      cursor: "pointer",
      opacity: 0.7,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: 44,
      height: 44,
      padding: 0,
      margin: "-11px -12px -11px 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Linear progress / adherence bar. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "brand",
  height = 10,
  showLabel = false,
  label,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fills = {
    brand: "var(--bi-accent-green)",
    blue: "var(--bi-blue-medium)",
    yellow: "var(--bi-yellow-medium)",
    red: "var(--bi-red-medium)",
    violet: "var(--bi-violet-medium)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      display: "flex",
      justifyContent: "space-between",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      background: "var(--bi-neutral-200)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fills[tone] || fills.brand,
      borderRadius: "var(--radius-pill)",
      transition: "width var(--duration-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/**
 * Underline tab bar. Controlled via `value`/`onChange`, or uncontrolled.
 * `tabs` = [{ id, label, icon? }]
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1.5px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--type-label-tracking)",
        // No bold variant of --type-label exists; the selected tab
        // overrides weight only, after the shorthand.
        fontWeight: on ? 700 : undefined,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: on ? "var(--navigation-tabs-text-default-selected)" : "var(--navigation-tabs-text-default-enabled)",
        padding: "12px 14px",
        minHeight: 48,
        position: "relative",
        transition: "color var(--duration-fast)"
      }
    }, t.icon, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 10,
        right: 10,
        bottom: -1.5,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: on ? "var(--navigation-tabs-indicator-default-selected)" : "transparent",
        transition: "background var(--duration-fast)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Checkbox with label. Checked = Accent Green. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || (label ? `cb-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      // The whole label row is the hit area, so the drawn box stays
      // 26px while the target clears 48px (SC 2.5.5).
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      minHeight: 48,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--selection-checkbox-fill-selected-enabled)" : disabled ? "var(--selection-checkbox-fill-default-disabled)" : "var(--selection-checkbox-fill-default-enabled)",
      border: `1.5px solid ${checked ? "var(--selection-checkbox-border-selected-enabled)" : "var(--selection-checkbox-border-default-enabled)"}`,
      transition: "background var(--duration-fast), border-color var(--duration-fast)",
      color: "var(--selection-checkbox-icon-selected-enabled)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Labeled text input with optional leading icon, hint and error. */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const borderColor = error ? "var(--textinput-input-border-error-enabled)" : focus ? "var(--textinput-input-border-default-focused)" : "var(--textinput-input-border-default-enabled)";
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
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 52,
      padding: "0 16px",
      background: disabled ? "var(--textinput-input-fill-default-disabled)" : "var(--textinput-input-fill-default-enabled)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      flex: 1,
      alignSelf: "stretch",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--textinput-input-text-default-enabled)",
      minWidth: 0
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--textinput-input-text-error-enabled)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function SelectChevronIcon({
  size = 18,
  color = "var(--text-muted)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 10.5 6",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0.75 0.75L5.25 5.25L9.75 0.75",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function SelectCheckIcon({
  size = 16,
  color = "var(--brand-selected)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 12 8.66667",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.3333 0.666667L4 8L0.666667 4.66667",
    stroke: color,
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function parseOptions(children) {
  return React.Children.toArray(children).filter(child => /*#__PURE__*/React.isValidElement(child)).map(child => ({
    value: child.props.value !== undefined ? child.props.value : child.props.children,
    label: child.props.children,
    disabled: !!child.props.disabled
  }));
}

/**
 * Custom listbox styled to match Input. Renders a button trigger (not a
 * native <select>, which can't be restyled cross-browser) plus a floating
 * options panel built from <option> children, so the open state is fully
 * on-brand instead of the OS-native picker.
 */
function Select({
  label,
  hint,
  id,
  value,
  onChange,
  children,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [panelRect, setPanelRect] = React.useState(null);
  const rootRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const options = parseOptions(children);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(value ?? options[0]?.value);
  const currentValue = isControlled ? value : internalValue;
  const selectedIndex = Math.max(0, options.findIndex(o => o.value === currentValue));
  const selected = options[selectedIndex];
  const selId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const listId = `${selId || "select"}-listbox`;
  const labelId = `${selId || "select"}-label`;
  React.useEffect(() => {
    if (!open) return;
    function onDocMouseDown(e) {
      const insideTrigger = rootRef.current && rootRef.current.contains(e.target);
      const insidePanel = panelRef.current && panelRef.current.contains(e.target);
      if (!insideTrigger && !insidePanel) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  // The options panel renders through a portal (see below) so it can
  // never get clipped by a scrolling ancestor — e.g. Modal's scrollable
  // body. Position it with fixed coordinates measured off the trigger,
  // and re-measure on any scroll/resize while open (capture phase so a
  // scroll inside a nested container, like Modal's body, is caught too).
  React.useEffect(() => {
    if (!open) return;
    function measure() {
      const rect = triggerRef.current && triggerRef.current.getBoundingClientRect();
      if (!rect) return;
      setPanelRect({
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width
      });
    }
    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [open]);
  function commit(index) {
    const opt = options[index];
    if (!opt || opt.disabled) return;
    if (!isControlled) setInternalValue(opt.value);
    onChange && onChange({
      target: {
        value: opt.value,
        name: rest.name
      }
    });
    setOpen(false);
    triggerRef.current && triggerRef.current.focus();
  }
  function moveActive(delta) {
    let next = activeIndex;
    for (let i = 0; i < options.length; i++) {
      next = (next + delta + options.length) % options.length;
      if (!options[next].disabled) break;
    }
    setActiveIndex(next);
  }
  function onTriggerKeyDown(e) {
    if (disabled) return;
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setActiveIndex(selectedIndex);
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveActive(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      moveActive(-1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(activeIndex);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }
  const showRing = focus || open;
  const borderColor = showRing ? "var(--textinput-input-border-default-focused)" : "var(--textinput-input-border-default-enabled)";
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    id: labelId,
    htmlFor: selId,
    style: {
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("button", _extends({
    ref: triggerRef,
    type: "button",
    id: selId,
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-controls": listId,
    "aria-labelledby": label ? labelId : undefined,
    "aria-disabled": disabled || undefined,
    disabled: disabled,
    onClick: () => {
      if (!disabled) {
        setActiveIndex(selectedIndex);
        setOpen(o => !o);
      }
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: onTriggerKeyDown,
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: 52,
      padding: "0 16px",
      gap: 8,
      background: disabled ? "var(--textinput-input-fill-default-disabled)" : "var(--textinput-input-fill-default-enabled)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: showRing ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
      font: "inherit",
      textAlign: "left",
      cursor: disabled ? "not-allowed" : "pointer",
      appearance: "none",
      WebkitAppearance: "none"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      color: "var(--textinput-input-text-default-enabled)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, selected ? selected.label : ""), /*#__PURE__*/React.createElement(SelectChevronIcon, {
    size: 18,
    color: "var(--text-muted)",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-fast)"
    }
  })), open && !disabled && panelRect && /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement("ul", {
    ref: panelRef,
    id: listId,
    role: "listbox",
    "aria-labelledby": label ? labelId : undefined,
    style: {
      position: "fixed",
      top: panelRect.top,
      left: panelRect.left,
      width: panelRect.width,
      zIndex: 1000,
      margin: 0,
      padding: 6,
      listStyle: "none",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      maxHeight: 280,
      overflowY: "auto"
    }
  }, options.map((opt, i) => {
    const isSelected = i === selectedIndex;
    const isActive = i === activeIndex;
    return /*#__PURE__*/React.createElement("li", {
      key: String(opt.value) + i,
      id: `${listId}-option-${i}`,
      role: "option",
      "aria-selected": isSelected,
      "aria-disabled": opt.disabled || undefined,
      onMouseEnter: () => !opt.disabled && setActiveIndex(i),
      onMouseDown: e => e.preventDefault(),
      onClick: () => commit(i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "10px 12px",
        borderRadius: "var(--radius-sm)",
        font: "var(--type-label)",
        letterSpacing: "var(--type-label-tracking)",
        color: opt.disabled ? "var(--text-muted)" : "var(--text-body)",
        background: isActive ? "var(--surface-sunken)" : "transparent",
        cursor: opt.disabled ? "not-allowed" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, opt.label), isSelected && /*#__PURE__*/React.createElement(SelectCheckIcon, {
      size: 16,
      color: "var(--brand-selected)"
    }));
  })), document.body), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, {
  Select
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String(e && e.stack || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Toggle switch. On = Accent Green track. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const swId = id || (label ? `sw-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 48,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: swId,
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      // A <label> does not forward clicks to a <button>, so the
      // button itself must carry the 48px target: it is a bare
      // 46x48 hit area and the inner span draws the 46x26 track.
      display: "flex",
      alignItems: "center",
      width: 46,
      height: 48,
      flex: "none",
      border: "none",
      padding: 0,
      background: "transparent",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 46,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--selection-switch-fill-selected-enabled)" : disabled ? "var(--selection-switch-fill-default-disabled)" : "var(--selection-switch-fill-default-enabled)",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--selection-switch-knob-default-enabled)",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/AppShell.jsx
try { (() => {
// AppShell — dark-green sidebar + topbar. Composes DS Icon/Avatar/Badge.
const DS_AS = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function AppShell({
  active,
  onNavigate,
  title,
  subtitle,
  onLogout,
  children
}) {
  const {
    Icon,
    Avatar,
    Badge,
    IconButton
  } = DS_AS;
  const data = window.PortalData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-page)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flex: "none",
      background: "var(--bi-dark-green)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "26px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 8px 26px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bi-symbol-green.svg",
    alt: "Boehringer Ingelheim",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "#fff"
    }
  }, "Patient Portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--type-overline-tracking)",
      color: "var(--bi-accent-green)"
    }
  }, "LIFE FORWARD"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, data.nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        minHeight: 52,
        padding: "12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        background: on ? "var(--bi-accent-green)" : "transparent",
        color: on ? "var(--bi-dark-green)" : "rgba(255,255,255,.82)",
        font: "var(--type-label)",
        letterSpacing: "var(--type-label-tracking)",
        fontWeight: on ? 700 : 500,
        textAlign: "left",
        transition: "background .15s, color .15s"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "rgba(255,255,255,.08)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: on ? "brand" : "success",
      variant: "solid",
      size: "sm"
    }, n.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.12)",
      paddingTop: 16,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "0 6px 14px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: data.patient.name,
    tone: "accent",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, data.patient.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "rgba(255,255,255,.55)"
    }
  }, "ID ", data.patient.id))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      minHeight: 48,
      padding: "9px 12px",
      borderRadius: "var(--radius-md)",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: "rgba(255,255,255,.7)",
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,.08)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 18
  }), " Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      flex: "none",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)",
      marginTop: 1
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 14px",
      width: 240,
      background: "var(--surface-page)",
      borderRadius: "var(--radius-pill)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(DS_AS.Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)"
    }
  }, "Search")), /*#__PURE__*/React.createElement(IconButton, {
    iconName: "bell",
    variant: "outline",
    "aria-label": "Notifications"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: data.patient.name,
    tone: "brand"
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "28px 32px"
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/AppointmentsScreen.jsx
try { (() => {
// AppointmentsScreen — tabbed upcoming/past with booking action.
const DS_APPT = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function AppointmentsScreen() {
  const {
    Card,
    Badge,
    Button,
    Icon,
    Avatar,
    Tabs,
    Alert
  } = DS_APPT;
  const d = window.PortalData;
  const [tab, setTab] = React.useState("upcoming");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Telehealth available"
  }, "Most follow-ups can be done by video. Look for the video icon when booking."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "upcoming",
      label: "Upcoming",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 16
      })
    }, {
      id: "past",
      label: "Past"
    }],
    style: {
      border: "none"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "Book new")), tab === "upcoming" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, d.appointments.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      width: 76,
      flex: "none",
      paddingRight: 18,
      borderRight: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--type-overline-tracking)",
      color: "var(--text-muted)",
      textTransform: "uppercase"
    }
  }, a.date.split(",")[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)"
    }
  }, a.date.split(" ")[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, a.date.split(" ")[2])), /*#__PURE__*/React.createElement(Avatar, {
    name: a.doctor,
    tone: a.tone,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, a.doctor), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, a.specialty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), " ", a.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.mode === "Video visit" ? "video" : a.mode === "Phone call" ? "phone" : "mapPin",
    size: 15
  }), " ", a.mode))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === "confirmed" ? "success" : "warning"
  }, a.status === "confirmed" ? "Confirmed" : "Pending"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Reschedule"), /*#__PURE__*/React.createElement(Button, {
    variant: a.mode === "Video visit" ? "primary" : "outline",
    size: "sm",
    iconLeft: a.mode === "Video visit" ? /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 16
    }) : null
  }, a.mode === "Video visit" ? "Join" : "Details")))))), tab === "past" && /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, d.pastAppointments.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      borderTop: i ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.doctor,
    tone: "neutral",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, a.doctor), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, a.specialty, " \xB7 ", a.date, " \xB7 ", a.time)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "file",
      size: 16
    })
  }, "Summary")))));
}
window.AppointmentsScreen = AppointmentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/AppointmentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/DashboardScreen.jsx
try { (() => {
// DashboardScreen — greeting, vitals, next appointment, meds, message preview.
const DS_DASH = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function DashboardScreen({
  onNavigate
}) {
  const {
    Card,
    Badge,
    Button,
    Icon,
    ProgressBar,
    Avatar
  } = DS_DASH;
  const d = window.PortalData;
  const next = d.appointments[0];
  const sectionTitle = t => /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)",
      margin: "0 0 12px"
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: "xl",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-subtitle-2)",
      letterSpacing: "var(--type-subtitle-2-tracking)",
      color: "var(--bi-accent-green)",
      marginBottom: 6
    }
  }, "Good morning, ", d.patient.first), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-3)",
      letterSpacing: "var(--type-title-3-tracking)",
      marginBottom: 14
    }
  }, "Your health is moving ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bi-accent-green)"
    }
  }, "forward.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inversePrimary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 18
    }),
    onClick: () => onNavigate("appointments")
  }, "Book appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message",
      size: 18
    }),
    onClick: () => onNavigate("messages")
  }, "Message care team"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      textAlign: "center",
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-1)",
      letterSpacing: "var(--type-title-1-tracking)",
      color: "var(--bi-accent-green)"
    }
  }, "86%"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "rgba(255,255,255,.7)",
      marginTop: 4
    }
  }, "Care plan", /*#__PURE__*/React.createElement("br", null), "completion"))), /*#__PURE__*/React.createElement("div", null, sectionTitle("Latest readings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, d.vitals.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.label,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: `var(--bi-${v.tone === "brand" ? "accent-green" : v.tone === "blue" ? "blue-light" : "violet-light"})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--bi-dark-green)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 20
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: v.trend.startsWith("-") ? "info" : "success",
    size: "sm"
  }, v.trend)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-3)",
      letterSpacing: "var(--type-title-3-tracking)",
      color: "var(--text-strong)",
      marginTop: 14
    }
  }, v.value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, v.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, v.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, sectionTitle("Next appointment"), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    onClick: () => onNavigate("appointments"),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: next.doctor,
    tone: "brand",
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, next.doctor), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, next.specialty)), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Confirmed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      paddingTop: 14,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    icon: "calendar",
    label: next.date,
    sub: next.time
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "mapPin",
    label: next.mode,
    sub: next.location
  })))), /*#__PURE__*/React.createElement("div", null, sectionTitle("Recent messages"), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, d.messages.slice(0, 2).map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    onClick: () => onNavigate("messages"),
    style: {
      display: "flex",
      gap: 12,
      padding: 16,
      cursor: "pointer",
      borderTop: i ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.from,
    tone: m.tone,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, m.from), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-subtle)"
    }
  }, m.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)",
      marginTop: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    }
  }, m.preview)), m.unread && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--color-brand-deep)",
      flex: "none",
      marginTop: 6
    }
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, sectionTitle("Today's medications"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    }),
    onClick: () => onNavigate("medications"),
    style: {
      marginBottom: 12
    }
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, d.medications.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-sm)",
      background: "var(--bi-light-gray)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--bi-dark-green)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pill",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, m.dose, " \xB7 ", m.schedule))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: m.adherence,
    tone: m.tone === "yellow" ? "yellow" : m.tone === "blue" ? "blue" : "brand",
    height: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Next: ", m.next), /*#__PURE__*/React.createElement("span", null, m.adherence, "%")))))));
}
function Meta({
  icon,
  label,
  sub
}) {
  const {
    Icon
  } = DS_DASH;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-deep)",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, sub)));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/LoginScreen.jsx
try { (() => {
// LoginScreen — split brand panel + sign-in form.
const DS_LOGIN = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function LoginScreen({
  onLogin
}) {
  const {
    Button,
    Input,
    Checkbox,
    Icon
  } = DS_LOGIN;
  const [email, setEmail] = React.useState("nadia.rahman@email.com");
  const [pw, setPw] = React.useState("••••••••••");
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      height: "100%",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bi-dark-green)",
      color: "#fff",
      padding: "48px 56px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bi-logo-green.svg",
    alt: "Boehringer Ingelheim",
    style: {
      height: 42,
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--type-overline-tracking)",
      color: "var(--bi-accent-green)",
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, "Patient Portal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-title-1)",
      letterSpacing: "var(--type-title-1-tracking)",
      margin: 0
    }
  }, "Your care,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bi-accent-green)"
    }
  }, "moving forward.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      letterSpacing: "var(--type-body-lg-tracking)",
      color: "rgba(255,255,255,.75)",
      maxWidth: 380,
      marginTop: 18
    }
  }, "Appointments, prescriptions and your care team \u2014 all in one calm, secure place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "rgba(255,255,255,.6)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 16,
    color: "var(--bi-accent-green)"
  }), " Protected health information \xB7 HIPAA compliant")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-title-3)",
      letterSpacing: "var(--type-title-3-tracking)",
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Sign in to continue to your portal.")), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    checked: remember,
    onChange: e => setRemember(e.target.checked)
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: "var(--text-link)",
      textDecoration: "none"
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onLogin,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, "New patient? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-link)",
      fontWeight: 500,
      textDecoration: "none"
    }
  }, "Create an account")))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/MedicationsScreen.jsx
try { (() => {
// MedicationsScreen — list with adherence + refill actions.
const DS_MED = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function MedicationsScreen() {
  const {
    Card,
    Badge,
    Button,
    Icon,
    ProgressBar
  } = DS_MED;
  const d = window.PortalData;
  const avg = Math.round(d.medications.reduce((s, m) => s + m.adherence, 0) / d.medications.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)"
    }
  }, "Overall adherence"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-2)",
      letterSpacing: "var(--type-title-2-tracking)"
    }
  }, avg, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)"
    }
  }, "this month")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, "Active prescriptions"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-2)",
      letterSpacing: "var(--type-title-2-tracking)",
      color: "var(--text-strong)"
    }
  }, d.medications.length), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, "all current")), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, "Refills needed soon"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title-2)",
      letterSpacing: "var(--type-title-2-tracking)",
      color: "var(--bi-red-medium)"
    }
  }, "1"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)"
    }
  }, "Metformin \xB7 2 left"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, d.medications.map(m => {
    const low = m.refill <= 3;
    return /*#__PURE__*/React.createElement(Card, {
      key: m.id,
      style: {
        display: "flex",
        gap: 18,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        flex: "none",
        borderRadius: "var(--radius-md)",
        background: "var(--bi-light-gray)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--bi-dark-green)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pill",
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-strong)",
        letterSpacing: "var(--type-body-strong-tracking)",
        color: "var(--text-strong)"
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        letterSpacing: "var(--type-body-sm-tracking)",
        color: "var(--text-muted)"
      }
    }, m.dose), low && /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      size: "sm"
    }, m.refill, " refills left")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-meta)",
        letterSpacing: "var(--type-meta-tracking)",
        color: "var(--text-muted)",
        margin: "2px 0 10px"
      }
    }, m.schedule, " \xB7 Next dose ", m.next), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 360
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: m.adherence,
      tone: m.tone === "yellow" ? "yellow" : m.tone === "blue" ? "blue" : "brand",
      height: 8,
      label: "Adherence",
      showLabel: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: low ? "primary" : "outline",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "refresh",
        size: 16
      })
    }, "Request refill"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Set reminder")));
  })));
}
window.MedicationsScreen = MedicationsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/MedicationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/MessagesScreen.jsx
try { (() => {
// MessagesScreen — two-pane inbox + reader with composer.
const DS_MSG = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
function MessagesScreen() {
  const {
    Card,
    Badge,
    Button,
    Icon,
    Avatar,
    Input
  } = DS_MSG;
  const d = window.PortalData;
  const [selected, setSelected] = React.useState(d.messages[0].id);
  const active = d.messages.find(m => m.id === selected);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
      overflow: "hidden",
      height: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)"
    }
  }, "Inbox"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "solid",
    size: "sm"
  }, "2 new")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto",
      flex: 1
    }
  }, d.messages.map(m => {
    const on = m.id === selected;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      onClick: () => setSelected(m.id),
      style: {
        display: "flex",
        gap: 11,
        padding: "14px 18px",
        cursor: "pointer",
        background: on ? "var(--bi-light-gray)" : "transparent",
        borderLeft: on ? "3px solid var(--color-brand-deep)" : "3px solid transparent",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.from,
      tone: m.tone,
      size: 38
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-strong)",
        letterSpacing: "var(--type-body-strong-tracking)",
        fontWeight: m.unread ? 700 : 500,
        color: "var(--text-strong)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, m.from), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-meta)",
        letterSpacing: "var(--type-meta-tracking)",
        color: "var(--text-subtle)",
        flex: "none"
      }
    }, m.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        letterSpacing: "var(--type-body-sm-tracking)",
        color: "var(--text-muted)",
        marginTop: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical"
      }
    }, m.preview)), m.unread && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--color-brand-deep)",
        flex: "none",
        marginTop: 6
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 22px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: active.from,
    tone: active.tone,
    size: 42,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      color: "var(--text-strong)"
    }
  }, active.from), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, active.role)), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 16
    })
  }, "Video call")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-subtle)",
      marginBottom: 14
    }
  }, active.time), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bi-light-gray)",
      borderRadius: "var(--radius-lg)",
      borderTopLeftRadius: 4,
      padding: "16px 18px",
      font: "var(--type-body-lg)",
      letterSpacing: "var(--type-body-lg-tracking)",
      color: "var(--text-body)",
      whiteSpace: "pre-line",
      maxWidth: 520
    }
  }, active.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Write a reply\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Send")))));
}
window.MessagesScreen = MessagesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/MessagesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/app.jsx
try { (() => {
// Root app — wires login → shell with screen switching.
const DS_APP = window.BoehringerIngelheimPatientPortalDesignSystem_6375ea;
const SCREEN_META = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Tuesday, 22 June 2026"
  },
  appointments: {
    title: "Appointments",
    subtitle: "Manage your visits and bookings"
  },
  medications: {
    title: "Medications",
    subtitle: "Prescriptions, refills and adherence"
  },
  messages: {
    title: "Messages",
    subtitle: "Secure messaging with your care team"
  },
  records: {
    title: "Health records",
    subtitle: "Documents, results and history"
  }
};
function RecordsScreen() {
  const {
    Card,
    Icon,
    Button
  } = DS_APP;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "xl",
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-lg)",
      background: "var(--bi-light-gray)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--bi-dark-green)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file",
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)"
    }
  }, "Health records"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      letterSpacing: "var(--type-body-sm-tracking)",
      color: "var(--text-muted)",
      maxWidth: 380,
      marginTop: 6
    }
  }, "This section is part of the portal information architecture but was not included in the provided design scope.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Request my records")));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [screen, setScreen] = React.useState("dashboard");
  const meta = SCREEN_META[screen] || {};
  if (!authed) return /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setAuthed(true)
  });
  let body;
  if (screen === "dashboard") body = /*#__PURE__*/React.createElement(DashboardScreen, {
    onNavigate: setScreen
  });else if (screen === "appointments") body = /*#__PURE__*/React.createElement(AppointmentsScreen, null);else if (screen === "medications") body = /*#__PURE__*/React.createElement(MedicationsScreen, null);else if (screen === "messages") body = /*#__PURE__*/React.createElement(MessagesScreen, null);else body = /*#__PURE__*/React.createElement(RecordsScreen, null);
  return /*#__PURE__*/React.createElement(AppShell, {
    active: screen,
    onNavigate: setScreen,
    title: meta.title,
    subtitle: meta.subtitle,
    onLogout: () => setAuthed(false)
  }, body);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_portal/data.js
try { (() => {
// Mock data for the Boehringer Patient Portal UI kit. Registered on window.
window.PortalData = {
  patient: {
    name: "Nadia Rahman",
    first: "Nadia",
    initials: "NR",
    id: "BI-204815",
    plan: "Respiratory Care Program"
  },
  nav: [{
    id: "dashboard",
    label: "Dashboard",
    icon: "home"
  }, {
    id: "appointments",
    label: "Appointments",
    icon: "calendar"
  }, {
    id: "medications",
    label: "Medications",
    icon: "pill"
  }, {
    id: "messages",
    label: "Messages",
    icon: "message",
    badge: 2
  }, {
    id: "records",
    label: "Health records",
    icon: "file"
  }],
  appointments: [{
    id: 1,
    doctor: "Dr. Anya Lindqvist",
    specialty: "Pulmonology",
    date: "Thu, 26 Jun",
    time: "10:30 AM",
    mode: "In person",
    location: "Ingelheim Main · Floor 3",
    status: "confirmed",
    tone: "brand"
  }, {
    id: 2,
    doctor: "Dr. Marcus Vidal",
    specialty: "Cardiology",
    date: "Tue, 8 Jul",
    time: "2:15 PM",
    mode: "Video visit",
    location: "Online",
    status: "confirmed",
    tone: "blue"
  }, {
    id: 3,
    doctor: "Sara Okafor, RN",
    specialty: "Care coordination",
    date: "Mon, 14 Jul",
    time: "9:00 AM",
    mode: "Phone call",
    location: "Online",
    status: "pending",
    tone: "violet"
  }],
  pastAppointments: [{
    id: 4,
    doctor: "Dr. Anya Lindqvist",
    specialty: "Pulmonology",
    date: "12 May 2026",
    time: "11:00 AM",
    mode: "In person"
  }, {
    id: 5,
    doctor: "Lab Services",
    specialty: "Blood panel",
    date: "28 Apr 2026",
    time: "8:30 AM",
    mode: "In person"
  }],
  medications: [{
    id: 1,
    name: "Jardiance",
    dose: "10 mg",
    schedule: "Once daily · morning",
    next: "in 2 hours",
    refill: 4,
    adherence: 96,
    tone: "brand"
  }, {
    id: 2,
    name: "Spiriva Respimat",
    dose: "2.5 mcg",
    schedule: "Two puffs · morning",
    next: "Tomorrow 8:00 AM",
    refill: 12,
    adherence: 88,
    tone: "blue"
  }, {
    id: 3,
    name: "Metformin",
    dose: "500 mg",
    schedule: "Twice daily",
    next: "Today 8:00 PM",
    refill: 2,
    adherence: 74,
    tone: "yellow"
  }],
  messages: [{
    id: 1,
    from: "Dr. Anya Lindqvist",
    role: "Pulmonology",
    tone: "brand",
    time: "9:42 AM",
    unread: true,
    preview: "Your latest spirometry results look encouraging — let's review them on Thursday.",
    body: "Hi Nadia,\n\nYour latest spirometry results look encouraging. FEV1 is up 8% from your last visit, which suggests the new inhaler routine is working well.\n\nLet's review everything together on Thursday. Keep logging your morning peak-flow readings in the meantime.\n\nBest,\nDr. Lindqvist"
  }, {
    id: 2,
    from: "Pharmacy team",
    role: "Ingelheim Main",
    tone: "blue",
    time: "Yesterday",
    unread: true,
    preview: "Your Jardiance refill is ready for pickup or home delivery.",
    body: "Your Jardiance 10mg refill is ready. Choose pickup at Ingelheim Main or free home delivery within 2 business days."
  }, {
    id: 3,
    from: "Sara Okafor, RN",
    role: "Care coordination",
    tone: "violet",
    time: "23 Jun",
    unread: false,
    preview: "I've added your nutrition plan to your health records.",
    body: "Hi Nadia, I've added the updated nutrition plan to your health records. Take a look and message me with any questions."
  }],
  vitals: [{
    label: "Peak flow",
    value: "480",
    unit: "L/min",
    trend: "+6%",
    icon: "activity",
    tone: "brand"
  }, {
    label: "Blood pressure",
    value: "118/76",
    unit: "mmHg",
    trend: "Stable",
    icon: "heart",
    tone: "blue"
  }, {
    label: "Resting HR",
    value: "68",
    unit: "bpm",
    trend: "-3 bpm",
    icon: "activity",
    tone: "violet"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_portal/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.BaseDefault = __ds_scope.BaseDefault;

__ds_ns.BaseSmall = __ds_scope.BaseSmall;

__ds_ns.Boxed = __ds_scope.Boxed;

__ds_ns.Button2 = __ds_scope.Button2;

__ds_ns.Button3 = __ds_scope.Button3;

__ds_ns.CTAGroup = __ds_scope.CTAGroup;

__ds_ns.CTAGroup2 = __ds_scope.CTAGroup2;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.CarouselButton = __ds_scope.CarouselButton;

__ds_ns.CarouselPagination = __ds_scope.CarouselPagination;

__ds_ns.CarouselPaginationElements = __ds_scope.CarouselPaginationElements;

__ds_ns.CheckBox = __ds_scope.CheckBox;

__ds_ns.Component1 = __ds_scope.Component1;

__ds_ns.ContentBlock = __ds_scope.ContentBlock;

__ds_ns.ContentBlockCards = __ds_scope.ContentBlockCards;

__ds_ns.ContentGroup = __ds_scope.ContentGroup;

__ds_ns.Copy = __ds_scope.Copy;

__ds_ns.Copy2 = __ds_scope.Copy2;

__ds_ns.Copy3 = __ds_scope.Copy3;

__ds_ns.FixedAspectRatio = __ds_scope.FixedAspectRatio;

__ds_ns.FormDivider = __ds_scope.FormDivider;

__ds_ns.FormInput = __ds_scope.FormInput;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Header2 = __ds_scope.Header2;

__ds_ns.HeaderMenuLink = __ds_scope.HeaderMenuLink;

__ds_ns.HeroPrimary = __ds_scope.HeroPrimary;

__ds_ns.IcoPlaceholder = __ds_scope.IcoPlaceholder;

__ds_ns.Icons = __ds_scope.Icons;

__ds_ns.Icons2 = __ds_scope.Icons2;

__ds_ns.Icons3 = __ds_scope.Icons3;

__ds_ns.Icons5 = __ds_scope.Icons5;

__ds_ns.Icons6 = __ds_scope.Icons6;

__ds_ns.Icons7 = __ds_scope.Icons7;

__ds_ns.KeyFact = __ds_scope.KeyFact;

__ds_ns.ListElements = __ds_scope.ListElements;

__ds_ns.ListElements2 = __ds_scope.ListElements2;

__ds_ns.ListElements3 = __ds_scope.ListElements3;

__ds_ns.ListWithIcon = __ds_scope.ListWithIcon;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Menu2 = __ds_scope.Menu2;

__ds_ns.Menu3 = __ds_scope.Menu3;

__ds_ns.Normal = __ds_scope.Normal;

__ds_ns.Normal2 = __ds_scope.Normal2;

__ds_ns.NotesIcon = __ds_scope.NotesIcon;

__ds_ns.NotesIcon2 = __ds_scope.NotesIcon2;

__ds_ns.NotesLabel = __ds_scope.NotesLabel;

__ds_ns.NotificationBanner = __ds_scope.NotificationBanner;

__ds_ns.Path = __ds_scope.Path;

__ds_ns.PrimaryLogo = __ds_scope.PrimaryLogo;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Separator2 = __ds_scope.Separator2;

__ds_ns.Separator3 = __ds_scope.Separator3;

__ds_ns.Separator4 = __ds_scope.Separator4;

__ds_ns.Separator5 = __ds_scope.Separator5;

__ds_ns.Social = __ds_scope.Social;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.TableCellHeader = __ds_scope.TableCellHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TopAnnouncementBanner = __ds_scope.TopAnnouncementBanner;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

__ds_ns.VideoIcon = __ds_scope.VideoIcon;

__ds_ns.WithArrow = __ds_scope.WithArrow;

__ds_ns.WithArrow2 = __ds_scope.WithArrow2;

__ds_ns.WithIcon = __ds_scope.WithIcon;

__ds_ns.WithIcon2 = __ds_scope.WithIcon2;

__ds_ns.WithIcon3 = __ds_scope.WithIcon3;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

// components/feedback/Modal.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
// One-time <style> injection for the enter animations — CSS @keyframes
// can't be expressed as an inline style object, so this mirrors the
// singleton-side-effect pattern Button.jsx uses for focus modality.
if (typeof document !== "undefined" && !document.getElementById("bi-modal-keyframes")) {
  const tag = document.createElement("style");
  tag.id = "bi-modal-keyframes";
  tag.textContent = `
@keyframes biModalScrimIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes biModalSheetIn { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes biModalDialogIn { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
@media (prefers-reduced-motion: reduce) {
  .bi-modal-scrim, .bi-modal-panel { animation: none !important; }
}`;
  document.head.appendChild(tag);
}
const MOBILE_QUERY = "(max-width: 640px)";
const SIZES = {
  sm: 400,
  md: 560,
  lg: 720
};
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = e => setIsMobile(e.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () => mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
  }, []);
  return isMobile;
}
let idSeed = 0;
function useStableId(prefix) {
  const ref = React.useRef(null);
  if (ref.current === null) ref.current = `${prefix}-${++idSeed}`;
  return ref.current;
}

/**
 * Full-screen dialog chrome that reshapes itself by viewport instead of
 * needing a separate mobile component: at <=640px it anchors to the
 * bottom of the screen as a full-width sheet (rounded top corners only,
 * slides up); above that it becomes a centered, fully-rounded dialog on
 * a dimmed scrim. Modal only owns the shell — header (title, optional
 * lead icon for confirmation states, close button) and a footer action
 * row. The body is any children you give it: a form, a chip-based
 * scheduler, a confirmation message. See Modal.prompt.md for the three
 * real portal flows (call-topic form, multi-option time picker,
 * confirmation) this shell was generalized from.
 */
function Modal({
  open,
  onClose,
  title,
  description,
  icon = null,
  children,
  primaryAction,
  secondaryAction,
  footer,
  dismissible = true,
  closeOnBackdropClick = true,
  size = "md",
  style = {},
  ...rest
}) {
  const isMobile = useIsMobile();
  const panelRef = React.useRef(null);
  const titleId = useStableId("bi-modal-title");
  const descId = description ? `${titleId}-desc` : undefined;
  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    panelRef.current && panelRef.current.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(e) {
      if (e.key === "Escape" && dismissible) {
        onClose && onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused && previouslyFocused.focus && previouslyFocused.focus();
    };
  }, [open, dismissible, onClose]);
  if (!open) return null;
  const maxWidth = SIZES[size] || SIZES.md;
  const centeredHeader = !!icon;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: "bi-modal-scrim",
    onMouseDown: e => {
      if (closeOnBackdropClick && dismissible && e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: isMobile ? "flex-end" : "center",
      justifyContent: "center",
      background: "var(--overlay-scrim-fill)",
      padding: isMobile ? 0 : 24,
      animation: "biModalScrimIn var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: panelRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    "aria-describedby": descId,
    tabIndex: -1,
    className: "bi-modal-panel",
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: isMobile ? "none" : maxWidth,
      maxHeight: isMobile ? "90vh" : "85vh",
      background: "var(--containment-modal-fill-default-enabled)",
      border: `1px solid var(--containment-modal-border-default-enabled)`,
      borderRadius: isMobile ? "var(--radius-xl) var(--radius-xl) 0 0" : "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      outline: "none",
      overflow: "hidden",
      animation: `${isMobile ? "biModalSheetIn" : "biModalDialogIn"} var(--duration-base) var(--ease-out)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: centeredHeader ? "flex-end" : "space-between",
      gap: 12,
      padding: "20px 20px 0 28px"
    }
  }, !centeredHeader && title && /*#__PURE__*/React.createElement("h2", {
    id: titleId,
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)",
      margin: "4px 0"
    }
  }, title), dismissible && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    iconName: "x",
    "aria-label": "Close",
    variant: "tertiary",
    size: "sm",
    onClick: onClose,
    style: {
      flex: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 28px 4px",
      overflowY: "auto",
      flex: 1
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 16
    }
  }, icon), centeredHeader && title && /*#__PURE__*/React.createElement("h2", {
    id: titleId,
    style: {
      font: "var(--type-heading)",
      letterSpacing: "var(--type-heading-tracking)",
      color: "var(--text-strong)",
      margin: "0 0 8px",
      textAlign: "center"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    id: descId,
    style: {
      font: "var(--type-body)",
      letterSpacing: "var(--type-body-tracking)",
      color: "var(--text-body)",
      margin: "0 0 20px",
      textAlign: centeredHeader ? "center" : "left"
    }
  }, description), children), footer !== undefined ? footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, footer) : (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 24
    }
  }, secondaryAction && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: secondaryAction.variant || "secondary",
    fullWidth: true,
    disabled: secondaryAction.disabled,
    onClick: secondaryAction.onClick
  }, secondaryAction.label), primaryAction && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: primaryAction.variant || "primary",
    fullWidth: true,
    disabled: primaryAction.disabled,
    onClick: primaryAction.onClick
  }, primaryAction.label))));
}
function ModalSuccessIcon({
  size = 56
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-circle)",
      background: "var(--brand-selected)",
      color: "var(--bi-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(size * 0.46),
    strokeWidth: 2.6
  }));
}
Object.assign(__ds_scope, {
  Modal,
  ModalSuccessIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String(e && e.stack || e) }); }

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ModalSuccessIcon = __ds_scope.ModalSuccessIcon;

// components/forms/Selector.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/**
 * Generalized from the chip picker first built one-off inside
 * CallScheduleCard (time-of-day + date chips): a single-select
 * radiogroup rendered as button chips instead of a dropdown, so every
 * option is visible and reachable at once — no hidden menus, one tap
 * per choice. Three content layouts share the same selection
 * mechanics and token set:
 *   icon-text — icon above a short label (e.g. "Morning" / "Afternoon")
 *   date      — day abbreviation above a day-of-month numeral
 *   time      — a single centered label (e.g. "8 to 10 am")
 */
function Chip({
  variant,
  option,
  checked,
  onSelect
}) {
  const disabled = !!option.disabled;
  const base = {
    font: "var(--type-body-strong)",
    letterSpacing: "var(--type-body-strong-tracking)",
    flex: variant === "icon-text" ? 1 : "none",
    minWidth: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    minHeight: 56,
    padding: "10px 16px",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? "var(--text-subtle)" : checked ? "var(--text-strong)" : "var(--text-body)",
    background: checked ? "var(--surface-sunken)" : disabled ? "var(--bi-neutral-100)" : "var(--surface-card)",
    border: `${checked ? 2 : 1.5}px solid ${checked ? "var(--brand-selected)" : "var(--border-default)"}`,
    opacity: disabled ? 0.5 : 1,
    transition: "border-color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)"
  };
  const content = () => {
    if (variant === "icon-text") {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: option.icon || "sun",
        size: 18,
        color: checked ? "var(--brand-selected)" : "var(--text-muted)"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-label-sm)",
          letterSpacing: "var(--type-label-sm-tracking)",
          fontWeight: checked ? 700 : undefined
        }
      }, option.label));
    }
    if (variant === "date") {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-overline)",
          letterSpacing: "var(--type-overline-tracking)",
          textTransform: "uppercase",
          color: disabled ? "var(--text-subtle)" : checked ? "var(--text-strong)" : "var(--text-muted)"
        }
      }, option.day), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-body-strong)",
          letterSpacing: "var(--type-body-strong-tracking)",
          color: disabled ? "var(--text-subtle)" : "var(--text-strong)"
        }
      }, option.num));
    }
    // time
    return /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-strong)",
        letterSpacing: "var(--type-body-strong-tracking)",
        color: disabled ? "var(--text-subtle)" : "var(--text-strong)"
      }
    }, option.label);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onSelect(option.value),
    style: base
  }, content());
}

/**
 * @param {"icon-text"|"date"|"time"} variant
 * @param {{value:string,label?:string,icon?:string,day?:string,num?:string,disabled?:boolean}[]} options
 */
function Selector({
  variant = "icon-text",
  options = [],
  value,
  onChange,
  ariaLabel,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": ariaLabel,
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      ...style
    }
  }, rest), options.map(opt => /*#__PURE__*/React.createElement(Chip, {
    key: opt.value,
    variant: variant,
    option: opt,
    checked: value === opt.value,
    onSelect: onChange
  })));
}
Object.assign(__ds_scope, {
  Selector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Selector.jsx", error: String(e && e.stack || e) }); }

__ds_ns.Selector = __ds_scope.Selector;

// components/feedback/BottomNav.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/**
 * Fixed mobile bottom navigation bar. Controlled via `value`/`onChange`, or
 * uncontrolled. `items` = [{ id, label, icon }]. Selected state is never
 * color-alone — bold label weight signals it too, same rule as Tabs.
 */
function BottomNav({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Primary",
    style: {
      display: "flex",
      justifyContent: "space-around",
      background: "var(--navigation-bottomnav-fill-default-enabled)",
      borderTop: "1px solid var(--navigation-bottomnav-border-default-enabled)",
      paddingTop: 8,
      paddingBottom: 8,
      ...style
    }
  }, rest), items.map(item => {
    const on = item.id === active;
    const color = on ? "var(--navigation-bottomnav-text-default-selected)" : "var(--navigation-bottomnav-text-default-enabled)";
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      "aria-current": on ? "page" : undefined,
      onClick: () => select(item.id),
      style: {
        flex: 1,
        minHeight: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color,
        transition: "color var(--duration-fast)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 24,
      color: color
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--navigation-bottomnav-label-type)",
        // No bold variant of --type-label-sm exists; the selected
        // item overrides weight only, after the shorthand — same
        // pattern Tabs uses for its label type.
        fontWeight: on ? 700 : undefined
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, {
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BottomNav.jsx", error: String(e && e.stack || e) }); }

__ds_ns.BottomNav = __ds_scope.BottomNav;

// components/feedback/TopNav.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
// Real brand marks, White/Accent-Green colorway per the dark bar surface
// (--brand-primary is BI Dark Green by default, Jascayd Electric Violet
// under [data-brand="jascayd"] — both dark, so both use the reversed marks).
const GLYPHS = {
  bi: /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bi-symbol-green.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      height: 22,
      width: "auto",
      display: "block"
    }
  }),
  jascayd: /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/jascayd-on-surface.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      height: 18,
      width: "auto",
      display: "block"
    }
  })
};
const DEFAULT_PORTAL_NAME = {
  bi: "CareConnect4Me",
  jascayd: "JASCAYD"
};
const FONT_SCALES = [{
  id: "sm",
  size: "0.8em"
}, {
  id: "md",
  size: "1em"
}, {
  id: "lg",
  size: "1.25em"
}];

/**
 * Fixed top navigation: a brand-aware header bar (logo + medication switcher
 * + text-size control + profile) with an underline tab row underneath.
 * Selecting a medication sets `data-brand` locally, so `--brand-*` (and
 * everything derived from it) recolors just this component — same mechanism
 * as the rest of the multi-brand token system, no page-level wrapper needed.
 * Collapses to header-only under 720px; pair with BottomNav for mobile.
 */
function TopNav({
  medications = [],
  medication,
  defaultMedication,
  onMedicationChange,
  tabs = [],
  tab,
  defaultTab,
  onTabChange,
  fontScale,
  defaultFontScale = "md",
  onFontScaleChange,
  userInitial = "E",
  onProfileClick,
  style = {},
  ...rest
}) {
  const [internalMed, setInternalMed] = React.useState(defaultMedication ?? (medications[0] && medications[0].id));
  const activeMedId = medication !== undefined ? medication : internalMed;
  const activeMed = medications.find(m => m.id === activeMedId) || medications[0] || {};
  const brand = activeMed.brand === "jascayd" ? "jascayd" : "bi";
  const dataBrand = brand === "jascayd" ? "jascayd" : undefined;
  const [internalScale, setInternalScale] = React.useState(defaultFontScale);
  const activeScale = fontScale !== undefined ? fontScale : internalScale;
  const selectMed = id => {
    if (medication === undefined) setInternalMed(id);
    onMedicationChange && onMedicationChange(id);
  };
  const selectScale = id => {
    if (fontScale === undefined) setInternalScale(id);
    onFontScaleChange && onFontScaleChange(id);
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    "data-brand": dataBrand,
    className: "ds-topnav",
    style: style
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        .ds-topnav__bar { display:flex; align-items:center; justify-content:space-between; gap:16px; height:var(--topbar-height); padding:0 24px; background:var(--brand-primary); color:var(--brand-on-primary); }
        .ds-topnav__logo { display:flex; align-items:center; gap:10px; font:var(--type-heading); letter-spacing:var(--type-heading-tracking); color:var(--brand-on-primary); white-space:nowrap; }
        .ds-topnav__right { display:flex; align-items:center; gap:12px; }
        .ds-topnav__select-wrap { position:relative; display:inline-flex; align-items:center; }
        .ds-topnav__select { appearance:none; -webkit-appearance:none; font:var(--type-label-sm); letter-spacing:var(--type-label-sm-tracking); color:var(--brand-on-primary); background:rgba(255,255,255,0.16); border:1px solid rgba(255,255,255,0.32); border-radius:var(--radius-pill); padding:8px 34px 8px 16px; min-height:36px; cursor:pointer; }
        .ds-topnav__select:focus-visible { outline:2px solid var(--brand-on-primary); outline-offset:2px; }
        .ds-topnav__select-chevron { position:absolute; right:12px; pointer-events:none; color:var(--brand-on-primary); }
        .ds-topnav__scale-group { display:flex; align-items:center; gap:2px; background:rgba(255,255,255,0.16); border-radius:var(--radius-pill); padding:4px; }
        .ds-topnav__scale-btn { border:none; background:transparent; color:var(--brand-on-primary); width:32px; height:28px; border-radius:var(--radius-pill); cursor:pointer; font-family:var(--font-body); font-weight:600; }
        .ds-topnav__scale-btn[aria-pressed="true"] { background:var(--brand-on-primary); color:var(--brand-primary); }
        .ds-topnav__profile { display:flex; align-items:center; gap:8px; border:1px solid rgba(255,255,255,0.32); background:rgba(255,255,255,0.1); border-radius:var(--radius-pill); padding:4px 14px 4px 4px; cursor:pointer; color:var(--brand-on-primary); font:var(--type-label-sm); }
        .ds-topnav__avatar { width:28px; height:28px; border-radius:50%; background:var(--brand-on-primary); color:var(--brand-primary); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px; }
        .ds-topnav__tabsrow { background:var(--surface-card); padding:0 24px; }
        @media (max-width: 720px) {
          .ds-topnav__bar { height:56px; padding:0 16px; }
          .ds-topnav__logo { font-size:16px; }
          .ds-topnav__right--desktop-only { display:none; }
          .ds-topnav__tabsrow { display:none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__logo"
  }, GLYPHS[brand], /*#__PURE__*/React.createElement("span", null, activeMed.portalName || DEFAULT_PORTAL_NAME[brand])), /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__right"
  }, medications.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__select-wrap"
  }, /*#__PURE__*/React.createElement("select", {
    className: "ds-topnav__select",
    "aria-label": "Viewing medication",
    value: activeMedId,
    onChange: e => selectMed(e.target.value)
  }, medications.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.id,
    value: m.id
  }, `Viewing: ${m.label}`))), /*#__PURE__*/React.createElement("span", {
    className: "ds-topnav__select-chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__scale-group ds-topnav__right--desktop-only",
    role: "group",
    "aria-label": "Text size"
  }, FONT_SCALES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    type: "button",
    "aria-pressed": activeScale === s.id,
    className: "ds-topnav__scale-btn",
    style: {
      fontSize: s.size
    },
    onClick: () => selectScale(s.id)
  }, "A"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-topnav__profile ds-topnav__right--desktop-only",
    onClick: onProfileClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-topnav__avatar"
  }, userInitial), "My Profile"))), tabs.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ds-topnav__tabsrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    tabs: tabs,
    value: tab,
    defaultValue: defaultTab,
    onChange: onTabChange,
    style: {
      borderBottom: "none"
    }
  })));
}
Object.assign(__ds_scope, {
  TopNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TopNav.jsx", error: String(e && e.stack || e) }); }

__ds_ns.TopNav = __ds_scope.TopNav;


__ds_ns.Accordion = __ds_scope.Accordion;

// components/forms/FilterChipGroup.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/**
 * A row of toggle-button pills for filtering a list — "All" plus any
 * number of topic chips. Unselected chips read "+ Label" (an invitation
 * to add that filter); selected chips read "✓ Label" with a stronger
 * border, so state is carried by icon and weight, not color alone.
 * "All" is a reset: selecting it clears every topic; selecting any topic
 * clears "All". There is no state where both "All" and a topic are
 * checked at once.
 */
function Chip({
  checked,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": checked,
    onClick: onClick,
    style: {
      font: "var(--type-body-strong)",
      letterSpacing: "var(--type-body-strong-tracking)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      minHeight: 48,
      padding: "0 20px",
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      color: checked ? "var(--text-strong)" : "var(--text-body)",
      border: `${checked ? 2 : 1.5}px solid ${checked ? "var(--brand-selected)" : "var(--border-default)"}`,
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: checked ? "check" : "plus",
    size: 16,
    strokeWidth: 3,
    color: checked ? "var(--brand-selected)" : "var(--text-muted)"
  }), label);
}

/**
 * @param {{value:string,label:string}[]} options
 * @param {string[]} value - selected option values; empty array means "All".
 */
function FilterChipGroup({
  options = [],
  value = [],
  onChange,
  allLabel = "All Topics",
  ariaLabel = "Filter",
  style = {},
  ...rest
}) {
  const isAll = value.length === 0;
  const toggle = optValue => {
    const next = value.includes(optValue) ? value.filter(v => v !== optValue) : [...value, optValue];
    onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": ariaLabel,
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Chip, {
    checked: isAll,
    label: allLabel,
    onClick: () => onChange([])
  }), options.map(opt => /*#__PURE__*/React.createElement(Chip, {
    key: opt.value,
    checked: value.includes(opt.value),
    label: opt.label,
    onClick: () => toggle(opt.value)
  })));
}
Object.assign(__ds_scope, {
  FilterChipGroup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChipGroup.jsx", error: String(e && e.stack || e) }); }
__ds_ns.FilterChipGroup = __ds_scope.FilterChipGroup;

// components/forms/TextArea.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Labeled multi-line text field with optional character count, hint and error. */
function TextArea({
  label,
  hint,
  error,
  required = false,
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  rows = 6,
  maxLength,
  showCount = maxLength !== undefined,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const areaId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const borderColor = error ? "var(--textinput-input-border-error-enabled)" : focus ? "var(--textinput-input-border-default-focused)" : "var(--textinput-input-border-default-enabled)";
  const hasValue = value !== undefined && value !== null && String(value).length > 0;
  const filled = hasValue && !focus;
  const textColor = filled ? "var(--textinput-input-text-filled-enabled)" : "var(--textinput-input-text-default-enabled)";
  const count = String(value ?? "").length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: areaId,
    style: {
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--textinput-input-text-error-enabled)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: disabled ? "var(--textinput-input-fill-default-disabled)" : "var(--textinput-input-fill-default-enabled)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: areaId,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    rows: rows,
    maxLength: maxLength,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      resize: "vertical",
      padding: "14px 16px",
      color: textColor,
      minWidth: 0
    }
  }, rest))), (error || hint || showCount) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--textinput-input-text-error-enabled)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)"
    }
  }, hint) : /*#__PURE__*/React.createElement("span", null), showCount && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }, count, maxLength !== undefined ? `/${maxLength}` : "")));
}
Object.assign(__ds_scope, {
  TextArea
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String(e && e.stack || e) }); }
__ds_ns.TextArea = __ds_scope.TextArea;

// components/forms/SearchBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** bg = flat icon-panel fill, fg = icon color — same tint map as ResourceCard's
 *  mediaTone, reused here so a resource result row previews the same colors
 *  the full card would use. */
const MEDIA_ICON_TONES = {
  neutral: {
    bg: "var(--bi-neutral-200)",
    fg: "var(--text-muted)"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-fg)"
  },
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-fg)"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    fg: "var(--status-warning-fg)"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger-fg)"
  },
  brand: {
    bg: "var(--brand-accent)",
    fg: "var(--brand-on-accent)"
  }
};
function SearchBar({
  variant = "surface",
  // "surface" (on white/card bg) | "brand" (on --surface-brand bg)
  label,
  hint,
  id,
  name,
  placeholder = "Search",
  value,
  onChange,
  onSubmit,
  // (query) — Enter with no result highlighted
  onSelectResult,
  // (item, group)
  results = [],
  // [{ heading?, items: [{ kind: "option", id, label } | { kind: "resource", id, title, description, image, mediaIcon, mediaTone, badgeLabel, badgeTone }] }]
  loading = false,
  emptyMessage = "No results found",
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [panelRect, setPanelRect] = React.useState(null);
  const rootRef = React.useRef(null);
  const fieldRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState("");
  const query = isControlled ? value : internalValue;
  const flat = React.useMemo(() => {
    const list = [];
    results.forEach(group => {
      (group.items || []).forEach(item => list.push({
        item,
        group
      }));
    });
    return list;
  }, [results]);
  const searchId = id || "search";
  const listId = `${searchId}-listbox`;
  const labelId = label ? `${searchId}-label` : undefined;
  const showPanel = open && !disabled && (loading || query.length > 0);
  React.useEffect(() => {
    if (!showPanel) return;
    function onDocMouseDown(e) {
      const insideField = rootRef.current && rootRef.current.contains(e.target);
      const insidePanel = panelRef.current && panelRef.current.contains(e.target);
      if (!insideField && !insidePanel) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [showPanel]);

  // Portal-rendered panel (see Select.jsx) so it's never clipped by a
  // scrolling ancestor; re-measured on scroll/resize while open.
  React.useEffect(() => {
    if (!showPanel) return;
    function measure() {
      const rect = fieldRef.current && fieldRef.current.getBoundingClientRect();
      if (!rect) return;
      setPanelRect({
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width
      });
    }
    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [showPanel]);
  React.useEffect(() => {
    setActiveIndex(-1);
  }, [query, results]);
  function setQuery(next) {
    if (!isControlled) setInternalValue(next);
    onChange && onChange({
      target: {
        value: next,
        name
      }
    });
  }
  function commit(index) {
    const row = flat[index];
    if (!row) return;
    onSelectResult && onSelectResult(row.item, row.group);
    setOpen(false);
  }
  function clear() {
    setQuery("");
    inputRef.current && inputRef.current.focus();
  }
  function onKeyDown(e) {
    if (disabled) return;
    if (e.key === "ArrowDown") {
      if (!flat.length) return;
      e.preventDefault();
      setOpen(true);
      setActiveIndex(i => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp") {
      if (!flat.length) return;
      e.preventDefault();
      setOpen(true);
      setActiveIndex(i => (i - 1 + flat.length) % flat.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && flat[activeIndex]) commit(activeIndex);else onSubmit && onSubmit(query);
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        setOpen(false);
      }
    }
  }
  const onSurface = variant === "brand";
  const borderColor = onSurface ? focus || open ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.32)" : focus || open ? "var(--textinput-input-border-default-focused)" : "var(--textinput-input-border-default-enabled)";
  const fieldBg = onSurface ? "rgba(255,255,255,.14)" : disabled ? "var(--textinput-input-fill-default-disabled)" : "var(--textinput-input-fill-default-enabled)";
  const textColor = onSurface ? "var(--brand-on-primary)" : "var(--textinput-input-text-default-enabled)";
  const iconColor = onSurface ? "rgba(255,255,255,.75)" : "var(--text-muted)";
  const placeholderClass = onSurface ? "ds-searchbar-input--inverse" : "ds-searchbar-input--default";
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .ds-searchbar-input--default::placeholder { color: var(--textinput-input-text-default-placeholder); }
        .ds-searchbar-input--inverse::placeholder { color: rgba(255,255,255,.65); }
      `), label && /*#__PURE__*/React.createElement("label", {
    id: labelId,
    htmlFor: searchId,
    style: {
      font: "var(--type-label-sm)",
      letterSpacing: "var(--type-label-sm-tracking)",
      color: onSurface ? "var(--brand-on-primary)" : "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    ref: fieldRef,
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": showPanel,
    "aria-owns": listId,
    "aria-labelledby": label ? labelId : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 52,
      padding: "0 16px",
      background: fieldBg,
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-pill)",
      boxShadow: !onSurface && (focus || open) ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
      opacity: disabled ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: iconColor,
    style: {
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    ref: inputRef,
    id: searchId,
    name: name,
    type: "text",
    role: "searchbox",
    "aria-autocomplete": "list",
    "aria-controls": listId,
    "aria-activedescendant": activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined,
    className: placeholderClass,
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setOpen(true);
    },
    onFocus: () => {
      setFocus(true);
      setOpen(true);
    },
    onBlur: () => setFocus(false),
    onKeyDown: onKeyDown,
    placeholder: placeholder,
    disabled: disabled,
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--type-label-tracking)",
      flex: 1,
      alignSelf: "stretch",
      border: "none",
      outline: "none",
      background: "transparent",
      color: textColor,
      minWidth: 0
    }
  }, rest)), query.length > 0 && !disabled && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: clear,
    onMouseDown: e => e.preventDefault(),
    style: {
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      padding: 0,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: iconColor
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  }))), showPanel && panelRect && /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement("ul", {
    ref: panelRef,
    id: listId,
    role: "listbox",
    "aria-labelledby": label ? labelId : undefined,
    style: {
      position: "fixed",
      top: panelRect.top,
      left: panelRect.left,
      width: panelRect.width,
      zIndex: 1000,
      margin: 0,
      padding: 6,
      listStyle: "none",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      maxHeight: 360,
      overflowY: "auto"
    }
  }, loading ? /*#__PURE__*/React.createElement("li", {
    style: {
      padding: "12px 12px",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Searching\u2026") : flat.length === 0 ? /*#__PURE__*/React.createElement("li", {
    style: {
      padding: "12px 12px",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, emptyMessage) : (() => {
    let cursor = -1;
    return results.map((group, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: group.heading || gi
    }, group.heading && /*#__PURE__*/React.createElement("li", {
      role: "presentation",
      style: {
        padding: "8px 12px 4px",
        font: "var(--type-overline)",
        letterSpacing: "var(--type-overline-tracking)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, group.heading), (group.items || []).map(item => {
      cursor += 1;
      const index = cursor;
      const isActive = index === activeIndex;
      return /*#__PURE__*/React.createElement("li", {
        key: item.id ?? index,
        id: `${listId}-option-${index}`,
        role: "option",
        "aria-selected": isActive,
        onMouseEnter: () => setActiveIndex(index),
        onMouseDown: e => e.preventDefault(),
        onClick: () => commit(index),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: item.kind === "resource" ? "8px 10px" : "10px 12px",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          background: isActive ? "var(--surface-sunken)" : "transparent"
        }
      }, item.kind === "resource" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 40,
          height: 40,
          flex: "none",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: item.image ? "var(--bi-neutral-200)" : (MEDIA_ICON_TONES[item.mediaTone] || MEDIA_ICON_TONES.neutral).bg
        }
      }, item.image ? /*#__PURE__*/React.createElement("img", {
        src: item.image,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }
      }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: item.mediaIcon || "file",
        size: 20,
        color: (MEDIA_ICON_TONES[item.mediaTone] || MEDIA_ICON_TONES.neutral).fg
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-label)",
          letterSpacing: "var(--type-label-tracking)",
          color: "var(--text-strong)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, item.title), item.badgeLabel && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
        tone: item.badgeTone,
        size: "sm"
      }, item.badgeLabel)), item.description && /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-body-sm)",
          letterSpacing: "var(--type-body-sm-tracking)",
          color: "var(--text-muted)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, item.description))) : /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-label)",
          letterSpacing: "var(--type-label-tracking)",
          color: "var(--text-body)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, item.label));
    })));
  })()), document.body), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--type-meta-tracking)",
      color: onSurface ? "rgba(255,255,255,.65)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, {
  SearchBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String(e && e.stack || e) }); }
__ds_ns.SearchBar = __ds_scope.SearchBar;

// components/feedback/Footer.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const DEFAULT_LINKS = [{
  label: "Accessibility Statement",
  href: "#"
}, {
  label: "Terms of Use",
  href: "#"
}, {
  label: "Imprint",
  href: "#"
}, {
  label: "US Privacy Statement",
  href: "#"
}, {
  label: "Consumer Health Data Privacy Statement",
  href: "#"
}, {
  label: "Cookie Statement",
  href: "#"
}, {
  label: "Do Not Sell or Share My Personal Data",
  href: "#"
}, {
  label: "Limit the Use of My Sensitive Data",
  href: "#"
}];

/**
 * Page-footer chrome: a "need help" block (heading + copy + Contact Us)
 * and legal fine print on the left, a wrapping list of legal/policy links
 * on the right. Stacks to a single column under 720px, links going
 * full-width (same breakpoint TopNav/BottomNav use for their handoff).
 */
function Footer({
  helpTitle = "Need help using this page?",
  helpText,
  contactLabel = "Contact Us",
  onContactClick,
  legalText,
  links = DEFAULT_LINKS,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "ds-footer",
    style: style
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        .ds-footer { background: var(--bi-warm-gray); padding: var(--space-20) var(--space-8); display: flex; justify-content: center; }
        .ds-footer__container { width: 100%; max-width: var(--container-xl); display: flex; flex-wrap: wrap; gap: var(--space-8) var(--space-16); align-items: flex-start; }
        .ds-footer__help { flex: 1 1 340px; min-width: 280px; display: flex; flex-direction: column; gap: var(--space-8); }
        .ds-footer__help-top { display: flex; flex-direction: column; align-items: flex-start; gap: var(--space-3); }
        .ds-footer__heading-group { display: flex; flex-direction: column; gap: var(--space-1); }
        .ds-footer__title { font: var(--type-heading); letter-spacing: var(--type-heading-tracking); color: var(--text-strong); margin: 0; }
        .ds-footer__subtitle { font: var(--type-body); color: var(--text-body); margin: 0; }
        .ds-footer__legal { font: var(--type-body-sm); color: var(--text-muted); margin: 0; }
        .ds-footer__legal p { margin: 0 0 var(--space-1) 0; }
        .ds-footer__legal p:last-child { margin-bottom: 0; }
        .ds-footer__links { flex: 1 1 340px; max-width: 460px; display: flex; flex-wrap: wrap; gap: var(--space-4); justify-content: flex-end; }
        .ds-footer__link { flex: 0 0 auto; width: 212px; min-height: 48px; display: flex; align-items: center; padding: 0 var(--space-5); border-radius: var(--radius-pill); background: transparent; border: none; font: var(--type-label-sm); letter-spacing: var(--type-label-sm-tracking); line-height: 1.5; color: var(--text-strong); text-decoration: none; transition: background var(--duration-fast) var(--ease-standard); }
        .ds-footer__link:hover { background: var(--action-button-fill-tertiary-hover); }
        @media (max-width: 720px) {
          .ds-footer { padding: var(--space-12) var(--space-4); }
          .ds-footer__container { flex-direction: column; gap: var(--space-12); }
          .ds-footer__links { justify-content: flex-start; max-width: none; width: 100%; }
          .ds-footer__link { width: 100%; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "ds-footer__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-footer__help"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-footer__help-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-footer__heading-group"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-footer__title"
  }, helpTitle), helpText && /*#__PURE__*/React.createElement("p", {
    className: "ds-footer__subtitle"
  }, helpText)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "xs",
    onClick: onContactClick
  }, contactLabel)), legalText && /*#__PURE__*/React.createElement("div", {
    className: "ds-footer__legal"
  }, legalText)), links.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "ds-footer__links",
    "aria-label": "Legal"
  }, links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link.label,
    className: "ds-footer__link",
    href: link.href,
    target: link.target,
    rel: link.target === "_blank" ? "noopener" : undefined
  }, link.label)))));
}
Object.assign(__ds_scope, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Footer.jsx", error: String(e && e.stack || e) }); }
__ds_ns.Footer = __ds_scope.Footer;

})();
