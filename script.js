const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");
const resetBtn = document.querySelector("#resetBtn");

const MAX_SIZE = 100;
const CONTAINER_SIZE = 960;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(gridSize) {
  container.innerHTML = "";

  const tileSize = CONTAINER_SIZE / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.width = `${tileSize}px`;
    tile.style.height = `${tileSize}px`;

    tile.addEventListener("mouseenter", () => {
      tile.style.backgroundColor = getRandomColor();
    });

    container.appendChild(tile);
  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Number of tiles per side (max 100): ");

  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > MAX_SIZE) {
    alert("Invalid entry. Choose a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});

resetBtn.addEventListener("click", () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => (tile.style.backgroundColor = "white"));
  createGrid(newSize);
});
