const wishButton = document.getElementById('wishButton');
const loveButton = document.getElementById('loveButton');
const wishText = document.getElementById('wishText');

const messages = [
  'Stay happy, stay blessed, and keep shining ✨',
  'May your dreams come true and your heart stay full of joy 💖',
  'You deserve the world and more, Annu! 🎂',
  'May every day of your life feel as beautiful as your smile 🌸'
];

wishButton.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  wishText.textContent = randomMessage;
});

loveButton.addEventListener('click', () => {
  wishText.textContent = 'Sending you all my love and warm wishes today and always 💗';
});
