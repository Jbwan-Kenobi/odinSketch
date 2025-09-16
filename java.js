/*document.getElementById("startGame").addEventListener("click", resetGame);

var gridRow = 16

function resetGame() {
    gridRow = prompt("Enter the Grid size, max 100");
}*/

const gridRow = prompt("Enter the Grid size, max 100");
console.log(gridRow)

var gridSize = gridRow * gridRow;

const container = document.getElementById("container");

for (let i = 0; i < gridSize; i++) {
    var div =  document.createElement("div");
    div.classList.add("blocks");
    div.style.flex = `0 0 calc(100% / ${gridRow})`;
    container.appendChild(div);
};

const blocks = document.querySelectorAll("#container div");
document.getElementById("blocks")
blocks.style.opacity = "0.5";

blocks.forEach(div => {
    div.addEventListener("mouseover", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
  });
});