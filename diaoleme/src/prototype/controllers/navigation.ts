const PAGE_BODY_CLASSES = [
  'reference-home',
  'fp-home',
  'scan-page-active',
  'fp-scan',
  'buddy-page-active',
  'quest-page-active',
  'journey-page-active',
  'diary-page-active',
  'community-page-active',
  'me-page-active',
] as const

const PAGE_TO_BODY: Record<string, string[]> = {
  home: ['reference-home', 'fp-home'],
  scan: ['scan-page-active', 'fp-scan'],
  buddy: ['buddy-page-active'],
  quests: ['quest-page-active'],
  journey: ['journey-page-active'],
  diary: ['diary-page-active'],
  community: ['community-page-active'],
  me: ['me-page-active'],
}

export function showPage(root: HTMLElement, id: string) {
  root.querySelectorAll<HTMLElement>('.page').forEach((page) => page.classList.toggle('active', page.dataset.page === id))
  root.querySelectorAll<HTMLElement>('[data-go]').forEach((btn) => btn.classList.toggle('active', btn.dataset.go === id))

  for (const cls of PAGE_BODY_CLASSES) document.body.classList.remove(cls)
  for (const cls of PAGE_TO_BODY[id] || []) document.body.classList.add(cls)

  const heading = root.querySelector<HTMLElement>('#pageHeading')
  const sub = root.querySelector<HTMLElement>('#pageSub')
  const meta: Record<string, [string, string]> = {
    home: ['Home', 'Every hair is a seed.'],
    scan: ['Scan', '用科学的方式，了解你的头发状况 💗'],
    buddy: ['Buddy', '每个人拥有自己的生命伙伴'],
    quests: ['Quests', '完成护发任务，获得经验值和能量'],
    journey: ['Journey', '每一步成长，都值得被记录 ✨'],
    league: ['League', '和伙伴们一起成长，赢取荣誉与奖励'],
    rewards: ['Rewards', '用成长兑换惊喜，奖励每一次认真生活'],
    diary: ['My Diary ✨', '记录每一个小瞬间，见证成长的每一步 💜'],
    community: ['Community', '在这里，分享治愈，收获力量'],
    me: ['我', '每一根头发，都是生命力的见证 ✨'],
  }
  if (heading && meta[id]) heading.textContent = meta[id][0]
  if (sub && meta[id]) sub.textContent = meta[id][1]
}
