export const prototypeStyle = `
  :root {
    --ink: #13205f;
    --muted: #65709e;
    --purple: #8b5cf6;
    --purple-2: #b58cff;
    --pink: #ff77a8;
    --green: #65c982;
    --orange: #ff9a3d;
    --blue: #68b9ff;
    --line: rgba(122, 99, 196, 0.16);
    --glass: rgba(255, 255, 255, 0.62);
    --glass-strong: rgba(255, 255, 255, 0.82);
    --shadow: 0 24px 70px rgba(99, 75, 168, 0.18);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    color: var(--ink);
    font-family: Inter, "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;
    background:
      radial-gradient(circle at 72% 4%, rgba(126, 105, 255, 0.34), transparent 31%),
      radial-gradient(circle at 20% 7%, rgba(255, 183, 210, 0.42), transparent 27%),
      radial-gradient(circle at 88% 88%, rgba(255, 209, 150, 0.3), transparent 32%),
      linear-gradient(135deg, #fff8fb 0%, #f4efff 47%, #fdf7ff 100%);
    overflow-x: hidden;
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  body::before {
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.96) 0 2px, transparent 3px),
      radial-gradient(circle, rgba(255, 208, 119, 0.72) 0 1px, transparent 2px);
    background-size: 180px 180px, 260px 260px;
    background-position: 40px 20px, 80px 70px;
    opacity: 0.58;
  }

  body::after {
    background:
      radial-gradient(ellipse at 58% 78%, rgba(137, 206, 120, 0.28), transparent 24%),
      linear-gradient(180deg, transparent 0 72%, rgba(255, 255, 255, 0.38) 100%);
  }

  button,
  input {
    font: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  .app {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 160px minmax(0, 1fr);
    min-height: 100vh;
  }

  .sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 28px 18px;
    background: rgba(255, 255, 255, 0.46);
    border-right: 1px solid rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mini-buddy {
    width: 54px;
    height: 54px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle at 50% 38%, #fff 0 24%, transparent 25%),
      radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(221, 202, 255, 0.58));
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 12px 30px rgba(132, 95, 218, 0.15);
    position: relative;
  }

  .mini-buddy::before {
    content: "•  •";
    position: absolute;
    top: 22px;
    color: #0d1643;
    font-size: 16px;
    letter-spacing: 6px;
  }

  .brand h1 {
    margin: 0;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .brand span {
    display: block;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 700;
  }

  .nav {
    display: grid;
    gap: 8px;
  }

  .nav button,
  .profile {
    min-height: 56px;
    border-radius: 8px;
    color: #7480ad;
    background: transparent;
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    text-align: left;
    font-weight: 700;
  }

  .nav button.nav-primary {
    color: #5b6799;
    font-weight: 800;
  }

  .nav button.nav-primary .icon {
    font-size: 22px;
  }

  .nav button.active {
    color: var(--purple);
    background: rgba(139, 92, 246, 0.13);
    box-shadow: inset 3px 0 0 var(--purple);
  }

  .nav .icon {
    font-size: 21px;
    line-height: 1;
  }

  .nav-later {
    margin-top: 10px;
    padding-top: 12px;
    border-top: 1px dashed rgba(116, 128, 173, 0.35);
    display: grid;
    gap: 6px;
  }

  .nav-later-label {
    padding: 0 12px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9aa3c4;
  }

  .nav button.nav-later-item {
    min-height: 44px;
    opacity: 0.62;
    color: #9aa3c4;
    font-weight: 600;
    font-size: 13px;
  }

  .nav button.nav-later-item .icon {
    font-size: 16px;
  }

  .nav button.nav-later-item.active {
    opacity: 0.9;
  }

  .profile {
    margin-top: auto;
    background: rgba(255, 255, 255, 0.62);
  }

  .profile img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .main {
    padding: 34px 42px 46px;
    min-width: 0;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 22px;
  }

  .page-title h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1.05;
    letter-spacing: 0;
  }

  .page-title p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 700;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pill {
    min-height: 46px;
    border-radius: 999px;
    padding: 0 22px;
    color: var(--purple);
    background: rgba(255, 255, 255, 0.68);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.8);
    font-weight: 800;
  }

  .pill.primary,
  .primary {
    color: white;
    background: linear-gradient(135deg, #a96dff, #7054dc);
    box-shadow: 0 14px 30px rgba(117, 82, 213, 0.28);
  }

  .bell,
  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.68);
    color: var(--purple);
    font-weight: 900;
  }

  .page {
    display: none;
    animation: fade 0.35s ease;
  }

  .page.active {
    display: block;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
  }

  .grid {
    display: grid;
    gap: 20px;
  }

  .home-grid {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: start;
  }

  .two-col {
    grid-template-columns: minmax(0, 1fr) 360px;
  }

  .three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card {
    border-radius: 8px;
    padding: 24px;
    background: var(--glass);
    border: 1px solid rgba(255, 255, 255, 0.74);
    box-shadow: var(--shadow);
    backdrop-filter: blur(22px);
  }

  .soft {
    background: rgba(255, 255, 255, 0.48);
  }

  .hero {
    position: relative;
    min-height: 620px;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(360px, 0.8fr) minmax(420px, 1.2fr);
    align-items: center;
    padding: 52px;
  }

  .hero h2 {
    margin: 0;
    max-width: 620px;
    font-size: clamp(42px, 4.5vw, 68px);
    line-height: 1.06;
    letter-spacing: 0;
  }

  .hero h2 em {
    color: var(--purple);
    font-style: normal;
  }

  .hero h2 strong {
    color: var(--pink);
  }

  .hero p {
    width: min(500px, 100%);
    color: var(--muted);
    font-size: 17px;
    line-height: 1.65;
    font-weight: 700;
  }

  .hero-buttons,
  .tabs,
  .row {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .cta {
    min-height: 56px;
    border-radius: 999px;
    padding: 0 30px;
    font-weight: 900;
  }

  .ghost {
    color: var(--purple);
    background: rgba(255, 255, 255, 0.76);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.88);
  }

  .buddy-stage {
    min-height: 430px;
    display: grid;
    place-items: end center;
    position: relative;
  }

  .ground {
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 40px;
    height: 130px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 38% 25%, rgba(255, 255, 255, 0.85) 0 3px, transparent 4px),
      radial-gradient(circle at 70% 34%, rgba(255, 232, 122, 0.8) 0 3px, transparent 4px),
      linear-gradient(180deg, #afcf70, #70984e);
    filter: blur(0.2px);
    opacity: 0.92;
  }

  .buddy {
    --hair: #fffefa;
    position: relative;
    width: 260px;
    height: 340px;
    z-index: 2;
    transform-origin: bottom center;
    animation: floaty 4.5s ease-in-out infinite;
  }

  @keyframes floaty {
    50% {
      transform: translateY(-8px);
    }
  }

  .fluff {
    position: absolute;
    left: 22px;
    top: 0;
    width: 218px;
    height: 218px;
    border-radius: 50%;
    background:
      repeating-conic-gradient(from 10deg, rgba(255, 255, 255, 0.94) 0 8deg, rgba(244, 224, 255, 0.68) 8deg 11deg, transparent 11deg 15deg),
      radial-gradient(circle, #fff 0 48%, rgba(251, 238, 255, 0.88) 60%, transparent 72%);
    box-shadow: 0 0 42px rgba(255, 255, 255, 0.94), inset 0 0 32px rgba(185, 162, 255, 0.16);
  }

  .fluff::before,
  .fluff::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.88);
    box-shadow:
      28px 12px 0 rgba(255, 255, 255, 0.78),
      72px -8px 0 rgba(255, 255, 255, 0.74),
      126px 8px 0 rgba(255, 255, 255, 0.78),
      158px 38px 0 rgba(255, 255, 255, 0.72),
      110px 156px 0 rgba(255, 255, 255, 0.68),
      45px 142px 0 rgba(255, 255, 255, 0.64);
  }

  .fluff::before {
    width: 12px;
    height: 12px;
    top: 17px;
    left: 17px;
  }

  .fluff::after {
    width: 8px;
    height: 8px;
    top: 48px;
    left: 42px;
  }

  .face {
    position: absolute;
    left: 74px;
    top: 116px;
    width: 112px;
    height: 88px;
    border-radius: 48% 48% 55% 55%;
    background: linear-gradient(180deg, #fff8f0, #ffe8d8);
    box-shadow: inset 0 -10px 18px rgba(255, 176, 156, 0.16);
  }

  .eye {
    position: absolute;
    top: 31px;
    width: 25px;
    height: 13px;
    border-radius: 50%;
    background: #0e1435;
  }

  .eye.left {
    left: 21px;
    transform: rotate(5deg);
  }

  .eye.right {
    right: 21px;
    transform: rotate(-5deg);
  }

  .nose {
    position: absolute;
    left: 52px;
    top: 48px;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: #ff8a61;
  }

  .blush {
    position: absolute;
    top: 50px;
    width: 19px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 143, 168, 0.42);
    filter: blur(1px);
  }

  .blush.left {
    left: 10px;
  }

  .blush.right {
    right: 10px;
  }

  .body {
    position: absolute;
    left: 87px;
    top: 190px;
    width: 88px;
    height: 98px;
    border-radius: 32px 32px 28px 28px;
    background: linear-gradient(180deg, #ff9e47, #e97822);
    box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.18), 0 14px 26px rgba(206, 103, 28, 0.22);
  }

  .body::before,
  .body::after {
    content: "";
    position: absolute;
    top: 22px;
    width: 26px;
    height: 48px;
    border-radius: 16px;
    background: #fff4ea;
  }

  .body::before {
    left: -13px;
    transform: rotate(18deg);
  }

  .body::after {
    right: -13px;
    transform: rotate(-18deg);
  }

  .shoe {
    position: absolute;
    top: 280px;
    width: 54px;
    height: 35px;
    border-radius: 20px;
    background: linear-gradient(180deg, #ff9d3c, #db6b22);
  }

  .shoe.left {
    left: 70px;
  }

  .shoe.right {
    right: 70px;
  }

  .sprout {
    position: absolute;
    left: 129px;
    top: -6px;
    width: 6px;
    height: 36px;
    border-radius: 99px;
    background: #64bc6d;
    transform: rotate(-16deg);
  }

  .sprout::before,
  .sprout::after {
    content: "";
    position: absolute;
    top: 3px;
    width: 26px;
    height: 15px;
    border-radius: 50%;
    background: #70cd78;
  }

  .sprout::before {
    left: -22px;
    transform: rotate(-20deg);
  }

  .sprout::after {
    left: 3px;
    transform: rotate(30deg);
  }

  .report-card {
    position: absolute;
    right: 34px;
    top: 60px;
    width: 290px;
  }

  .big-number {
    font-size: 54px;
    line-height: 1;
    color: var(--purple);
    font-weight: 950;
  }

  .chart {
    height: 96px;
    margin-top: 18px;
    display: flex;
    align-items: end;
    gap: 11px;
    padding: 10px 6px 0;
    border-bottom: 1px solid rgba(104, 90, 164, 0.14);
  }

  .bar {
    flex: 1;
    min-width: 9px;
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, #a56dff, #f69cc4);
  }

  .mini-card-grid {
    margin-top: -18px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .section-title {
    margin: 0 0 16px;
    font-size: 20px;
  }

  .metric {
    display: grid;
    gap: 10px;
  }

  .metric-row {
    display: grid;
    grid-template-columns: 36px 1fr 70px;
    align-items: center;
    gap: 14px;
  }

  .meter {
    height: 11px;
    border-radius: 999px;
    background: rgba(131, 104, 185, 0.1);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    width: var(--w);
    border-radius: inherit;
    background: linear-gradient(90deg, var(--c, var(--purple)), #d8b5ff);
  }

  .item-list {
    display: grid;
    gap: 12px;
  }

  .item {
    min-height: 72px;
    padding: 14px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.58);
    display: grid;
    grid-template-columns: 44px 1fr auto;
    align-items: center;
    gap: 14px;
  }

  .item b,
  .leader b,
  .reward b {
    display: block;
  }

  .item small,
  .leader small,
  .reward small {
    color: var(--muted);
    font-weight: 700;
  }

  .badge {
    min-width: 42px;
    height: 34px;
    display: inline-grid;
    place-items: center;
    border-radius: 999px;
    padding: 0 12px;
    background: rgba(139, 92, 246, 0.12);
    color: var(--purple);
    font-weight: 900;
  }

  .status {
    color: var(--green);
    font-weight: 900;
  }

  .quest-btn {
    height: 42px;
    min-width: 92px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #aa72ff, #7354dd);
    font-weight: 900;
  }

  .quest-btn.done {
    color: var(--green);
    background: rgba(101, 201, 130, 0.12);
  }

  .scan-wrap {
    display: grid;
    grid-template-columns: 250px minmax(420px, 1fr) 360px;
    gap: 24px;
    align-items: stretch;
  }

  .scan-orbit {
    width: min(48vw, 560px);
    aspect-ratio: 1;
    margin: auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: relative;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.58), rgba(168, 127, 255, 0.14) 63%, transparent 64%);
  }

  .scan-orbit::before {
    content: "";
    position: absolute;
    inset: 16px;
    border-radius: 50%;
    border: 8px solid rgba(255, 255, 255, 0.72);
    border-right-color: var(--purple);
    border-bottom-color: var(--purple-2);
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .scan-percent {
    position: absolute;
    bottom: 34px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: linear-gradient(135deg, #c99aff, #7c5be5);
    border-radius: 999px;
    padding: 8px 24px;
    font-size: 25px;
    font-weight: 950;
  }

  .feature-stack {
    display: grid;
    gap: 18px;
  }

  .feature {
    min-height: 92px;
    border-radius: 8px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.62);
  }

  .feature b {
    display: block;
    margin-bottom: 6px;
  }

  .skin-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(120px, 1fr));
    gap: 14px;
  }

  .skin {
    min-height: 176px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(122, 99, 196, 0.1);
    display: grid;
    place-items: center;
    gap: 10px;
    padding: 14px;
    text-align: center;
  }

  .skin.active {
    border-color: var(--purple);
    box-shadow: inset 0 0 0 2px rgba(139, 92, 246, 0.18);
  }

  .skin .mini-buddy {
    width: 76px;
    height: 76px;
  }

  .timeline-hero {
    min-height: 245px;
    position: relative;
    overflow: hidden;
  }

  .path {
    position: absolute;
    left: 42px;
    right: 42px;
    bottom: 54px;
    height: 84px;
    border-bottom: 4px dashed rgba(145, 100, 255, 0.3);
    border-radius: 50%;
  }

  .milestones {
    position: relative;
    margin-top: 58px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }

  .milestone {
    text-align: center;
    font-weight: 900;
  }

  .dot {
    width: 46px;
    height: 46px;
    margin: 0 auto 10px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: white;
    background: linear-gradient(135deg, #a979ff, #65c982);
    box-shadow: 0 10px 20px rgba(124, 91, 229, 0.22);
  }

  .leaderboard {
    display: grid;
    gap: 9px;
  }

  .leader {
    min-height: 68px;
    display: grid;
    grid-template-columns: 44px 1fr 110px 44px;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.56);
  }

  .leader.you {
    background: linear-gradient(90deg, rgba(148, 93, 245, 0.86), rgba(205, 164, 255, 0.54));
    color: white;
  }

  .shop {
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    gap: 16px;
  }

  .reward {
    min-height: 255px;
    border-radius: 8px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.62);
    display: grid;
    gap: 12px;
  }

  .reward-art {
    height: 128px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    font-size: 58px;
    background: linear-gradient(145deg, #fff, #ffe9f0);
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 9px;
    text-align: center;
  }

  .calendar span {
    display: grid;
    place-items: center;
    min-height: 34px;
    border-radius: 50%;
    font-weight: 800;
  }

  .calendar .selected {
    color: white;
    background: var(--purple);
  }

  .post {
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.62);
    padding: 18px;
    display: grid;
    grid-template-columns: 50px 1fr auto;
    gap: 14px;
  }

  .post-media {
    width: 112px;
    height: 76px;
    border-radius: 8px;
    background: linear-gradient(135deg, #ffd7e6, #cab5ff);
    display: grid;
    place-items: center;
    font-size: 34px;
  }

  .word-cloud {
    min-height: 230px;
    position: relative;
  }

  .word-cloud span {
    position: absolute;
    color: var(--purple);
    font-weight: 900;
  }

  .donut {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(var(--purple) 0 55%, var(--green) 55% 76%, var(--orange) 76% 88%, #d9d5ee 88% 100%);
    display: grid;
    place-items: center;
  }

  .donut::after {
    content: attr(data-label);
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: #fff;
    display: grid;
    place-items: center;
    text-align: center;
    white-space: pre-line;
    font-size: 22px;
    font-weight: 950;
  }

  .phone-only {
    display: none;
  }

  @media (max-width: 1180px) {
    .app {
      grid-template-columns: 92px 1fr;
    }

    .brand h1,
    .brand span,
    .nav label,
    .profile label {
      display: none;
    }

    .nav button,
    .profile {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .hero,
    .home-grid,
    .two-col,
    .scan-wrap {
      grid-template-columns: 1fr;
    }

    .report-card {
      position: static;
      width: auto;
      margin-top: 20px;
    }

    .mini-card-grid,
    .three,
    .shop {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skin-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .app {
      display: block;
    }

    .sidebar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: auto;
      height: 78px;
      z-index: 10;
      padding: 8px;
      flex-direction: row;
      overflow-x: auto;
    }

    .brand,
    .profile {
      display: none;
    }

    .nav {
      display: flex;
      gap: 6px;
    }

    .nav-later {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 4px;
      padding-left: 8px;
      border-left: 1px dashed rgba(116, 128, 173, 0.35);
    }

    .nav-later-label {
      display: none;
    }

    .nav button.nav-later-item {
      min-width: 58px;
      min-height: 52px;
      opacity: 0.5;
    }

    .nav button {
      min-width: 70px;
      min-height: 58px;
      padding: 8px;
    }

    .nav button.nav-primary {
      min-width: 76px;
    }

    .main {
      padding: 20px 16px 104px;
    }

    .topbar {
      align-items: flex-start;
    }

    .actions .pill {
      display: none;
    }

    .hero {
      min-height: auto;
      padding: 24px;
    }

    .hero h2 {
      font-size: 42px;
    }

    .buddy-stage {
      min-height: 360px;
    }

    .buddy {
      transform: scale(0.82);
    }

    .mini-card-grid,
    .three,
    .shop,
    .skin-grid {
      grid-template-columns: 1fr;
    }
  }
`;