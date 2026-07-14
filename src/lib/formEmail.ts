function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Renders a simple label/value table for a form-submission notification email. */
export function renderFormEmailHtml(title: string, fields: Record<string, string | undefined>): string {
  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;font-weight:600;color:#0D1B40;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;color:#374151;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(String(value))}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0D1B40;border-bottom:2px solid #C9A24B;padding-bottom:10px;">${escapeHtml(title)}</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">${rows}</table>
      <p style="color:#9CA3AF;font-size:12px;margin-top:20px;">Submitted via the Vochmal website.</p>
    </div>`;
}
