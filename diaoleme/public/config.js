// Runtime deployment config for GitHub Pages.
// Prefer HTTPS backend origin here so production never falls back to visitor localhost.
window.__DIAOLEME_CONFIG__ = window.__DIAOLEME_CONFIG__ || {
  // Public tunnel from AIFA-27 deploy (localhost.run → backend :8787).
  // If health fails after SSH reconnect, refresh from backend deploy public_url.txt.
  apiBaseUrl: 'https://26a317997932e3.lhr.life',
}
