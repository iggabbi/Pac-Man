const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

const pacManImg = new Image();
pacManImg.src = "pacman.png"; // Altere a imagem do Pac-Man aqui

const ghostImg = new Image();
ghostImg.src = "ghost.png"; // Altere a imagem do fantasma aqui

let pacMan = { x: 50, y: 50, size: 30, speed: 5 };
let ghost = { x: 200, y: 200, size: 30, speed: 3 };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pacManImg, pacMan.x, pacMan.y, pacMan.size, pacMan.size);
    ctx.drawImage(ghostImg, ghost.x, ghost.y, ghost.size, ghost.size);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") pacMan.x += pacMan.speed;
    if (e.key === "ArrowLeft") pacMan.x -= pacMan.speed;
    if (e.key === "ArrowUp") pacMan.y -= pacMan.speed;
    if (e.key === "ArrowDown") pacMan.y += pacMan.speed;
});

function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();
