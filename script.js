const music = document.getElementById('bg-music');
const video = document.getElementById('bg-video');

// ฟังก์ชันสำหรับเล่นเพลงและวิดีโอ
function playMedia() {
  music.play().catch((e) => console.error(e));
  video.play().catch((e) => console.error(e));
}

// หาและติด event listener ให้ทุกปุ่ม
document.querySelectorAll('.play-btn').forEach((btn) => {
  btn.addEventListener('click', playMedia);
});

// หิมะ (เหมือนเดิม)
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = 3 + Math.random() * 5 + 's';
  snowflake.style.opacity = 0.5 + Math.random() * 0.5;
  snowflake.style.width = snowflake.style.height = 5 + Math.random() * 5 + 'px';
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}
setInterval(createSnowflake, 200);
