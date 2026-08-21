function showLove() {
  document.getElementById("surprise").innerHTML = 
    "💖💍🌹 You are my forever love 💕🎂✨";
}
function showLove() {
  document.getElementById("surprise").innerHTML = 
    "💖💍🌹 You are my forever love 💕🎂✨";

  // Fireworks effect
  for (let i = 0; i < 20; i++) {
    let firework = document.createElement("div");
    firework.className = "heart";
    firework.innerHTML = "💖";
    firework.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 6000);
  }
}
function throwConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
function showPopup() {
  document.getElementById("popup").style.display = "block";
}
