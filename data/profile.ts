export const profile = {
  name: "Patrick Ho",
  title: "Full Stack / Front-End Developer",
  email: "pathoworkmail@gmail.com",
  phone: "+852 5301 1499",
  location: "Hong Kong"
};

export const experience = [
  {
    company: "Omniwe",
    title: "Front-End Developer",
    period: "Sep 2024 – Jul 2025",
    highlights: [
      "主要負責 Chow Tai Fook 零售 app（React Native iOS）維護與增強。",
      "從 0 到 1 建立 Chow Tai Fook Group Website（Adobe AEM Sites），涵蓋需求、開發、上線與維運，並帶領知識轉移。"
    ],
    tech: ["React Native", "iOS", "Adobe AEM", "Java", "React"]
  },
  {
    company: "Datawords",
    title: "Web Developer",
    period: "Sep 2021 – Jul 2024",
    highlights: [
      "針對客戶系統做 UI/功能現代化，與 PM/Sales/設計跨部門協作；模組化 React 元件、Docker + Jenkins 自動化測試/DevOps。",
      "維護自家 O2O 系統、做 SEO 與用戶行為分析回報；與 COO 週會彙報進度與 side project。"
    ],
    tech: ["React", "Docker", "Jenkins", "SEO", "DevOps"]
  },
  {
    company: "Kickscrew",
    title: "Programmer",
    period: "Sep 2020 – Aug 2021",
    highlights: [
      "改造內部系統（UI/功能）、新增持久化排序與 DB 版本更新以節省操作時間；多平台銷售與 3rd-party API（Twilio/eDM/WhatsApp）整合；AliCloud 自動部署與辦公自動化。"
    ],
    tech: ["PHP", "MySQL", "AliCloud", "Twilio", "API Integration"]
  }
];

export const projects = [
  {
    name: "企業級電商平台",
    stack: ["Next.js", "React", "MySQL", "Laravel", "TypeScript"],
    notes: [
      "SSR/SWR 提升載入速度、實時數據同步",
      "後台系統支援非技術人員操作、Docker 容器化部署"
    ],
    links: ["https://www.valentino-beauty.hk/", "https://www.johnsonelectric.com/en"],
    icon: "🛍️"
  },
  {
    name: "POS 銷售系統",
    stack: ["React", "Node.js", "MySQL"],
    notes: [
      "即時庫存同步、多付款方式整合",
      "銷售報表自動化、會員積分管理"
    ],
    links: [],
    icon: "💳"
  },
  {
    name: "ERP 整合方案 (含 SKU 管理)",
    stack: ["Express.js", "MySQL", "JWT", "PHP"],
    notes: [
      "商品庫存即時追蹤、多倉庫 SKU 管理",
      "跨分店數據同步、權限管理、API 整合第三方服務（物流/金流）"
    ],
    links: [],
    icon: "🔗"
  },
  {
    name: "CRM 客戶關係系統",
    stack: ["React", "Node.js", "PostgreSQL"],
    notes: [
      "客戶分層管理、行為追蹤分析",
      "自動化營銷工具、數據可視化報表"
    ],
    links: [],
    icon: "👥"
  },
  {
    name: "企業級 CMS 平台",
    stack: ["Java", "React", "AEM"],
    notes: [
      "多語言內容管理、SEO 優化",
      "組件化架構、即時數據整合 (股價/3D/動畫)"
    ],
    links: ["https://www.ctfjewellerygroup.com/en/"],
    icon: "📝"
  },
  {
    name: "零售移動應用",
    stack: ["React Native", "TypeScript", "GraphQL"],
    notes: [
      "離線模式、推送通知系統",
      "多執行緒優化、背景數據同步"
    ],
    links: ["https://pse.is/6dha8f"],
    icon: "📱"
  }
];

export const skills = {
  languages: ["Java", "PHP", "JavaScript", "TypeScript", "SQL", "HTML", "CSS (SCSS/Bootstrap/Tailwind)"],
  frameworks: ["Next.js (React)", "Node.js (Express)", "React Native", "AEM"],
  cloudDevOps: ["AWS", "GCP", "Docker", "Ubuntu", "Jenkins"],
  designTools: ["Photoshop", "Figma"]
};

export const education = [
  {
    school: "University of Greenwich (London)",
    program: "Computing (Part-time)",
    year: "2024–(studying)",
    notes: ["Android", "SQL", "AI enterprise management FYP"]
  },
  {
    school: "HK IVE (Tuen Mun)",
    program: "Higher Diploma in Software Engineering",
    year: "2020",
    notes: ["Java/JSP", "Mobile", "DB", "OOP", "Data Structures/Algorithms", "GCP DevOps", "SmartBook Machine FYP"]
  }
];
