// Mesa de Edición: service worker mínimo para que la app se pueda instalar.
// Siempre va a la red, así nunca muestra datos viejos.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
