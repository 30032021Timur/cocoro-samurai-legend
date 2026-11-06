// Procedural fighters matched to the COCORO character sheet: upright Shiba samurai and upright cats.
export function createHero(THREE, { std, addMesh, pivot, scene, blobMat, emblemTex }) {
  const root = new THREE.Group();
  const spin = new THREE.Group();
  const model = new THREE.Group();
  root.add(spin);
  spin.add(model);
  const black = std(0x0c0a09, 0.9, 0);
  const tan = std(0xd0893a, 0.84, 0);
  const cream = std(0xf3e0c4, 0.84, 0);
  const white = std(0xf7f4ef, 0.82, 0);
  const armor = std(0x0a0a0c, 0.42, 0.2);
  const gold = std(0xc9a24a, 0.4, 0.35);
  const red = std(0x6e1218, 0.55, 0);
  const hakama = std(0x121018, 0.86, 0);
  const eyeWhite = std(0xf7f4ef, 0.4, 0.05);

  const legL = pivot(model, -0.16, 0.86, 0);
  const legR = pivot(model, 0.16, 0.86, 0);
  for (const [leg, tanLeg] of [[legL, true], [legR, false]]) {
    addMesh(leg, new THREE.CylinderGeometry(0.09, 0.08, 0.42, 8), armor, 0, -0.18, 0);
    addMesh(leg, new THREE.CylinderGeometry(0.07, 0.06, 0.28, 8), tan, 0, -0.48, 0);
    addMesh(leg, new THREE.SphereGeometry(0.09, 8, 6), tan, 0, -0.64, 0.04);
    if (tanLeg) addMesh(leg, new THREE.TorusGeometry(0.09, 0.02, 6, 8), red, 0, -0.28, 0).rotation.x = Math.PI / 2;
  }

  const torso = addMesh(model, new THREE.SphereGeometry(0.28, 16, 12), black, 0, 1.12, 0);
  torso.scale.set(1.05, 1.15, 0.82);
  const chest = addMesh(model, new THREE.BoxGeometry(0.46, 0.5, 0.28), armor, 0, 1.16, 0.06);
  addMesh(model, new THREE.BoxGeometry(0.48, 0.035, 0.3), gold, 0, 1.38, 0.07);
  addMesh(model, new THREE.BoxGeometry(0.48, 0.035, 0.3), gold, 0, 0.96, 0.07);
  addMesh(model, new THREE.BoxGeometry(0.045, 0.42, 0.04), red, -0.14, 1.16, 0.2);
  addMesh(model, new THREE.BoxGeometry(0.045, 0.42, 0.04), red, 0.14, 1.16, 0.2);
  addMesh(model, new THREE.CylinderGeometry(0.2, 0.26, 0.34, 8), hakama, 0, 0.78, 0);
  const bib = addMesh(model, new THREE.SphereGeometry(0.07, 8, 6), cream, 0, 0.98, 0.18);
  bib.scale.set(1.3, 0.7, 0.4);

  const goldDisc = new THREE.Mesh(new THREE.CircleGeometry(0.125, 20), new THREE.MeshBasicMaterial({ color: 0xe6b84a }));
  goldDisc.position.set(0, 1.2, 0.21);
  model.add(goldDisc);
  const emblem = new THREE.Mesh(new THREE.CircleGeometry(0.09, 20), new THREE.MeshBasicMaterial({ map: emblemTex, color: 0xffffff }));
  emblem.position.set(0, 1.2, 0.22);
  model.add(emblem);
  const ring = addMesh(model, new THREE.TorusGeometry(0.12, 0.018, 6, 16), gold, 0, 1.18, 0.2);
  ring.rotation.x = Math.PI / 2;

  const head = pivot(model, 0, 1.58, 0.02);
  addMesh(head, new THREE.SphereGeometry(0.24, 16, 12), black, 0, 0, 0);
  const cheekL = addMesh(head, new THREE.SphereGeometry(0.08, 8, 6), tan, -0.12, -0.02, 0.12);
  cheekL.scale.set(1, 0.7, 0.6);
  const cheekR = cheekL.clone();
  cheekR.position.x = 0.12;
  head.add(cheekR);
  const muzzle = addMesh(head, new THREE.SphereGeometry(0.11, 10, 8), cream, 0, -0.06, 0.16);
  muzzle.scale.set(1.1, 0.75, 0.85);
  addMesh(head, new THREE.SphereGeometry(0.035, 8, 6), black, 0, -0.04, 0.25);
  for (const side of [-1, 1]) {
    addMesh(head, new THREE.SphereGeometry(0.045, 8, 6), eyeWhite, side * 0.08, 0.04, 0.18);
    addMesh(head, new THREE.SphereGeometry(0.025, 6, 6), black, side * 0.08, 0.04, 0.21);
    const brow = addMesh(head, new THREE.BoxGeometry(0.07, 0.02, 0.02), tan, side * 0.09, 0.1, 0.18);
    brow.rotation.z = side * -0.4;
  }
  const earL = pivot(head, -0.1, 0.16, 0);
  const earR = pivot(head, 0.1, 0.16, 0);
  for (const ear of [earL, earR]) {
    addMesh(ear, new THREE.ConeGeometry(0.07, 0.22, 6), black, 0, 0.1, 0);
    addMesh(ear, new THREE.ConeGeometry(0.035, 0.12, 5), cream, 0, 0.08, 0.02);
  }

  const armL = pivot(model, -0.34, 1.28, 0);
  const armR = pivot(model, 0.34, 1.28, 0);
  for (const arm of [armL, armR]) {
    addMesh(arm, new THREE.SphereGeometry(0.08, 8, 6), armor, 0, 0, 0);
    addMesh(arm, new THREE.TorusGeometry(0.075, 0.012, 5, 8), gold, 0, 0, 0).rotation.x = Math.PI / 2;
    addMesh(arm, new THREE.CylinderGeometry(0.055, 0.05, 0.28, 8), armor, 0, -0.18, 0);
    addMesh(arm, new THREE.TorusGeometry(0.06, 0.015, 5, 8), red, 0, -0.18, 0).rotation.x = Math.PI / 2;
    addMesh(arm, new THREE.SphereGeometry(0.06, 8, 6), tan, 0, -0.34, 0.02);
  }

  const tail = pivot(model, 0, 1.05, -0.22);
  const curl = addMesh(tail, new THREE.TorusGeometry(0.12, 0.045, 8, 12, Math.PI * 1.4), white, 0, 0.12, -0.08);
  curl.rotation.y = Math.PI / 2;
  addMesh(tail, new THREE.SphereGeometry(0.06, 8, 6), white, 0.02, 0.22, -0.02);

  const sheath = addMesh(model, new THREE.BoxGeometry(0.05, 0.62, 0.05), std(0x1a1a1e, 0.4, 0.45), -0.28, 0.95, -0.02);
  sheath.rotation.z = 0.35;
  sheath.rotation.x = 0.4;
  addMesh(model, new THREE.BoxGeometry(0.12, 0.04, 0.08), gold, -0.24, 1.2, 0.02);

  const sword = pivot(armR, 0.02, -0.36, 0.04);
  addMesh(sword, new THREE.BoxGeometry(0.03, 0.55, 0.012), std(0xd9e2ea, 0.2, 0.8), 0, 0.22, 0);
  sword.visible = false;

  const shield = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 18),
    new THREE.MeshBasicMaterial({ color: 0x8cf6ff, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false })
  );
  shield.position.set(0, 1.15, 0.4);
  shield.visible = false;
  model.add(shield);

  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.42, 14), blobMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.03;
  root.add(blob);
  scene.add(root);
  return { root, spin, model, legL, legR, armL, armR, tail, earL, earR, head, shield, blob, sword };
}

export function createFighter(THREE, { std, addMesh, pivot, scene, blobMat }, role, stats) {
  const group = new THREE.Group();
  const fur = std(stats.body, 0.8, 0.02);
  const dark = std(stats.dark, 0.78, 0.04);
  const belly = std(stats.belly, 0.82, 0);
  const armorColor = stats.armor || stats.dark;
  const plate = std(armorColor, 0.42, 0.35);
  const gold = std(0xe6c36a, 0.32, 0.65);

  const legL = pivot(group, -0.12, 0.72, 0);
  const legR = pivot(group, 0.12, 0.72, 0);
  for (const leg of [legL, legR]) {
    addMesh(leg, new THREE.CylinderGeometry(0.07, 0.06, 0.34, 6), plate, 0, -0.16, 0);
    addMesh(leg, new THREE.SphereGeometry(0.07, 6, 5), fur, 0, -0.36, 0.03);
  }
  addMesh(group, new THREE.SphereGeometry(0.22, 12, 10), fur, 0, 0.98, 0).scale.set(1, 1.05, 0.8);
  addMesh(group, new THREE.BoxGeometry(0.36, 0.38, 0.2), plate, 0, 1.0, 0.05);
  const head = pivot(group, 0, 1.32, 0.02);
  addMesh(head, new THREE.SphereGeometry(0.18, 12, 10), fur, 0, 0, 0);
  addMesh(head, new THREE.SphereGeometry(0.07, 8, 6), belly, 0, -0.04, 0.12);
  for (const side of [-1, 1]) {
    addMesh(head, new THREE.SphereGeometry(0.035, 6, 5), std(0xf7f4ef, 0.4, 0), side * 0.06, 0.03, 0.14);
    addMesh(head, new THREE.SphereGeometry(0.02, 5, 5), dark, side * 0.06, 0.03, 0.16);
    const ear = addMesh(head, new THREE.ConeGeometry(0.05, 0.16, 5), fur, side * 0.08, 0.16, 0);
    ear.rotation.z = side * -0.15;
  }
  const armL = pivot(group, -0.26, 1.08, 0);
  const armR = pivot(group, 0.26, 1.08, 0);
  for (const arm of [armL, armR]) {
    addMesh(arm, new THREE.CylinderGeometry(0.045, 0.04, 0.26, 6), plate, 0, -0.14, 0);
    addMesh(arm, new THREE.SphereGeometry(0.05, 6, 5), fur, 0, -0.28, 0);
  }
  const tail = pivot(group, 0, 0.9, -0.16);
  addMesh(tail, new THREE.CylinderGeometry(0.035, 0.02, 0.35, 5), fur, 0, 0.12, -0.08);

  if (role === 'samurai') {
    addMesh(group, new THREE.BoxGeometry(0.4, 0.08, 0.22), std(0xb01c24, 0.45, 0.2), 0, 1.16, 0.08);
    addMesh(armR, new THREE.BoxGeometry(0.03, 0.4, 0.02), std(0xd9e2ea, 0.25, 0.7), 0.02, -0.2, 0.05);
  } else if (role === 'ninja') {
    const scarf = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.45), new THREE.MeshStandardMaterial({ color: 0xc4232e, side: THREE.DoubleSide, roughness: 0.6 }));
    scarf.position.set(0.12, 1.15, -0.12);
    group.add(scarf);
  } else if (role === 'archer') {
    const bow = addMesh(armL, new THREE.TorusGeometry(0.16, 0.02, 6, 10, Math.PI), std(0x8a5a32, 0.6, 0.1), -0.05, -0.2, 0.08);
    bow.rotation.z = Math.PI / 2;
  } else if (role === 'heavy') {
    addMesh(group, new THREE.BoxGeometry(0.5, 0.16, 0.28), gold, 0, 1.2, 0.08);
    const hammer = addMesh(armR, new THREE.BoxGeometry(0.16, 0.16, 0.16), std(0x6a6e74, 0.4, 0.5), 0.08, -0.32, 0.08);
    addMesh(armR, new THREE.CylinderGeometry(0.03, 0.03, 0.28, 5), dark, 0.04, -0.16, 0.06);
    hammer.position.y = -0.34;
  } else if (role === 'assassin') {
    const hood = addMesh(head, new THREE.ConeGeometry(0.16, 0.28, 6), std(0x3a2060, 0.55, 0.1), 0, 0.16, -0.02);
    hood.scale.set(1.1, 1, 1.1);
    addMesh(armR, new THREE.BoxGeometry(0.025, 0.28, 0.015), std(0xc9a6ff, 0.3, 0.4), 0.04, -0.24, 0.06);
  } else if (role === 'general') {
    addMesh(head, new THREE.SphereGeometry(0.2, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.45), gold, 0, 0.06, 0);
    addMesh(head, new THREE.BoxGeometry(0.05, 0.16, 0.08), gold, 0, 0.28, 0);
    const cape = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.7), new THREE.MeshStandardMaterial({ color: 0xb01c24, side: THREE.DoubleSide, roughness: 0.6 }));
    cape.position.set(0, 0.95, -0.2);
    group.add(cape);
  }

  group.scale.setScalar(stats.scale || 1);
  scene.add(group);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.55, 0.7, 24),
    new THREE.MeshBasicMaterial({ color: 0xff5530, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.visible = false;
  scene.add(ring);
  const hpGroup = new THREE.Group();
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.09), new THREE.MeshBasicMaterial({ color: 0x2a1214 }));
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(0.74, 0.09), new THREE.MeshBasicMaterial({ color: role === 'general' ? 0xf0c14a : 0x5ddc6a }));
  fill.position.z = 0.01;
  hpGroup.add(bg, fill);
  scene.add(hpGroup);
  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.36 * (stats.scale || 1), 12), blobMat);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.03;
  group.add(blob);
  return {
    group, head, tail, legs: [legL, legR, armL, armR], ring, hpGroup, hpFill: fill,
    mats: [fur, dark, belly, plate], biped: true,
  };
}
