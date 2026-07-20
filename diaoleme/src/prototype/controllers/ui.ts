export function setHtml(target: Element | null | undefined, html: string) {
  if (target) target.innerHTML = html
}

export function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function showToast(root: HTMLElement, message: string) {
  const old = root.querySelector('[data-toast]')
  old?.remove()
  const toast = document.createElement('div')
  toast.dataset.toast = 'true'
  toast.className = 'prototype-toast'
  toast.textContent = message
  root.appendChild(toast)
  window.setTimeout(() => toast.remove(), 1800)
}
