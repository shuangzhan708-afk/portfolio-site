const BASE_URL = 'https://portfolio-site-fawn-eight-52.vercel.app';
const ROUTES = {
  "/design/broad-reach": {
    "title": "Broad Reach | Shuang",
    "desc": "A system-driven branding project exploring how visual identity can scale across campaigns, digital platforms, and communication touchpoints with clarity an",
    "image": "images/home/featured/br-design-mockup-cover.png",
    "type": "design"
  },
  "/design/kinton-ramen": {
    "title": "Kinton Ramen | Shuang",
    "desc": "Kinton Ramen is a campaign and visual communication project for an established restaurant brand within a multi-brand group.",
    "image": "images/home/featured/kinton-ramen-cover.png",
    "type": "design"
  },
  "/design/reach-eshop": {
    "title": "Reach E-Shop | Shuang",
    "desc": "A brand refresh project focused on upgrading an existing e-commerce identity into a more dynamic and visually engaging system for digital and social platfo",
    "image": "images/home/featured/reach-web-gif-cover.gif",
    "type": "design"
  },
  "/design/shingyu": {
    "title": "ShinGyu | Shuang",
    "desc": "A full-scope restaurant branding project focused on developing and applying a cohesive visual system across digital and physical touchpoints, from concept ",
    "image": "images/home/featured/shingyu-mockup-cover.png",
    "type": "design"
  },
  "/design/two-cats": {
    "title": "Two Cats Cannabis Co. | Shuang",
    "desc": "A logo design project for a cannabis retail brand focused on creating a distinctive identity through research-driven visual exploration and concept develop",
    "image": "images/home/featured/two-cats-cover.png",
    "type": "design"
  },
  "/design/vegas-infinite": {
    "title": "Vegas Infinite | Shuang",
    "desc": "A visual system rollout project following a full rebrand, focused on translating an externally developed system into scalable in-house applications across ",
    "image": "images/design/vegas-infinite/banner/Vegas Infinite Cover.png",
    "type": "design"
  },
  "/design/lucky-penny": {
    "title": "Lucky Penny Real Estate | Shuang",
    "desc": "A brand application project focused on implementing a visual identity across real estate marketing materials, signage, and communication templates.",
    "image": "images/home/featured/lucky-penny-cover.png",
    "type": "design"
  },
  "/design/thallo": {
    "title": "Thallo | Shuang",
    "desc": "A full brand and packaging design project for a skincare brand inspired by the Greek goddess of spring, focusing on natural elegance and structured packagi",
    "image": "images/home/featured/thallo-cover.png",
    "type": "design"
  },
  "/design/marguerite-de-jardin": {
    "title": "Marguerite De Jardin | Shuang",
    "desc": "A branding project for a French fine dining restaurant inspired by southern France. Built around themes of art, nature, and culture, the identity combines ",
    "image": "images/design/marguerite-de-jardin/banner/paper-mockup-scene.jpg",
    "type": "design"
  },
  "/design/captains-boil": {
    "title": "The Captain's Boil | Shuang",
    "desc": "A promotional design project for a restaurant brand focused on creating seasonal campaign visuals and social media content within an existing brand system.",
    "image": "images/design/the-captains-boil/brand/tcb-project-cover.png",
    "type": "design"
  },
  "/design/website-design-collection": {
    "title": "Website Design Collection | Shuang",
    "desc": "A curated showcase of multiple website design projects, demonstrating a range of digital experiences across different industries and visual styles.",
    "image": "images/home/featured/web-portfolio-slideshow.gif",
    "type": "design"
  },
  "/design/packaging-design-collection": {
    "title": "Bianka Cabinetry | Shuang",
    "desc": "A curated showcase of packaging design projects.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "design"
  },
  "/design/printing-production-collection": {
    "title": "Broad Reach | Shuang",
    "desc": "A curated showcase of printing and production work, highlighting craftsmanship across physical materials, finishes, and production techniques.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "design"
  },
  "/illustration/mercatus-technologies": {
    "title": "Mercatus Technologies | Shuang",
    "desc": "A custom website illustration project focused on building a cohesive visual language for digital communication across a B2B technology platform.",
    "image": "images/illustration/mercatus-technologies/banner/mct-cover.png",
    "type": "illustration"
  },
  "/illustration/pokerstars-vr": {
    "title": "PokerStars VR | Shuang",
    "desc": "A custom logo and illustration project created for PokerStars VR, featuring themed visual identities designed for monthly in-game content releases.",
    "image": "images/home/featured/pokerstars-vr-gif-cover.gif",
    "type": "illustration"
  },
  "/illustration/nanxiang-express": {
    "title": "Nanxiang Express | Shuang",
    "desc": "A mascot illustration project for a Chinese restaurant brand, creating a character-driven visual identity across packaging and brand touchpoints.",
    "image": "images/illustration/nanxiang-express/banner/nanxiang-express-mascot-cover.png",
    "type": "illustration"
  },
  "/illustration/real-fruit": {
    "title": "Real Fruit Bubble Tea | Shuang",
    "desc": "A series of custom environmental illustrations developed for Real Fruit Bubble Tea across two themed retail locations.",
    "image": "images/illustration/real-fruit-bubble-tea/mockup/real-fruit-cover.webp",
    "type": "illustration"
  },
  "/illustration/overview-of-types": {
    "title": "Overview Of The Types Of Printing | Shuang",
    "desc": "An editorial illustration project exploring different printing techniques through visual storytelling.",
    "image": "images/illustration/overview-types-print/banner/overview-types-print-thumb.gif",
    "type": "illustration"
  },
  "/illustration/ot": {
    "title": "O.T. | Shuang",
    "desc": "An illustration of the quiet exhaustion of office life — a dog in business casual, just trying to get through the day.",
    "image": "images/illustration/O.T/OT-illustration.webp",
    "type": "illustration"
  },
  "/illustration/baitme": {
    "title": "Baitme | Shuang",
    "desc": "An illustration-led awareness campaign using narrative storytelling and digital animation to communicate online privacy risks.",
    "image": "images/illustration/baitme/banner/baitme-cover.webp",
    "type": "illustration"
  },
  "/illustration/66-day-gifs": {
    "title": "66 Day Gifs | Shuang",
    "desc": "A self-initiated 66-day animation challenge featuring short hand-drawn GIFs centered around cute animal characters and word-based visual concepts.",
    "image": "images/illustration/66-days-gifs/banner/66-day-gifs-cover.gif",
    "type": "illustration"
  },
  "/illustration/poker-card-back-design": {
    "title": "Poker Card Back Design | Shuang",
    "desc": "A collection of custom poker card back designs created for PokerStars VR.",
    "image": "images/illustration/poker-cardback-design/banner/cardback-01.webp",
    "type": "illustration"
  },
  "/illustration/happy-new-year": {
    "title": "Happy New Year! | Shuang",
    "desc": "A personal illustration celebrating the new year with a city at midnight.",
    "image": "images/illustration/happy-new-year/happy-new-year-illust.webp",
    "type": "illustration"
  },
  "/illustration/vr-thematic-wall": {
    "title": "VR Game: Thematic Wall | Shuang",
    "desc": "A collection of thematic wall illustrations created for PokerStars VR to support immersive in-game environments.",
    "image": "images/illustration/vr-game-thematic-wall-designs/banner/thematic-wall-01.webp",
    "type": "illustration"
  },
  "/": {
    "title": "Shuang | Visual Designer & Illustrator",
    "desc": "A Toronto-based visual design and illustration practice specialising in branding design, visual identity systems, packaging design, UI/UX design, and commercial illustration.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "website"
  },
  "/design": {
    "title": "Visual & Graphic Design | Shuang",
    "desc": "Visual and graphic design work spanning brand identity, visual identity, packaging design, UI/UX, and campaign design.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "website"
  },
  "/illustration": {
    "title": "Illustration | Shuang",
    "desc": "Commercial illustration work spanning environmental graphics, character design, game visual identity, and editorial illustration.",
    "image": "images/illustration/mercatus-technologies/banner/mct-cover.png",
    "type": "website"
  },
  "/about": {
    "title": "About | Shuang",
    "desc": "Shuang is a multidisciplinary visual designer and illustrator based in Toronto, with a practice spanning branding design, visual identity, packaging design, UI/UX, and commercial illustration.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "website"
  },
  "/contact": {
    "title": "Contact | Shuang",
    "desc": "Connect with Shuang for branding design, visual identity, graphic design, packaging, illustration, and UI/UX projects.",
    "image": "images/home/featured/brand-identity-cover.png",
    "type": "website"
  }
};

const BOT_RE = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|telegrambot|googlebot|bingbot|yandexbot|applebot|duckduckbot/i;

function buildHTML(meta, url) {
  const img = meta.image.startsWith('http') ? meta.image : BASE_URL + '/' + meta.image;
  const desc = meta.desc.replace(/"/g, '&quot;');
  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8">
<title>${meta.title}</title>
<meta name="description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Shuang Portfolio">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${img}">
</head><body><h1>${meta.title}</h1><p>${meta.desc}</p></body></html>`;
}

module.exports = async function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const pathname = req.url.split('?')[0];

  let meta = ROUTES[pathname];
  if (!meta) {
    const dm = pathname.match(/^\/design\/([\w-]+)/);
    const im = pathname.match(/^\/illustration\/([\w-]+)/);
    if (dm) meta = ROUTES['/design/' + dm[1]];
    if (im) meta = ROUTES['/illustration/' + im[1]];
  }
  if (!meta) meta = ROUTES['/'];

  if (BOT_RE.test(ua)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Robots-Tag', 'index, follow');
    res.status(200).send(buildHTML(meta, BASE_URL + pathname));
  } else {
    const fs = require('fs');
    const path = require('path');
    const indexPath = path.join(process.cwd(), 'index.html');
    const html = fs.readFileSync(indexPath, 'utf8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  }
};
