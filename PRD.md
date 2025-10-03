下面是一份可直接交給 AI 網站產生器 / 設計工具使用的 完整 Markdown 規格文件（PRD + 內容稿 + 動效與設計系統）。
已根據你上載的履歷整合內容、並特別加入你要求的 高階前端設計、毛玻璃（macOS Tahoe / Liquid Glass）、高互動（精靈 / Sprite 效果）、大公司 Landing Page 級 Layout 等要求。

語言：繁中（香港）為主，內含中英雙語內容與 i18n 結構。
前端取向：Next.js（App Router）、Framer Motion / GSAP、Tailwind CSS + 自定義設計 Tokens、Canvas/WebGL（精靈粒子）、AEM/Headless CMS 兼容。


Patrick Ho — 個人專業網站（Portfolio）完整規格書
版本：v1.0
目的：建立一個具備企業級視覺／動效體驗的個人網站，用於展示 Full Stack / Front-End 能力、工作經歷、專案成果與個人品牌。
核心風格：Large Tech Landing Page、毛玻璃（Liquid Glass）、細膩動效、3D/粒子互動、可無障礙與高性能。

0) 專案摘要（Executive Summary）

品牌定位：沉穩專業 × 先進技術 × 優雅互動。
關鍵賣點：

高水準前端體驗：全站 60fps 動效、毛玻璃與立體光暈、平滑視差、微互動豐富。
企業級信息傳達：清晰的信息架構、商業價值導向（成果、貢獻、技術深度）。
雙語與 SEO：中英雙語、結構化資料（Schema.org）、Open Graph、站內搜尋。
工程品質：Lighthouse ≥ 90（Perf/SEO/Best Practices/Accessibility），WCAG 2.1 AA。


技術棧建議：bun + Next.js 15（App Router） + React 19、TypeScript、Tailwind CSS、Framer Motion/GSAP、Canvas/WebGL（Three.js 可選）、Vercel 部署（Vite）、Edge Functions / RSC。
內容來源：整合履歷（教育、經歷、專案、技術）。 [Resume Aug 2025]


1) 資訊架構（IA / Site Map）
/
  ├─ (lang)/              # i18n：en / zh-hk
  │   ├─ home
  │   ├─ about
  │   ├─ experience
  │   ├─ projects
  │   ├─ skills
  │   ├─ blog             # 可選
  │   ├─ labs             # 互動/動效示範（精靈粒子、玻璃動效）
  │   ├─ contact
  │   └─ resume           # PDF 下載
  ├─ api/
  │   ├─ contact/submit   # Server action / edge function (reCAPTCHA/Rate-limit)
  │   └─ newsletter/subscribe
  ├─ sitemap.xml
  ├─ robots.txt
  └─ 404 / 500

導覽列（全局）：Logo（玻璃徽章）、Work（Projects）、Experience、Skills、Labs、About、Blog（可選）、Contact、Theme（Light/Dark/Auto）、Lang（EN｜繁）。
Footer：社群連結、Email、版權、版本號、互動彩蛋（微光點）。

2) 頁面稿（Page-level Content & Layout）

文案風格：專業、簡潔、有數據／場景，可用強動詞＋成果導向。
標點與語氣：HK 繁中；英語段落提供等義版本。

2.1 首頁 Home
Hero（100vh、三層玻璃）

Headline（ZH）：打造可擴展、極致體驗的 Web 與行動應用
Headline（EN）：Building scalable web & mobile experiences with precision.
Subtext：

「Full Stack / Front-End Developer，專注 React/Next.js、AEM、行動應用與企業級網站。」
「我重視細節與性能，結合 Liquid Glass 質感與 精靈粒子互動，呈現大公司級別 Landing Page 體驗。」


CTA：View Projects（主）｜Download Resume（次）｜Contact（次）
背景層次：

Glass Surface：多層半透明卡片（backdrop-filter: blur(24–40px) saturate(1.35)）
Bokeh/Gleam：柔光微粒、光暈、玻璃高光邊線（1px 內外框）
Sprite Trail：滑鼠／指尖拖曳「精靈光點」（Canvas 粒子、避讓文字）



Clients/Impact（如需）：以柔光徽章展示品牌（可匿名 / 灰階）。
Featured Projects：3–4 張大卡（3D tilt + Glass hover + Lottie/Icon 動畫）。
Quick Bio / Stats（抽象數據，不誇張）：以你履歷要點簡述專長與領域。 [Resume Aug 2025]

2.2 關於我 About

短介（ZH）：
「你好，我係 Patrick Ho，一名注重體驗與工程品質的 Full Stack / Front-End Developer。擅長 React/Next.js、行動應用（React Native）、企業級 CMS（AEM）、API/DevOps 工作流程，喜歡把設計語言、動效語法與商業目標整合成優雅的產品。」
教育：

University of Greenwich（London）— Computing（Part-time, 2024–就讀中）：Android 與 SQL 相關課程；同時進行 AI 企業管理方案作為畢業項目。 [Resume Aug 2025]
HK IVE（Tuen Mun）— Higher Diploma in Software Engineering（2020）：主修 Java、JSP、行動、資料庫、OOP、資料結構與演算法；FYP 包含 GCP DevOps、Web（JSP/Java）與 Python 機械模型「SmartBook Machine」。 [Resume Aug 2025]


設計理念：

Glass as a Material（視覺深度、光感、層次化）
Motion as Meaning（以動效表達層級與狀態）
Performance First（速度 × 穩定 × 可維護）


證書/認證：（若有，預留欄位）


2.3 工作經歷 Experience

以 Timeline/Card 呈現；每項含：職稱、公司、期間、職責、技術棧、成果要點。


Front-End Developer — Omniwe（Sep 2024 – Jul 2025）

主要負責 Chow Tai Fook 零售 app（React Native iOS）維護與增強。 [Resume Aug 2025]
從 0 到 1 建立 Chow Tai Fook Group Website（Adobe AEM Sites），涵蓋需求、開發、上線與維運，並帶領知識轉移。 [Resume Aug 2025]


Web Developer — Datawords（Sep 2021 – Jul 2024）

針對客戶系統做 UI/功能現代化，與 PM/Sales/設計跨部門協作；模組化 React 元件、Docker + Jenkins 自動化測試/DevOps。 [Resume Aug 2025]
維護自家 O2O 系統、做 SEO 與用戶行為分析回報；與 COO 週會彙報進度與 side project。 [Resume Aug 2025]


Programmer — Kickscrew（Sep 2020 – Aug 2021）

改造內部系統（UI/功能）、新增持久化排序與 DB 版本更新以節省操作時間；多平台銷售與 3rd-party API（Twilio/eDM/WhatsApp）整合；AliCloud 自動部署與辦公自動化。 [Resume Aug 2025]




2.4 專案 Projects

每個專案：名稱、背景、職責、技術棧、亮點、連結/截圖。


E‑commerce Web Application（Next.js, React, MySQL, Laravel, TypeScript）

建置後台供非 IT 人員使用；SSR + SWR + Lazy Image 加速、即時更新；Docker 部署；相依套件相容性重構。 [Resume Aug 2025]
參考：valentino-beauty.hk、johnsonelectric.com（如有實鏈接再補）。 [Resume Aug 2025]


Mobile App（React Native, Expo, TypeScript, NativeWind）

多執行緒與背景下載加速媒體；引入 ESLint/Prettier；由 REST 轉 GraphQL；以 WebView 補原生缺功能；提供預覽連結。 [Resume Aug 2025]


Adobe AEM CMS（Java, React） — https://www.ctfjewellerygroup.com/en/

跨部門（20+ 相關人）需求轉技術解法；建置 Java OSGi 服務、註解式快取；Sling Model MVC 自定元件（含即時股價 API、動畫、3D、動態表格等）；Dispatcher 快取與負載、Vanity URL 提升 SEO。 [Resume Aug 2025]


Branch Data Exchange（MySQL, Express.js）

MVC API、帳號註冊登入（JWT）、PM2、JSON 分頁排序。 [Resume Aug 2025]


Top‑Mentioned Sneakers Crawler（Python）

爬蟲收集鞋款與價格/庫存；多執行緒、User-Agent/IP 池、Selenium；解析巢狀 JSON（~2000頁）入庫；提供動態視圖編修。 [Resume Aug 2025]




2.5 技能 Skills（矩陣 + 標籤）

Languages/Tech：Java、PHP、JavaScript、SQL、HTML、CSS（SCSS、Bootstrap、Tailwind）、TypeScript。 [Resume Aug 2025]
Frameworks：Next.js（React）、Node.js（Express）、React Native、AEM。 [Resume Aug 2025]
Cloud/DevOps：AWS、GCP、Docker、Ubuntu、Jenkins。 [Resume Aug 2025]
Tools/Design：Photoshop、Figma。 [Resume Aug 2025]


2.6 Blog（可選）

主題建議：AEM 最佳實踐、Liquid Glass/Glassmorphism 的可用性、Framer Motion + RSC 策略、GraphQL 從 REST 遷移實錄、前端可觀測性。
文章模板：封面（玻璃卡）、目錄、程式碼區（深淺主題自動切換）。


2.7 Labs（互動 / 精靈效果展示）

Sprite/Fairy Trail：Cursor 牽引粒子、速度衰減、碰撞避讓文字與按鈕；低配下自動降級。
Liquid Glass Playground：調整 Blur/Opacity/Specular/Edge 光暈；即時預覽 Token。
3D/Parallax：卡片 3D Tilt、視差滾動、磁吸微互動（button hover 有磁吸、光點追逐）。
Accessibility Demo：prefers-reduced-motion 節制模式與鍵盤可達性示範。


2.8 Contact

表單：Name / Email / Message（reCAPTCHA、Honeypot、Rate limit、Edge 驗證）。
直接聯絡：pathoworkmail@gmail.com（以 mailto:）、（電話顯示可選）+852 5301 1499。 [Resume Aug 2025]
成功送出：玻璃禮花特效（低調）、5 秒內回饋。


2.9 Resume（PDF）

提供最新 PDF（中/英），Glass viewer（內嵌 PDF 預覽 + 下載）。
更新頻率建議：季度／重要里程碑後。


3) 視覺 & 動效規範（Design System + Motion Spec）
3.1 設計語言（Glass Design Tokens）
TypeScript// design-tokens.tsexport const colors = {  bg: {    base: "#0B0E14",          // 深背景（夜空）    gradient1: "linear-gradient(180deg, #0B0E14 0%, #0E1422 100%)",  },  accent: {    cyan: "#5BE7E7",    violet: "#9B8CFF",    pink: "#FF7AC6",    amber: "#FFC466",  },  text: {    high: "rgba(255,255,255,0.92)",    mid:  "rgba(255,255,255,0.72)",    low:  "rgba(255,255,255,0.56)",  },  glass: {    fill: "rgba(255,255,255,0.10)",      // 底層乳白    strokeOuter: "rgba(255,255,255,0.28)",    strokeInner: "rgba(255,255,255,0.08)",    highlight: "rgba(255,255,255,0.65)", // 邊緣亮    shadow: "rgba(0,0,0,0.25)",  },};export const glass = {  elevation1: {    backdrop: "blur(18px) saturate(1.25)",    bg: "rgba(255,255,255,0.08)",    border: "1px solid rgba(255,255,255,0.20)",  },  elevation2: {    backdrop: "blur(24px) saturate(1.35)",    bg: "rgba(255,255,255,0.10)",    border: "1px solid rgba(255,255,255,0.28)",  },  elevation3: {    backdrop: "blur(36px) saturate(1.45)",    bg: "rgba(255,255,255,0.12)",    border: "1px solid rgba(255,255,255,0.35)",  },};顯示更多行
3.2 字體與排版

首選：SF Pro / Inter（Fallback：system-ui, -apple-system, Segoe UI, Roboto）。
標題：字重 700，行高 1.1；內文：字重 400–500，行高 1.6。
斷點：sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536。

3.3 動效基準（Motion Baseline）

時間曲線：cubic-bezier(0.22, 1, 0.36, 1)（入場），ease-out（hover）。
時長：微互動 120–220ms；版塊入場 400–700ms；視差/場景 1.2–1.8s。
滾動觸發：進入視窗 20% 即觸發；支援 prefers-reduced-motion。
效能：只改 transform/opacity；GPU 合成優先；Canvas/WebGL 降級路徑。

3.4 精靈粒子（Sprite / Fairy）

Renderer：Canvas 2D（WebGL 可選）。
行為：游離 → 指標靠近加速追逐 → 與文字/按鈕邊界避讓 → 拖尾（additive blend）。
資產：細微光點 + 輕量 Sprite Sheet（4–8 幀）。
可調參數：密度／壽命／重力／色帶（Cyan/Violet/Pink）、效能上限（60/90/120 粒）。
無障礙：鍵盤導航時自動靜音；reduced-motion 時轉為靜態星屑。


4) 工程規格（Engineering）
4.1 技術棧

Next.js（App Router, RSC）, React, TypeScript
Tailwind CSS + 自定 Token、Framer Motion / GSAP
Canvas/WebGL（精靈）、Lottie（圖標動畫）
表單：Server Actions + Edge 驗證（或簡易第三方備援）
CI/CD：Vercel（Preview → Production），ESLint/Prettier/Husky

4.2 目錄結構（建議）
src/
  app/(zh-hk)/[pages]...
  app/(en)/[pages]...
  components/
    ui/       # Button, Card(Glass), Badge, Tooltip...
    layout/   # Header(Glass), Footer, Section, Container
    motion/   # Reveal, Parallax, Tilt, Magnetic
    labs/     # SpriteCanvas, GlassPlayground
  styles/     # globals.css, tokens.css
  lib/        # analytics, seo, i18n, validations
  data/       # projects.(zh-hk|en).ts, experience...
  api/        # server routes (if not in app/api)
public/
  images/     # hero, projects, og
  lotties/

4.3 效能 & 品質門檻（Acceptance Criteria）

LCP ≤ 2.5s（4G 模擬）／ TTI ≤ 3.5s ／ CLS ≤ 0.05
Lighthouse（Mobile）四項 ≥ 90
交互：60fps（主流機），CPU 4x throttle 下仍順暢
A11y：WCAG 2.1 AA；鍵盤可達、對比度、ARIA 完整
資產：Hero < 250KB（含動效），圖片 next/image 最適化，SVG Icon Sprite
E2E：關鍵流程（瀏覽專案、送出表單）具 Cypress/Playwright 測試


5) SEO / 結構化資料 / OG
5.1 Meta & OG

Title：Patrick Ho — Full-Stack Developer & Front-End Specialist
Description（EN）：Full Stack / Front-End developer specializing in Next.js, React Native, and AEM — delivering enterprise-grade experiences with liquid glass aesthetics and high-performance animations.
OG：og:image 1200×630（玻璃卡、姓名、職稱、柔光粒子）
Twitter：summary_large_image

5.2 Schema.org（JSON‑LD 範例）
JSON{  "@context": "https://schema.org",  "@type": "Person",  "name": "Patrick Ho",  "jobTitle": "Full Stack / Front-End Developer",  "email": "mailto:pathoworkmail@gmail.com",  "telephone": "+85253011499",  "knowsAbout": ["Next.js","React","AEM","React Native","TypeScript","DevOps"],  "url": "https://your-domain.tld"}顯示更多行

6) 站內文案（Bilingual Content Draft）

所有履歷事實內容均已對應到下列段落；若需新增 KPI/數據，可另行補充。

6.1 Hero 摘要（ZH—EN）

ZH：全端 / 前端工程師，為品牌打造可擴展、極致體驗的網站與 App。
EN：Full‑stack / Front‑end engineer crafting scalable, premium web & mobile experiences.

6.2 關於我（更口語版）

我擅長把 設計語言 × 工程品質 × 商業需求 整合為兼具美感與效能的產品。近年深耕 Next.js、生態系最佳實踐、AEM 企業平台 與 行動應用（React Native）。 [Resume Aug 2025]

6.3 工作經歷（精簡版）

Omniwe — Front-End Developer（2024.09–2025.07）：主責 周大福 零售 App（iOS/React Native）與集團官網（AEM）端到端建置與維運。 [Resume Aug 2025]
Datawords — Web Developer（2021.09–2024.07）：推動客戶系統現代化、模組化 React、Docker/Jenkins、自家 O2O 系統、SEO 與行為分析。 [Resume Aug 2025]
Kickscrew — Programmer（2020.09–2021.08）：內部系統改造，3rd‑party API（Twilio/eDM/WhatsApp），阿里雲自動部署。 [Resume Aug 2025]

6.4 精選專案（摘要）

E‑commerce Web App（Next.js/React/MySQL/Laravel/TS）：SSR + SWR + Lazy、Docker、相依相容重構。 [Resume Aug 2025]
Mobile App（React Native/Expo/TS）：多執行緒背景下載、ESLint/Prettier、由 REST → GraphQL、WebView 擴充。 [Resume Aug 2025]
AEM CMS（Java/React）：OSGi 服務、Sling Model MVC、Dispatcher 快取與 Vanity URL。 [Resume Aug 2025]

6.5 技術（標籤雲）

Java／PHP／JavaScript／TypeScript／SQL／HTML／CSS（SCSS/Bootstrap/Tailwind）／Next.js／React／Node（Express）／React Native／AEM／AWS／GCP／Docker／Ubuntu／Photoshop／Figma。 [Resume Aug 2025]

6.6 教育

University of Greenwich（Computing, Part-time, 2024–）— Android, SQL；AI 企業管理 FYP。 [Resume Aug 2025]
HK IVE（Software Engineering, 2020）— Java/JSP、OOP、資料結構與演算法、GCP DevOps、SmartBook Machine FYP。 [Resume Aug 2025]


7) 元件庫（UI Components & States）

Header（Glass Sticky）：滾動 40px 後轉濃玻璃（elevation2 → 3），陰影+高光。
Hero Card：多層玻璃、內反射光、邊緣 1px 高光。
Buttons：Primary（玻璃＋發光邊）、Ghost（僅邊線）、Magnetic Hover。
Project Card：3D Tilt、玻璃疊層、懸浮時顯示技術籤與 CTA。
Timeline：點狀 + 線段發光；滑入 reveal。
Toast/Modal：玻璃覆蓋、背景霧化、Esc/外點關閉。
Code Block：深淺主題自適應，陰影柔和。
Badge/Tag：色帶（Cyan/Violet/Pink/Amber）。


8) 無障礙（A11y）

對比度：文字/背景符合 AA；玻璃底色下動態提升對比。
鍵盤：焦點環可見，Tab 順序合理，跳轉連結（Skip to content）。
動效：尊重 prefers-reduced-motion；粒子關閉、動效時長縮短。
ARIA：地標（header/main/nav/footer）、按鈕/切換有 aria-pressed 等。


9) i18n 文案結構（範例）
TypeScript// i18n/zh-hk.tsexport default {  nav: { home: "首頁", work: "作品", experience: "經歷", skills: "技能", labs: "Labs", blog: "部落格", contact: "聯絡" },  hero: { title: "打造可擴展、極致體驗的 Web 與 App", ctaPrimary: "查看作品", ctaSecondary: "下載履歷" },  footer: { rights: "© Patrick Ho. All rights reserved." }}顯示更多行

10) 範例區塊（可直接餵給 AI 產碼）
10.1 Hero（Glass + Motion）— 語意與行為描述
Section: Hero
Layout: Full-bleed, min-height 100vh, centered container
Background: Layered liquid glass panels with parallax bokeh
Content:
  H1 (bold): ZH & EN pair title
  Paragraph: value proposition (2 lines)
  Buttons: Primary (View Projects), Secondary (Download Resume)
Interactions:
  - On load: title fade+slide up; bokeh drift; glass panels stagger-in
  - On mouse move: subtle 3D parallax; sprite trail follows cursor
  - On scroll: hero elements ease-out, header turns denser glass
Performance:
  - GPU-accelerated transforms; images lazy; effect budget < 3ms/frame
A11y:
  - Focus ring visible; buttons reachable via keyboard

10.2 Project Card（3D Tilt）
Card:
  Base: glass.elevation2, 16px radius, 1px outer highlight
  Hover: tilt(±6deg), outline glow in accent color, reveal tech tags
  Tap (mobile): gentle scale(1.02), shadow bloom


11) 內容資料（結構化 JSON，可餵 CMS / 程式）
JSON{  "profile": {    "name": "Patrick Ho",    "title": "Full Stack / Front-End Developer",    "email": "pathoworkmail@gmail.com",    "phone": "+852 53011499",    "location": "Hong Kong"  },  "experience": [    {      "company": "Omniwe",      "title": "Front-End Developer",      "period": "Sep 2024 – Jul 2025",      "highlights": [        "iOS React Native app for retail brand (maintenance & enhancements)",        "Built Chow Tai Fook Group Website on Adobe AEM end-to-end incl. KT"      ]    },    {      "company": "Datawords",      "title": "Web Developer",      "period": "Sep 2021 – Jul 2024",      "highlights": [        "Modernized legacy apps (UI & features), modular React components",        "Docker/Jenkins CI, SEO tracking & behavior analytics, O2O system maintenance"      ]    },    {      "company": "Kickscrew",      "title": "Programmer",      "period": "Sep 2020 – Aug 2021",      "highlights": [        "Internal system revamp incl. persistent sorting & DB versioning",        "3rd-party APIs: Twilio/eDM/WhatsApp; AliCloud auto-deploy"      ]    }  ],  "projects": [    { "name": "E-commerce Web App", "stack": ["Next.js","React","MySQL","Laravel","TypeScript"], "notes": ["SSR+SWR+Lazy images","Dockerized FE","Dependency compatibility refactor"], "links": ["https://www.valentino-beauty.hk/","https://www.johnsonelectric.com/en"] },    { "name": "Mobile App", "stack": ["React Native","Expo","TypeScript","NativeWind"], "notes": ["Multithreaded/background downloads","ESLint/Prettier","REST→GraphQL","WebView custom features"], "links": ["https://pse.is/6dha8f"] },    { "name": "Adobe AEM CMS", "stack": ["Java","React","AEM"], "notes": ["OSGi services & annotation-based caching","Sling Model MVC components","Dispatcher caching & vanity URLs"], "links": ["https://www.ctfjewellerygroup.com/en/"] },    { "name": "Branch Data Exchange", "stack": ["MySQL","Express.js"], "notes": ["MVC REST APIs","JWT Auth","PM2","Pagination & sorting"] },    { "name": "Sneakers Crawler", "stack": ["Python"], "notes": ["Multithreading","User-Agent/IP pool","Chromedriver","Nested JSON parsing (~2000 pages)"] }  ],  "skills": {    "languages": ["Java","PHP","JavaScript","TypeScript","SQL","HTML","CSS(SCSS/Bootstrap/Tailwind)"],    "frameworks": ["Next.js(React)","Node.js(Express)","React Native","AEM"],    "cloudDevOps": ["AWS","GCP","Docker","Ubuntu","Jenkins"],    "designTools": ["Photoshop","Figma"]  },  "education": [    { "school": "University of Greenwich (London)", "program": "Computing (Part-time)", "year": "2024–(studying)", "notes": ["Android","SQL","AI enterprise management FYP"] },    { "school": "HK IVE (Tuen Mun)", "program": "Higher Diploma in Software Engineering", "year": "2020", "notes": ["Java/JSP","Mobile","DB","OOP","Data Structures/Algorithms","GCP DevOps","SmartBook Machine FYP"] }  ]}顯示更多行
（以上資料取自你提供的履歷） [Resume Aug 2025]

12) 圖像 / 視覺資產（AI 生成提示）

Hero 背景（EN Prompt）：
“Ultra-clean dark tech background featuring layered liquid glass panels, gentle bokeh lights, cyan-violet-pink accents, subtle refraction and edge highlights; depth-of-field; premium enterprise landing look; 16:9, high detail, no text.”
Project 封面（ZH Prompt）：
「深色科技風、毛玻璃卡片前景、柔光、彩色漸層光暈、乾淨 UI 元件預示、保持留白、可作為卡片背景」
圖標/Lottie：輕量 24×24/32×32，線性風格，玻璃外發光。


13) 驗收清單（UAT Checklist）

 首屏 LCP ≤ 2.5s（含精靈粒子在標準模式）
 prefers-reduced-motion 正常（粒子停用、滾動動效關閉）
 手機 Safari / Chrome、iPad、MacBook 測試良好
 導覽黏頂玻璃轉場順暢無抖動
 OG 圖在 FB/Twitter/LinkedIn 顯示正確
 表單送出 200、郵件通知/備援成功
 Lighthouse（Mobile）四項 ≥ 90
 中英切換，所有路由與文案對應完整


14) 未來迭代（Roadmap）

增加 Playground：AEM 組件可視化 Demo、GraphQL 最佳實踐樣板
Case Study 深化：問題 → 解法 → 架構圖 → 效益指標
Open Source：抽出 Glass UI Kit 與 Sprite 引擎為開源元件


15) 備註與隱私

電話展示可切換「半遮蔽」模式（如：+852 5301 ****）以防爬蟲。 [Resume Aug 2025]
可於 robots.txt 禁爬 /resume 或導出單獨分享連結。


附：英文版摘要（可切換到 EN 站用）
Patrick Ho — Full Stack / Front-End Developer
I craft enterprise-grade web & mobile experiences with Next.js, React Native, and AEM.
Focus: liquid glass aesthetics, high-fidelity interactions (sprite/particle), and 60fps performance.