// Thin wrapper around gtag for conversion-relevant events. Never pass patient
// names, contact details, or health information as event parameters — only
// the fact that an interaction happened.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "appointment_cta_click"
  | "booking_form_start"
  | "booking_request_submitted"
  | "booking_request_error"
  | "phone_click"
  | "directions_click"
  | "service_page_view";

export function trackEvent(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
