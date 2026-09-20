// Set de íconos de línea, dibujados a medida para WL Distribuciones.
// Trazo uniforme (currentColor), sin relleno, 24x24. Uno por categoría + combos.
const WL_ICONS = {
  cocina: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 10.5c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8v.7c0 3.9-3.5 7-7.8 7h-.4c-4.3 0-7.8-3.1-7.8-7v-.7Z"/>
    <path d="M8 8.7V6.4M12 8.7V5.2M16 8.7V6.4"/>
    <path d="M3.4 18.4h17.2"/>
  </svg>`,
  ropa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 4.2 12 6l2.5-1.8 3.7 2.3-1.6 3-2.1-1.1V19.6H9.5V8.4l-2.1 1.1-1.6-3 3.7-2.3Z"/>
    <path d="M14.8 15.4c1.6.5 2.7 1.6 2.7 3v1.2" opacity="0"/>
  </svg>`,
  desengrasantes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.3c2.4 3 4.6 5.9 4.6 9a4.6 4.6 0 1 1-9.2 0c0-3.1 2.2-6 4.6-9Z"/>
    <path d="M17.6 6.6l1.6-1.6M19.2 6.6l1.5 1.5" stroke-width="1.3"/>
  </svg>`,
  lavandina: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.5 3.6h5v3l2.3 3.4c.6.9.9 1.9.9 3v3.6c0 1.6-1.3 2.8-2.8 2.8h-5.8A2.8 2.8 0 0 1 6.3 16.6V13c0-1.1.3-2.1.9-3l2.3-3.4v-3Z"/>
    <path d="M9.5 6.6h5"/>
    <path d="M12 12.4v4.2M9.9 14.5h4.2"/>
  </svg>`,
  automotor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4.2 15.2 5.6 10a2 2 0 0 1 1.9-1.4h9a2 2 0 0 1 1.9 1.4l1.4 5.2"/>
    <path d="M4 15.2h16v2.6a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-.9H7.2v.9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.6Z"/>
    <circle cx="7.6" cy="15.2" r="1.1"/>
    <circle cx="16.4" cy="15.2" r="1.1"/>
  </svg>`,
  superficies: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4.5" y="4.5" width="15" height="15" rx="0.5"/>
    <path d="M4.5 12h15M12 4.5v15"/>
    <path d="M14.5 9.2c1 .6 1.7 1.5 1.7 2.8" stroke-width="1.2"/>
  </svg>`,
  higiene: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 10.6V6.8a1.5 1.5 0 0 1 3 0v3.4M11.5 10.2V6.2a1.5 1.5 0 0 1 3 0v4"/>
    <path d="M14.5 10.4V8a1.4 1.4 0 0 1 2.8 0v5.2c0 3.5-2.5 6.4-6 6.4h-.6c-2.6 0-4.4-1.3-5.5-3.4l-1.9-3.6a1.3 1.3 0 0 1 2.3-1.2l1.4 2"/>
  </svg>`,
  pileta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3.5 9.5h17M3.5 9.5V17M20.5 9.5V17"/>
    <path d="M3.2 14.4c1.2 1 2 1 3.2 0s2-1 3.2 0 2 1 3.2 0 2-1 3.2 0 2 1 3.2 0"/>
    <path d="M3.2 18.2c1.2 1 2 1 3.2 0s2-1 3.2 0 2 1 3.2 0 2-1 3.2 0 2 1 3.2 0"/>
  </svg>`,
  combos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 8.2 12 4l8 4.2v7.6L12 20l-8-4.2V8.2Z"/>
    <path d="M4 8.2 12 12l8-4.2M12 12v8"/>
  </svg>`,
};

const WL_WHATSAPP_ICON = `<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M17 14.3c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.4.3-.4.7-1.3.1-.2 0-.4 0-.5C10.6 9.7 10.2 8.7 10 8.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.4 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
  <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.2A8.5 8.5 0 1 0 12 3.5Zm0 1.6a6.9 6.9 0 1 1-3.7 12.7l-.3-.2-2.6.7.7-2.5-.2-.3A6.9 6.9 0 0 1 12 5.1Z"/>
</svg>`;
