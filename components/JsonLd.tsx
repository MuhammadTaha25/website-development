// JSON.stringify does not escape "<", so a field value containing the
// substring "</script>" could prematurely close this tag and inject
// arbitrary markup/script into the page. Escaping "<" to "<" (valid
// inside a JSON string, inert in HTML) closes that off regardless of what
// ends up in `data`.
function toSafeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toSafeJsonLd(data) }}
    />
  );
}
