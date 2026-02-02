"use client";

export default function Tooltip({
  id = "bottom-tooltip",
  children,
  tooltip,
  placement = "bottom",
}) {
  // Lightweight tooltip replacement (removes react-bootstrap dependency).
  // Keeps the same public API but uses the native `title` attribute.
  return (
    <span
      id={id}
      title={tooltip}
      data-placement={placement}
      style={{ display: "inline-flex" }}
    >
      {children}
    </span>
  );
}
