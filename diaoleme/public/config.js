// Runtime deployment config for GitHub Pages.
// Prefer HTTPS backend origin here so production never falls back to visitor localhost.
window.__DIAOLEME_CONFIG__ = window.__DIAOLEME_CONFIG__ || {
  // Temporary public tunnel for AIFA-26 demo acceptance (localhost.run → local backend :8787).
  // Replace with stable Render/Railway URL from AIFA-27 when available.
  apiBaseUrl: 'https://252a28830944f8.lhr.life',
}
