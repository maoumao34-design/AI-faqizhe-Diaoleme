export const prototypeScript = `
const pages = [
  ["home", "⌂", "Home", "Every hair is a seed."],
  ["scan", "▢", "Scan", " 用科学的方式，了解你的头发状况 💗"],
  ["buddy", "☁", "Buddy", " 每个人拥有自己的生命伙伴 "],
  ["quests", "✿", "Quests", " 完成护发任务，获得经验值和能量 "],
  ["journey", "✧", "Journey", " 每一步成长，都值得被记录 ✨"],
  ["league", "♛", "League", " 和伙伴们一起成长，赢取荣誉与奖励 "],
  ["rewards", "□", "Rewards", " 用成长兑换惊喜，奖励每一次认真生活 "],
  ["diary", "▤", "Diary", " 记录每一个小瞬间，见证成长的每一步 💜"],
  ["community", "☷", "Community", " 在这里，分享治愈，收获力量 "]
];

const quests = [
  ["💧", " 喝够 8 杯水 ", " 充足的水分让头发更健康 ", "6/8", "+50 XP"],
  ["🌙", "23:30 前睡觉 ", " 早睡是头皮的修复时间 ", "0/1", "+60 XP"],
  ["🥗", " 吃一份蔬果 ", " 补充维生素，滋养发根 ", "1/1", " 已完成 "],
  ["🖐", " 头皮按摩 5 分钟 ", " 促进头皮血液循环 ", "2/5", "+50 XP"],
  ["🚶", " 散步 20 分钟 ", " 运动让身体和头发一起呼吸 ", "1/1", " 已完成 "]
];

const leaders = [
  ["1", "Luna", " 头发是生命的种子 🌱", "28,760 XP", "↑ 1"],
  ["2", "Mia", " 每天进步 1% ✨", "25,480 XP", "↓ 1"],
  ["3", "Ray", " 慢慢来，比较更重要 💜", "22,140 XP", "—"],
  ["4", "Sophia", " 关注头皮，从现在开始 ", "18,900 XP", "↑ 2"],
  ["5", "Bella", " 保持心情愉悦～", "16,520 XP", "↓ 1"],
  ["12", "You", " 一起变好呀！", "12,360 XP", "↑ 3"]
];

const nav = document.querySelector("#nav");
const heading = document.querySelector("#pageHeading");
const sub = document.querySelector("#pageSub");

nav.innerHTML = pages
  .map(
    ([id, icon, label]) =>
      \`<button data-go="\${id}" class="\${id === "home" ? "active" : ""}"><span class="icon">\${icon}</span><label>\${label}</label></button>\`
  )
  .join("");

function showPage(id) {
  document.querySelectorAll(".page").forEach((page) =>
    page.classList.toggle("active", page.dataset.page === id)
  );
  document.querySelectorAll("[data-go]").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.go === id)
  );
  const meta = pages.find((page) => page[0] === id);
  heading.textContent = meta?.[2] || "Diaoleme";
  sub.textContent = meta?.[3] || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  if (go) showPage(go.dataset.go);
});

document.querySelectorAll(".chart").forEach((chart) => {
  const values = (chart.dataset.bars || "30,60,45,75").split(",");
  chart.innerHTML = values
    .map((v) => \`<span class="bar" style="height:\${v}%"></span>\`)
    .join("");
});

document.querySelector(".compact-quests").innerHTML = quests
  .slice(0, 4)
  .map(
    (q, i) =>
      \`<div class="item" style="grid-template-columns:34px 1fr auto"><span>\${q[0]}</span><b>\${q[1]}</b><span class="\${i === 2 ? "status" : ""}">\${q[4]}</span></div>\`
  )
  .join("");

document.querySelector(".small-leaders").innerHTML = leaders
  .slice(0, 4)
  .map(
    (l) =>
      \`<div class="leader \${l[0] === "12" ? "you" : ""}" style="grid-template-columns:34px 1fr auto"><span class="badge">\${l[0]}</span><b>\${l[1]}</b><span>\${l[3]}</span></div>\`
  )
  .join("");

const skinNames = [
  " 蒲公英蓬蓬头 ",
  " 星光短发 ",
  " 彩虹飘带 ",
  "Coming Soon",
  "Coming Soon",
  "Coming Soon"
];
document.querySelector("#skins").innerHTML = skinNames
  .map(
    (name, i) =>
      \`<button class="skin \${i === 0 ? "active" : ""}"><div class="mini-buddy" style="\${i > 2 ? "opacity:.45" : ""}"></div><b>\${name}</b><small>Lv.\${[5, 8, 10, 12, 14, 18][i]}</small></button>\`
  )
  .join("");
document.querySelector("#skins").addEventListener("click", (event) => {
  const skin = event.target.closest(".skin");
  if (!skin) return;
  document.querySelectorAll(".skin").forEach((item) =>
    item.classList.remove("active")
  );
  skin.classList.add("active");
});

document.querySelector("#questList").innerHTML =
  quests
    .map(
      (q, i) =>
        \`<div class="item"><span style="font-size:26px">\${q[0]}</span><b>\${q[1]}<small>\${q[2]}</small></b><span>\${q[3]}</span><button class="quest-btn \${q[4] === "已完成" ? "done" : ""}">\${q[4] === "已完成" ? "✓ 已完成" : "去完成"}</button></div>\`
    )
    .join("") +
  \`<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>完成所有每日任务可获得额外奖励！</b><span>+100 XP</span><button class="quest-btn done">未完成</button></div>\`;

document.querySelector("#questList").addEventListener("click", (event) => {
  const btn = event.target.closest(".quest-btn");
  if (!btn || btn.classList.contains("done")) return;
  btn.classList.add("done");
  btn.textContent = "✓ 已完成";
});

document.querySelector("#weekRewards").innerHTML = ["一", "二", "三", "四", "五", "六", "日"]
  .map(
    (d, i) =>
      \`<span class="badge">\${i < 2 ? "✓" : d}<br><small>+\${i < 5 ? 10 + i * 5 : 25} XP</small></span>\`
  )
  .join("");
document.querySelector("#streak").innerHTML = [" 一 ", " 二 ", " 三 ", " 四 ", " 五 ", " 六 ", " 日 "]
  .map(
    (d, i) =>
      \`<span class="badge">\${i < 6 ? "✓" : "🎁"}<br><small>\${d}</small></span>\`
  )
  .join("");
document.querySelector("#checkin").innerHTML = [" 一 ", " 二 ", " 三 ", " 四 ", " 五 ", " 六 ", " 日 "]
  .map(
    (d, i) =>
      \`<span class="badge">\${i < 6 ? "✓" : "🎁"}<br><small>\${d}</small></span>\`
  )
  .join("");

const ms = [
  [" 开始记录 ", "5/1"],
  [" 坚持 3 天 ", "5/4"],
  [" 完成第一个任务 ", "5/7"],
  [" 连续 7 天 ", "5/12"],
  [" 头皮健康改善 ", "5/18"],
  [" 解锁新发型 ", "5/24"]
];
document.querySelector("#milestones").innerHTML = ms
  .map(
    (m, i) =>
      \`<div class="milestone"><div class="dot">\${["⚑", "🌱", "⭐", "7", "💧", "✂"][i]}</div>\${m[0]}<br><small>\${m[1]}</small></div>\`
  )
  .join("");
document.querySelector("#timeline").innerHTML = [
  ["5/18", " 头皮健康评分提升 ", " 你的头皮健康评分从 72 提升到 82，继续保持哦！", "+10 健康分 "],
  ["5/15", " 早睡打卡 ", " 你在 22:30 前入睡，睡眠质量很棒！", "+60 XP"],
  ["5/12", " 连续打卡 7 天 ", " 太棒了！你已经连续 7 天坚持记录和护理！", "+200 XP"],
  ["5/10", " 健康饮食 ", " 你记录了健康餐饮，营养均衡。", "+40 XP"],
  ["5/8", " 运动 20 分钟 ", " 运动可以促进血液循环，头发会更健康哦！", "+50 XP"]
]
  .map(
    (t) =>
      \`<div class="item"><span>\${t[0]}</span><b>\${t[1]}<small>\${t[2]}</small></b><span class="status">\${t[3]}</span></div>\`
  )
  .join("");

document.querySelector("#leaders").innerHTML = leaders
  .map(
    (l) =>
      \`<div class="leader \${l[0] === "12" ? "you" : ""}"><span class="badge">\${l[0]}</span><b>\${l[1]}<small>\${l[2]}</small></b><span>\${l[3]}</span><span>\${l[4]}</span></div>\`
  )
  .join("");

const rewards = [
  ["🎀", " 樱花发箍 ", "2,000 XP"],
  ["🫧", " 星光泡泡发型 ", "3,500 XP"],
  ["🧴", " 生发精华液 30ml", "4,800 XP"],
  ["💜", " 治愈蘑菇帽 ", "2,800 XP"],
  ["🎁", " 护发礼包套装 ", "6,500 XP"],
  ["🌿", " 蒲公英小夜灯 ", "3,200 XP"],
  ["🌱", " 嫩芽发型 ", "2,500 XP"],
  ["🪮", " 头皮按摩梳 ", "4,200 XP"],
  ["🧥", " 微羽披风 ", "5,000 XP"],
  ["🎫", "7 天特权卡 ", "8,000 XP"]
];
document.querySelector("#shop").innerHTML = rewards
  .map(
    (r) =>
      \`<div class="reward"><div class="reward-art">\${r[0]}</div><b>\${r[1]}</b><small>Lv.5 解锁</small><b style="color:var(--purple)">\${r[2]}</b></div>\`
  )
  .join("");

document.querySelector("#calendar").innerHTML = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  28,
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
]
  .map((d) => \`<span class="\${d === 18 ? "selected" : ""}">\${d}</span>\`)
  .join("");
document.querySelector("#diaries").innerHTML = [
  ["18", "😊 开心 ", " 今天掉发好像比昨天少一点！", " 虽然还是很多，但看到小小的变化，心情瞬间变晴。"],
  ["17", "😌 平静 ", " 坚持护发第 17 天 ✨", " 今天做了头皮按摩，感觉头皮放松了很多。"],
  ["16", "🎁 疲惫 ", " 压力好大的一天...", " 晚上泡个热水澡放松一下，希望明天会更好。"],
  ["15", "😟 焦虑 ", " 为什么掉发总是反反复复...", " 希望能找到适合自己的方法。"],
  ["14", "😊 开心 ", " 收到新发型奖励啦！", " 我的小伙伴好可爱！"]
]
  .map(
    (d) =>
      \`<div class="item"><span><b>\${d[0]}</b><br>5月</span><b>\${d[1]}　\${d[2]}<small>\${d[3]}</small></b><span>⋯</span></div>\`
  )
  .join("");

document.querySelector("#posts").innerHTML = [
  [" 小蒲公英 ", "Lv.6", " 今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～", "📋", "128"],
  [" 爱吃草莓 ", "Lv.4", " 分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。", "🪮", "96"],
  [" 薄荷味的风 ", "Lv.6", " 最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。", "🌿", "76"],
  [" 向日葵 ", "Lv.3", " 新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！", "🌱", "143"]
]
  .map(
    (p) =>
      \`<div class="post"><div class="mini-buddy"></div><div><b>\${p[0]} <span class="badge">\${p[1]}</span></b><p>\${p[2]}</p><span class="badge"># 头皮护理</span></div><div class="post-media">\${p[3]}</div><small>💜 \${p[4]}　💬 36　☆ 收藏</small></div>\`
  )
  .join("");
`;