/* @ds-bundle: {"format":4,"namespace":"SpareCareDesignSystem_556483","components":[{"name":"AnnotatedScreen","sourcePath":"components/annotation/AnnotatedScreen.jsx"},{"name":"AnnotationLegend","sourcePath":"components/annotation/AnnotationLegend.jsx"},{"name":"AnnotationMarker","sourcePath":"components/annotation/AnnotationMarker.jsx"},{"name":"BrowserChrome","sourcePath":"components/annotation/BrowserChrome.jsx"},{"name":"WireframeDoc","sourcePath":"components/annotation/WireframeDoc.jsx"},{"name":"WireframeSheet","sourcePath":"components/annotation/WireframeSheet.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"PartRow","sourcePath":"components/core/PartRow.jsx"},{"name":"SearchBar","sourcePath":"components/core/SearchBar.jsx"},{"name":"StoreCard","sourcePath":"components/core/StoreCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ActionBar","sourcePath":"components/wms/ActionBar.jsx"},{"name":"CameraButton","sourcePath":"components/wms/CameraButton.jsx"},{"name":"Field","sourcePath":"components/wms/Field.jsx"},{"name":"GenBanner","sourcePath":"components/wms/GenBanner.jsx"},{"name":"GenContextBar","sourcePath":"components/wms/GenContextBar.jsx"},{"name":"HandheldFrame","sourcePath":"components/wms/HandheldFrame.jsx"},{"name":"InfoNote","sourcePath":"components/wms/InfoNote.jsx"},{"name":"KpiTile","sourcePath":"components/wms/KpiTile.jsx"},{"name":"QueueTable","sourcePath":"components/wms/QueueTable.jsx"},{"name":"ScreenHeader","sourcePath":"components/wms/ScreenHeader.jsx"},{"name":"SelectInput","sourcePath":"components/wms/SelectInput.jsx"},{"name":"Stepper","sourcePath":"components/wms/Stepper.jsx"},{"name":"TextInput","sourcePath":"components/wms/TextInput.jsx"},{"name":"WorkflowChecklist","sourcePath":"components/wms/WorkflowChecklist.jsx"}],"sourceHashes":{"components/annotation/AnnotatedScreen.jsx":"e3eda9b27059","components/annotation/AnnotationLegend.jsx":"23beab06affc","components/annotation/AnnotationMarker.jsx":"1847cf4b707a","components/annotation/BrowserChrome.jsx":"455a6f83e947","components/annotation/WireframeDoc.jsx":"b42e8e982f67","components/annotation/WireframeSheet.jsx":"abd6b0ea6eee","components/core/Button.jsx":"3ba0157abd72","components/core/Icon.jsx":"5da8d81212d3","components/core/PartRow.jsx":"b9a79081d3b5","components/core/SearchBar.jsx":"b3b6e0dd1663","components/core/StoreCard.jsx":"9101fdbcb8a1","components/core/Tag.jsx":"7b22545dac46","components/wms/ActionBar.jsx":"bc99bb1e1ef8","components/wms/CameraButton.jsx":"b325f3aae20e","components/wms/Field.jsx":"a6d3a2f8ccba","components/wms/GenBanner.jsx":"3d0319d4573a","components/wms/GenContextBar.jsx":"e24a794a1bb2","components/wms/HandheldFrame.jsx":"ba17bce07acb","components/wms/InfoNote.jsx":"27fd56fb0070","components/wms/KpiTile.jsx":"f74cbd4b13a5","components/wms/QueueTable.jsx":"453f706e15a4","components/wms/ScreenHeader.jsx":"cc1bf73b13a8","components/wms/SelectInput.jsx":"6bfbfb05231f","components/wms/Stepper.jsx":"2d8124be2055","components/wms/TextInput.jsx":"c6300ec07fe1","components/wms/WorkflowChecklist.jsx":"1d506d34582e","ui_kits/wms-inward/Screen1GateEntry.jsx":"6ac78404982f","ui_kits/wms-inward/Screen2ConsignmentDetails.jsx":"11b4318e952c","ui_kits/wms-inward/Screen3Dashboard.jsx":"fc491d2cec61","ui_kits/wms-inward/annotations.js":"dff47e6162b9","ui_kits/wms-inward/web/ConsignmentWeb.jsx":"4821c350de95","ui_kits/wms-inward/web/DashboardWeb.jsx":"58d256a9b8e3","ui_kits/wms-inward/web/GateEntryWeb.jsx":"6c9c7c3dfb59","ui_kits/wms-inward/web/WebShell.jsx":"f845afbd1f6b","ui_kits/wms-inward/web/webAnnotations.js":"9488cc3a7255","web-portal/boot.js":"9279fb6c6fd2","web-portal/screens.js":"11b81c63f30f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpareCareDesignSystem_556483 = window.SpareCareDesignSystem_556483 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/annotation/AnnotationLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AnnotationLegend({
  title = 'Annotations',
  items = [],
  columns = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--anno-legend-bg)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card-tight)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)',
      marginBottom: 'var(--sp-2)',
      paddingBottom: '10px',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, title), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '12px var(--sp-3)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '22px 1fr',
      gap: '10px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: 'var(--r-round)',
      background: it.tone === 'open' ? 'var(--status-warn)' : 'var(--anno-marker-bg)',
      color: 'var(--anno-marker-fg)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '12px',
      lineHeight: 1,
      marginTop: '1px'
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, it.label), it.ref && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-teal-deep)',
      background: 'var(--surface-sunken)',
      padding: '2px 6px',
      borderRadius: 'var(--r-sharp)',
      whiteSpace: 'nowrap'
    }
  }, it.ref), it.control && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-500)'
    }
  }, it.control)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, it.description))))));
}
Object.assign(__ds_scope, { AnnotationLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/AnnotationLegend.jsx", error: String((e && e.message) || e) }); }

// components/annotation/AnnotationMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A numbered callout. Rendered inside AnnotatedScreen's padded gutter, which has no
   clipping ancestor, so a marker sitting on the screen edge is never cut off. */
function AnnotationMarker({
  n,
  x,
  y,
  size = 26,
  tone = 'primary',
  title,
  style,
  ...rest
}) {
  const fill = tone === 'open' ? 'var(--status-warn)' : 'var(--anno-marker-bg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    title: title,
    style: {
      position: 'absolute',
      left: typeof x === 'number' ? x + '%' : x,
      top: typeof y === 'number' ? y + '%' : y,
      transform: 'translate(-50%,-50%)',
      width: size,
      height: size,
      borderRadius: 'var(--r-round)',
      background: fill,
      color: 'var(--anno-marker-fg)',
      border: '2.5px solid var(--anno-marker-ring)',
      boxShadow: 'var(--shadow-raised)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.54 + 'px',
      lineHeight: 1,
      zIndex: 5,
      pointerEvents: 'auto',
      ...style
    }
  }, rest), n);
}
Object.assign(__ds_scope, { AnnotationMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/AnnotationMarker.jsx", error: String((e && e.message) || e) }); }

// components/annotation/AnnotatedScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wraps a screen in a gutter wide enough for a marker to straddle the screen edge.
   Nothing in this component clips, so callout circles are never cut by a boundary. */
function AnnotatedScreen({
  screenLabel,
  screenRef,
  gutter = 22,
  markers = [],
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: gutter,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'visible'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: gutter,
      overflow: 'visible',
      pointerEvents: 'none'
    }
  }, markers.map(m => /*#__PURE__*/React.createElement(__ds_scope.AnnotationMarker, _extends({
    key: m.n
  }, m))))), (screenLabel || screenRef) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      justifyContent: 'center'
    }
  }, screenLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, screenLabel), screenRef && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--sc-grey-500)'
    }
  }, screenRef)));
}
Object.assign(__ds_scope, { AnnotatedScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/AnnotatedScreen.jsx", error: String((e && e.message) || e) }); }

// components/annotation/BrowserChrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Minimal light browser chrome for presenting a web wireframe. Deliberately quiet —
   it frames the screen without competing with it. */
function BrowserChrome({
  url,
  accent = 'var(--sc-teal-deep)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-field)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '9px 14px',
      background: 'var(--sc-chrome)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flex: '0 0 auto'
    }
  }, ['#C1503F', '#E2963C', '#4C9A6A'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: '9px',
      height: '9px',
      borderRadius: 'var(--r-round)',
      background: c,
      opacity: 0.75
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--sc-grey-600)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '3px',
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { BrowserChrome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/BrowserChrome.jsx", error: String((e && e.message) || e) }); }

// components/annotation/WireframeDoc.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 12px',
      whiteSpace: 'nowrap'
    }
  }, children);
}

/* One screen as a complete document. In 'wireframe' mode only the screen renders;
   in 'annotated' mode the surrounding specification material and the numbered
   callouts and legend render with it. */
function WireframeDoc({
  mode = 'wireframe',
  eyebrow,
  group,
  screenId,
  screenName,
  headline,
  intro,
  chips = [],
  sectionLabel = 'The wireframe',
  sectionNote,
  markers = [],
  items = [],
  legendColumns = 2,
  gutter = 26,
  children,
  style,
  ...rest
}) {
  const annotated = mode === 'annotated';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--sp-4)',
      background: 'var(--anno-canvas)',
      minHeight: '100%',
      ...style
    }
  }, rest), annotated && /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 'var(--sp-4)'
    }
  }, (eyebrow || group) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '26px',
      height: '2px',
      background: 'var(--sc-teal)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--sc-teal-deep)'
    }
  }, eyebrow), group && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)'
    }
  }, group)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '40px',
      lineHeight: 1.08,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      maxWidth: '30ch'
    }
  }, screenId && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '26px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-teal)',
      marginRight: '12px'
    }
  }, screenId), headline || screenName), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: '78ch',
      marginTop: 'var(--sp-2)',
      marginBottom: 0
    }
  }, intro), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: 'var(--sp-3)'
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '2px',
      background: 'var(--sc-teal-deep)',
      marginTop: 'var(--sp-3)'
    }
  })), annotated && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-teal-deep)',
      border: '1px solid var(--border-field)',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--r-sharp)',
      padding: '3px 8px'
    }
  }, "01"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '24px',
      color: 'var(--text-heading)'
    }
  }, sectionLabel)), annotated && sectionNote && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      maxWidth: '78ch',
      margin: '0 0 var(--sp-3)'
    }
  }, sectionNote), annotated ? /*#__PURE__*/React.createElement(__ds_scope.AnnotatedScreen, {
    gutter: gutter,
    markers: markers,
    style: {
      alignItems: 'stretch'
    }
  }, children) : /*#__PURE__*/React.createElement("div", null, children), annotated && items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-teal-deep)',
      border: '1px solid var(--border-field)',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--r-sharp)',
      padding: '3px 8px'
    }
  }, "02"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '24px',
      color: 'var(--text-heading)'
    }
  }, "Annotations")), /*#__PURE__*/React.createElement(__ds_scope.AnnotationLegend, {
    title: null,
    items: items,
    columns: legendColumns
  })));
}
Object.assign(__ds_scope, { WireframeDoc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/WireframeDoc.jsx", error: String((e && e.message) || e) }); }

// components/annotation/WireframeSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The page shell for a wireframe sheet: title block, a non-clipping screen row,
   and the legend area beneath. */
function WireframeSheet({
  title,
  subtitle,
  meta = [],
  children,
  footer,
  width = '1280px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--anno-canvas)',
      minHeight: '100%',
      padding: 'var(--sp-5) var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      minWidth: width,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-3)',
      paddingBottom: 'var(--sp-2)',
      borderBottom: '1px solid rgba(4,1,1,0.18)',
      marginBottom: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-display)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)',
      maxWidth: '70ch'
    }
  }, subtitle)), meta.length > 0 && /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      margin: 0,
      flexWrap: 'wrap'
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-500)'
    }
  }, m.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '2px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-teal-deep)'
    }
  }, m.value))))), children, footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--sp-4)',
      paddingTop: 'var(--sp-2)',
      borderTop: '1px solid rgba(4,1,1,0.18)',
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { WireframeSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/annotation/WireframeSheet.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-semibold)',
  borderRadius: 'var(--radius-button)',
  border: '1.5px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  textDecoration: 'none',
  transition: 'var(--transition-interactive)',
  whiteSpace: 'nowrap'
};
const sizes = {
  lg: {
    fontSize: 'var(--fs-body-sm)',
    padding: '14px 26px',
    minHeight: 'var(--hit-min)'
  },
  md: {
    fontSize: 'var(--fs-label)',
    padding: '11px 20px',
    minHeight: '40px'
  },
  sm: {
    fontSize: 'var(--fs-caption)',
    padding: '8px 14px',
    minHeight: '32px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-dark)'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--text-on-dark)'
  },
  secondary: {
    background: 'transparent',
    borderColor: 'var(--action-secondary-border)',
    color: 'var(--sc-graphite)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--sc-teal-deep)',
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0
  },
  onyx: {
    background: 'var(--surface-onyx)',
    color: 'var(--text-on-dark)'
  },
  quiet: {
    background: 'var(--sc-chrome)',
    color: 'var(--sc-grey-600)',
    borderColor: 'var(--sc-chrome)'
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  disabled = false,
  block = false,
  as,
  href,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const look = disabled ? {
    background: 'var(--action-disabled-bg)',
    color: 'var(--action-disabled-fg)',
    borderColor: 'transparent',
    cursor: 'not-allowed'
  } : variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: {
      ...base,
      ...sizes[size],
      ...look,
      width: block ? '100%' : undefined,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN and asked to replace the placeholder element in place,
   which keeps stroke colour bound to currentColor. See ICONOGRAPHY in readme.md —
   this is a flagged substitution for the icon set baked into the FRD artwork. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const host = React.useRef(null);
  React.useEffect(() => {
    const el = host.current;
    if (!el) return;
    const draw = () => {
      if (window.lucide && el) {
        el.innerHTML = '';
        const i = document.createElement('i');
        i.setAttribute('data-lucide', name);
        el.appendChild(i);
        window.lucide.createIcons({
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth
          },
          nameAttr: 'data-lucide',
          root: el
        });
      }
    };
    if (window.lucide) draw();else {
      const id = setInterval(() => {
        if (window.lucide) {
          clearInterval(id);
          draw();
        }
      }, 60);
      return () => clearInterval(id);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: host,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchBar({
  placeholder = 'Search part name or number…',
  value,
  onChange,
  glyph = '\u2315',
  maxWidth = '420px',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: 'var(--border-field-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-button)',
      padding: '12px 16px',
      maxWidth,
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sc-grey-500)',
      fontSize: 'var(--fs-label)',
      lineHeight: 1
    }
  }, glyph), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      flex: 1,
      background: 'none',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  ok: {
    background: 'var(--status-ok-bg)',
    color: 'var(--status-ok)',
    dot: 'var(--status-ok)'
  },
  low: {
    background: 'var(--status-warn-bg)',
    color: 'var(--status-warn-fg)',
    dot: 'var(--status-warn)'
  },
  out: {
    background: 'var(--status-error-bg)',
    color: 'var(--status-error)',
    dot: 'var(--status-error)'
  },
  neutral: {
    background: 'var(--sc-paper-dim)',
    color: 'var(--sc-grey-600)',
    dot: 'var(--sc-graphite)'
  },
  info: {
    background: 'var(--sc-teal-tint)',
    color: 'var(--sc-teal-deep)',
    dot: 'var(--sc-teal)'
  }
};
function Tag({
  tone = 'ok',
  dot = true,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.ok;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      padding: dot ? '6px 12px 6px 10px' : '6px 12px',
      borderRadius: 'var(--radius-tag)',
      background: t.background,
      color: t.color,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: 'var(--r-round)',
      background: t.dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/PartRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PartRow({
  name,
  fitment,
  partNumber,
  availability,
  tone = 'ok',
  statusLabel = 'In stock',
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto auto',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      padding: '14px 0',
      borderBottom: last ? 'none' : '1px solid var(--border-default)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, name), fitment && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--sc-grey-500)',
      marginTop: '2px'
    }
  }, fitment)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-data)'
    }
  }, partNumber), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--sc-grey-600)'
    }
  }, availability), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tone
  }, statusLabel));
}
Object.assign(__ds_scope, { PartRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PartRow.jsx", error: String((e && e.message) || e) }); }

// components/core/StoreCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StoreCard({
  name,
  location,
  matchLabel,
  tone = 'ok',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card-tight)',
      background: 'var(--surface-card)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-ui)',
      fontWeight: 'var(--fw-semibold)',
      display: 'block',
      color: 'var(--text-body)'
    }
  }, name), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption-sm)',
      color: 'var(--sc-grey-500)'
    }
  }, location)), matchLabel && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tone
  }, matchLabel));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StoreCard.jsx", error: String((e && e.message) || e) }); }

// components/wms/ActionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ActionBar({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      padding: 'var(--sp-2)',
      borderTop: '1px solid var(--border-soft)',
      background: 'var(--surface-card)',
      flex: '0 0 auto',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/ActionBar.jsx", error: String((e && e.message) || e) }); }

// components/wms/CameraButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CameraButton({
  onClick,
  label = 'Capture document photo',
  size = 44,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    "aria-label": label,
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--sc-onyx)',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 26,
    strokeWidth: 1.75
  }));
}
Object.assign(__ds_scope, { CameraButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/CameraButton.jsx", error: String((e && e.message) || e) }); }

// components/wms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  required = false,
  hint,
  children,
  adjacent,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginBottom: 'var(--gap-field)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      color: 'var(--text-body)',
      marginBottom: '6px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-error)'
    }
  }, "*")), adjacent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), adjacent) : children, hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-500)',
      marginTop: '5px'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/Field.jsx", error: String((e && e.message) || e) }); }

// components/wms/GenBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GenBanner({
  gen,
  label = 'Gate Entry Number',
  message = 'Created Successfully !',
  footnote,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--status-success-banner)',
      color: 'var(--text-on-dark)',
      padding: '14px var(--sp-2)',
      textAlign: 'center',
      borderRadius: 'var(--radius-field)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      opacity: 0.92
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '28px',
      letterSpacing: '0.06em',
      margin: '2px 0 4px'
    }
  }, gen), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, message), footnote && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      opacity: 0.9,
      marginTop: '4px'
    }
  }, footnote));
}
Object.assign(__ds_scope, { GenBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/GenBanner.jsx", error: String((e && e.message) || e) }); }

// components/wms/GenContextBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GenContextBar({
  gen,
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-field)',
      borderRadius: 'var(--radius-field)',
      padding: '10px 16px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      paddingRight: 'var(--sp-3)',
      borderRight: '1px solid var(--border-field)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)'
    }
  }, "Gate Entry Number"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--sc-teal-deep)',
      letterSpacing: '0.02em'
    }
  }, gen)), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-ui)',
      color: 'var(--text-body)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { GenContextBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/GenContextBar.jsx", error: String((e && e.message) || e) }); }

// components/wms/HandheldFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The WMS runs on rugged handheld terminals. This is the screen surface only —
   no device bezel, matching how the FRD artwork presents each screen. */
function HandheldFrame({
  label,
  width = 'var(--handheld-width)',
  height,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, rest), children), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--sc-grey-600)'
    }
  }, label));
}
Object.assign(__ds_scope, { HandheldFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/HandheldFrame.jsx", error: String((e && e.message) || e) }); }

// components/wms/InfoNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--sc-teal-deep)',
    icon: 'info'
  },
  warn: {
    bg: 'var(--status-warn-bg)',
    fg: 'var(--status-warn-fg)',
    icon: 'alert-triangle'
  },
  error: {
    bg: 'var(--status-error-bg)',
    fg: 'var(--status-error)',
    icon: 'circle-alert'
  }
};
function InfoNote({
  tone = 'info',
  icon,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-field)',
      padding: '10px 12px',
      font: 'var(--type-caption)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 16,
    strokeWidth: 1.75,
    style: {
      marginTop: '1px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      lineHeight: 1.45
    }
  }, children));
}
Object.assign(__ds_scope, { InfoNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/InfoNote.jsx", error: String((e && e.message) || e) }); }

// components/wms/KpiTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function KpiTile({
  label,
  value,
  unit,
  active = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    type: "button",
    style: {
      flex: '1 1 0',
      minWidth: 0,
      textAlign: 'center',
      background: 'var(--surface-card)',
      border: active ? '1.5px solid var(--sc-teal)' : '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-tile)',
      padding: '10px 8px',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: 'var(--shadow-card)',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)',
      lineHeight: 1.25
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: '5px',
      marginTop: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '24px',
      color: 'var(--sc-teal)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-teal)'
    }
  }, unit)));
}
Object.assign(__ds_scope, { KpiTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/KpiTile.jsx", error: String((e && e.message) || e) }); }

// components/wms/QueueTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QueueTable({
  caption,
  columns = [],
  rows = [],
  minRows = 5,
  onRowClick,
  emptyLabel,
  style,
  ...rest
}) {
  const pad = Math.max(0, minRows - rows.length);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginBottom: 'var(--sp-3)',
      ...style
    }
  }, rest), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)',
      marginBottom: '6px'
    }
  }, caption), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      textAlign: c.align || 'left',
      padding: '7px 8px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.gen || i,
    onClick: onRowClick ? () => onRowClick(r) : undefined,
    style: {
      background: i % 2 ? 'var(--surface-row-alt)' : 'var(--surface-card)',
      cursor: onRowClick ? 'pointer' : 'default'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      font: c.mono ? 'var(--type-data)' : 'var(--type-caption)',
      color: c.link ? 'var(--sc-teal-deep)' : 'var(--text-body)',
      textDecoration: c.link ? 'underline' : 'none',
      textAlign: c.align || 'left',
      padding: '7px 8px',
      borderBottom: '1px solid var(--border-soft)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r[c.key])))), Array.from({
    length: pad
  }).map((_, i) => /*#__PURE__*/React.createElement("tr", {
    key: 'pad' + i,
    style: {
      background: (rows.length + i) % 2 ? 'var(--surface-row-alt)' : 'var(--surface-card)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: '7px 8px',
      borderBottom: '1px solid var(--border-soft)',
      height: '28px'
    }
  }, "\xA0")))))), rows.length === 0 && emptyLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-500)',
      marginTop: '6px'
    }
  }, emptyLabel));
}
Object.assign(__ds_scope, { QueueTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/QueueTable.jsx", error: String((e && e.message) || e) }); }

// components/wms/ScreenHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScreenHeader({
  title,
  onBack,
  back = true,
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px var(--handheld-safe)',
      borderBottom: '1px solid var(--border-soft)',
      background: 'var(--surface-card)',
      flex: '0 0 auto',
      ...style
    }
  }, rest), back && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-heading)',
      fontSize: '20px',
      lineHeight: 1,
      fontFamily: 'var(--font-body)'
    }
  }, '\u2039'), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-screen-title)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-display)',
      flex: 1,
      minWidth: 0
    }
  }, title), right);
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/wms/SelectInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SelectInput({
  placeholder = 'Select',
  options = [],
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const empty = value === undefined || value === '' || value === null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value ?? '',
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      border: '1px solid var(--border-field)',
      borderRadius: 'var(--radius-field)',
      padding: '12px 40px 12px 14px',
      minHeight: 'var(--hit-min)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: empty ? 'var(--sc-teal)' : 'var(--text-body)',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-card)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--sc-teal)',
      fontSize: '12px',
      lineHeight: 1
    }
  }, '\u25BE'));
}
Object.assign(__ds_scope, { SelectInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/SelectInput.jsx", error: String((e && e.message) || e) }); }

// components/wms/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stepper({
  steps = [],
  current = 0,
  onStepClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const done = i < current,
      active = i === current;
    const reachable = !!onStepClick && i <= current;
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        flex: i === steps.length - 1 ? '0 0 auto' : '1 1 0',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '7px',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: reachable ? () => onStepClick(i) : undefined,
      "aria-current": active ? 'step' : undefined,
      style: {
        width: '28px',
        height: '28px',
        borderRadius: 'var(--r-round)',
        flex: '0 0 auto',
        cursor: reachable ? 'pointer' : 'default',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: '14px',
        lineHeight: 1,
        border: active || done ? 'none' : '1.5px solid var(--border-strong)',
        background: done ? 'var(--sc-teal)' : active ? 'var(--action-primary)' : 'var(--surface-card)',
        color: done || active ? 'var(--text-on-dark)' : 'var(--sc-grey-500)',
        transition: 'var(--transition-interactive)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        color: active ? 'var(--text-heading)' : done ? 'var(--sc-teal-deep)' : 'var(--sc-grey-500)',
        textAlign: 'center',
        maxWidth: '150px'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: '1 1 auto',
        height: '1.5px',
        background: done ? 'var(--sc-teal)' : 'var(--border-default)',
        margin: '13px 12px 0',
        minWidth: '24px'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/wms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = {
  width: '100%',
  border: '1px solid var(--border-field)',
  borderRadius: 'var(--radius-field)',
  padding: '12px 14px',
  minHeight: 'var(--hit-min)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  outline: 'none',
  transition: 'var(--transition-interactive)'
};
function TextInput({
  readOnly = false,
  mono = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    readOnly: readOnly,
    style: {
      ...shell,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      background: readOnly ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: readOnly ? 'var(--text-data)' : 'var(--text-body)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/wms/WorkflowChecklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WorkflowChecklist({
  title = 'Workflow Applicability Confirmation',
  steps = [],
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-field)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-onyx)',
      color: 'var(--text-on-dark)',
      font: 'var(--type-label)',
      padding: '10px 14px'
    }
  }, title), steps.map((s, i) => /*#__PURE__*/React.createElement("label", {
    key: s.id || i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-2)',
      padding: '11px 14px',
      background: i % 2 ? 'var(--sc-chrome)' : 'var(--surface-card)',
      cursor: s.locked ? 'not-allowed' : 'pointer',
      minHeight: 'var(--hit-min)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-ui)',
      color: 'var(--text-body)'
    }
  }, i + 1, ". ", s.label), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!s.checked,
    disabled: s.locked,
    onChange: () => onToggle && onToggle(s.id || i),
    style: {
      width: '20px',
      height: '20px',
      accentColor: 'var(--sc-teal)',
      flex: '0 0 auto',
      cursor: 'inherit'
    }
  }))));
}
Object.assign(__ds_scope, { WorkflowChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/wms/WorkflowChecklist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/Screen1GateEntry.jsx
try { (() => {
const {
  ScreenHeader,
  Field,
  TextInput,
  SelectInput,
  CameraButton,
  GenBanner,
  ActionBar,
  HandheldFrame,
  InfoNote,
  Button,
  Icon
} = window.SpareCareDesignSystem_556483;
const COURIER = ['Transport', 'Courier', 'Own Vehicle', 'Individual (External Person)', 'Individual (Internal Person)'];
const DOCS = ['GRN', 'Tax Invoice', 'Challan', 'Ship List', 'Delivery Challan'];
const NATURE = ['Purchase', 'Branch transfer in', 'Sales return', 'Workshop / in-house return', 'Job work return', 'Third party purchase'];
const SUPPLIERS = ['ABC Supplies Pvt. Ltd.', 'XYZ Auto Components', 'Bansal Auto Spares'];
const DEPTS = ['Spares Store', 'Workshop', 'Body Shop', 'Accounts'];
function Screen1GateEntry({
  state = {},
  set = () => {},
  onNext,
  onCancel,
  gen,
  frameProps = {}
}) {
  return /*#__PURE__*/React.createElement(HandheldFrame, frameProps, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Create GEN",
    onBack: onCancel
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px var(--handheld-safe)',
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Date & Time of Receipt",
    hint: "Captured by the system. Not editable."
  }, /*#__PURE__*/React.createElement(TextInput, {
    readOnly: true,
    value: "12 Aug 2026, 09:40",
    mono: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Name of the person",
    required: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter Person's Name",
    value: state.person || '',
    onChange: e => set('person', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Contact Number",
    required: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter the contact Number",
    value: state.contact || '',
    onChange: e => set('contact', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Where From"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Supplier Name",
    options: SUPPLIERS,
    value: state.supplier,
    onChange: e => set('supplier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "For Whom"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Department Name",
    options: DEPTS,
    value: state.dept,
    onChange: e => set('dept', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nature of Inward Transaction"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Nature of Transaction",
    options: NATURE,
    value: state.nature,
    onChange: e => set('nature', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary Document Type",
    required: true,
    adjacent: /*#__PURE__*/React.createElement(CameraButton, null)
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Primary Document Type",
    options: DOCS,
    value: state.doc,
    onChange: e => set('doc', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courier Type",
    required: true
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Courier Type",
    options: COURIER,
    value: state.courier,
    onChange: e => set('courier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "No. of Boxes",
    hint: "Indicative only. Not the reconciliation baseline."
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Approximate count at gate",
    value: state.boxes || '',
    onChange: e => set('boxes', e.target.value)
  })), gen && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-1)'
    }
  }, /*#__PURE__*/React.createElement(GenBanner, {
    gen: gen,
    footnote: "Print slip or share reference"
  }))), /*#__PURE__*/React.createElement(ActionBar, null, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    block: true,
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    block: true,
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "Next")));
}
Object.assign(window, {
  Screen1GateEntry,
  SC_COURIER: COURIER,
  SC_DOCS: DOCS,
  SC_NATURE: NATURE,
  SC_SUPPLIERS: SUPPLIERS,
  SC_DEPTS: DEPTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/Screen1GateEntry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/Screen2ConsignmentDetails.jsx
try { (() => {
const {
  ScreenHeader,
  Field,
  SelectInput,
  WorkflowChecklist,
  ActionBar,
  HandheldFrame,
  Button,
  Icon
} = window.SpareCareDesignSystem_556483;
const PRODUCT_CATS = ['Spare Parts', 'Lubricants', 'Accessories', 'Glass / Windscreen', 'Consumables', 'Others'];
const SUPPLIER_CATS = ['OEM', 'Manufacturer', 'Local Vendor', 'Other'];
function Screen2ConsignmentDetails({
  state = {},
  set = () => {},
  steps,
  onToggle,
  onNext,
  onBack,
  genOptions = [],
  frameProps = {}
}) {
  return /*#__PURE__*/React.createElement(HandheldFrame, frameProps, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Enter Consignment Details",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px var(--handheld-safe)',
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Gate Entry Number",
    required: true,
    hint: "Selected from gate entries already created."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select GEN",
    options: genOptions,
    value: state.gen,
    onChange: e => set('gen', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Product Category",
    hint: "Selected manually; not derived from the supplier."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Product Category",
    options: PRODUCT_CATS,
    value: state.productCat,
    onChange: e => set('productCat', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Supplier Category",
    hint: "Derived from the supplier record where the supplier is known."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Supplier Category",
    options: SUPPLIER_CATS,
    value: state.supplierCat,
    onChange: e => set('supplierCat', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Supplier"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Supplier",
    options: window.SC_SUPPLIERS || [],
    value: state.supplier,
    onChange: e => set('supplier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary Document Type"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Primary Document Type",
    options: window.SC_DOCS || [],
    value: state.doc,
    onChange: e => set('doc', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courier Type"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Courier Type",
    options: window.SC_COURIER || [],
    value: state.courier,
    onChange: e => set('courier', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(WorkflowChecklist, {
    steps: steps,
    onToggle: onToggle
  }))), /*#__PURE__*/React.createElement(ActionBar, null, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    block: true,
    onClick: onBack
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    block: true,
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })
  }, "Next")));
}
Object.assign(window, {
  Screen2ConsignmentDetails,
  SC_PRODUCT_CATS: PRODUCT_CATS,
  SC_SUPPLIER_CATS: SUPPLIER_CATS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/Screen2ConsignmentDetails.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/Screen3Dashboard.jsx
try { (() => {
const {
  ScreenHeader,
  KpiTile,
  QueueTable,
  HandheldFrame,
  Icon
} = window.SpareCareDesignSystem_556483;
const BUCKETS = ['Last 7 days', 'Last 15 days', 'Last 30 days', '60 days and over'];
const UNLOAD = [{
  gen: 'GEN001234',
  date: '22-10-2023',
  supplier: 'ABC',
  value: '100,000'
}, {
  gen: 'GEN001235',
  date: '11-11-2023',
  supplier: 'XYZ',
  value: '12,345,679'
}];
const CHECK = [{
  gen: 'GEN001335',
  date: '01-11-2023',
  supplier: 'XYZ',
  boxes: '345,679'
}];
const BIN = [];
function AgingFilter({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-2)'
    }
  }, BUCKETS.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => onChange && onChange(b),
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      padding: '6px 11px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-interactive)',
      border: '1px solid ' + (value === b ? 'var(--sc-teal)' : 'var(--border-default)'),
      background: value === b ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: value === b ? 'var(--sc-teal-deep)' : 'var(--sc-grey-600)'
    }
  }, b)));
}
function Screen3Dashboard({
  queue,
  setQueue,
  bucket,
  setBucket,
  onOpenRow,
  frameProps = {}
}) {
  return /*#__PURE__*/React.createElement(HandheldFrame, frameProps, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Inward Dashboard",
    back: false,
    right: /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 16,
      color: "var(--sc-teal)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--handheld-safe)',
      overflow: 'auto',
      flex: 1,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Unload",
    value: 5,
    unit: "Trucks",
    active: queue === 'unload',
    onClick: () => setQueue && setQueue('unload')
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Checking",
    value: 5,
    unit: "GENs",
    active: queue === 'check',
    onClick: () => setQueue && setQueue('check')
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Binning",
    value: 5,
    unit: "GENs",
    active: queue === 'bin',
    onClick: () => setQueue && setQueue('bin')
  })), /*#__PURE__*/React.createElement(AgingFilter, {
    value: bucket,
    onChange: setBucket
  }), /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending Unloads",
    columns: [{
      key: 'gen',
      label: 'GEN',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'value',
      label: 'Value',
      align: 'right'
    }],
    rows: UNLOAD,
    minRows: 4,
    onRowClick: onOpenRow
  }), /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending for Consignment Check",
    columns: [{
      key: 'gen',
      label: 'GEN',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'boxes',
      label: 'No. of Boxes',
      align: 'right'
    }],
    rows: CHECK,
    minRows: 4,
    onRowClick: onOpenRow
  }), /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending for Binning",
    columns: [{
      key: 'gen',
      label: 'GEN',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'units',
      label: 'No. of Units',
      align: 'right'
    }],
    rows: BIN,
    minRows: 4
  })));
}
Object.assign(window, {
  Screen3Dashboard,
  AgingFilter,
  SC_BUCKETS: BUCKETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/Screen3Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/annotations.js
try { (() => {
/* Callout data for the Screens 1-3 wireframe sheet. Every entry carries the FRD
   requirement or section it derives from. Descriptions follow the FRD's own field
   reference wording; where the FRD records behaviour as undefined, tone is 'open'. */
window.SC_WMS_ANNO = {
  screen1: {
    label: 'Screen 1 — Create GEN',
    ref: 'FR-001',
    surface: 'Handheld + Web',
    markers: [{
      n: 1,
      x: 101,
      y: 2.5
    }, {
      n: 2,
      x: -1,
      y: 11
    }, {
      n: 3,
      x: -1,
      y: 20
    }, {
      n: 4,
      x: -1,
      y: 28.5
    }, {
      n: 5,
      x: 101,
      y: 37
    }, {
      n: 6,
      x: 101,
      y: 45.5
    }, {
      n: 7,
      x: -1,
      y: 54
    }, {
      n: 8,
      x: 101,
      y: 62.5
    }, {
      n: 9,
      x: -1,
      y: 71
    }, {
      n: 10,
      x: 101,
      y: 79.5
    }, {
      n: 11,
      x: 24,
      y: 88.5
    }, {
      n: 12,
      x: -1,
      y: 99
    }],
    items: [{
      n: 1,
      label: 'Create GEN',
      ref: '§4.1',
      control: 'Screen header',
      description: 'First step in the inward process. Captures minimum required information and generates the Gate Entry Number that is the master reference key for every subsequent inward step.'
    }, {
      n: 2,
      label: 'Date & Time of Receipt',
      ref: 'FR-001.9, .10',
      control: 'System-generated display',
      description: 'Picked up automatically at the moment the gate entry is created. Mandatory and not configurable — distinct from the dealer-configurable mandatory fields, so it is rendered read-only rather than as an input that can be left blank.'
    }, {
      n: 3,
      label: 'Name of the Person',
      ref: 'FR-001.16',
      control: 'Text input',
      description: 'Mandatory. The name of the truck driver only. Gate personnel are a separate role and are not recorded in this field.'
    }, {
      n: 4,
      label: 'Contact Number',
      ref: 'FR-001.17, .18',
      control: 'Text input',
      description: 'Mandatory. The truck driver\u2019s number, with no linkage to the supplier record. Supplier arrival notification derives from the supplier selected below, using the contact details held against that supplier in the master.'
    }, {
      n: 5,
      label: 'Where From (Supplier Name)',
      ref: '§4.3',
      control: 'Dropdown',
      description: 'Optional. Selected from the pre-configured supplier master list. May be left blank here and completed at Screen 2 if unknown at the gate.'
    }, {
      n: 6,
      label: 'For Whom (Department Name)',
      ref: 'FR-001.19',
      control: 'Dropdown',
      description: 'Optional. Department or individual the consignment is intended for. Where populated, that party is notified on arrival.'
    }, {
      n: 7,
      label: 'Nature of Inward Transaction',
      ref: 'FR-001.11, FR-030.1',
      control: 'Dropdown',
      description: 'Six values: purchase, branch transfer in, sales return, workshop or in-house return, job work return, third party purchase. The reason the consignment is entering determines ownership, whether a payment is due, and what it is reconciled against.'
    }, {
      n: 8,
      label: 'Primary Document Type',
      ref: 'FR-001.5',
      control: 'Dropdown + Camera',
      description: 'Optional at the gate; may be completed at Screen 2. Acceptable types: GRN, Tax Invoice, Challan, Ship List, Delivery Challan, others as configured. The camera captures a document photograph and sits outside the field border.'
    }, {
      n: 9,
      label: 'Courier Type',
      ref: 'FR-001.20',
      control: 'Dropdown',
      description: 'Five values per the BRD: Transport, Courier, Own Vehicle, Individual (External Person), Individual (Internal Person). Configurable from master data. The previously recorded value Self-foot is withdrawn as an error.'
    }, {
      n: 10,
      label: 'No. of Boxes',
      ref: 'FR-001.21',
      control: 'Number input',
      tone: 'open',
      description: 'Indicative only. A glance at the back of a truck, not a verified figure — it must not serve as the expected value against which unloading is reconciled. That baseline is the expected box count recorded at Receipt Details. OI-066: precedence between the three box counts is unstated.'
    }, {
      n: 11,
      label: 'Cancel / Next',
      ref: 'FR-001.6',
      control: 'Buttons',
      description: 'Next generates the GEN. Nothing entered on this screen becomes permanently locked — any field not captured here is editable and completable at Screen 2.'
    }, {
      n: 12,
      label: 'Gate Entry Number',
      ref: 'FR-001.8, .14',
      control: 'System-generated banner',
      tone: 'open',
      description: 'Displayed prominently on creation and printable or shareable as a reference. OI-048: the generation logic is not yet defined — format, sequence, and whether the number is unique per business unit or across the business are to be confirmed.'
    }]
  },
  screen2: {
    label: 'Screen 2 — Enter Consignment Details',
    ref: 'FR-002',
    surface: 'Handheld + Web',
    markers: [{
      n: 1,
      x: 101,
      y: 2.5
    }, {
      n: 2,
      x: -1,
      y: 12
    }, {
      n: 3,
      x: 101,
      y: 22
    }, {
      n: 4,
      x: -1,
      y: 32
    }, {
      n: 5,
      x: 101,
      y: 42
    }, {
      n: 6,
      x: -1,
      y: 52
    }, {
      n: 7,
      x: 101,
      y: 61
    }, {
      n: 8,
      x: 101,
      y: 69
    }, {
      n: 9,
      x: -1,
      y: 82
    }, {
      n: 10,
      x: 24,
      y: 98
    }],
    items: [{
      n: 1,
      label: 'Enter Consignment Details',
      ref: '§5.1',
      control: 'Screen header',
      description: 'Accessed by the relevant department after gate entry. Captures consignment classification, completes anything not entered at Screen 1, and configures which downstream steps apply to this consignment.'
    }, {
      n: 2,
      label: 'Gate Entry Number',
      ref: 'FR-002.16, .17',
      control: 'Dropdown',
      description: 'Selected from a dropdown of gate entries already created — never entered as free text, which would invite transcription errors and could attach a consignment to a number that does not exist. A GEN created on Screen 1 becomes selectable immediately.'
    }, {
      n: 3,
      label: 'Product Category',
      ref: 'FR-002.12',
      control: 'Multi-select',
      description: 'Selected manually and never derived from the supplier, because a single supplier may deliver products spanning several categories in the same consignment. Drives workflow applicability rules and filters the supplier list.'
    }, {
      n: 4,
      label: 'Supplier Category',
      ref: 'FR-002.11',
      control: 'Dropdown (derivable)',
      description: 'Where the supplier is entered directly this field fills itself, since each supplier is tagged to a supplier category during supplier creation. Values: OEM / Manufacturer / Local Vendor / Other.'
    }, {
      n: 5,
      label: 'Supplier',
      ref: 'FR-002.2',
      control: 'Dropdown',
      description: 'Registered supplier from the master list, filtered by the selected supplier category.'
    }, {
      n: 6,
      label: 'Primary Document Type',
      ref: 'FR-002.8',
      control: 'Dropdown',
      tone: 'open',
      description: 'Options are driven by the product and supplier category selections, reflecting variability in documentation formats across OEM brands. OI-002: the full list of OEM-specific document types is still to be compiled.'
    }, {
      n: 7,
      label: 'Courier Type',
      ref: '§5.3',
      control: 'Dropdown',
      description: 'Completed here if it was not captured at Screen 1.'
    }, {
      n: 8,
      label: 'Workflow Applicability Confirmation',
      ref: 'FR-002.3, .9',
      control: 'Section header',
      description: 'The administrator selects the factors on which default workflows are defined — supplier category, nature of the products, consignment carrier — and defines a default workflow for each combination.'
    }, {
      n: 9,
      label: 'Workflow steps',
      ref: 'FR-002.4, .5, .10',
      control: 'Checkboxes, pre-checked',
      description: 'Defaults arrive pre-checked and the receiving user may override any of them for the current consignment, before the receipt process begins. Only checked steps are activated; unchecked steps are skipped and the consignment proceeds to the next active step.'
    }, {
      n: 10,
      label: 'Next',
      ref: 'FR-002.14',
      control: 'Button',
      description: 'Irrespective of the nature of the consignment, consignment detail entry is the first step on opening the inward flow.'
    }]
  },
  screen3: {
    label: 'Screen 3 — Inward Operations Dashboard',
    ref: 'FR-003',
    surface: 'Web (supervisor)',
    markers: [{
      n: 1,
      x: -1,
      y: 6
    }, {
      n: 2,
      x: 101,
      y: 16
    }, {
      n: 3,
      x: -1,
      y: 29
    }, {
      n: 4,
      x: 101,
      y: 38
    }, {
      n: 5,
      x: -1,
      y: 56
    }, {
      n: 6,
      x: -1,
      y: 80
    }, {
      n: 7,
      x: 101,
      y: 97
    }],
    items: [{
      n: 1,
      label: 'Pending queue tiles',
      ref: 'FR-003.1, .2',
      control: 'KPI tiles',
      description: 'Three real-time queues: Pending for Unload (trucks awaiting unloading), Pending for Checking (GENs awaiting consignment check) and Pending for Binning (GENs awaiting bin assignment). Each tile drills down to the individual records beneath.'
    }, {
      n: 2,
      label: 'Aging buckets',
      ref: 'FR-003.6, .7, .8',
      control: 'Filter row',
      description: 'Last 7 days, last 15 days, last 30 days, and 60 days and over. A filter over the existing queues rather than a new queue — the stage alone is not worth much; a load sitting at waiting-to-unload for six hours is the problem, and it stays invisible without the time dimension.'
    }, {
      n: 3,
      label: 'Pending Unloads',
      ref: 'FR-003.3',
      control: 'Drill-down table',
      description: 'Gate Entry Number, Date, Supplier, Value. Value is the relevant metric at this stage because nothing has been counted yet.'
    }, {
      n: 4,
      label: 'Gate Entry Number',
      ref: 'FR-003.3, FR-036',
      control: 'Link',
      description: 'Clickable to drill into consignment detail. The term Inward Code is withdrawn throughout in favour of Gate Entry Number (GEN); OI-059 records the wireframe boards still to be relabelled.'
    }, {
      n: 5,
      label: 'Pending for Consignment Check',
      ref: 'FR-003.3',
      control: 'Drill-down table',
      description: 'Gate Entry Number, Date, Supplier, No. of Boxes — the box count is now known, so it replaces value as the stage metric.'
    }, {
      n: 6,
      label: 'Pending for Binning',
      ref: 'FR-003.3',
      control: 'Drill-down table',
      description: 'Gate Entry Number, Date, Supplier, No. of Units. Blank rows are retained so the table holds its shape as the queue fills.'
    }, {
      n: 7,
      label: 'Active steps only',
      ref: 'FR-003.4, .5, .9',
      control: 'Behaviour',
      description: 'The dashboard reflects only the workflow steps active for each consignment as configured on Screen 2, updates in real time as consignments are processed, and shows each user the count pending at their own stage.'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/annotations.js", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/web/ConsignmentWeb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Field,
  SelectInput,
  WorkflowChecklist,
  Button,
  Icon,
  InfoNote,
  Stepper,
  GenContextBar,
  Tag
} = window.SpareCareDesignSystem_556483;
const PRODUCT_CATS = ['Spare Parts', 'Lubricants', 'Accessories', 'Glass / Windscreen', 'Consumables', 'Others'];
const SUPPLIER_CATS = ['OEM', 'Manufacturer', 'Local Vendor', 'Other'];
function ConsignmentWeb({
  state = {},
  set = () => {},
  steps = [],
  onToggle,
  onNext,
  onBack,
  onStepClick,
  genOptions = [],
  gen,
  shellProps = {}
}) {
  const activeCount = steps.filter(s => s.checked).length;
  return /*#__PURE__*/React.createElement(window.WebShell, _extends({
    active: 1,
    title: "Enter Consignment Details",
    subtitle: "Classify the consignment and confirm which downstream steps apply to it.",
    actions: /*#__PURE__*/React.createElement(Tag, {
      tone: activeCount === steps.length ? 'info' : 'low',
      dot: false
    }, activeCount, " of ", steps.length, " steps active")
  }, shellProps), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1000px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--sp-3) var(--sp-4)',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: window.SC_WEB_STEPS || ['Gate Entry', 'Consignment Details'],
    current: 1,
    onStepClick: onStepClick
  })), (gen || state.gen) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(GenContextBar, {
    gen: gen || state.gen,
    items: [{
      label: 'Date & Time of Receipt',
      value: '12 Aug 2026, 09:40'
    }, {
      label: 'Supplier',
      value: state.supplier || 'Not yet recorded'
    }, {
      label: 'Courier Type',
      value: state.courier || 'Not yet recorded'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'var(--sp-3)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--pad-card)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '19px',
      color: 'var(--text-heading)',
      marginBottom: 'var(--sp-2)'
    }
  }, "Consignment classification"), /*#__PURE__*/React.createElement(Field, {
    label: "Gate Entry Number",
    required: true,
    hint: "Selected from gate entries already created. Not typed in free text."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select GEN",
    options: genOptions,
    value: state.gen,
    onChange: e => set('gen', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Product Category",
    hint: "Selected manually; never derived from the supplier."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Product Category",
    options: PRODUCT_CATS,
    value: state.productCat,
    onChange: e => set('productCat', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Supplier Category",
    hint: "Derived from the supplier record where the supplier is known."
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Supplier Category",
    options: SUPPLIER_CATS,
    value: state.supplierCat,
    onChange: e => set('supplierCat', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Supplier"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Supplier",
    options: window.SC_SUPPLIERS || [],
    value: state.supplier,
    onChange: e => set('supplier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary Document Type"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select Primary Document Type",
    options: window.SC_DOCS || [],
    value: state.doc,
    onChange: e => set('doc', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courier Type"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Courier Type",
    options: window.SC_COURIER || [],
    value: state.courier,
    onChange: e => set('courier', e.target.value)
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--pad-card-tight)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '19px',
      color: 'var(--text-heading)',
      marginBottom: '10px'
    }
  }, "Workflow applicability"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement(InfoNote, null, "Defaults come from the administrator's rule for this supplier and product category. Override any step before the receipt process starts.")), /*#__PURE__*/React.createElement(WorkflowChecklist, {
    steps: steps,
    onToggle: onToggle
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)',
      margin: '10px 0 0',
      lineHeight: 1.5
    }
  }, "Unchecked steps are skipped entirely \u2014 the consignment proceeds to the next active step.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 15
    })
  }, "Back to Gate Entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15
    })
  }, "Start receipt process"))));
}
Object.assign(window, {
  ConsignmentWeb,
  SC_PRODUCT_CATS: PRODUCT_CATS,
  SC_SUPPLIER_CATS: SUPPLIER_CATS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/web/ConsignmentWeb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/web/DashboardWeb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  KpiTile,
  QueueTable,
  Button,
  Icon
} = window.SpareCareDesignSystem_556483;
const BUCKETS = ['Last 7 days', 'Last 15 days', 'Last 30 days', '60 days and over'];
const ROWS = {
  unload: [{
    gen: 'GEN001234',
    date: '22-10-2023',
    supplier: 'ABC Supplies Pvt. Ltd.',
    age: '4 h 20 m',
    value: '100,000'
  }, {
    gen: 'GEN001235',
    date: '11-11-2023',
    supplier: 'XYZ Auto Components',
    age: '1 h 05 m',
    value: '12,345,679'
  }],
  check: [{
    gen: 'GEN001335',
    date: '01-11-2023',
    supplier: 'XYZ Auto Components',
    age: '2 d 03 h',
    boxes: '48'
  }],
  bin: []
};
function AgingFilter({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--sc-grey-600)',
      marginRight: '2px'
    }
  }, "Aging"), BUCKETS.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    type: "button",
    onClick: () => onChange && onChange(b),
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      padding: '6px 13px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-interactive)',
      border: '1px solid ' + (value === b ? 'var(--sc-teal)' : 'var(--border-default)'),
      background: value === b ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: value === b ? 'var(--sc-teal-deep)' : 'var(--sc-grey-600)'
    }
  }, b)));
}
function Panel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--pad-card-tight)',
      marginBottom: 'var(--sp-3)'
    }
  }, children);
}
function DashboardWeb({
  queue = 'unload',
  setQueue,
  bucket = 'Last 7 days',
  setBucket,
  onCreate,
  onOpenRow,
  shellProps = {}
}) {
  return /*#__PURE__*/React.createElement(window.WebShell, _extends({
    active: 0,
    title: "Inward Operations Dashboard",
    subtitle: "Every consignment currently in the building, and how long it has been waiting.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "refresh-cw",
        size: 15
      })
    }, "Refresh"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      onClick: onCreate,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      })
    }, "Create Gate Entry"))
  }, shellProps), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--sp-2)',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Unload",
    value: 5,
    unit: "Trucks",
    active: queue === 'unload',
    onClick: () => setQueue && setQueue('unload'),
    style: {
      padding: '14px 12px'
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Checking",
    value: 5,
    unit: "GENs",
    active: queue === 'check',
    onClick: () => setQueue && setQueue('check'),
    style: {
      padding: '14px 12px'
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Pending for Binning",
    value: 5,
    unit: "GENs",
    active: queue === 'bin',
    onClick: () => setQueue && setQueue('bin'),
    style: {
      padding: '14px 12px'
    }
  })), /*#__PURE__*/React.createElement(AgingFilter, {
    value: bucket,
    onChange: setBucket
  }), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending Unloads",
    columns: [{
      key: 'gen',
      label: 'Gate Entry Number',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'age',
      label: 'Waiting',
      align: 'right'
    }, {
      key: 'value',
      label: 'Value',
      align: 'right'
    }],
    rows: ROWS.unload,
    minRows: 3,
    onRowClick: onOpenRow,
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending for Consignment Check",
    columns: [{
      key: 'gen',
      label: 'Gate Entry Number',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'age',
      label: 'Waiting',
      align: 'right'
    }, {
      key: 'boxes',
      label: 'No. of Boxes',
      align: 'right'
    }],
    rows: ROWS.check,
    minRows: 3,
    onRowClick: onOpenRow,
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(QueueTable, {
    caption: "Pending for Binning",
    columns: [{
      key: 'gen',
      label: 'Gate Entry Number',
      link: true,
      mono: true
    }, {
      key: 'date',
      label: 'Date'
    }, {
      key: 'supplier',
      label: 'Supplier'
    }, {
      key: 'age',
      label: 'Waiting',
      align: 'right'
    }, {
      key: 'units',
      label: 'No. of Units',
      align: 'right'
    }],
    rows: ROWS.bin,
    minRows: 3,
    emptyLabel: "Nothing pending for binning at this location.",
    style: {
      marginBottom: 0
    }
  })));
}
Object.assign(window, {
  DashboardWeb,
  SC_AGING_BUCKETS: BUCKETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/web/DashboardWeb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/web/GateEntryWeb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Field,
  TextInput,
  SelectInput,
  CameraButton,
  GenBanner,
  Button,
  Icon,
  InfoNote,
  Stepper,
  GenContextBar
} = window.SpareCareDesignSystem_556483;
const COURIER = ['Transport', 'Courier', 'Own Vehicle', 'Individual (External Person)', 'Individual (Internal Person)'];
const DOCS = ['GRN', 'Tax Invoice', 'Challan', 'Ship List', 'Delivery Challan'];
const NATURE = ['Purchase', 'Branch transfer in', 'Sales return', 'Workshop / in-house return', 'Job work return', 'Third party purchase'];
const SUPPLIERS = ['ABC Supplies Pvt. Ltd.', 'XYZ Auto Components', 'Bansal Auto Spares'];
const DEPTS = ['Spares Store', 'Workshop', 'Body Shop', 'Accounts'];
const STEPS = ['Gate Entry', 'Consignment Details'];
function GateEntryWeb({
  state = {},
  set = () => {},
  gen,
  onNext,
  onCancel,
  onStepClick,
  shellProps = {}
}) {
  return /*#__PURE__*/React.createElement(window.WebShell, _extends({
    active: 1,
    title: "Create Gate Entry",
    subtitle: "Raise a Gate Entry Number for a consignment that has arrived at the premises.",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--sc-grey-500)'
      }
    }, "Date & Time of Receipt"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--sc-teal-deep)'
      }
    }, "12 Aug 2026, 09:40"))
  }, shellProps), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--sp-3) var(--sp-4)',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: STEPS,
    current: 0,
    onStepClick: onStepClick
  })), gen && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(GenContextBar, {
    gen: gen,
    items: [{
      label: 'Date & Time of Receipt',
      value: '12 Aug 2026, 09:40'
    }, {
      label: 'Supplier',
      value: state.supplier || 'Not yet recorded'
    }, {
      label: 'Driver',
      value: (state.person || '—') + ' · ' + (state.contact || '—')
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      padding: 'var(--pad-card)'
    }
  }, /*#__PURE__*/React.createElement(InfoNote, null, "Only the driver's name and contact number are mandatory. Anything left blank here can be completed at Consignment Details."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '19px',
      color: 'var(--text-heading)',
      margin: 'var(--sp-3) 0 var(--sp-2)'
    }
  }, "Who brought the consignment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name of the person",
    required: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter Person's Name",
    value: state.person || '',
    onChange: e => set('person', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Contact Number",
    required: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Enter the contact Number",
    value: state.contact || '',
    onChange: e => set('contact', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courier Type",
    required: true
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Courier Type",
    options: COURIER,
    value: state.courier,
    onChange: e => set('courier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nature of Inward Transaction"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Select the Nature of Transaction",
    options: NATURE,
    value: state.nature,
    onChange: e => set('nature', e.target.value)
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '19px',
      color: 'var(--text-heading)',
      margin: 'var(--sp-3) 0 var(--sp-2)',
      paddingTop: 'var(--sp-2)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, "Where it came from, and for whom"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Where From"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Supplier Name",
    options: SUPPLIERS,
    value: state.supplier,
    onChange: e => set('supplier', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "For Whom"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Department Name",
    options: DEPTS,
    value: state.dept,
    onChange: e => set('dept', e.target.value)
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '19px',
      color: 'var(--text-heading)',
      margin: 'var(--sp-3) 0 var(--sp-2)',
      paddingTop: 'var(--sp-2)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, "Document and quantity at the gate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Primary Document Type",
    required: true,
    adjacent: /*#__PURE__*/React.createElement(CameraButton, null)
  }, /*#__PURE__*/React.createElement(SelectInput, {
    placeholder: "Primary Document Type",
    options: DOCS,
    value: state.doc,
    onChange: e => set('doc', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "No. of Boxes",
    hint: "Indicative only. Not the value unloading is reconciled against."
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Approximate count at gate",
    value: state.boxes || '',
    onChange: e => set('boxes', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 'var(--sp-2)',
      paddingTop: 'var(--sp-3)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15
    })
  }, gen ? 'Continue to Consignment Details' : 'Create Gate Entry'))), gen && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)',
      maxWidth: '380px'
    }
  }, /*#__PURE__*/React.createElement(GenBanner, {
    gen: gen,
    footnote: "Print slip or share reference"
  }))));
}
Object.assign(window, {
  GateEntryWeb,
  SC_COURIER: COURIER,
  SC_DOCS: DOCS,
  SC_NATURE: NATURE,
  SC_SUPPLIERS: SUPPLIERS,
  SC_DEPTS: DEPTS,
  SC_WEB_STEPS: STEPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/web/GateEntryWeb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/web/WebShell.jsx
try { (() => {
const {
  Icon
} = window.SpareCareDesignSystem_556483;
const NAV = [['layout-dashboard', 'Inward Dashboard'], ['log-in', 'Gate Entry'], ['truck', 'Truck Unload'], ['package-search', 'Consignment Check'], ['grid-3x3', 'Binning'], ['file-check', 'Receipt Confirmation']];
function WebShell({
  active = 0,
  title,
  subtitle,
  actions,
  children,
  width = 1240,
  height = 820
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width + 'px',
      height: height + 'px',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      background: 'var(--surface-page)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-inverse)',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      padding: '0 var(--sp-3) 6px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SC_ASSET_BASE || '../..') + '/assets/logo-mark.png',
    alt: "",
    style: {
      height: '26px',
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '18px',
      letterSpacing: 'var(--ls-lock)',
      color: '#fff'
    }
  }, "SpareCare")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'rgba(255,255,255,0.6)',
      padding: '0 var(--sp-3) var(--sp-3)'
    }
  }, "WMS \xB7 Inward"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map(([ic, l], i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '11px var(--sp-3)',
      font: 'var(--type-ui)',
      textDecoration: 'none',
      minHeight: 'var(--hit-min)',
      color: i === active ? '#fff' : 'rgba(255,255,255,0.7)',
      background: i === active ? 'rgba(255,255,255,0.12)' : 'transparent',
      borderLeft: '3px solid ' + (i === active ? 'var(--sc-teal)' : 'transparent')
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--sp-3)',
      borderTop: '1px solid rgba(255,255,255,0.14)',
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: 'var(--r-round)',
      background: 'var(--sc-teal)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '13px'
    }
  }, "SV"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: '#fff'
    }
  }, "Warehouse Supervisor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-micro)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Meerut \xB7 Main Store")))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-3)',
      padding: 'var(--sp-3) var(--sp-4) var(--sp-2)',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '28px',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--sp-3) var(--sp-4) var(--sp-4)'
    }
  }, children)));
}
Object.assign(window, {
  WebShell,
  SC_WEB_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/web/WebShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wms-inward/web/webAnnotations.js
try { (() => {
/* Callout data for the web-surface wireframes, Screens 1-3.
   Every marker sits in the left or right gutter (x = -1 or 101) so no circle overlaps
   the content it annotates, and none is clipped. Every legend entry carries the FRD
   requirement or section it derives from; tone 'open' marks a recorded open issue. */
window.SC_WEB_ANNO = {
  'screen-1': {
    group: 'IN-A · Gate Entry & Consignment',
    eyebrow: 'IN-A',
    screenId: 'Screen 1',
    screenName: 'Gate Entry (Create GEN)',
    headline: 'Gate Entry — one number the load carries for life',
    intro: 'The first step in the inward process. It captures the little that can be known at the gate — who is driving, how to reach him, roughly what has arrived — and generates the Gate Entry Number that every subsequent activity on that consignment is recorded against. Only the driver\u2019s name and contact number are mandatory; everything else is dealer-configurable and can be completed at Consignment Details.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 1', 'FR-001', 'Surface Web + Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'The web surface, as specified by FR-032.5 — gate entry involves no scanning and is typically raised from a desk. The two-step stepper follows \u00a74.6, which splits gate entry into admission at the gate and consignment detail capture at the dock.',
    url: 'wms.sparecare.in/inward/gate-entry',
    markers: [{
      n: 1,
      x: -1,
      y: 5
    }, {
      n: 2,
      x: 101,
      y: 5
    }, {
      n: 3,
      x: -1,
      y: 16
    }, {
      n: 4,
      x: 101,
      y: 26
    }, {
      n: 5,
      x: -1,
      y: 36
    }, {
      n: 6,
      x: 101,
      y: 44
    }, {
      n: 7,
      x: -1,
      y: 52
    }, {
      n: 8,
      x: 101,
      y: 60
    }, {
      n: 9,
      x: -1,
      y: 68
    }, {
      n: 10,
      x: 101,
      y: 76
    }, {
      n: 11,
      x: -1,
      y: 84
    }, {
      n: 12,
      x: 101,
      y: 92
    }, {
      n: 13,
      x: -1,
      y: 97
    }],
    items: [{
      n: 1,
      label: 'Inward module navigation',
      ref: '\u00a72.3',
      control: 'Sidebar',
      description: 'The five inward stages in the order a consignment passes through them. Only the steps active for a given consignment are reachable, as configured on Screen 2.'
    }, {
      n: 2,
      label: 'Date & Time of Receipt',
      ref: 'FR-001.9, .10',
      control: 'System-generated display',
      description: 'Picked up automatically at the moment the gate entry is created. Mandatory and not configurable \u2014 distinct in kind from the dealer-configurable mandatory fields, which is why it is shown as a read-only value in the page header rather than as an input that could be left blank.'
    }, {
      n: 3,
      label: 'Two-stage stepper',
      ref: '\u00a74.6, FR-002.14',
      control: 'Stepper',
      description: 'Gate entry has two parts: the vehicle is admitted against minimal detail at the gate, then the document, invoices and full box detail are recorded at the unloading dock by the storekeeper. Different places, different people, different amounts of time.'
    }, {
      n: 4,
      label: 'Mandatory-field advisory',
      ref: 'FR-001.2, .6',
      control: 'Info note',
      description: 'Two mandatory fields only. Nothing entered here becomes permanently locked before Screen 2 \u2014 anything not captured at the gate is editable and completable there.'
    }, {
      n: 5,
      label: 'Name of the Person',
      ref: 'FR-001.16',
      control: 'Text input',
      description: 'Mandatory. The name of the truck driver only. Gate personnel are a separate role and are not recorded in this field.'
    }, {
      n: 6,
      label: 'Contact Number',
      ref: 'FR-001.17, .18',
      control: 'Text input',
      description: 'Mandatory. The truck driver\u2019s number, with no linkage to the supplier record \u2014 drivers change from delivery to delivery. Supplier arrival notification derives instead from the supplier selected below, using the contact details held against that supplier in the master.'
    }, {
      n: 7,
      label: 'Courier Type',
      ref: 'FR-001.20',
      control: 'Dropdown',
      description: 'Five values per the BRD: Transport, Courier, Own Vehicle, Individual (External Person), Individual (Internal Person). Configurable from master data so a new courier firm can be added the same afternoon. The value previously recorded as Self-foot is withdrawn as an error.'
    }, {
      n: 8,
      label: 'Nature of Inward Transaction',
      ref: 'FR-001.11, FR-030.1',
      control: 'Dropdown',
      description: 'Six values: purchase, branch transfer in, sales return, workshop or in-house return, job work return, third party purchase. The reason a consignment is entering determines who owns the goods, whether a payment is due, and what it is reconciled against \u2014 so it is chosen at the gate, not later.'
    }, {
      n: 9,
      label: 'Where From / For Whom',
      ref: '\u00a74.3, FR-001.19',
      control: 'Dropdowns',
      description: 'Both optional. Supplier is selected from the pre-configured master and may be completed at Screen 2 if unknown at the gate. Where a department or individual is named, that party is notified on arrival.'
    }, {
      n: 10,
      label: 'Primary Document Type',
      ref: 'FR-001.5',
      control: 'Dropdown + Camera',
      description: 'Optional at the gate. Acceptable types: GRN, Tax Invoice, Challan, Ship List, Delivery Challan, others as configured. The camera captures a document photograph and sits outside the field border so it reads as a secondary affordance.'
    }, {
      n: 11,
      label: 'No. of Boxes',
      ref: 'FR-001.21',
      control: 'Number input',
      tone: 'open',
      description: 'Indicative only. At the gate this is a glance at the back of a truck, not a verified figure, and it must not serve as the value unloading is reconciled against \u2014 that baseline is the expected box count recorded at Receipt Details. OI-066: precedence between the three box counts is still unstated.'
    }, {
      n: 12,
      label: 'Create Gate Entry',
      ref: 'FR-001.1, FR-001.14',
      control: 'Button',
      tone: 'open',
      description: 'Generates the GEN, which becomes the master reference key for all subsequent inward steps and the reference against which the business pays the vendor. OI-048: the generation logic is not yet defined \u2014 format, sequence, and whether the number is unique per business unit or across the business.'
    }, {
      n: 13,
      label: 'Gate Entry Number confirmation',
      ref: 'FR-001.8',
      control: 'Banner',
      description: 'Displayed prominently on creation and printable or shareable as a reference. Green is a signal colour here, not a brand colour. Once issued, the number is pinned to a context bar above the form so it does not scroll away.'
    }]
  },
  'screen-2': {
    group: 'IN-A · Gate Entry & Consignment',
    eyebrow: 'IN-A',
    screenId: 'Screen 2',
    screenName: 'Consignment Details & Workflow Configuration',
    headline: 'Consignment Details — the instruction travels with the load',
    intro: 'Accessed at the unloading dock after the gate entry exists. It classifies the consignment, completes anything not captured at the gate, and confirms which downstream steps apply. Setting this up front matters because the person unloading at six in the morning is usually not the person who knows why the load was ordered \u2014 marking it at the start means the instruction travels with the load instead of living in somebody\u2019s head.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 2', 'FR-002', 'Surface Web + Handheld', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Classification on the left, workflow applicability on the right \u2014 the two are separate decisions, and the workflow block is the one a supervisor overrides. The Gate Entry Number stays pinned above both.',
    url: 'wms.sparecare.in/inward/consignment-details',
    markers: [{
      n: 1,
      x: -1,
      y: 6
    }, {
      n: 2,
      x: 101,
      y: 6
    }, {
      n: 3,
      x: -1,
      y: 17
    }, {
      n: 4,
      x: 101,
      y: 28
    }, {
      n: 5,
      x: -1,
      y: 38
    }, {
      n: 6,
      x: 101,
      y: 46
    }, {
      n: 7,
      x: -1,
      y: 55
    }, {
      n: 8,
      x: 101,
      y: 63
    }, {
      n: 9,
      x: -1,
      y: 72
    }, {
      n: 10,
      x: 101,
      y: 81
    }, {
      n: 11,
      x: -1,
      y: 90
    }],
    items: [{
      n: 1,
      label: 'Step 2 of 2',
      ref: '\u00a74.6',
      control: 'Stepper',
      description: 'The second of the two gate entry stages. Completed steps remain clickable for going back; forward steps do not, because the data to reach them does not yet exist.'
    }, {
      n: 2,
      label: 'Active step count',
      ref: 'FR-002.5',
      control: 'Tag',
      description: 'A running count of how many of the four downstream steps remain active for this consignment, so an override is visible without reading the checklist.'
    }, {
      n: 3,
      label: 'Gate Entry Number context bar',
      ref: 'FR-001.1',
      control: 'Pinned bar',
      description: 'Every subsequent activity on the consignment is conducted by reference to the GEN, so it stays on screen with the receipt date and time, supplier and carrier alongside it.'
    }, {
      n: 4,
      label: 'Gate Entry Number',
      ref: 'FR-002.16, .17',
      control: 'Dropdown',
      description: 'Selected from a dropdown of gate entries already created \u2014 never entered as free text, which would invite transcription errors and could attach a consignment to a number that does not exist. A GEN created on Screen 1 becomes selectable immediately. FR-002.15 separately permits entry of a number raised manually at a gate not on this system.'
    }, {
      n: 5,
      label: 'Product Category',
      ref: 'FR-002.12, .2',
      control: 'Multi-select',
      description: 'Selected manually and never derived from the supplier, because a single supplier may deliver products spanning several categories in the same consignment. Drives the workflow applicability rules and filters the supplier list.'
    }, {
      n: 6,
      label: 'Supplier Category',
      ref: 'FR-002.11',
      control: 'Dropdown (derivable)',
      description: 'Fills itself once the supplier is known, since each supplier is tagged to a supplier category during supplier creation. Values: OEM / Manufacturer / Local Vendor / Other. The asymmetry with product category is deliberate and worth preserving in the design.'
    }, {
      n: 7,
      label: 'Primary Document Type',
      ref: 'FR-002.8',
      control: 'Dropdown',
      tone: 'open',
      description: 'Options are driven by the product and supplier category selections, reflecting variability in documentation formats across OEM brands. OI-002: the full list of OEM-specific document types is still to be compiled for brand-level configuration mapping.'
    }, {
      n: 8,
      label: 'Workflow defaults advisory',
      ref: 'FR-002.3, .9',
      control: 'Info note',
      description: 'The administrator selects the factors on which default workflows are defined \u2014 supplier category, nature of the products, consignment carrier \u2014 and defines a default workflow for each combination.'
    }, {
      n: 9,
      label: 'Workflow Applicability Confirmation',
      ref: 'FR-002.4, .10',
      control: 'Checkboxes, pre-checked',
      description: 'Four steps arrive pre-checked from the administrator\u2019s rule, and the receiving user may override any of them for this consignment before the receipt process begins. Unload Truck may be unchecked for a single-box VOR order; Check Secondary Boxes for a branch transfer; Binning where goods are issued direct to the workshop.'
    }, {
      n: 10,
      label: 'Skip behaviour',
      ref: 'FR-002.5',
      control: 'Explanatory text',
      description: 'Only checked steps are activated. Unchecked steps are skipped and the consignment proceeds to the next active step \u2014 which is also what the dashboard reflects.'
    }, {
      n: 11,
      label: 'Start receipt process',
      ref: 'FR-002.10, .14',
      control: 'Button',
      description: 'The override window closes here. Beyond this point the workflow for the consignment is fixed and the receipt process runs against it.'
    }]
  },
  'screen-3': {
    group: 'IN-B · Operations',
    eyebrow: 'IN-B',
    screenId: 'Screen 3',
    screenName: 'Inward Operations Dashboard',
    headline: 'Inward Dashboard — the stage is cheap, the time is the point',
    intro: 'One screen showing every load currently in the building and the stage each has reached, with how long it has been sitting there. The stage on its own is not worth much; almost any system can show a status. What makes this screen worth having is the time. A load at waiting-to-unload is normal. A load that has been at waiting-to-unload for six hours is a problem, and it stays invisible unless the screen puts the number in front of you.',
    chips: ['Prepared by Deepmindz Innovations Pvt Ltd', 'Screen 3', 'FR-003', 'Surface Web', 'FRD v0.11', 'Illustrative only'],
    sectionNote: 'Treated as the landing screen rather than a step, because FR-003 describes it as the view a supervisor keeps open through the day and a manager checks to find where work is piling up. The three queues are stacked full width so all of them are visible at once.',
    url: 'wms.sparecare.in/inward/dashboard',
    markers: [{
      n: 1,
      x: -1,
      y: 6
    }, {
      n: 2,
      x: 101,
      y: 6
    }, {
      n: 3,
      x: -1,
      y: 17
    }, {
      n: 4,
      x: 101,
      y: 27
    }, {
      n: 5,
      x: -1,
      y: 37
    }, {
      n: 6,
      x: 101,
      y: 47
    }, {
      n: 7,
      x: -1,
      y: 60
    }, {
      n: 8,
      x: 101,
      y: 74
    }, {
      n: 9,
      x: -1,
      y: 88
    }],
    items: [{
      n: 1,
      label: 'Landing screen',
      ref: 'FR-003.9',
      control: 'Navigation',
      description: 'The dashboard is where the day starts, not a step in a task. Each user sees the number of consignments pending at their own stage.'
    }, {
      n: 2,
      label: 'Create Gate Entry',
      ref: 'FR-001.1',
      control: 'Primary action',
      description: 'Work is launched from the dashboard. The gate entry task opens as a two-step flow and returns here on completion.'
    }, {
      n: 3,
      label: 'Pending queue tiles',
      ref: 'FR-003.1, .2',
      control: 'KPI tiles',
      description: 'Three real-time queues: Pending for Unload (trucks awaiting unloading), Pending for Checking (GENs awaiting consignment check) and Pending for Binning (GENs awaiting bin assignment). Each names its unit \u2014 Trucks or GENs \u2014 rather than showing a bare number, because the three queues count different things.'
    }, {
      n: 4,
      label: 'Aging buckets',
      ref: 'FR-003.6, .7, .8',
      control: 'Filter row',
      description: 'Last 7 days, last 15 days, last 30 days, and 60 days and over. A filter over the existing pending queues rather than a new queue, so the operator can move from what is pending to what is pending and overdue. A large warehouse may carry a substantial binning backlog, and a flat count gives no indication which item has waited longest.'
    }, {
      n: 5,
      label: 'Waiting column',
      ref: 'FR-003.6',
      control: 'Elapsed time',
      description: 'Time at the current stage, shown per row. This is the column that turns a status list into something a supervisor can act on before closing.'
    }, {
      n: 6,
      label: 'Gate Entry Number',
      ref: 'FR-003.3, FR-036',
      control: 'Link',
      description: 'Clickable to drill into consignment detail. The term Inward Code is withdrawn throughout in favour of Gate Entry Number (GEN); OI-059 records the wireframe boards still to be relabelled.'
    }, {
      n: 7,
      label: 'Pending for Consignment Check',
      ref: 'FR-003.3',
      control: 'Drill-down table',
      description: 'Gate Entry Number, Date, Supplier, Waiting, No. of Boxes. The box count is known by this stage, so it replaces value as the stage metric.'
    }, {
      n: 8,
      label: 'Pending for Binning',
      ref: 'FR-003.3',
      control: 'Drill-down table',
      description: 'Gate Entry Number, Date, Supplier, Waiting, No. of Units. Shown empty here with a plain statement rather than a blank panel \u2014 an empty queue is information.'
    }, {
      n: 9,
      label: 'Active steps only',
      ref: 'FR-003.4, .5',
      control: 'Behaviour',
      description: 'The dashboard reflects only the workflow steps active for each consignment as configured on Screen 2, and updates in real time as consignments are processed through each stage. OI-011 records that the refresh strategy \u2014 manual against push \u2014 is still to be confirmed.'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wms-inward/web/webAnnotations.js", error: String((e && e.message) || e) }); }

// web-portal/boot.js
try { (() => {
/* Waits for the compiled design-system bundle and for any Babel-transpiled screen files
   to register themselves on window, then renders. Babel processes <script type="text/babel"
   src="..."> asynchronously, so an inline script cannot assume they have run. */
window.SCBoot = function (need, render) {
  var tries = 0;
  var NSKEY = 'SpareCareDesignSystem_556483';
  var t = setInterval(function () {
    var NS = window[NSKEY] || {};
    var missing = need.filter(function (n) {
      return !(NS[n] || window[n]);
    });
    if (!missing.length) {
      clearInterval(t);
      render(NS);
      return;
    }
    if (++tries > 240) {
      clearInterval(t);
      var el = document.getElementById('root');
      if (el) el.innerHTML = '<div style="font-family:system-ui;padding:40px;color:#C1503F">' + '<b>Could not load:</b> ' + missing.join(', ') + '<br><span style="color:#6B7378">Check that _ds_bundle.js is compiled and reachable from this page.</span></div>';
    }
  }, 50);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "web-portal/boot.js", error: String((e && e.message) || e) }); }

// web-portal/screens.js
try { (() => {
/* The screen manifest. Adding a screen later is one entry here plus one file in screens/. */
window.SC_PORTAL = {
  org: 'Deepmindz Innovations Pvt Ltd',
  client: 'SpareCare',
  title: 'WMS Inward Wireframes',
  subtitle: 'Administration and Operations',
  version: 'v1',
  backLabel: '\u2190 Back to SpareCare overview',
  backHref: '#',
  groups: [{
    code: 'IN-A',
    name: 'GATE ENTRY & CONSIGNMENT',
    items: [{
      idx: '01',
      id: 'screen-1',
      ref: 'Screen 1',
      name: 'Gate Entry (Create GEN)',
      fr: 'FR-001',
      file: 'screens/screen-1-gate-entry.html',
      modes: true
    }, {
      idx: '02',
      id: 'screen-2',
      ref: 'Screen 2',
      name: 'Consignment Details & Workflow',
      fr: 'FR-002',
      file: 'screens/screen-2-consignment-details.html',
      modes: true
    }]
  }, {
    code: 'IN-B',
    name: 'OPERATIONS',
    items: [{
      idx: '03',
      id: 'screen-3',
      ref: 'Screen 3',
      name: 'Inward Operations Dashboard',
      fr: 'FR-003',
      file: 'screens/screen-3-inward-dashboard.html',
      modes: true
    }]
  }, {
    code: 'IN-C',
    name: 'REFERENCE',
    items: [{
      idx: '',
      id: 'prototype',
      ref: '',
      name: 'Click-through prototype',
      fr: 'FR-001 \u2192 FR-003',
      file: 'screens/prototype.html',
      modes: false
    }, {
      idx: '',
      id: 'open-issues',
      ref: '',
      name: 'Open issues on these screens',
      fr: '\u00a744',
      file: 'screens/open-issues.html',
      modes: false
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "web-portal/screens.js", error: String((e && e.message) || e) }); }

__ds_ns.AnnotatedScreen = __ds_scope.AnnotatedScreen;

__ds_ns.AnnotationLegend = __ds_scope.AnnotationLegend;

__ds_ns.AnnotationMarker = __ds_scope.AnnotationMarker;

__ds_ns.BrowserChrome = __ds_scope.BrowserChrome;

__ds_ns.WireframeDoc = __ds_scope.WireframeDoc;

__ds_ns.WireframeSheet = __ds_scope.WireframeSheet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PartRow = __ds_scope.PartRow;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.StoreCard = __ds_scope.StoreCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ActionBar = __ds_scope.ActionBar;

__ds_ns.CameraButton = __ds_scope.CameraButton;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.GenBanner = __ds_scope.GenBanner;

__ds_ns.GenContextBar = __ds_scope.GenContextBar;

__ds_ns.HandheldFrame = __ds_scope.HandheldFrame;

__ds_ns.InfoNote = __ds_scope.InfoNote;

__ds_ns.KpiTile = __ds_scope.KpiTile;

__ds_ns.QueueTable = __ds_scope.QueueTable;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.SelectInput = __ds_scope.SelectInput;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.WorkflowChecklist = __ds_scope.WorkflowChecklist;

})();
