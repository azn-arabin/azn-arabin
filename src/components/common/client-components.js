"use client";

// Lightweight container component - no Bootstrap needed
export const AppContainer = ({ className, id, children }) => (
  <div
    className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className || ""}`}
    id={id}
  >
    {children}
  </div>
);
