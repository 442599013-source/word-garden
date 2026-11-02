// Local SVG icons: no external fonts, images or CDN required.
const p = {
  'user':'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-6 8-6s8 2 8 6"/>',
  'settings':'<path d="M12 2.5l1.7 2.1 2.7-.1.6 2.6 2.5 1.1-.8 2.6 1.4 2.2-1.8 2-0.1 2.7-2.6.6-1.3 2.4-2.5-.8-2.2 1.4-2-1.8-2.7-.1-.6-2.6-2.4-1.3.8-2.5-1.4-2.2 1.8-2 .1-2.7 2.6-.6 1.3-2.4 2.5.8z"/><circle cx="12" cy="12" r="3"/>',
  'cap':'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5M22 9v7"/>',
  'bookcheck':'<path d="M4 5c3-2 6-2 8 0 2-2 5-2 8 0v14c-3-2-6-2-8 0-2-2-5-2-8 0zM12 5v14"/><path d="m15 10 1.5 1.5L19 9"/>',
  'clipboard':'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2m-6 8 2 2 4-4"/>',
  'rocket':'<path d="M14 4c3-1 5-1 7-1 0 5-2 10-7 14l-5-5c1-3 3-6 5-8zM9 12l-4 1-2 5 5-2m5 0-1 5-5 1 1-4"/><circle cx="16" cy="9" r="2"/><path d="M6 18c-2 1-3 3-3 5 2 0 4-1 5-3"/>',
  'chevron':'<path d="m9 6 6 6-6 6"/>',
  'back':'<path d="m15 18-6-6 6-6"/>',
  'headphones':'<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14v5a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2m16-2v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2"/>',
  'mic':'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8"/>',
  'book':'<path d="M4 5c3-2 6-2 8 0 2-2 5-2 8 0v14c-3-2-6-2-8 0-2-2-5-2-8 0zM12 5v14"/>',
  'pencil':'<path d="m4 20 4-.5L20 7.5 16.5 4 4.5 16zM14.5 6l3.5 3.5M3 21h18"/>',
  'volume':'<path d="M4 9h4l5-4v14l-5-4H4zM17 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12"/>',
  'mute':'<path d="M4 9h4l5-4v14l-5-4H4zM17 9l5 6m0-6-5 6"/>',
  'lock':'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
};
export function icon(name, className='') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p[name]||p.chevron}</svg>`;
}
export function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
