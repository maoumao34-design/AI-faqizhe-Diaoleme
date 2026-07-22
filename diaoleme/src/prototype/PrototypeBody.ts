import { homeSection } from './sections/Home'
import { scanSection } from './sections/Scan'
import { buddySection } from './sections/Buddy'
import { questsSection } from './sections/Quests'
import { journeySection } from './sections/Journey'
import { leagueSection } from './sections/League'
import { rewardsSection } from './sections/Rewards'
import { diarySection } from './sections/Diary'
import { communitySection } from './sections/Community'
import { meSection } from './sections/Me'

export const prototypeBody = `<div class="viewport-shell">
    <div class="design-canvas" id="designCanvas">
    <div class="app">
      <aside class="sidebar">
        <div class="brand">
          <img class="brand-buddy" src="./home-assets/ip-head-hq.png" alt="" />
          <div>
            <h1>掉了么</h1>
            <span>Diaoleme</span>
          </div>
        </div>
        <nav class="nav" id="nav">
          <button data-go="home" class="active nav-primary"><span class="icon">⌂</span><label>Home</label></button>
          <button data-go="scan" class="nav-primary"><span class="icon">▢</span><label>Scan</label></button>
          <button data-go="buddy" class="nav-primary"><span class="icon">☁</span><label>Buddy</label></button>
          <button data-go="quests" class="nav-primary"><span class="icon">✿</span><label>Quests</label></button>
          <button data-go="league" class="nav-primary"><span class="icon">♛</span><label>League</label></button>
          <button data-go="rewards" class="nav-primary"><span class="icon">□</span><label>Rewards</label></button>
          <button data-go="me" class="nav-primary"><span class="icon">◎</span><label>Me</label></button>
          <div class="nav-later" aria-label="更多">
            <span class="nav-later-label">更多</span>
            <button data-go="journey" class="nav-later-item"><span class="icon">✧</span><label>Journey</label></button>
            <button data-go="diary" class="nav-later-item"><span class="icon">▤</span><label>Diary</label></button>
            <button data-go="community" class="nav-later-item"><span class="icon">☷</span><label>Community</label></button>
          </div>
        </nav>
      </aside>

      <main class="main">
        <div class="topbar">
          <div class="page-title">
            <h2 id="pageHeading">Home</h2>
            <p id="pageSub">Every hair is a seed.</p>
          </div>
          <div class="actions">
            <button class="pill soft" id="guideBtn" data-action="share-to-community" type="button">✨ Share Journey</button>
            <button class="pill primary" id="loginBtn" type="button">Login / Sign up</button>
          </div>
        </div>

        ${homeSection}

        ${scanSection}

        ${buddySection}

        ${questsSection}

        ${journeySection}

        ${leagueSection}

        ${rewardsSection}

        ${diarySection}

        ${communitySection}

        ${meSection}
      </main>
    </div>
    </div>
    </div>`
