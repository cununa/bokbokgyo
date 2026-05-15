/* ==========================================================================
   복복교 (Bokbokgyo) — Interaction Script
   ========================================================================== */

// ---------- 글자 수 카운터 ----------
function updateCount(textarea) {
  const counter = document.getElementById('charCount');
  if (counter) counter.textContent = textarea.value.length;
}

// ---------- 복비(기부) 금액 선택 ----------
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    if (btn.dataset.amount === 'custom') {
      const v = prompt('금액을 입력해주세요 (원):', '');
      if (v && !isNaN(v) && Number(v) > 0) {
        btn.textContent = Number(v).toLocaleString() + '원';
        btn.dataset.customValue = v;
      } else {
        btn.textContent = '직접입력';
      }
    }
  });
});

// ---------- 걱정 보내기 제출 ----------
function handleWorrySubmit() {
  const txt = document.getElementById('worryText').value.trim();
  if (!txt) {
    alert('걱정을 적어주세요. 냥신님이 들어드릴게요. 🐾');
    return;
  }
  const active = document.querySelector('.donate-btn.is-active');
  const amt = active?.dataset.customValue || active?.dataset.amount || '1000';
  alert(`냥신님께 걱정을 전달했습니다.\n복비 ${Number(amt).toLocaleString()}원도 함께 보냈어요.\n복이 가득하시길! 🐾`);
  document.getElementById('worryText').value = '';
  updateCount(document.getElementById('worryText'));
}

// ---------- 사전 회원가입 ----------
const MEMBER_BASE_COUNT = 128;
const HERO_MEMBER_BASE_COUNT = 3;

function getMemberNumber() {
  return Number(localStorage.getItem('bokbokgyoMemberNumber') || MEMBER_BASE_COUNT);
}

function getHeroMemberNumber() {
  return Number(localStorage.getItem('bokbokgyoHeroMemberNumber') || HERO_MEMBER_BASE_COUNT);
}

function setMemberNumber(value) {
  localStorage.setItem('bokbokgyoMemberNumber', String(value));
  const el = document.getElementById('memberNumber');
  if (el) el.textContent = value.toLocaleString();
}

function setHeroMemberNumber(value) {
  localStorage.setItem('bokbokgyoHeroMemberNumber', String(value));
  const el = document.getElementById('heroMemberNumber');
  if (el) el.textContent = value.toLocaleString();
}

function handleSocialSignup(provider) {
  const next = getMemberNumber() + 1;
  const heroNext = getHeroMemberNumber() + 1;
  setMemberNumber(next);
  setHeroMemberNumber(heroNext);
  alert(`${provider} 회원가입은 곧 연결됩니다.\n사전회원 ${next.toLocaleString()}번째로 접수해둘게요.`);
}

function handleSignupSubmit() {
  const email = document.getElementById('signupEmail')?.value.trim();
  if (!email) {
    alert('이메일을 입력해주세요.');
    return;
  }

  const next = getMemberNumber() + 1;
  const heroNext = getHeroMemberNumber() + 1;
  setMemberNumber(next);
  setHeroMemberNumber(heroNext);
  document.getElementById('signupEmail').value = '';
  alert(`${email}\n${next.toLocaleString()}번째 사전회원으로 접수되었습니다.`);
}

// ---------- 상품 데이터 ----------
const products = [
  { id: 1, name: '복복교 부적키링', desc: '행운을 부르는 부적', price: 12000, category: 'keyring', badge: 'BEST', svg: 'keyring' },
  { id: 2, name: '교주 냥신 인형', desc: '교주님의 따뜻한 기운', price: 28000, category: 'character', badge: 'NEW', svg: 'priest' },
  { id: 3, name: '걱정인형 키링', desc: '걱정을 쏙~ 행복을 쏙!', price: 9000, category: 'keyring', badge: 'HOT', svg: 'doll' },
  { id: 4, name: '부적 문구 세트', desc: '공부운·금전운 UP!', price: 15000, category: 'stationery', badge: null, svg: 'stationery' },
  { id: 5, name: '복복교 굿즈 세트', desc: '복을 가득 담은 세트', price: 39000, category: 'set', badge: null, svg: 'giftset' },
  { id: 6, name: '복복교 부적키링', desc: '행운을 부르는 부적', price: 12000, category: 'keyring', badge: 'BEST', svg: 'keyring' },
  { id: 7, name: '교주 냥신 인형', desc: '교주님의 따뜻한 기운', price: 28000, category: 'character', badge: 'NEW', svg: 'priest' },
  { id: 8, name: '걱정인형 키링', desc: '걱정을 쏙~ 행복을 쏙!', price: 9000, category: 'keyring', badge: 'HOT', svg: 'doll' },
  { id: 9, name: '부적 문구 세트', desc: '공부운·금전운 UP!', price: 15000, category: 'stationery', badge: null, svg: 'stationery' },
  { id: 10, name: '복복교 굿즈 세트', desc: '복을 가득 담은 세트', price: 39000, category: 'set', badge: null, svg: 'giftset' },
];

// ---------- SVG 일러스트 (상품별) ----------
const productSVG = {
  keyring: `
    <svg viewBox="0 0 240 240" width="100%" height="100%">
      <rect width="240" height="240" fill="#F0E0C8"/>
      <g opacity="0.4" transform="translate(20 170) rotate(-20)">
        <line x1="0" y1="0" x2="40" y2="-60" stroke="#C9A878" stroke-width="2"/>
        <ellipse cx="35" cy="-50" rx="2.5" ry="5" fill="#D8B380" transform="rotate(20 35 -50)"/>
        <ellipse cx="30" cy="-40" rx="2.5" ry="5" fill="#D8B380" transform="rotate(20 30 -40)"/>
      </g>
      <circle cx="35" cy="140" r="9" fill="#F5C168" opacity="0.7"/>
      <circle cx="55" cy="160" r="7" fill="#F5C168" opacity="0.6"/>
      <circle cx="160" cy="50" r="11" fill="none" stroke="#A87938" stroke-width="2.5"/>
      <g transform="translate(95 65)">
        <rect x="0" y="0" width="65" height="98" rx="3" fill="#3D5A8C" stroke="#1F2D4A" stroke-width="2"/>
        <rect x="5" y="5" width="55" height="88" rx="2" fill="none" stroke="#E8C580" stroke-width="1.2"/>
        <text x="32" y="63" text-anchor="middle" font-family="serif" font-weight="900" font-size="46" fill="#E8C580">복</text>
        <line x1="32" y1="0" x2="48" y2="-22" stroke="#A87938" stroke-width="1.8"/>
      </g>
      <g transform="translate(160 76)">
        <path d="M 0 0 L -4 48 L 4 48 Z" fill="#D88B5A"/>
        <line x1="-2" y1="10" x2="-3" y2="45" stroke="#A87938" stroke-width="0.5"/>
        <line x1="2" y1="10" x2="3" y2="45" stroke="#A87938" stroke-width="0.5"/>
        <ellipse cx="0" cy="4" rx="5" ry="3" fill="#A87938"/>
      </g>
    </svg>`,
  priest: `
    <svg viewBox="0 0 240 240" width="100%" height="100%">
      <rect width="240" height="240" fill="#F0E0C8"/>
      <ellipse cx="120" cy="200" rx="65" ry="10" fill="#C9A878" opacity="0.5"/>
      <ellipse cx="120" cy="195" rx="55" ry="8" fill="#E8C580"/>
      <g transform="translate(120 145)">
        <!-- Body/robe -->
        <path d="M -35 0 Q -45 30 -42 45 L 42 45 Q 45 30 35 0 Q 20 -10 0 -10 Q -20 -10 -35 0 Z" fill="#F5E5C8" stroke="#B8945E" stroke-width="1.2"/>
        <circle cx="0" cy="22" r="6" fill="#E8C580" stroke="#A87938" stroke-width="1"/>
        <!-- Head -->
        <ellipse cx="0" cy="-15" rx="32" ry="30" fill="#FAD9B3" stroke="#D8975A" stroke-width="1.2"/>
        <!-- Ears -->
        <path d="M -20 -28 L -16 -45 L -5 -32 Z" fill="#FAD9B3" stroke="#D8975A" stroke-width="1.2"/>
        <path d="M 20 -28 L 16 -45 L 5 -32 Z" fill="#FAD9B3" stroke="#D8975A" stroke-width="1.2"/>
        <path d="M -17 -30 L -15 -40 L -9 -32 Z" fill="#F5B884"/>
        <path d="M 17 -30 L 15 -40 L 9 -32 Z" fill="#F5B884"/>
        <!-- Hat -->
        <ellipse cx="0" cy="-38" rx="20" ry="6" fill="#D8B380" stroke="#8B6635" stroke-width="1"/>
        <circle cx="0" cy="-46" r="3.5" fill="#F5C168" stroke="#8B6635" stroke-width="0.8"/>
        <!-- Orange patches -->
        <path d="M -22 -22 Q -25 -32 -16 -34 Q -12 -25 -18 -16 Z" fill="#E89B5A" opacity="0.7"/>
        <path d="M 22 -22 Q 25 -32 16 -34 Q 12 -25 18 -16 Z" fill="#E89B5A" opacity="0.7"/>
        <!-- Eyes -->
        <ellipse cx="-10" cy="-15" rx="4" ry="5" fill="#3A2418"/>
        <ellipse cx="10" cy="-15" rx="4" ry="5" fill="#3A2418"/>
        <circle cx="-9" cy="-17" r="1.5" fill="#FFF"/>
        <circle cx="11" cy="-17" r="1.5" fill="#FFF"/>
        <!-- Nose -->
        <path d="M -3 -5 L 3 -5 L 0 -1 Z" fill="#C77F4A"/>
        <path d="M 0 -1 Q -4 3 -7 1" stroke="#8B5E2E" stroke-width="1" fill="none" stroke-linecap="round"/>
        <path d="M 0 -1 Q 4 3 7 1" stroke="#8B5E2E" stroke-width="1" fill="none" stroke-linecap="round"/>
        <!-- Cheeks -->
        <circle cx="-18" cy="-6" r="3.5" fill="#F5B0A0" opacity="0.5"/>
        <circle cx="18" cy="-6" r="3.5" fill="#F5B0A0" opacity="0.5"/>
      </g>
      <circle cx="55" cy="210" r="4" fill="#D88B5A"/>
      <circle cx="70" cy="215" r="3" fill="#E8C580"/>
      <circle cx="170" cy="212" r="4" fill="#D88B5A"/>
    </svg>`,
  doll: `
    <svg viewBox="0 0 240 240" width="100%" height="100%">
      <rect width="240" height="240" fill="#F0E0C8"/>
      <circle cx="180" cy="40" r="10" fill="none" stroke="#A87938" stroke-width="2.5"/>
      <line x1="180" y1="50" x2="140" y2="90" stroke="#A87938" stroke-width="2"/>
      <g transform="translate(120 135)">
        <!-- Worry doll bear style -->
        <ellipse cx="0" cy="20" rx="35" ry="40" fill="#F5E5C8" stroke="#B8945E" stroke-width="1.2"/>
        <ellipse cx="0" cy="30" rx="20" ry="22" fill="#FAEDD0"/>
        <!-- Head -->
        <circle r="32" fill="#F5E5C8" stroke="#B8945E" stroke-width="1.2"/>
        <!-- Ears -->
        <circle cx="-22" cy="-22" r="9" fill="#F5E5C8" stroke="#B8945E" stroke-width="1.2"/>
        <circle cx="22" cy="-22" r="9" fill="#F5E5C8" stroke="#B8945E" stroke-width="1.2"/>
        <circle cx="-22" cy="-22" r="5" fill="#E8D0A8"/>
        <circle cx="22" cy="-22" r="5" fill="#E8D0A8"/>
        <!-- Eyes -->
        <circle cx="-9" cy="-3" r="2.8" fill="#3A2418"/>
        <circle cx="9" cy="-3" r="2.8" fill="#3A2418"/>
        <!-- Nose -->
        <ellipse cx="0" cy="7" rx="3" ry="2" fill="#C77F4A"/>
        <!-- Mouth -->
        <path d="M 0 10 Q -4 14 -7 12" stroke="#8B5E2E" stroke-width="1" fill="none" stroke-linecap="round"/>
        <path d="M 0 10 Q 4 14 7 12" stroke="#8B5E2E" stroke-width="1" fill="none" stroke-linecap="round"/>
        <!-- Bow tie -->
        <path d="M -8 25 L -15 22 L -15 32 L -8 30 Z" fill="#E89B5A"/>
        <path d="M 8 25 L 15 22 L 15 32 L 8 30 Z" fill="#E89B5A"/>
        <circle cx="0" cy="27" r="3" fill="#D88B5A"/>
      </g>
      <circle cx="55" cy="210" r="4" fill="#D88B5A"/>
      <circle cx="180" cy="210" r="4" fill="#E8C580"/>
    </svg>`,
  stationery: `
    <svg viewBox="0 0 240 240" width="100%" height="100%">
      <rect width="240" height="240" fill="#F0E0C8"/>
      <ellipse cx="120" cy="210" rx="70" ry="9" fill="#C9A878" opacity="0.4"/>
      <!-- Memo/notebook -->
      <g transform="translate(70 50)">
        <rect x="0" y="0" width="55" height="140" rx="3" fill="#FAEDD0" stroke="#A87938" stroke-width="1.8"/>
        <line x1="0" y1="14" x2="55" y2="14" stroke="#A87938" stroke-width="1.5"/>
        <!-- paw print -->
        <g transform="translate(27 75)">
          <ellipse cx="0" cy="6" rx="9" ry="7" fill="#D8B380"/>
          <ellipse cx="-9" cy="-4" rx="3" ry="4" fill="#D8B380"/>
          <ellipse cx="-3" cy="-9" rx="2.5" ry="3.5" fill="#D8B380"/>
          <ellipse cx="3" cy="-9" rx="2.5" ry="3.5" fill="#D8B380"/>
          <ellipse cx="9" cy="-4" rx="3" ry="4" fill="#D8B380"/>
        </g>
      </g>
      <!-- Pens -->
      <g transform="translate(140 50) rotate(8)">
        <rect x="0" y="0" width="10" height="135" rx="3" fill="#3D5A8C" stroke="#1F2D4A" stroke-width="1"/>
        <rect x="0" y="0" width="10" height="20" rx="3" fill="#E8C580"/>
        <polygon points="0,135 10,135 5,148" fill="#C9A878"/>
      </g>
      <g transform="translate(155 60) rotate(15)">
        <rect x="0" y="0" width="10" height="130" rx="3" fill="#D88B5A" stroke="#A87938" stroke-width="1"/>
        <rect x="0" y="0" width="10" height="20" rx="3" fill="#E8C580"/>
        <polygon points="0,130 10,130 5,143" fill="#C9A878"/>
      </g>
      <circle cx="180" cy="215" r="4" fill="#D88B5A"/>
      <circle cx="195" cy="220" r="3" fill="#E8C580"/>
    </svg>`,
  giftset: `
    <svg viewBox="0 0 240 240" width="100%" height="100%">
      <rect width="240" height="240" fill="#2E2A24"/>
      <!-- Gift box -->
      <g transform="translate(40 60)">
        <rect x="0" y="20" width="160" height="120" fill="#3A352D" stroke="#5C4F3D" stroke-width="1.5"/>
        <!-- Lid -->
        <rect x="-5" y="10" width="170" height="20" fill="#4A4138" stroke="#5C4F3D" stroke-width="1.5"/>
        <!-- Divider -->
        <line x1="80" y1="30" x2="80" y2="140" stroke="#5C4F3D" stroke-width="1.5"/>
        <!-- Left compartment - small priest -->
        <g transform="translate(40 90)">
          <ellipse cx="0" cy="15" rx="22" ry="20" fill="#FAD9B3" stroke="#D8975A" stroke-width="1"/>
          <circle r="18" fill="#FAD9B3" stroke="#D8975A" stroke-width="1"/>
          <path d="M -14 -14 L -10 -25 L -3 -16 Z" fill="#FAD9B3" stroke="#D8975A" stroke-width="1"/>
          <path d="M 14 -14 L 10 -25 L 3 -16 Z" fill="#FAD9B3" stroke="#D8975A" stroke-width="1"/>
          <ellipse cx="-6" cy="-5" rx="2.5" ry="3" fill="#3A2418"/>
          <ellipse cx="6" cy="-5" rx="2.5" ry="3" fill="#3A2418"/>
          <ellipse cx="0" cy="2" rx="1.5" ry="1" fill="#C77F4A"/>
        </g>
        <!-- Right compartment - small doll -->
        <g transform="translate(120 90)">
          <ellipse cx="0" cy="15" rx="20" ry="18" fill="#F5E5C8" stroke="#B8945E" stroke-width="1"/>
          <circle r="16" fill="#F5E5C8" stroke="#B8945E" stroke-width="1"/>
          <circle cx="-12" cy="-12" r="5" fill="#F5E5C8" stroke="#B8945E" stroke-width="1"/>
          <circle cx="12" cy="-12" r="5" fill="#F5E5C8" stroke="#B8945E" stroke-width="1"/>
          <circle cx="-5" cy="-4" r="2" fill="#3A2418"/>
          <circle cx="5" cy="-4" r="2" fill="#3A2418"/>
          <ellipse cx="0" cy="3" rx="2" ry="1.5" fill="#C77F4A"/>
        </g>
      </g>
      <circle cx="55" cy="220" r="4" fill="#D88B5A"/>
      <circle cx="180" cy="222" r="4" fill="#E8C580"/>
    </svg>`,
};

// ---------- 상품 렌더링 ----------
function renderProducts(filter = 'all') {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="product-card product-card--sm" data-cat="${p.category}">
      <div class="product-card__img">
        ${productSVG[p.svg] || ''}
        ${p.badge ? renderBadge(p.badge) : ''}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <p class="product-card__price">₩${p.price.toLocaleString()}</p>
      </div>
    </article>
  `).join('');
}

function renderBadge(type) {
  const map = {
    BEST: '<span class="product-badge product-badge--best">BEST</span>',
    NEW: '<span class="product-badge product-badge--new">NEW</span>',
    HOT: '<span class="product-badge product-badge--hot">인기</span>',
  };
  return map[type] || '';
}

// ---------- 필터 ----------
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderProducts(btn.dataset.filter);
  });
});

// ---------- 초기 렌더링 ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  setMemberNumber(getMemberNumber());
  setHeroMemberNumber(getHeroMemberNumber());
});
