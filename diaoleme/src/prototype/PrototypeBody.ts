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

export const prototypeBody = `<div class="app design-canvas final-pages-integrated">
      <aside class="sidebar">
        <div class="brand">
          <img class="shared-brand-lockup" src="./assets/shared-brand/brand-lockup-tile.png" alt="掉了么 Diaoleme">
          <div class="mini-buddy"></div>
          <div>
            <h1>掉了么</h1>
            <span>Diaoleme</span>
          </div>
        </div>
        <nav class="nav" id="nav">
          <button data-go="home" class="active nav-primary"><span class="icon">⌂</span><label>Home</label></button>
          <button data-go="scan" class="nav-primary"><span class="icon">▢</span><label>Scan</label></button>
          <button data-go="journey" class="nav-primary"><span class="icon">✧</span><label>Journey</label></button>
          <button data-go="buddy"><span class="icon">☁</span><label>Buddy</label></button>
          <button data-go="quests"><span class="icon">✿</span><label>Quests</label></button>
          <button data-go="league"><span class="icon">♛</span><label>League</label></button>
          <button data-go="rewards"><span class="icon">□</span><label>Rewards</label></button>
          <button data-go="diary"><span class="icon">▤</span><label>Diary</label></button>
          <div class="nav-later" aria-label="后续">
            <span class="nav-later-label">后续</span>
            <button data-go="community" class="nav-later-item"><span class="icon">☷</span><label>Community</label></button>
          </div>
        </nav>
        <div class="profile">
          <img class="shared-profile-avatar" alt="" src="./assets/shared-brand/brand-avatar-tile.png">
          <label>Me<br><small>Lv.5</small></label>
        </div>
      </aside>

      <main class="main">
        <div class="topbar">
          <div class="page-title">
            <h2 id="pageHeading">Home</h2>
            <p id="pageSub">Every hair is a seed.</p>
          </div>
          <div class="actions">
            <button class="pill" id="guideBtn" data-action="share-to-community">分享到 Community</button>
            <button class="bell" aria-label="Notifications">🔔</button>
            <button class="avatar" aria-label="Profile">🌱</button>
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
    </div>`
