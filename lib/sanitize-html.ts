// Minimal allowlist-style sanitizer for blog post body HTML.
//
// Blog content in content/mock-content.ts is rendered via
// dangerouslySetInnerHTML (app/blog/[slug]/page.tsx) because posts use
// hand-authored markup (<h2>, <ul>, <a>, <strong>) for formatting and
// outbound citation links. Some posts are written by the autoblog
// scheduled task, which drafts content from third-party keyword-research
// API responses — if that upstream data ever echoed attacker-controlled
// text into the draft, unescaped <script>/event-handler markup would
// execute for every site visitor (stored XSS). This sanitizer is the
// single choke point all blog HTML passes through before rendering,
// regardless of which pipeline produced it.
//
// It intentionally does not attempt to be a general-purpose HTML
// sanitizer (no DOM parsing) — it strips the specific constructs that
// can execute script in a browser, and leaves the small set of
// formatting tags blog posts actually use untouched.

const DISALLOWED_TAGS =
  /<\/?(script|style|iframe|object|embed|form|input|button|textarea|select|link|meta|base|svg|math)\b[^>]*>/gi;

const EVENT_HANDLER_ATTR = /\s+on[a-z]+\s*=\s*(".*?"|'.*?'|[^\s>]+)/gi;

const DANGEROUS_URI_ATTR =
  /\s(href|src|action|formaction)\s*=\s*(["'])\s*(javascript|data|vbscript):[^"']*\2/gi;

export function sanitizeBlogHtml(html: string): string {
  return html
    .replace(DISALLOWED_TAGS, "")
    .replace(EVENT_HANDLER_ATTR, "")
    .replace(DANGEROUS_URI_ATTR, "");
}
