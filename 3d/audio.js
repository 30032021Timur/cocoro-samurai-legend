// Same synthesizer and English voice settings as the root game's audio bus.
export function createAudio() {
  const bus = {
    ctx: null,
    musicGain: null,
    sfxGain: null,
    noise: null,
    mode: 'off',
    musicVol: 0.45,
    sfxVol: 0.8,
    nextTime: 0,
    step: 0,
    voice: true,
    lastSay: 0,
  };

  function ensure() {
    if (bus.ctx) {
      if (bus.ctx.state === 'suspended') bus.ctx.resume();
      return true;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;
    const ctx = new Ctx();
    bus.ctx = ctx;
    bus.musicGain = ctx.createGain();
    bus.sfxGain = ctx.createGain();
    bus.musicGain.gain.value = bus.musicVol;
    bus.sfxGain.gain.value = bus.sfxVol;
    bus.musicGain.connect(ctx.destination);
    bus.sfxGain.connect(ctx.destination);
    const length = Math.floor(ctx.sampleRate);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    bus.noise = buffer;
    bus.nextTime = ctx.currentTime + 0.05;
    return true;
  }

  function setVolumes(music, sfx) {
    bus.musicVol = music;
    bus.sfxVol = sfx;
    if (!bus.ctx) return;
    const now = bus.ctx.currentTime;
    bus.sfxGain.gain.setValueAtTime(sfx, now);
    if (bus.mode !== 'silent') bus.musicGain.gain.setValueAtTime(music, now);
  }

  function setMode(mode) {
    if (!ensure() || bus.mode === mode) return;
    bus.mode = mode;
    const now = bus.ctx.currentTime;
    const level = mode === 'silent' || mode === 'off' ? 0.0001 : bus.musicVol;
    bus.musicGain.gain.cancelScheduledValues(now);
    bus.musicGain.gain.linearRampToValueAtTime(Math.max(0.0001, level), now + 0.18);
  }

  function envelope(time, peak, dur, dest) {
    const gain = bus.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.001, peak), time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    gain.connect(dest);
    return gain;
  }

  function tone(freq, dur, type, peak, slide, dest = bus.sfxGain) {
    if (!bus.ctx) return;
    const now = bus.ctx.currentTime;
    const osc = bus.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), now + dur);
    osc.connect(envelope(now, peak, dur, dest));
    osc.start(now);
    osc.stop(now + dur + 0.02);
  }

  function noise(dur, peak, freq, q = 0.8) {
    if (!bus.ctx || !bus.noise) return;
    const now = bus.ctx.currentTime;
    const src = bus.ctx.createBufferSource();
    src.buffer = bus.noise;
    const filter = bus.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, now);
    filter.Q.value = q;
    src.connect(filter);
    filter.connect(envelope(now, peak, dur, bus.sfxGain));
    src.start(now);
    src.stop(now + dur + 0.02);
  }

  const sfx = {
    swing() { noise(0.09, 0.22, 900, 0.7); tone(220, 0.07, 'triangle', 0.05, 80); },
    slash() { noise(0.12, 0.28, 1400, 0.6); tone(880, 0.09, 'sawtooth', 0.04, 180); },
    hit() { tone(140, 0.09, 'square', 0.08, 60); noise(0.06, 0.2, 400, 1); },
    block() { tone(520, 0.07, 'square', 0.06, 220); tone(180, 0.1, 'triangle', 0.05, 90); },
    perfect() { tone(660, 0.08, 'sine', 0.07, 880); tone(990, 0.12, 'triangle', 0.05); },
    jump() { tone(420, 0.1, 'square', 0.05, 260); },
    land() { noise(0.06, 0.12, 180, 0.8); },
    hurt() { tone(200, 0.18, 'sawtooth', 0.08, 70); },
    ko() { tone(160, 0.35, 'sawtooth', 0.09, 50); },
    coin() { tone(880, 0.06, 'sine', 0.05); tone(1320, 0.08, 'sine', 0.04); },
    heal() { tone(520, 0.08, 'sine', 0.05); tone(780, 0.12, 'sine', 0.04); },
    thunder() { noise(0.2, 0.3, 1600, 0.4); tone(90, 0.22, 'sawtooth', 0.07, 40); tone(640, 0.14, 'square', 0.04, 200); },
    roar() { noise(0.35, 0.25, 140, 0.6); tone(80, 0.4, 'sawtooth', 0.08, 40); },
    boom() { tone(70, 0.4, 'sine', 0.12, 36); noise(0.25, 0.3, 120, 0.5); },
    sheath() { noise(0.05, 0.18, 1800, 2); tone(240, 0.05, 'triangle', 0.04); },
    ui() { tone(620, 0.05, 'sine', 0.04); },
    whoosh() { noise(0.14, 0.16, 700, 0.5); },
    star() { tone(1400, 0.05, 'square', 0.03, 400); },
  };

  function drum(time, accent) {
    const osc = bus.ctx.createOscillator();
    const gain = bus.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(accent ? 150 : 96, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.16);
    gain.gain.setValueAtTime(accent ? 0.55 : 0.28, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.2);
    osc.connect(gain);
    gain.connect(bus.musicGain);
    osc.start(time);
    osc.stop(time + 0.22);
    const src = bus.ctx.createBufferSource();
    src.buffer = bus.noise;
    const filter = bus.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = accent ? 500 : 280;
    const noiseGain = bus.ctx.createGain();
    noiseGain.gain.setValueAtTime(accent ? 0.35 : 0.16, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.07);
    src.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(bus.musicGain);
    src.start(time);
    src.stop(time + 0.08);
  }

  function bell(time, freq, peak = 0.11) {
    const osc = bus.ctx.createOscillator();
    const gain = bus.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 1.02, time);
    osc.frequency.exponentialRampToValueAtTime(freq, time + 0.06);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.42);
    osc.connect(gain);
    gain.connect(bus.musicGain);
    osc.start(time);
    osc.stop(time + 0.45);
  }

  const village = [293.66, 0, 440, 0, 392, 349.23, 523.25, 440];
  const boss = [220, 261.63, 196, 246.94, 174.61, 220, 233.08, 196];

  function tick() {
    if (!bus.ctx || bus.mode === 'off' || bus.mode === 'silent') return;
    const ctx = bus.ctx;
    const stepDur = bus.mode === 'boss' ? 0.28 : 0.42;
    while (bus.nextTime < ctx.currentTime + 0.25) {
      const step = bus.step % 8;
      if (bus.mode === 'boss') {
        drum(bus.nextTime, step % 2 === 0);
        if (boss[step]) bell(bus.nextTime, boss[step], step === 0 ? 0.1 : 0.07);
        if (step === 0) bell(bus.nextTime, 110, 0.06);
      } else {
        if (step === 0 || step === 3 || step === 6) drum(bus.nextTime, step === 0);
        if (village[step]) bell(bus.nextTime, village[step], 0.1);
      }
      bus.nextTime += stepDur;
      bus.step += 1;
    }
  }

  function impact() {
    if (!ensure()) return;
    const now = bus.ctx.currentTime + 0.02;
    [196, 247, 294, 392].forEach((freq, index) => {
      const osc = bus.ctx.createOscillator();
      const gain = bus.ctx.createGain();
      osc.type = index === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(index === 0 ? 0.12 : 0.06, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
      osc.connect(gain);
      gain.connect(bus.sfxGain);
      osc.start(now);
      osc.stop(now + 1.15);
    });
    drum(now, true);
  }

  function say(text) {
    if (!bus.voice || !text) return;
    const now = performance.now();
    if (now - bus.lastSay < 350) return;
    bus.lastSay = now;
    try {
      if (!window.speechSynthesis) return;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.96;
      utter.pitch = 0.8;
      utter.volume = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } catch { /* the original bus swallows speech errors */ }
  }

  return { ensure, setVolumes, setMode, tick, impact, sfx, say, bus };
}

export const BOSS_SAY = {
  kiba: 'Kiba. O.T.D. Warden.',
  goro: 'Goro. O.T.D. General.',
  take: 'Take. O.T.D. Tyrant.',
  kage: 'Kage. O.T.D. Abbot.',
  homa: 'Homa. O.T.D. Flame.',
  yuki: 'Yuki. O.T.D. Lord.',
  neon: 'Neon. O.T.D. Daimyo.',
  ryu: 'Ryu. O.T.D. Drake.',
  kuro: 'Kuro. O.T.D. Captain.',
  fang: 'Fang. O.T.D. Fang.',
  lord: 'Lord O.T.D.',
};
