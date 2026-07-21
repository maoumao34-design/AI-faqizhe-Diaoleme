export function showPage(root: HTMLElement, id: string) {
  root.querySelectorAll<HTMLElement>('.page').forEach((page) => page.classList.toggle('active', page.dataset.page === id))
  root.querySelectorAll<HTMLElement>('[data-go]').forEach((btn) => btn.classList.toggle('active', btn.dataset.go === id))
  const heading = root.querySelector<HTMLElement>('#pageHeading')
  const sub = root.querySelector<HTMLElement>('#pageSub')
  const meta: Record<string, [string, string]> = {
    scan: ['Scan', '用科学的方式，了解你的头发状况 💗'],
    diary: ['My Diary ✨', '每一天一篇小结，由当日报告温柔整理而成'],
  }
  if (heading && meta[id]) heading.textContent = meta[id][0]
  if (sub && meta[id]) sub.textContent = meta[id][1]
}
