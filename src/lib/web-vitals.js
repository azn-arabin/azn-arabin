// Optional: Add this to your app/layout.js to report Web Vitals
// Uncomment and import in layout.js: import { reportWebVitals } from '@/lib/web-vitals'

export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }

  // You can also send to analytics service
  // Example: sending to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      event_category: "Web Vitals",
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Or send to your custom analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' }
  // });
}
