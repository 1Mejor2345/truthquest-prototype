const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

export const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export const playClick = () => {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch (e) {}
}

export const playCorrect = () => {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.1);
    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch (e) {}
}

export const playIncorrect = () => {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {}
}

export const playCoin = () => {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, audioCtx.currentTime);
    osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {}
}
