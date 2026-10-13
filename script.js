// Minimal interactive script: modal, confetti, chime generator
const startButton = document.getElementById('startButton');
const welcomeModal = document.getElementById('welcomeModal');
const wishText = document.getElementById('wishText');
const loveButton = document.getElementById('loveButton');
const img = document.querySelector('.photo-frame img');

// show modal on load
window.addEventListener('DOMContentLoaded', () => {
  // ensure modal is visible (it is by default)
  // mark image loaded effect
  if (img && img.complete) img.classList.add('loaded');
  img && img.addEventListener('load', () => img.classList.add('loaded'));
});

startButton.addEventListener('click', async () => {
  // close modal
  welcomeModal.style.display = 'none';
  // play chimes
  playChimes();
  // start confetti
  startConfetti();
});

loveButton.addEventListener('click', () => {
  wishText.textContent = 'हम सब तुमसे बहुत प्यार करते हैं, अन्नू! 💖';
});

// Short chime melody using WebAudio API (no external file)
function playChimes(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, now + i * 0.25);
      g.gain.setValueAtTime(0, now + i * 0.25);
      g.gain.linearRampToValueAtTime(0.12, now + i * 0.25 + 0.02);
      g.gain.linearRampToValueAtTime(0, now + i * 0.25 + 0.22);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(now + i * 0.25);
      o.stop(now + i * 0.25 + 0.25);
    });
  }catch(e){console.warn('Audio not supported', e)}
}

// Simple canvas confetti
function startConfetti(){
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#ff6bb6','#ffd166','#7dd3fc','#a7f3d0','#c084fc'];

  function rand(min,max){return Math.random()*(max-min)+min}
  function makeParticle(){
    return {
      x: rand(0,W),
      y: rand(-H,0),
      r: Math.floor(rand(6,12)),
      d: rand(2,6),
      color: colors[Math.floor(rand(0,colors.length))],
      tilt: rand(-10,10),
      tiltSpeed: rand(0.05,0.2)
    }
  }
  for(let i=0;i<140;i++) particles.push(makeParticle());

  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tilt * Math.PI / 180);
      ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r*0.6);
      ctx.restore();
      p.y += p.d;
      p.x += Math.sin(p.tilt/20);
      p.tilt += p.tiltSpeed;
      if(p.y>H+20){
        p.x = rand(0,W); p.y = rand(-40,0);
      }
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', ()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight});
}
