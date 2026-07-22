/** Resolve public/ assets under Vite `base` (GitHub Pages subdirectory safe). */
export function publicAssetUrl(path: string) {
  const base = import.meta.env.BASE_URL || './'
  return `${base}${String(path).replace(/^\/+/, '')}`
}

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

type ToastOptions = {
  /** CSS selector under root, toast will be centered inside this element */
  anchorSelector?: string
  className?: string
  durationMs?: number
}

export function showToast(root: HTMLElement, message: string, options: ToastOptions = {}) {
  const old = root.querySelector('[data-toast]')
  old?.remove()
  const toast = document.createElement('div')
  toast.dataset.toast = 'true'
  toast.className = ['prototype-toast', options.className].filter(Boolean).join(' ')
  toast.textContent = message

  const anchor = options.anchorSelector
    ? root.querySelector<HTMLElement>(options.anchorSelector)
    : null

  if (anchor) {
    const style = getComputedStyle(anchor)
    if (style.position === 'static') anchor.style.position = 'relative'
    toast.classList.add('prototype-toast-anchored')
    anchor.appendChild(toast)
  } else {
    root.appendChild(toast)
  }

  window.setTimeout(() => toast.remove(), options.durationMs ?? 1800)
}
