# 복복교 (Bokbokgyo) 🐾

> 걱정을 내려놓고, 복을 맞이하세요.
> 복복교의 교주 냥신님이 당신의 걱정을 들어드리고, 복과 평안을 가득 채워드립니다.

고양이 캐릭터(교주 냥신님)를 중심으로 한 따뜻한 위로 + 굿즈 + 기부 플랫폼의 랜딩페이지입니다.

---

## 📁 파일 구조

```
bokbokgyo/
├── index.html      # 메인 페이지 (시맨틱 HTML + 인라인 SVG 일러스트)
├── styles.css      # 디자인 시스템 + 컴포넌트 스타일
├── script.js       # 인터랙션 + 상품 그리드 렌더링
└── README.md
```

단일 의존성 없는 정적 사이트입니다. `index.html`을 브라우저로 열기만 하면 작동합니다.

---

## 🎨 디자인 시스템

### 컬러 팔레트
| 변수 | 값 | 용도 |
|------|------|------|
| `--bg-main` | `#FAF5ED` | 메인 배경 (웜 크림) |
| `--bg-section` | `#F2EBDD` | 섹션 배경 |
| `--color-primary` | `#F0A371` | 메인 액센트 (피치 오렌지) |
| `--color-accent-gold` | `#C9A878` | 전통 골드 |
| `--text-strong` | `#2E1F12` | 강조 텍스트 |
| `--footer-bg` | `#1F1A15` | 푸터 배경 |

### 타이포그래피
- **Display** (거대한 "복복교" 배경 글자): `Black Han Sans`
- **Heading** (섹션 타이틀, 버튼): `Gowun Dodum`
- **Body** (본문): `Pretendard`

---

## 🖼️ 이미지 교체 가이드

현재 모든 이미지는 **인라인 SVG**로 구현되어 외부 파일 의존이 없습니다.
Midjourney 등으로 생성한 실제 이미지로 교체하려면:

### 1) 교주 냥신님 (히어로 캐릭터)
`index.html`에서 `<svg class="cat-priest" ...>` 블록을 찾아 다음과 같이 교체:

```html
<img src="./assets/cat-priest.png" alt="교주 냥신님" class="cat-priest" />
```

### 2) 굿즈 이미지
`script.js`의 `productSVG` 객체에서 각 SVG를 `<img>` 태그로 변경:

```js
const productSVG = {
  keyring: `<img src="./assets/keyring.png" alt="부적키링" />`,
  priest:  `<img src="./assets/priest.png" alt="교주 냥신 인형" />`,
  // ...
};
```

그리고 CSS에 추가:
```css
.product-card__img img { width: 100%; height: 100%; object-fit: cover; }
```

---

## 🛠️ 사용된 기술

- 순수 HTML / CSS / JavaScript (프레임워크 없음)
- Google Fonts (Black Han Sans, Gowun Dodum)
- Pretendard 웹폰트 (CDN)
- 인라인 SVG 일러스트

---

## ⚡ Git 레포에 올리기

```bash
git init
git add .
git commit -m "feat: 복복교 랜딩페이지 초기 구현"
git branch -M main
git remote add origin <YOUR_GIT_URL>
git push -u origin main
```

### GitHub Pages 배포
1. 레포 Settings → Pages
2. Source: `Deploy from branch` → `main` → `/ (root)`
3. Save → 1~2분 후 `https://{username}.github.io/{repo}/` 접속

---

## 🐾 다음 단계 권장 작업

- [ ] Midjourney 이미지로 SVG 일러스트 교체
- [ ] 결제 시스템 연동 (토스페이먼츠 / 카카오페이 / 네이버페이)
- [ ] AI 상담소 페이지 (Anthropic API 연동 가능)
- [ ] 굿즈 상세 페이지
- [ ] 사용자 계정 / 장바구니 시스템

---

© 2026 BOKBOKGYO. All rights reserved.
