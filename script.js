const wishButton = document.getElementById('wishButton');
const loveButton = document.getElementById('loveButton');
const wishText = document.getElementById('wishText');

const messages = [
  'तू हमेशा मुस्कुराती रहे, और जिंदगी तेरे लिए खूबसूरत बनती रहे ✨',
  'तेरी हँसी से घर में खुशियाँ आती हैं, और तेरी खुशियों से सबका दिल मुस्कुराता है 💖',
  'तू हमारी सबसे प्यारी अन्नू है, हमेशा ख़ुश रह और अपनी चमक जारी रख ✨',
  'तुझे जन्मदिन की ढेर सारी शुभकामनाएँ, प्यारी नन्ही परी! 🎂💖'
];

wishButton.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  wishText.textContent = randomMessage;
});

loveButton.addEventListener('click', () => {
  wishText.textContent = 'तुम्हें बहुत सारा प्यार, हँसी, खुशी और ढेर सारा शुभकामनाओं का आशीर्वाद 💗';
});
