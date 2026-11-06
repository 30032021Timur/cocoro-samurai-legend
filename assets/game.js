(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = [
    {
      id: 1,
      name: `Sakura Village`,
      levels: [
        `Sakura Village`,
        `East Road`,
        `Night Market`,
        `Bell Shrine`,
        `Warden Gate`,
      ],
    },
    {
      id: 2,
      name: `Bamboo Forest`,
      levels: [
        `Green Gate`,
        `Stalk Maze`,
        `Panda Bridge`,
        `Whisper Grove`,
        `Bamboo Tyrant`,
      ],
    },
    {
      id: 3,
      name: `Shadow Temple`,
      levels: [
        `Lantern Steps`,
        `Ink Hall`,
        `Bell Crypt`,
        `Mask Gallery`,
        `Shadow Abbot`,
      ],
    },
    {
      id: 4,
      name: `Fire Mountains`,
      levels: [
        `Cinder Path`,
        `Ash Bridge`,
        `Magma Stairs`,
        `Forge Yard`,
        `Flame General`,
      ],
    },
    {
      id: 5,
      name: `Frozen Kingdom`,
      levels: [
        `Snow Gate`,
        `Ice Canal`,
        `Frost Shrine`,
        `Blizzard Keep`,
        `Winter Lord`,
      ],
    },
    {
      id: 6,
      name: `Neon Tokyo`,
      levels: [
        `Rain Alley`,
        `Arcade Roof`,
        `Bullet Train`,
        `Hologram Park`,
        `Neon Daimyo`,
      ],
    },
    {
      id: 7,
      name: `Dragon Valley`,
      levels: [
        `Scale Ridge`,
        `Wind Nest`,
        `Bone Bridge`,
        `Ember Cave`,
        `Valley Drake`,
      ],
    },
    {
      id: 8,
      name: `Demon Fortress`,
      levels: [
        `Iron Gate`,
        `Spike Court`,
        `Chain Bridge`,
        `War Drum`,
        `Fortress Captain`,
      ],
    },
    {
      id: 9,
      name: `Dark Dimension`,
      levels: [
        `Void Pier`,
        `Mirror Stair`,
        `Starless Field`,
        `Eclipse Shrine`,
        `Dimension Fang`,
      ],
    },
    {
      id: 10,
      name: `OTD Empire`,
      levels: [
        `Gold March`,
        `Banner City`,
        `Throne Bridge`,
        `Empire Keep`,
        `Lord OTD`,
      ],
    },
  ],
  t = [
    { id: `hp`, name: `Health`, desc: `+12 max HP`, max: 5, cost: 30 },
    {
      id: `atk`,
      name: `Attack`,
      desc: `+8% katana and strike damage`,
      max: 5,
      cost: 40,
    },
    { id: `spd`, name: `Speed`, desc: `+6% run speed`, max: 5, cost: 35 },
    {
      id: `def`,
      name: `Defense`,
      desc: `+6% damage reduction`,
      max: 5,
      cost: 35,
    },
    { id: `ki`, name: `Ki`, desc: `+10 max ki`, max: 5, cost: 30 },
  ],
  n = [
    { id: `first_blood`, name: `First Blood`, desc: `Defeat an OTD demon.` },
    { id: `combo5`, name: `Combo Adept`, desc: `Land a 5-hit combo.` },
    { id: `combo10`, name: `Combo Master`, desc: `Land a 10-hit combo.` },
    { id: `combo20`, name: `Ultra Hands`, desc: `Land a 20-hit combo.` },
    { id: `perfect`, name: `Perfect Guard`, desc: `Perfect-block an attack.` },
    { id: `thunder`, name: `Thunder Called`, desc: `Use Thunder Strike.` },
    { id: `boss`, name: `Warden Staggered`, desc: `Bring Kiba to FINISH HIM.` },
    { id: `fatality`, name: `Blue Flame`, desc: `Perform Kiba’s Fatality.` },
    {
      id: `clear`,
      name: `Village Dawn`,
      desc: `Clear Level 1 — Sakura Village.`,
    },
    { id: `east_road`, name: `East Road`, desc: `Clear Level 2 — East Road.` },
    {
      id: `night_market`,
      name: `Night Market`,
      desc: `Clear Level 3 — Night Market.`,
    },
    {
      id: `bell_shrine`,
      name: `Bell Shrine`,
      desc: `Clear Level 4 — Bell Shrine.`,
    },
    {
      id: `goro`,
      name: `General Down`,
      desc: `Perform Goro’s Thunder Fatality.`,
    },
    {
      id: `sakura_world`,
      name: `Sakura Complete`,
      desc: `Clear all five Sakura Village levels.`,
    },
    {
      id: `untouched`,
      name: `Untouched`,
      desc: `Clear a Sakura level without taking a real hit.`,
    },
    { id: `green_gate`, name: `Green Gate`, desc: `Clear Level 6 — Green Gate.` },
    { id: `stalk_maze`, name: `Stalk Maze`, desc: `Clear Level 7 — Stalk Maze.` },
    {
      id: `panda_bridge`,
      name: `Panda Bridge`,
      desc: `Clear Level 8 — Panda Bridge.`,
    },
    {
      id: `whisper_grove`,
      name: `Whisper Grove`,
      desc: `Clear Level 9 — Whisper Grove.`,
    },
    {
      id: `bamboo_tyrant`,
      name: `Tyrant Fallen`,
      desc: `Perform Take’s Thunder Fatality.`,
    },
    {
      id: `bamboo_world`,
      name: `Bamboo Dawn`,
      desc: `Clear all five Bamboo Forest levels.`,
    },
    {
      id: `lantern_steps`,
      name: `Lantern Steps`,
      desc: `Clear Level 11 — Lantern Steps.`,
    },
    { id: `ink_hall`, name: `Ink Hall`, desc: `Clear Level 12 — Ink Hall.` },
    { id: `bell_crypt`, name: `Bell Crypt`, desc: `Clear Level 13 — Bell Crypt.` },
    {
      id: `mask_gallery`,
      name: `Mask Gallery`,
      desc: `Clear Level 14 — Mask Gallery.`,
    },
    {
      id: `shadow_abbot`,
      name: `Abbot Broken`,
      desc: `Perform Kage’s Fatality.`,
    },
    {
      id: `shadow_world`,
      name: `Temple Quiet`,
      desc: `Clear all five Shadow Temple levels.`,
    },
  ],
  r = {
    kiba: {
      id: `kiba`,
      name: `KIBA`,
      title: `OTD WARDEN`,
      say: `Kiba. O.T.D. Warden.`,
      hp: 540,
      speed: 78,
      dmg: 16,
      reach: 188,
      scale: 1.36,
      fatality: `blue`,
    },
    goro: {
      id: `goro`,
      name: `GORO`,
      title: `OTD GENERAL`,
      say: `Goro. O.T.D. General.`,
      hp: 760,
      speed: 96,
      dmg: 18,
      reach: 210,
      scale: 1.5,
      fatality: `thunder`,
    },
    take: {
      id: `take`,
      name: `TAKE`,
      title: `OTD TYRANT`,
      say: `Take. O.T.D. Tyrant.`,
      hp: 860,
      speed: 100,
      dmg: 20,
      reach: 200,
      scale: 1.48,
      fatality: `thunder`,
    },
    kage: {
      id: `kage`,
      name: `KAGE`,
      title: `OTD ABBOT`,
      say: `Kage. O.T.D. Abbot.`,
      hp: 980,
      speed: 104,
      dmg: 22,
      reach: 204,
      scale: 1.52,
      fatality: `blue`,
    },
  },
  i = [
    {
      id: 1,
      name: `Sakura Village`,
      achievement: `clear`,
      clearBonus: 30,
      crystal: !0,
      rooms: [
        {
          name: `Village Gate`,
          theme: `gate`,
          foes: [`grunt`, `grunt`, `grunt`],
          crates: 2,
        },
        {
          name: `Blossom Bridge`,
          theme: `bridge`,
          foes: [`ninja`, `grunt`, `ninja`],
          crates: 1,
          platforms: !0,
        },
        {
          name: `Shrine Path`,
          theme: `shrine`,
          foes: [`katana`, `ninja`, `katana`],
          crates: 1,
          heal: !0,
          platforms: !0,
        },
        { name: `Warden Court`, theme: `boss`, boss: `kiba` },
      ],
    },
    {
      id: 2,
      name: `East Road`,
      achievement: `east_road`,
      clearBonus: 40,
      rooms: [
        {
          name: `Petal Mile`,
          theme: `gate`,
          foes: [`grunt`, `ninja`, `grunt`],
          crates: 2,
        },
        {
          name: `Wagon Bend`,
          theme: `bridge`,
          foes: [`ninja`, `ninja`, `ninja`],
          platforms: !0,
        },
        {
          name: `Road Camp`,
          theme: `shrine`,
          foes: [`katana`, `ninja`, `grunt`, `ninja`],
          heal: !0,
          platforms: !0,
        },
      ],
    },
    {
      id: 3,
      name: `Night Market`,
      achievement: `night_market`,
      clearBonus: 50,
      rooms: [
        {
          name: `Lantern Row`,
          theme: `night`,
          foes: [`grunt`, `ninja`, `grunt`],
          crates: 2,
        },
        {
          name: `Stall Bridge`,
          theme: `night`,
          foes: [`ninja`, `katana`, `ninja`],
          platforms: !0,
          heal: !0,
        },
        {
          name: `Market Close`,
          theme: `night`,
          foes: [`katana`, `katana`, `ninja`, `grunt`],
          crates: 1,
        },
      ],
    },
    {
      id: 4,
      name: `Bell Shrine`,
      achievement: `bell_shrine`,
      clearBonus: 60,
      rooms: [
        {
          name: `Stone Steps`,
          theme: `shrine`,
          foes: [`katana`, `grunt`, `katana`],
          platforms: !0,
          crates: 1,
        },
        {
          name: `Bell Court`,
          theme: `shrine`,
          foes: [`ninja`, `katana`, `ninja`, `katana`],
          heal: !0,
        },
        {
          name: `Inner Gate`,
          theme: `boss`,
          foes: [`katana`, `katana`, `katana`],
          crates: 1,
        },
      ],
    },
    {
      id: 5,
      name: `Warden Gate`,
      achievement: `goro`,
      clearBonus: 90,
      crystal: !0,
      rooms: [
        {
          name: `Outer Wall`,
          theme: `shrine`,
          foes: [`katana`, `ninja`, `grunt`, `katana`],
        },
        {
          name: `Banner Court`,
          theme: `boss`,
          foes: [`ninja`, `katana`, `ninja`],
          heal: !0,
        },
        { name: `General Yard`, theme: `boss`, boss: `goro` },
      ],
    },
    {
      id: 6,
      name: `Green Gate`,
      achievement: `green_gate`,
      clearBonus: 70,
      rooms: [
        {
          name: `Stalk Gate`,
          theme: `bamboo`,
          foes: [`grunt`, `grunt`, `ninja`],
          crates: 2,
        },
        {
          name: `First Bridge`,
          theme: `grove`,
          foes: [`ninja`, `grunt`, `ninja`],
          platforms: !0,
        },
        {
          name: `Gate Clearing`,
          theme: `bamboo`,
          foes: [`katana`, `ninja`, `grunt`],
          heal: !0,
        },
      ],
    },
    {
      id: 7,
      name: `Stalk Maze`,
      achievement: `stalk_maze`,
      clearBonus: 80,
      rooms: [
        {
          name: `Maze Mouth`,
          theme: `bamboo`,
          foes: [`ninja`, `ninja`, `grunt`, `ninja`],
          crates: 1,
        },
        {
          name: `High Walk`,
          theme: `grove`,
          foes: [`katana`, `ninja`, `katana`],
          platforms: !0,
          heal: !0,
        },
        {
          name: `Dead End`,
          theme: `bamboo`,
          foes: [`katana`, `ninja`, `grunt`, `katana`],
        },
      ],
    },
    {
      id: 8,
      name: `Panda Bridge`,
      achievement: `panda_bridge`,
      clearBonus: 90,
      rooms: [
        {
          name: `River Gate`,
          theme: `bamboo`,
          foes: [`grunt`, `ninja`, `katana`],
          crates: 2,
        },
        {
          name: `Panda Span`,
          theme: `grove`,
          foes: [`ninja`, `ninja`, `katana`, `ninja`],
          platforms: !0,
        },
        {
          name: `Far Bank`,
          theme: `bamboo`,
          foes: [`katana`, `grunt`, `katana`],
          heal: !0,
        },
      ],
    },
    {
      id: 9,
      name: `Whisper Grove`,
      achievement: `whisper_grove`,
      clearBonus: 100,
      rooms: [
        {
          name: `Whisper Path`,
          theme: `grove`,
          foes: [`ninja`, `katana`, `ninja`],
          crates: 1,
        },
        {
          name: `Lantern Grove`,
          theme: `bamboo`,
          foes: [`katana`, `ninja`, `katana`, `grunt`],
          platforms: !0,
          heal: !0,
        },
        {
          name: `Still Heart`,
          theme: `grove`,
          foes: [`katana`, `katana`, `ninja`, `katana`],
        },
      ],
    },
    {
      id: 10,
      name: `Bamboo Tyrant`,
      achievement: `bamboo_tyrant`,
      clearBonus: 120,
      crystal: !0,
      rooms: [
        {
          name: `Tyrant Road`,
          theme: `bamboo`,
          foes: [`katana`, `ninja`, `katana`, `grunt`],
        },
        {
          name: `Root Bridge`,
          theme: `grove`,
          foes: [`ninja`, `katana`, `ninja`, `katana`],
          platforms: !0,
          heal: !0,
        },
        { name: `Tyrant Court`, theme: `boss`, boss: `take` },
      ],
    },
    {
      id: 11,
      name: `Lantern Steps`,
      achievement: `lantern_steps`,
      clearBonus: 110,
      rooms: [
        {
          name: `First Steps`,
          theme: `shadow`,
          foes: [`grunt`, `ninja`, `katana`],
          crates: 2,
        },
        {
          name: `Bell Stair`,
          theme: `ink`,
          foes: [`ninja`, `katana`, `ninja`],
          platforms: !0,
        },
        {
          name: `Upper Landing`,
          theme: `shadow`,
          foes: [`katana`, `katana`, `grunt`],
          heal: !0,
        },
      ],
    },
    {
      id: 12,
      name: `Ink Hall`,
      achievement: `ink_hall`,
      clearBonus: 120,
      rooms: [
        {
          name: `Ink Door`,
          theme: `ink`,
          foes: [`ninja`, `katana`, `ninja`],
          crates: 1,
        },
        {
          name: `Scroll Bridge`,
          theme: `shadow`,
          foes: [`katana`, `ninja`, `katana`, `ninja`],
          platforms: !0,
        },
        {
          name: `Black Pool`,
          theme: `ink`,
          foes: [`katana`, `katana`, `ninja`],
          heal: !0,
        },
      ],
    },
    {
      id: 13,
      name: `Bell Crypt`,
      achievement: `bell_crypt`,
      clearBonus: 130,
      rooms: [
        {
          name: `Crypt Mouth`,
          theme: `shadow`,
          foes: [`katana`, `grunt`, `ninja`, `katana`],
          crates: 1,
        },
        {
          name: `Bone Stair`,
          theme: `ink`,
          foes: [`ninja`, `katana`, `ninja`],
          platforms: !0,
          heal: !0,
        },
        {
          name: `Deep Bell`,
          theme: `shadow`,
          foes: [`katana`, `katana`, `katana`, `ninja`],
        },
      ],
    },
    {
      id: 14,
      name: `Mask Gallery`,
      achievement: `mask_gallery`,
      clearBonus: 140,
      rooms: [
        {
          name: `Mask Row`,
          theme: `ink`,
          foes: [`ninja`, `katana`, `ninja`, `grunt`],
          crates: 2,
        },
        {
          name: `Gallery Bridge`,
          theme: `shadow`,
          foes: [`katana`, `ninja`, `katana`],
          platforms: !0,
        },
        {
          name: `Last Mask`,
          theme: `ink`,
          foes: [`katana`, `katana`, `ninja`, `katana`],
          heal: !0,
        },
      ],
    },
    {
      id: 15,
      name: `Shadow Abbot`,
      achievement: `shadow_abbot`,
      clearBonus: 160,
      crystal: !0,
      rooms: [
        {
          name: `Abbot Steps`,
          theme: `shadow`,
          foes: [`katana`, `ninja`, `katana`, `katana`],
        },
        {
          name: `Veil Bridge`,
          theme: `ink`,
          foes: [`ninja`, `katana`, `ninja`, `katana`],
          platforms: !0,
          heal: !0,
        },
        { name: `Abbot Court`, theme: `boss`, boss: `kage` },
      ],
    },
  ];
function a(e) {
  return i.find((t) => t.id === e) || i[0];
}
function o(e, t) {
  return t === 1
    ? !0
    : t < 1 || t > i.length
      ? !1
      : Array.isArray(e.cleared) && e.cleared.includes(t - 1);
}
var s = {
    grunt: {
      hp: 50,
      speed: 120,
      dmg: 8,
      reach: 82,
      windup: 0.46,
      active: 0.12,
      score: 100,
      coins: 8,
      xp: 12,
      h: 172,
      w: 64,
    },
    ninja: {
      hp: 42,
      speed: 200,
      dmg: 10,
      reach: 74,
      windup: 0.24,
      active: 0.2,
      score: 160,
      coins: 12,
      xp: 16,
      h: 168,
      w: 58,
    },
    katana: {
      hp: 78,
      speed: 108,
      dmg: 14,
      reach: 136,
      windup: 0.42,
      active: 0.12,
      score: 220,
      coins: 16,
      xp: 22,
      h: 176,
      w: 68,
    },
    boss: {
      hp: 540,
      speed: 78,
      dmg: 16,
      reach: 188,
      windup: 0.5,
      active: 0.14,
      score: 1200,
      coins: 90,
      xp: 80,
      h: 280,
      w: 130,
    },
  },
  c = {
    jab: {
      dur: 0.26,
      cancel: 0.15,
      lock: 0.2,
      hit0: 0.07,
      hit1: 0.15,
      dmg: 10,
      reach: 90,
      top: 132,
      h: 44,
      kb: 110,
      lift: 150,
      stun: 0.28,
      word: `THWACK!`,
      sfx: `swing`,
    },
    kick: {
      dur: 0.34,
      cancel: 0.2,
      lock: 0.26,
      hit0: 0.12,
      hit1: 0.22,
      dmg: 14,
      reach: 118,
      top: 100,
      h: 54,
      kb: 180,
      lift: 390,
      stun: 0.32,
      word: `THWACK!`,
      sfx: `swing`,
    },
    slash: {
      dur: 0.4,
      cancel: 0.22,
      lock: 0.3,
      hit0: 0.1,
      hit1: 0.24,
      dmg: 22,
      reach: 162,
      top: 160,
      h: 100,
      kb: 230,
      lift: 80,
      stun: 0.26,
      word: `SHUH!`,
      sfx: `slash`,
    },
    spin: {
      dur: 0.52,
      cancel: 0.38,
      lock: 0.44,
      hit0: 0.1,
      hit1: 0.42,
      dmg: 12,
      reach: 148,
      top: 158,
      h: 112,
      kb: 160,
      lift: 200,
      stun: 0.22,
      word: `SHUH!`,
      sfx: `slash`,
      ticks: 2,
    },
    air: {
      dur: 0.38,
      cancel: 0.24,
      lock: 0.3,
      hit0: 0.08,
      hit1: 0.26,
      dmg: 16,
      reach: 130,
      top: 128,
      h: 86,
      kb: 120,
      lift: 260,
      stun: 0.28,
      word: `SHUH!`,
      sfx: `slash`,
    },
  },
  l = [`jab`, `kick`, `slash`, `spin`],
  u = {
    5: `5 HIT COMBO`,
    10: `10 HIT COMBO`,
    20: `20 HIT COMBO`,
    30: `30 HIT ULTRA COMBO`,
    50: `50 HIT LEGENDARY COMBO`,
  };
function d(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function f(e, t, n) {
  return e + (t - e) * n;
}
function p(e, t) {
  return !e || !t
    ? !1
    : e.x < t.x + t.w && e.x + e.w > t.x && e.y < t.y + t.h && e.y + e.h > t.y;
}
function m(e) {
  let t = e >>> 0;
  return () => {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function h(e) {
  let t = Math.max(0, Math.floor(e));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, `0`)}`;
}
var g = new Image();
g.src = `./icons/icon-512.png`;
function _(e, t, n, r, i, a) {
  let o = Math.min(a, Math.abs(r) / 2, Math.abs(i) / 2);
  (e.beginPath(),
    e.moveTo(t + o, n),
    e.arcTo(t + r, n, t + r, n + i, o),
    e.arcTo(t + r, n + i, t, n + i, o),
    e.arcTo(t, n + i, t, n, o),
    e.arcTo(t, n, t + r, n, o),
    e.closePath());
}
function v(e, t, n, r, i, a, o) {
  let s = m(o);
  (e.save(),
    (e.strokeStyle = a),
    (e.globalAlpha = 0.35),
    (e.lineWidth = 1),
    e.beginPath());
  for (let a = 0; a < r; a++) {
    let r = t + (s() - 0.5) * i,
      a = n + (s() - 0.5) * i * 0.65;
    (e.moveTo(r, a), e.lineTo(r + 5, a - 3));
  }
  (e.stroke(), e.restore());
}
function y(e, t) {
  (e.save(),
    e.beginPath(),
    e.arc(0, 0, t, 0, Math.PI * 2),
    e.clip(),
    g.complete && g.naturalWidth
      ? e.drawImage(g, -t, -t, t * 2, t * 2)
      : ((e.fillStyle = `#14182e`),
        e.fillRect(-t, -t, t * 2, t * 2),
        (e.fillStyle = `#3d2a22`),
        e.beginPath(),
        e.arc(0, 2, t * 0.62, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#e7c7a4`),
        e.beginPath(),
        e.arc(0, 8, t * 0.28, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#1a120e`),
        e.beginPath(),
        e.arc(0, 8, t * 0.08, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#3ad7f5`),
        (e.lineWidth = t * 0.1),
        e.beginPath(),
        e.arc(0, 0, t * 0.9, 0, Math.PI * 2),
        e.stroke()),
    e.restore(),
    e.beginPath(),
    e.arc(0, 0, t + 1.5, 0, Math.PI * 2),
    (e.strokeStyle = `#e6c36a`),
    (e.lineWidth = 2),
    e.stroke());
}
function b(e, t, n = `#fffdf8`) {
  (e.save(),
    (e.font = `900 ${t}px Impact, "Arial Black", "Segoe UI", sans-serif`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let r = t * 0.72,
    i = [`O`, `T`, `D`];
  for (let a = 0; a < 3; a++) {
    let o = (a - 1) * r;
    ((e.lineWidth = Math.max(2, t * 0.14)),
      (e.strokeStyle = `#140800`),
      e.strokeText(i[a], o, 0),
      (e.shadowColor = `rgba(255, 214, 102, 0.9)`),
      (e.shadowBlur = t * 0.18),
      (e.fillStyle = n),
      e.fillText(i[a], o, 0),
      (e.shadowBlur = 0));
  }
  e.restore();
}
function x(e, t, n) {
  let r = Math.sin(t * 13),
    i = 0.12,
    a = -0.08,
    o = 0.35,
    s = 0,
    c = Math.sin(t * 2.2) * 1.6,
    l = 0;
  if (e === `run`)
    ((i = r * 0.72),
      (a = -r * 0.72),
      (o = -r * 0.45),
      (c = Math.abs(Math.sin(t * 13)) * -3));
  else if (e === `jump`)
    ((i = -0.9), (a = 0.45), (o = -1.05), (s = -0.08), (c = -6));
  else if (e === `fall`) ((i = 0.25), (a = -0.15), (o = -0.4), (c = 2));
  else if (e === `jab`) {
    let e = Math.sin(Math.min(1, n) * Math.PI);
    ((o = f(0.35, 1.45, e)), (s = 0.12 * e));
  } else if (e === `kick`) {
    let e = Math.sin(Math.min(1, n) * Math.PI);
    ((i = f(0.2, -1.65, e)),
      (o = f(0.3, -0.4, e)),
      (s = -0.18 * e),
      (c = -4 * e));
  } else if (e === `slash` || e === `air`) {
    let e = Math.min(1, n);
    ((o =
      e < 0.35 ? f(-0.9, -1.35, e / 0.35) : f(-1.35, 1.55, (e - 0.35) / 0.65)),
      (s = f(-0.2, 0.25, e)));
  } else if (e === `spin`)
    ((o = f(-1, 1.4, n)), (s = Math.sin(n * Math.PI * 2) * 0.2), (l = n * 0.6));
  else if (e === `block`)
    ((o = -1.15), (i = 0.25), (a = -0.2), (c = 4), (s = -0.05));
  else if (e === `dodge`)
    ((l = n * Math.PI * 2), (c = 10), (i = -1), (a = 1), (o = -0.8));
  else if (e === `hurt`) ((s = 0.35), (o = -0.2), (c = 6), (i = 0.3));
  else if (e === `special`) {
    let e = Math.min(1, n);
    ((o = e < 0.45 ? f(0.2, -1.7, e / 0.45) : f(-1.7, 1.35, (e - 0.45) / 0.55)),
      (s = e < 0.45 ? -0.15 : 0.2));
  } else
    e === `kneel`
      ? ((c = 28 * Math.min(1, n || 1)),
        (s = 0.45),
        (o = 0.8),
        (i = 1.1),
        (a = 0.8))
      : e === `sheath` &&
        ((o = f(1.2, 0.45, Math.min(1, n))), (s = f(0.1, 0, Math.min(1, n))));
  return { legF: i, legB: a, arm: o, body: s, bob: c, roll: l };
}
function S(e, t, n, r, i) {
  (e.save(),
    e.translate(t, n),
    e.rotate(r),
    (e.fillStyle = i ? `#120e0c` : `#1a1411`),
    _(e, -7, 0, 14, 34, 5),
    e.fill(),
    (e.fillStyle = `#c47b3a`),
    _(e, -6, 30, 12, 24, 4),
    e.fill(),
    (e.fillStyle = `#1a120e`),
    e.beginPath(),
    e.ellipse(1, 56, 11, 6, 0.1, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#e0a56a`),
    e.beginPath(),
    e.ellipse(8, 57, 3.2, 2.2, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function C(e, t, n, r, i, a) {
  (e.save(),
    e.translate(t, n),
    e.rotate(r),
    a && ((e.shadowColor = `#8fd4ff`), (e.shadowBlur = 18)));
  let o = e.createLinearGradient(0, 0, i, 0);
  (o.addColorStop(0, `#c5ced8`),
    o.addColorStop(0.45, `#f7fbff`),
    o.addColorStop(1, `#9aa7b6`),
    (e.fillStyle = o),
    e.beginPath(),
    e.moveTo(0, -3.2),
    e.lineTo(i - 12, -2.4),
    e.lineTo(i, 0),
    e.lineTo(i - 12, 2.4),
    e.lineTo(0, 3.2),
    e.fill(),
    (e.strokeStyle = a ? `#d7f3ff` : `rgba(255,255,255,0.8)`),
    (e.lineWidth = 1),
    e.beginPath(),
    e.moveTo(8, 0),
    e.lineTo(i - 8, 0),
    e.stroke(),
    (e.shadowBlur = 0),
    (e.fillStyle = `#d7b25a`),
    e.fillRect(-4, -5, 8, 10),
    (e.fillStyle = `#1a1a1a`),
    _(e, -16, -4, 14, 8, 2),
    e.fill(),
    e.restore());
}
function w(e) {
  (e.save(),
    e.translate(-8, -78),
    e.rotate(0.55),
    (e.fillStyle = `#1a120e`),
    _(e, 0, -4, 46, 8, 3),
    e.fill(),
    (e.fillStyle = `#e6c36a`),
    e.fillRect(40, -5, 6, 10),
    e.fillRect(-2, -5, 5, 10),
    e.restore());
}
function T(e, t) {
  let n = t.scale || 1,
    r = t.face || 1,
    i = t.pose || `idle`,
    a = t.time || 0,
    o = x(i, a, t.anim || 0),
    s = Math.sin(a * 1.4 + (t.x || 0)) > 0.97;
  (e.save(),
    e.translate(t.x, t.y),
    e.scale(r * n, n),
    (e.globalAlpha = t.alpha == null ? 1 : t.alpha),
    t.flash > 0.04 && (e.filter = `brightness(1.7)`),
    e.translate(0, o.bob),
    e.rotate(o.body + o.roll * 0.15),
    (e.fillStyle = `rgba(0,0,0,0.28)`),
    e.beginPath(),
    e.ellipse(0, -o.bob + 2, 36, 8, 0, 0, Math.PI * 2),
    e.fill(),
    e.save(),
    e.translate(-34, -86 + Math.sin(a * 3) * 3),
    e.rotate(-0.4 + Math.sin(a * 2) * 0.08),
    (e.strokeStyle = `#1a120e`),
    (e.lineWidth = 11),
    (e.lineCap = `round`),
    e.beginPath(),
    e.moveTo(0, 8),
    e.bezierCurveTo(-28, 16, -34, -24, -6, -34),
    e.stroke(),
    (e.fillStyle = `#241810`),
    e.beginPath(),
    e.arc(-8, -34, 12, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#c47b3a`),
    e.beginPath(),
    e.arc(-6, -32, 5.5, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    S(e, -12, -78, o.legB, !1),
    (e.fillStyle = `#16110e`),
    e.beginPath(),
    e.moveTo(-30, -80),
    e.quadraticCurveTo(-36, -120, -18, -142),
    e.quadraticCurveTo(8, -156, 34, -138),
    e.lineTo(28, -82),
    e.closePath(),
    e.fill(),
    v(e, 0, -110, 10, 40, `#3a2a22`, 3),
    (e.fillStyle = `#101010`),
    e.beginPath(),
    e.moveTo(-32, -86),
    e.lineTo(-38, -24),
    e.lineTo(30, -20),
    e.lineTo(26, -86),
    e.closePath(),
    e.fill(),
    (e.strokeStyle = `#e6c36a`),
    (e.lineWidth = 2),
    e.beginPath(),
    e.moveTo(-34, -30),
    e.lineTo(28, -26),
    e.stroke(),
    (e.strokeStyle = `rgba(230,195,106,0.35)`),
    e.beginPath(),
    e.moveTo(-8, -84),
    e.lineTo(-12, -28),
    e.moveTo(8, -84),
    e.lineTo(6, -26),
    e.stroke());
  let c = e.createLinearGradient(-20, -146, 24, -88);
  (c.addColorStop(0, `#3a3a3a`),
    c.addColorStop(0.45, `#141414`),
    c.addColorStop(1, `#0c0c0c`),
    (e.fillStyle = c),
    _(e, -24, -142, 52, 58, 10),
    e.fill(),
    (e.strokeStyle = `#e6c36a`),
    (e.lineWidth = 2.4),
    e.stroke(),
    (e.strokeStyle = `#8e2433`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(-18, -90),
    e.quadraticCurveTo(2, -82, 22, -92),
    e.stroke(),
    (e.fillStyle = `#c9a227`),
    e.beginPath(),
    e.moveTo(-28, -130),
    e.lineTo(-46, -118),
    e.lineTo(-30, -108),
    e.closePath(),
    e.fill(),
    (e.strokeStyle = `#8a6a32`),
    e.stroke(),
    e.save(),
    e.translate(6, -114),
    e.scale(r, 1),
    y(e, 18),
    e.restore(),
    (e.fillStyle = `#f0d2b4`),
    e.beginPath(),
    e.ellipse(4, -146, 14, 8, 0, 0, Math.PI * 2),
    e.fill(),
    S(e, 10, -76, o.legF, !0));
  let l = { x: 20, y: -128 },
    u = i === `jab` ? 52 : 46,
    d = l.x + Math.sin(o.arm) * u,
    f = l.y + Math.cos(o.arm) * u;
  if (
    (e.save(),
    e.translate(l.x, l.y),
    e.rotate(o.arm),
    (e.fillStyle = `#1a140f`),
    _(e, -6, 0, 13, u - 8, 5),
    e.fill(),
    (e.fillStyle = `#d4b15e`),
    e.fillRect(-7, 16, 15, 8),
    (e.fillStyle = `#e0a56a`),
    e.beginPath(),
    e.ellipse(0, u - 4, 8, 6, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    i === `slash` ||
      i === `spin` ||
      i === `air` ||
      i === `special` ||
      i === `block` ||
      i === `sheath`)
  ) {
    let a = i === `special` || t.bladeGlow,
      s = o.arm - Math.PI / 2;
    if (
      (C(e, d, f, s, i === `special` ? 78 : 70, a),
      t.trail &&
        t.record &&
        (i === `slash` || i === `spin` || i === `special` || i === `air`))
    ) {
      let e = u + 66,
        i = t.x + r * n * (d + Math.cos(s) * e),
        a = t.y + n * (o.bob + f + Math.sin(s) * e);
      t.trail.push({ x: i, y: a, life: 0.16 });
    }
  } else w(e);
  (e.save(),
    e.translate(8, -168),
    (e.fillStyle = `#1a120e`),
    e.beginPath(),
    e.moveTo(-30, 18),
    e.bezierCurveTo(-42, -8, -28, -34, -2, -36),
    e.bezierCurveTo(26, -38, 44, -16, 40, 10),
    e.bezierCurveTo(36, 28, 16, 36, -2, 32),
    e.bezierCurveTo(-20, 30, -28, 26, -30, 18),
    e.fill(),
    (e.fillStyle = `#c47b3a`),
    e.beginPath(),
    e.ellipse(-6, -16, 12, 6, -0.5, 0, Math.PI * 2),
    e.fill(),
    e.beginPath(),
    e.ellipse(16, 6, 16, 11, 0.2, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#1c140f`),
    e.beginPath(),
    e.moveTo(-18, -24),
    e.lineTo(-8, -58),
    e.lineTo(4, -22),
    e.fill(),
    e.beginPath(),
    e.moveTo(6, -28),
    e.lineTo(16, -64),
    e.lineTo(30, -20),
    e.fill(),
    (e.fillStyle = `#efc39a`),
    e.beginPath(),
    e.moveTo(-12, -24),
    e.lineTo(-6, -48),
    e.lineTo(0, -22),
    e.fill(),
    e.beginPath(),
    e.moveTo(12, -26),
    e.lineTo(18, -52),
    e.lineTo(26, -20),
    e.fill(),
    (e.fillStyle = `#f4e2cc`),
    e.beginPath(),
    e.ellipse(22, 12, 16, 12, 0.15, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#1a100e`),
    e.beginPath(),
    e.ellipse(34, 10, 5.2, 4.1, 0.2, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `rgba(255,255,255,0.45)`),
    e.beginPath(),
    e.ellipse(33, 8.6, 1.6, 1, 0, 0, Math.PI * 2),
    e.fill());
  let p = s ? 0.18 : 1;
  function m(t, n, r) {
    (e.save(),
      e.translate(t, n),
      e.scale(1, p),
      (e.fillStyle = `#f4efe8`),
      e.beginPath(),
      e.ellipse(0, 0, 6.2 * r, 5 * r, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#6a3d1d`),
      e.beginPath(),
      e.arc(0.8 * r, 0.2, 3.1 * r, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#140e0a`),
      e.beginPath(),
      e.arc(1.1 * r, 0.2, 1.7 * r, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#fff`),
      e.beginPath(),
      e.arc(-1.2 * r, -1.3, 1.2 * r, 0, Math.PI * 2),
      e.fill(),
      e.restore(),
      (e.strokeStyle = `#120c09`),
      (e.lineWidth = 1.7),
      e.beginPath(),
      e.moveTo(t - 7 * r, n - 2),
      e.quadraticCurveTo(t, n - 7 * r, t + 7 * r, n - 1),
      e.stroke());
  }
  (m(-8, -4, 0.82),
    m(12, -2, 1),
    (e.strokeStyle = `#0e0a08`),
    (e.lineWidth = 1.6),
    e.beginPath(),
    e.moveTo(4, -12),
    e.quadraticCurveTo(14, -16, 24, -10),
    e.moveTo(-16, -10),
    e.quadraticCurveTo(-8, -14, 0, -9),
    e.stroke(),
    (e.strokeStyle = `#8d5a44`),
    (e.lineWidth = 1.2),
    e.beginPath(),
    e.moveTo(24, 16),
    e.quadraticCurveTo(30, 20, 28, 18),
    e.stroke(),
    (e.fillStyle = `#2a1c16`),
    e.fillRect(18, 20, 10, 1.4),
    e.restore(),
    e.restore());
}
function E(e, t, n) {
  (e.save(),
    e.translate(6, -168),
    n &&
      ((e.fillStyle = `#1b1d28`),
      e.beginPath(),
      e.ellipse(0, 0, 40, 36, 0, 0, Math.PI * 2),
      e.fill()),
    (e.fillStyle = n ? `#f0c12e` : `#ffd23a`),
    e.beginPath(),
    e.moveTo(-32, 16),
    e.bezierCurveTo(-44, -10, -26, -36, 0, -34),
    e.bezierCurveTo(30, -36, 46, -8, 40, 14),
    e.bezierCurveTo(34, 32, 10, 36, -6, 30),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#e2a41a`),
    e.beginPath(),
    e.moveTo(-16, -22),
    e.lineTo(-6, -58),
    e.lineTo(6, -18),
    e.fill(),
    e.beginPath(),
    e.moveTo(8, -24),
    e.lineTo(20, -62),
    e.lineTo(32, -16),
    e.fill(),
    (e.fillStyle = `#ffefb0`),
    e.beginPath(),
    e.moveTo(-10, -22),
    e.lineTo(-4, -46),
    e.lineTo(2, -18),
    e.fill(),
    e.beginPath(),
    e.moveTo(14, -22),
    e.lineTo(20, -48),
    e.lineTo(28, -16),
    e.fill(),
    n
      ? ((e.fillStyle = `#141820`),
        e.fillRect(2, 6, 36, 14),
        (e.fillStyle = `#c7362f`),
        e.fillRect(2, 4, 36, 4))
      : ((e.fillStyle = `#5a3a12`),
        e.beginPath(),
        e.moveTo(-20, -18),
        e.lineTo(-30, -48),
        e.lineTo(-8, -16),
        e.fill(),
        e.beginPath(),
        e.moveTo(18, -20),
        e.lineTo(34, -52),
        e.lineTo(30, -12),
        e.fill()),
    (e.fillStyle = `#fff1c4`),
    e.beginPath(),
    e.ellipse(20, 12, 16, 11, 0.2, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#2a140c`),
    e.beginPath(),
    e.ellipse(18, 16, 10, 6, 0.1, 0, Math.PI),
    e.fill(),
    (e.fillStyle = `#fffaf2`),
    e.beginPath(),
    e.moveTo(12, 16),
    e.lineTo(16, 26),
    e.lineTo(10, 18),
    e.fill(),
    e.beginPath(),
    e.moveTo(24, 15),
    e.lineTo(29, 26),
    e.lineTo(22, 17),
    e.fill(),
    (e.fillStyle = `#1a0c08`),
    e.beginPath(),
    e.ellipse(32, 10, 5, 3.8, 0.2, 0, Math.PI * 2),
    e.fill());
  function r(t, n, r) {
    (e.save(),
      (e.shadowColor = `#ff2a2a`),
      (e.shadowBlur = 12),
      (e.fillStyle = `#ff3a3a`),
      e.beginPath(),
      e.ellipse(t, n, 6.4 * r, 5.2 * r, 0, 0, Math.PI * 2),
      e.fill(),
      (e.shadowBlur = 0),
      (e.fillStyle = `#3a0008`),
      e.beginPath(),
      e.ellipse(t + 1, n, 1.6 * r, 4 * r, 0, 0, Math.PI * 2),
      e.fill(),
      e.restore());
  }
  (r(-6, -2, 0.9),
    r(14, -1, 1.05),
    (e.strokeStyle = `#4a240c`),
    (e.lineWidth = 2.4),
    e.beginPath(),
    e.moveTo(-14, -10),
    e.lineTo(-2, -4),
    e.moveTo(6, -8),
    e.lineTo(22, -2),
    e.stroke(),
    e.restore());
}
function D(e, t, n) {
  let r = t.face || 1,
    i = t.scale || 1,
    a = t.pose || `idle`,
    o = t.anim || 0,
    s = x(a === `attack` ? `jab` : a, n + (t.seed || 0), o),
    c = t.type;
  if (
    (e.save(),
    e.translate(t.x, t.y + (a === `kneel` ? 42 : 0)),
    e.scale(r * i, i),
    t.flash > 0.02 && (e.filter = `brightness(1.85)`),
    e.translate(0, s.bob),
    e.rotate(s.body * 0.8),
    (e.fillStyle = `rgba(0,0,0,0.3)`),
    e.beginPath(),
    e.ellipse(
      0,
      -s.bob + 2,
      40 * (c === `boss` ? 1.1 : 1),
      9,
      0,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    t.bossId === `goro` &&
      ((e.fillStyle = `#5a1424`),
      e.beginPath(),
      e.moveTo(-16, -150),
      e.lineTo(-78, -36),
      e.lineTo(-8, -78),
      e.fill(),
      e.beginPath(),
      e.moveTo(28, -146),
      e.lineTo(86, -24),
      e.lineTo(18, -70),
      e.fill(),
      (e.fillStyle = `#e6c36a`),
      e.fillRect(-22, -208, 52, 7)),
    e.save(),
    e.translate(-36, -78),
    e.rotate(-0.5),
    (e.strokeStyle = `#e0a818`),
    (e.lineWidth = c === `boss` ? 16 : 12),
    (e.lineCap = `round`),
    e.beginPath(),
    e.moveTo(0, 10),
    e.bezierCurveTo(-26, 20, -30, -20, -4, -28),
    e.stroke(),
    (e.fillStyle = `#ffd23a`),
    e.beginPath(),
    e.arc(-6, -28, 10, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    (e.fillStyle = c === `boss` ? `#2a241c` : `#3a3428`),
    e.save(),
    e.translate(-10, -74),
    e.rotate(s.legB),
    _(e, -8, 0, 16, 36, 5),
    e.fill(),
    (e.fillStyle = `#ffd23a`),
    _(e, -6, 32, 13, 22, 4),
    e.fill(),
    e.restore(),
    (e.fillStyle = c === `boss` ? `#f2c431` : `#ffd84a`),
    e.beginPath(),
    e.moveTo(-34, -78),
    e.quadraticCurveTo(-40, -124, -8, -150),
    e.quadraticCurveTo(24, -162, 40, -136),
    e.lineTo(32, -78),
    e.closePath(),
    e.fill(),
    v(e, 4, -112, 8, 36, `#e2a41a`, t.seed || 9),
    c === `boss`)
  ) {
    let t = e.createLinearGradient(-40, -150, 40, -70);
    (t.addColorStop(0, `#3a1016`),
      t.addColorStop(0.5, `#12080a`),
      t.addColorStop(1, `#2a0c12`),
      (e.fillStyle = t),
      _(e, -46, -150, 96, 78, 12),
      e.fill(),
      (e.strokeStyle = `#e6c36a`),
      (e.lineWidth = 3),
      e.stroke(),
      (e.fillStyle = `#1a1a1a`),
      e.beginPath(),
      e.moveTo(-52, -132),
      e.lineTo(-70, -110),
      e.lineTo(-40, -100),
      e.fill(),
      e.beginPath(),
      e.moveTo(48, -132),
      e.lineTo(66, -108),
      e.lineTo(36, -98),
      e.fill(),
      (e.fillStyle = `#8e2433`),
      e.fillRect(-30, -78, 64, 8),
      (e.fillStyle = `#4a1018`),
      e.beginPath(),
      e.moveTo(-18, -70),
      e.lineTo(-28, -10),
      e.lineTo(34, -8),
      e.lineTo(24, -70),
      e.fill());
  } else
    ((e.fillStyle = `#141414`),
      _(e, -36, -142, 74, 68, 8),
      e.fill(),
      (e.fillStyle = `#222`),
      _(e, -48, -136, 16, 22, 4),
      e.fill(),
      _(e, 34, -136, 16, 22, 4),
      e.fill(),
      (e.fillStyle = `#2a241c`),
      _(e, -28, -78, 56, 28, 6),
      e.fill());
  if (
    ((e.fillStyle = `#ffd23a`),
    e.save(),
    e.translate(12, -74),
    e.rotate(s.legF),
    _(e, -7, 0, 15, 34, 5),
    e.fill(),
    (e.fillStyle = `#1a120c`),
    e.beginPath(),
    e.ellipse(2, 40, 12, 6, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    e.save(),
    e.translate(24, -126),
    e.rotate(c === `katana` || c === `boss` ? -0.8 : s.arm),
    (e.fillStyle = `#ffd23a`),
    _(e, -6, 0, 13, 40, 5),
    e.fill(),
    (e.fillStyle = `#1a120c`),
    e.beginPath(),
    e.ellipse(0, 44, 8, 6, 0, 0, Math.PI * 2),
    e.fill(),
    c === `grunt` &&
      ((e.strokeStyle = `#2a140c`),
      (e.lineWidth = 2),
      e.beginPath(),
      e.moveTo(6, 46),
      e.lineTo(14, 52),
      e.moveTo(0, 48),
      e.lineTo(6, 56),
      e.stroke()),
    e.restore(),
    (c === `katana` || c === `boss`) && a === `kneel`
      ? C(e, 24, -8, 1.15, c === `boss` ? 78 : 58, !1)
      : (c === `katana` || c === `boss`) &&
        C(
          e,
          46,
          -96,
          -0.35,
          c === `boss` ? 86 : 60,
          c === `boss` && t.phase >= 2,
        ),
    c === `ninja`)
  ) {
    ((e.strokeStyle = `#c7362f`),
      (e.lineWidth = 5),
      e.beginPath(),
      e.moveTo(-10, -150),
      e.quadraticCurveTo(-48, -120, -70, -150),
      e.stroke(),
      e.save(),
      e.translate(-36, -96),
      e.rotate(0.5),
      (e.fillStyle = `#e8eef8`),
      e.beginPath());
    for (let t = 0; t < 4; t++) {
      let n = (t * Math.PI) / 2;
      (e.lineTo(Math.cos(n) * 11, Math.sin(n) * 11),
        e.lineTo(Math.cos(n + 0.45) * 3, Math.sin(n + 0.45) * 3));
    }
    (e.fill(), e.restore());
  }
  (c === `katana` && ((e.fillStyle = `#c7362f`), e.fillRect(-20, -188, 44, 8)),
    E(e, !0, c === `ninja`),
    c === `ninja` &&
      ((e.fillStyle = `#12151f`),
      e.beginPath(),
      e.ellipse(6, -196, 36, 22, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#1b1f2c`),
      e.beginPath(),
      e.moveTo(-22, -186),
      e.lineTo(-8, -214),
      e.lineTo(2, -184),
      e.fill(),
      e.beginPath(),
      e.moveTo(10, -188),
      e.lineTo(22, -218),
      e.lineTo(34, -182),
      e.fill()),
    e.save(),
    e.translate(0, c === `boss` ? -112 : -108),
    e.scale(r, 1),
    b(e, c === `boss` ? 40 : 34, c === `boss` ? `#ffe08a` : `#fffdf8`),
    e.restore(),
    c === `boss` &&
      t.phase >= 3 &&
      ((e.strokeStyle = `rgba(160, 90, 255, 0.45)`),
      (e.lineWidth = 6),
      e.beginPath(),
      e.ellipse(0, -100, 70, 90, 0, 0, Math.PI * 2),
      e.stroke()),
    e.restore());
}
function O(e, t, n, r, i) {
  let a = m(i || 1);
  (e.save(),
    e.translate(t, n),
    e.scale(r, r),
    (e.strokeStyle = `#5c3b2a`),
    (e.lineWidth = 9),
    (e.lineCap = `round`),
    e.beginPath(),
    e.moveTo(0, 0),
    e.quadraticCurveTo(16, -70, -6, -150),
    e.stroke());
  for (let t = 0; t < 5; t++) {
    let n = -60 - t * 18,
      r = t % 2 == 0 ? -1 : 1,
      i = 50 + a() * 40;
    ((e.lineWidth = 3),
      e.beginPath(),
      e.moveTo(-2, n),
      e.quadraticCurveTo(r * i * 0.4, n - 16, r * i, n - 36),
      e.stroke());
  }
  for (let t = 0; t < 26; t++) {
    let t = (a() - 0.5) * 170,
      n = -80 - a() * 120,
      r = 8 + a() * 14;
    ((e.fillStyle =
      a() > 0.45 ? `rgba(255,183,197,0.92)` : `rgba(255,143,171,0.9)`),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `rgba(255,244,248,0.9)`),
      e.beginPath(),
      e.arc(t - 2, n - 2, r * 0.28, 0, Math.PI * 2),
      e.fill());
  }
  e.restore();
}
function ee(e, t, n, r) {
  let i = r * 0.62,
    a = n - 10;
  ((e.fillStyle = `#f3e6d4`),
    e.fillRect(t, a - i, r, i),
    (e.fillStyle = `#6b3e2a`),
    e.fillRect(t, a - i, r, 8),
    e.fillRect(t, a - 10, r, 10),
    e.fillRect(t, a - i, 8, i),
    e.fillRect(t + r - 8, a - i, 8, i),
    (e.fillStyle = `#fff8ea`),
    e.fillRect(t + r * 0.18, a - i * 0.62, r * 0.22, i * 0.38),
    e.fillRect(t + r * 0.55, a - i * 0.62, r * 0.22, i * 0.38),
    (e.strokeStyle = `#6b3e2a`),
    e.strokeRect(t + r * 0.18, a - i * 0.62, r * 0.22, i * 0.38),
    e.strokeRect(t + r * 0.55, a - i * 0.62, r * 0.22, i * 0.38),
    (e.fillStyle = `#31404e`),
    e.beginPath(),
    e.moveTo(t - 18, a - i + 4),
    e.lineTo(t + r / 2, a - i - r * 0.28),
    e.lineTo(t + r + 18, a - i + 4),
    e.closePath(),
    e.fill(),
    (e.strokeStyle = `#d9c7a4`),
    e.stroke());
}
function k(e, t, n, r, i) {
  (e.save(),
    e.translate(t, n),
    e.scale(r, r),
    i && ((e.shadowColor = `#ffd76a`), (e.shadowBlur = 18)),
    (e.fillStyle = `#d6453d`),
    e.fillRect(-54, -168, 14, 168),
    e.fillRect(40, -168, 14, 168),
    e.fillRect(-78, -186, 156, 14),
    e.fillRect(-66, -166, 132, 10),
    e.fillRect(-54, -108, 108, 10),
    (e.fillStyle = `#1a1a1a`),
    e.fillRect(-78, -192, 156, 8),
    e.restore());
}
function A(e, t, n, r) {
  ((e.fillStyle = `#5c5648`), e.fillRect(t - 5, n - 54, 10, 54));
  let i = 0.55 + Math.sin(r * 3 + t * 0.01) * 0.15;
  (e.save(),
    (e.globalAlpha = 0.22 * i),
    (e.fillStyle = `#ffb347`),
    e.beginPath(),
    e.arc(t, n - 70, 34, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    (e.fillStyle = `rgba(255, 179, 71, ${0.75 + i * 0.2})`),
    e.beginPath(),
    e.ellipse(t, n - 70, 13, 16, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#2c261c`),
    e.fillRect(t - 10, n - 90, 20, 6),
    e.fillRect(t - 8, n - 56, 16, 5));
}
function j(e) {
  return e === `boss`
    ? {
        top: `#6d7ea8`,
        mid: `#e7a0b4`,
        horizon: `#f0c09a`,
        ground: `#6d8f5a`,
        path: `#cbb89a`,
      }
    : e === `bridge`
      ? {
          top: `#8ec8ea`,
          mid: `#f7d0e4`,
          horizon: `#ffe3c2`,
          ground: `#8b5a3c`,
          path: `#a56b45`,
        }
      : e === `shrine`
        ? {
            top: `#89c0e4`,
            mid: `#f6d5e6`,
            horizon: `#ffe7cf`,
            ground: `#6f9a58`,
            path: `#d9d0c2`,
          }
        : e === `night`
          ? {
              top: `#1b2748`,
              mid: `#6d4d86`,
              horizon: `#e7a0b4`,
              ground: `#3f6d4c`,
              path: `#cbb892`,
            }
          : e === `bamboo`
            ? {
                top: `#6eaf78`,
                mid: `#cfe7a8`,
                horizon: `#e7d7a4`,
                ground: `#3f7a45`,
                path: `#8d9a62`,
              }
            : e === `grove`
              ? {
                  top: `#3e7a58`,
                  mid: `#8fbf78`,
                  horizon: `#d7c48a`,
                  ground: `#2f5a38`,
                  path: `#6a7a48`,
                }
              : e === `shadow`
                ? {
                    top: `#141028`,
                    mid: `#3a2858`,
                    horizon: `#c08098`,
                    ground: `#2a2438`,
                    path: `#4a4058`,
                  }
                : e === `ink`
                  ? {
                      top: `#0e0c18`,
                      mid: `#2a2040`,
                      horizon: `#a07088`,
                      ground: `#1c1828`,
                      path: `#3a3448`,
                    }
                  : {
              top: `#8ec6ea`,
              mid: `#f7d5e2`,
              horizon: `#ffe6c4`,
              ground: `#6e9a55`,
              path: `#e4d0aa`,
            };
}
function M(e, t) {
  let n = t.room,
    r = t.camX,
    i = t.camY,
    a = t.viewW,
    o = j(n.theme),
    s = e.createLinearGradient(0, i - 400, 0, 640);
  (s.addColorStop(0, o.top),
    s.addColorStop(0.55, o.mid),
    s.addColorStop(1, o.horizon),
    (e.fillStyle = s),
    e.fillRect(r - 800, i - 800, a + 1600, 640 - i + 900));
  let c = r + a * 0.78,
    l = i + t.viewH * 0.16,
    u = e.createRadialGradient(c, l, 10, c, l, 90);
  (u.addColorStop(0, `rgba(255,244,210,0.95)`),
    u.addColorStop(1, `rgba(255,244,210,0)`),
    (e.fillStyle = u),
    e.beginPath(),
    e.arc(c, l, 90, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle =
      n.theme === `boss` || n.theme === `shadow` || n.theme === `ink`
        ? `rgba(40,28,70,0.62)`
        : n.theme === `bamboo` || n.theme === `grove`
          ? `rgba(40,90,50,0.45)`
          : `rgba(170,150,180,0.45)`));
  for (let t = 0; t < 5; t++) {
    let n = r * 0.55 + t * 280 - 40;
    (e.beginPath(),
      e.moveTo(n, 620),
      e.lineTo(n + 90, 490 - (t % 3) * 24),
      e.lineTo(n + 200, 620),
      e.fill());
  }
  for (let t of n.clouds || []) {
    let n = r * 0.35 + t.x;
    ((e.fillStyle = `rgba(255,255,255,0.62)`),
      e.beginPath(),
      e.ellipse(n, i + t.y, 46 * t.s, 18 * t.s, 0, 0, Math.PI * 2),
      e.ellipse(
        n + 30 * t.s,
        i + t.y + 6,
        30 * t.s,
        14 * t.s,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill());
  }
  for (let t of n.houses || []) ee(e, t.x, 634, t.w);
  if (n.theme === `bridge` || n.theme === `grove`) {
    ((e.fillStyle = n.theme === `grove` ? `#2f6d58` : `#7eb7d4`),
      e.fillRect(r - 100, 490, a + 200, 70),
      (e.strokeStyle = `rgba(255,255,255,0.45)`),
      (e.lineWidth = 2));
    for (let n = 0; n < 8; n++) {
      let i = 500 + (n % 3) * 16,
        o = ((t.time * 30 + n * 160) % (a + 200)) + r - 100;
      (e.beginPath(),
        e.moveTo(o, i),
        e.quadraticCurveTo(o + 30, i - 4, o + 60, i),
        e.stroke());
    }
  }
  n.theme === `shrine` ||
  n.theme === `boss` ||
  n.theme === `ink` ||
  n.theme === `shadow`
    ? (k(
        e,
        n.w * 0.5,
        640,
        n.theme === `boss` ? 1.35 : 1.05,
        n.theme === `boss`,
      ),
      (e.fillStyle = `#8d2a32`),
      e.fillRect(n.w * 0.5 - 160, 390, 70, 120),
      e.fillRect(n.w * 0.5 + 90, 390, 70, 120),
      (e.fillStyle = `#f2d48a`),
      e.beginPath(),
      e.arc(n.w * 0.5 - 125, 450, 10, 0, Math.PI * 2),
      e.arc(n.w * 0.5 + 125, 450, 10, 0, Math.PI * 2),
      e.fill())
    : k(e, 250, 640, 0.9, !1);
  for (let t of n.trees || []) {
    if (t.x < r - 260 || t.x > r + a + 260) continue;
    if (n.theme === `bamboo` || n.theme === `grove`) {
      (e.save(),
        (e.strokeStyle = n.theme === `grove` ? `#1d4a30` : `#2f6a38`),
        (e.lineWidth = 8 * t.s),
        (e.lineCap = `round`),
        e.beginPath(),
        e.moveTo(t.x, 640),
        e.lineTo(t.x + 6, 640 - 240 * t.s),
        e.stroke(),
        (e.strokeStyle = `#9ed56a`),
        (e.lineWidth = 3),
        e.beginPath(),
        e.moveTo(t.x + 2, 500),
        e.lineTo(t.x + 28 * t.s, 470),
        e.moveTo(t.x + 4, 450),
        e.lineTo(t.x - 22 * t.s, 424),
        e.stroke(),
        e.restore());
    } else O(e, t.x, 640, t.s, t.seed);
  }
  for (let r of n.lanterns || []) A(e, r.x, 640, t.time);
  if (
    ((e.fillStyle = o.ground),
    e.fillRect(r - 400, 640, a + 800, 500),
    n.theme === `bridge` || n.theme === `grove`)
  ) {
    e.fillStyle = `#7a4e34`;
    for (let t = r - (r % 28); t < r + a + 40; t += 28)
      ((e.fillStyle = t % 56 < 28 ? `#8d5a3a` : `#73482e`),
        e.fillRect(t, 640, 26, 80));
    ((e.strokeStyle = `#4e2e1e`),
      (e.lineWidth = 4),
      e.beginPath(),
      e.moveTo(r - 20, 604),
      e.lineTo(r + a + 20, 604),
      e.stroke());
  } else {
    ((e.fillStyle = o.path),
      _(e, r - 20, 636, a + 40, 46, 8),
      e.fill(),
      (e.fillStyle = `rgba(255,255,255,0.18)`));
    for (let t = 0; t < 18; t++) {
      let i = r + ((t * 97 + n.w) % a);
      (e.beginPath(), e.ellipse(i, 656, 10, 4, 0, 0, Math.PI * 2), e.fill());
    }
  }
  ((e.strokeStyle = `rgba(90,60,40,0.35)`),
    e.beginPath(),
    e.moveTo(r - 50, 640),
    e.lineTo(r + a + 50, 640),
    e.stroke());
  for (let t of n.platforms || [])
    ((e.fillStyle = `#6b422c`),
      _(e, t.x, t.y, t.w, t.h, 6),
      e.fill(),
      (e.fillStyle = `#e6c36a`),
      e.fillRect(t.x, t.y, t.w, 3));
}
function N(e, t) {
  (e.save(),
    e.translate(t.x, t.y),
    e.rotate(t.rot),
    (e.fillStyle = t.color),
    e.beginPath(),
    e.ellipse(0, 0, 5, 3, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function te(e, t) {
  let n = t.dpr || 1;
  if (
    (e.setTransform(n, 0, 0, n, 0, 0),
    e.clearRect(0, 0, t.cssW, t.cssH),
    (e.fillStyle = `#140c0a`),
    e.fillRect(0, 0, t.cssW, t.cssH),
    t.mode === `fatality` || (t.mode === `victory` && t.cine))
  )
    oe(e, t);
  else {
    e.setTransform(n * t.scale, 0, 0, n * t.scale, 0, 0);
    let r = (Math.random() - 0.5) * t.shake,
      i = (Math.random() - 0.5) * t.shake;
    (e.translate(-t.camX + r, -t.camY + i), M(e, t));
    for (let n of t.petals) n.front || N(e, n);
    for (let n of t.props) n.alive && P(e, n);
    for (let n of t.pickups) F(e, n, t.time);
    for (let n of t.projectiles) ie(e, n, t.time);
    for (let n of t.ghosts)
      T(e, { ...n, alpha: n.life * 0.35, trail: null, record: !1 });
    let a = t.showcase,
      o = a ? t.showHero : t.player,
      s = a ? t.showFoes : t.enemies;
    o &&
      !o.hidden &&
      ((!a &&
        o.iframe > 0 &&
        Math.floor(t.time * 16) % 2 == 0 &&
        o.dodgeT <= 0) ||
        T(e, {
          x: o.x,
          y: o.y,
          face: o.face,
          pose: o.pose,
          anim: o.anim,
          time: t.time,
          scale: 1,
          flash: o.flash || 0,
          bladeGlow: o.bladeGlow,
          trail: t.trail,
          record: t.mode === `play` || t.mode === `finish`,
        }));
    for (let n of s)
      n.dead ||
        (D(e, { ...n, time: t.time }, t.time),
        re(e, n),
        !a && n.hp < n.maxHp && ne(e, n));
    for (let n of t.petals) n.front && N(e, n);
    (t.exitOpen &&
      (k(e, t.exitX, 640, 0.85, !0),
      R(e, t.exitX, 430, `ONWARD`, `#fff6d2`, 22)),
      L(e, t.trail));
    for (let n of t.particles) I(e, n);
    for (let n of t.popups) R(e, n.x, n.y, n.text, n.color, n.big ? 28 : 16);
    t.debug && ae(e, t);
  }
  e.setTransform(n, 0, 0, n, 0, 0);
  let r = e.createRadialGradient(
    t.cssW / 2,
    t.cssH / 2,
    t.cssW * 0.2,
    t.cssW / 2,
    t.cssH / 2,
    t.cssW * 0.72,
  );
  (r.addColorStop(0, `rgba(0,0,0,0)`),
    r.addColorStop(1, `rgba(0,0,0,0.38)`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t.cssW, t.cssH),
    t.fade > 0.01 &&
      ((e.fillStyle = `rgba(8,4,4,${t.fade})`),
      e.fillRect(0, 0, t.cssW, t.cssH)),
    t.comboPop > 0 &&
      t.combo > 1 &&
      t.mode === `play` &&
      (e.save(),
      (e.globalAlpha = Math.min(1, t.comboPop * 2)),
      (e.fillStyle =
        t.combo >= 20 ? `#ffd76a` : t.combo >= 10 ? `#fff6d2` : `#f3fff0`),
      (e.font = `900 ${Math.min(64, 28 + t.combo)}px Cinzel, Palatino, serif`),
      (e.textAlign = `left`),
      e.fillText(`${t.combo} HITS`, 28, t.cssH * 0.28),
      e.restore()));
}
function ne(e, t) {
  let n = Math.max(46, t.w || 56),
    r = t.x - n / 2,
    i = t.y - (t.h || 170) - 16;
  ((e.fillStyle = `rgba(0,0,0,0.55)`),
    e.fillRect(r, i, n, 7),
    (e.fillStyle = t.type === `boss` ? `#ff5a3c` : `#ffd23a`),
    e.fillRect(r, i, n * Math.max(0, t.hp / t.maxHp), 7),
    (e.strokeStyle = `rgba(255,255,255,0.7)`),
    e.strokeRect(r, i, n, 7));
}
function re(e, t) {
  if (!t.attack || t.attack.t >= t.attack.hitAt) {
    if (t.attack && t.attack.marker) {
      let n = 0.5 + Math.sin(t.attack.t * 20) * 0.2;
      (e.save(),
        (e.globalAlpha = n),
        (e.strokeStyle = `#ff4455`),
        (e.lineWidth = 3),
        e.beginPath(),
        e.ellipse(t.attack.marker.x, 638, 64, 16, 0, 0, Math.PI * 2),
        e.stroke(),
        e.restore());
    }
    return;
  }
  let n = t.attack.t / t.attack.hitAt;
  (e.save(),
    (e.globalAlpha = 0.15 + n * 0.45),
    (e.fillStyle = `#ff3344`),
    e.beginPath());
  let r = t.x + t.face * 30;
  (e.moveTo(r, t.y - 90),
    e.lineTo(r + t.face * t.attack.reach * n, t.y - 120),
    e.lineTo(r + t.face * t.attack.reach * n, t.y - 60),
    e.fill(),
    e.restore());
}
function P(e, t) {
  ((e.fillStyle = `#8a5a32`),
    _(e, t.x - 24, t.y - 48, 48, 48, 4),
    e.fill(),
    (e.strokeStyle = `#4e3018`),
    e.stroke(),
    e.beginPath(),
    e.moveTo(t.x - 24, t.y - 24),
    e.lineTo(t.x + 24, t.y - 24),
    e.moveTo(t.x, t.y - 48),
    e.lineTo(t.x, t.y),
    e.stroke());
}
function F(e, t, n) {
  let r = t.y + Math.sin(n * 5 + t.x) * 4;
  t.kind === `heal`
    ? ((e.fillStyle = `#fff`),
      e.beginPath(),
      e.ellipse(t.x, r, 12, 9, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#d6453d`),
      e.fillRect(t.x - 3, r - 12, 6, 8),
      R(e, t.x, r - 26, `HEAL`, `#fff6d8`, 12))
    : ((e.fillStyle = `#f0c14a`),
      e.beginPath(),
      e.arc(t.x, r, 8, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#6a4a12`),
      (e.font = `700 10px sans-serif`),
      (e.textAlign = `center`),
      e.fillText(`¢`, t.x, r + 3));
}
function ie(e, t) {
  if (t.kind === `star`) {
    (e.save(),
      e.translate(t.x, t.y),
      e.rotate(t.life * 12),
      (e.fillStyle = `#f4f7fb`),
      e.beginPath());
    for (let t = 0; t < 4; t++)
      (e.lineTo(
        Math.cos((t * Math.PI) / 2) * 10,
        Math.sin((t * Math.PI) / 2) * 10,
      ),
        e.lineTo(
          Math.cos((t * Math.PI) / 2 + 0.4) * 3,
          Math.sin((t * Math.PI) / 2 + 0.4) * 3,
        ));
    (e.fill(), e.restore());
  } else
    t.kind === `orb`
      ? (e.save(),
        (e.shadowColor = `#b07cff`),
        (e.shadowBlur = 16),
        (e.fillStyle = `#c9a6ff`),
        e.beginPath(),
        e.arc(t.x, t.y, 11, 0, Math.PI * 2),
        e.fill(),
        e.restore())
      : t.kind === `shock`
        ? ((e.fillStyle = `rgba(255, 196, 80, 0.85)`),
          e.beginPath(),
          e.ellipse(t.x, t.y, 36, 12, 0, 0, Math.PI * 2),
          e.fill())
        : t.kind === `thunder` &&
          (e.save(),
          (e.strokeStyle = `#d8f4ff`),
          (e.shadowColor = `#7ecbff`),
          (e.shadowBlur = 16),
          (e.lineWidth = 4),
          e.beginPath(),
          e.moveTo(t.x - t.vx * 0.02, t.y),
          e.lineTo(t.x, t.y - 10),
          e.lineTo(t.x + 16, t.y + 6),
          e.stroke(),
          e.restore());
}
function I(e, t) {
  ((e.globalAlpha = Math.max(0, t.life / t.max)),
    (e.fillStyle = t.color),
    e.beginPath(),
    e.arc(t.x, t.y, t.r, 0, Math.PI * 2),
    e.fill(),
    (e.globalAlpha = 1));
}
function L(e, t) {
  if (!(!t || t.length < 2)) {
    (e.save(),
      (e.lineCap = `round`),
      (e.strokeStyle = `rgba(186, 226, 255, 0.75)`),
      (e.lineWidth = 7),
      e.beginPath(),
      e.moveTo(t[0].x, t[0].y));
    for (let n of t) e.lineTo(n.x, n.y);
    (e.stroke(),
      (e.strokeStyle = `rgba(255,255,255,0.8)`),
      (e.lineWidth = 2),
      e.stroke(),
      e.restore());
  }
}
function R(e, t, n, r, i, a) {
  (e.save(),
    (e.font = `900 ${a}px Cinzel, Palatino, Impact, serif`),
    (e.textAlign = `center`),
    (e.lineWidth = 4),
    (e.strokeStyle = `rgba(20,8,8,0.85)`),
    e.strokeText(r, t, n),
    (e.fillStyle = i),
    e.fillText(r, t, n),
    e.restore());
}
function ae(e, t) {
  e.strokeStyle = `rgba(0,255,180,0.8)`;
  let n = t.player;
  if (!n) return;
  let r = n.hurt;
  (r && e.strokeRect(r.x, r.y, r.w, r.h),
    (e.strokeStyle = `rgba(255,80,80,0.8)`),
    n.atkBox && e.strokeRect(n.atkBox.x, n.atkBox.y, n.atkBox.w, n.atkBox.h));
}
function oe(e, t) {
  let n = t.cssW,
    r = t.cssH,
    i = t.cine,
    a = i.t,
    o = r * 0.78,
    s = Math.max(0.5, Math.min(n / 1100, r / 720)),
    c = n * 0.73,
    l = n * 0.26;
  a >= 2.15 && a < 3.9
    ? (l = f(n * 0.26, c - 210 * s, Math.min(1, (a - 2.15) / 0.4)))
    : a >= 3.9 && (l = c - 220 * s);
  let u = o;
  if (a >= 3.9 && a < 5.15) {
    let e = (a - 3.9) / 1.25;
    u = o - Math.sin(Math.min(1, e) * Math.PI) * 150 * s;
  }
  let d = 1,
    p = n * 0.45,
    m = o - 80;
  a < 1.25
    ? ((d = f(1, 1.72, V(a / 1.25))), (p = l + 16 * s), (m = o - 188 * s))
    : a < 2.15
      ? ((d = f(1.72, 1.02, V((a - 1.25) / 0.9))),
        (p = (l + c) / 2),
        (m = o - 120 * s))
      : ((d = a > 5 && a < 5.4 ? 1.12 : 1.02),
        (p = (l + c) / 2),
        (m = o - 110 * s));
  let h = e.createLinearGradient(0, 0, 0, r);
  (h.addColorStop(0, `#243044`),
    h.addColorStop(0.5, `#8e5a68`),
    h.addColorStop(1, `#e7c3a4`),
    (e.fillStyle = h),
    e.fillRect(0, 0, n, r),
    e.save(),
    e.translate(n / 2, r / 2),
    e.scale(d, d),
    e.translate(-p, -m),
    (e.fillStyle = `#6e9a55`),
    e.fillRect(-200, o, n + 400, 400),
    (e.fillStyle = `#d7c4a4`),
    e.fillRect(-200, o, n + 400, 40),
    O(e, n * 0.08, o, s * 0.9, 4),
    O(e, n * 0.93, o, s, 8),
    k(e, n * 0.5, o, s * 0.72, !1));
  for (let t of i.motes)
    ((e.globalAlpha = Math.max(0, t.life / t.max)),
      (e.fillStyle = t.color),
      e.beginPath(),
      e.arc(t.x, t.y, t.r, 0, Math.PI * 2),
      e.fill());
  e.globalAlpha = 1;
  let g = se(a);
  T(e, {
    x: l,
    y: u,
    face: 1,
    pose: g,
    anim: z(a),
    time: t.time,
    scale: s,
    bladeGlow: a > 1.2 && a < 6.7,
    alpha: 1,
  });
  let _ = a < 5.3 ? 1 : Math.max(0, 1 - (a - 5.3) / 0.9);
  _ > 0.02 &&
    (e.save(),
    (e.globalAlpha = _),
    D(
      e,
      {
        x: c,
        y: o,
        face: -1,
        type: `boss`,
        pose: a > 4.6 ? `hurt` : `idle`,
        anim: 0.4,
        scale: s * 1.35,
        phase: 1,
        seed: 2,
        flash: B(a) ? 0.2 : 0,
      },
      t.time,
    ),
    e.restore());
  for (let t of i.plates)
    (e.save(),
      e.translate(t.x, t.y),
      e.rotate(t.rot),
      (e.fillStyle = t.color),
      e.fillRect(-t.w / 2, -t.h / 2, t.w, t.h),
      (e.strokeStyle = `#e6c36a`),
      e.strokeRect(-t.w / 2, -t.h / 2, t.w, t.h),
      e.restore());
  (e.restore(),
    (e.fillStyle = `#050302`),
    e.fillRect(0, 0, n, r * 0.1),
    e.fillRect(0, r * 0.9, n, r * 0.1));
}
function se(e) {
  return e < 1.15
    ? `idle`
    : e < 2.2
      ? `special`
      : e < 3.9
        ? `slash`
        : e < 4.55
          ? `jump`
          : e < 5.25
            ? `air`
            : e < 6.45
              ? `slash`
              : e < 7.3
                ? `sheath`
                : `idle`;
}
function z(e) {
  return e < 1.15
    ? 0
    : e < 2.2
      ? (e - 1.15) / 1.05
      : e < 3.9
        ? ((e - 2.2) % 0.34) / 0.34
        : e < 4.55
          ? (e - 3.9) / 0.65
          : e < 5.25
            ? (e - 4.55) / 0.7
            : e < 6.45
              ? (e - 5.25) / 1.2
              : e < 7.3
                ? (e - 6.45) / 0.85
                : 0;
}
function B(e) {
  return [2.35, 2.55, 2.75, 2.95, 3.15, 5.15].some(
    (t) => e > t && e < t + 0.08,
  );
}
function V(e) {
  let t = Math.max(0, Math.min(1, e));
  return 1 - (1 - t) * (1 - t);
}
function ce(e, t, n, r) {
  let i = Math.max(1680, t + 320),
    a = m((n || 1) * 997 + Math.floor(t)),
    o = [],
    g = e === `bamboo` || e === `grove`,
    _ = e === `shadow` || e === `ink`;
  for (let t = 40; t < i; t += g ? 140 : e === `night` || _ ? 200 : 230)
    o.push({
      x: t + a() * 50,
      s: 0.75 + a() * 0.55,
      seed: Math.floor(a() * 99999),
    });
  let s = [];
  if (e !== `boss` && !g && !_)
    for (let e = 0; e < 3; e++)
      s.push({ x: 180 + (i / 3.4) * e, w: 150 + a() * 40 });
  let c = [],
    l = e === `night` || _ ? 150 : g ? 220 : 280;
  for (let e = 120; e < i; e += l) c.push({ x: e });
  let u = [];
  for (let e = 0; e < 4; e++)
    u.push({ x: e * 320, y: 70 + a() * 40, s: 0.8 + a() });
  let d = [];
  return (
    r && d.push({ x: Math.max(220, t * 0.32), y: 512, w: 210, h: 16 }),
    {
      theme: e || `gate`,
      w: i,
      trees: o,
      houses: s,
      lanterns: c,
      clouds: u,
      platforms: d,
    }
  );
}
function le() {
  let e = {
    ctx: null,
    musicGain: null,
    sfxGain: null,
    noise: null,
    mode: `off`,
    musicVol: 0.45,
    sfxVol: 0.8,
    nextTime: 0,
    step: 0,
    voice: !0,
    lastSay: 0,
  };
  function t() {
    if (e.ctx) return (e.ctx.state === `suspended` && e.ctx.resume(), !0);
    let t = window.AudioContext || window.webkitAudioContext;
    if (!t) return !1;
    let n = new t();
    ((e.ctx = n),
      (e.musicGain = n.createGain()),
      (e.sfxGain = n.createGain()),
      (e.musicGain.gain.value = e.musicVol),
      (e.sfxGain.gain.value = e.sfxVol),
      e.musicGain.connect(n.destination),
      e.sfxGain.connect(n.destination));
    let r = Math.floor(n.sampleRate * 1),
      i = n.createBuffer(1, r, n.sampleRate),
      a = i.getChannelData(0);
    for (let e = 0; e < r; e++) a[e] = Math.random() * 2 - 1;
    return ((e.noise = i), (e.nextTime = n.currentTime + 0.05), !0);
  }
  function n(t, n) {
    if (((e.musicVol = t), (e.sfxVol = n), !e.ctx)) return;
    let r = e.ctx.currentTime;
    (e.sfxGain.gain.setValueAtTime(n, r),
      e.mode !== `silent` && e.musicGain.gain.setValueAtTime(t, r));
  }
  function r(n) {
    if (!t() || e.mode === n) return;
    e.mode = n;
    let r = e.ctx.currentTime,
      i = n === `silent` || n === `off` ? 1e-4 : e.musicVol;
    (e.musicGain.gain.cancelScheduledValues(r),
      e.musicGain.gain.linearRampToValueAtTime(Math.max(1e-4, i), r + 0.18));
  }
  function i(t, n, r, i) {
    let a = e.ctx.createGain();
    return (
      a.gain.setValueAtTime(1e-4, t),
      a.gain.exponentialRampToValueAtTime(Math.max(0.001, n), t + 0.012),
      a.gain.exponentialRampToValueAtTime(1e-4, t + r),
      a.connect(i),
      a
    );
  }
  function a(t, n, r, a, o, s = e.sfxGain) {
    if (!e.ctx) return;
    let c = e.ctx.currentTime,
      l = e.ctx.createOscillator();
    ((l.type = r),
      l.frequency.setValueAtTime(t, c),
      o && l.frequency.exponentialRampToValueAtTime(Math.max(40, o), c + n));
    let u = i(c, a, n, s);
    (l.connect(u), l.start(c), l.stop(c + n + 0.02));
  }
  function o(t, n, r, a = 0.8) {
    if (!e.ctx || !e.noise) return;
    let o = e.ctx.currentTime,
      s = e.ctx.createBufferSource();
    s.buffer = e.noise;
    let c = e.ctx.createBiquadFilter();
    ((c.type = `bandpass`), c.frequency.setValueAtTime(r, o), (c.Q.value = a));
    let l = i(o, n, t, e.sfxGain);
    (s.connect(c), c.connect(l), s.start(o), s.stop(o + t + 0.02));
  }
  let s = {
    swing() {
      (o(0.09, 0.22, 900, 0.7), a(220, 0.07, `triangle`, 0.05, 80));
    },
    slash() {
      (o(0.12, 0.28, 1400, 0.6), a(880, 0.09, `sawtooth`, 0.04, 180));
    },
    hit() {
      (a(140, 0.09, `square`, 0.08, 60), o(0.06, 0.2, 400, 1));
    },
    block() {
      (a(520, 0.07, `square`, 0.06, 220), a(180, 0.1, `triangle`, 0.05, 90));
    },
    perfect() {
      (a(660, 0.08, `sine`, 0.07, 880), a(990, 0.12, `triangle`, 0.05));
    },
    jump() {
      a(420, 0.1, `square`, 0.05, 260);
    },
    land() {
      o(0.06, 0.12, 180, 0.8);
    },
    hurt() {
      a(200, 0.18, `sawtooth`, 0.08, 70);
    },
    ko() {
      a(160, 0.35, `sawtooth`, 0.09, 50);
    },
    coin() {
      (a(880, 0.06, `sine`, 0.05), a(1320, 0.08, `sine`, 0.04));
    },
    heal() {
      (a(520, 0.08, `sine`, 0.05), a(780, 0.12, `sine`, 0.04));
    },
    thunder() {
      (o(0.2, 0.3, 1600, 0.4),
        a(90, 0.22, `sawtooth`, 0.07, 40),
        a(640, 0.14, `square`, 0.04, 200));
    },
    roar() {
      (o(0.35, 0.25, 140, 0.6), a(80, 0.4, `sawtooth`, 0.08, 40));
    },
    boom() {
      (a(70, 0.4, `sine`, 0.12, 36), o(0.25, 0.3, 120, 0.5));
    },
    sheath() {
      (o(0.05, 0.18, 1800, 2), a(240, 0.05, `triangle`, 0.04));
    },
    ui() {
      a(620, 0.05, `sine`, 0.04);
    },
    whoosh() {
      o(0.14, 0.16, 700, 0.5);
    },
    star() {
      a(1400, 0.05, `square`, 0.03, 400);
    },
  };
  function c(t, n) {
    let r = e.ctx.createOscillator(),
      i = e.ctx.createGain();
    ((r.type = `sine`),
      r.frequency.setValueAtTime(n ? 150 : 96, t),
      r.frequency.exponentialRampToValueAtTime(42, t + 0.16),
      i.gain.setValueAtTime(n ? 0.55 : 0.28, t),
      i.gain.exponentialRampToValueAtTime(1e-4, t + 0.2),
      r.connect(i),
      i.connect(e.musicGain),
      r.start(t),
      r.stop(t + 0.22));
    let a = e.ctx.createBufferSource();
    a.buffer = e.noise;
    let o = e.ctx.createBiquadFilter();
    ((o.type = `lowpass`), (o.frequency.value = n ? 500 : 280));
    let s = e.ctx.createGain();
    (s.gain.setValueAtTime(n ? 0.35 : 0.16, t),
      s.gain.exponentialRampToValueAtTime(1e-4, t + 0.07),
      a.connect(o),
      o.connect(s),
      s.connect(e.musicGain),
      a.start(t),
      a.stop(t + 0.08));
  }
  function l(t, n, r = 0.11) {
    let i = e.ctx.createOscillator(),
      a = e.ctx.createGain();
    ((i.type = `triangle`),
      i.frequency.setValueAtTime(n * 1.02, t),
      i.frequency.exponentialRampToValueAtTime(n, t + 0.06),
      a.gain.setValueAtTime(1e-4, t),
      a.gain.exponentialRampToValueAtTime(r, t + 0.02),
      a.gain.exponentialRampToValueAtTime(1e-4, t + 0.42),
      i.connect(a),
      a.connect(e.musicGain),
      i.start(t),
      i.stop(t + 0.45));
  }
  let u = [293.66, 0, 440, 0, 392, 349.23, 523.25, 440],
    d = [220, 261.63, 196, 246.94, 174.61, 220, 233.08, 196];
  function f() {
    if (!e.ctx || e.mode === `off` || e.mode === `silent`) return;
    let t = e.ctx,
      n = e.mode === `boss` ? 0.28 : 0.42;
    for (; e.nextTime < t.currentTime + 0.25; ) {
      let t = e.step % 8;
      (e.mode === `boss`
        ? (c(e.nextTime, t % 2 == 0),
          d[t] && l(e.nextTime, d[t], t === 0 ? 0.1 : 0.07),
          t === 0 && l(e.nextTime, 110, 0.06))
        : ((t === 0 || t === 3 || t === 6) && c(e.nextTime, t === 0),
          u[t] && l(e.nextTime, u[t], 0.1)),
        (e.nextTime += n),
        e.step++);
    }
  }
  function p() {
    if (!t()) return;
    let n = e.ctx.currentTime + 0.02;
    ([196, 247, 294, 392].forEach((t, r) => {
      let i = e.ctx.createOscillator(),
        a = e.ctx.createGain();
      ((i.type = r === 0 ? `sawtooth` : `triangle`),
        (i.frequency.value = t),
        a.gain.setValueAtTime(1e-4, n),
        a.gain.exponentialRampToValueAtTime(r === 0 ? 0.12 : 0.06, n + 0.03),
        a.gain.exponentialRampToValueAtTime(1e-4, n + 1.1),
        i.connect(a),
        a.connect(e.sfxGain),
        i.start(n),
        i.stop(n + 1.15));
    }),
      c(n, !0));
  }
  function m(t) {
    if (!e.voice || !t) return;
    let n = performance.now();
    if (!(n - e.lastSay < 350)) {
      e.lastSay = n;
      try {
        if (!window.speechSynthesis) return;
        let e = new SpeechSynthesisUtterance(t);
        ((e.lang = `en-US`),
          (e.rate = 0.96),
          (e.pitch = 0.8),
          (e.volume = 0.9),
          window.speechSynthesis.cancel(),
          window.speechSynthesis.speak(e));
      } catch {}
    }
  }
  return {
    ensure: t,
    setVolumes: n,
    setMode: r,
    tick: f,
    impact: p,
    sfx: s,
    say: m,
    bus: e,
  };
}
var ue = `cocoro_samurai_legend_v1`;
function H() {
  return {
    v: 1,
    coins: 0,
    crystals: 0,
    xp: 0,
    upgrades: { hp: 0, atk: 0, spd: 0, def: 0, ki: 0 },
    achievements: [],
    board: [],
    checkpoint: null,
    best: { score: 0, combo: 0, rank: ``, time: 0 },
    cleared: [],
    seenHelp: !1,
    settings: { music: 0.45, sfx: 0.8, voice: !0, shake: !0, touch: `auto` },
  };
}
function U(e, t) {
  let n = Number(e) || 0;
  return Math.max(0, Math.min(t, Math.floor(n)));
}
function de(e) {
  let n = H();
  if (!e || typeof e != `object`) return n;
  let r = { ...n, ...e };
  r.upgrades = { ...n.upgrades, ...(e.upgrades || {}) };
  for (let e of t) r.upgrades[e.id] = U(r.upgrades[e.id], e.max);
  if (
    ((r.settings = { ...n.settings, ...(e.settings || {}) }),
    [`auto`, `on`, `off`].includes(r.settings.touch) ||
      (r.settings.touch = `auto`),
    (r.settings.music = Math.max(
      0,
      Math.min(1, Number(r.settings.music) || 0),
    )),
    (r.settings.sfx = Math.max(0, Math.min(1, Number(r.settings.sfx) || 0))),
    (r.settings.voice = !!r.settings.voice),
    (r.settings.shake = r.settings.shake !== !1),
    (r.coins = Math.max(0, Math.floor(Number(r.coins) || 0))),
    (r.crystals = Math.max(0, Math.floor(Number(r.crystals) || 0))),
    (r.xp = Math.max(0, Math.floor(Number(r.xp) || 0))),
    (r.achievements = Array.isArray(e.achievements)
      ? e.achievements.filter((e) => typeof e == `string`)
      : []),
    (r.board = Array.isArray(e.board) ? e.board.slice(0, 8) : []),
    (r.cleared = Array.isArray(e.cleared)
      ? [
          ...new Set(
            e.cleared.map(Number).filter((e) => e >= 1 && e <= i.length),
          ),
        ].sort((e, t) => e - t)
      : []),
    (r.seenHelp = !!e.seenHelp),
    e.checkpoint && typeof e.checkpoint == `object`)
  ) {
    let t = e.checkpoint,
      n = Math.max(1, Math.min(i.length, Math.floor(Number(t.level) || 1))),
      o = a(n).rooms.length;
    r.checkpoint = {
      level: n,
      room: Math.max(0, Math.min(o - 1, Math.floor(Number(t.room) || 0))),
      hp: Math.max(1, Number(t.hp) || 100),
      maxHp: Math.max(1, Number(t.maxHp) || 100),
      ki: Math.max(0, Number(t.ki) || 100),
      score: Math.max(0, Math.floor(Number(t.score) || 0)),
      comboBest: Math.max(0, Math.floor(Number(t.comboBest) || 0)),
      damageTaken: Math.max(0, Number(t.damageTaken) || 0),
      kills: Math.max(0, Math.floor(Number(t.kills) || 0)),
      runT: Math.max(0, Number(t.runT) || 0),
      runCoins: Math.max(0, Math.floor(Number(t.runCoins) || 0)),
      runXp: Math.max(0, Math.floor(Number(t.runXp) || 0)),
    };
  } else r.checkpoint = null;
  return (
    (r.best = {
      score: Math.max(0, Math.floor(Number(e.best?.score) || 0)),
      combo: Math.max(0, Math.floor(Number(e.best?.combo) || 0)),
      rank: typeof e.best?.rank == `string` ? e.best.rank : ``,
      time: Math.max(0, Number(e.best?.time) || 0),
    }),
    (r.v = 1),
    r
  );
}
function fe() {
  try {
    let e = localStorage.getItem(ue);
    return e ? de(JSON.parse(e)) : H();
  } catch {
    return H();
  }
}
function pe(e) {
  localStorage.setItem(ue, JSON.stringify(e));
}
function W(e) {
  return Math.min(30, 1 + Math.floor((Number(e) || 0) / 80));
}
function me(e, t) {
  return e.cost * (t + 1);
}
function G(e) {
  let t = e.upgrades,
    n = W(e.xp);
  return {
    level: n,
    maxHp: 100 + t.hp * 12,
    maxKi: 100 + t.ki * 10,
    atk: (1 + t.atk * 0.08) * (1 + (n - 1) * 0.015),
    speed: 310 * (1 + t.spd * 0.06),
    def: Math.min(0.42, t.def * 0.06),
  };
}
var he = new Set([
    `menu`,
    `levels`,
    `upgrades`,
    `achievements`,
    `board`,
    `settings`,
    `tutorial`,
  ]),
  K = 2200;
function q() {
  let m = document.getElementById(`c`),
    g = m.getContext(`2d`),
    _ = le(),
    v = fe(),
    y = new Set(),
    b = new Set(),
    x = new Set(),
    S = new Set(),
    C = [],
    w = null,
    T = {
      mode: `menu`,
      time: 0,
      cssW: 1,
      cssH: 1,
      dpr: 1,
      scale: 1,
      viewW: 1280,
      viewH: 720,
      camX: 0,
      camY: 0,
      shake: 0,
      fade: 0,
      room: null,
      roomIndex: 0,
      levelId: 1,
      fatalityKind: `blue`,
      nextLevelId: null,
      player: null,
      enemies: [],
      projectiles: [],
      particles: [],
      petals: [],
      popups: [],
      pickups: [],
      props: [],
      ghosts: [],
      trail: [],
      combo: 0,
      comboT: 0,
      comboBest: 0,
      comboPop: 0,
      score: 0,
      runCoins: 0,
      runXp: 0,
      damageTaken: 0,
      kills: 0,
      runT: 0,
      exitOpen: !1,
      exitSaid: !1,
      exitX: 0,
      showcase: !0,
      showHero: {
        x: 700,
        y: 640,
        face: 1,
        pose: `idle`,
        anim: 0,
        iframe: 0,
        dodgeT: 0,
        flash: 0,
      },
      showFoes: [],
      hitstop: 0,
      slow: 0,
      debug: new URLSearchParams(location.search).has(`debug`),
      nextId: 1,
      finishProg: 0,
      finishLock: 0,
      finishT: 0,
      cine: null,
      transition: null,
      deathT: 0,
      hintT: 0,
      calloutT: 0,
      calloutPri: 0,
      freezePlay: !1,
      returnTo: `menu`,
      stats: G(v),
      victoryDone: !1,
      saidStart: !1,
      stickX: 0,
    };
  ((T.showFoes = [F(`grunt`, 900)]),
    (T.room = ce(`gate`, 1280, 1, !1)),
    (T.room.name = `Sakura Village`));
  function E(e) {
    return document.getElementById(e);
  }
  function D() {
    pe(v);
  }
  function O() {
    let e = v.settings.touch;
    return e === `on`
      ? !0
      : e === `off`
        ? !1
        : window.matchMedia(`(pointer: coarse)`).matches ||
          window.innerWidth < 860;
  }
  function ee() {
    let e = m.getBoundingClientRect();
    ((T.cssW = Math.max(1, e.width)),
      (T.cssH = Math.max(1, e.height)),
      (T.dpr = Math.min(2, window.devicePixelRatio || 1)),
      (m.width = Math.round(T.cssW * T.dpr)),
      (m.height = Math.round(T.cssH * T.dpr)),
      (T.viewH = T.cssH < 520 ? 560 : 720),
      (T.scale = T.cssH / T.viewH),
      (T.viewW = T.cssW / T.scale),
      T.room && T.viewW + 40 > T.room.w && (T.room.w = T.viewW + 80));
  }
  function k(e, t, n, r, i) {
    T.popups.push({
      x: e + (Math.random() - 0.5) * 28,
      y: t,
      text: n,
      color: r,
      big: !!i,
      life: 0.75,
      vy: -46,
    });
  }
  function A(e, t, n, r, i) {
    for (let a = 0; a < r; a++) {
      let r = Math.random() * Math.PI * 2,
        a = i * (0.35 + Math.random());
      T.particles.push({
        x: e,
        y: t,
        vx: Math.cos(r) * a,
        vy: Math.sin(r) * a - 30,
        life: 0.35 + Math.random() * 0.3,
        max: 0.65,
        r: 2 + Math.random() * 3,
        color: n,
        g: 500,
      });
    }
    T.particles.length > 420 && T.particles.splice(0, T.particles.length - 420);
  }
  function j(e, t, n, r, i) {
    if (T.calloutT > 0 && i < T.calloutPri) return;
    ((T.calloutT = r), (T.calloutPri = i));
    let a = E(`callout`);
    ((a.querySelector(`b`).textContent = e),
      (a.querySelector(`small`).textContent = t || ``),
      (a.className = `show ${n || `info`}`));
  }
  function M(e) {
    let t = document.createElement(`div`);
    ((t.className = `toast`),
      (t.textContent = e),
      E(`toasts`).appendChild(t),
      setTimeout(() => t.remove(), 2600));
  }
  function N(e) {
    if (v.achievements.includes(e)) return;
    v.achievements.push(e);
    let t = n.find((t) => t.id === e);
    (t && M(`Achievement: ${t.name}`), D());
  }
  function ne(e) {
    let t = W(v.xp);
    ((v.xp += e), (T.runXp += e));
    let n = W(v.xp);
    (n > t && M(`Level ${n}`), D());
  }
  function re(e) {
    ((v.coins += e), (T.runCoins += e), (T.score += e * 5), D());
  }
  function P(e) {
    v.settings.shake &&
      (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
        (T.shake = Math.min(18, T.shake + e)));
  }
  function F(e, t) {
    let n = s[e];
    return {
      id: T.nextId++,
      type: e,
      x: t,
      y: 640,
      vx: 0,
      vy: 0,
      face: -1,
      hp: n.hp,
      maxHp: n.hp,
      speed: n.speed,
      dmg: n.dmg,
      reach: n.reach,
      windup: n.windup,
      active: n.active,
      score: n.score,
      coins: n.coins,
      xp: n.xp,
      h: n.h,
      w: n.w,
      scale: e === `boss` ? 1.36 : 1,
      attack: null,
      attackCd: 0.45 + Math.random() * 0.7,
      hitstun: 0,
      flash: 0,
      pose: `idle`,
      anim: 0,
      onGround: !0,
      phase: 1,
      intro: e === `boss` ? 1.25 : 0,
      phasePause: 0,
      summoned: !1,
      seed: Math.floor(Math.random() * 9999),
      blocking: 0,
      dead: !1,
    };
  }
  function ie() {
    let e = T.stats;
    return {
      x: 150,
      y: 640,
      vx: 0,
      vy: 0,
      face: 1,
      hp: e.maxHp,
      maxHp: e.maxHp,
      ki: e.maxKi,
      maxKi: e.maxKi,
      onGround: !0,
      wasGround: !0,
      jumps: 0,
      coyote: 0,
      jumpBuf: 0,
      jumpCut: !1,
      attack: null,
      comboStep: 0,
      comboWindow: 0,
      atkBuf: 0,
      blocking: !1,
      wasBlocking: !1,
      blockAge: 99,
      dodgeT: 0,
      dodgeCd: 0,
      specialT: 0,
      specialCd: 0,
      boltShot: !1,
      specialHits: {},
      hurtT: 0,
      iframe: 0,
      flash: 0,
      counterWindow: 0,
      pose: `idle`,
      anim: 0,
      dead: !1,
      stepT: 0,
      hurt: null,
      atkBox: null,
    };
  }
  function I(e) {
    return !e || e.dodgeT > 0 || e.dead
      ? null
      : { x: e.x - 22, y: e.y - 158, w: 44, h: 158 };
  }
  function L(e) {
    return { x: e.x - e.w / 2, y: e.y - e.h, w: e.w, h: e.h };
  }
  function R(e, t, n, r, i) {
    return { x: t === 1 ? e + 18 : e - 18 - n, y: 640 - r, w: n, h: i };
  }
  function ae() {
    T.petals = [];
    for (let e = 0; e < 58; e++)
      T.petals.push({
        x: Math.random() * 1800,
        y: Math.random() * 700,
        vy: 28 + Math.random() * 46,
        vx: 12 + Math.random() * 26,
        rot: Math.random() * 6,
        vr: (Math.random() - 0.5) * 2.4,
        color: Math.random() > 0.5 ? `#ffb7c5` : `#fff0f5`,
        front: e % 4 == 0,
      });
  }
  function oe(e, t, n) {
    for (let r = 0; r < n; r++)
      T.pickups.push({
        kind: `coin`,
        x: e,
        y: t - 50,
        vx: (Math.random() - 0.5) * 220,
        vy: -260 - Math.random() * 80,
        value: 1,
        magnet: 0.28,
      });
  }
  function se() {
    T.player &&
      ((v.checkpoint = {
        level: T.levelId || 1,
        room: T.roomIndex,
        hp: T.player.hp,
        maxHp: T.stats.maxHp,
        ki: T.player.ki,
        score: T.score,
        comboBest: T.comboBest,
        damageTaken: T.damageTaken,
        kills: T.kills,
        runT: T.runT,
        runCoins: T.runCoins,
        runXp: T.runXp,
      }),
      D());
  }
  function z() {
    return a(T.levelId || 1);
  }
  function B(e) {
    let t = z(),
      n = t.rooms[e];
    if (!n) return;
    ((T.calloutT = 0), (T.calloutPri = 0), (T.roomIndex = e));
    let i = ce(n.theme, T.viewW, t.id * 100 + e + 3, !!n.platforms);
    ((i.name = n.name),
      (T.room = i),
      (T.enemies = []),
      (T.projectiles = []),
      (T.props = []),
      (T.pickups = []),
      (T.popups = []),
      (T.exitOpen = !1),
      (T.exitSaid = !1),
      (T.exitX = i.w - 90));
    let a = T.player;
    ((a.x = 140),
      (a.y = 640),
      (a.vx = 0),
      (a.vy = 0),
      (a.attack = null),
      (a.specialT = 0),
      (a.onGround = !0),
      (T.camX = 0));
    let o = [],
      s = n.foes ? n.foes.length : 0,
      c = Math.max(460, Math.min(i.w * 0.48, T.viewW * 0.55)),
      l = Math.min(i.w - 120, c + Math.max(220, T.viewW * 0.38));
    for (let e = 0; e < s; e++) {
      let t = s === 1 ? l : c + ((l - c) * e) / (s - 1);
      o.push(t);
    }
    let u = Math.max(0, t.id - 1);
    if (
      ((n.foes || []).forEach((e, r) => {
        let i = F(e, o[r]);
        ((i.maxHp = Math.round(i.maxHp * (1 + u * 0.12))),
          (i.hp = i.maxHp),
          (i.dmg = Math.round(i.dmg * (1 + u * 0.08))),
          (i.speed = Math.round(i.speed * (1 + u * 0.04))),
          !n.boss &&
            r === s - 1 &&
            t.id > 1 &&
            ((i.maxHp = Math.round(i.maxHp * 1.4)),
            (i.hp = i.maxHp),
            (i.captain = !0),
            (i.scale = 1.08)),
          T.enemies.push(i));
      }),
      n.boss)
    ) {
      let e = r[n.boss] || r.kiba,
        t = F(`boss`, Math.min(i.w - 170, Math.max(520, T.viewW * 0.68)));
      ((t.bossId = e.id),
        (t.hp = e.hp),
        (t.maxHp = e.hp),
        (t.speed = e.speed),
        (t.dmg = e.dmg),
        (t.reach = e.reach),
        (t.scale = e.scale),
        (T.fatalityKind = e.fatality),
        T.enemies.push(t),
        _.setMode(`boss`),
        _.sfx.roar(),
        j(e.name, e.title, `boss`, 1.8, 4),
        _.say(e.say),
        (E(`bossName`).textContent = `${e.name} · ${e.title}`));
    } else {
      _.setMode(`village`);
      let r = e === 0 ? `Level ${t.id} · ${t.name}` : `Clear the path`;
      j(n.name.toUpperCase(), r, `info`, 1.5, 2);
      let i = T.enemies.find((e) => e.captain);
      i && k(i.x, 440, `OTD CAPTAIN`, `#ffd76a`, !0);
    }
    if (n.crates)
      for (let e = 0; e < n.crates; e++)
        T.props.push({ kind: `crate`, x: 250 + e * 90, y: 640, alive: !0 });
    (n.heal &&
      T.pickups.push({
        kind: `heal`,
        x: Math.min(i.w * 0.3, 460),
        y: 624,
        vx: 0,
        vy: 0,
        magnet: 99,
      }),
      t.id === 1 && e === 0 && (T.hintT = 7),
      se());
  }
  function V(e) {
    if (
      ((T.stats = G(v)),
      (T.victoryDone = !1),
      (T.freezePlay = !1),
      (T.deathT = 0),
      (T.cine = null),
      (T.transition = null),
      (T.player = ie()),
      (T.combo = 0),
      (T.comboT = 0),
      e)
    )
      ((T.levelId = e.level || 1),
        (T.score = e.score),
        (T.comboBest = e.comboBest),
        (T.damageTaken = e.damageTaken),
        (T.kills = e.kills),
        (T.runT = e.runT),
        (T.runCoins = e.runCoins),
        (T.runXp = e.runXp),
        (T.player.hp = d(e.hp, 1, T.stats.maxHp)),
        (T.player.ki = d(e.ki, 0, T.stats.maxKi)),
        e.maxHp &&
          T.stats.maxHp > e.maxHp &&
          (T.player.hp = d(
            T.player.hp + (T.stats.maxHp - e.maxHp),
            1,
            T.stats.maxHp,
          )),
        B(e.room));
    else if (
      ((T.score = 0),
      (T.comboBest = 0),
      (T.damageTaken = 0),
      (T.kills = 0),
      (T.runT = 0),
      (T.runCoins = 0),
      (T.runXp = 0),
      (T.player.hp = T.stats.maxHp),
      (T.player.ki = T.stats.maxKi),
      B(0),
      !T.saidStart)
    ) {
      let e = z();
      (_.say(e.id === 1 ? `Sakura Village. The legend begins.` : e.name),
        (T.saidStart = !0));
    }
    ((T.mode = `play`), q(null));
  }
  function ue() {
    for (let e of i) if (!v.cleared.includes(e.id)) return e.id;
    return 1;
  }
  function H(e) {
    (_.ensure(),
      _.setMode(`village`),
      (T.levelId = e),
      (T.saidStart = !1),
      V(null));
  }
  function U() {
    H(ue());
  }
  function de() {
    if ((_.ensure(), !v.checkpoint)) return U();
    V(v.checkpoint);
  }
  function q(e) {
    for (let t of [
      `menu`,
      `levels`,
      `upgrades`,
      `achievements`,
      `board`,
      `settings`,
      `tutorial`,
      `pause`,
      `victory`,
      `dead`,
    ]) {
      let n = E(`screen-${t}`);
      n && n.classList.toggle(`hidden`, t !== e);
    }
  }
  function J(e) {
    (T.mode === `pause`
      ? (T.returnTo = `pause`)
      : (he.has(T.mode) || T.mode === `menu`) && (T.returnTo = `menu`),
      e === `settings` && T.mode === `pause` && (T.freezePlay = !0),
      e === `menu` && (T.freezePlay = !1),
      (T.mode = e),
      e === `levels` && ge(),
      e === `upgrades` && _e(),
      e === `achievements` && ve(),
      e === `board` && ye(),
      e === `settings` && be(),
      e === `menu` && Y(),
      q(e));
  }
  function Y() {
    let e = W(v.xp),
      t = v.best.score
        ? `Best ${v.best.score} (${v.best.rank || `—`})`
        : `No clear yet`;
    ((E(`menu-meta`).textContent =
      `LV ${e}  ·  ${v.coins} coins  ·  ${v.crystals} crystal${v.crystals === 1 ? `` : `s`}  ·  ${t}`),
      (E(`btn-continue`).disabled = !v.checkpoint));
  }
  function ge() {
    let t = E(`level-grid`),
      built = i.length;
    t.innerHTML = ``;
    for (let n of e) {
      let e = document.createElement(`section`);
      e.className = `world`;
      let r = document.createElement(`h3`);
      ((r.textContent = `World ${n.id} — ${n.name}`), e.appendChild(r));
      let row = document.createElement(`div`);
      ((row.className = `level-row`),
        n.levels.forEach((e, t) => {
          let r = (n.id - 1) * 5 + t + 1,
            s = r <= built && o(v, r),
            c = r <= built && v.cleared.includes(r),
            l = document.createElement(`button`);
          ((l.className = s ? `level on` : `level locked`), (l.disabled = !s));
          let u =
            r > built
              ? `Later stage`
              : s
                ? c
                  ? `CLEARED · replay`
                  : `PLAYABLE`
                : `Clear level ${r - 1}`;
          ((l.innerHTML = `<b>${r}</b><span>${e}</span><small>${u}</small>`),
            s && (l.onclick = () => H(r)),
            row.appendChild(l));
        }),
        e.appendChild(row),
        t.appendChild(e));
    }
  }
  function _e() {
    E(`upgrade-wallet`).textContent =
      `${v.coins} coins  ·  LV ${W(v.xp)}  ·  Sakura ${[1, 2, 3, 4, 5].filter((e) => v.cleared.includes(e)).length}/5  ·  Bamboo ${[6, 7, 8, 9, 10].filter((e) => v.cleared.includes(e)).length}/5  ·  Shadow ${[11, 12, 13, 14, 15].filter((e) => v.cleared.includes(e)).length}/5. Thunder Strike is unlocked. Other arts are later stages.`;
    let e = E(`upgrade-list`);
    e.innerHTML = ``;
    for (let n of t) {
      let t = v.upgrades[n.id],
        r = me(n, t),
        i = document.createElement(`div`);
      i.className = `up-row`;
      let a = t >= n.max;
      i.innerHTML = `<div><b>${n.name}</b><span>${n.desc}</span><i>${`●`.repeat(t)}${`○`.repeat(n.max - t)}</i></div>`;
      let o = document.createElement(`button`);
      ((o.textContent = a ? `MAX` : `${r} coins`),
        (o.disabled = a || v.coins < r),
        (o.onclick = () => {
          if (v.upgrades[n.id] >= n.max) return;
          let e = me(n, v.upgrades[n.id]);
          v.coins < e ||
            ((v.coins -= e),
            (v.upgrades[n.id] += 1),
            D(),
            _.sfx.ui(),
            _e(),
            Y());
        }),
        i.appendChild(o),
        e.appendChild(i));
    }
  }
  function ve() {
    let e = E(`ach-list`);
    e.innerHTML = ``;
    for (let t of n) {
      let n = v.achievements.includes(t.id),
        r = document.createElement(`div`);
      ((r.className = `ach ${n ? `on` : ``}`),
        (r.innerHTML = `<b>${n ? `✦` : `✧`} ${t.name}</b><span>${t.desc}</span>`),
        e.appendChild(r));
    }
  }
  function ye() {
    let e = E(`board-list`);
    e.innerHTML = v.board.length
      ? v.board
          .map((e, t) => {
            let n = new Date(e.date).toLocaleDateString(`en`, {
              month: `short`,
              day: `numeric`,
            });
            return `<div class="board-row"><b>#${t + 1} ${e.rank}</b><span>${e.score} pts · combo ${e.combo} · ${h(e.time)}${e.level ? ` · ${e.level}` : ``}</span><small>${n}</small></div>`;
          })
          .join(``)
      : `<p class="empty">No clears yet. Win Level 1 and your local rank is posted on this device.</p>`;
  }
  function be() {
    ((E(`set-music`).value = v.settings.music),
      (E(`set-sfx`).value = v.settings.sfx),
      (E(`set-voice`).checked = v.settings.voice),
      (E(`set-shake`).checked = v.settings.shake),
      (E(`set-touch`).value = v.settings.touch));
  }
  function xe() {
    ((v.settings.music = Number(E(`set-music`).value)),
      (v.settings.sfx = Number(E(`set-sfx`).value)),
      (v.settings.voice = E(`set-voice`).checked),
      (v.settings.shake = E(`set-shake`).checked),
      (v.settings.touch = E(`set-touch`).value),
      (_.bus.voice = v.settings.voice),
      _.setVolumes(v.settings.music, v.settings.sfx),
      D());
  }
  function Se() {
    ((T.comboT = 2.45),
      (T.combo += 1),
      T.combo > T.comboBest && (T.comboBest = T.combo),
      (T.comboPop = 0.85));
    let e = u[T.combo];
    e &&
      (j(e, ``, `combo`, 1.05, 3),
      (T.score += T.combo * 12),
      T.combo === 5 && N(`combo5`),
      T.combo === 10 && N(`combo10`),
      T.combo === 20 && N(`combo20`));
  }
  function Ce() {
    ((T.combo = 0), (T.comboT = 0));
  }
  function we(e, t, n, r, i, a) {
    if (
      !e ||
      e.dead ||
      (e.type === `boss` && e.hp <= 0) ||
      T.mode !== `play` ||
      e.intro > 0 ||
      e.phasePause > 0
    )
      return;
    let o = Math.max(1, Math.round(t * T.stats.atk)),
      s = e.blocking > 0 && (T.player.x - e.x) * e.face > -8;
    (s &&
      ((o = Math.max(1, Math.round(o * 0.2))),
      A(e.x, e.y - 90, `#f4f7fb`, 6, 80),
      k(e.x, e.y - 130, `GUARD`, `#d7e4ff`, !1),
      (e.vx += -e.face * 40)),
      (e.hp -= o),
      (e.flash = 0.12));
    let c = e.type === `boss` ? 0.28 : 1;
    (e.type === `boss` && e.phase >= 3 && e.attack
      ? ((e.hitstun = 0.06), (e.vx = T.player.face * n * 0.12))
      : ((e.attack = null),
        (e.hitstun = s ? 0.08 : i),
        (e.vx = T.player.face * n * c),
        (e.vy = -r * (e.type === `boss` ? 0.16 : 1)),
        (e.onGround = !1)),
      Se(),
      (T.score += Math.round(o * (1 + Math.min(3, T.combo * 0.08)))),
      k(e.x + T.player.face * 20, e.y - 110, String(o), `#fff6d8`, !1),
      a &&
        k(T.player.x + T.player.face * 70, T.player.y - 150, a, `#e8f6ff`, !0),
      _.sfx.hit(),
      A(e.x, e.y - 100, `#fff`, 8, 120),
      A(e.x, e.y - 90, e.type === `boss` ? `#ff5a3c` : `#ffd76a`, 8, 90),
      P(e.type === `boss` ? 5 : 3),
      (T.hitstop = Math.max(T.hitstop, e.type === `boss` ? 0.04 : 0.028)),
      T.player.attack &&
        T.player.attack.name === `air` &&
        (T.player.vy = Math.min(T.player.vy, -240)),
      e.hp <= 0 && Te(e));
  }
  function Te(e) {
    e.type === `boss`
      ? ((e.hp = 0), We())
      : e.dead ||
        ((e.dead = !0),
        (T.kills += 1),
        (T.score += e.score),
        ne(e.xp),
        oe(e.x, e.y, e.coins),
        A(e.x, e.y - 80, `#241028`, 18, 160),
        A(e.x, e.y - 90, `#ffd76a`, 10, 110),
        k(e.x, e.y - 140, `OTD DOWN`, `#ffd76a`, !0),
        _.sfx.ko(),
        P(5),
        T.kills === 1 && N(`first_blood`));
  }
  function X(e, t, n) {
    let r = T.player;
    if (!r || r.dead || T.mode !== `play` || r.iframe > 0 || r.dodgeT > 0)
      return;
    let i = (t - r.x) * r.face >= -12,
      a = e,
      o = !1;
    (r.blocking &&
      i &&
      ((o = !0),
      r.blockAge < 0.14
        ? ((a = 0),
          (r.counterWindow = 0.48),
          (r.ki = Math.min(r.maxKi, r.ki + 10)),
          k(r.x, r.y - 160, `COUNTER!`, `#d8f4ff`, !0),
          _.sfx.perfect(),
          A(r.x + r.face * 30, r.y - 100, `#bfe9ff`, 12, 140),
          P(4),
          (T.hitstop = Math.max(T.hitstop, 0.05)),
          N(`perfect`),
          n && ((n.hitstun = 0.7), (n.attack = null), (n.vx = -n.face * 120)))
        : ((a = Math.max(1, Math.round(e * (1 - T.stats.def) * 0.22))),
          k(r.x, r.y - 150, `BLOCK!`, `#f4f7fb`, !0),
          _.sfx.block(),
          (r.ki = Math.min(r.maxKi, r.ki + 6)),
          A(r.x + r.face * 24, r.y - 100, `#fff`, 6, 70))),
      a <= 0 ||
        (o || (a = Math.max(1, Math.round(a * (1 - T.stats.def)))),
        (r.hp -= a),
        (T.damageTaken += a),
        (r.hurtT = 0.32),
        (r.iframe = o ? 0.35 : 0.9),
        (r.flash = 0.12),
        (r.vx = Math.sign(r.x - t || r.face) * 240),
        (r.vy = -220),
        (r.onGround = !1),
        (r.attack = null),
        (r.comboStep = 0),
        o || Ce(),
        k(r.x, r.y - 140, `-${a}`, `#ffb4a8`, !1),
        _.sfx.hurt(),
        P(6),
        r.hp <= 0 &&
          ((r.hp = 0), (r.dead = !0), (T.deathT = 0.7), _.sfx.ko())));
  }
  function Ee() {
    let e = null,
      t = 1e9;
    for (let n of T.enemies) {
      if (n.dead || n.hp <= 0) continue;
      let r = Math.abs(n.x - T.player.x);
      r < t && ((t = r), (e = n));
    }
    return e;
  }
  function Z(e) {
    let t = T.player,
      n = t.counterWindow > 0 && e !== `air`,
      r = n ? `slash` : e,
      i = c[r];
    if (!i) return;
    if (Math.abs(t.vx) < 40) {
      let e = Ee();
      e && (t.face = e.x >= t.x ? 1 : -1);
    }
    (n && (t.counterWindow = 0),
      (t.attack = {
        name: r,
        step: e,
        t: 0,
        dur: i.dur,
        cancel: i.cancel,
        lock: i.lock,
        hit: {},
        counter: n,
      }),
      (t.comboWindow = 0));
    let a = n ? `COUNTER!` : i.word;
    (k(t.x + t.face * 64, t.y - 148, a, n ? `#d8f4ff` : `#f7fbff`, !0),
      i.sfx === `slash` || n ? _.sfx.slash() : _.sfx.swing(),
      n && _.sfx.perfect());
  }
  function De(e, t, n) {
    let r = T.player;
    if (
      ((r.flash = Math.max(0, r.flash - e)),
      r.hurtT > 0 && (r.hurtT -= e),
      r.iframe > 0 && (r.iframe -= e),
      r.dodgeT > 0 && (r.dodgeT -= e),
      r.dodgeCd > 0 && (r.dodgeCd -= e),
      r.specialCd > 0 && (r.specialCd -= e),
      r.specialT > 0 && (r.specialT -= e),
      r.counterWindow > 0 && (r.counterWindow -= e),
      r.comboWindow > 0 &&
        ((r.comboWindow -= e), r.comboWindow <= 0 && (r.comboStep = 0)),
      (r.jumpBuf = t.jump ? 0.12 : Math.max(0, r.jumpBuf - e)),
      (r.atkBuf = n && t.attack ? 0.14 : Math.max(0, r.atkBuf - e)),
      n &&
        t.dodge &&
        r.dodgeCd <= 0 &&
        r.hurtT <= 0 &&
        r.dodgeT <= 0 &&
        !r.dead &&
        ((r.dodgeT = 0.32),
        (r.dodgeCd = 0.62),
        (r.dodgeFace = Math.abs(t.x) > 0.2 ? Math.sign(t.x) : r.face),
        (r.face = r.dodgeFace),
        (r.attack = null),
        (r.iframe = Math.max(r.iframe, 0.28)),
        _.sfx.whoosh(),
        k(r.x, r.y - 130, `DODGE!`, `#fff6d2`, !0),
        T.ghosts.push({
          x: r.x,
          y: r.y,
          face: r.face,
          pose: `dodge`,
          anim: 0.3,
          time: T.time,
          life: 0.18,
          flash: 0,
        })),
      n &&
        t.special &&
        r.specialCd <= 0 &&
        r.specialT <= 0 &&
        r.hurtT <= 0 &&
        r.dodgeT <= 0 &&
        (r.ki >= 36
          ? ((r.ki -= 36),
            (r.specialT = 0.55),
            (r.specialCd = 1.05),
            (r.boltShot = !1),
            (r.specialHits = {}),
            (r.attack = null),
            _.sfx.thunder(),
            k(r.x, r.y - 170, `THUNDER STRIKE!`, `#d8f4ff`, !0),
            j(`THUNDER STRIKE!`, ``, `info`, 0.9, 3),
            _.say(`Thunder Strike!`),
            N(`thunder`))
          : (k(r.x, r.y - 150, `NEED KI`, `#c9d4ff`, !1), _.sfx.block())),
      n &&
        r.atkBuf > 0 &&
        r.hurtT <= 0 &&
        r.dodgeT <= 0 &&
        r.specialT <= 0 &&
        !r.dead)
    ) {
      if (r.attack && r.attack.t >= c[r.attack.name]?.cancel) {
        let e = l.indexOf(r.attack.step),
          t = e >= 0 && e < l.length - 1 ? l[e + 1] : `jab`;
        (Z(r.onGround ? t : `air`), (r.atkBuf = 0));
      } else if (!r.attack) {
        if (!r.onGround) Z(`air`);
        else if (r.comboWindow > 0) {
          let e = l.indexOf(r.comboStep);
          Z(e >= 0 && e < l.length - 1 ? l[e + 1] : `jab`);
        } else Z(`jab`);
        r.atkBuf = 0;
      }
    }
    if (
      ((r.blocking =
        n &&
        t.block &&
        r.hurtT <= 0 &&
        r.dodgeT <= 0 &&
        !r.attack &&
        r.specialT <= 0 &&
        r.onGround &&
        !r.dead),
      r.blocking && !r.wasBlocking && (r.blockAge = 0),
      (r.blockAge = r.blocking ? r.blockAge + e : 99),
      (r.wasBlocking = r.blocking),
      r.dodgeT > 0)
    )
      ((r.vx = r.dodgeFace * 680), (r.vy = r.onGround ? 0 : r.vy));
    else if (r.hurtT > 0.12) r.vx = f(r.vx, 0, Math.min(1, e * 3));
    else {
      let n = r.attack && r.attack.t < r.attack.lock,
        i = r.onGround ? 3200 : 1700;
      Math.abs(t.x) > 0.15 && r.specialT <= 0.12
        ? ((r.vx += Math.sign(t.x) * i * e),
          !r.attack && r.specialT <= 0 && (r.face = t.x > 0 ? 1 : -1))
        : r.onGround && (r.vx = f(r.vx, 0, Math.min(1, e * 12)));
      let a = T.stats.speed * (r.blocking ? 0.32 : n ? 0.45 : 1);
      r.vx = d(r.vx, -a, a);
    }
    (r.jumpBuf > 0 &&
      r.hurtT <= 0 &&
      r.dodgeT <= 0 &&
      !r.dead &&
      ((r.onGround || r.coyote > 0) && r.jumps === 0
        ? ((r.vy = -860),
          (r.jumps = 1),
          (r.onGround = !1),
          (r.coyote = 0),
          (r.jumpBuf = 0),
          (r.jumpCut = !1),
          _.sfx.jump(),
          A(r.x, r.y, `#fff`, 5, 50))
        : r.jumps === 1
          ? ((r.vy = -740),
            (r.jumps = 2),
            (r.jumpBuf = 0),
            (r.jumpCut = !1),
            _.sfx.jump(),
            A(r.x, r.y - 20, `#ffe1ec`, 8, 70))
          : !r.onGround &&
            r.jumps === 0 &&
            r.coyote <= 0 &&
            ((r.jumps = 1),
            (r.vy = -740),
            (r.jumps = 2),
            (r.jumpBuf = 0),
            _.sfx.jump())),
      !t.jumpHeld &&
        r.vy < -220 &&
        !r.jumpCut &&
        ((r.vy *= 0.55), (r.jumpCut = !0)),
      r.attack &&
        ((r.attack.t += e),
        r.attack.t >= r.attack.dur &&
          ((r.comboStep = r.attack.step),
          (r.comboWindow = 0.42),
          (r.attack = null))));
    let i = r.onGround;
    (!r.onGround || r.vy < 0 || r.dodgeT <= 0) &&
      (r.dodgeT > 0 && i
        ? ((r.vy = 0), (r.y = 640))
        : ((r.vy = Math.min(1200, r.vy + K * e)), (r.y += r.vy * e)));
    let a = !1;
    if (r.vy >= 0) {
      let t = r.y - r.vy * e;
      for (let e of T.room.platforms || [])
        if (r.x > e.x + 8 && r.x < e.x + e.w - 8 && t <= e.y && r.y >= e.y) {
          ((r.y = e.y), (r.vy = 0), (a = !0));
          break;
        }
      r.y >= 640 && ((r.y = 640), (r.vy = 0), (a = !0));
    }
    (a
      ? (!i && r.vy, (r.onGround = !0), (r.jumps = 0), (r.coyote = 0.12))
      : ((r.coyote = i ? 0.12 : Math.max(0, r.coyote - e)), (r.onGround = !1)),
      i && !r.onGround && (r.coyote = Math.max(r.coyote, 0.12)),
      !i && r.onGround && _.sfx.land(),
      (r.x += r.vx * e),
      (r.x = d(r.x, 46, T.room.w - 46)),
      r.specialT <= 0 &&
        r.ki < r.maxKi &&
        (r.ki = Math.min(r.maxKi, r.ki + (r.blocking ? 18 : 11) * e)),
      r.onGround &&
        Math.abs(r.vx) > 90 &&
        !r.attack &&
        r.dodgeT <= 0 &&
        ((r.stepT -= e),
        r.stepT <= 0 &&
          ((r.stepT = 0.16), A(r.x, r.y, `rgba(90,60,40,0.45)`, 2, 30))),
      r.dodgeT > 0.16 &&
        Math.random() < 0.4 &&
        T.ghosts.push({
          x: r.x,
          y: r.y,
          face: r.face,
          pose: r.pose,
          anim: r.anim,
          life: 0.16,
          flash: 0,
        }),
      (r.pose = Oe(r)),
      (r.anim = ke(r)),
      (r.hurt = I(r)));
  }
  function Oe(e) {
    return e.dead
      ? `hurt`
      : e.dodgeT > 0
        ? `dodge`
        : e.specialT > 0
          ? `special`
          : e.hurtT > 0.04
            ? `hurt`
            : e.attack
              ? e.attack.name
              : e.blocking
                ? `block`
                : e.onGround
                  ? Math.abs(e.vx) > 36
                    ? `run`
                    : `idle`
                  : e.vy < 40
                    ? `jump`
                    : `fall`;
  }
  function ke(e) {
    return e.dodgeT > 0
      ? 1 - e.dodgeT / 0.32
      : e.specialT > 0
        ? 1 - e.specialT / 0.55
        : e.attack
          ? e.attack.t / e.attack.dur
          : e.hurtT > 0
            ? 1 - e.hurtT / 0.32
            : 0;
  }
  function Ae(e, t) {
    ((e.flash = Math.max(0, e.flash - t)),
      e.hitstun > 0 && (e.hitstun -= t),
      e.attackCd > 0 && (e.attackCd -= t),
      e.blocking > 0 && ((e.blocking -= t), (e.vx = 0)));
    let n = T.player,
      r = e.hitstun > 0;
    (!r && e.hp > 0 && !e.attack && e.blocking <= 0 && je(e, t, n),
      e.attack && Me(e, t, n),
      (r || !e.onGround) && (e.vx *= 0.08 ** t),
      (e.vy = Math.min(1200, e.vy + K * t)),
      (e.x += e.vx * t),
      (e.y += e.vy * t),
      e.y >= 640
        ? ((e.y = 640), (e.vy = 0), (e.onGround = !0))
        : (e.onGround = !1),
      (e.x = d(e.x, 48, T.room.w - 48)),
      (e.pose = r
        ? `hurt`
        : e.attack
          ? `attack`
          : e.blocking > 0
            ? `block`
            : Math.abs(e.vx) > 20
              ? `run`
              : `idle`),
      (e.anim = e.attack ? e.attack.t / e.attack.dur : 0));
  }
  function je(e, t, n) {
    let r = n.x - e.x,
      i = Math.abs(r);
    ((e.face = r >= 0 ? 1 : -1),
      e.type === `katana` && n.attack && i < 180 && Math.random() < t * 1.4
        ? ((e.blocking = 0.48), (e.vx = 0))
        : e.type === `ninja` && i > 230 && i < 520 && e.attackCd <= 0
          ? ((e.attack = {
              name: `star`,
              t: 0,
              dur: 0.7,
              hitAt: 0.28,
              reach: 40,
              dmg: 8,
              resolved: !1,
              didHit: !1,
            }),
            (e.attackCd = 1.5),
            (e.vx = 0))
          : ((e.vx =
              i > (e.type === `ninja` ? 120 : e.type === `katana` ? 96 : 70)
                ? Math.sign(r) * e.speed
                : 0),
            e.attackCd <= 0 &&
              i < (e.type === `ninja` ? 210 : e.reach + 36) &&
              (e.type === `ninja`
                ? ((e.attack = {
                    name: `dash`,
                    t: 0,
                    dur: 0.55,
                    hitAt: 0.16,
                    hitEnd: 0.42,
                    reach: 70,
                    dmg: e.dmg,
                    continuous: !0,
                    didHit: !1,
                    resolved: !1,
                  }),
                  (e.attackCd = 1.15))
                : ((e.attack = {
                    name: `strike`,
                    t: 0,
                    dur: e.windup + 0.34,
                    hitAt: e.windup,
                    reach: e.reach,
                    dmg: e.dmg,
                    resolved: !1,
                    didHit: !1,
                  }),
                  (e.attackCd = e.type === `katana` ? 0.95 : 1.05)),
              (e.vx = 0))));
  }
  function Me(e, t, n) {
    let r = e.attack;
    ((r.t += t),
      r.name === `dash` && r.t > 0.12 && r.t < 0.4 && (e.vx = e.face * 760),
      r.name === `star` &&
        !r.resolved &&
        r.t >= r.hitAt &&
        ((r.resolved = !0),
        T.projectiles.push({
          kind: `star`,
          from: `foe`,
          x: e.x + e.face * 30,
          y: e.y - 110,
          vx: e.face * 460,
          vy: d((n.y - 90 - (e.y - 110)) * 1.2, -180, 180),
          dmg: 8,
          life: 1.8,
          hit: !1,
        }),
        _.sfx.star()),
      r.continuous
        ? !r.didHit &&
          r.t >= r.hitAt &&
          r.t <= r.hitEnd &&
          p(R(e.x, e.face, r.reach, 130, 70), I(n)) &&
          ((r.didHit = !0), X(r.dmg, e.x, e))
        : !r.resolved &&
          r.name !== `star` &&
          r.t >= r.hitAt &&
          ((r.resolved = !0),
          p(
            R(e.x, e.face, r.reach, e.type === `katana` ? 150 : 124, 80),
            I(n),
          ) && X(r.dmg, e.x, e)),
      r.t >= r.dur && (e.attack = null));
  }
  function Ne(e, t) {
    ((e.flash = Math.max(0, e.flash - t)), e.hitstun > 0 && (e.hitstun -= t));
    let n = T.player;
    if (e.intro > 0) {
      ((e.intro -= t),
        (e.pose = `idle`),
        (e.face = n.x >= e.x ? 1 : -1),
        Q(e, t, !0));
      return;
    }
    if (e.phasePause > 0) {
      ((e.phasePause -= t), (e.pose = `hurt`), Q(e, t, !0));
      return;
    }
    let r = e.hp / e.maxHp;
    if (e.phase === 1 && r <= 0.66) return Pe(e, 2);
    if (e.phase === 2 && r <= 0.33) return Pe(e, 3);
    if (e.hitstun > 0 && !(e.phase >= 3 && e.attack)) {
      ((e.attack = null), (e.pose = `hurt`), Q(e, t, !1));
      return;
    }
    if (e.attack) {
      (Ie(e, t, n),
        Q(e, t, !1),
        (e.anim = e.attack ? e.attack.t / e.attack.dur : 0),
        (e.pose ||= `attack`));
      return;
    }
    let i = n.x - e.x;
    e.face = i >= 0 ? 1 : -1;
    let a = e.speed + (e.phase - 1) * 28;
    ((e.vx = Math.abs(i) > 130 ? Math.sign(i) * a : 0),
      (e.pose = Math.abs(e.vx) > 12 ? `run` : `idle`),
      (e.attackCd = (e.attackCd || 0) - t),
      (e.attackCd || 0) <= 0 &&
        ((e.attack = Fe(e, Math.abs(i))),
        (e.attack.t = 0),
        (e.attackCd = e.phase >= 3 ? 0.55 : 0.85),
        (e.pose = `attack`)),
      Q(e, t, !1));
  }
  function Pe(e, t) {
    if (
      ((e.phase = t),
      (e.phasePause = 0.85),
      (e.attack = null),
      (e.intro = 0),
      _.sfx.roar(),
      P(10),
      (T.slow = 0.3),
      A(e.x, e.y - 120, t === 3 ? `#b388ff` : `#ff5a3c`, 24, 180),
      j(
        t === 2 ? `PHASE 2` : `PHASE 3`,
        t === 3
          ? e.bossId === `kiba`
            ? `Kiba drops the act`
            : `${(r[e.bossId] || r.kiba).name} drops the act`
          : e.bossId === `kiba`
            ? `The warden speeds up`
            : `${(r[e.bossId] || r.kiba).name} speeds up`,
        `boss`,
        1.3,
        5,
      ),
      _.say(t === 2 ? `Phase two!` : `Phase three!`),
      t === 3 && !e.summoned)
    ) {
      e.summoned = !0;
      let t = d(e.x - e.face * 160, 80, T.room.w - 80),
        n = F(`ninja`, t);
      ((n.attackCd = 0.4),
        T.enemies.push(n),
        k(t, 460, `OTD NINJA`, `#ffd76a`, !1));
    }
  }
  function Fe(e, t) {
    let n = e.phase >= 3 ? 0.32 : e.phase === 2 ? 0.4 : 0.5,
      r = [`slash`, `shock`];
    (e.phase >= 2 && r.push(`leap`, `orbs`),
      e.phase >= 3 && r.push(`spin`, `leap`),
      t > 280 && e.phase >= 2 && r.push(`leap`, `orbs`));
    let i = r[Math.floor(Math.random() * r.length)];
    return i === `slash`
      ? {
          name: i,
          t: 0,
          dur: n + 0.38,
          hitAt: n,
          reach: 190,
          dmg: 16,
          resolved: !1,
        }
      : i === `shock`
        ? {
            name: i,
            t: 0,
            dur: 0.95,
            hitAt: 0.55,
            reach: 40,
            dmg: 13,
            resolved: !1,
          }
        : i === `orbs`
          ? {
              name: i,
              t: 0,
              dur: 0.8,
              hitAt: 0.36,
              reach: 40,
              dmg: 11,
              resolved: !1,
            }
          : i === `spin`
            ? {
                name: i,
                t: 0,
                dur: 1.05,
                hits: [0.28, 0.48, 0.7],
                reach: 200,
                dmg: 12,
                did: {},
                resolved: !1,
              }
            : {
                name: `leap`,
                t: 0,
                dur: 1.15,
                hitAt: 0.72,
                reach: 80,
                dmg: 18,
                jumped: !1,
                airborne: !1,
                slammed: !1,
                marker: { x: T.player.x },
              };
  }
  function Ie(e, t, n) {
    let r = e.attack;
    if (
      ((r.t += t),
      (e.pose = `attack`),
      r.name === `slash` &&
        !r.resolved &&
        r.t >= r.hitAt &&
        ((r.resolved = !0),
        p(R(e.x, e.face, r.reach, 180, 110), I(n)) && X(r.dmg, e.x, e),
        _.sfx.slash()),
      r.name === `shock` &&
        !r.resolved &&
        r.t >= r.hitAt &&
        ((r.resolved = !0),
        T.projectiles.push({
          kind: `shock`,
          from: `foe`,
          x: e.x + e.face * 40,
          y: 624,
          vx: e.face * 280,
          vy: 0,
          dmg: r.dmg,
          life: 1.5,
          w: 70,
          h: 24,
          hit: !1,
        }),
        _.sfx.boom()),
      r.name === `orbs` && !r.resolved && r.t >= r.hitAt)
    ) {
      r.resolved = !0;
      for (let t = -1; t <= 1; t++)
        T.projectiles.push({
          kind: `orb`,
          from: `foe`,
          x: e.x + e.face * 40,
          y: e.y - 150,
          vx: e.face * (220 + t * 40),
          vy: -280 - Math.abs(t) * 40,
          dmg: r.dmg,
          life: 2.3,
          hit: !1,
        });
      _.sfx.roar();
    }
    if (r.name === `spin`)
      for (let t = 0; t < r.hits.length; t++)
        !r.did[t] &&
          r.t >= r.hits[t] &&
          ((r.did[t] = !0),
          p({ x: e.x - r.reach, y: e.y - 180, w: r.reach * 2, h: 120 }, I(n)) &&
            X(r.dmg, e.x, e),
          _.sfx.slash());
    (r.name === `leap` &&
      (!r.jumped &&
        r.t > 0.28 &&
        ((r.jumped = !0), (r.marker = { x: n.x }), (e.vy = -980)),
      r.jumped &&
        !e.onGround &&
        ((r.airborne = !0),
        (e.vx = 0),
        (e.x += (r.marker.x - e.x) * Math.min(1, t * 4))),
      r.jumped &&
        r.airborne &&
        e.onGround &&
        !r.slammed &&
        ((r.slammed = !0),
        (r.resolved = !0),
        A(e.x, 640, `#ffd76a`, 16, 160),
        P(9),
        _.sfx.boom(),
        Math.abs(n.x - e.x) < 92 && n.y > 570 && X(r.dmg, e.x, e))),
      r.t >= r.dur && (e.attack = null));
  }
  function Q(e, t, n) {
    (!n && e.hitstun <= 0 && e.onGround && e.attack,
      (e.hitstun > 0 || !e.onGround) && (e.vx *= 0.12 ** t),
      (e.vy = Math.min(1200, e.vy + K * t)),
      e.attack &&
        e.attack.name === `leap` &&
        e.attack.jumped &&
        e.attack.airborne,
      (e.x += e.vx * t),
      (e.y += e.vy * t),
      e.y >= 640
        ? ((e.y = 640), (e.vy = 0), (e.onGround = !0))
        : (e.onGround = !1),
      (e.x = d(e.x, 60, T.room.w - 60)));
  }
  function Le() {
    let e = T.player;
    if (((e.atkBox = null), e.attack)) {
      let t = c[e.attack.name];
      if (t && e.attack.t >= t.hit0 && e.attack.t <= t.hit1) {
        let n = t.ticks ? (e.attack.t < (t.hit0 + t.hit1) / 2 ? 0 : 1) : 0,
          r = R(e.x, e.face, t.reach, t.top, t.h);
        ((r.y = e.y - t.top), (e.atkBox = r));
        for (let i of T.enemies) {
          if (i.dead || i.hp <= 0) continue;
          let a = `${i.id}:${n}`;
          if (!e.attack.hit[a] && p(r, L(i))) {
            e.attack.hit[a] = !0;
            let n = e.attack.counter ? 1.75 : 1;
            we(i, t.dmg * n, t.kb, t.lift, t.stun, null);
          }
        }
        for (let e of T.props)
          e.alive &&
            p(r, { x: e.x - 24, y: e.y - 48, w: 48, h: 48 }) &&
            ((e.alive = !1),
            oe(e.x, e.y, 6),
            A(e.x, e.y - 20, `#c48a52`, 12, 140),
            _.sfx.hit());
        for (let e of T.projectiles)
          e.from === `foe` &&
            p(r, Re(e)) &&
            ((e.life = 0),
            A(e.x, e.y, `#fff`, 6, 80),
            k(e.x, e.y - 20, `CUT!`, `#e8f6ff`, !1),
            Se(),
            (T.score += 20));
      }
    }
    if (e.specialT > 0) {
      let t = 0.55 - e.specialT;
      if (
        (!e.boltShot &&
          t >= 0.18 &&
          ((e.boltShot = !0),
          T.projectiles.push({
            kind: `thunder`,
            from: `hero`,
            x: e.x + e.face * 40,
            y: e.y - 110,
            vx: e.face * 760,
            vy: 0,
            dmg: 18,
            life: 0.42,
            hit: {},
            w: 54,
            h: 28,
          })),
        t >= 0.16 && t <= 0.34)
      ) {
        let t = R(e.x, e.face, 176, 160, 100);
        t.y = e.y - 160;
        for (let n of T.enemies)
          n.dead ||
            n.hp <= 0 ||
            e.specialHits[n.id] ||
            (p(t, L(n)) &&
              ((e.specialHits[n.id] = !0), we(n, 30, 260, 120, 0.28, null)));
      }
    }
  }
  function Re(e) {
    return e.kind === `shock`
      ? { x: e.x - 34, y: e.y - 12, w: 68, h: 24 }
      : e.kind === `thunder`
        ? { x: e.x - 20, y: e.y - 16, w: 48, h: 32 }
        : { x: e.x - 12, y: e.y - 12, w: 24, h: 24 };
  }
  function ze(e) {
    for (let t of T.projectiles)
      if (
        ((t.life -= e),
        (t.vy = (t.vy || 0) + (t.kind === `orb` ? K * 0.55 * e : 0)),
        (t.x += t.vx * e),
        (t.y += (t.vy || 0) * e),
        t.kind === `orb` && t.y > 620 && (t.life = 0),
        t.from === `foe` &&
          !t.hit &&
          p(Re(t), I(T.player)) &&
          ((t.hit = !0),
          X(t.dmg, t.x, null),
          t.kind !== `shock` && (t.life = 0)),
        t.from === `hero`)
      )
        for (let e of T.enemies)
          e.dead ||
            e.hp <= 0 ||
            t.hit[e.id] ||
            (p(Re(t), L(e)) &&
              ((t.hit[e.id] = !0), we(e, t.dmg, 90, 40, 0.18, null)));
    T.projectiles = T.projectiles.filter((e) => e.life > 0);
  }
  function Be(e) {
    let t = T.player;
    for (let n of T.pickups) {
      n.kind === `coin` &&
        ((n.vy += 1500 * e),
        (n.x += n.vx * e),
        (n.y += n.vy * e),
        n.y > 626 && ((n.y = 626), (n.vy *= -0.28), (n.vx *= 0.7)),
        (n.magnet -= e));
      let r = t.x - n.x,
        i = t.y - 70 - n.y,
        a = Math.hypot(r, i);
      if (
        (n.kind === `coin` &&
          n.magnet <= 0 &&
          a < 230 &&
          ((n.x += r * Math.min(1, e * 9)), (n.y += i * Math.min(1, e * 9))),
        a < (n.kind === `heal` ? 42 : 34))
      ) {
        if (((n.dead = !0), n.kind === `heal`)) {
          let e = Math.min(30, t.maxHp - t.hp);
          ((t.hp = Math.min(t.maxHp, t.hp + 30)),
            _.sfx.heal(),
            k(t.x, t.y - 150, e > 0 ? `+${e}` : `FULL`, `#c8ffb0`, !1));
        } else (re(n.value || 1), _.sfx.coin());
      }
    }
    T.pickups = T.pickups.filter((e) => !e.dead);
  }
  function Ve() {
    let e = T.enemies.filter((e) => !e.dead);
    for (let t = 0; t < e.length; t++)
      for (let n = t + 1; n < e.length; n++) {
        let r = e[t],
          i = e[n],
          a = i.x - r.x,
          o = (r.w + i.w) * 0.42;
        if (Math.abs(a) < o && Math.abs(r.y - i.y) < 50) {
          let e = (o - Math.abs(a)) * 0.5,
            t = a === 0 ? 1 : Math.sign(a);
          ((r.x -= t * e), (i.x += t * e));
        }
      }
  }
  function He() {
    let e = z().rooms,
      t = e[T.roomIndex];
    if (!t || t.boss) {
      T.exitOpen = !1;
      return;
    }
    let n = T.enemies.some((e) => !e.dead && e.hp > 0),
      r = T.roomIndex >= e.length - 1;
    n || T.transition
      ? T.transition || (T.exitOpen = !1)
      : r
        ? T.exitSaid || ((T.exitSaid = !0), Ye())
        : ((T.exitOpen = !0),
          T.exitSaid ||
            ((T.exitSaid = !0),
            j(`PATH OPEN`, `Walk into the torii`, `info`, 1.5, 2),
            _.sfx.ui()),
          Math.abs(T.player.x - T.exitX) < 46 &&
            ((T.player.hp = Math.min(T.player.maxHp, T.player.hp + 12)),
            k(T.player.x, T.player.y - 140, `BREATH +12`, `#c8ffb0`, !1),
            (T.transition = {
              t: 0,
              dur: 0.5,
              next: T.roomIndex + 1,
              switched: !1,
            }),
            (T.exitOpen = !1)));
  }
  function Ue(e) {
    let t = T.transition;
    t.t += e;
    let n = t.t / t.dur;
    ((T.fade = n < 0.5 ? n * 2 : (1 - n) * 2),
      n >= 0.5 &&
        !t.switched &&
        ((t.switched = !0), B(t.next), (T.transition = t)),
      n >= 1 && ((T.transition = null), (T.fade = 0)));
  }
  function We() {
    if (T.mode !== `finish` && T.mode !== `fatality` && T.mode !== `victory`) {
      ((T.mode = `finish`),
        (T.finishProg = 0),
        (T.finishLock = 0),
        (T.finishT = 0),
        (T.slow = 0.25),
        (T.projectiles = []),
        (T.calloutT = 0),
        (E(`callout`).className = ``));
      for (let e of T.enemies)
        e.type === `boss`
          ? ((e.hp = 0), (e.attack = null), (e.pose = `kneel`), (e.anim = 0))
          : (e.dead = !0);
      (_.setMode(`silent`),
        _.sfx.roar(),
        _.say(`Finish him!`),
        T.enemies.some((e) => e.bossId === `kiba`) && N(`boss`),
        P(8));
    }
  }
  function Ge(e, t) {
    ((T.finishT += e), (T.finishLock -= e));
    let n = T.enemies.find((e) => e.type === `boss`);
    n &&
      ((n.pose = `kneel`),
      (n.anim = Math.min(1, T.finishT / 0.45)),
      (n.vx = 0),
      (n.y = 640));
    let r = (t.actions || []).filter(
      (e) => e === `attack` || e === `special` || e === `fatality`,
    );
    for (let e of r) {
      if (T.mode !== `finish`) return;
      let t = [`attack`, `attack`, `special`][T.finishProg];
      e === `fatality` || e === t
        ? ((T.finishProg += 1), _.sfx.ui(), T.finishProg >= 3 && Ke())
        : ((T.finishProg = 0),
          k(T.player.x, T.player.y - 170, `AGAIN!`, `#ffd76a`, !0));
    }
  }
  function Ke() {
    ((T.mode = `fatality`),
      (T.cine = {
        t: 0,
        motes: [],
        plates: [],
        fired: {},
        saidF: !1,
        saidW: !1,
        burst: !1,
        sheath: !1,
        kind: T.fatalityKind || `blue`,
      }),
      _.setMode(`silent`),
      (E(`callout`).className = ``),
      (T.calloutT = 0));
  }
  function qe(e) {
    let t = T.cine;
    t.t += e;
    let n = T.cssW,
      r = T.cssH * 0.78,
      i = n * 0.68,
      a = t.t < 2.15 ? n * 0.34 : i - 120,
      o = t.kind === `thunder`,
      s = o ? [`#fff6c8`, `#ffe08a`, `#fff`] : [`#d7f4ff`, `#e6c36a`],
      c = o ? [`#fff4c2`, `#ffe08a`, `#fff`] : [`#9ad8ff`, `#eef8ff`];
    for (let e of [2.35, 2.55, 2.75, 2.95, 3.15])
      if (t.t >= e && !t.fired[e]) {
        ((t.fired[e] = !0), o ? _.sfx.thunder() : _.sfx.slash(), P(6));
        for (let e = 0; e < 8; e++)
          t.motes.push({
            x: i - 20 + Math.random() * 40,
            y: r - 90 - Math.random() * 80,
            vx: (Math.random() - 0.5) * 180,
            vy: (Math.random() - 0.7) * 160,
            life: 0.35,
            max: 0.35,
            r: 2 + Math.random() * 3,
            color: s[e % s.length],
          });
      }
    if (
      (t.t > 1.25 &&
        t.t < 6.5 &&
        t.motes.length < 160 &&
        t.motes.push({
          x: a + 50 + Math.random() * 40,
          y: r - 130 + Math.random() * 40,
          vx: (Math.random() - 0.3) * 40,
          vy: -30 - Math.random() * 50,
          life: 0.45,
          max: 0.45,
          r: 2 + Math.random() * 2.5,
          color: c[Math.random() > 0.4 ? 0 : 1],
        }),
      t.t > 5.15 && !t.burst)
    ) {
      ((t.burst = !0), _.sfx.boom(), P(14));
      for (let e = 0; e < 16; e++)
        t.plates.push({
          x: i,
          y: r - 130,
          vx: (Math.random() - 0.5) * 560,
          vy: -160 - Math.random() * 340,
          rot: Math.random() * 6,
          vr: (Math.random() - 0.5) * 7,
          w: 14 + Math.random() * 22,
          h: 8 + Math.random() * 14,
          color: [`#1a1a1a`, `#e6c36a`, `#6e2430`, `#2c2c2c`][e % 4],
        });
    }
    (t.t > 5.25 &&
      t.t < 6.8 &&
      t.motes.push({
        x: i + (Math.random() - 0.5) * 80,
        y: r - 40 - Math.random() * 40,
        vx: (Math.random() - 0.5) * 30,
        vy: -50 - Math.random() * 80,
        life: 0.8,
        max: 0.8,
        r: 6 + Math.random() * 10,
        color:
          Math.random() > 0.5 ? `rgba(70,40,110,0.8)` : `rgba(20,10,30,0.75)`,
      }),
      t.t > 6.55 && !t.sheath && ((t.sheath = !0), _.sfx.sheath()),
      t.t > 5.4 &&
        !t.saidF &&
        ((t.saidF = !0),
        _.impact(),
        _.say(t.kind === `thunder` ? `Thunder fatality!` : `Fatality!`)),
      t.t > 7.2 &&
        !t.saidW &&
        ((t.saidW = !0), _.say(`Cocoro wins!`), _.sfx.heal()));
    for (let n of t.motes)
      ((n.life -= e), (n.x += n.vx * e), (n.y += n.vy * e));
    t.motes = t.motes.filter((e) => e.life > 0);
    for (let n of t.plates)
      ((n.vy += 980 * e),
        (n.x += n.vx * e),
        (n.y += n.vy * e),
        (n.rot += n.vr * e),
        n.y > r && ((n.y = r), (n.vy *= -0.28), (n.vx *= 0.8)));
    t.t > 9.3 && Ye();
  }
  function Je() {
    let e = T.damageTaken,
      t = T.comboBest;
    return e <= 0 && t >= 15
      ? `SSS`
      : e <= 0 || (e < 28 && t >= 10)
        ? `S`
        : e < 55
          ? `A`
          : e < 100
            ? `B`
            : `C`;
  }
  function Ye() {
    if (T.victoryDone) return;
    T.victoryDone = !0;
    let e = Je(),
      t = z(),
      n = t.rooms.some((e) => e.boss);
    T.mode = `victory`;
    let r = !v.cleared.includes(t.id);
    (r &&
      (v.cleared.push(t.id),
      v.cleared.sort((e, t) => e - t),
      t.clearBonus && ((v.coins += t.clearBonus), (T.runCoins += t.clearBonus)),
      t.crystal && (v.crystals += 1)),
      (v.checkpoint = null),
      T.score >= (v.best.score || 0) &&
        (v.best = {
          score: Math.floor(T.score),
          combo: T.comboBest,
          rank: e,
          time: T.runT,
          level: t.name,
        }),
      v.board.push({
        score: Math.floor(T.score),
        combo: T.comboBest,
        rank: e,
        time: T.runT,
        date: Date.now(),
        level: t.name,
      }),
      v.board.sort((e, t) => t.score - e.score),
      (v.board = v.board.slice(0, 8)),
      n && t.rooms.some((e) => e.boss === `kiba`) && N(`fatality`),
      t.achievement && N(t.achievement),
      [1, 2, 3, 4, 5].every((e) => v.cleared.includes(e)) && N(`sakura_world`),
      [6, 7, 8, 9, 10].every((e) => v.cleared.includes(e)) && N(`bamboo_world`),
      [11, 12, 13, 14, 15].every((e) => v.cleared.includes(e)) &&
        N(`shadow_world`),
      T.damageTaken <= 0 && N(`untouched`),
      D(),
      _.setMode(`village`),
      (T.nextLevelId = t.id < i.length ? t.id + 1 : null),
      (E(`vic-kicker`).textContent = `Level ${t.id} cleared · ${t.name}`),
      (E(`vic-rank`).textContent = e),
      (E(`vic-score`).textContent = String(Math.floor(T.score))),
      (E(`vic-detail`).textContent =
        `Max combo ${T.comboBest}  ·  ${h(T.runT)}  ·  +${T.runCoins} coins  ·  +${T.runXp} XP${r && t.crystal ? `  ·  +1 crystal` : ``}${r && t.clearBonus ? `  ·  clear bonus +${t.clearBonus}` : ``}`),
      (E(`vic-note`).textContent = T.nextLevelId
        ? `Level ${T.nextLevelId} — ${a(T.nextLevelId).name} is unlocked. Levels ${i.length + 1}–50 are not in this build.`
        : `Stage 3 ends at level ${i.length}. Levels ${i.length + 1}–50 are not built.`),
      E(`btn-vic-next`).classList.toggle(`hidden`, !T.nextLevelId),
      T.nextLevelId &&
        (E(`btn-vic-next`).textContent = `LEVEL ${T.nextLevelId}`),
      q(`victory`),
      Y());
  }
  function Xe() {
    ((T.mode = `dead`),
      _.setMode(`village`),
      (E(`dead-detail`).textContent =
        `Level ${z().id} · ${T.room.name || ``}  ·  Score ${Math.floor(T.score)}  ·  Combo ${T.comboBest}. Coins you picked up are already saved.`),
      q(`dead`));
  }
  function $(e) {
    for (let t of T.petals)
      ((t.x += t.vx * e),
        (t.y += t.vy * e),
        (t.rot += t.vr * e),
        (t.y > 660 || t.x > T.camX + T.viewW + 60) &&
          ((t.x = T.camX + Math.random() * T.viewW), (t.y = T.camY - 16)));
    for (let t of T.particles)
      ((t.life -= e),
        (t.x += t.vx * e),
        (t.y += t.vy * e),
        (t.vy += (t.g || 0) * e));
    T.particles = T.particles.filter((e) => e.life > 0);
    for (let t of T.popups) ((t.life -= e), (t.y += t.vy * e));
    T.popups = T.popups.filter((e) => e.life > 0);
    for (let t of T.ghosts) t.life -= e;
    T.ghosts = T.ghosts.filter((e) => e.life > 0);
    for (let t of T.trail) t.life -= e;
    ((T.trail = T.trail.filter((e) => e.life > 0)),
      T.trail.length > 12 && T.trail.splice(0, T.trail.length - 12),
      T.comboT > 0 && ((T.comboT -= e), T.comboT <= 0 && (T.combo = 0)),
      (T.comboPop = Math.max(0, T.comboPop - e)),
      (T.calloutT -= e),
      T.calloutT <= 0 && ((E(`callout`).className = ``), (T.calloutPri = 0)));
  }
  function Ze(e, t) {
    if (T.transition) (Ue(e), $(e));
    else if (T.deathT > 0)
      ((T.deathT -= e),
        $(e),
        T.player && ((T.player.pose = `hurt`), (T.player.anim = 1)),
        T.deathT <= 0 && Xe());
    else if (T.mode === `finish`) (Ge(e, t), De(e, t, !1), $(e));
    else {
      ((T.runT += e), De(e, t, !0));
      for (let t of T.enemies)
        t.dead || (t.type === `boss` ? Ne(t, e) : Ae(t, e));
      (Ve(),
        Le(),
        ze(e),
        Be(e),
        (T.enemies = T.enemies.filter((e) => !e.dead)),
        He(),
        $(e),
        T.hintT > 0 && (T.hintT -= e));
    }
  }
  function Qe() {
    let e = T.showcase,
      t = T.cssH > T.cssW * 1.05,
      n =
        O() && (T.mode === `play` || T.mode === `finish`)
          ? t
            ? 0.46
            : 0.58
          : 0.8;
    if (e) {
      ((T.showHero.x = Math.max(180, T.viewW * 0.68)),
        (T.showHero.y = 640),
        (T.showHero.pose = (Math.sin(T.time * 0.8), `idle`)),
        (T.showHero.face = 1),
        (T.showFoes[0].x = Math.min(
          T.room.w - 80,
          T.showHero.x + Math.max(130, T.viewW * 0.16),
        )),
        (T.showFoes[0].y = 640),
        (T.showFoes[0].face = -1),
        (T.showFoes[0].pose = Math.sin(T.time * 2) > 0 ? `run` : `idle`),
        (T.showFoes[0].hp = T.showFoes[0].maxHp));
      let e = T.showHero.x - T.viewW * 0.62;
      T.camX = d(e, 0, Math.max(0, T.room.w - T.viewW));
    } else if (T.player) {
      let e = d(
        T.player.x + T.player.face * 80 - T.viewW * 0.38,
        0,
        Math.max(0, T.room.w - T.viewW),
      );
      T.camX = f(T.camX, e, 0.12);
    }
    T.camY = 640 - T.viewH * n;
  }
  function $e() {
    let e = d(
        (T.stickX || 0) +
          (y.has(`KeyA`) || y.has(`ArrowLeft`) ? -1 : 0) +
          (y.has(`KeyD`) || y.has(`ArrowRight`) ? 1 : 0),
        -1,
        1,
      ),
      t = C.splice(0, C.length),
      n = {
        x: e,
        actions: t,
        jump: t.includes(`jump`),
        jumpHeld:
          x.has(`jump`) || y.has(`KeyW`) || y.has(`Space`) || y.has(`ArrowUp`),
        attack: t.includes(`attack`),
        block: x.has(`block`) || y.has(`KeyK`),
        blockPressed: t.includes(`block`),
        dodge: t.includes(`dodge`),
        special: t.includes(`special`),
        fatality: t.includes(`fatality`),
        pause: b.has(`Escape`),
      };
    return (b.clear(), S.clear(), n);
  }
  function et() {
    let e = T.mode === `play` || T.mode === `finish` || T.mode === `pause`;
    (E(`hud`).classList.toggle(`hidden`, !e),
      document.body.classList.toggle(`fighting`, e || T.mode === `fatality`));
    let t = O() && (T.mode === `play` || T.mode === `finish`);
    (E(`touch`).classList.toggle(`hidden`, !t),
      E(`b-fat`).classList.toggle(`hidden`, T.mode !== `finish`),
      E(`finish`).classList.toggle(`hidden`, T.mode !== `finish`));
    let n = E(`cine-word`),
      r = ``;
    if (T.mode === `fatality` && T.cine) {
      let e = T.cine.kind === `thunder`;
      T.cine.t > 5.35 && T.cine.t < 6.45
        ? (r = e ? `THUNDER FATALITY!` : `FATALITY!`)
        : T.cine.t >= 6.45 && T.cine.t < 7.45
          ? (r = `FATALITY!`)
          : T.cine.t >= 7.45 && (r = `COCORO WINS!`);
    }
    (n.dataset.word !== r &&
      ((n.dataset.word = r),
      (n.textContent = r),
      (n.className = ``),
      r && (n.offsetWidth, (n.className = `show`))),
      E(`hint`).classList.toggle(`hidden`, !(T.mode === `play` && T.hintT > 0)),
      T.mode === `play` &&
        T.hintT > 0 &&
        (E(`hint`).textContent = O()
          ? `Stick to move. SLASH chains jab, kick, katana. BLOCK, DODGE, KI. Double JUMP.`
          : `WASD move · Space jump · J attack · K block · L dodge · U Thunder Strike`));
    let i = E(`finish-pips`).children;
    for (let e = 0; e < i.length; e++)
      (i[e].classList.toggle(`done`, e < T.finishProg),
        i[e].classList.toggle(
          `next`,
          T.mode === `finish` && e === T.finishProg,
        ));
    if (T.player && e) {
      let e = Math.max(0, T.player.hp / T.player.maxHp);
      ((E(`hpFill`).style.width = `${e * 100}%`),
        (E(`hpFill`).style.background =
          e < 0.3 ? `#e23d3d` : e < 0.6 ? `#e6a23a` : ``),
        (E(`hpText`).textContent = `${Math.ceil(T.player.hp)}`),
        (E(`kiFill`).style.width = `${(T.player.ki / T.player.maxKi) * 100}%`),
        (E(`areaName`).textContent =
          `LEVEL ${z().id} · ${(T.room && T.room.name ? T.room.name : z().name).toUpperCase()}`),
        (E(`scorePill`).textContent = String(Math.floor(T.score))),
        (E(`comboPill`).textContent =
          T.combo > 1 ? `${T.combo} HIT COMBO` : `COMBO`),
        E(`comboPill`).classList.toggle(`hot`, T.combo >= 10),
        (E(`coinPill`).textContent = String(v.coins)));
    }
    let a = T.enemies.find((e) => e.type === `boss`),
      o = a && (T.mode === `play` || T.mode === `finish` || T.mode === `pause`);
    if ((E(`bossWrap`).classList.toggle(`hidden`, !o), o)) {
      E(`bossFill`).style.width = `${Math.max(0, (a.hp / a.maxHp) * 100)}%`;
      let e = E(`phasePips`).children;
      for (let t = 0; t < e.length; t++)
        e[t].classList.toggle(`on`, t < a.phase);
    }
  }
  function tt() {
    T.mode === `play` || T.mode === `finish`
      ? ((T.mode = `pause`), (T.returnTo = `pause`), q(`pause`))
      : T.mode === `pause` &&
        ((T.mode =
          T.finishProg || T.enemies.some((e) => e.type === `boss` && e.hp <= 0)
            ? `finish`
            : `play`),
        T.enemies.some((e) => e.type === `boss` && e.hp <= 0)
          ? T.cine
            ? (T.mode = `fatality`)
            : (T.mode = `finish`)
          : (T.mode = `play`),
        q(null));
  }
  function nt() {
    let e = new Set([
      `Space`,
      `ArrowUp`,
      `ArrowDown`,
      `ArrowLeft`,
      `ArrowRight`,
    ]);
    (window.addEventListener(`keydown`, (t) => {
      if ((e.has(t.code) && t.preventDefault(), t.repeat)) return;
      (y.add(t.code), b.add(t.code));
      let n = {
        KeyJ: `attack`,
        KeyU: `special`,
        KeyK: `block`,
        KeyL: `dodge`,
        KeyW: `jump`,
        Space: `jump`,
        ArrowUp: `jump`,
      }[t.code];
      (n && C.push(n),
        _.ensure(),
        he.has(T.mode) &&
          _.setMode(_.bus.mode === `off` ? `village` : _.bus.mode));
    }),
      window.addEventListener(`keyup`, (e) => y.delete(e.code)),
      window.addEventListener(`blur`, () => y.clear()),
      m.addEventListener(`pointerdown`, (e) => {
        O() ||
          (e.button === 0 &&
            (T.mode === `play` || T.mode === `finish`) &&
            C.push(`attack`));
      }),
      m.addEventListener(`contextmenu`, (e) => e.preventDefault()),
      window.addEventListener(`pointerdown`, () => {
        (_.ensure(), _.bus.mode === `off` && _.setMode(`village`));
      }));
    let t = E(`stickZone`),
      n = E(`knob`);
    (t.addEventListener(`pointerdown`, (e) => {
      ((w = e.pointerId),
        t.setPointerCapture(e.pointerId),
        r(e),
        e.preventDefault());
    }),
      window.addEventListener(`pointermove`, (e) => {
        e.pointerId === w && r(e);
      }));
    function r(e) {
      let r = t.getBoundingClientRect(),
        i = r.left + r.width / 2,
        a = r.top + r.height / 2,
        o = e.clientX - i,
        s = e.clientY - a,
        c = Math.hypot(o, s) || 1,
        l = Math.min(36, c);
      ((n.style.transform = `translate(${(o / c) * l}px, ${(s / c) * l}px)`),
        (T.stickX = d(o / 36, -1, 1)));
    }
    (window.addEventListener(`pointerup`, (e) => {
      (e.pointerId === w &&
        ((w = null),
        (T.stickX = 0),
        (n.style.transform = `translate(0px, 0px)`)),
        document.querySelectorAll(`#buttons button`).forEach((t) => {
          Number(t.dataset.pid) === e.pointerId &&
            (x.delete(t.dataset.act), (t.dataset.pid = ``));
        }));
    }),
      document.querySelectorAll(`#buttons button`).forEach((e) => {
        e.addEventListener(`pointerdown`, (t) => {
          t.preventDefault();
          let n = e.dataset.act;
          (x.add(n),
            S.add(n),
            C.push(n),
            (e.dataset.pid = String(t.pointerId)),
            e.setPointerCapture(t.pointerId));
        });
      }));
  }
  function rt() {
    ((E(`btn-play`).onclick = () => {
      (_.ensure(), v.seenHelp ? U() : J(`tutorial`));
    }),
      (E(`btn-continue`).onclick = () => de()),
      (E(`btn-levels`).onclick = () => J(`levels`)),
      (E(`btn-upgrades`).onclick = () => J(`upgrades`)),
      (E(`btn-achievements`).onclick = () => J(`achievements`)),
      (E(`btn-board`).onclick = () => J(`board`)),
      (E(`btn-settings`).onclick = () => J(`settings`)),
      (E(`btn-help`).onclick = () => J(`tutorial`)),
      (E(`btn-levels-back`).onclick = () => J(T.freezePlay ? `pause` : `menu`)),
      (E(`btn-upgrades-back`).onclick = () => J(`menu`)),
      (E(`btn-ach-back`).onclick = () => J(`menu`)),
      (E(`btn-board-back`).onclick = () => J(`menu`)),
      (E(`btn-settings-back`).onclick = () => {
        (xe(),
          T.freezePlay && T.player
            ? ((T.mode = `pause`), q(`pause`))
            : J(`menu`));
      }),
      (E(`btn-how`).onclick = () => J(`tutorial`)),
      (E(`btn-reset`).onclick = () => {
        confirm(
          `Erase the local save on this device? Level progress, coins, and records will be cleared.`,
        ) &&
          (localStorage.removeItem(`cocoro_samurai_legend_v1`),
          (v = fe()),
          (T.stats = G(v)),
          Y(),
          be(),
          M(`Save cleared`));
      }),
      (E(`btn-fight`).onclick = () => {
        (E(`help-remember`).checked && ((v.seenHelp = !0), D()), U());
      }),
      (E(`btn-help-back`).onclick = () =>
        J(T.player && T.freezePlay ? `pause` : `menu`)),
      (E(`btn-resume`).onclick = () => {
        ((T.mode = T.cine
          ? `fatality`
          : T.enemies.some((e) => e.type === `boss` && e.hp <= 0)
            ? `finish`
            : `play`),
          q(null));
      }),
      (E(`btn-quit`).onclick = () => {
        (T.player && se(),
          (T.mode = `menu`),
          (T.freezePlay = !1),
          _.setMode(`village`),
          Y(),
          q(`menu`));
      }),
      (E(`btn-pause-settings`).onclick = () => {
        ((T.freezePlay = !0), (T.mode = `settings`), be(), q(`settings`));
      }),
      (E(`btn-pause-hud`).onclick = () => {
        (T.mode === `play` || T.mode === `finish`) && tt();
      }),
      (E(`btn-vic-menu`).onclick = () => {
        ((T.mode = `menu`), (T.freezePlay = !1), Y(), q(`menu`));
      }),
      (E(`btn-vic-again`).onclick = () => H(T.levelId || 1)),
      (E(`btn-vic-next`).onclick = () => {
        T.nextLevelId && H(T.nextLevelId);
      }),
      (E(`btn-retry`).onclick = () => de()),
      (E(`btn-dead-menu`).onclick = () => {
        ((T.mode = `menu`), (T.freezePlay = !1), Y(), q(`menu`));
      }),
      [`set-music`, `set-sfx`, `set-voice`, `set-shake`, `set-touch`].forEach(
        (e) => {
          (E(e).addEventListener(`input`, xe),
            E(e).addEventListener(`change`, xe));
        },
      ));
  }
  function it() {
    let e = T.enemies.find((e) => e.type === `boss`);
    return {
      mode: T.mode,
      level: T.levelId,
      levelName: z().name,
      roomName: T.room && T.room.name,
      theme: T.room && T.room.theme,
      room: T.roomIndex,
      hp: T.player ? Math.round(T.player.hp) : 0,
      ki: T.player ? Math.round(T.player.ki) : 0,
      enemies: T.enemies
        .filter((e) => !e.dead)
        .map((e) => ({
          type: e.type,
          hp: Math.round(e.hp),
          x: Math.round(e.x),
        })),
      bossHp: e ? Math.round(e.hp) : null,
      score: Math.floor(T.score),
      combo: T.combo,
      comboBest: T.comboBest,
      finish: T.finishProg,
      cineT: T.cine ? Number(T.cine.t.toFixed(2)) : null,
      exit: T.exitOpen,
      coins: v.coins,
      cleared: v.cleared.slice(),
    };
  }
  function at(e) {
    try {
      T.last ||= e;
      let t = (e - T.last) / 1e3,
        n = Math.min(0.034, t);
      (!Number.isFinite(n) || n <= 0) && (n = 0.016);
      let r = Math.min(0.1, Number.isFinite(t) && t > 0 ? t : n);
      ((T.last = e), (T.time += n));
      let i = $e();
      (i.pause && tt(),
        (T.showcase = he.has(T.mode) && !T.freezePlay),
        T.showcase &&
          (T.showcaseRoom ||
            ((T.showcaseRoom = ce(`gate`, Math.max(1280, T.viewW), 11, !1)),
            (T.showcaseRoom.name = `Sakura Village`)),
          (T.room = T.showcaseRoom)));
      let a = n;
      (T.hitstop > 0
        ? ((T.hitstop -= n), (a = 0))
        : T.slow > 0 && ((T.slow -= n), (a *= 0.45)),
        a > 0 && (T.mode === `play` || T.mode === `finish`)
          ? Ze(a, i)
          : T.mode === `fatality`
            ? (qe(r), $(r))
            : $(n),
        (T.shake = Math.max(0, T.shake - n * 26)),
        Qe(),
        _.tick(),
        te(g, T),
        et(),
        (window.__snap = it()));
    } catch (e) {
      console.error(e);
      let t = E(`fatal`);
      t &&
        ((t.hidden = !1), (t.textContent = String(e && e.stack ? e.stack : e)));
    }
    requestAnimationFrame(at);
  }
  (ee(),
    ae(),
    nt(),
    rt(),
    (_.bus.voice = v.settings.voice),
    _.setVolumes(v.settings.music, v.settings.sfx),
    Y(),
    q(`menu`),
    window.addEventListener(`resize`, ee),
    document.addEventListener(`visibilitychange`, () => {
      document.hidden && T.mode === `play` && tt();
    }),
    (window.__cocoro = {
      get snap() {
        return it();
      },
      start: U,
      startLevel: H,
      goto(e) {
        (T.player || H(T.levelId || 1), B(e), (T.mode = `play`), q(null));
      },
      finish() {
        let e = T.enemies.find((e) => e.type === `boss`);
        e && ((e.hp = 0), We());
      },
      skipCine() {
        T.cine && (T.cine.t = 9.25);
      },
      wipe() {
        for (let e of T.enemies)
          e.type !== `boss` && ((e.hp = 0), (e.dead = !0));
      },
      advance() {
        T.exitOpen && T.player && (T.player.x = T.exitX);
      },
      fill() {
        T.player &&
          ((T.player.hp = T.player.maxHp), (T.player.ki = T.player.maxKi));
      },
    }),
    requestAnimationFrame(at));
}
q();
var J = document.getElementById(`installBanner`),
  Y = null;
(window.addEventListener(`beforeinstallprompt`, (e) => {
  (e.preventDefault(), (Y = e), J.classList.add(`show`));
}),
  (document.getElementById(`btn-install`).onclick = async () => {
    Y &&
      (Y.prompt(), await Y.userChoice, (Y = null), J.classList.remove(`show`));
  }),
  (document.getElementById(`btn-install-dismiss`).onclick = () =>
    J.classList.remove(`show`)),
  `serviceWorker` in navigator &&
    navigator.serviceWorker.register(`./sw.js`).catch(() => {}));
