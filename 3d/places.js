// Route maps. The hero walks forward along -Z. Each room is a stretch of that route.
export function buildPlace(THREE, level) {
  const section = (level.id - 1) % 5;
  const world = level.world;
  const rooms = level.rooms.length;
  const span = 15 + (section % 3);
  const startZ = 12;
  const length = rooms * span + 6;
  const halfWidth = [6.2, 3.6, 5.2, 4.4, 5.4, 7.2, 4.6, 5.6, 3.8, 7.4][world - 1];
  const phase = section * 1.7 + world * 0.4;
  const amp = [1.6, 3.2, 0.4, 2.4, 1.1][section];
  const freq = [0.045, 0.08, 0.03, 0.06, 0.1][section];
  const flip = section % 2 === 0 ? 1 : -1;

  function centerX(z) {
    const traveled = startZ - z;
    return Math.sin(traveled * freq + phase) * amp * flip;
  }

  function encounterZ(index) {
    return startZ - index * span - span * 0.62;
  }

  function gateZ(index) {
    return startZ - (index + 1) * span + 2.2;
  }

  const group = new THREE.Group();
  group.name = `route-${level.world}-${level.id}`;
  const gates = [];

  const look = WORLD_LOOK[world - 1];
  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(48, 0.4, length + 40),
    new THREE.MeshStandardMaterial({ map: paintTex(THREE, look.bed), color: look.bedTint, roughness: 1 })
  );
  bed.position.set(0, -0.35, startZ - length / 2);
  bed.receiveShadow = true;
  group.add(bed);

  const roadMat = new THREE.MeshStandardMaterial({ map: paintTex(THREE, look.road), color: look.roadTint, roughness: 0.86 });
  const steps = Math.ceil(length / 4);
  for (let i = 0; i <= steps; i++) {
    const z0 = startZ + 2 - i * 4;
    const z1 = z0 - 4;
    const x0 = centerX(z0);
    const x1 = centerX(z1);
    const dx = x1 - x0;
    const dz = z1 - z0;
    const road = new THREE.Mesh(new THREE.BoxGeometry(halfWidth * 2, 0.18, Math.hypot(dx, dz) + 0.5), roadMat);
    road.position.set((x0 + x1) / 2, 0, (z0 + z1) / 2);
    road.rotation.y = Math.atan2(dx, dz);
    road.receiveShadow = true;
    group.add(road);
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.04, Math.hypot(dx, dz) + 0.2),
      new THREE.MeshBasicMaterial({ color: 0xfff6b0 })
    );
    stripe.position.set((x0 + x1) / 2, 0.16, (z0 + z1) / 2);
    stripe.rotation.y = road.rotation.y;
    group.add(stripe);
    if (i % 2 === 0) {
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.55, 3), new THREE.MeshBasicMaterial({ color: 0xfff3a0 }));
      arrow.rotation.x = -Math.PI / 2;
      arrow.position.set(centerX(z0), 0.22, z0);
      group.add(arrow);
    }
  }

  const decor = WORLD_DECOR[world] || WORLD_DECOR[1];
  decor(THREE, group, { centerX, startZ, length, halfWidth, span, rooms, section, flip, encounterZ, gateZ });
  edgeTufts(THREE, group, { centerX, startZ, length, halfWidth }, look.tuft);
  skyline(THREE, group, { startZ, length }, look.far, world === 6 || world === 8);
  const sunBall = new THREE.Mesh(new THREE.SphereGeometry(2.4, 12, 10), new THREE.MeshBasicMaterial({ color: look.sun }));
  sunBall.position.set(16, 24, startZ - 6);
  group.add(sunBall);
  const fx = drift(THREE, look.flake);
  group.add(fx);

  for (let i = 0; i < rooms; i++) {
    const z = gateZ(i);
    const x = centerX(z);
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(halfWidth * 2 + 0.4, 0.28, 0.28),
      new THREE.MeshStandardMaterial({ color: decor.gate || 0xe7c56a, roughness: 0.5, metalness: 0.2, emissive: decor.gateGlow || 0x000000, emissiveIntensity: 0.4 })
    );
    beam.position.set(x, 1.15, z);
    const postL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.4, 0.28), beam.material);
    const postR = postL.clone();
    postL.position.set(x - halfWidth, 1.2, z);
    postR.position.set(x + halfWidth, 1.2, z);
    group.add(beam, postL, postR);
    gates.push({ z, beam });
  }

  const bossZ = encounterZ(rooms - 1);
  if (level.rooms.some((room) => room.boss)) {
    const plaza = new THREE.Mesh(
      new THREE.CylinderGeometry(halfWidth + 1.4, halfWidth + 1.6, 0.22, 6),
      new THREE.MeshStandardMaterial({ color: decor.plaza || look.roadTint, roughness: 0.8 })
    );
    plaza.position.set(centerX(bossZ), 0.08, bossZ);
    group.add(plaza);
  }

  return {
    group,
    halfWidth,
    startZ,
    length,
    blockZ: gateZ(0),
    fx,
    centerX,
    encounter(index, slot, isBoss) {
      const z = encounterZ(Math.max(0, Math.min(rooms - 1, index)));
      const x = centerX(z);
      if (isBoss) return { x, z: z - 1.2 };
      const spread = (slot - 1) * 1.15;
      return { x: x + spread, z: z + ((slot % 2) - 0.5) * 1.4 };
    },
    setRoom(index) {
      const i = Math.max(0, Math.min(rooms - 1, index));
      this.blockZ = gates[i].z - 0.4;
      gates.forEach((gate, n) => { gate.beam.visible = n >= i; });
    },
  };
}

const WORLD_LOOK = [
  { bed: 'grass', bedTint: 0x3fa84a, road: 'stone', roadTint: 0xd7c4a4, tuft: 0x2f9a3a, far: 0x7a9a6a, sun: 0xfff2c4, flake: 0xffb7c8 },
  { bed: 'grass', bedTint: 0x2f9a44, road: 'dirt', roadTint: 0xc4a06a, tuft: 0x3cb85a, far: 0x4e8a48, sun: 0xfff6d0, flake: 0xd8f0a8 },
  { bed: 'stone', bedTint: 0x6a5888, road: 'stone', roadTint: 0xb9a6d4, tuft: 0x8a78c0, far: 0x5a4880, sun: 0xfff0e8, flake: 0xd0b8ff },
  { bed: 'ash', bedTint: 0xc45a28, road: 'ash', roadTint: 0xe8a060, tuft: 0x8a4030, far: 0xa04830, sun: 0xffe0a0, flake: 0xffb060 },
  { bed: 'snow', bedTint: 0xf4fbff, road: 'snow', roadTint: 0xffffff, tuft: 0xd0e8f8, far: 0xc5d8ea, sun: 0xffffff, flake: 0xffffff },
  { bed: 'asphalt', bedTint: 0x2a2048, road: 'asphalt', roadTint: 0x3a3058, tuft: 0xff4fa3, far: 0x241848, sun: 0xffe0ff, flake: 0x7af0ff },
  { bed: 'dirt', bedTint: 0xc4923a, road: 'dirt', roadTint: 0xe8c070, tuft: 0x6a8a38, far: 0x8a6830, sun: 0xfff0c0, flake: 0xf0d090 },
  { bed: 'stone', bedTint: 0x8a9098, road: 'stone', roadTint: 0xd0d4d8, tuft: 0x6a7078, far: 0x5a6068, sun: 0xfff4ee, flake: 0xffc8b8 },
  { bed: 'void', bedTint: 0x5a38a0, road: 'void', roadTint: 0x8a62d0, tuft: 0xd0a0ff, far: 0x3a2870, sun: 0xf0d8ff, flake: 0xe0b0ff },
  { bed: 'stone', bedTint: 0xe8c878, road: 'stone', roadTint: 0xffe6b0, tuft: 0xf0d090, far: 0xc8a060, sun: 0xfff6d8, flake: 0xffe8a8 },
];

function paintTex(THREE, kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const fills = {
    grass: ['#3fa84a', '#2f8a38', '#67c85a'],
    dirt: ['#c4a06a', '#a88448', '#ddc090'],
    stone: ['#c8b8a0', '#a89880', '#e4d8c4'],
    ash: ['#e09058', '#c46838', '#f0b080'],
    snow: ['#ffffff', '#e7f4ff', '#d5e8f8'],
    asphalt: ['#2a2440', '#3a3058', '#ff4fa3'],
    void: ['#6a48b8', '#8a62d8', '#d0a0ff'],
  };
  const palette = fills[kind] || fills.stone;
  g.fillStyle = palette[0];
  g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 18; i++) {
    g.fillStyle = palette[1 + (i % 2)];
    g.fillRect((i * 23) % 112, (i * 17) % 112, 18 + (i % 5) * 4, 14);
  }
  if (kind === 'grass' || kind === 'dirt') {
    g.strokeStyle = 'rgba(40,90,30,0.35)';
    for (let i = 0; i < 12; i++) g.strokeRect(4, i * 10, 120, 8);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 6);
  return tex;
}

function edgeTufts(THREE, group, info, color) {
  const n = 48;
  const geo = new THREE.SphereGeometry(0.35, 6, 5);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 1 }), n);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const z = info.startZ + 2 - (i * (info.length + 6)) / n;
    const side = i % 2 === 0 ? 1 : -1;
    dummy.position.set(info.centerX(z) + side * (info.halfWidth + 0.6), 0.2, z);
    dummy.scale.set(1, 0.6, 1);
    dummy.rotation.set(0, i, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  group.add(mesh);
}

function skyline(THREE, group, info, color, tall) {
  const mat = new THREE.MeshBasicMaterial({ color });
  for (let i = 0; i < 8; i++) {
    const h = (tall ? 10 : 6) + (i % 3) * 2;
    const shape = tall
      ? new THREE.BoxGeometry(3.2, h, 2.4)
      : new THREE.ConeGeometry(3.4, h, 5);
    const mesh = new THREE.Mesh(shape, mat);
    mesh.position.set((i - 3.5) * 8, h / 2 - 1, info.startZ - info.length - 6);
    group.add(mesh);
  }
}

function drift(THREE, color) {
  const n = 36;
  const geo = new THREE.PlaneGeometry(0.16, 0.1);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }), n);
  mesh.frustumCulled = false;
  const bits = [];
  for (let i = 0; i < n; i++) bits.push({ x: (Math.random() - 0.5) * 10, y: Math.random() * 6, z: (Math.random() - 0.5) * 12, sp: 0.4 + Math.random() });
  mesh.userData.bits = bits;
  return mesh;
}

function skipNear(z, encounterZ, rooms, pad = 3.2) {
  for (let i = 0; i < rooms; i++) if (Math.abs(z - encounterZ(i)) < pad) return true;
  return false;
}

const WORLD_DECOR = {
  1(THREE, group, info) {
    houseRow(THREE, group, info, 0xc45a3a, 0x6a3a28, 0x2a2420);
    lanternRow(THREE, group, info, 0xffb15a, 0x5a3a28);
    arch(THREE, group, info, info.encounterZ(info.rooms - 1) - 3, 0xd24b3c, 0x161616);
    treeRow(THREE, group, info, 0xf3b7c8, 0x6a4030);
  },
  2(THREE, group, info) {
    stalkRow(THREE, group, info, 0x7ea85a, 90);
    const z = info.startZ - info.span * (1 + (info.section % Math.max(1, info.rooms - 1)));
    bridge(THREE, group, info, z, 0x8d6a3a, 0x2a6a58);
  },
  3(THREE, group, info) {
    wallRow(THREE, group, info, 0x2a2633, 2.8);
    pillarRow(THREE, group, info, 0x4a4458);
    stairBlock(THREE, group, info, info.startZ - info.span * (info.section % info.rooms) - 4, 0x3a3644);
    lanternRow(THREE, group, info, 0xb48cff, 0x2a2438);
  },
  4(THREE, group, info) {
    lavaSides(THREE, group, info);
    rockRow(THREE, group, info, 0x3a241c);
    bridge(THREE, group, info, info.startZ - info.span * 1.4, 0x5a4038, 0xff4a1a);
  },
  5(THREE, group, info) {
    wallRow(THREE, group, info, 0xe7f4fb, 2.2);
    treeRow(THREE, group, info, 0xd5e8f2, 0x8aa0b0);
    arch(THREE, group, info, info.encounterZ(info.rooms - 1) - 3, 0xf7fbff, 0x9eb4c4);
  },
  6(THREE, group, info) {
    buildings(THREE, group, info);
    neonSigns(THREE, group, info);
    lanternRow(THREE, group, info, 0x22f0ff, 0x202028);
  },
  7(THREE, group, info) {
    wallRow(THREE, group, info, 0x6a5a38, 4.2);
    rockRow(THREE, group, info, 0xe6dcc0);
    arch(THREE, group, info, info.encounterZ(info.rooms - 1) - 2.5, 0xc6a24a, 0x3a2a10);
  },
  8(THREE, group, info) {
    wallRow(THREE, group, info, 0x4a4e55, 3.6);
    stalkRow(THREE, group, info, 0x8a9098, 36, 0.7);
    arch(THREE, group, info, info.encounterZ(info.rooms - 1) - 3, 0x8a3030, 0x1a1c20);
  },
  9(THREE, group, info) {
    voidPier(THREE, group, info);
  },
  10(THREE, group, info) {
    pillarRow(THREE, group, info, 0xe6d2a4);
    bannerRow(THREE, group, info);
    arch(THREE, group, info, info.encounterZ(info.rooms - 1) - 3.2, 0xe0a040, 0x3a2410);
    const throne = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 1.1, 1.2),
      new THREE.MeshStandardMaterial({ color: 0xe6c36a, roughness: 0.45, metalness: 0.35 })
    );
    const z = info.encounterZ(info.rooms - 1) - 3.5;
    throne.position.set(info.centerX(z), 0.55, z);
    group.add(throne);
  },
};

WORLD_DECOR[1].gate = 0xd24b3c;
WORLD_DECOR[2].gate = 0xc6e08a;
WORLD_DECOR[3].gate = 0xb48cff;
WORLD_DECOR[3].gateGlow = 0x6a48aa;
WORLD_DECOR[4].gate = 0xff6a33;
WORLD_DECOR[4].gateGlow = 0xff3a10;
WORLD_DECOR[5].gate = 0xf4fbff;
WORLD_DECOR[6].gate = 0xff3d9a;
WORLD_DECOR[6].gateGlow = 0xff3d9a;
WORLD_DECOR[7].gate = 0xc6a24a;
WORLD_DECOR[8].gate = 0xc45a4a;
WORLD_DECOR[9].gate = 0xd0a0ff;
WORLD_DECOR[9].gateGlow = 0x8040c0;
WORLD_DECOR[10].gate = 0xe6c36a;
WORLD_DECOR[10].plaza = 0xf0e2b8;

function houseRow(THREE, group, info, wall, roof, trim) {
  const wallMat = new THREE.MeshStandardMaterial({ color: wall, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: roof, roughness: 0.7 });
  const trimMat = new THREE.MeshStandardMaterial({ color: trim, roughness: 0.6 });
  const count = info.rooms * 2 + 2;
  for (let i = 0; i < count; i++) {
    const z = info.startZ - 5 - i * ((info.length - 8) / count);
    if (skipNear(z, info.encounterZ, info.rooms, 4)) continue;
    const side = ((i + info.section) % 2 === 0 ? 1 : -1) * info.flip;
    const x = info.centerX(z) + side * (info.halfWidth + 1.8);
    const h = 1.8 + (i % 3) * 0.45;
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, h, 2.4), wallMat);
    body.position.set(x, h / 2, z);
    const top = new THREE.Mesh(new THREE.ConeGeometry(1.7, 0.9, 4), roofMat);
    top.position.set(x, h + 0.4, z);
    top.rotation.y = Math.PI / 4;
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.8, 0.08), trimMat);
    door.position.set(x - side * 1.05, 0.45, z);
    const windowMat = new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffe2a0, emissiveIntensity: 0.6 });
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.35, 0.06), windowMat);
    win.position.set(x - side * 1.12, h * 0.65, z + 0.4);
    group.add(body, top, door, win);
  }
}

function lanternRow(THREE, group, info, glow, pole) {
  const n = info.rooms * 4;
  const geo = new THREE.BoxGeometry(0.22, 0.28, 0.22);
  const mat = new THREE.MeshStandardMaterial({ color: glow, emissive: glow, emissiveIntensity: 0.7, roughness: 0.4 });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.2, 5);
  const poles = new THREE.InstancedMesh(poleGeo, new THREE.MeshStandardMaterial({ color: pole, roughness: 0.8 }), n);
  const dummy = new THREE.Object3D();
  let c = 0;
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 2 - (i * (info.length - 4)) / n;
    const side = (i % 2 === 0 ? 1 : -1) * info.flip;
    const x = info.centerX(z) + side * (info.halfWidth - 0.45);
    dummy.position.set(x, 1.35, z);
    dummy.scale.set(1, 1, 1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(c, dummy.matrix);
    dummy.position.set(x, 0.6, z);
    dummy.updateMatrix();
    poles.setMatrixAt(c, dummy.matrix);
    c += 1;
  }
  mesh.count = c;
  poles.count = c;
  group.add(mesh, poles);
}

function arch(THREE, group, info, z, red, dark) {
  const x = info.centerX(z);
  const mat = new THREE.MeshStandardMaterial({ color: red, roughness: 0.55 });
  const ink = new THREE.MeshStandardMaterial({ color: dark, roughness: 0.5 });
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.2, 0.35), mat);
  const right = left.clone();
  left.position.set(x - 1.5, 1.6, z);
  right.position.set(x + 1.5, 1.6, z);
  const top = new THREE.Mesh(new THREE.BoxGeometry(4, 0.28, 0.4), mat);
  top.position.set(x, 3.15, z);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.18, 0.5), ink);
  cap.position.set(x, 3.35, z);
  group.add(left, right, top, cap);
}

function treeRow(THREE, group, info, pink, bark) {
  const n = 16 + info.section;
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 3 - i * (info.length / n);
    if (skipNear(z, info.encounterZ, info.rooms, 3.5)) continue;
    const side = (i % 2 === 0 ? 1 : -1) * info.flip;
    const x = info.centerX(z) + side * (info.halfWidth + 0.3);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 1.3, 5), new THREE.MeshStandardMaterial({ color: bark, roughness: 0.9 }));
    trunk.position.set(x, 0.7, z);
    const puff = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 6), new THREE.MeshStandardMaterial({ color: pink, roughness: 0.95 }));
    puff.position.set(x, 1.7, z);
    group.add(trunk, puff);
  }
}

function stalkRow(THREE, group, info, color, count, scale = 1) {
  const geo = new THREE.CylinderGeometry(0.05 * scale, 0.07 * scale, 1, 5);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.8 }), count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const z = info.startZ + 1 - (i * (info.length + 4)) / count;
    const side = (i % 2 === 0 ? 1 : -1);
    const jitter = ((i * 17) % 7) * 0.22;
    const x = info.centerX(z) + side * (info.halfWidth + 0.4 + jitter);
    const h = 3.2 + (i % 5) * 0.7;
    dummy.position.set(x, h / 2, z);
    dummy.scale.set(1, h, 1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  group.add(mesh);
}

function bridge(THREE, group, info, z, wood, water) {
  const x = info.centerX(z);
  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(info.halfWidth * 2 + 0.6, 0.16, 5),
    new THREE.MeshStandardMaterial({ color: wood, roughness: 0.75 })
  );
  deck.position.set(x, 0.28, z);
  const under = new THREE.Mesh(
    new THREE.BoxGeometry(info.halfWidth * 2 + 3, 0.08, 7),
    new THREE.MeshStandardMaterial({ color: water, roughness: 0.3, metalness: 0.1, emissive: water, emissiveIntensity: 0.15 })
  );
  under.position.set(x, -0.05, z);
  const railMat = new THREE.MeshStandardMaterial({ color: wood, roughness: 0.7 });
  const railL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 5), railMat);
  const railR = railL.clone();
  railL.position.set(x - info.halfWidth, 0.6, z);
  railR.position.set(x + info.halfWidth, 0.6, z);
  group.add(deck, under, railL, railR);
}

function wallRow(THREE, group, info, color, height) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
  const runs = Math.ceil(info.length / 8);
  for (let i = 0; i < runs; i++) {
    const z = info.startZ - 4 - i * 8;
    const x = info.centerX(z);
    const left = new THREE.Mesh(new THREE.BoxGeometry(0.8, height, 7.2), mat);
    const right = left.clone();
    left.position.set(x - info.halfWidth - 0.5, height / 2, z);
    right.position.set(x + info.halfWidth + 0.5, height / 2, z);
    group.add(left, right);
  }
}

function pillarRow(THREE, group, info, color) {
  const n = info.rooms * 3;
  const geo = new THREE.CylinderGeometry(0.22, 0.26, 3.2, 6);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.6 }), n);
  const dummy = new THREE.Object3D();
  let c = 0;
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 3 - (i * info.length) / n;
    if (skipNear(z, info.encounterZ, info.rooms, 2.4)) continue;
    const side = (i % 2 === 0 ? 1 : -1) * info.flip;
    dummy.position.set(info.centerX(z) + side * (info.halfWidth - 0.6), 1.6, z);
    dummy.scale.set(1, 1, 1);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(c, dummy.matrix);
    c += 1;
  }
  mesh.count = c;
  group.add(mesh);
}

function stairBlock(THREE, group, info, z, color) {
  const x = info.centerX(z);
  for (let s = 0; s < 4; s++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(info.halfWidth * 1.6, 0.16, 0.8),
      new THREE.MeshStandardMaterial({ color, roughness: 0.85 })
    );
    step.position.set(x, 0.12 + s * 0.08, z - s * 0.7);
    group.add(step);
  }
}

function lavaSides(THREE, group, info) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xff4a1a, emissive: 0xff2a08, emissiveIntensity: 0.85, roughness: 0.45 });
  const runs = Math.ceil(info.length / 6);
  for (let i = 0; i < runs; i++) {
    const z = info.startZ - i * 6;
    const x = info.centerX(z);
    const left = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.12, 5.2), mat);
    const right = left.clone();
    left.position.set(x - info.halfWidth - 1.1, -0.02, z);
    right.position.set(x + info.halfWidth + 1.1, -0.02, z);
    group.add(left, right);
  }
}

function rockRow(THREE, group, info, color) {
  const n = 10 + info.section;
  const geo = new THREE.ConeGeometry(0.45, 1.4, 5);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.95 }), n);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 2 - (i * info.length) / n;
    const side = (i % 2 === 0 ? 1 : -1) * info.flip;
    dummy.position.set(info.centerX(z) + side * (info.halfWidth + 0.8), 0.6, z);
    dummy.scale.set(1, 0.8 + (i % 3) * 0.35, 1);
    dummy.rotation.set(0, i, 0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  group.add(mesh);
}

function buildings(THREE, group, info) {
  const n = info.rooms * 2 + 3;
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 4 - i * ((info.length - 6) / n);
    if (skipNear(z, info.encounterZ, info.rooms, 3)) continue;
    const side = ((i + info.section) % 2 === 0 ? 1 : -1) * info.flip;
    const h = 3.5 + (i % 4) * 1.6 + info.section * 0.3;
    const x = info.centerX(z) + side * (info.halfWidth + 1.6);
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, h, 3.2),
      new THREE.MeshStandardMaterial({ color: i % 2 ? 0x1a1a28 : 0x24182e, roughness: 0.7, emissive: 0x120818, emissiveIntensity: 0.3 })
    );
    body.position.set(x, h / 2, z);
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.35, 0.08),
      new THREE.MeshStandardMaterial({ color: i % 2 ? 0x22f0ff : 0xff3d9a, emissive: i % 2 ? 0x22f0ff : 0xff3d9a, emissiveIntensity: 0.9 })
    );
    sign.position.set(x - side * 1.15, 1.6 + (i % 3) * 0.4, z);
    group.add(body, sign);
  }
}

function neonSigns(THREE, group, info) {
  const n = info.rooms * 3;
  const geo = new THREE.BoxGeometry(0.9, 0.22, 0.06);
  const mat = new THREE.MeshStandardMaterial({ color: 0xb6ff4a, emissive: 0xb6ff4a, emissiveIntensity: 0.8 });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const z = info.startZ - (i * info.length) / n;
    const side = (i % 2 === 0 ? 1 : -1);
    dummy.position.set(info.centerX(z) + side * (info.halfWidth + 0.2), 2.2 + (i % 3) * 0.5, z);
    dummy.rotation.set(0, side > 0 ? Math.PI / 2 : -Math.PI / 2, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  group.add(mesh);
}

function voidPier(THREE, group, info) {
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a1840, roughness: 0.5, emissive: 0x401060, emissiveIntensity: 0.25 });
  const edge = new THREE.MeshStandardMaterial({ color: 0xd0a0ff, emissive: 0xd0a0ff, emissiveIntensity: 0.7 });
  const steps = Math.ceil(info.length / 5);
  for (let i = 0; i < steps; i++) {
    const z = info.startZ - i * 5;
    const x = info.centerX(z);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(info.halfWidth * 2.1, 0.16, 3.6), mat);
    slab.position.set(x, 0.2, z);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(info.halfWidth * 2.2, 0.05, 0.12), edge);
    glow.position.set(x, 0.3, z - 1.7);
    group.add(slab, glow);
  }
}

function bannerRow(THREE, group, info) {
  const n = info.rooms * 2;
  const geo = new THREE.PlaneGeometry(0.7, 1.6);
  const mat = new THREE.MeshStandardMaterial({ color: 0xe6c36a, roughness: 0.6, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const z = info.startZ - 2 - (i * info.length) / n;
    const side = (i % 2 === 0 ? 1 : -1) * info.flip;
    dummy.position.set(info.centerX(z) + side * (info.halfWidth - 0.5), 1.5, z);
    dummy.rotation.set(0, side > 0 ? 0.4 : -0.4, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  group.add(mesh);
}
