import * as THREE from './vendor/three.module.js';

const ARENA_R = 11.15;
const SAVE_KEY = 'cocoro-3d-v1';
const ATTACKS = [
  { dur: 0.28, active: [0.06, 0.16], range: 1.9, radius: 0.72, dmg: 14, knock: 1.8, lunge: 3.4, launch: 0.2 },
  { dur: 0.32, active: [0.08, 0.18], range: 2.0, radius: 0.78, dmg: 16, knock: 2.6, lunge: 4.4, launch: 1.2, kick: true },
  { dur: 0.4, active: [0.12, 0.26], range: 2.35, radius: 0.9, dmg: 20, knock: 4.2, lunge: 5.2, launch: 2.2, shuh: true },
  { dur: 0.5, active: [0.1, 0.36], range: 2.65, radius: 1.35, dmg: 26, knock: 7.2, lunge: 2.2, launch: 4.2, aoe: true, shuh: true },
];
const WAVES = [
  ['alley', 'alley', 'alley'],
  ['alley', 'pounce', 'alley', 'pounce'],
  ['brute', 'alley', 'alley'],
  ['pounce', 'brute', 'pounce', 'alley'],
  ['boss'],
];
const SLOTS = [
  { x: -1.2, z: -8.1 },
  { x: 1.5, z: -7.5 },
  { x: -3.3, z: -6.6 },
  { x: 3.2, z: -6.3 },
  { x: 0.1, z: -8.8 },
];
const KINDS = {
  alley: { hp: 40, speed: 3.2, damage: 8, range: 1.5, windup: 0.4, recover: 0.32, cool: 0.85, scale: 1, hurt: 0.32, leap: false, body: 0xe8883a, dark: 0xc45c22, belly: 0xf2d2b0, ear: 0xf2c2a4, eye: 0xffe38a },
  pounce: { hp: 30, speed: 5.05, damage: 11, range: 1.75, windup: 0.28, recover: 0.34, cool: 1.0, scale: 0.92, hurt: 0.24, leap: true, body: 0x2b2932, dark: 0x14141a, belly: 0x3a3844, ear: 0xf0b8c8, eye: 0xd2b0ff },
  brute: { hp: 108, speed: 2.15, damage: 15, range: 1.9, windup: 0.55, recover: 0.46, cool: 1.15, scale: 1.4, hurt: 0.18, leap: false, body: 0xf4efe4, dark: 0x2a241c, belly: 0xfff8ee, ear: 0xf0b090, eye: 0xffe08a },
  boss: { hp: 360, speed: 2.6, damage: 16, range: 2.2, windup: 0.46, recover: 0.38, cool: 0.8, scale: 2.08, hurt: 0.1, leap: false, body: 0xf7f4ee, dark: 0x171717, belly: 0xfffaf4, ear: 0x171717, eye: 0xffd0a8 },
};

const COL = {
  black: 0x1a120e,
  tan: 0xd7b189,
  cream: 0xf3e0c6,
  armor: 0x3b1218,
  gold: 0xe6c36a,
  indigo: 0x231838,
  cyan: 0x3ed8ea,
  blade: 0xd9e2ea,
  wrap: 0x6b1d26,
};

const canvas = document.getElementById('c');
const hud = document.getElementById('hud');
const hpFill = document.getElementById('hpFill');
const hpText = document.getElementById('hpText');
const kiFill = document.getElementById('kiFill');
const waveText = document.getElementById('waveText');
const bossWrap = document.getElementById('bossWrap');
const bossFill = document.getElementById('bossFill');
const scorePill = document.getElementById('scorePill');
const comboPill = document.getElementById('comboPill');
const calloutEl = document.getElementById('callout');
const hintEl = document.getElementById('hint');
const floatsEl = document.getElementById('floats');
const touchEl = document.getElementById('touch');
const stickZone = document.getElementById('stickZone');
const knob = document.getElementById('knob');
const menuEl = document.getElementById('screen-menu');
const pauseEl = document.getElementById('screen-pause');
const endEl = document.getElementById('screen-end');
const bestEl = document.getElementById('menu-best');
const continueBtn = document.getElementById('btn-continue');
const bDodge = document.getElementById('b-dodge');
const bKi = document.getElementById('b-ki');

const touchOn = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (touchOn) document.body.classList.add('touch');

const save = loadSave();
let muted = !!save.muted;
let best = save.best || 0;
let mode = 'menu';
let started = false;
let cleared = false;
let ending = null;
let endDelay = 0;
let score = 0;
let combo = 0;
let comboTimer = 0;
let waveIndex = -1;
let between = 0;
let announcedClear = false;
let spawnQueue = [];
let calloutT = 0;
let hintT = 0;
let hitStop = 0;
let shake = 0;
let time = 0;
let frames = 0;
const cats = [];
const pickups = [];
const sparks = [];
const sparkPool = [];
const slashes = [];
const decor = [];
const props = [];
const keys = new Set();
const stick = { x: 0, y: 0, active: false };
const gp = { x: 0, y: 0 };
const gpPrev = [];
const blockSrc = { key: false, mouse: false, touch: false, pad: false };
const buffer = { attack: 0, jump: 0, dodge: 0, special: 0 };
let catSeq = 1;

const player = {
  x: 0, y: 0, z: 2.5, vx: 0, vy: 0, vz: 0, yaw: Math.PI,
  hp: 140, maxHp: 140, ki: 45, grounded: true, jumps: 0, coyote: 0, jumpBuffer: 0,
  iframe: 0, atk: null, queue: false, comboStep: 0, blockHeld: false, blockT: 99,
  dodgeT: 0, dodgeDur: 0.42, dodgeCd: 0, dodgeX: 0, dodgeZ: 0, specialCd: 0,
  dead: false, speed: 0, step: 0,
};

const cam = { yaw: 0.62, userUntil: 0 };
const lookSm = new THREE.Vector3();
const desired = new THREE.Vector3();
const look = new THREE.Vector3();
const dummy = new THREE.Object3D();

let renderer;
let scene;
let camera;
let hero;
let petals;
let petalData = [];
let sun;
let ac;

function loadSave() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; } catch { return {}; }
}

function writeSave() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify({ best, muted })); } catch { /* ignore */ }
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

function dampAngle(current, target, lambda, dt) {
  const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + diff * (1 - Math.exp(-lambda * dt));
}

function forwardFromYaw(yaw) {
  return { x: Math.sin(yaw), z: Math.cos(yaw) };
}

function cameraBasis() {
  const fx = -Math.sin(cam.yaw);
  const fz = -Math.cos(cam.yaw);
  return { fx, fz, rx: -fz, rz: fx };
}

function showBoot(msg) {
  const el = document.getElementById('boot');
  el.hidden = false;
  el.textContent = msg;
}

function ensureAudio() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  if (!ac) ac = new Ctx();
  if (ac.state === 'suspended') ac.resume();
}

function tone(freq, dur, type, vol, slide) {
  if (muted || !ac) return;
  const t = ac.currentTime;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(48, slide), t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(ac.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function noise(dur, vol, freq) {
  if (muted || !ac) return;
  const length = Math.max(1, Math.floor(ac.sampleRate * dur));
  const buffer = ac.createBuffer(1, length, ac.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = ac.createBufferSource();
  src.buffer = buffer;
  const filter = ac.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = freq;
  const g = ac.createGain();
  g.gain.value = vol;
  src.connect(filter).connect(g).connect(ac.destination);
  src.start();
}

function sfx(name) {
  if (name === 'slash') { noise(0.09, 0.08, 1400); tone(520, 0.08, 'triangle', 0.035, 180); }
  else if (name === 'hit') { noise(0.07, 0.1, 300); tone(180, 0.08, 'square', 0.03, 70); }
  else if (name === 'hurt') { tone(140, 0.16, 'sawtooth', 0.04, 60); }
  else if (name === 'block') { tone(640, 0.07, 'square', 0.03, 240); }
  else if (name === 'counter') { tone(880, 0.12, 'triangle', 0.05, 1320); }
  else if (name === 'jump') { tone(420, 0.09, 'sine', 0.03, 640); }
  else if (name === 'dodge') { noise(0.1, 0.05, 900); }
  else if (name === 'thunder') { noise(0.18, 0.12, 200); tone(90, 0.22, 'sawtooth', 0.05, 40); }
  else if (name === 'meow') { tone(640, 0.14, 'triangle', 0.03, 280); }
  else if (name === 'deny') { tone(180, 0.08, 'square', 0.02, 120); }
  else if (name === 'heal') { tone(520, 0.1, 'sine', 0.04, 780); }
  else if (name === 'win') { tone(523, 0.12, 'triangle', 0.04); setTimeout(() => tone(659, 0.12, 'triangle', 0.04), 90); setTimeout(() => tone(784, 0.2, 'triangle', 0.04), 180); }
  else if (name === 'lose') { tone(220, 0.25, 'sawtooth', 0.04, 80); }
  else if (name === 'start') { tone(392, 0.08, 'triangle', 0.03, 523); }
}

function syncMuteLabels() {
  const label = muted ? 'SOUND OFF' : 'SOUND ON';
  document.getElementById('btn-mute').textContent = label;
  document.getElementById('btn-mute-2').textContent = label;
}

function toggleMute() {
  muted = !muted;
  writeSave();
  syncMuteLabels();
  if (!muted) ensureAudio();
}

function callout(text) {
  calloutEl.textContent = text;
  calloutEl.classList.add('show');
  calloutT = 1.15;
}

function showHint(text) {
  hintEl.textContent = text;
  hintEl.classList.remove('hidden');
  hintT = 6.2;
}

function floatText(x, y, z, text, cls) {
  const el = document.createElement('div');
  el.className = `floater ${cls || ''}`;
  el.textContent = text;
  floatsEl.appendChild(el);
  floaters.push({ el, x, y, z, age: 0, life: 0.7 });
}

const floaters = [];

function std(color, rough = 0.72, metal = 0.04, emissive = 0x000000) {
  const material = new THREE.MeshStandardMaterial({
    color, roughness: rough, metalness: metal, emissive, emissiveIntensity: 1,
  });
  material.userData.baseEm = emissive;
  return material;
}

function addMesh(parent, geo, material, x, y, z) {
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function pivot(parent, x, y, z) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  parent.add(group);
  return group;
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,0.95)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function paintedTexture(draw, repeatX, repeatY) {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  draw(c.getContext('2d'), c);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  return tex;
}

function buildHero() {
  const root = new THREE.Group();
  const spin = new THREE.Group();
  const model = new THREE.Group();
  root.add(spin);
  spin.add(model);

  const earGeo = new THREE.ConeGeometry(0.09, 0.28, 8);
  const torso = addMesh(model, new THREE.SphereGeometry(0.34, 20, 16), std(COL.black, 0.86, 0.02), 0, 0.78, 0);
  torso.scale.set(0.92, 0.86, 0.78);
  const chest = addMesh(model, new THREE.SphereGeometry(0.2, 14, 12), std(COL.tan, 0.84, 0), 0, 0.7, 0.16);
  chest.scale.set(1.05, 0.85, 0.55);
  const hakama = addMesh(model, new THREE.CylinderGeometry(0.24, 0.4, 0.34, 12), std(COL.indigo, 0.78, 0.08), 0, 0.46, 0);
  const belt = addMesh(model, new THREE.TorusGeometry(0.26, 0.035, 8, 16), std(COL.gold, 0.4, 0.6), 0, 0.62, 0);
  belt.rotation.x = Math.PI / 2;

  const head = pivot(model, 0, 1.16, 0.05);
  addMesh(head, new THREE.SphereGeometry(0.3, 20, 16), std(COL.black, 0.84, 0.02), 0, 0, 0);
  const cheekL = addMesh(head, new THREE.SphereGeometry(0.1, 10, 8), std(COL.tan, 0.84, 0), -0.14, -0.04, 0.16);
  cheekL.scale.set(1, 0.8, 0.7);
  const cheekR = cheekL.clone();
  cheekR.position.x = 0.14;
  cheekR.material = cheekL.material;
  head.add(cheekR);
  const muzzle = addMesh(head, new THREE.SphereGeometry(0.15, 14, 12), std(COL.cream, 0.8, 0), 0, -0.08, 0.18);
  muzzle.scale.set(1.05, 0.78, 0.85);
  addMesh(head, new THREE.SphereGeometry(0.045, 10, 8), std(0x140e0c, 0.5, 0.1), 0, -0.05, 0.3);
  const eyeMat = std(0xf7f4ef, 0.4, 0.05);
  const pupilMat = std(0x140e0c, 0.3, 0.1);
  for (const side of [-1, 1]) {
    addMesh(head, new THREE.SphereGeometry(0.055, 10, 8), eyeMat, side * 0.1, 0.04, 0.24);
    addMesh(head, new THREE.SphereGeometry(0.03, 8, 6), pupilMat, side * 0.1, 0.04, 0.28);
    const brow = addMesh(head, new THREE.BoxGeometry(0.09, 0.025, 0.03), std(COL.tan, 0.8, 0), side * 0.11, 0.12, 0.22);
    brow.rotation.z = side * -0.5;
  }
  const earL = pivot(head, -0.16, 0.2, 0);
  earL.rotation.z = 0.35;
  addMesh(earL, earGeo, std(COL.black, 0.84, 0), 0, 0.12, 0);
  addMesh(earL, new THREE.ConeGeometry(0.05, 0.16, 6), std(COL.tan, 0.84, 0), 0, 0.1, 0.02);
  const earR = pivot(head, 0.16, 0.2, 0);
  earR.rotation.z = -0.35;
  addMesh(earR, earGeo, std(COL.black, 0.84, 0), 0, 0.12, 0);
  addMesh(earR, new THREE.ConeGeometry(0.05, 0.16, 6), std(COL.tan, 0.84, 0), 0, 0.1, 0.02);

  const helm = addMesh(head, new THREE.SphereGeometry(0.32, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.48), std(COL.armor, 0.38, 0.55), 0, 0.04, -0.02);
  const rim = addMesh(head, new THREE.TorusGeometry(0.3, 0.02, 8, 20), std(COL.gold, 0.35, 0.7), 0, 0.02, 0);
  rim.rotation.x = Math.PI / 2.4;
  const crest = addMesh(head, new THREE.BoxGeometry(0.04, 0.22, 0.12), std(COL.gold, 0.35, 0.65), 0, 0.28, -0.02);

  const emblem = new THREE.Mesh(
    new THREE.CircleGeometry(0.12, 20),
    new THREE.MeshBasicMaterial({ map: emblemTex, transparent: true })
  );
  emblem.position.set(0, 0.78, 0.3);
  model.add(emblem);
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(0.42, 0.54),
    new THREE.MeshStandardMaterial({ map: emblemTex, roughness: 0.75, metalness: 0.08 })
  );
  banner.position.set(0, 0.98, -0.34);
  banner.rotation.y = Math.PI;
  banner.castShadow = true;
  model.add(banner);

  function makeLeg(x) {
    const leg = pivot(model, x, 0.48, 0);
    addMesh(leg, new THREE.CylinderGeometry(0.075, 0.06, 0.28, 8), std(COL.black, 0.86, 0), 0, -0.12, 0);
    addMesh(leg, new THREE.CylinderGeometry(0.07, 0.065, 0.18, 8), std(COL.tan, 0.84, 0), 0, -0.32, 0);
    addMesh(leg, new THREE.SphereGeometry(0.09, 10, 8), std(COL.cream, 0.8, 0), 0, -0.42, 0.03);
    return leg;
  }

  function makeArm(x, right) {
    const arm = pivot(model, x, 1.02, 0);
    const shoulder = addMesh(arm, new THREE.SphereGeometry(0.1, 10, 8), std(COL.armor, 0.4, 0.45), 0, 0, 0);
    addMesh(arm, new THREE.CylinderGeometry(0.055, 0.05, 0.22, 8), std(COL.armor, 0.42, 0.4), 0, -0.16, 0);
    addMesh(arm, new THREE.SphereGeometry(0.07, 10, 8), std(COL.tan, 0.84, 0), 0, -0.3, 0.02);
    if (right) {
      const sword = pivot(arm, 0, -0.32, 0.02);
      addMesh(sword, new THREE.CylinderGeometry(0.02, 0.02, 0.16, 6), std(COL.wrap, 0.6, 0.2), 0, -0.02, 0);
      const guard = addMesh(sword, new THREE.CylinderGeometry(0.07, 0.07, 0.02, 8), std(COL.gold, 0.32, 0.7), 0, 0.08, 0);
      guard.rotation.x = Math.PI / 2;
      const blade = addMesh(sword, new THREE.BoxGeometry(0.035, 0.78, 0.012), std(COL.blade, 0.22, 0.82), 0, 0.5, 0);
      blade.material.emissive = new THREE.Color(0x223040);
      blade.material.emissiveIntensity = 0.25;
      heroSword = sword;
    }
    shoulder.scale.set(1.15, 0.7, 1.15);
    return arm;
  }

  const legL = makeLeg(-0.14);
  const legR = makeLeg(0.14);
  const armL = makeArm(-0.32, false);
  const armR = makeArm(0.32, true);
  const tail = pivot(model, 0, 0.72, -0.28);
  let ty = 0;
  for (let i = 0; i < 4; i++) {
    const seg = addMesh(tail, new THREE.SphereGeometry(0.09 - i * 0.012, 10, 8), std(i > 2 ? COL.tan : COL.black, 0.86, 0), 0, ty + 0.08, -0.02 * i);
    seg.position.set(0, 0.08 + i * 0.1, -0.05 - i * 0.05);
  }
  tail.rotation.x = -0.9;

  const scabbard = addMesh(model, new THREE.BoxGeometry(0.05, 0.55, 0.05), std(0x1a1a1e, 0.45, 0.4), -0.22, 0.48, -0.08);
  scabbard.rotation.x = 0.5;
  scabbard.rotation.z = 0.3;

  const shield = new THREE.Mesh(
    new THREE.CircleGeometry(0.55, 24),
    new THREE.MeshBasicMaterial({ color: COL.cyan, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false })
  );
  shield.position.set(0, 0.9, 0.62);
  shield.visible = false;
  model.add(shield);

  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.46, 16), blobMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.03;
  root.add(blob);

  scene.add(root);
  hero = { root, spin, model, legL, legR, armL, armR, tail, earL, earR, head, shield, blob };
}

let heroSword = null;
let emblemTex;
let blobMat;

function buildCat(kind) {
  const stats = KINDS[kind];
  const group = new THREE.Group();
  const bodyMat = std(stats.body, 0.78, 0.03);
  const darkMat = std(stats.dark, 0.8, 0.03);
  const bellyMat = std(stats.belly, 0.82, 0.02);
  const body = addMesh(group, new THREE.SphereGeometry(0.42, 16, 12), bodyMat, 0, 0.48, 0);
  body.scale.set(0.86, 0.72, 1.25);
  const belly = addMesh(group, new THREE.SphereGeometry(0.24, 12, 10), bellyMat, 0, 0.38, 0.05);
  belly.scale.set(0.7, 0.45, 1.1);
  if (kind === 'alley') {
    for (let i = 0; i < 3; i++) {
      const stripe = addMesh(group, new THREE.BoxGeometry(0.08, 0.05, 0.22), darkMat, 0, 0.78, -0.18 + i * 0.18);
      stripe.rotation.z = 0.15 * (i - 1);
    }
  } else if (kind === 'brute') {
    addMesh(group, new THREE.SphereGeometry(0.16, 10, 8), std(0xe07a32, 0.8, 0), 0.16, 0.58, 0.1);
    addMesh(group, new THREE.SphereGeometry(0.14, 10, 8), darkMat, -0.18, 0.62, -0.05);
  } else if (kind === 'boss') {
    const collar = addMesh(group, new THREE.TorusGeometry(0.2, 0.035, 8, 14), std(0xc4363a, 0.5, 0.2), 0, 0.62, 0.42);
    collar.rotation.x = Math.PI / 2;
    const bell = addMesh(group, new THREE.SphereGeometry(0.07, 10, 8), std(COL.gold, 0.3, 0.7, 0x6a4a10), 0, 0.5, 0.58);
    bell.material.emissiveIntensity = 0.4;
  }

  const head = pivot(group, 0, 0.7, 0.48);
  addMesh(head, new THREE.SphereGeometry(0.28, 16, 12), bodyMat, 0, 0, 0);
  addMesh(head, new THREE.SphereGeometry(0.12, 10, 8), bellyMat, 0, -0.06, 0.16);
  addMesh(head, new THREE.SphereGeometry(0.04, 8, 6), std(0x1a120e, 0.45, 0.1), 0, -0.04, 0.26);
  const eyeMat = std(stats.eye, 0.35, 0.05, stats.eye);
  eyeMat.emissiveIntensity = kind === 'pounce' || kind === 'boss' ? 0.55 : 0.2;
  for (const side of [-1, 1]) {
    addMesh(head, new THREE.SphereGeometry(0.055, 8, 6), eyeMat, side * 0.1, 0.04, 0.2);
    addMesh(head, new THREE.SphereGeometry(0.028, 8, 6), std(0x140e0c, 0.3, 0), side * 0.1, 0.03, 0.24);
    const brow = addMesh(head, new THREE.BoxGeometry(0.1, 0.03, 0.03), darkMat, side * 0.11, 0.14, 0.18);
    brow.rotation.z = side * -0.55;
    const ear = pivot(head, side * 0.16, 0.18, 0);
    ear.rotation.z = side * -0.25;
    addMesh(ear, new THREE.ConeGeometry(0.08, 0.22, 6), kind === 'boss' ? darkMat : bodyMat, 0, 0.1, 0);
    addMesh(ear, new THREE.ConeGeometry(0.04, 0.12, 6), std(stats.ear, 0.8, 0), 0, 0.08, 0.02);
  }
  const tail = pivot(group, 0, 0.58, -0.48);
  for (let i = 0; i < 3; i++) {
    addMesh(tail, new THREE.SphereGeometry(0.07 - i * 0.01, 8, 6), i === 2 ? darkMat : bodyMat, 0, 0.05 + i * 0.08, -0.08 - i * 0.06);
  }
  const legs = [];
  [[-0.18, 0.22], [0.18, 0.22], [-0.18, -0.28], [0.18, -0.28]].forEach(([x, z], i) => {
    const leg = pivot(group, x, 0.36, z);
    addMesh(leg, new THREE.CylinderGeometry(0.05, 0.045, 0.26, 6), i < 2 ? bodyMat : darkMat, 0, -0.12, 0);
    addMesh(leg, new THREE.SphereGeometry(0.06, 8, 6), std(0x1a120e, 0.7, 0), 0, -0.26, 0.02);
    legs.push(leg);
  });

  group.scale.setScalar(stats.scale);
  scene.add(group);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.62, 0.78, 32),
    new THREE.MeshBasicMaterial({ color: 0xff5530, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.visible = false;
  scene.add(ring);

  const hpGroup = new THREE.Group();
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.09), new THREE.MeshBasicMaterial({ color: 0x2a1214 }));
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.09), new THREE.MeshBasicMaterial({ color: kind === 'boss' ? 0xf0c14a : 0x5ddc6a }));
  fill.position.z = 0.01;
  hpGroup.add(bg, fill);
  scene.add(hpGroup);

  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.42 * stats.scale, 14), blobMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.025;
  group.add(blob);

  return { group, body, head, tail, legs, ring, hpGroup, hpFill: fill, mats: [bodyMat, darkMat, bellyMat] };
}

function spawnCat(kind, slot) {
  const stats = KINDS[kind];
  const built = buildCat(kind);
  const base = kind === 'boss' ? { x: 0, z: -7.3 } : SLOTS[slot % SLOTS.length];
  const cat = {
    id: catSeq++,
    kind,
    stats,
    boss: kind === 'boss',
    ...built,
    x: base.x + (kind === 'boss' ? 0 : (Math.random() - 0.5) * 0.35),
    z: base.z + (kind === 'boss' ? 0 : (Math.random() - 0.5) * 0.35),
    yaw: 0,
    vx: 0,
    vz: 0,
    hp: stats.hp,
    maxHp: stats.hp,
    radius: 0.46 * stats.scale,
    state: 'chase',
    cool: 0.35 + Math.random() * 0.3,
    atkT: 0,
    windup: stats.windup,
    pattern: 'claw',
    didHit: false,
    lockX: 0,
    lockZ: 0,
    hurtT: 0,
    hop: 0,
    lift: 0,
    flash: 0,
    dead: false,
    deadT: 0,
    remove: false,
    strafe: Math.random() < 0.5 ? -1 : 1,
    strafeT: 0,
    step: (catSeq % 3),
    called: false,
    phase: Math.random() * 6,
  };
  cat.yaw = Math.atan2(player.x - cat.x, player.z - cat.z);
  cats.push(cat);
  if (kind !== 'pounce') sfx('meow');
  return cat;
}

function removeCat(cat) {
  scene.remove(cat.group);
  scene.remove(cat.ring);
  scene.remove(cat.hpGroup);
  const seen = new Set();
  const dump = (material) => {
    if (!material || material.userData.shared || seen.has(material)) return;
    seen.add(material);
    material.dispose();
  };
  cat.group.traverse((obj) => {
    if (!obj.material) return;
    const list = Array.isArray(obj.material) ? obj.material : [obj.material];
    list.forEach(dump);
  });
  dump(cat.ring.material);
  cat.hpGroup.traverse((obj) => dump(obj.material));
}

function clearCombat() {
  for (const cat of cats) removeCat(cat);
  cats.length = 0;
  for (const pickup of pickups) {
    scene.remove(pickup.mesh);
    pickup.mesh.material.dispose();
  }
  pickups.length = 0;
  spawnQueue = [];
}

function burst(x, y, z, color, count, speed) {
  for (let i = 0; i < count; i++) {
    const mesh = sparkPool.pop();
    if (!mesh) break;
    mesh.visible = true;
    mesh.material.color.set(color);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(1);
    const a = Math.random() * Math.PI * 2;
    const sp = speed * (0.45 + Math.random());
    sparks.push({
      mesh,
      vx: Math.cos(a) * sp,
      vy: speed * (0.55 + Math.random()),
      vz: Math.sin(a) * sp,
      age: 0,
      life: 0.32 + Math.random() * 0.28,
    });
  }
}

function spawnPickup(x, z, type) {
  const color = type === 'heal' ? 0xff8d6a : 0x7ee7ff;
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 12, 10),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.7, roughness: 0.35 })
  );
  mesh.position.set(x, 0.45, z);
  scene.add(mesh);
  pickups.push({ mesh, x, z, type, age: 0, life: 12 });
}

function killCat(cat) {
  if (cat.dead) return;
  cat.dead = true;
  cat.deadT = 0;
  cat.hp = 0;
  cat.ring.visible = false;
  score += cat.boss ? 1000 : 80;
  score += combo * 4;
  burst(cat.x, 0.6, cat.z, cat.boss ? 0xf0c14a : 0xffb7c8, cat.boss ? 18 : 8, cat.boss ? 5 : 3);
  sfx('meow');
  if (cat.boss) callout('MOMO FALLS');
  if (Math.random() < (cat.boss ? 1 : 0.38)) spawnPickup(cat.x, cat.z, Math.random() < 0.6 ? 'heal' : 'ki');
}

function hitCat(cat, dmg, knock, launch) {
  if (cat.dead || mode !== 'play' || ending) return;
  const armored = cat.boss && cat.state === 'attack';
  cat.hp -= dmg;
  cat.flash = 0.1;
  combo += 1;
  comboTimer = 1.65;
  score += Math.round(dmg * (1 + Math.min(combo, 12) * 0.12));
  player.ki = Math.min(100, player.ki + 5);
  floatText(cat.x, 1.15 * cat.stats.scale, cat.z, String(Math.round(dmg)), combo > 2 ? 'crit' : '');
  sfx('hit');
  shake = Math.max(shake, cat.boss ? 0.12 : 0.2);
  if (!armored) {
    const dx = cat.x - player.x;
    const dz = cat.z - player.z;
    const len = Math.hypot(dx, dz) || 1;
    cat.vx = (dx / len) * knock;
    cat.vz = (dz / len) * knock;
    cat.lift = Math.max(cat.lift, launch * 0.16);
    cat.hurtT = cat.stats.hurt;
    cat.state = 'hurt';
    hitStop = Math.max(hitStop, dmg > 20 ? 0.05 : 0.03);
  }
  if (cat.hp <= 0) killCat(cat);
}

function hurtPlayer(amount, attacker, heavy) {
  if (player.iframe > 0 || player.dead || mode !== 'play' || ending) return;
  const fromX = attacker ? attacker.x : player.x;
  const fromZ = attacker ? attacker.z : player.z + 1;
  const toX = fromX - player.x;
  const toZ = fromZ - player.z;
  const toL = Math.hypot(toX, toZ) || 1;
  const face = forwardFromYaw(player.yaw);
  const faceDot = (face.x * toX + face.z * toZ) / toL;
  const awayX = (player.x - fromX) / toL;
  const awayZ = (player.z - fromZ) / toL;
  let dealt = amount;
  const blocking = player.blockHeld && player.grounded && player.dodgeT <= 0 && !player.atk && faceDot > 0.2;
  if (blocking) {
    const perfect = player.blockT < 0.14;
    if (perfect) {
      dealt = 0;
      player.ki = Math.min(100, player.ki + 16);
      player.iframe = 0.22;
      callout('COUNTER!');
      sfx('counter');
      shake = Math.max(shake, 0.16);
      if (attacker && !attacker.dead) {
        attacker.hurtT = 0.9;
        attacker.state = 'hurt';
        attacker.vx = -awayX * 7;
        attacker.vz = -awayZ * 7;
        attacker.flash = 0.12;
      }
    } else {
      dealt = Math.max(1, Math.round(amount * (heavy ? 0.35 : 0.2)));
      player.ki = Math.min(100, player.ki + 5);
      player.iframe = 0.12;
      sfx('block');
    }
    player.vx += awayX * 2.2;
    player.vz += awayZ * 2.2;
  } else {
    player.iframe = heavy ? 0.7 : 0.6;
    player.atk = null;
    player.queue = false;
    combo = 0;
    player.vx += awayX * (heavy ? 9 : 5);
    player.vz += awayZ * (heavy ? 9 : 5);
    player.vy = Math.max(player.vy, heavy ? 5 : 3.2);
    sfx('hurt');
    shake = Math.max(shake, heavy ? 0.38 : 0.26);
    hitStop = Math.max(hitStop, 0.04);
  }
  if (dealt > 0) {
    player.hp = Math.max(0, player.hp - dealt);
    floatText(player.x, 1.6, player.z, `-${dealt}`, 'bad');
  }
  if (player.hp <= 0) {
    player.dead = true;
    player.hp = 0;
    ending = 'lose';
    endDelay = 0.95;
    callout('DEFEATED');
    sfx('lose');
  }
}

function softAim() {
  let best = null;
  let bestD = 4.3;
  const face = forwardFromYaw(player.yaw);
  for (const cat of cats) {
    if (cat.dead) continue;
    const dx = cat.x - player.x;
    const dz = cat.z - player.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.001 || dist >= bestD) continue;
    const dot = (dx * face.x + dz * face.z) / dist;
    if (dot > 0.02) {
      best = cat;
      bestD = dist;
    }
  }
  if (!best) {
    for (const cat of cats) {
      if (cat.dead) continue;
      const dist = Math.hypot(cat.x - player.x, cat.z - player.z);
      if (dist < 2.15 && dist < bestD) {
        best = cat;
        bestD = dist;
      }
    }
  }
  if (best) player.yaw = Math.atan2(best.x - player.x, best.z - player.z);
}

function startAttack(index) {
  const data = ATTACKS[index];
  softAim();
  player.atk = { i: index, t: 0, dur: data.dur, hit: new Set(), vfx: false, data };
  player.queue = false;
  player.comboStep = (index + 1) % ATTACKS.length;
  player.comboTimer = 0.82;
  const face = forwardFromYaw(player.yaw);
  player.vx += face.x * data.lunge;
  player.vz += face.z * data.lunge;
}

function tryAttack() {
  if (mode !== 'play' || player.dead || ending) return false;
  if (player.dodgeT > 0) return false;
  if (player.blockHeld && player.grounded && !player.atk) return false;
  if (player.atk) {
    if (player.atk.t > player.atk.dur * 0.36) player.queue = true;
    return true;
  }
  const index = player.comboTimer > 0 ? player.comboStep : 0;
  startAttack(index);
  return true;
}

function tryJump() {
  if (mode !== 'play' || player.dead || ending) return false;
  if (player.grounded || player.coyote > 0) {
    player.jumps = 1;
    player.vy = 9.1;
    player.grounded = false;
    player.coyote = 0;
    player.jumpBuffer = 0;
    sfx('jump');
    return true;
  }
  if (player.jumps < 2) {
    player.jumps = 2;
    player.vy = 8.1;
    sfx('jump');
    return true;
  }
  player.jumpBuffer = 0.14;
  return false;
}

function tryDodge() {
  if (mode !== 'play' || player.dead || ending) return false;
  if (player.dodgeT > 0 || player.dodgeCd > 0) return false;
  const move = readMove();
  const basis = cameraBasis();
  let dx = basis.fx * move.f + basis.rx * move.s;
  let dz = basis.fz * move.f + basis.rz * move.s;
  const len = Math.hypot(dx, dz);
  if (len < 0.2) {
    const face = forwardFromYaw(player.yaw);
    dx = face.x;
    dz = face.z;
  } else {
    dx /= len;
    dz /= len;
    player.yaw = Math.atan2(dx, dz);
  }
  player.dodgeX = dx;
  player.dodgeZ = dz;
  player.dodgeT = player.dodgeDur;
  player.dodgeCd = 0.56;
  player.iframe = Math.max(player.iframe, 0.3);
  player.atk = null;
  player.queue = false;
  player.vy = Math.max(player.vy, 2.4);
  sfx('dodge');
  burst(player.x, 0.2, player.z, 0xd9cbb8, 6, 2.4);
  return true;
}

function thunderStrike() {
  const face = forwardFromYaw(player.yaw);
  sfx('thunder');
  callout('THUNDER!');
  shake = Math.max(shake, 0.34);
  hitStop = Math.max(hitStop, 0.055);
  player.iframe = Math.max(player.iframe, 0.16);
  for (let i = 0; i < 6; i++) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? 0xfff6d0 : 0xbff6ff,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 2.4), material);
    const dist = 0.7 + i * 0.62;
    const side = (i - 2.5) * 0.42;
    const rx = -face.z;
    const rz = face.x;
    mesh.position.set(player.x + face.x * dist + rx * side, 1.15, player.z + face.z * dist + rz * side);
    mesh.lookAt(player.x, 1.15, player.z);
    scene.add(mesh);
    slashes.push({ mesh, age: 0, life: 0.24 });
  }
  for (const cat of cats) {
    if (cat.dead) continue;
    const dx = cat.x - player.x;
    const dz = cat.z - player.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.15 || dist > 4.9) continue;
    if ((dx * face.x + dz * face.z) / dist > 0.22) hitCat(cat, 38, 8.5, 3.4);
  }
  burst(player.x + face.x * 1.4, 1, player.z + face.z * 1.4, 0xbff6ff, 12, 4.5);
}

function trySpecial() {
  if (mode !== 'play' || player.dead || ending) return false;
  if (player.specialCd > 0) return false;
  if (player.ki < 40) {
    sfx('deny');
    return true;
  }
  player.ki -= 40;
  player.specialCd = 0.85;
  player.atk = null;
  thunderStrike();
  return true;
}

function applyAttack(atk) {
  const data = atk.data;
  const face = forwardFromYaw(player.yaw);
  for (const cat of cats) {
    if (cat.dead || atk.hit.has(cat)) continue;
    const dx = cat.x - player.x;
    const dz = cat.z - player.z;
    const dist = Math.hypot(dx, dz);
    const reach = data.range + cat.radius * 0.65;
    let hit = false;
    if (data.aoe) hit = dist <= reach;
    else if (dist > 0.001) {
      const along = dx * face.x + dz * face.z;
      const side = Math.abs(dx * face.z - dz * face.x);
      hit = along > -0.2 && along < reach && side < data.radius + cat.radius * 0.35;
    }
    if (hit) {
      atk.hit.add(cat);
      hitCat(cat, data.dmg, data.knock, data.launch);
    }
  }
}

function spawnSlash(aoe) {
  const face = forwardFromYaw(player.yaw);
  const geo = aoe
    ? new THREE.TorusGeometry(1.25, 0.055, 6, 20, Math.PI * 1.7)
    : new THREE.TorusGeometry(0.86, 0.05, 6, 16, Math.PI * 0.9);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
    color: 0xfff1c2, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false,
  }));
  mesh.position.set(player.x + face.x * (aoe ? 0.1 : 0.85), 1.05, player.z + face.z * (aoe ? 0.1 : 0.85));
  mesh.rotation.y = player.yaw;
  mesh.rotation.x = aoe ? Math.PI / 2 : 1.05;
  mesh.rotation.z = aoe ? 0 : (player.atk && player.atk.i % 2 ? 0.4 : -0.4);
  scene.add(mesh);
  slashes.push({ mesh, age: 0, life: 0.16 });
}

function beginCatAttack(cat) {
  cat.state = 'attack';
  cat.atkT = 0;
  cat.didHit = false;
  if (cat.boss) {
    cat.step = (cat.step + 1) % 3;
    cat.pattern = ['claw', 'slam', 'leap'][cat.step];
  } else if (cat.stats.leap) cat.pattern = 'leap';
  else if (cat.stats.scale > 1.2 && Math.random() < 0.5) cat.pattern = 'slam';
  else cat.pattern = 'claw';
  cat.lockX = player.x;
  cat.lockZ = player.z;
  cat.windup = cat.pattern === 'slam' ? cat.stats.windup + 0.12 : cat.stats.windup;
  cat.ring.material.color.set(cat.pattern === 'slam' ? 0xff2a2a : 0xff7744);
}

function catTryHit(cat) {
  if (cat.didHit || player.dead) return;
  const scale = cat.stats.scale;
  if (cat.pattern === 'slam') {
    if (Math.hypot(player.x - cat.x, player.z - cat.z) < 1.15 + 1.35 * scale) {
      cat.didHit = true;
      hurtPlayer(cat.stats.damage + 4, cat, true);
      shake = Math.max(shake, 0.3);
    }
    return;
  }
  if (cat.pattern === 'leap') {
    if (Math.hypot(player.x - cat.x, player.z - cat.z) < 0.8 + 0.5 * scale) {
      cat.didHit = true;
      hurtPlayer(cat.stats.damage, cat, false);
    }
    return;
  }
  const face = forwardFromYaw(cat.yaw);
  const hx = cat.x + face.x * 0.55 * scale;
  const hz = cat.z + face.z * 0.55 * scale;
  if (Math.hypot(player.x - hx, player.z - hz) < 0.7 + 0.36 * scale) {
    cat.didHit = true;
    hurtPlayer(cat.stats.damage, cat, false);
  }
}

function separate(entity) {
  for (const prop of props) {
    const dx = entity.x - prop.x;
    const dz = entity.z - prop.z;
    const dist = Math.hypot(dx, dz);
    const min = prop.r + (entity.radius || 0.42);
    if (dist < min && dist > 0.0001) {
      entity.x = prop.x + (dx / dist) * min;
      entity.z = prop.z + (dz / dist) * min;
    }
  }
  const flat = Math.hypot(entity.x, entity.z);
  const limit = ARENA_R - (entity.radius || 0.3) * 0.2;
  if (flat > limit) {
    entity.x = (entity.x / flat) * limit;
    entity.z = (entity.z / flat) * limit;
  }
}

function updateCat(cat, dt) {
  if (cat.remove) return;
  if (cat.dead) {
    cat.deadT += dt;
    cat.group.position.set(cat.x, -cat.deadT * 0.8, cat.z);
    cat.group.rotation.z = cat.deadT * 4;
    const s = cat.stats.scale * Math.max(0.01, 1 - cat.deadT * 1.1);
    cat.group.scale.setScalar(s);
    cat.hpGroup.visible = false;
    if (cat.deadT > 0.75) cat.remove = true;
    return;
  }
  if (mode !== 'play' || ending) return;

  if (cat.flash > 0) {
    cat.flash -= dt;
    const on = cat.flash > 0;
    for (const material of cat.mats) material.emissive.setHex(on ? 0xff3344 : material.userData.baseEm || 0);
    if (!on) cat.flash = 0;
  }

  if (cat.state === 'hurt') {
    cat.x += cat.vx * dt;
    cat.z += cat.vz * dt;
    cat.vx *= Math.exp(-7 * dt);
    cat.vz *= Math.exp(-7 * dt);
    cat.lift += -18 * dt;
    if (cat.lift < 0) cat.lift = 0;
    cat.hurtT -= dt;
    if (cat.hurtT <= 0) cat.state = 'chase';
    separate(cat);
    return;
  }

  if (cat.boss && !cat.called && cat.hp <= cat.maxHp * 0.55) {
    cat.called = true;
    spawnQueue.push({ kind: 'alley', t: 0.15, slot: 2 }, { kind: 'pounce', t: 0.4, slot: 3 });
    callout('MORE CATS');
  }

  const dx = player.x - cat.x;
  const dz = player.z - cat.z;
  const dist = Math.hypot(dx, dz) || 0.0001;
  cat.yaw = Math.atan2(dx, dz);

  if (cat.state === 'attack') {
    cat.atkT += dt;
    const activeStart = cat.windup;
    const activeEnd = cat.windup + (cat.pattern === 'leap' ? 0.2 : 0.13);
    const total = activeEnd + cat.stats.recover;
    if (cat.atkT < cat.windup) {
      const u = cat.atkT / cat.windup;
      cat.ring.visible = true;
      const rad = cat.pattern === 'slam' ? 0.7 + u * (1.3 + cat.stats.scale) : 0.45 + u * 0.9;
      cat.ring.scale.setScalar(rad);
      cat.ring.material.opacity = 0.25 + u * 0.6;
      if (cat.pattern === 'claw') {
        const face = forwardFromYaw(cat.yaw);
        cat.ring.position.set(cat.x + face.x * 0.7 * cat.stats.scale, 0.06, cat.z + face.z * 0.7 * cat.stats.scale);
      } else cat.ring.position.set(cat.lockX, 0.06, cat.lockZ);
      cat.hop = cat.pattern === 'slam' ? Math.sin(u * Math.PI) * 0.7 : Math.sin(u * Math.PI) * 0.12;
    } else cat.ring.visible = false;
    if (cat.atkT >= activeStart && cat.atkT <= activeEnd) {
      if (cat.pattern === 'leap') {
        const mx = cat.lockX - cat.x;
        const mz = cat.lockZ - cat.z;
        const md = Math.hypot(mx, mz);
        const step = Math.min(md, 17 * dt);
        if (md > 0.02) {
          cat.x += (mx / md) * step;
          cat.z += (mz / md) * step;
        }
        const u = (cat.atkT - activeStart) / (activeEnd - activeStart);
        cat.hop = Math.sin(u * Math.PI) * 1.05;
      } else if (cat.pattern === 'claw') {
        const face = forwardFromYaw(cat.yaw);
        cat.x += face.x * 3.4 * dt;
        cat.z += face.z * 3.4 * dt;
        cat.hop = 0;
      } else cat.hop = 0;
      catTryHit(cat);
    }
    if (cat.atkT >= total) {
      cat.state = 'chase';
      cat.cool = cat.stats.cool;
      cat.hop = 0;
      cat.ring.visible = false;
    }
    separate(cat);
    return;
  }

  cat.cool -= dt;
  cat.strafeT -= dt;
  if (cat.strafeT <= 0) {
    cat.strafe = -cat.strafe;
    cat.strafeT = 1.1 + Math.random();
  }
  if (dist < cat.stats.range + cat.radius * 0.3 && cat.cool <= 0 && !player.dead) {
    beginCatAttack(cat);
    return;
  }
  const prefer = cat.stats.range * 0.82;
  let mx = 0;
  let mz = 0;
  if (dist > prefer) { mx = dx / dist; mz = dz / dist; }
  else if (dist < prefer * 0.55) { mx = -dx / dist; mz = -dz / dist; }
  else { mx = (-dz / dist) * cat.strafe; mz = (dx / dist) * cat.strafe; }
  cat.x += mx * cat.stats.speed * dt;
  cat.z += mz * cat.stats.speed * dt;
  cat.hop = 0;
  separate(cat);
}

function updateCats(dt) {
  for (const cat of cats) updateCat(cat, dt);
  for (let i = 0; i < cats.length; i++) {
    for (let j = i + 1; j < cats.length; j++) {
      const a = cats[i];
      const b = cats[j];
      if (a.dead || b.dead) continue;
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const dist = Math.hypot(dx, dz);
      const min = (a.radius + b.radius) * 0.72;
      if (dist < min && dist > 0.0001) {
        const push = (min - dist) * 0.5;
        a.x -= (dx / dist) * push;
        a.z -= (dz / dist) * push;
        b.x += (dx / dist) * push;
        b.z += (dz / dist) * push;
      }
    }
  }
  for (let i = cats.length - 1; i >= 0; i--) {
    if (cats[i].remove) {
      removeCat(cats[i]);
      cats.splice(i, 1);
    }
  }
}

function poseCats() {
  for (const cat of cats) {
    if (cat.dead) continue;
    const moving = cat.state === 'chase' ? 1 : 0;
    const swing = Math.sin(time * 10 + cat.phase) * moving;
    cat.legs.forEach((leg, i) => { leg.rotation.x = swing * (i % 2 ? 0.7 : -0.7); });
    cat.tail.rotation.y = Math.sin(time * 6 + cat.phase) * 0.4;
    cat.tail.rotation.x = -0.6;
    const angry = cat.state === 'attack' && cat.atkT < cat.windup;
    cat.head.rotation.x = angry ? -0.45 : Math.sin(time * 3 + cat.phase) * 0.05;
    cat.head.position.z = 0.48 + (angry ? -0.06 : 0);
    cat.group.position.set(cat.x, cat.hop + cat.lift, cat.z);
    cat.group.rotation.y = cat.yaw;
    cat.group.rotation.z = cat.state === 'hurt' ? Math.sin(time * 30) * 0.08 : 0;
    if (!cat.dead) cat.group.scale.setScalar(cat.stats.scale);
    const h = clamp(cat.hp / cat.maxHp, 0, 1);
    cat.hpFill.scale.x = Math.max(0.001, h);
    cat.hpFill.position.x = (h - 1) * 0.37;
    cat.hpGroup.visible = mode === 'play' && (cat.boss || h < 0.999);
    cat.hpGroup.position.set(cat.x, 0.95 * cat.stats.scale + 0.45 + cat.hop, cat.z);
    cat.hpGroup.lookAt(camera.position.x, cat.hpGroup.position.y, camera.position.z);
  }
}

function readMove() {
  let s = 0;
  let f = 0;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) s -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) s += 1;
  if (keys.has('KeyW') || keys.has('ArrowUp')) f += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) f -= 1;
  s += stick.x + gp.x;
  f += stick.y + gp.y;
  const len = Math.hypot(s, f);
  if (len > 1) { s /= len; f /= len; }
  return { s, f };
}

function syncBlock() {
  const next = blockSrc.key || blockSrc.mouse || blockSrc.touch || blockSrc.pad;
  if (next && !player.blockHeld) player.blockT = 0;
  player.blockHeld = next;
}

function updatePlayer(dt) {
  const move = readMove();
  const basis = cameraBasis();
  const wishX = basis.fx * move.f + basis.rx * move.s;
  const wishZ = basis.fz * move.f + basis.rz * move.s;
  const wishLen = Math.hypot(wishX, wishZ);

  if (player.dodgeT > 0) {
    player.dodgeT -= dt;
    const u = clamp(player.dodgeT / player.dodgeDur, 0, 1);
    player.vx = player.dodgeX * (7 + 11 * u);
    player.vz = player.dodgeZ * (7 + 11 * u);
    if (player.dodgeT <= 0) {
      hero.spin.rotation.x = 0;
      player.dodgeT = 0;
    }
  } else if (!player.dead) {
    if (wishLen > 0.15 && !player.atk) player.yaw = dampAngle(player.yaw, Math.atan2(wishX, wishZ), player.grounded ? 14 : 8, dt);
    const response = player.grounded ? (player.atk ? 4 : 14) : 3.2;
    const k = 1 - Math.exp(-response * dt);
    const maxS = player.blockHeld && player.grounded ? 2.7 : 6.55;
    player.vx += (wishX * maxS - player.vx) * k;
    player.vz += (wishZ * maxS - player.vz) * k;
  } else {
    player.vx *= Math.exp(-6 * dt);
    player.vz *= Math.exp(-6 * dt);
  }

  player.dodgeCd = Math.max(0, player.dodgeCd - dt);
  player.specialCd = Math.max(0, player.specialCd - dt);
  player.iframe = Math.max(0, player.iframe - dt);
  player.jumpBuffer = Math.max(0, player.jumpBuffer - dt);
  if (!player.grounded) player.coyote = Math.max(0, player.coyote - dt);
  if (player.blockHeld && player.grounded && !player.atk) player.blockT += dt;

  if (player.atk) {
    player.atk.t += dt;
    const atk = player.atk;
    if (!atk.vfx && atk.t >= atk.data.active[0]) {
      atk.vfx = true;
      spawnSlash(!!atk.data.aoe);
      sfx('slash');
      if (atk.data.shuh) callout('SHUH!');
    }
    if (atk.t >= atk.data.active[0] && atk.t <= atk.data.active[1]) applyAttack(atk);
    if (atk.t >= atk.dur) {
      player.atk = null;
      if (player.queue) {
        player.queue = false;
        startAttack(player.comboStep);
      }
    }
  } else if (player.comboTimer > 0) {
    player.comboTimer -= dt;
    if (player.comboTimer <= 0) player.comboStep = 0;
  }

  player.vy += -28 * dt;
  player.vy = Math.max(-24, player.vy);
  const wasGround = player.grounded;
  player.x += player.vx * dt;
  player.z += player.vz * dt;
  player.y += player.vy * dt;
  if (player.y <= 0 && player.vy <= 0) {
    const landed = !wasGround;
    player.y = 0;
    player.vy = 0;
    player.grounded = true;
    player.jumps = 0;
    player.coyote = 0.12;
    if (landed && player.jumpBuffer > 0) tryJump();
    if (landed && Math.abs(player.vy) < 1) { /* kept for land dust below */ }
    if (landed) burst(player.x, 0.05, player.z, 0xcbbba6, 4, 1.5);
  } else {
    if (wasGround) player.coyote = 0.12;
    player.grounded = false;
  }
  separate(player);
  const minPlayer = 0.72;
  for (const cat of cats) {
    if (cat.dead) continue;
    const dx = cat.x - player.x;
    const dz = cat.z - player.z;
    const dist = Math.hypot(dx, dz);
    const min = minPlayer + cat.radius * 0.25;
    if (dist < min && dist > 0.0001) {
      cat.x += (dx / dist) * (min - dist) * 0.75;
      cat.z += (dz / dist) * (min - dist) * 0.75;
    }
  }

  player.speed = Math.hypot(player.vx, player.vz);
  if (!player.dead && !ending) player.ki = Math.min(100, player.ki + dt * 3.4);
  if (combo > 0) {
    comboTimer -= dt;
    if (comboTimer <= 0) combo = 0;
  }
  player.step -= dt;
  if (player.step <= 0 && player.grounded && player.speed > 3.2 && player.dodgeT <= 0 && !player.dead) {
    player.step = 0.28;
    burst(player.x, 0.08, player.z, 0xcbbba6, 2, 1.1);
  }
}

function updatePickups(dt) {
  for (let i = pickups.length - 1; i >= 0; i--) {
    const pickup = pickups[i];
    pickup.age += dt;
    pickup.mesh.position.y = 0.42 + Math.sin(time * 4 + pickup.x) * 0.08;
    pickup.mesh.rotation.y += dt * 2;
    const dist = Math.hypot(player.x - pickup.x, player.z - pickup.z);
    if (!player.dead && dist < 1.05) {
      if (pickup.type === 'heal') {
        player.hp = Math.min(player.maxHp, player.hp + 24);
        floatText(pickup.x, 1.2, pickup.z, '+24', 'heal');
      } else {
        player.ki = Math.min(100, player.ki + 25);
        floatText(pickup.x, 1.2, pickup.z, 'KI', 'heal');
      }
      sfx('heal');
      scene.remove(pickup.mesh);
      pickup.mesh.material.dispose();
      pickups.splice(i, 1);
      continue;
    }
    if (pickup.age > pickup.life) {
      scene.remove(pickup.mesh);
      pickup.mesh.material.dispose();
      pickups.splice(i, 1);
    }
  }
}

function updateSpawns(dt) {
  for (const item of spawnQueue) item.t -= dt;
  const ready = spawnQueue.filter((item) => item.t <= 0);
  spawnQueue = spawnQueue.filter((item) => item.t > 0);
  for (const item of ready) spawnCat(item.kind, item.slot);
}

function updateWaves(dt) {
  updateSpawns(dt);
  if (ending || waveIndex < 0) return;
  const living = cats.some((cat) => !cat.dead);
  if (!living && spawnQueue.length === 0) {
    if (waveIndex >= WAVES.length - 1) {
      between += dt;
      if (between > 0.55) win();
      return;
    }
    if (!announcedClear) {
      announcedClear = true;
      callout('WAVE CLEAR');
      score += 220;
      sfx('start');
    }
    between += dt;
    if (between > 1.15) beginWave();
  } else between = 0;
}

function beginWave() {
  waveIndex += 1;
  between = 0;
  announcedClear = false;
  if (waveIndex >= WAVES.length) {
    win();
    return;
  }
  const list = WAVES[waveIndex];
  callout(list[0] === 'boss' ? 'BOSS · MOMO' : `WAVE ${waveIndex + 1} / ${WAVES.length}`);
  spawnQueue = list.map((kind, i) => ({ kind, t: 0.35 + i * 0.32, slot: i }));
  if (waveIndex === 0) {
    showHint(touchOn
      ? 'Stick to move. SLASH chains hits. BLOCK, DODGE, JUMP, and KI.'
      : 'WASD move · Space jump · J slash · K block · L dodge · U thunder');
  }
}

function win() {
  if (ending) return;
  ending = 'win';
  cleared = true;
  endDelay = 1.15;
  score += 500;
  callout('COURTYARD CLEAR');
  sfx('win');
  burst(player.x, 1.2, player.z, 0xf3b7c8, 16, 4);
}

function updateBuffers(dt) {
  buffer.attack = Math.max(0, buffer.attack - dt);
  buffer.jump = Math.max(0, buffer.jump - dt);
  buffer.dodge = Math.max(0, buffer.dodge - dt);
  buffer.special = Math.max(0, buffer.special - dt);
  if (buffer.attack > 0 && tryAttack()) buffer.attack = 0;
  if (buffer.jump > 0 && tryJump()) buffer.jump = 0;
  if (buffer.dodge > 0 && tryDodge()) buffer.dodge = 0;
  if (buffer.special > 0 && trySpecial()) buffer.special = 0;
}

function easeRot(obj, x, y, z, dt, speed) {
  const k = 1 - Math.exp(-speed * dt);
  obj.rotation.x += (x - obj.rotation.x) * k;
  obj.rotation.y += (y - obj.rotation.y) * k;
  obj.rotation.z += (z - obj.rotation.z) * k;
}

function updateHeroVisual(dt) {
  hero.root.position.set(player.x, player.y, player.z);
  hero.root.rotation.y = player.yaw;
  const run = player.grounded && player.dodgeT <= 0 ? clamp(player.speed / 5.5, 0, 1) : 0;
  const swing = Math.sin(time * (7 + run * 6)) * run;
  let legL = swing * 0.85;
  let legR = -swing * 0.85;
  let armL = -swing * 0.45;
  let armR = 0.35 + swing * 0.2;
  let armRZ = -0.15;
  let armRY = 0.15;
  if (!player.grounded) {
    legL = -0.7;
    legR = -0.45;
    armL = -0.8;
    armR = -0.5;
  }
  if (player.atk) {
    const u = clamp(player.atk.t / player.atk.dur, 0, 1);
    const s = Math.sin(Math.min(1, u * 1.15) * Math.PI);
    const index = player.atk.i;
    if (index === 0) {
      armR = -0.2 - s * 1.35;
      armRY = 0.15;
      armRZ = -0.1;
    } else if (index === 1) {
      legR = -1.25 * s;
      armR = -0.4;
      armL = -0.7 * s;
    } else if (index === 2) {
      armR = -2.15 + s * 1.7;
      armRY = -0.35;
      armRZ = -0.25;
    } else {
      armR = -1.35;
      armRZ = -0.9;
      hero.spin.rotation.y = u * Math.PI * 2;
    }
  } else hero.spin.rotation.y = 0;
  if (player.blockHeld && player.grounded && !player.atk && player.dodgeT <= 0) {
    armL = -1.25;
    armR = -1.25;
    armRY = 0.2;
    armRZ = -0.35;
  }
  if (player.dodgeT > 0) {
    const u = 1 - player.dodgeT / player.dodgeDur;
    hero.spin.rotation.x = u * Math.PI * 2;
  } else hero.spin.rotation.x = 0;
  if (player.dead) {
    hero.root.rotation.z = Math.min(1.25, (hero.root.rotation.z || 0) + dt * 3);
  } else hero.root.rotation.z = 0;
  if (ending === 'win' && !player.atk) armR = -2.4;
  easeRot(hero.legL, legL, 0, 0, dt, 16);
  easeRot(hero.legR, legR, 0, 0, dt, 16);
  easeRot(hero.armL, armL, 0, 0.1, dt, 16);
  easeRot(hero.armR, armR, armRY, armRZ, dt, 18);
  hero.tail.rotation.y = Math.sin(time * (player.speed > 1 ? 10 : 3.2)) * 0.45;
  hero.tail.rotation.x = -0.85;
  hero.earL.rotation.z = 0.35 + Math.sin(time * 3) * 0.05;
  hero.earR.rotation.z = -0.35 - Math.sin(time * 3) * 0.05;
  hero.model.position.y = Math.sin(time * 2.3) * 0.02;
  const blocking = player.blockHeld && player.grounded && player.dodgeT <= 0 && !player.atk && mode === 'play';
  hero.shield.visible = blocking;
  hero.shield.material.opacity = player.blockT < 0.14 ? 0.7 : 0.28;
  hero.model.visible = player.iframe > 0 && !player.dead ? Math.sin(time * 42) > 0 : true;
  if (heroSword) heroSword.rotation.x = player.atk ? -0.15 : 0.35;
}

function updateDecor(dt) {
  for (const item of decor) {
    item.ang += dt * item.speed;
    item.group.position.set(Math.sin(item.ang) * item.rad, 0, Math.cos(item.ang) * item.rad);
    item.group.rotation.y = item.ang + Math.PI / 2;
    const swing = Math.sin(time * 8 + item.ang);
    item.legs.forEach((leg, i) => { leg.rotation.x = swing * (i % 2 ? 0.45 : -0.45); });
    item.tail.rotation.y = Math.sin(time * 5 + item.ang) * 0.35;
  }
}

function updatePetals(dt) {
  for (let i = 0; i < petalData.length; i++) {
    const petal = petalData[i];
    petal.y -= petal.sp * dt;
    petal.x += Math.sin(time + petal.ph) * 0.25 * dt;
    petal.z += Math.cos(time * 0.7 + petal.ph) * 0.18 * dt;
    if (petal.y < 0) {
      petal.y = 6 + Math.random() * 4;
      petal.x = (Math.random() - 0.5) * 22;
      petal.z = (Math.random() - 0.5) * 22;
    }
    dummy.position.set(petal.x, petal.y, petal.z);
    dummy.rotation.set(time * petal.sp + petal.ph, petal.rot + time * 0.4, petal.ph);
    dummy.scale.setScalar(petal.s);
    dummy.updateMatrix();
    petals.setMatrixAt(i, dummy.matrix);
  }
  petals.instanceMatrix.needsUpdate = true;
}

function updateSparks(dt) {
  for (let i = sparks.length - 1; i >= 0; i--) {
    const spark = sparks[i];
    spark.age += dt;
    spark.vy -= 14 * dt;
    spark.mesh.position.x += spark.vx * dt;
    spark.mesh.position.y += spark.vy * dt;
    spark.mesh.position.z += spark.vz * dt;
    const k = Math.max(0.01, 1 - spark.age / spark.life);
    spark.mesh.scale.setScalar(k);
    if (spark.age >= spark.life) {
      spark.mesh.visible = false;
      sparkPool.push(spark.mesh);
      sparks.splice(i, 1);
    }
  }
}

function updateSlashes(dt) {
  for (let i = slashes.length - 1; i >= 0; i--) {
    const slash = slashes[i];
    slash.age += dt;
    const k = 1 - slash.age / slash.life;
    slash.mesh.material.opacity = Math.max(0, k);
    slash.mesh.scale.setScalar(1 + (1 - k) * 0.25);
    if (slash.age >= slash.life) {
      scene.remove(slash.mesh);
      slash.mesh.geometry.dispose();
      slash.mesh.material.dispose();
      slashes.splice(i, 1);
    }
  }
}

function updateFloaters(dt) {
  for (let i = floaters.length - 1; i >= 0; i--) {
    const item = floaters[i];
    item.age += dt;
    item.y += dt * 0.8;
    const projected = new THREE.Vector3(item.x, item.y, item.z).project(camera);
    if (projected.z > 1) item.el.style.opacity = '0';
    else {
      item.el.style.opacity = String(Math.max(0, 1 - item.age / item.life));
      item.el.style.left = `${(projected.x * 0.5 + 0.5) * window.innerWidth}px`;
      item.el.style.top = `${(-projected.y * 0.5 + 0.5) * window.innerHeight}px`;
    }
    if (item.age >= item.life) {
      item.el.remove();
      floaters.splice(i, 1);
    }
  }
}

function snapCamera() {
  placeCamera(1);
  camera.position.copy(desired);
  lookSm.copy(look);
  camera.lookAt(lookSm);
}

function placeCamera(alpha) {
  const dist = mode === 'menu' ? 6.1 : 7.15;
  const height = mode === 'menu' ? 2.45 : 3.85;
  const bx = Math.sin(cam.yaw);
  const bz = Math.cos(cam.yaw);
  const focusX = player.x - bx * (mode === 'menu' ? 0 : 1.3);
  const focusZ = player.z - bz * (mode === 'menu' ? 0 : 1.3);
  desired.set(focusX + bx * dist, player.y + height, focusZ + bz * dist);
  look.set(focusX, player.y + 1.15, focusZ);
  if (shake > 0) {
    desired.x += (Math.random() - 0.5) * shake;
    desired.y += (Math.random() - 0.5) * shake * 0.6;
    shake = Math.max(0, shake - alpha * 2.2);
  }
}

function updateCamera(dt) {
  if (mode === 'menu') cam.yaw += dt * (reduceMotion ? 0.05 : 0.18);
  placeCamera(dt);
  const k = 1 - Math.exp(-5.5 * dt);
  camera.position.lerp(desired, k);
  lookSm.lerp(look, k);
  camera.lookAt(lookSm);
  if (sun) {
    sun.position.set(player.x + 8, 16, player.z + 5);
    sun.target.position.set(player.x, 0, player.z);
    sun.target.updateMatrixWorld();
  }
}

function updateHud(dt) {
  const hpRatio = clamp(player.hp / player.maxHp, 0, 1);
  hpFill.style.transform = `scaleX(${hpRatio})`;
  hpText.textContent = String(Math.ceil(player.hp));
  kiFill.style.transform = `scaleX(${clamp(player.ki / 100, 0, 1)})`;
  scorePill.textContent = String(score);
  comboPill.textContent = combo > 1 ? `${combo} HIT` : '';
  comboPill.classList.toggle('on', combo > 1);
  document.body.classList.toggle('low', mode === 'play' && player.hp > 0 && player.hp <= 40);
  waveText.textContent = waveIndex >= 0 ? `WAVE ${Math.min(waveIndex + 1, WAVES.length)} / ${WAVES.length}` : 'WAVE 1 / 5';
  const boss = cats.find((cat) => cat.boss && !cat.dead);
  bossWrap.classList.toggle('hidden', !boss);
  if (boss) bossFill.style.transform = `scaleX(${clamp(boss.hp / boss.maxHp, 0, 1)})`;
  bDodge.classList.toggle('cd', player.dodgeCd > 0);
  bKi.classList.toggle('ready', player.ki >= 40 && player.specialCd <= 0);
  bKi.classList.toggle('cd', player.specialCd > 0 || player.ki < 40);
  if (hintT > 0) {
    hintT -= dt;
    if (hintT <= 0) hintEl.classList.add('hidden');
  }
  if (calloutT > 0) {
    calloutT -= dt;
    if (calloutT <= 0) calloutEl.classList.remove('show');
  }
  const showTouch = touchOn && (mode === 'play' || mode === 'pause');
  touchEl.classList.toggle('hidden', !showTouch);
}

function refreshMenu() {
  bestEl.textContent = best > 0 ? `Best ${best}` : 'Clear the courtyard';
  continueBtn.classList.toggle('hidden', !(started && !cleared && !player.dead && mode === 'menu'));
}

function hideScreens() {
  menuEl.classList.add('hidden');
  pauseEl.classList.add('hidden');
  endEl.classList.add('hidden');
}

function openMenu() {
  mode = 'menu';
  hud.classList.add('hidden');
  touchEl.classList.add('hidden');
  hintEl.classList.add('hidden');
  hideScreens();
  menuEl.classList.remove('hidden');
  for (const item of decor) item.group.visible = true;
  refreshMenu();
  cam.userUntil = 0;
}

function rememberScore() {
  if (score > best) {
    best = score;
    writeSave();
  }
}

function showEnd(kind) {
  rememberScore();
  mode = kind;
  started = false;
  hideScreens();
  endEl.classList.remove('hidden');
  hud.classList.add('hidden');
  document.getElementById('end-title').textContent = kind === 'win' ? 'CLEAR' : 'DEFEATED';
  document.getElementById('end-text').textContent = kind === 'win'
    ? 'The cats scatter into the petals.'
    : 'The courtyard still belongs to the cats.';
  document.getElementById('end-score').textContent = `Score ${score} · Best ${best}`;
}

function startRun() {
  clearCombat();
  ending = null;
  endDelay = 0;
  announcedClear = false;
  between = 0;
  waveIndex = -1;
  score = 0;
  combo = 0;
  comboTimer = 0;
  player.x = 0;
  player.y = 0;
  player.z = 2.5;
  player.vx = 0;
  player.vy = 0;
  player.vz = 0;
  player.yaw = Math.PI;
  player.hp = player.maxHp;
  player.ki = 45;
  player.dead = false;
  player.atk = null;
  player.queue = false;
  player.comboStep = 0;
  player.comboTimer = 0;
  player.iframe = 0;
  player.dodgeT = 0;
  player.dodgeCd = 0;
  player.specialCd = 0;
  player.jumps = 0;
  player.grounded = true;
  player.blockHeld = false;
  player.blockT = 99;
  blockSrc.key = false;
  blockSrc.mouse = false;
  blockSrc.touch = false;
  started = true;
  cleared = false;
  cam.yaw = 0.62;
  hero.root.rotation.z = 0;
  hero.spin.rotation.set(0, 0, 0);
  for (const item of decor) item.group.visible = false;
  snapCamera();
  mode = 'play';
  hideScreens();
  hud.classList.remove('hidden');
  beginWave();
  canvas.focus();
  ensureAudio();
  sfx('start');
}

function pause() {
  if (mode !== 'play' || ending) return;
  mode = 'pause';
  pauseEl.classList.remove('hidden');
}

function resume() {
  if (mode !== 'pause') return;
  mode = 'play';
  pauseEl.classList.add('hidden');
  canvas.focus();
}

function pollGamepad() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  let pad = null;
  if (pads) {
    for (const item of pads) if (item) { pad = item; break; }
  }
  gp.x = 0;
  gp.y = 0;
  blockSrc.pad = false;
  if (!pad) return;
  const dead = 0.28;
  let ax = pad.axes[0] || 0;
  let ay = pad.axes[1] || 0;
  if (Math.abs(ax) < dead) ax = 0;
  if (Math.abs(ay) < dead) ay = 0;
  if (!stick.active) {
    gp.x = ax;
    gp.y = -ay;
  }
  const edge = (index, name) => {
    const down = !!(pad.buttons[index] && pad.buttons[index].pressed);
    if (down && !gpPrev[index] && mode === 'play') buffer[name] = Math.max(buffer[name], 0.14);
    gpPrev[index] = down;
  };
  edge(0, 'jump');
  edge(1, 'dodge');
  edge(2, 'attack');
  edge(3, 'special');
  edge(7, 'attack');
  blockSrc.pad = !!(pad.buttons[4]?.pressed || pad.buttons[5]?.pressed || pad.buttons[6]?.pressed);
  const start = !!(pad.buttons[9] && pad.buttons[9].pressed);
  if (start && !gpPrev[9]) {
    if (mode === 'play') pause();
    else if (mode === 'pause') resume();
  }
  gpPrev[9] = start;
  syncBlock();
}

function bindInput() {
  window.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.preventDefault();
    keys.add(event.code);
    ensureAudio();
    if ((event.code === 'Enter' || event.code === 'Space') && (mode === 'menu' || mode === 'win' || mode === 'lose')) {
      event.preventDefault();
      startRun();
    }
    if (event.code === 'Escape') {
      if (mode === 'play') pause();
      else if (mode === 'pause') resume();
    }
    if (mode !== 'play') return;
    if (event.code === 'KeyJ') buffer.attack = 0.14;
    if (event.code === 'Space') buffer.jump = 0.14;
    if (event.code === 'KeyL') buffer.dodge = 0.14;
    if (event.code === 'KeyU') buffer.special = 0.14;
    if (event.code === 'KeyK') { blockSrc.key = true; syncBlock(); }
    if (event.code === 'KeyP') pause();
  });
  window.addEventListener('keyup', (event) => {
    keys.delete(event.code);
    if (event.code === 'KeyK') { blockSrc.key = false; syncBlock(); }
  });
  window.addEventListener('blur', () => {
    keys.clear();
    blockSrc.key = false;
    blockSrc.mouse = false;
    blockSrc.touch = false;
    stick.x = 0;
    stick.y = 0;
    stick.active = false;
    syncBlock();
  });

  let drag = null;
  canvas.addEventListener('contextmenu', (event) => event.preventDefault());
  canvas.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') {
      const upper = event.clientY < window.innerHeight * 0.62;
      if (!upper) return;
    }
    if (event.button !== 0 && event.button !== 2) return;
    drag = { id: event.pointerId, x: event.clientX, moved: false, button: event.button, yaw: cam.yaw };
    canvas.setPointerCapture(event.pointerId);
    if (event.button === 2 && mode === 'play') {
      blockSrc.mouse = true;
      syncBlock();
    }
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    if (Math.abs(dx) > 5) drag.moved = true;
    if (drag.moved && drag.button === 0 && mode !== 'menu') {
      cam.yaw = drag.yaw - dx * 0.0075;
      cam.userUntil = performance.now() + 2000;
    }
  });
  canvas.addEventListener('pointerup', (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    if (drag.button === 0 && !drag.moved && mode === 'play' && event.pointerType !== 'touch') buffer.attack = 0.12;
    if (drag.button === 2) { blockSrc.mouse = false; syncBlock(); }
    drag = null;
  });
  canvas.addEventListener('pointercancel', () => {
    blockSrc.mouse = false;
    syncBlock();
    drag = null;
  });

  const buttons = document.querySelectorAll('#buttons button');
  buttons.forEach((button) => {
    const act = button.dataset.act;
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      ensureAudio();
      if (act === 'block') { blockSrc.touch = true; syncBlock(); }
      else if (mode === 'play') buffer[act] = 0.16;
    });
    const release = () => {
      if (act === 'block') { blockSrc.touch = false; syncBlock(); }
    };
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
  });

  stickZone.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    stick.active = true;
    stick.pointer = event.pointerId;
    stick.originX = event.clientX;
    stick.originY = event.clientY;
    stickZone.setPointerCapture(event.pointerId);
    moveStick(event);
  });
  stickZone.addEventListener('pointermove', (event) => {
    if (!stick.active || event.pointerId !== stick.pointer) return;
    moveStick(event);
  });
  const endStick = (event) => {
    if (event && stick.pointer !== undefined && event.pointerId !== stick.pointer) return;
    stick.active = false;
    stick.x = 0;
    stick.y = 0;
    knob.style.left = '45px';
    knob.style.top = '45px';
  };
  stickZone.addEventListener('pointerup', endStick);
  stickZone.addEventListener('pointercancel', endStick);

  document.getElementById('btn-play').addEventListener('click', () => { ensureAudio(); startRun(); });
  continueBtn.addEventListener('click', () => {
    ensureAudio();
    mode = 'play';
    hideScreens();
    hud.classList.remove('hidden');
    for (const item of decor) item.group.visible = false;
    canvas.focus();
  });
  document.getElementById('btn-pause').addEventListener('click', pause);
  document.getElementById('btn-resume').addEventListener('click', resume);
  document.getElementById('btn-retry').addEventListener('click', startRun);
  document.getElementById('btn-again').addEventListener('click', startRun);
  document.getElementById('btn-quit').addEventListener('click', openMenu);
  document.getElementById('btn-end-menu').addEventListener('click', openMenu);
  document.getElementById('btn-mute').addEventListener('click', toggleMute);
  document.getElementById('btn-mute-2').addEventListener('click', toggleMute);
}

function moveStick(event) {
  const dx = event.clientX - stick.originX;
  const dy = event.clientY - stick.originY;
  const max = 52;
  const len = Math.hypot(dx, dy) || 1;
  const clamped = Math.min(max, len);
  const nx = dx / len;
  const ny = dy / len;
  stick.x = clamp(dx / max, -1, 1);
  stick.y = clamp(-dy / max, -1, 1);
  knob.style.left = `${45 + nx * clamped}px`;
  knob.style.top = `${45 + ny * clamped}px`;
}

function buildArena() {
  scene.background = new THREE.Color(0x140c18);
  scene.fog = new THREE.Fog(0x3a2038, 18, 52);

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(80, 24, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color(0x100818) },
        mid: { value: new THREE.Color(0xc45b68) },
        bot: { value: new THREE.Color(0x2a1422) },
      },
      vertexShader: 'varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying vec3 vPos; uniform vec3 top; uniform vec3 mid; uniform vec3 bot; void main(){ float h = normalize(vPos).y; vec3 col = mix(bot, mid, smoothstep(-0.15, 0.18, h)); col = mix(col, top, smoothstep(0.12, 0.72, h)); gl_FragColor = vec4(col, 1.0); }',
    })
  );
  sky.frustumCulled = false;
  scene.add(sky);

  const starPositions = [];
  for (let i = 0; i < 180; i++) {
    const radius = 28 + Math.random() * 24;
    const angle = Math.random() * Math.PI * 2;
    starPositions.push(Math.cos(angle) * radius, 8 + Math.random() * 28, Math.sin(angle) * radius);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xfff6e8, size: 0.12, sizeAttenuation: true }));
  stars.frustumCulled = false;
  scene.add(stars);

  const moon = new THREE.Mesh(new THREE.SphereGeometry(2.2, 20, 16), new THREE.MeshBasicMaterial({ color: 0xfff3cf }));
  moon.position.set(16, 18, -22);
  moon.material.fog = false;
  scene.add(moon);
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: 0xffe2b0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85,
  }));
  moonGlow.position.copy(moon.position);
  moonGlow.scale.set(14, 14, 1);
  scene.add(moonGlow);

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const mountain = new THREE.Mesh(new THREE.ConeGeometry(4 + (i % 3), 7 + (i % 4) * 1.6, 5), std(0x1a1222, 1, 0));
    mountain.position.set(Math.sin(angle) * 30, 2.2, Math.cos(angle) * 30);
    scene.add(mountain);
  }

  const outer = new THREE.Mesh(new THREE.CircleGeometry(46, 40), std(0x241820, 1, 0));
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = -0.05;
  outer.receiveShadow = true;
  scene.add(outer);

  const stone = paintedTexture((g) => {
    g.fillStyle = '#6e655c';
    g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 46; i++) {
      g.fillStyle = `rgba(40,28,26,${0.12 + Math.random() * 0.22})`;
      g.beginPath();
      g.ellipse(Math.random() * 512, Math.random() * 512, 30 + Math.random() * 70, 24 + Math.random() * 48, Math.random() * 3, 0, Math.PI * 2);
      g.fill();
    }
    g.strokeStyle = 'rgba(32,22,20,0.45)';
    g.lineWidth = 4;
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) g.strokeRect(x * 128 + 6, y * 128 + 6, 116, 116);
    }
  }, 5, 5);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(12.2, 48), new THREE.MeshStandardMaterial({ map: stone, color: 0xcec4b8, roughness: 0.96, metalness: 0 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const wood = paintedTexture((g) => {
    g.fillStyle = '#8a5a32';
    g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 14; i++) {
      g.fillStyle = i % 2 ? '#a36b3c' : '#6e4324';
      g.fillRect(0, i * 36, 512, 34);
      g.strokeStyle = 'rgba(40,20,10,0.35)';
      g.strokeRect(0, i * 36, 512, 34);
    }
  }, 2, 2);
  const deck = new THREE.Mesh(new THREE.CircleGeometry(6.4, 40), new THREE.MeshStandardMaterial({ map: wood, roughness: 0.82, metalness: 0.04 }));
  deck.rotation.x = -Math.PI / 2;
  deck.position.y = 0.02;
  deck.receiveShadow = true;
  scene.add(deck);

  const emblem = new THREE.Mesh(new THREE.CircleGeometry(1.4, 32), new THREE.MeshBasicMaterial({ map: emblemTex, transparent: true }));
  emblem.rotation.x = -Math.PI / 2;
  emblem.position.y = 0.04;
  scene.add(emblem);
  const emblemRing = new THREE.Mesh(new THREE.RingGeometry(1.42, 1.55, 40), new THREE.MeshBasicMaterial({ color: COL.cyan, side: THREE.DoubleSide }));
  emblemRing.rotation.x = -Math.PI / 2;
  emblemRing.position.y = 0.045;
  scene.add(emblemRing);

  const woodMat = std(0x5a3a28, 0.8, 0.05);
  const ropeMat = std(0xd7c39a, 0.7, 0.05);
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.15, 6), woodMat);
    post.position.set(Math.sin(angle) * 11.25, 0.55, Math.cos(angle) * 11.25);
    post.castShadow = true;
    scene.add(post);
  }
  for (const y of [0.45, 0.9]) {
    const rope = new THREE.Mesh(new THREE.TorusGeometry(11.25, 0.025, 6, 48), ropeMat);
    rope.rotation.x = Math.PI / 2;
    rope.position.y = y;
    scene.add(rope);
  }

  const vermilion = std(0xd24b3c, 0.55, 0.08);
  const ink = std(0x161616, 0.5, 0.25);
  const torii = new THREE.Group();
  const pillar = new THREE.CylinderGeometry(0.13, 0.16, 3.15, 8);
  const left = new THREE.Mesh(pillar, vermilion);
  left.position.set(-1.2, 1.55, 0);
  const right = left.clone();
  right.position.x = 1.2;
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, 0.28), vermilion);
  lintel.position.y = 3.05;
  const cap = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.16, 0.38), ink);
  cap.position.y = 3.24;
  const tie = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.16, 0.2), vermilion);
  tie.position.y = 2.4;
  torii.add(left, right, lintel, cap, tie);
  torii.position.set(0, 0, -9.55);
  torii.traverse((obj) => { if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; } });
  scene.add(torii);
  props.push({ x: -1.2, z: -9.55, r: 0.38 }, { x: 1.2, z: -9.55, r: 0.38 });

  const bark = std(0x4a3024, 0.9, 0);
  const pinks = [0xf3b7c8, 0xf7c6d4, 0xe889a8];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2 + 0.2;
    const radius = 13.4;
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 1.6, 6), bark);
    trunk.position.y = 0.8;
    trunk.castShadow = true;
    tree.add(trunk);
    for (let p = 0; p < 3; p++) {
      const foliage = new THREE.Mesh(new THREE.SphereGeometry(0.72, 12, 10), std(pinks[p], 0.92, 0));
      foliage.position.set((p - 1) * 0.38, 1.75 + (p % 2) * 0.18, (p - 1) * 0.08);
      foliage.scale.set(1.05, 0.78, 1);
      foliage.castShadow = false;
      foliage.receiveShadow = true;
      tree.add(foliage);
    }
    tree.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
    tree.scale.setScalar(0.9 + (i % 3) * 0.18);
    scene.add(tree);
  }

  const glow = glowTexture();
  [0.55, 1.55, 4.55, 5.65].forEach((angle) => {
    const x = Math.sin(angle) * 10.15;
    const z = Math.cos(angle) * 10.15;
    const group = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.25, 6), woodMat);
    pole.position.y = 0.62;
    pole.castShadow = true;
    const house = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.4, 0.34), std(0xffb15a, 0.4, 0.05, 0xff6a1e));
    house.position.y = 1.42;
    house.material.emissiveIntensity = 0.85;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.22, 4), ink);
    roof.position.y = 1.74;
    roof.rotation.y = Math.PI / 4;
    group.add(pole, house, roof);
    group.position.set(x, 0, z);
    scene.add(group);
    const light = new THREE.PointLight(0xff9444, 18, 9, 2);
    light.position.set(x, 1.5, z);
    scene.add(light);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glow, color: 0xffaa66, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8,
    }));
    sprite.position.set(x, 1.45, z);
    sprite.scale.set(1.6, 1.6, 1);
    scene.add(sprite);
    props.push({ x, z, r: 0.4 });
  });

  const petalGeo = new THREE.PlaneGeometry(0.16, 0.09);
  const petalMat = new THREE.MeshBasicMaterial({ color: 0xffb7c5, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
  petals = new THREE.InstancedMesh(petalGeo, petalMat, 70);
  petals.frustumCulled = false;
  petalData = [];
  for (let i = 0; i < 70; i++) {
    petalData.push({
      x: (Math.random() - 0.5) * 22,
      y: Math.random() * 8,
      z: (Math.random() - 0.5) * 22,
      s: 0.55 + Math.random() * 0.8,
      sp: 0.45 + Math.random() * 0.7,
      ph: Math.random() * Math.PI * 2,
      rot: Math.random() * 6,
    });
  }
  scene.add(petals);

  const sparkGeo = new THREE.SphereGeometry(0.055, 6, 5);
  for (let i = 0; i < 40; i++) {
    const mesh = new THREE.Mesh(sparkGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    mesh.visible = false;
    scene.add(mesh);
    sparkPool.push(mesh);
  }
}

function boot() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, touchOn ? 1.35 : 1.7));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 120);
  scene.add(new THREE.AmbientLight(0xffc8aa, 0.38));
  scene.add(new THREE.HemisphereLight(0xffd0b4, 0x2a1834, 0.85));
  sun = new THREE.DirectionalLight(0xfff0dc, 2.5);
  sun.position.set(8, 16, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(touchOn ? 1024 : 2048, touchOn ? 1024 : 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 40;
  sun.shadow.camera.left = -16;
  sun.shadow.camera.right = 16;
  sun.shadow.camera.top = 16;
  sun.shadow.camera.bottom = -16;
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);
  const rim = new THREE.DirectionalLight(0x9ec8ff, 0.9);
  rim.position.set(-8, 6, 8);
  scene.add(rim);

  blobMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.33, depthWrite: false });
  blobMat.userData.shared = true;
  emblemTex = paintedTexture((g) => {
    g.clearRect(0, 0, 512, 512);
    g.fillStyle = '#141026';
    g.beginPath();
    g.arc(256, 256, 240, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = '#3ed8ea';
    g.lineWidth = 28;
    g.beginPath();
    g.arc(256, 256, 214, 0, Math.PI * 2);
    g.stroke();
    g.fillStyle = '#e7c7a4';
    g.beginPath();
    g.moveTo(168, 230);
    g.lineTo(196, 70);
    g.lineTo(236, 214);
    g.fill();
    g.beginPath();
    g.moveTo(344, 230);
    g.lineTo(316, 70);
    g.lineTo(276, 214);
    g.fill();
    g.fillStyle = '#24160f';
    g.beginPath();
    g.arc(256, 268, 112, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#f0d7b8';
    g.beginPath();
    g.arc(256, 308, 62, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#1a120e';
    g.beginPath();
    g.arc(220, 262, 12, 0, Math.PI * 2);
    g.arc(292, 262, 12, 0, Math.PI * 2);
    g.arc(256, 300, 12, 0, Math.PI * 2);
    g.fill();
  }, 1, 1);
  emblemTex.wrapS = emblemTex.wrapT = THREE.ClampToEdgeWrapping;
  emblemTex.repeat.set(1, 1);

  buildArena();
  buildHero();
  for (const kind of ['alley', 'pounce', 'brute']) {
    const built = buildCat(kind);
    built.ring.visible = false;
    built.hpGroup.visible = false;
    const ang = Math.random() * Math.PI * 2;
    const rad = 3.4 + Math.random() * 1.4;
    built.group.position.set(Math.sin(ang) * rad, 0, Math.cos(ang) * rad);
    decor.push({ ...built, ang, rad, speed: 0.35 + Math.random() * 0.25 });
  }
  bindInput();
  syncMuteLabels();
  refreshMenu();
  snapCamera();
  document.getElementById('boot').hidden = true;

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / Math.max(1, window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta());
    time += dt;
    frames += 1;
    if (hitStop > 0 && !reduceMotion && mode === 'play') {
      hitStop -= dt;
      updatePetals(dt * 0.2);
      updateCamera(dt);
      renderer.render(scene, camera);
      return;
    }
    pollGamepad();
    if (mode === 'play') {
      updateBuffers(dt);
      updatePlayer(dt);
      updateCats(dt);
      updatePickups(dt);
      updateWaves(dt);
      if (ending) {
        endDelay -= dt;
        if (endDelay <= 0) showEnd(ending);
      }
    } else if (mode === 'menu') updateDecor(dt);
    updateHeroVisual(dt);
    poseCats();
    updatePetals(dt);
    updateSparks(dt);
    updateSlashes(dt);
    updateFloaters(dt);
    updateCamera(dt);
    updateHud(dt);
    renderer.render(scene, camera);
  }
  frame();

  if (new URLSearchParams(location.search).has('play')) startRun();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  window.__cocoro = {
    ready: true,
    player,
    cats,
    get mode() { return mode; },
    get score() { return score; },
    get frames() { return frames; },
    start: startRun,
    attack() { buffer.attack = 0.2; },
    jump() { buffer.jump = 0.2; },
    dodge() { buffer.dodge = 0.2; },
    special() { buffer.special = 0.2; },
  };
}

try {
  boot();
} catch (error) {
  console.error(error);
  showBoot('COCORO 3D needs WebGL in this browser.');
}
